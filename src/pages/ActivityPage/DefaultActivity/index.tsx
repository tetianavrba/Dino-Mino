import './style.css';

type DeafaultActivityProps = {
  learn: React.Dispatch<React.SetStateAction<string>>;
  learning: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DefaultActivity = ({ learn, learning }: DeafaultActivityProps) => {
  const handleClickDays = () => {
    learning(true);
    learn('days');
  };

  const handleClickMonths = () => {
    learning(true);
    learn('months');
  };
  const handleClickSeasons = () => {
    learning(true);
    learn('seasons');
  };
  return (
    <div className="activity-box">
      {/* <div className="activity-dino_reading">
        <img
          className="dinosaurus_asking"
          src="/img/DinoReading.png"
          alt="Dino míno se učí"
        />
      </div> */}
      <div className="default_activity">
        <h2>Rok má 12 měsíců. </h2>
        <h2>Rok má 4 roční období </h2>
        <h2>Rok trvá od narozenin 🎂 do narozenin 🎂.</h2>
        <h1>Pojď se naučit víc! </h1>
        <div className="learning_options">
          <div onClick={handleClickDays}>
            <h2>DNY</h2>
            <img
              className="months-total"
              src="./img/IconsFunctional/week.png"
              alt="Týden má 7 dní"
            />
          </div>
          <div onClick={handleClickMonths}>
            <h2>MĚSÍCE</h2>
            <img
              className="months-total"
              src="./img/IconsFunctional/number-12.png"
              alt="Rok má 12 měsíců"
            />
          </div>
          <div onClick={handleClickSeasons}>
            <h2>ROČNÍ OBDOBÍ</h2>
            <img
              className="months-total"
              src="./img/IconsFunctional/season.png"
              alt="Rok má 4 roční období"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
