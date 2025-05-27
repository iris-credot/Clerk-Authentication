import Image from 'next/image';
import Link from 'next/link';
import recipes from '@/data/recipes.json'; // Direct import of recipes.json
export async function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}
export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-red-600">Recipe not found</h1>
          <Link href="/" className="mt-4 inline-block text-amber-600 hover:text-amber-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-gray-100 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/recipe"
          className="inline-block mb-6 bg-teal-900 text-white hover:bg-teal-600 font-bold py-2 px-4 rounded-md transition-colors duration-200"
        >
          ← Back Home
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-75 w-full">
            <Image
              src={`/images/${recipe.image}`}
              alt={recipe.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-teal-800 mb-6">{recipe.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div className="bg-teal-50 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-semibold text-teal-600 mb-4 border-b border-teal-600 pb-2">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-teal-800 rounded-full mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Steps */}
              <div className="bg-teal-50 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <h2 className="text-xl font-semibold text-teal-600 mb-4 border-b border-teal-600 pb-2">
                  Steps
                </h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex">
                      <span className="inline-block w-6 h-6 bg-teal-800 rounded-full mr-3 flex-shrink-0 text-white font-medium text-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}