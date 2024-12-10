import {Link, Route, Routes } from "react-router-dom";

export default function AdminPage() {
  return (
    <>
      <div className="w-full h-[100vh] bg-red-400">
        <div>
            <Link className="mr-10" to={"/"}>Homepage</Link>
            <Link className="mr-10" to={"/admin/rooms"}>Rooms</Link>
            <Link className="mr-10" to={"/admin/gallery"}>Gallery</Link>
        </div>

            <Routes path="/*">

                <Route path="/" element={
                    <div className="w-full h-[100vh] bg-blue-400"></div>
                } />

                <Route path="/rooms" element={
                    <div className="w-full h-[100vh] bg-blue-400">
                        <h1>Element 1</h1>
                    </div>
                } />

                <Route path="/gallery" element={
                    <div className="w-full h-[100vh] bg-blue-400">
                        <h2>Element 2</h2>
                    </div>
                }/>

                <Route path="/*" element={
                    <div className="min-w-full h-[100vh] bg-green-400 flex items-center justify-center">
                        <h1 className="text-[50px]">404 Not Found</h1>
                    </div>
                } />

            </Routes>

      </div>
    </>
  );
}
