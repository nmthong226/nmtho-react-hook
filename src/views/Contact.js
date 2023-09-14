import Nav from '../views/Nav.js';
import logo from '../views/logo.svg';
import WeatherForecast from './WeatherForecast.js';

const Contact = () => {
    return(
        <header className="App-header">
            <div>
                <Nav />
                <img src= {logo} className="App-logo" alt="logo" />
                <h1>Contact Page</h1>
                <WeatherForecast />
            </div>
        </header>
    )
}
export default Contact;