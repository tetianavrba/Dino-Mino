import './style.css';

import { Ornaments } from './../../../lib/types';

type PopUpXmasProps = {
  popContent: Ornaments;
  day: number;
};

export const PopUpXmas = ({ popContent, day }: PopUpXmasProps) => {
  const { id, element, number, text, additional } = popContent;
  const nNumber = Number(number);
  return (
    <div className="popup_xmas">
      <div className="popup_xmas_general">
        {number === '' && (
          <div className="wrong_day_Xmas">
            <h2>Tady DNESKA ještě nic není, hledej dál.</h2>
            <h2>Dnes je {day}.prosince</h2>
          </div>
        )}
        {number !== '' && (
          <>
            <div className="xmas_dates">
              {Number(number) === day && (
                <h2>
                  Dnes je
                  <i>
                    <strong> {day}. prosince</strong>
                  </i>
                </h2>
              )}
              {nNumber === day && 24 - nNumber !== 0 && (
                <h2>Do Štědrého dne zbývá {24 - nNumber} dní.</h2>
              )}
              {nNumber === day &&
                (24 - nNumber) % 7 === 0 &&
                (24 - nNumber) / 7 !== 1 && (
                  <h2>To jsou {Math.floor((24 - nNumber) / 7)} týdny.</h2>
                )}
              {nNumber === day &&
                (24 - nNumber) % 7 === 0 &&
                (24 - nNumber) / 7 === 1 && (
                  <h2>Ježíšek přijde už za jeden týden.</h2>
                )}
              <div className="rhymes">
                {24 - nNumber === 0 ? (
                  <h2>VESELÉ VÁNOCE</h2>
                ) : (
                  <h2>Říkanka dne:</h2>
                )}
                {24 - nNumber === 0 && (
                  <div className="audio">
                    <h2>Dnes je </h2>
                    <h2>ŠTĚDRÝ DEN</h2>
                    <img src="./img/IconsCalendar/music-notes.png" alt="Noty" />
                    <audio controls>
                      <source src="./audio/01Vanoce.mp3" type="audio/mpeg" />{' '}
                    </audio>
                  </div>
                )}
                <h3>{text}</h3>
              </div>
            </div>
            <div className="coloring_div">
              <a href={`./img/coloring/omalovanky${number.toString()}.jpg`}>
                <h3>🎁 Omalovánka ke stažení</h3>
                <img
                  className="coloring"
                  src={`./img/coloring/omalovanky${number.toString()}.jpg`}
                  alt="Omalovánka ke stažení"
                />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
