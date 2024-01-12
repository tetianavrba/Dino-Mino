import './style.css';
import { useRef, useState } from 'react';

import { PopUp } from '../../../components/Popup';

type MonthsProps = {
  learning: boolean;
  currentMonth: number;
  popCheck: boolean;
  setPopCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Months = ({
  learning,
  currentMonth,
  popCheck,
  setPopCheck,
}: MonthsPropos) => {
  const [learningMonth, setLearningMonth] = useState(currentMonth);

  const januaryRef = useRef();
  const februaryRef = useRef();
  const marchRef = useRef();
  const aprilRef = useRef();
  const mayRef = useRef();
  const juneRef = useRef();
  const julyRef = useRef();
  const augustRef = useRef();
  const septemberRef = useRef();
  const octoberRef = useRef();
  const novemberRef = useRef();
  const decemberRef = useRef();

  const removeAllClasses = () => {
    januaryRef.current.classList.remove('right-answer__months');
    februaryRef.current.classList.remove('right-answer__months');
    marchRef.current.classList.remove('right-answer__months');
    aprilRef.current.classList.remove('right-answer__months');
    mayRef.current.classList.remove('right-answer__months');
    juneRef.current.classList.remove('right-answer__months');
    julyRef.current.classList.remove('right-answer__months');
    augustRef.current.classList.remove('right-answer__months');
    septemberRef.current.classList.remove('right-answer__months');
    octoberRef.current.classList.remove('right-answer__months');
    novemberRef.current.classList.remove('right-answer__months');
    decemberRef.current.classList.remove('right-answer__months');

    januaryRef.current.classList.remove('wrong-answer__months');
    februaryRef.current.classList.remove('wrong-answer__months');
    marchRef.current.classList.remove('wrong-answer__months');
    aprilRef.current.classList.remove('wrong-answer__months');
    mayRef.current.classList.remove('wrong-answer__months');
    juneRef.current.classList.remove('wrong-answer__months');
    julyRef.current.classList.remove('wrong-answer__months');
    augustRef.current.classList.remove('wrong-answer__months');
    septemberRef.current.classList.remove('wrong-answer__months');
    octoberRef.current.classList.remove('wrong-answer__months');
    novemberRef.current.classList.remove('wrong-answer__months');
    decemberRef.current.classList.remove('wrong-answer__months');
  };
  const handleClickJanuary = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('leden');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 0) {
        januaryRef.current.classList.add('right-answer__months');
      } else {
        januaryRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickFebruary = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('únor');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 1) {
        februaryRef.current.classList.add('right-answer__months');
      } else {
        februaryRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickMarch = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('březen');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 2) {
        marchRef.current.classList.add('right-answer__months');
      } else {
        marchRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickApril = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('duben');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 3) {
        aprilRef.current.classList.add('right-answer__months');
      } else {
        aprilRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickMay = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('květen');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 4) {
        mayRef.current.classList.add('right-answer__months');
      } else {
        mayRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickJune = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('červen');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 5) {
        juneRef.current.classList.add('right-answer__months');
      } else {
        juneRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickJuly = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('červenec');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 6) {
        julyRef.current.classList.add('right-answer__months');
      } else {
        julyRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickAugust = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('srpen');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 7) {
        augustRef.current.classList.add('right-answer__months');
      } else {
        augustRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickSeptember = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('září');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 8) {
        septemberRef.current.classList.add('right-answer__months');
      } else {
        septemberRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickOctober = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('říjen');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 9) {
        octoberRef.current.classList.add('right-answer__months');
      } else {
        octoberRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickNovember = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('listopad');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 10) {
        novemberRef.current.classList.add('right-answer__months');
      } else {
        novemberRef.current.classList.add('wrong-answer__months');
      }
    }
  };
  const handleClickDecember = () => {
    if (learning) {
      setPopCheck(true);
      setLearningMonth('prosinec');
    }
    if (!learning) {
      removeAllClasses();
      if (currentMonth === 11) {
        decemberRef.current.classList.add('right-answer__months');
      } else {
        decemberRef.current.classList.add('wrong-answer__months');
      }
    }
  };

  return (
    <div className="mounths-box">
      {learning && popCheck && (
        <PopUp
          popCheck={setPopCheck}
          location={'days_activity_months'}
          learningMonth={learningMonth}
        />
      )}
      <div className="season">
        <div className="mounths">
          <div
            className="mounth-box january"
            ref={januaryRef}
            onClick={handleClickJanuary}
          >
            <p>Leden</p>
          </div>
          <div
            className="mounth-box february"
            ref={februaryRef}
            onClick={handleClickFebruary}
          >
            <p>Únor</p>
          </div>
        </div>
        <div className="winter-img">
          <img
            className="season-winter"
            src="./img/seasonWinter.png"
            alt="Winter"
          />
        </div>
      </div>

      <div className="season">
        <div className="spring-img">
          <img
            className="season-spring"
            src="./img/seasonSpring.png"
            alt="Spring"
          />
        </div>
        <div className="mounths">
          <div
            className="mounth-box march"
            ref={marchRef}
            onClick={handleClickMarch}
          >
            <p>Březen</p>
          </div>
          <div
            className="mounth-box april"
            ref={aprilRef}
            onClick={handleClickApril}
          >
            <p>Duben</p>
          </div>
          <div className="mounth-box may" ref={mayRef} onClick={handleClickMay}>
            <p>Květen</p>
          </div>
        </div>
      </div>

      <div className="season">
        <div className="mounths">
          <div
            className="mounth-box june"
            ref={juneRef}
            onClick={handleClickJune}
          >
            <p>Červen</p>
          </div>
          <div
            className="mounth-box july"
            ref={julyRef}
            onClick={handleClickJuly}
          >
            <p>Červenec</p>
          </div>
          <div
            className="mounth-box august"
            ref={augustRef}
            onClick={handleClickAugust}
          >
            <p>Srpen</p>
          </div>
        </div>
        <div className="summer-img">
          <img
            className="season-summer"
            src="./img/seasonSummer.png"
            alt="Summer"
          />
        </div>
      </div>

      <div className="season">
        <div className="autumn-img">
          <img
            className="season-autumn"
            src="./img/seasonFall.png"
            alt="Autumn"
          />
        </div>
        <div className="mounths">
          <div
            className="mounth-box september"
            ref={septemberRef}
            onClick={handleClickSeptember}
          >
            <p>Září</p>
          </div>
          <div
            className="mounth-box october"
            ref={octoberRef}
            onClick={handleClickOctober}
          >
            <p>Říjen</p>
          </div>
          <div
            className="mounth-box november"
            ref={novemberRef}
            onClick={handleClickNovember}
          >
            <p>Listopad</p>
          </div>
        </div>
      </div>

      <div className="season">
        <div className="mounths">
          <div
            className="mounth-box december"
            ref={decemberRef}
            onClick={handleClickDecember}
          >
            <p>Prosinec</p>
          </div>
        </div>
        <div className="winter-img">
          <img
            className="season-winter"
            src="./img/seasonWinter.png"
            alt="Winter"
          />
        </div>
      </div>
    </div>
  );
};
