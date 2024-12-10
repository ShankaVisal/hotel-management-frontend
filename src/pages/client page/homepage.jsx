import Header from "../../components/header/header.jsx";

export default function Homepage() {
  return (
    <>
    <Header />
      <div className="w-full h-screen bg-blue-900 flex flex-col items-center">
        <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex items-center justify-center">
          <input type="date" />
          <input type="date" />
          <select>
            <option>Luxury</option>
            <option>Normal</option>
          </select>
          <button>Book Now</button>
        </div>
        <h1 className="text-white text-[50px]">Welcome to the Leoine Vila</h1>
      </div>
    </>
  );
}
