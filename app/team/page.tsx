'use client'
import { useEffect } from 'react'
import Link from 'next/link'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      <main className="max-w-7xl mx-auto pt-8 px-16 relative z-10 main-content">
        {/* Team Section Header */}
        <section className="mt-4 mb-8 no-animation">
          <div className="relative border-l-2 border-[#75B2FF] pl-8 py-2 mb-6">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#75B2FF] text-xl font-medium mb-2">Our Team</h2>
            
            <h3 className="text-4xl font-bold mb-4">Meet the Morningside Venture Fund Team</h3>
            
            <p className="text-gray-700 max-w-3xl mb-6 text-lg leading-relaxed">
              Our diverse team brings together expertise in venture capital, entrepreneurship, 
              and deep industry knowledge to support Columbia's most promising startups.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="pl-8 grid grid-cols-4 gap-5">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Alexander Zhao*</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Managing Partner</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Former Intern @ I2E | Plug-and-Play Fellow
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Adrian Lazzi*</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Partner</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Founder @ Purphico
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Daniel Ah Hee</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Partner</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Independent PE/VC/Angel Investor
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Christina Xiao</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Partner</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Incoming Analyst @ McKinsey
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Jake Lee</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Associate</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Incoming Legal Intern @ Oaktree
                </p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Paul Greitemann</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Associate</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Analyst @ 4p Capital
                </p>
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Gabbriela Berenholc</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Associate</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Former Summer Analyst @ Viola Ventures
                </p>
              </div>
            </div>

            {/* Team Member 8 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#1a1f71]">Luke Freed</h4>
                <p className="text-[#75B2FF] font-medium mt-1">Investment Associate</p>
                <p className="text-gray-600 mt-4 text-sm">
                  Incoming Summer Analyst @ Morgan Stanley
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Link href="/" className="bg-[#75B2FF] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="rotate-180">
              <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
} 