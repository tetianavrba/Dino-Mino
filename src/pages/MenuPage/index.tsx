import './style.css';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { osloveni } from './osloveni';
import { Header } from './../../components/Header';
import { PopUp } from '../../components/Popup';

export const MenuPage = () => {
  const [userName, setUserName] = useState('');
  const [popCheckMenuPage, setPopCheckMenuPage] = useState(false);
  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    data !== '' && data !== null && setUserName(data);
  }, []);

  const handleHowToClick = () => {
    setPopCheckMenuPage(true);
  };

  return (
    <>
      {popCheckMenuPage && (
        <PopUp location="howToMenuPage" popCheck={setPopCheckMenuPage} />
      )}
      <Header menuPageLink={true} />
      <main className="container__menu_page">
        <h1 className="userName">Ahoj {osloveni(userName)}</h1>
        <img
          onClick={handleHowToClick}
          className="faq-menupage"
          src="./img/IconsFunctional/faq.png"
          alt="FAQ"
        />
        <div className="menu_page-content">
          <img
            className="dino-mino__menupage"
            src="./img/DinoMinoNoShadow.png"
          />
          <div className="main_menu">
            <div className="menu_icon--one-two">
              <div>
                <Link to="/activitypage">
                  <img
                    className="menu_page--calendar"
                    src="./img/IconsFunctional/calendar.png"
                    alt="Kalendář"
                  />
                </Link>
                <h2>Pojď se učit</h2>
              </div>
              <div>
                <Link to="/plannerpage">
                  <img
                    className="menu_page--planner"
                    src="./img/IconsFunctional/planner.png"
                    alt="Plánovač"
                  />
                </Link>
                <h2>Plánovač</h2>
              </div>
            </div>
            <div>
              <Link to="/gamepage">
                <img
                  className="menu_page--puzzle"
                  src="./img/IconsFunctional/puzzle.png"
                  alt="Hry"
                />
              </Link>
              <h2>Hry</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
