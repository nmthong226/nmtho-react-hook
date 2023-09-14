import Nav from '../views/Nav.js';
import logo from '../views/logo.svg';

const Home = () => {
    return(
        <header className="App-header">
            <div>
                <Nav />
                <img src= {logo} className="App-logo" alt="logo" />
                <h1>Home Page</h1>
            </div>
        </header>
    )
}
export default Home;