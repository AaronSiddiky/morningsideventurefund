'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const [typedButtonText, setTypedButtonText] = useState('');
  const buttonText = 'MORNINGSIDE VENTURE FUND';
  
  useEffect(() => {
    // Typewriter for the button text
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < buttonText.length) {
        setTypedButtonText(buttonText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40); // Speed of typing
    
    return () => clearInterval(typingInterval);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      // Hide arrow when scrolled past half the viewport height
      if (window.scrollY > window.innerHeight / 2) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden">
      <main className="max-w-7xl mx-auto pt-16 px-16 relative z-10 main-content">
        {/* Hero Section */}
        <div className="space-y-8">
          <h1 className="text-[120px] font-bold leading-[1.1] tracking-tight no-animation">
            Columbia University's first{' '}
            <span className="text-[#C5DDFF] font-bold hover:text-[#75B2FF] transition-colors duration-300 glow-text">
              venture capital<br />fund
            </span>
          </h1>

          <div className="flex items-end justify-between pt-16 no-animation">
            <a href="/investment-thesis" className="bg-black text-white px-8 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity uppercase no-animation min-w-[280px]">
              <span className="button-typewriter">
                {typedButtonText}
                {typedButtonText.length < buttonText.length && <span className="cursor-white"></span>}
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-auto">
                <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="flex flex-col items-center absolute left-1/2 transform -translate-x-1/2">
              {showArrow && (
                <div className="scroll-arrow-inline" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="w-[180px]">
              <p className="text-xs text-[#1a1f71] font-light tracking-wider text-right uppercase no-animation">
                //EST. 2024
              </p>
              <p className="text-xs text-[#1a1f71] font-light tracking-wider text-right uppercase no-animation whitespace-nowrap">
                MORNINGSIDE VENTURE FUND
              </p>
            </div>
          </div>
        </div>

        {/* About Us Section - Changed from Investment Thesis */}
        <section className="mt-60 no-animation">
          <div className="relative border-l-2 border-[#75B2FF] pl-12 py-8">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#75B2FF] text-xl font-medium mb-6">About Us</h2>
            
            <h3 className="text-5xl font-bold mb-8">Investing in Columbia University Start-Ups</h3>
            
            <p className="text-gray-700 max-w-3xl mb-12 text-lg leading-relaxed">
              Quickly build great investment opportunities, improve performance, expand into new markets,
              and engage with Columbia's brightest entrepreneurs. Get expert guidance
              from our professional team and certified partners, and connect with Columbia's
              vast network of alumni, faculty, and industry leaders.
            </p>
            
            <div className="flex gap-4 mt-6">
              <a href="/about-us" className="bg-[#75B2FF] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors uppercase">
                Our Genesis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="/team" className="bg-white text-[#75B2FF] border border-[#75B2FF] px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#f0f7ff] transition-colors uppercase">
                Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Stats Section with more spacing */}
          <div className="flex gap-24 mt-24 pl-12">
            <div>
              <h4 className="text-4xl font-bold">$10M+</h4>
              <p className="text-gray-600 text-lg mt-2">
                Fund Size
              </p>
            </div>
            
            <div>
              <h4 className="text-4xl font-bold">20+</h4>
              <p className="text-gray-600 text-lg mt-2">
                Portfolio Companies
              </p>
            </div>
            
            <div>
              <h4 className="text-4xl font-bold">100%</h4>
              <p className="text-gray-600 text-lg mt-2">
                Columbia Affiliated
              </p>
            </div>
          </div>
        </section>

        {/* Investment Thesis Section Header */}
        <section className="mt-60 mb-40 no-animation">
          <div className="relative border-l-2 border-[#75B2FF] pl-8 py-4 mb-16">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#75B2FF] text-xl font-medium mb-6">Investment Thesis</h2>
            
            <h3 className="text-4xl font-bold mb-8">Three Investment Buckets</h3>
          </div>

          {/* Portfolio Buckets Container - with consistent left alignment */}
          <div className="pl-8">
            {/* Portfolio Bucket 1 */}
            <div className="flex gap-12 mb-24">
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-6">Portfolio Bucket 1</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Integrate investments into your Columbia startup journey with our 
                  end-to-end funding experiences.
                </p>
                <a href="/portfolio-bucket-1" className="bg-[#75B2FF] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors">
                  Learn more about Bucket 1
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium mb-4">Key Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Co-invest in Columbia-affiliated startups raising from reputable VCs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Startup must have minimum revenue of 500k</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Average check size ~ $</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-1/2 bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 -left-4 bg-[#75B2FF] text-white px-4 py-2 rounded-lg font-medium">
                  #B1 Investment Flow
                </div>
                
                {/* Diagram with flowing animation and verification check that appears after dot reaches end */}
                <div className="flex flex-col items-center mt-8 relative">
                  <div className="bg-[#75B2FF] text-white px-6 py-3 rounded-full w-64 text-center mb-4">
                    Morningside Venture Fund
                  </div>
                  
                  <div className="h-40 w-0.5 bg-[#75B2FF] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#75B2FF] rounded-full animate-flowDown"></div>
                    
                    {/* Animated money box that flows down */}
                    <div className="absolute left-[calc(100%+10px)] top-1/4 transform -translate-y-1/2 bg-white rounded-lg shadow-md px-3 py-1 text-sm font-bold animate-flowDown">
                      $900k
                    </div>
                  </div>
                  
                  {/* Columbia Startups button with check mark that appears after animation */}
                  <div className="flex items-center">
                    <div className="bg-[#192252] text-white px-6 py-3 rounded-full w-64 text-center flex items-center justify-center">
                      <svg className="w-5 h-5 text-white mr-2 animate-checkPulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Columbia Startups
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gray-100 p-4 rounded-lg w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Minimum Revenue</p>
                        <p className="font-bold">$500k</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Check</p>
                        <p className="font-bold">$TBD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Bucket 2 */}
            <div className="flex gap-12 mb-24">
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-6">Portfolio Bucket 2</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Support early-stage Columbia ventures with our pre-seed and seed funding
                  opportunities through our sourcing initiative.
                </p>
                <a href="/portfolio-bucket-2" className="bg-[#75B2FF] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors">
                  Learn more about Bucket 2
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium mb-4">Key Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Invest directly in pre-seed or seed companies from Columbia Venture Partner's sourcing initiative</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Startup must have raised minimum of $100k from angels of VCs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Average check size ~ $</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-1/2 bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 -left-4 bg-[#75B2FF] text-white px-4 py-2 rounded-lg font-medium">
                  #B2 Investment Flow
                </div>
                
                {/* Diagram for Bucket 2 with flowing animation and verification check */}
                <div className="flex flex-col items-center mt-8 relative">
                  <div className="bg-[#75B2FF] text-white px-6 py-3 rounded-full w-64 text-center mb-4">
                    Morningside Venture Fund
                  </div>
                  
                  <div className="h-20 w-0.5 bg-[#75B2FF] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#75B2FF] rounded-full animate-flowDown"></div>
                    
                    {/* Animated money box that flows down */}
                    <div className="absolute left-[calc(100%+10px)] top-1/4 transform -translate-y-1/2 bg-white rounded-lg shadow-md px-3 py-1 text-sm font-bold animate-flowDown">
                      $100k
                    </div>
                  </div>
                  
                  {/* Middle capsule for Columbia Venture Partners */}
                  <div className="bg-[#e8f0ff] border border-[#75B2FF] px-6 py-3 rounded-full w-64 text-center mb-4 text-[#1a1f71]">
                    Columbia Venture Partners
                  </div>
                  
                  <div className="h-20 w-0.5 bg-[#75B2FF] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#75B2FF] rounded-full animate-flowDown2"></div>
                  </div>
                  
                  {/* Pre-seed/Seed Companies button with check mark that appears after animation */}
                  <div className="flex items-center">
                    <div className="bg-[#192252] text-white px-6 py-3 rounded-full w-64 text-center flex items-center justify-center">
                      <svg className="w-5 h-5 text-white mr-2 animate-checkPulse2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Pre-seed/Seed Companies
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-gray-100 p-4 rounded-lg w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Minimum Raised</p>
                        <p className="font-bold">$100k</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Average Check</p>
                        <p className="font-bold">$TBD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fund Focus */}
            <div className="flex gap-12">
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-6">Fund Focus</h2>
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Our investment strategy focuses on specific industries and regions to maximize
                  impact and returns for Columbia-affiliated ventures.
                </p>
                <a href="/fund-focus" className="bg-[#75B2FF] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#5a9fe8] transition-colors">
                  Learn more about our focus
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium mb-4">Focus Areas</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Industry focus: Technology, Healthcare, Consumer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Region focus: North America, with emphasis on NYC ecosystem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#75B2FF] flex-shrink-0 mt-1"></div>
                      <span>Columbia affiliation required</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-1/2 bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 -left-4 bg-[#75B2FF] text-white px-4 py-2 rounded-lg font-medium">
                  Fund Allocation
                </div>
                
                {/* Diagram for fund allocation */}
                <div className="flex flex-col items-center mt-8">
                  <div className="w-full flex justify-between mb-8">
                    <div className="bg-[#75B2FF] text-white px-4 py-2 rounded-lg text-center w-[30%]">
                      <p className="font-bold">30%</p>
                      <p className="text-sm">Technology</p>
                    </div>
                    <div className="bg-[#5a9fe8] text-white px-4 py-2 rounded-lg text-center w-[30%]">
                      <p className="font-bold">30%</p>
                      <p className="text-sm">Healthcare</p>
                    </div>
                    <div className="bg-[#c5ddff] text-[#1a1f71] px-4 py-2 rounded-lg text-center w-[30%]">
                      <p className="font-bold">30%</p>
                      <p className="text-sm">Consumer</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
                    <div className="bg-[#75B2FF] h-2 rounded-full w-[90%]"></div>
                  </div>
                  
                  <div className="w-full flex justify-between text-sm text-gray-600">
                    <span>Bucket 1: 90%</span>
                    <span>Bucket 2: 10%</span>
                  </div>
                  
                  <div className="mt-8 bg-gray-100 p-4 rounded-lg w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Total Fund Size</p>
                        <p className="font-bold">$10M+</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Columbia Affiliated</p>
                        <p className="font-bold">100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="mb-40 no-animation">
          <div className="border-t border-gray-200 pt-16">
            <div className="flex justify-between items-center">
              {/* Placeholder for Columbia University Logo */}
              <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400">Logo 1</span>
              </div>
              
              {/* Placeholder for Partner Logo */}
              <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400">Logo 2</span>
              </div>
              
              {/* Placeholder for Partner Logo */}
              <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400">Logo 3</span>
              </div>
              
              {/* Placeholder for Partner Logo */}
              <div className="w-32 h-16 bg-gray-100 flex items-center justify-center rounded">
                <span className="text-gray-400">Logo 4</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 