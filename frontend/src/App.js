import Results from "./components/Results"

export default function App() {
  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Elections
          </h1>
        </div>
      </header>

      <main className="flex justify-center p-3">
        <Results></Results>
      </main>
    </div>
  )
}
