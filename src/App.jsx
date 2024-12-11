import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import AdminPage from "./pages/admin page/admin";
import Homepage from "./pages/client page/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes path= "/">

          <Route path="/admin/*" element={<AdminPage/>}/>

          <Route path="/*" element={<Homepage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
