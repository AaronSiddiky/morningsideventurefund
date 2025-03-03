import Image from 'next/image'

const portfolioCompanies = [
  {
    name: 'TechCo',
    description: 'AI-powered enterprise solutions',
    logo: '/portfolio/techco-logo.png',
    category: 'Enterprise Software'
  },
  // Add more portfolio companies
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-serif text-navy-900 mb-12">Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioCompanies.map((company, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-24 h-24 relative mb-4 mx-auto">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 text-center">{company.name}</h3>
              <p className="text-blue-600 text-sm text-center">{company.category}</p>
              <p className="mt-2 text-gray-600 text-center">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 