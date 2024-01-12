import './style.css';

export const PopUpInfo = () => {
  return (
    <div className="info-tutorial">
      <h1>Jak používat Můj první plánovač</h1>
      <div className="legenda">
        <h2>Legenda</h2>
        <div className="legenda_row">
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/footPrintMain.png"
              alt="Ikona start"
            />{' '}
            <h2>Začni hrát a učit se!</h2>
          </div>
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/faq.png"
              alt="Ikona nápovědy"
            />
            <h2>Nápověda</h2>
          </div>
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/dust.png"
              alt="Ikona smaznání uloženého jména"
            />
            <h2>Smazat uložené jméno</h2>
          </div>
        </div>
        <div className="legenda_row">
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/calendar.png"
              alt="Ikona kalendář"
            />
            <h2>Učíme se DNY, MĚSÍCE</h2>
          </div>
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/planner.png"
              alt="Ikona plánovač"
            />
            <h2>Plánovač</h2>
          </div>
          <div className="legenda--div">
            <img
              className="legenda--img"
              src="/img/IconsFunctional/puzzle.png"
              alt="Ikona Hry"
            />
            <h2>Hry</h2>
          </div>
        </div>
      </div>

      <div className="info-animated">
        <div className="info_one">
          <img src="/img/info1.gif" alt="Napíš svoje jméno" />
        </div>
        <div className="info_two">
          <img src="/img/info2.gif" alt="Dej packu" />
        </div>

        <div className="info-tutorial_three">
          <img src="/img/info3.gif" alt="Vyber si aktivitu" />
        </div>
      </div>
    </div>
  );
};
