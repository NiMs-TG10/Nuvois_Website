"use client"

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3-geo'
import * as topojson from 'topojson-client'

export default function WorldMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  const rotationRef = useRef<[number, number, number]>([-40, -10, 0]) // Start centered near India
  const ptrInteracting = useRef<boolean>(false)
  const ptrStart = useRef<{x: number, y: number}>({ x: 0, y: 0 })
  const rotationStart = useRef<[number, number, number]>([0, 0, 0])
  const landDataRef = useRef<any>(null)
  
  // Ahmedabad Coordinates: [longitude, latitude]
  const markerCoords: [number, number] = [72.5714, 23.0225]

  useEffect(() => {
    // Fetch world topology
    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
      .then(r => r.json())
      .then(world => {
        landDataRef.current = topojson.feature(world, world.objects.countries)
      })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Avoid rapid re-renders on minor subpixel changes from scrollbars
        setDimensions((prev) => {
          if (Math.abs(prev.width - entry.contentRect.width) < 2) return prev
          return {
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          }
        })
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0 || dimensions.height === 0) return

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return

    // Setup high DPI canvas
    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    context.scale(dpr, dpr)

    const projection = d3.geoOrthographic()
      .fitSize([dimensions.width, dimensions.height], { type: "Sphere" })
      .translate([dimensions.width / 2, dimensions.height / 2])
      
    // Scale down slightly to ensure beautiful padding
    projection.scale(projection.scale() * 0.85)

    const path = d3.geoPath(projection, context)
    const graticule = d3.geoGraticule10()

    let animationFrameId: number

    const render = () => {
      context.clearRect(0, 0, dimensions.width, dimensions.height)

      projection.rotate(rotationRef.current)

      // 1. Draw Graticule (Dotted Sphere)
      context.beginPath()
      path(graticule)
      context.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      context.lineWidth = 0.5
      context.setLineDash([1, 4])
      context.stroke()
      context.setLineDash([]) // reset

      // 2. Draw Land Outlines
      if (landDataRef.current) {
        context.beginPath()
        path(landDataRef.current)
        context.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        context.lineWidth = 0.8
        context.stroke()
      }

      // 3. Draw Marker & Update HTML Label
      const center = projection.invert?.([dimensions.width / 2, dimensions.height / 2])
      let isVisible = false
      if (center) {
        const distance = d3.geoDistance(markerCoords, center)
        isVisible = distance < Math.PI / 2
      }

      const projected = projection(markerCoords)
      if (projected && isVisible) {
        const [x, y] = projected
        
        // pulsing dot
        const pulse = Math.sin(Date.now() / 150) * 1.5
        
        // Outer glowing ring
        context.beginPath()
        context.arc(x, y, 6 + Math.max(0, pulse), 0, 2 * Math.PI)
        context.strokeStyle = 'rgba(224, 76, 27, 0.7)'
        context.lineWidth = 1
        context.stroke()

        // Inner solid dot
        context.beginPath()
        context.arc(x, y, 3, 0, 2 * Math.PI)
        context.fillStyle = '#E04C1B'
        context.fill()
        
        if (labelRef.current) {
          labelRef.current.style.left = `${x}px`
          labelRef.current.style.top = `${y}px`
          labelRef.current.style.opacity = '1'
          labelRef.current.style.pointerEvents = 'auto'
        }
      } else {
        if (labelRef.current) {
          labelRef.current.style.opacity = '0'
          labelRef.current.style.pointerEvents = 'none'
        }
      }

      // Auto-rotate if not dragging
      if (!ptrInteracting.current) {
        rotationRef.current[0] -= 0.1
      }

      // Clamp vertical tilt so user can't turn the globe completely upside down
      rotationRef.current[1] = Math.max(-60, Math.min(60, rotationRef.current[1]))

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [dimensions])

  // Handlers for drag
  const handlePointerDown = (e: React.PointerEvent) => {
    ptrInteracting.current = true
    ptrStart.current = { x: e.clientX, y: e.clientY }
    rotationStart.current = [...rotationRef.current]
    if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing'
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!ptrInteracting.current) return
    const dx = e.clientX - ptrStart.current.x
    const dy = e.clientY - ptrStart.current.y
    const sensitivity = 0.25
    
    rotationRef.current = [
      rotationStart.current[0] + dx * sensitivity,
      rotationStart.current[1] - dy * sensitivity,
      rotationStart.current[2]
    ]
  }

  const handlePointerUp = () => {
    ptrInteracting.current = false
    if (canvasRef.current) canvasRef.current.style.cursor = 'grab'
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
      style={{ minHeight: '500px' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {dimensions.width > 0 && (
        <canvas
          ref={canvasRef}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            display: 'block',
          }}
        />
      )}
      
      {/* HTML Overlay for the Label */}
      <div 
        ref={labelRef}
        className="absolute z-10 transition-opacity duration-300 pointer-events-none"
        style={{
          left: '-1000px',
          top: '-1000px',
          transform: 'translate(-100%, -50%)',
          marginLeft: '-15px', // space between dot and line
          opacity: 0
        }}
      >
        {/* Connecting line */}
        <div className="absolute right-[-15px] top-1/2 w-[15px] h-[1px] bg-white/40 transform -translate-y-1/2" />
        
        {/* Label Card */}
        <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 px-4 py-3 rounded-xl shadow-2xl flex flex-col gap-1.5 min-w-[240px]">
          <p className="text-[9px] tracking-[0.2em] text-white/50 uppercase font-semibold">
            Nuvois Base
          </p>
          <p className="text-[13px] text-white/90 font-medium">
            Ahmedabad, India · Remote-first
          </p>
        </div>
      </div>
    </div>
  )
}
