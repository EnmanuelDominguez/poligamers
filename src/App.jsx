import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import escudo from './icons/escudopoligamers.png';
import ValorantTeam from './components/ValorantTeam/ValorantTeam';
import LolTeam from './components/LolTeam/LolTeam';
import { Link } from 'react-router-dom';

function App() {
  const [popUpOpen, setPopUpOpen] = useState(false);

  const togglePopUp = () => {
    setPopUpOpen(!popUpOpen);
  };
  const closePopUp = () => {
    if (popUpOpen == true) {
      setPopUpOpen(!popUpOpen);
    }
  };

  return (
    <>
      <div className={`header ${popUpOpen ? 'popup-open' : ''}`}>
        <div className="list">
          <button className="listbutton">
            <label className="listbox" htmlFor="listbox">
              <input type="checkbox" id="listbox" />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </button>
          <button id="close-btn" onClick={togglePopUp} />
          <button id="close-btn-page" onClick={closePopUp} />
          <div id="notification-popup" className={popUpOpen ? 'active' : ''}>
            <div className="popup-content">
              <div className="popup-header">
                <h3>Nuestros equipos</h3>
              </div>
              <ul className="notifications-list">
                <a href="/valorant"><li>Valorant</li></a>
                <a href="/lol"><li>League of Legends</li></a>
                <li>FIFA</li>
                <li>Super Smash Bros Ultimate</li>
              </ul>
              <div className="popup-footer">
                <h3>Nuestros Sponsors</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="header-logos">
          <a href="/"><img src={escudo} className="poligamers" alt="Poligamers Logo" /></a>
        </div>
      </div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/valorant" element={<ValorantTeam />} />
            <Route exact path="/lol" element={<LolTeam />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;