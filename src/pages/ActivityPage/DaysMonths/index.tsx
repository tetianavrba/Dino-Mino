import './style.css';
import { Day } from '../Day';
import { Months } from '../Months';
import { Seasons } from '../Seasons';
import dayjs from 'dayjs';

type DaysMonthsProps = {
  learn: string;
  learning?: boolean;
  popCheck?: boolean;
  setPopCheck?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DaysMonths = ({
  learn,
  learning,
  popCheck,
  setPopCheck,
}: DaysMonthsProps) => {
  const currentDay = dayjs().format('dddd');
  const currentMonth = dayjs().month();

  const currentSeason = () => {
    const currentMonth = dayjs().month();

    if (currentMonth >= 2 && currentMonth <= 4) {
      return 'Jaro';
    } else if (currentMonth >= 5 && currentMonth <= 7) {
      return 'Léto';
    } else if (currentMonth >= 8 && currentMonth <= 10) {
      return 'Podzim';
    } else {
      return 'Zima';
    }
  };

  return (
    <>
      <div className="days_months">
        {learn === '' && !learning && (
          <>
            <div className="title_summary">
              <h1>Víš jaký je dneska den?</h1>
            </div>
            <img
              className="dinosaurus_asking"
              src="/img/dinoAsking.png"
              alt="Dino míno se učí"
            />
          </>
        )}
        {learn === '' && learning && (
          <>
            <div className="title_summary">
              <h1>Pojď se naučit víc!</h1>
            </div>
            <img
              className="dinosaurus_asking"
              src="/img/dinoAsking.png"
              alt="Dino míno se učí"
            />
          </>
        )}
        {learn === 'days' && (
          <Day
            popCheck={popCheck}
            setPopCheck={setPopCheck}
            learning={learning}
            currentDay={currentDay}
          />
        )}
        {learn === 'months' && (
          <Months
            popCheck={popCheck}
            setPopCheck={setPopCheck}
            learning={learning}
            currentMonth={currentMonth}
          />
        )}
        {learn === 'seasons' && (
          <Seasons
            popCheck={popCheck}
            setPopCheck={setPopCheck}
            learning={learning}
            season={currentSeason}
          />
        )}
      </div>
    </>
  );
};
