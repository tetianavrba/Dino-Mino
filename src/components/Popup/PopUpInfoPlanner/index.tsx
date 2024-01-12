import './style.css';

export const PopUpInfoPlanner = () => {
  return (
    <div className="pop-planner">
      <div className="info-tutorial">
        <h1>Jak používat plánovač</h1>
        <div className="legenda">
          <div className="legenda_row">
            <div className="legenda--planner">
              <img
                className="legenda--img"
                src="/img/IconsFunctional/faq.png"
                alt="Ikona nápovědy"
              />
              <h2>Nápověda</h2>
            </div>
            <div className="legenda--planner">
              <button className="adding_button">
                <img
                  src="./img/IconsFunctional/plus.png"
                  alt="add-button"
                  className="cross"
                />
              </button>
              <h2>Přidat aktivitu/obrázek</h2>
            </div>
            <div className="legenda--planner">
              <img
                src="./img/IconsFunctional/remove.png"
                alt="remove activity"
              ></img>
              <h2>Vymazat jednu aktivitu/obrázek</h2>
            </div>
            <div className="legenda--planner">
              <img
                className="legenda--img"
                src="/img/IconsFunctional/dust.png"
                alt="Ikona smaznání uloženého jména"
              />
              <h2>Vymazat plán na celý týden</h2>
            </div>

            <div className="legenda--planner">
              <img
                src="./img/IconsFunctional/printer.png"
                alt="print_planner"
              ></img>
              <h2>Vytisknout plán</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
