import { Link, Route, Routes } from "react-router-dom";
import { FaCalendarCheck, FaListAlt, FaBed, FaUsers, FaComments, FaImages } from "react-icons/fa";
import AdminBooking from "../bookings/adminBooking.jsx";
import AdminCategories from "../categories/adminCategories.jsx";
import Rooms from "../rooms/rooms.jsx";
import Users from "../users/users.jsx";
import AdminFeedback from "../feedback/adminFeedbacks.jsx";
import GalleryItems from "../galleryItems/galleryItems.jsx";

export default function AdminPage() {
  return (
    <>
      <div className="w-full max-h-[100vh] overflow-hidden flex">

        <div className="w-[20%] h-[100vh] bg-blue-600 flex flex-col items-start py-4 px-4">

          <div className="text-white text-[24px] hover:font-bold flex items-center mb-6 w-full">
            <FaCalendarCheck className="mr-3" />
            <Link to="/admin/bookings" className="hover:underline">Bookings</Link>
          </div>

          <div className="text-white text-[24px] hover:font-bold flex items-center mb-6 w-full">
            <FaListAlt className="mr-3" />
            <Link to="/admin/categories" className="hover:underline">Categories</Link>
          </div>

          <div className="text-white text-[24px] hover:font-bold flex items-center mb-6 w-full">
            <FaBed className="mr-3" />
            <Link to="/admin/rooms" className="hover:underline">Rooms</Link>
          </div>

          <div className="text-white text-[24px] hover:font-bold flex items-center mb-6 w-full">
            <FaUsers className="mr-3" />
            <Link to="/admin/users" className="hover:underline">Users</Link>
          </div>

          <div className="text-white text-[24px] hover:font-bold flex items-center mb-6 w-full">
            <FaComments className="mr-3" />
            <Link to="/admin/feedbacks" className="hover:underline">Feedback</Link>
          </div>

          <div className="text-white text-[24px] hover:font-bold flex items-center w-full">
            <FaImages className="mr-3" />
            <Link to="/admin/gallery-items" className="hover:underline">Gallery Items</Link>
          </div>
        </div>

        <div className="w-[80%] max-h-[100vh] overflow-y-scroll bg-blue-400 overflow-auto">

            <Routes path="/">

                <Route path="/bookings" element={<AdminBooking/>}></Route>
                <Route path="/categories" element={<AdminCategories/>}></Route>
                <Route path="/rooms" element={<Rooms/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
                <Route path="/feedbacks" element={<AdminFeedback/>}></Route>
                <Route path="/gallery-items" element={<GalleryItems/>}></Route>

            </Routes>

        </div>

      </div>
    </>
  );
}
