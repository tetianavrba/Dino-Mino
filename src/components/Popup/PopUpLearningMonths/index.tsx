import './style.css';

import { Months } from '../../../lib/types';

import { useEffect, useState } from 'react';

type PopUpLearningMonthsProps = {
  learningMonth: string;
};

export const PopUpLearningMonths = ({
  learningMonth,
}: PopUpLearningMonthsProps) => {
  const [monthData, setMonthData] = useState<Months[] | null>(null);

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

  const getPoem = () => {
    const month = monthData?.find(
      (month: Months) => month.monthName === learningMonth,
    );
    const poemLines = month?.poem;
    return poemLines;
  };
  const getAudio = () => {
    const audioMonth = monthData?.find(
      (month: Months) => month.monthName === learningMonth,
    )?.audio;
    return audioMonth;
  };
  return (
    <div className="learning_months">
      <div className="learning_months_box">
        <h1> {learningMonth.toUpperCase()}</h1>

        {monthData && <p>{getPoem()}</p>}
        <div className="audio_hint">
          <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
          {monthData && (
            <audio controls src={`/audio/months/${getAudio()}.m4a`} />
            // type="audio/m4a">
          )}
        </div>
      </div>
    </div>
  );
};
