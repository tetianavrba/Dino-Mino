import './style.css';
import { useRef } from 'react';
import { PopUp } from '../../../components/Popup';

type DayProps = {
  currentDay: string;
  learning: boolean;
  popCheck: boolean;
  setPopCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Day = ({
  currentDay,
  learning,
  popCheck,
  setPopCheck,
}: DayProps) => {
  const mondayRef = useRef<HTMLDivElement | null>(null);
  const tuesdayRef = useRef<HTMLDivElement | null>(null);
  const wednesdayRef = useRef<HTMLDivElement | null>(null);
  const thursdayRef = useRef<HTMLDivElement | null>(null);
  const fridayRef = useRef<HTMLDivElement | null>(null);
  const saturdayRef = useRef<HTMLDivElement | null>(null);
  const sundayRef = useRef<HTMLDivElement | null>(null);

  const removeAllClasses = () => {
    mondayRef.current?.classList.remove('right-answer__day');
    tuesdayRef.current?.classList.remove('right-answer__day');
    wednesdayRef.current?.classList.remove('right-answer__day');
    thursdayRef.current?.classList.remove('right-answer__day');
    fridayRef.current?.classList.remove('right-answer__day');
    saturdayRef.current?.classList.remove('right-answer__day');
    sundayRef.current?.classList.remove('right-answer__day');

    mondayRef.current?.classList.remove('wrong-answer__day');
    tuesdayRef.current?.classList.remove('wrong-answer__day');
    wednesdayRef.current?.classList.remove('wrong-answer__day');
    thursdayRef.current?.classList.remove('wrong-answer__day');
    fridayRef.current?.classList.remove('wrong-answer__day');
    saturdayRef.current?.classList.remove('wrong-answer__day');
    sundayRef.current?.classList.remove('wrong-answer__day');
  };
  const learningDays = () => {
    if (learning) {
      setPopCheck(true);
    }
  };
  const handleClickMonday = () => {
    removeAllClasses();
    if (currentDay === 'Monday') {
      mondayRef.current?.classList.add('right-answer__day');
    } else {
      mondayRef.current?.classList.add('wrong-answer__day');
    }
  };

  const handleClickTuesday = () => {
    removeAllClasses();
    if (currentDay === 'Tuesday') {
      tuesdayRef.current?.classList.add('right-answer__day');
    } else {
      tuesdayRef.current?.classList.add('wrong-answer__day');
    }
  };
  const handleClickWednesday = () => {
    removeAllClasses();
    if (currentDay === 'Wednesday') {
      wednesdayRef.current?.classList.add('right-answer__day');
    } else {
      wednesdayRef.current?.classList.add('wrong-answer__day');
    }
  };
  const handleClickThursday = () => {
    removeAllClasses();
    if (currentDay === 'Thursday') {
      thursdayRef.current?.classList.add('right-answer__day');
    } else {
      thursdayRef.current?.classList.add('wrong-answer__day');
    }
  };
  const handleClickFriday = () => {
    removeAllClasses();
    if (currentDay === 'Friday') {
      fridayRef.current?.classList.add('right-answer__day');
    } else {
      fridayRef.current?.classList.add('wrong-answer__day');
    }
  };
  const handleClickSaturday = () => {
    removeAllClasses();
    if (currentDay === 'Saturday') {
      saturdayRef.current?.classList.add('right-answer__day');
    } else {
      saturdayRef.current?.classList.add('wrong-answer__day');
    }
  };
  const handleClickSunday = () => {
    removeAllClasses();
    if (currentDay === 'Sunday') {
      sundayRef.current?.classList.add('right-answer__day');
    } else {
      sundayRef.current?.classList.add('wrong-answer__day');
    }
  };

  return (
    <>
      {learning && popCheck && (
        <PopUp popCheck={setPopCheck} location={'days_activity_days'} />
      )}
      <div onClick={learningDays} className="days-box">
        <div
          className="day-box monday"
          ref={mondayRef}
          onClick={handleClickMonday}
        >
          <p>Pondělí</p>
        </div>
        <div
          className="day-box tuesday"
          ref={tuesdayRef}
          onClick={handleClickTuesday}
        >
          <p>Úterý</p>
        </div>
        <div
          className="day-box wednesday"
          ref={wednesdayRef}
          onClick={handleClickWednesday}
        >
          <p>Středa</p>
        </div>
        <div
          className="day-box thursday"
          ref={thursdayRef}
          onClick={handleClickThursday}
        >
          <p>Čtvrtek</p>
        </div>
        <div
          className="day-box friday"
          ref={fridayRef}
          onClick={handleClickFriday}
        >
          <p>Pátek</p>
        </div>
        <div
          className="day-box saturday"
          ref={saturdayRef}
          onClick={handleClickSaturday}
        >
          <p>Sobota</p>
        </div>
        <div
          className="day-box sunday"
          ref={sundayRef}
          onClick={handleClickSunday}
        >
          <p>Neděle</p>
        </div>
      </div>
    </>
  );
};
