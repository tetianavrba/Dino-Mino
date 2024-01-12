import './style.css';
import { Header } from '../../components/Header';
import { SummaryActivityPage } from './SummaryActivityPage';
import { DaysMonths } from './DaysMonths';
import { PopUp } from '../../components/Popup';
import { useState } from 'react';
import { DefaultActivity } from './DefaultActivity';

export const ActivityPage = () => {
  const [popCheck, setPopCheck] = useState<boolean>(false);
  const [learn, setLearn] = useState<string>('');
  const [popUpSumaryPrint, setPopUpSumaryPrint] = useState<boolean>(false);

  const [learning, setLearning] = useState<boolean>(false);

  const handleClichPrint = () => {
    setPopUpSumaryPrint(true);
  };

  const handleClickLearning = () => {
    setLearning(true);
  };

  const handleClickWhatDay = () => {
    setLearning(false);
  };

  return (
    <>
      <Header />
      <main className="container-activity_page">
        {popUpSumaryPrint && (
          <PopUp
            setPopUpSumaryPrint={setPopUpSumaryPrint}
            location={'pop_print'}
          />
        )}
        <div className="imgs_activity_page">
          {/* <div className="learning_days-months"> */}
          <div className="learning_section">
            <h2>Učení</h2>
            <img
              onClick={handleClickLearning}
              src="/img/IconsFunctional/calendar.png"
              alt="ikona kalendář - učení"
            />
          </div>

          {/* <div className="whatDay"> */}
          <div className="learning_section">
            <h2>Cvičení</h2>
            <img
              onClick={handleClickWhatDay}
              src="/img/IconsFunctional/question-mark.png"
              alt="ikona cvičení"
            />
          </div>
        </div>
        {/* Left Column */}
        <div className="left-column">
          <div className="container_days_months">
            {(learning || learning === null) && (
              <DefaultActivity learning={setLearning} learn={setLearn} />
            )}
            {learning === false && <DaysMonths learn={learn} />}
          </div>
        </div>

        {/* Right Column */}
        <div className="summary">
          {(learning === null || !learning) && (
            <>
              <SummaryActivityPage
                learning={setLearning}
                settingActivity={setLearn}
              />
              <div className="second-row--activity_page">
                <div className="tisk-sumary__activity"></div>
                <div className="sumary-print">
                  <img
                    src="./img/IconsFunctional/printer.png"
                    alt="Printer"
                    onClick={handleClichPrint}
                  />
                </div>
              </div>
            </>
          )}
          {/* Komponenta DaysMonths pro učení měsíců */}
          {learning && (
            <DaysMonths
              popCheck={popCheck}
              setPopCheck={setPopCheck}
              learning={learning}
              learn={learn}
            />
          )}
        </div>
      </main>
    </>
  );
};
