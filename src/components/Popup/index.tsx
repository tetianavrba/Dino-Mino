import './style.css';

import { type Ornaments } from './../../lib/types';

import { PopUpLearningDays } from './PopUpLearningDays';
import { PopUpXmas } from './PopUpXmas';
import { PopUpAlert } from './PopupAlert';
import { PopUpSummaryPrint } from './PopUpSummaryPrint';
import { PopUpInfo } from './PopUpInfo';
import { PopUpEnterName } from './PopupEnterName';
import { PopuoHowToMenu } from './PopupHowToMenu';
import { PopUpInfoPlanner } from './PopUpInfoPlanner';
import { PopUpInfoGame } from './PopUpInfoGame';
import { PopUpLearningMonths } from './PopUpLearningMonths';
import { PopUpLearningSeasons } from './PopUpLearningSeasons';

type PopUpProps = {
  popCheck: React.Dispatch<React.SetStateAction<boolean>>;
  location: string;
  popContent?: Ornaments;
  setPopUpSumaryPrint?: React.Dispatch<React.SetStateAction<boolean>>;
  day?: number;
  learningMonth?: string;
  learningSeason?: string;
};
export const PopUp = ({
  popCheck,
  location,
  popContent,
  setPopUpSumaryPrint,
  day,
  learningMonth,
  learningSeason,
}: PopUpProps) => {
  const handleClick = () => {
    if (location === 'pop_print') {
      return setPopUpSumaryPrint?.(false);
    }
    popCheck(false);
  };

  return (
    <div onClick={handleClick}>
      {' '}
      <div className="popup">
        {location === 'days_activity_days' && <PopUpLearningDays />}
        {location === 'days_activity_months' && (
          <PopUpLearningMonths learningMonth={learningMonth!} />
        )}
        {location === 'days_activity_seasons' && (
          <PopUpLearningSeasons learningSeason={learningSeason!} />
        )}
        {location === 'xmas' && (
          <PopUpXmas day={day!} popContent={popContent!} />
        )}
        {location === 'pop_print' && <PopUpSummaryPrint />}
        {location === 'alert' && <PopUpAlert />}
        {location === 'popupinfo' && <PopUpInfo />}
        {location === 'enterName' && <PopUpEnterName />}
        {location === 'howToMenuPage' && <PopuoHowToMenu />}
        {location === 'popupinfoplanner' && <PopUpInfoPlanner />}
        {location === 'popupinfogame' && <PopUpInfoGame />}
      </div>
      <div className="overlay"></div>
    </div>
  );
};
