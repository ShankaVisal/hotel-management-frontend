import Header from "./components/header/header.jsx"
import "./app.css"

function App() {

  return (
    <>
      <Header/>
      <div className="w-full h-screen bg-blue-900 flex">
        <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex items-center justify-center">
          <input type="date"/>
          <input type="date"/>
          <select>
            <option>Luxury</option>
            <option>Normal</option>
          </select>
          <button>Book Now</button>
        </div>

      </div>
    </>
  )
}

export default App
