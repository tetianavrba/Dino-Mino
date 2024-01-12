import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PopUp } from '../Popup';

type HeaderProps = {
  menuPageLink?: boolean;
  gamePageLink?: boolean;
};

export const Header = ({ menuPageLink, gamePageLink }: HeaderProps) => {
  const [popCheck, setPopCheck] = useState(false);
  const handleClickOpenInfo = () => {
    setPopCheck(true);
  };

  return (
    <header>
      {popCheck && <PopUp popCheck={setPopCheck} location={'popupinfo'} />}
      <div className="link_header">
        <Link to="/">
          <img
            className="link-menu"
            src="./img/IconsFunctional/footPrintMain.png"
          />
          <h2>Domů</h2>
        </Link>
      </div>
      <div className="link_header mid_section_header">
        {!menuPageLink && (
          <Link to="/menupage">
            <img className="link-menu" src="./img/IconsFunctional/menu.png" />
            <h2>Menu</h2>
          </Link>
        )}
        {!gamePageLink && (
          <Link to="/gamepage">
            <img
              className="link-menu-puzzle"
              src="./img/IconsFunctional/puzzle.png"
            />
            <h2>Hry</h2>
          </Link>
        )}
      </div>
      <div className="link_header">
        <img
          onClick={handleClickOpenInfo}
          className="link-menu"
          src="./img/IconsFunctional/faq.png"
        />
      </div>
    </header>
  );
};
