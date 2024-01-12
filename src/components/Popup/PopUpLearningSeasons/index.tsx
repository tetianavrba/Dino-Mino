import './style.css';

import { Seasons } from '../../../lib/types';

import { useEffect, useState } from 'react';

type PopUpLearningSeasonsProps = {
  learningSeason: string;
};

export const PopUpLearningSeasons = ({
  learningSeason,
}: PopUpLearningSeasonsProps) => {
  const [seasonsData, setSeasonsData] = useState<Seasons[] | null>(null);
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

  const getPoem = () => {
    const season = seasonsData?.find(
      (season: Seasons) => season.name === learningSeason,
    );
    const poem = season?.poem;
    return poem;
  };
  const getAudio = () => {
    const audioSeason = seasonsData?.find(
      (season: Seasons) => season.name === learningSeason,
    )?.audio;
    return audioSeason;
  };

  return (
    <div className="learning_months">
      <div className="learning_months_box">
        <h1> {learningSeason.toUpperCase()}</h1>

        {seasonsData && <p>{getPoem()}</p>}
        <div className="audio_hint">
          <img src="/img/IconsCalendar/music-notes.png" alt="Noty" />
          {/* <audio controls>
          <source src={monthData && getAudio} type="audio/mpeg" />{' '}
        </audio> */}
          {seasonsData && (
            <audio
              controls
              src={`/audio/seasons/${getAudio()}.m4a`}
              // type="audio/m4a"
            ></audio>
          )}
        </div>
      </div>
    </div>
  );
};
