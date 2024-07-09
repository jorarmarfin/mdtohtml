import utpLogo from "../assets/Utplogonuevo.svg.webp";

export const NavBar = () => {
    return(
        <nav className="bg-gray-200 h-14 mb-4">
            <div className="container mx-auto">
                <a className="navbar-brand flex items-center" href="#">
                    <img src={utpLogo} alt="Logo"
                         className=" h-12"/>
                    <span className="text-black">Markdown to HTML</span>
                </a>
            </div>
        </nav>
    )
}