import '../views/Nav.scss';

function Nav()
{
    return(
        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#news">Todo</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Nav;