import './style.css';
import { Seasons, Months } from '../../../lib/types';

import dayjs from 'dayjs';
import 'dayjs/locale/cs';
import React, { useState, useEffect } from 'react';

export const PopUpSummaryPrint = () => {
  const [monthData, setMonthData] = useState<Months[] | null>(null);
  const [seasonsData, setSeasonsData] = useState<Seasons[] | null>(null);

  dayjs.locale('cs');
  const currentDay = dayjs().format('dddd');
  const currentMonth = dayjs().format('MMMM');

  const currentSeason = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/mesice.json');
        const data: Months[] = await response.json();
        setMonthData(data);
      } catch (error) {
        console.error('Chyba při načítání dat', error);
      }
    };
    fetchData();
  }, []);

  const getDataMonthPoem = () => {
    return monthData?.find((month: Months) => month.monthName === currentMonth)
      ?.poem;
  };
  const getDataMonthAudio = () => {
    const audioMonth = monthData?.find(
      (month: Months) => month.monthName === currentMonth,
    )?.audio;
    return audioMonth;
  };
  console.log(monthData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./api/rocniobdobi.json');
        const data: Seasons[] = await response.json();
        setSeasonsData(data);
      } catch (error) {
        console.error('Chyba při načítání dat', error);
      }
    };
    fetchData();
  }, []);

  const getDataSeasonPoem = () => {
    return seasonsData?.find(
      (season: Seasons) => season.name === currentSeason(),
    )?.poem;
  };
  const getDataSeasonAudio = () => {
    return seasonsData?.find(
      (season: Seasons) => season.name === currentSeason(),
    )?.audio;
  };

  return (
    <>
      <div className="sumary-container">
        <p>Rok má 365 dní</p>
        <h3>Rok má 4 ročni období.</h3>
        <div className="sumary-winter">
          {seasonsData && (
            <>
              {' '}
              <h2>Teď je: {currentSeason()}</h2>
              <p>{getDataSeasonPoem()}</p>
              <div className="audio_hint">
                <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
                <audio
                  controls
                  src={`/audio/seasons/${getDataSeasonAudio()}.m4a`}
                  // type="audio/m4a"
                ></audio>
              </div>
            </>
          )}
        </div>

        <h3>Rok Má 12 měsíců.</h3>
        <div key={currentMonth} className="sumary-winter">
          {monthData && (
            <>
              <h2>Teď máme: {currentMonth}</h2>
              <p>{getDataMonthPoem()}</p>
              <div className="audio_hint">
                <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
                <audio
                  controls
                  src={`/audio/months/${getDataMonthAudio()}.m4a`}
                  // type="audio/m4a"
                />
              </div>
            </>
          )}
        </div>
        <h3>Týden má 7 dní, dnes je: {currentDay}</h3>
        <div className="print">
          <img
            className="print-icon"
            src="./img/IconsFunctional/printer.png"
            alt="Tisk"
            onClick={() => {
              window.print();
            }}
          ></img>
        </div>
      </div>
    </>
  );
};
