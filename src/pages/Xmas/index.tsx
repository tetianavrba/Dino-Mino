import './style.css';
import { type Ornaments } from './../../lib/types';
import { Header } from './../../components/Header';
import { PopUp } from '../../components/Popup';
import { XmasTreeButtons } from './XmasTreeButtons';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Xmas = () => {
  const [treeDec, setTreeDec] = useState<Ornaments[] | null>(null);

  const [popupTreeDec, setPopUpTreeDec] = useState<Ornaments | null>(null);

  const [popCheck, setPopCheck] = useState(false);

  const [clickedDay, setClickedDay] = useState(0);

  const day = dayjs().date();

  useEffect(() => {
    const fetchOrnamentData = async () => {
      const response = await fetch('./api/xmasButtons.json');
      if (!response.ok) {
        console.log('Nemůžu načíst data, něco je špatně.');
      }
      const data = await response.json();
      setTreeDec(data);
    };
    fetchOrnamentData();
  }, []);

  return (
    <>
      <Header />
      <main className="xmas_tree-container">
        <div className="advent_calendar_dino">
          <img src="./img/dinoWinter2.png" />
        </div>
        {popCheck && (
          <PopUp
            popContent={popupTreeDec!}
            popCheck={setPopCheck}
            location={'xmas'}
            // clickedDay={clickedDay}
            day={day}
          />
        )}
        <XmasTreeButtons
          tree={treeDec!}
          popCheck={setPopCheck}
          onChoice={setPopUpTreeDec}
          clickedDay={setClickedDay}
          day={day}
        />
      </main>
    </>
  );
};
