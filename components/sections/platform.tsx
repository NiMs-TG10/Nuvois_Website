"use client";

import { Database, Zap, Target } from "lucide-react";

export default function Platform() {
  const features = [
    {
      icon: Database,
      title: "Pose Estimation API",
      description:
        "Get 3D body measurements from a 2D photo using advanced computer vision.",
    },
    {
      icon: Zap,
      title: "Garment Tagging API",
      description:
        "Turn any product photo into 50+ detailed tags with AI-powered analysis.",
    },
    {
      icon: Target,
      title: "Recommendation Engine",
      description:
        "Serve hyper-personalized results with our vector-based matching system.",
    },
  ];

  // Helper component to render highlighted code line
  const HighlightedCode = () => (
    <pre className="text-sm font-mono leading-relaxed">
      <span className="text-gray-400">{`// Easy integration`}</span>
      <br />
      <span className="text-pink-400">import</span>
      <span className="text-white"> {`{ `}</span>
      <span className="text-cyan-300">StyleAPI</span>
      <span className="text-white"> {`}`}</span>
      <span className="text-pink-400"> from </span>
      <span className="text-yellow-300">'@nuvois/sdk'</span>
      <br />
      <br />
      <span className="text-pink-400">const </span>
      <span className="text-cyan-300">api</span>
      <span className="text-white"> = </span>
      <span className="text-pink-400">new </span>
      <span className="text-cyan-300">StyleAPI</span>
      <span className="text-white">({`{`}</span>
      <br />
      <span className="text-white">  apiKey: </span>
      <span className="text-yellow-300">'your-api-key'</span>
      <span className="text-white">,</span>
      <br />
      <span className="text-white"> {`})`}</span>
      <br />
      <br />
      <span className="text-gray-400">{`// Get recommendations`}</span>
      <br />
      <span className="text-pink-400">const </span>
      <span className="text-cyan-300">recommendations</span>
      <span className="text-white"> = </span>
      <span className="text-pink-400">await </span>
      <span className="text-cyan-300">api</span>
      <span className="text-white">.recommendations({`{`}</span>
      <br />
      <span className="text-white">  userId: </span>
      <span className="text-yellow-300">'user-123'</span>
      <span className="text-white">,</span>
      <br />
      <span className="text-white">  bodyType: </span>
      <span className="text-yellow-300">'apple'</span>
      <span className="text-white">,</span>
      <br />
      <span className="text-white">  budget: </span>
      <span className="text-orange-400">150</span>
      <span className="text-white">,</span>
      <br />
      <span className="text-white"> {`})`}</span>
      <br />
      <br />
      <span className="text-cyan-300">console</span>
      <span className="text-white">.</span>
      <span className="text-yellow-300">log</span>
      <span className="text-white">(recommendations) </span>
      <span className="text-gray-400">{`// ✓ Perfect outfits`}</span>
    </pre>
  );

  return (
    <section id="platform" className="py-24 px-6 bg-[#222222] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-center mb-4 text-balance">
          Power Your Platform. Integrate Our Intelligence.
        </h2>

        <p className="text-center text-white/70 text-lg mb-16 text-balance">
          Reduce returns and increase AOV with our industry-leading fashion AI
          API suite.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all border border-white/10 hover:border-[#B9975B]"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-[#B9975B] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Code Block */}
        <div className="bg-black/50 rounded-xl border border-white/10 overflow-x-auto">
          {/* Language Label Added Here */}
          <div className="p-2 px-4 text-xs font-semibold uppercase tracking-wider bg-white/5 rounded-t-xl border-b border-white/10 text-white/70 flex justify-between">
            <span>Example Code</span>
            <span className="text-[#B9975B]">JavaScript</span>
          </div>
          
          <div className="p-8">
            <HighlightedCode />
          </div>
        </div>
      </div>
    </section>
  );
}
