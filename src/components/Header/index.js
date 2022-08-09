import NavBar from "../NavBar";

const Header = () => {
    return (
        <>
            <header className="header">
                <img src="/logo192.png" alt="logo" width="40px" height="40px" />
                <h1 className="titulo">Titulo</h1>
                <NavBar type="header"/>
            </header>
            
        </>
    )
}

export default Header;