export default function Perspectives() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-serif text-navy-900 mb-12">Investment Thesis</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-navy-900 mb-6">Our Approach</h2>
            <p className="text-gray-700">
              At Morningside Venture Fund, we focus on early-stage investments in transformative technologies
              that have the potential to reshape industries and create lasting impact.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-navy-900 mb-6">Focus Areas</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-4 h-4 mt-1 mr-4 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-xl">Artificial Intelligence</h3>
                  <p className="text-gray-700">Machine learning, computer vision, and natural language processing</p>
                </div>
              </li>
              {/* Add more focus areas */}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 