import logo from './logo.svg';
import './App.css';

function App() {
  let link = 'https://khoahoc.tv/dan-ca-map-dau-bua-tu-tap-khi-trang-tron-chuyen-gi-xay-ra-129706';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>NguyenMinhThong creating Website</h1>
        <a href = {link} target = "_blank">Science</a>
      </header>
    </div>
  );
}

export default App;
