import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="w-full py-6 px-16">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-[#000035]">
          MVF
        </Link>
        
        <div className="flex items-center gap-12">
          <Link href="/team" className="text-[#000035] hover:text-[#3A4764]">
            team
          </Link>
          <Link href="/perspectives" className="text-[#000035] hover:text-[#3A4764]">
            perspectives
          </Link>
          <Link href="/contact" className="text-[#000035] hover:text-[#3A4764] flex items-center gap-2">
            contact
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="ml-1">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  )
} 