import './style.css';
import { useState } from 'react';
import { PopUp } from '../../../components/Popup';

export const MonsterTitle = () => {
  const [popCheck, setPopCheck] = useState(false);
  const handleClickOpenInfo = () => {
    setPopCheck(true);
  };
  return (
    <>
      {popCheck && <PopUp popCheck={setPopCheck} location={'popupinfogame'} />}
      <div className="monster-container__title">
        <div className="monster-title">
          <img src="./img/Monster/mon.png" alt="Mon"></img>
          <img src="./img/Monster/ster.png" alt="Ster"></img>
          <img
            className="monster_2"
            src="./img/Monster/monster_2.png"
            alt="Monster"
          ></img>
          <img src="./img/Monster/set.png" alt="Set"></img>
        </div>
        <div className="monster-tutorial">
          <img
            onClick={handleClickOpenInfo}
            className="faq-gamepage"
            src="./img/IconsFunctional/faq.png"
            alt="FAQ"
          />
        </div>
      </div>
    </>
  );
};
