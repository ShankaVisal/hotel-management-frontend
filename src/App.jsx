import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import AdminPage from "./pages/admin page/admin";
import Homepage from "./pages/client page/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path= "/">

          <Route path="/" element={<Homepage/>}/>

          <Route path="/admin/*" element={<AdminPage/>}/>

          <Route path="/*" element={
            <div className="min-w-full h-[100vh] bg-green-400 flex items-center justify-center">
              <h1 className="text-[50px]">404 Not Found</h1>
            </div>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
