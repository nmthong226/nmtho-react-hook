import Nav from '../views/Nav.js';
import logo from '../views/logo.svg';

const About = () => {
    return(
        <header className="App-header">
            <div>
                <Nav />
                <img src= {logo} className="App-logo" alt="logo" />
                <h1>About Page</h1>
            </div>
        </header>
    )
}
export default About;