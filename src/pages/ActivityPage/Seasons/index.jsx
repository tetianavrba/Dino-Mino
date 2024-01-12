import './style.css';

import React, { useRef, useState } from 'react';
import dayjs from 'dayjs';

import { PopUp } from '../../../components/Popup';

export const Seasons = ({ learning, popCheck, setPopCheck }) => {
  const [learningSeason, setLearingSeason] = useState('');

  const winterRef = useRef();
  const springRef = useRef();
  const summerRef = useRef();
  const autumnRef = useRef();

  const IsCurrentSeason = () => {
    const currentMonth = dayjs().month() + 1;

    if (currentMonth >= 3 && currentMonth <= 5) {
      return 'Jaro';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
      return 'Léto';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
      return 'Podzim';
    } else {
      return 'Zima';
    }
  };

  const currentSeason = IsCurrentSeason();

  const removeAllClasses = () => {
    winterRef.current.classList.remove('right-answer__season');
    springRef.current.classList.remove('right-answer__season');
    summerRef.current.classList.remove('right-answer__season');
    autumnRef.current.classList.remove('right-answer__season');
    winterRef.current.classList.remove('wrong-answer__season');
    springRef.current.classList.remove('wrong-answer__season');
    summerRef.current.classList.remove('wrong-answer__season');
    autumnRef.current.classList.remove('wrong-answer__season');
  };

  const handleClickSpring = () => {
    if (learning) {
      setPopCheck(true);
      setLearingSeason('Jaro');
    }
    if (!learning) {
      removeAllClasses();
      if (currentSeason === 'Jaro') {
        springRef.current.classList.add('right-answer__season');
      } else {
        springRef.current.classList.add('wrong-answer__season');
      }
    }
  };

  const handleClickSummer = () => {
    if (learning) {
      setPopCheck(true);
      setLearingSeason('Léto');
    }
    if (!learning) {
      removeAllClasses();
      if (currentSeason === 'Léto') {
        summerRef.current.classList.add('right-answer__season');
      } else {
        summerRef.current.classList.add('wrong-answer__season');
      }
    }
  };

  const handleClickAutumn = () => {
    if (learning) {
      setPopCheck(true);
      setLearingSeason('Podzim');
    }
    if (!learning) {
      removeAllClasses();
      if (currentSeason === 'Podzim') {
        autumnRef.current.classList.add('right-answer__season');
      } else {
        autumnRef.current.classList.add('wrong-answer__season');
      }
    }
  };
  const handleClickWinter = () => {
    if (learning) {
      setPopCheck(true);
      setLearingSeason('Zima');
    }
    if (!learning) {
      removeAllClasses();
      if (currentSeason === 'Zima') {
        winterRef.current.classList.add('right-answer__season');
      } else {
        winterRef.current.classList.add('wrong-answer__season');
      }
    }
  };

  return (
    <>
      {learning && popCheck && (
        <PopUp
          popCheck={setPopCheck}
          location={'days_activity_seasons'}
          learningSeason={learningSeason}
        />
      )}
      <div className="season-box">
        <div className="season-box_two" onClick={handleClickSpring}>
          <div className="season-spring" ref={springRef}>
            <div className="season-spring_content">
              <h2 className="season-title spring">Jaro</h2>
              <img src="./img/seasonSpring.png" alt="Spring" />
            </div>
          </div>
        </div>
        <div className="season-box_two" onClick={handleClickSummer}>
          <div className="season-summer" ref={summerRef}>
            <div className="season-summer_content">
              <h2 className="season-title summer">Léto</h2>
              <img src="./img/seasonSummer.png" alt="Summer" />
            </div>
          </div>
        </div>
      </div>

      <div className="season-box">
        <div className="season-box_two" onClick={handleClickAutumn}>
          <div className="season-autumn" ref={autumnRef}>
            <div className="season-autumn_content">
              <h2 className="season-title autumn">Podzim</h2>
              <img src="./img/seasonFall.png" alt="Autumn" />
            </div>
          </div>
        </div>
        <div className="season-box_two" onClick={handleClickWinter}>
          <div className="season-winter" ref={winterRef}>
            <div className="season-winter_content">
              <h2 className="season-title winter">Zima</h2>

              <img src="./img/seasonWinter.png" alt="Winter" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
