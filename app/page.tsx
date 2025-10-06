'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Navigation from './components/Navigation'

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
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
        </div>

        {/* Navigation */}
        <div className="relative z-20">
          <Navigation />
        </div>

        {/* Hero Content */}
        <main className="relative z-10 max-w-7xl mx-auto px-16 main-content">
          <div className="space-y-8 min-h-screen flex flex-col justify-center">
            <h1 className="text-[120px] font-bold leading-[1.1] tracking-tight no-animation text-[#000035]">
              Columbia University's first{' '}
            <span className="text-[#000035] font-bold hover:text-[#3A4764] transition-colors duration-300 glow-text">
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
              <p className="text-xs text-[#000035] font-light tracking-wider text-right uppercase no-animation">
                //EST. 2024
              </p>
              <p className="text-xs text-[#000035] font-light tracking-wider text-right uppercase no-animation whitespace-nowrap">
                MORNINGSIDE VENTURE FUND
              </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Rest of the content */}
      <main className="max-w-7xl mx-auto px-16 relative z-10 main-content">

        {/* About Us Section - Changed from Investment Thesis */}
        <section className="mt-20 no-animation">
          <div className="relative border-l-2 border-[#3A4764] pl-12 py-8">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#3A4764] text-xl font-medium mb-6">About Us</h2>
            
            <h3 className="text-5xl font-bold mb-8">Investing in Columbia University Start-Ups</h3>
            
            <p className="text-gray-700 max-w-3xl mb-6 text-lg leading-relaxed">
              Morningside Venture Fund is Columbia University's first Venture Capital Fund. Established in 2024, MVF targets student and alumni founders who are forced to look elsewhere for
              early support or abandon their ventures before they can put
              together an MVP, launch their product, or gain early traction.
            </p>
            
            <div className="text-gray-700 max-w-3xl mb-12 text-lg leading-relaxed">
              <p className="font-semibold mb-4">MVF has built a self-sustaining student-run venture fund that:</p>
              <div className="space-y-3 pl-6">
                <p className="flex items-start">
                  <span className="font-semibold mr-3">I.</span>
                  <span>Invests in Columbia-affiliated startups at the pre-seed stage while also supporting them as they mature.</span>
                </p>
                <p className="flex items-start">
                  <span className="font-semibold mr-3">II.</span>
                  <span>Connects founders to mentors, operators, and alumni VCs.</span>
                </p>
              </div>
              <p className="mt-6">Established in 2024, MVF operates under two investment buckets.</p>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#investment-thesis" className="bg-[#3A4764] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#2F3A52] transition-colors uppercase">
                Investment Thesis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="/team" className="bg-white text-[#3A4764] border border-[#3A4764] px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#f0f7ff] transition-colors uppercase">
                Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
        </section>


        {/* Our Vision Section */}
        <section className="mt-40 mb-40 no-animation">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Vision ⚡</h2>
            <p className="text-2xl text-gray-600">A Columbia Founder-Investor Flywheel</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Center circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center z-20">
              <span className="text-3xl font-bold text-[#000035]">Pt II</span>
            </div>
            
            {/* Flywheel arrows - circular flow */}
            <svg className="absolute inset-0 w-full h-full z-10" viewBox="0 0 800 600">
              {/* Top arrow */}
              <path d="M 400 100 Q 550 150 600 300" fill="none" stroke="#3A4764" strokeWidth="3" markerEnd="url(#arrowhead)" />
              {/* Right arrow */}
              <path d="M 600 300 Q 550 450 400 500" fill="none" stroke="#3A4764" strokeWidth="3" markerEnd="url(#arrowhead)" />
              {/* Bottom arrow */}
              <path d="M 400 500 Q 250 450 200 300" fill="none" stroke="#3A4764" strokeWidth="3" markerEnd="url(#arrowhead)" />
              {/* Left arrow */}
              <path d="M 200 300 Q 250 150 400 100" fill="none" stroke="#3A4764" strokeWidth="3" markerEnd="url(#arrowhead)" />
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3A4764" />
                </marker>
              </defs>
            </svg>
            
            {/* Flywheel components */}
            <div className="grid grid-cols-2 gap-y-32 gap-x-64 relative z-0">
              {/* Top - Component 1 */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-[#192252] text-white rounded-xl p-6 max-w-md text-center">
                  <h3 className="text-xl font-bold mb-3">1. Invest in Promising Student Startups</h3>
                  <p className="text-sm">Deploy capital and mentorship into Columbia-affiliated ventures at the earliest stage.</p>
                </div>
              </div>
              
              {/* Middle row */}
              <div className="flex justify-end pr-16">
                <div className="bg-[#192252] text-white rounded-xl p-6 max-w-md text-center">
                  <h3 className="text-xl font-bold mb-3">4. Attract More Talent and Capital</h3>
                  <p className="text-sm">More students apply, more alumni engage, and more capital flows in—fueling the next generation of founders.</p>
                </div>
              </div>
              
              <div className="flex justify-start pl-16">
                <div className="bg-[#192252] text-white rounded-xl p-6 max-w-md text-center">
                  <h3 className="text-xl font-bold mb-3">2. Enable More Founder Wins</h3>
                  <p className="text-sm">Early support helps startups grow stronger, raise follow-on rounds, and achieve real traction.</p>
                </div>
              </div>
              
              {/* Bottom - Component 3 */}
              <div className="col-span-2 flex justify-center">
                <div className="bg-[#192252] text-white rounded-xl p-6 max-w-md text-center">
                  <h3 className="text-xl font-bold mb-3">3. Boost Columbia's Startup Reputation</h3>
                  <p className="text-sm">Successful ventures attract attention, elevate Columbia's entrepreneurial brand, and showcase homegrown success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Columbia Entrepreneurship Organizations Section */}
        <section className="mt-40 mb-40 no-animation">
          <div className="bg-[#000035] rounded-2xl p-16">
            <h2 className="text-4xl font-bold mb-12 text-white">Columbia's campus generates great interest in entrepreneurship</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* CVP */}
              <div className="bg-white rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">CVP</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000035]">Columbia Venture Partners (CVP)</h3>
                <p className="text-gray-700">45-member club educating students on VC and finance basics, while running sourcing and basic due diligence for partner VCs.</p>
              </div>
              
              {/* CORE */}
              <div className="bg-white rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-blue-600">CORE</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000035]">Columbia Organizing of Rising Entrepreneurs (CORE)</h3>
                <p className="text-gray-700">150+ members across accelerator programs, founder schools, product management training, and startup internship pairings.</p>
              </div>
              
              {/* ADI */}
              <div className="bg-white rounded-xl p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-blue-600">ADI</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#000035]">App Development Initiative's (ADI)</h3>
                <p className="text-gray-700">60-person membership supports SaaS project development for Columbia students.</p>
              </div>
            </div>
            
            <div className="mt-12 text-white">
              <p className="text-lg"><span className="font-semibold">Other organizations:</span> Columbia Entrepreneurs Organization, Columbia Startup Lab, Columbia Venture Community, Columbia Build lab</p>
            </div>
          </div>
        </section>

        {/* MVF Support Programs Section */}
        <section className="mt-40 mb-40 no-animation">
          <div className="bg-[#000035] rounded-2xl p-16">
            <h2 className="text-4xl font-bold mb-4 text-white">MVF supports and scales startups</h2>
            <p className="text-xl text-white/90 mb-12">Guiding them throughout their journey</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Alumni Office Hours */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Alumni "Office Hours"</h3>
                <p className="text-lg mb-4">Connecting founders with ex-operators to solidify their ideas</p>
              </div>
              
              {/* Pitch Workshops */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Pitch Workshops</h3>
                <p className="text-lg mb-4">Giving fundraising guidance to founders & early deal-flow to investors</p>
              </div>
              
              {/* Founder Communities */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Founder Communities</h3>
                <p className="text-lg mb-4">Providing a space for like-minded founders to build together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing and Due Diligence Section */}
        <section className="mt-40 mb-40 no-animation">
          <div className="bg-[#000035] rounded-2xl p-16">
            <h2 className="text-5xl font-bold mb-12 text-white">Sourcing and Due Diligence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Portfolio Bucket 1 */}
              <div className="bg-white/90 backdrop-blur rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#192252] rounded-full flex items-center justify-center text-white text-xl font-bold">1</div>
                  <h3 className="text-2xl font-bold text-[#000035]">Portfolio Bucket 1 (Launch)</h3>
                </div>
                <p className="text-gray-700">Deal flow will originate from <span className="font-semibold">internal sourcing initiatives, collaborations</span> and events with campus communities, and <span className="font-semibold">inbound communication</span> through our website and network. Selected startups will be invited to share additional info with MVF.</p>
              </div>
              
              {/* Portfolio Bucket 2 */}
              <div className="bg-white/90 backdrop-blur rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#192252] rounded-full flex items-center justify-center text-white text-xl font-bold">2</div>
                  <h3 className="text-2xl font-bold text-[#000035]">Portfolio Bucket 2 (Lift-Off)</h3>
                </div>
                <p className="text-gray-700">Deal flow will originate from ongoing startup support programs (<span className="font-semibold">pitch workshops</span> and <span className="font-semibold">founder office hours</span>) and <span className="font-semibold">outreach</span> to alumni founders. Due diligence and market research will be conducted by MVF student members to validate investment opportunity.</p>
              </div>
            </div>
            
            {/* Process Steps */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#192252] text-xl font-bold flex-shrink-0">2</div>
                <div className="bg-gray-100 rounded-xl p-6 flex-1">
                  <p className="text-gray-800">Based on collected information, an <span className="font-semibold">investment memo</span> will be drafted by <span className="font-semibold">MVF Student Managers</span>, approved by the <span className="font-semibold">MVF Advisory Board</span>, and disseminated to all members.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#192252] text-xl font-bold flex-shrink-0">3</div>
                <div className="bg-gray-700 rounded-xl p-6 flex-1">
                  <p className="text-yellow-300 font-semibold">Final co-investment and investment decisions</p>
                  <p className="text-white">will be made via a <span className="font-semibold">vote with all contributing members</span> to MVF on the <span className="font-semibold">PIN platform</span>.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Thesis Section Header */}
        <section id="investment-thesis" className="mt-60 mb-40 no-animation">
          <div className="relative border-l-2 border-[#3A4764] pl-8 py-4 mb-16">
            {/* Animated dot on the vertical line */}
            <div className="animated-dot"></div>
            
            <h2 className="text-[#3A4764] text-xl font-medium mb-6">Investment Thesis</h2>
            
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
              </div>
              
              <div className="w-1/2 bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 -left-4 bg-[#3A4764] text-white px-4 py-2 rounded-lg font-medium">
                  #B1 Investment Flow
                </div>
                
                {/* Diagram with flowing animation and verification check that appears after dot reaches end */}
                <div className="flex flex-col items-center mt-8 relative">
                  <div className="bg-[#3A4764] text-white px-6 py-3 rounded-full w-64 text-center mb-4">
                    Morningside Venture Fund
                  </div>
                  
                  <div className="h-40 w-0.5 bg-[#3A4764] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#3A4764] rounded-full animate-flowDown"></div>
                    
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
                <a href="/portfolio-bucket-2" className="bg-[#3A4764] text-white px-8 py-3 rounded-full inline-flex items-center gap-2 hover:bg-[#2F3A52] transition-colors">
                  Learn more about Bucket 2
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14m-7-7l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <div className="mt-12">
                  <h3 className="text-xl font-medium mb-4">Key Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3A4764] flex-shrink-0 mt-1"></div>
                      <span>Invest directly in pre-seed or seed companies from Columbia Venture Partner's sourcing initiative</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3A4764] flex-shrink-0 mt-1"></div>
                      <span>Startup must have raised minimum of $100k from angels of VCs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#3A4764] flex-shrink-0 mt-1"></div>
                      <span>Average check size ~ $</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-1/2 bg-white rounded-xl shadow-lg p-8 relative">
                <div className="absolute -top-4 -left-4 bg-[#3A4764] text-white px-4 py-2 rounded-lg font-medium">
                  #B2 Investment Flow
                </div>
                
                {/* Diagram for Bucket 2 with flowing animation and verification check */}
                <div className="flex flex-col items-center mt-8 relative">
                  <div className="bg-[#3A4764] text-white px-6 py-3 rounded-full w-64 text-center mb-4">
                    Morningside Venture Fund
                  </div>
                  
                  <div className="h-20 w-0.5 bg-[#3A4764] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#3A4764] rounded-full animate-flowDown"></div>
                    
                    {/* Animated money box that flows down */}
                    <div className="absolute left-[calc(100%+10px)] top-1/4 transform -translate-y-1/2 bg-white rounded-lg shadow-md px-3 py-1 text-sm font-bold animate-flowDown">
                      $100k
                    </div>
                  </div>
                  
                  {/* Middle capsule for Columbia Venture Partners */}
                  <div className="bg-[#e8f0ff] border border-[#3A4764] px-6 py-3 rounded-full w-64 text-center mb-4 text-[#000035]">
                    Columbia Venture Partners
                  </div>
                  
                  <div className="h-20 w-0.5 bg-[#3A4764] relative">
                    {/* Animated dot that flows down the line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#3A4764] rounded-full animate-flowDown2"></div>
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

            {/* Introducing the Morningside Venture Fund */}
            <div className="mb-16 mt-24">
              <h2 className="text-5xl font-bold mb-4 text-center">Introducing the Morningside Venture Fund</h2>
              <p className="text-2xl text-center text-gray-600 mb-12">A fund for Columbians, by Columbians</p>
              
              {/* Comparison Table */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                      <th className="p-6 text-left text-xl font-bold w-1/3"></th>
                      <th className="p-6 text-center text-xl font-bold">Portfolio Bucket 1 (Launch)</th>
                      <th className="p-6 text-center text-xl font-bold">Portfolio Bucket 2 (Lift-Off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-6 font-bold text-xl text-[#000035]">Purpose</td>
                      <td className="p-6 text-center">Invest in pre-seed or seed startups from Columbia Venture Partner's sourcing initiative</td>
                      <td className="p-6 text-center">Co-invest in Columbia-affiliated startups raising from reputable VCs</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="p-6 font-bold text-xl text-[#000035]">Investment Profile</td>
                      <td className="p-6 text-center">Startup raising ~$100k from angels, f&f rounds, or VCs</td>
                      <td className="p-6 text-center">Startups with >200k ARR or clear PMF</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-6 font-bold text-xl text-[#000035]">Average Check Size</td>
                      <td className="p-6 text-center text-xl font-semibold">~ $5K</td>
                      <td className="p-6 text-center text-xl font-semibold">~ $30K</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold text-xl text-[#000035]">Allocation</td>
                      <td className="p-6 text-center text-xl font-semibold">~ 20% of Fund I Capital</td>
                      <td className="p-6 text-center text-xl font-semibold">~ 80% of Fund I Capital</td>
                    </tr>
                  </tbody>
                </table>
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