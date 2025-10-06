'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      <Navigation />
      <main className="max-w-7xl mx-auto pt-8 px-16 relative z-10 main-content">
        {/* Team Section Header */}
        <section className="mt-4 mb-8 no-animation">
          <div className="relative border-l-2 border-[#3A4764] pl-8 py-2 mb-6">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#3A4764] text-xl font-medium mb-2">Our Team</h2>
            
            <h3 className="text-4xl font-bold mb-4">Meet the Morningside Venture Fund Team</h3>
            
            <p className="text-gray-700 max-w-3xl mb-6 text-lg leading-relaxed">
              Our diverse team brings together expertise in venture capital, entrepreneurship, 
              and deep industry knowledge to support Columbia's most promising startups.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="pl-8 grid grid-cols-3 gap-6">
            {/* Ryan Fortani */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Ryan Fortani</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Kevin Xu */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Kevin Xu</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Jake Lee */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Jake Lee</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Jenna Zhao */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Jenna Zhao</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Alexander Zhao */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Alexander Zhao</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Aaron Siddiky */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Aaron Siddiky</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Patrick Dugan */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Patrick Dugan</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Ethan Rhee */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Ethan Rhee</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Ryan Chen */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Ryan Chen</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Justine Ludden */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Justine Ludden</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Adele Chen */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Adele Chen</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Adrian Lazzi */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Adrian Lazzi</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Sophia Bassi */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Sophia Bassi</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Audrea Chen */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Audrea Chen</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Liam Dorn */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Liam Dorn</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Jackie Wang */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Jackie Wang</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Gabriela Berenholc */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Gabriela Berenholc</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Kirsten Real */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Kirsten Real</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Ho Jin Jang */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Ho Jin Jang</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>

            {/* Daniel Ah Hee */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#000035]">Daniel Ah Hee</h4>
                <p className="text-[#3A4764] font-medium mt-1">Team Member</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Button */}
        <div className="flex justify-center mt-10 mb-10">
          <Link href="/" className="bg-[#3A4764] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors">
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