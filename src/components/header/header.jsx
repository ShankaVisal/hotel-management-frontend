import UserTag from "../userData/userdata.jsx";
import "./header.css"

function Header(){
    return(
        <header>
            <h1 className="text-red-500 text-[30px]">Hotel Management System</h1>
            <UserTag imageLink = "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" name ="Testing"/>
        </header>
    )
}

export default Header;