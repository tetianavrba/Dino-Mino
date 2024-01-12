import './style.css';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <div className="error-container">
        <div className="error-container--content">
          <h2 className="error">404: Tady nic není</h2>
          <p>Asi jste se spletli</p>
          <Link className="back-home" to="/">
            Zpět Domů
            <img src="./img/IconsFunctional/footPrintMain.png" />
          </Link>
          <img className="dino--error_page" src="./img/DinoErrorPage.png" />
        </div>
      </div>
    </>
  );
};
