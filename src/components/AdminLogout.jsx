export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen z-[-2]w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <main className="flex flex-col h-[80vh] justify-center items-center p-8">
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Thank You, Admin!
        </h2>
        <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Logout
        </button>
      </main>
    </div>
  );
}
