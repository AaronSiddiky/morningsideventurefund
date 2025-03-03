import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="w-full py-6 px-16">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#75B2FF]">
          MVF
        </Link>
        
        <div className="flex items-center gap-12">
          <Link href="/team" className="text-[#1a1f71] hover:text-[#75B2FF]">
            team
          </Link>
          <Link href="/portfolio" className="text-[#1a1f71] hover:text-[#75B2FF]">
            portfolio
          </Link>
          <Link href="/perspectives" className="text-[#1a1f71] hover:text-[#75B2FF]">
            perspectives
          </Link>
          <Link href="/discover" className="text-[#75B2FF] flex items-center gap-2">
            discover
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-1">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
} 