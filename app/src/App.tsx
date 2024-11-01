import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WorldBuildingWebsite = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-b from-amber-900 to-amber-800 text-amber-50 overflow-hidden"
      >
        <motion.div
          className="container mx-auto px-6 py-24 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Build a World</h1>
          <p className="text-2xl opacity-90 font-light">By Guy Kost and Eyal Meirom</p>
        </motion.div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-amber-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-amber-400 rounded-full blur-xl"></div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Introduction with fade-in animation */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Introduction</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              OpenAI, the creator of the GPT model family, introduced a list of goals to Artificial Superintelligence (ASI), 
              which is AI that can replace huge organizations, think better than humans, make breakthroughs in physics, math, 
              and science, and finally can develop and improve itself.
            </p>
          </div>
        </motion.section>

        {/* Orion Map Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Orion Map</h2>
            <svg
              viewBox="0 0 800 600"
              className="w-full h-96 bg-amber-50"
            >
              {/* Main continent */}
              <path
                d="M200,300 C250,250 350,200 450,250 S600,350 650,300 Q700,250 650,200 T500,150 Q400,100 300,150 T200,300Z"
                fill="#8B4513"
                stroke="#654321"
                strokeWidth="3"
                className="drop-shadow-lg"
              />
              
              {/* Cities as interactive points */}
              <g>
                <circle cx="350" cy="250" r="8" fill="#FFD700" className="cursor-pointer hover:r-10 transition-all">
                  <title>New Capital</title>
                </circle>
                <circle cx="450" cy="280" r="6" fill="#FFD700" className="cursor-pointer hover:r-8 transition-all">
                  <title>Tech Hub</title>
                </circle>
                <circle cx="550" cy="260" r="6" fill="#FFD700" className="cursor-pointer hover:r-8 transition-all">
                  <title>Port City</title>
                </circle>
              </g>

              {/* Water features */}
              <path
                d="M100,400 Q200,380 300,400 T500,400 T700,400"
                fill="none"
                stroke="#4682B4"
                strokeWidth="2"
                opacity="0.6"
              />
              
              {/* Decorative elements */}
              <g className="text-xs">
                <text x="350" y="230" fill="#654321" className="font-bold">New Capital</text>
                <text x="450" y="260" fill="#654321">Tech Hub</text>
                <text x="550" y="240" fill="#654321">Port City</text>
              </g>
            </svg>
          </div>
        </motion.section>

        {/* OpenAI's 5 Steps with hover animations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">OpenAI's 5 Steps to ASI</h2>
            <div className="space-y-6">
              {[
                {
                  title: "1. Chatbots - Conversational AI",
                  description: "Just the basics - an LLM that can write words, sentences, and paragraphs.",
                  status: "Reached a few years ago",
                  color: "bg-green-100",
                  hoverColor: "bg-green-200"
                },
                {
                  title: "2. Reasoners - Problem Solvers",
                  description: "More than just writing words - it means thinking and making plans.",
                  status: "Reached on 12 September 2024",
                  color: "bg-blue-100",
                  hoverColor: "bg-blue-200"
                },
                {
                  title: "3. Agents - Action Takers",
                  description: "Systems that can take continuous actions and run for extended periods.",
                  status: "Current frontier",
                  color: "bg-purple-100",
                  hoverColor: "bg-purple-200"
                },
                {
                  title: "4. Innovators - Creators",
                  description: "AI that can invent new technology, devices, languages, or anything imaginable.",
                  status: "Future goal",
                  color: "bg-orange-100",
                  hoverColor: "bg-orange-200"
                },
                {
                  title: "5. Organizational AI - World Changers",
                  description: "AI that can think, innovate, and change the world at an organizational scale.",
                  status: "Ultimate goal",
                  color: "bg-red-100",
                  hoverColor: "bg-red-200"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`${hoveredStep === index ? step.hoverColor : step.color} p-6 rounded-lg border border-opacity-20 cursor-pointer transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  <p className="text-sm font-medium text-gray-600">{step.status}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Remaining sections with subtle animations */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Technology</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                In Orion, traditional phones are unnecessary. Instead, people use smart eye lenses called "Y." 
                These lenses create a new layer of reality that feels completely real. Users can transform their 
                environment into anything they imagine, from jungles to fantastical landscapes.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The lenses include advanced cameras and sensors, controlled directly by thought. Users can access 
                apps, make calls, and interact with personal AI Characters that know them intimately. These AI 
                companions run directly on the device, ensuring privacy and instantaneous responses.
              </motion.p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer with fade-in animation */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-amber-900 text-amber-50 py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="opacity-80">© 2024 Build a World Project</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default WorldBuildingWebsite;