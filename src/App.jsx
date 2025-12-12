import './App.css'
import logo from './assets/Skyview_Bistro_logo_small_dark_gray.png'

function App() {
  return (
    <div className="coming-soon-container">
      <div className="content">
        <img src={logo} className="logo" alt="Skyview Bistro and Lounge" />
        <h2 className="coming-soon-text">Coming Soon</h2>
        {/* <h2 className="restaurant-name">Skyview Bistro and Lounge</h2> */}
        <p className="tagline">An elevated dining experience is on the horizon</p>
      </div>
    </div>
  )
}

export default App
