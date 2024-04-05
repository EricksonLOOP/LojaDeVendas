import LOOP from "../img/importImgs";
const NavBar = ()=>{
    return(
        <nav className="navBar">
            <img src={LOOP} alt="Logo da loja LOOP" className="logo"/>
            <ul className="itemsNav">
                <a className="itemNav" href="/">Inicio</a>
                <a className="itemNav" href="/loja/sistemas">Sistemas</a>
            </ul>
        </nav>
    )
}

export default NavBar;