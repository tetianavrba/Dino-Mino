import './style.css';

type SummaryActivityPageProps = {
  settingActivity: React.Dispatch<React.SetStateAction<string>>;
  learning: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SummaryActivityPage = ({
  settingActivity,
  learning,
}: SummaryActivityPageProps) => {
  const handleClickSeasons = () => {
    settingActivity('seasons');
    learning(false);
  };

  const handleClickMonths = () => {
    learning(false);
    settingActivity('months');
  };

  const handleClickDays = () => {
    learning(false);
    settingActivity('days');
  };
  return (
    <>
      <div className="summary_activity_page">
        <div className="activitiy_page-task">
          <h3>Jaké máme roční období?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/season.png"
            alt="Rok má 4 roční období"
            onClick={handleClickSeasons}
          />
        </div>

        <div className="activitiy_page-task">
          <h3>Jaký je měsíc?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/number-12.png"
            alt="Rok má 12 měsíců"
            onClick={handleClickMonths}
          />
        </div>
        <div className="activitiy_page-task">
          <h3>Jaký je dneska den?</h3>
          <img
            className="months-total"
            src="./img/IconsFunctional/week.png"
            alt="Týden má 7 dní"
            onClick={handleClickDays}
          />
        </div>
      </div>
    </>
  );
};
