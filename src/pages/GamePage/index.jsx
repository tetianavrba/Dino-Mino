import './style.css';
import { Header } from './../../components/Header';
import { Link } from 'react-router-dom';

export const GamePage = () => {
  return (
    <>
      <Header gamePageLink={true} />
      <main className="container__game_page">
        <h1>A jdeme si hrát!</h1>
        <img className="dino-mino__gamepage" src="./img/DinoMinoNoShadow.png" />
        <div className="game_menu">
          <div>
            <Link to="/xmas">
              <img
                className="game_page--presents"
                src="./img/IconsCalendar/christmas-tree2.png"
                alt="Adventní kalendář"
              />
              <h2 className="game_page--h2">Adventní kalendář</h2>
            </Link>
          </div>
          <div>
            <Link to="/monsterpage">
              <img
                className="game_page--dino"
                src="./img/IconsCalendar/monster.png"
                alt="Drag and Drop game"
              />
              <h2 className="game_page--h2">Postav si příšerku</h2>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
