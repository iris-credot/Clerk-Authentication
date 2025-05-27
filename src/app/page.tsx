import Image from 'next/image';
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 px-4 py-10 flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-600 mb-6">
          Welcome to <span className="text-orange-800">Recipe Viewer</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover, cook, and enjoy a world of delicious recipes. From quick bites to gourmet dishes, we’ve got everything for your taste buds!
        </p>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-10">
        <Image
  src={`/images/reci.jpeg`}
  alt="Featured Recipe"
  width={1200}
  height={400}
  className="w-full h-64 object-cover rounded-t-2xl"
/>

          <div className="p-6">
            <h2 className="text-2xl font-semibold text-orange-700 mb-2">
              Featured: Spicy Grilled Chicken Tacos 🌮
            </h2>
            <p className="text-gray-600">
              Dive into this flavorful journey with our easy-to-make, smoky tacos topped with fresh herbs and zesty salsa.
            </p>
          </div>
        </div>

     
      </div>
    </main>
  );
}
