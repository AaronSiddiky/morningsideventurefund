import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const categories = [
  'AI & Machine Learning',
  'Enterprise Software',
  'FinTech',
  'Healthcare',
  // Add more categories
]

export default function Discover() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-serif text-navy-900 mb-12">Discover</h1>
        
        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search opportunities..."
              className="w-full px-6 py-4 rounded-full text-lg focus:outline-none shadow-lg border"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 cursor-pointer hover:bg-blue-50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-navy-900">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 