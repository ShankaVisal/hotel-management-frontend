import UserTag from "../userData/userdata.jsx";


function Header(){
    return(
        <header className="w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]">
            <h1 className="text-white text-[30px]">Leonine villa</h1>
            <UserTag imageLink = "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" name ="Shanka Visal"/>
        </header>
    )
}

export default Header;