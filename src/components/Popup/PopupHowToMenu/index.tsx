import './style.css';

export const PopuoHowToMenu = () => {
  return (
    <div className="how_to_menu">
      <div>
        <h1>Co všechno můžeš dělat?</h1>
      </div>
      <div>
        <img
          className="how_to_menu--img"
          src="/img/info3.gif"
          alt="Vyber si aktivitu"
        />
      </div>
      <div className="activities_options">
        <div className="activities_options-one">
          <img
            className="activities_options-img"
            src="/img/IconsFunctional/calendar.png"
            alt="Ikona kalendář"
          />
          <h2>Učíme se DNY, MĚSÍCE</h2>
        </div>
        <div className="activities_options-one">
          <img
            className="activities_options-img"
            src="/img/IconsFunctional/planner.png"
            alt="Ikona plánovač"
          />
          <h2>Naplánuj si, co tě čeká tento týden</h2>
        </div>
        <div className="activities_options-one">
          <img
            className="activities_options-img"
            src="/img/IconsFunctional/puzzle.png"
            alt="Ikona Hry"
          />
          <h2>Zahraj si Mínovi oblíbené hry</h2>
        </div>
      </div>
    </div>
  );
};
