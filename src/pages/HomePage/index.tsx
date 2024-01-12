import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PopUp } from '../../components/Popup';

export const HomePage = () => {
  const [popCheck, setPopCheck] = useState(false);
  const [popCheckHT, setPopCheckHT] = useState(false);
  const [userName, setUserName] = useState('');
  const [userNameEnter, setUserNameEnter] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem('userName');
    data !== '' && data !== null && setUserName(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('userName', userName);
  }, [userName]);

  const handleNameDeleteClick = () => {
    confirm('Určitě chcete smazat uloženého uživatele') && setUserName('');
  };

  const onImageClick = () => {
    setPopCheck(true);
  };
  const handleOpenHowTo = () => {
    setPopCheckHT(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNameEnter(true);
    setUserName(e.target.value);
  };

  return (
    <main className="container-main__page">
      {popCheck && <PopUp location={'enterName'} popCheck={setPopCheck} />}
      {popCheckHT && <PopUp location={'popupinfo'} popCheck={setPopCheckHT} />}
      <div className="main__page">
        <h1 className="title">Můj první plánovač</h1>
        <div className="question-name">
          <p>Ahoj, já jsem Dino Míno.</p>
          <label>
            <input
              onChange={handleChange}
              type="text"
              placeholder={
                userName === '' || userName === null
                  ? 'Jak se jmenuješ?'
                  : userName
              }
              className="custom-input"
              value={userName !== '' ? userName : ''}
            ></input>
          </label>
        </div>
        <div className="dino-foot">
          <img
            className="dino-mino__main-page"
            src="./img/DinoMinoNoShadow.png"
          />
          {userName === '' || userName === null ? (
            <img
              onClick={onImageClick}
              className="foot-print__main-page"
              src="./img/IconsFunctional/footPrintMain.png"
            />
          ) : (
            <Link to="/menupage">
              <img
                className="foot-print__main-page"
                src="./img/IconsFunctional/footPrintMain.png"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="how_to--home_page">
        <div onClick={handleNameDeleteClick}>
          <img
            className="sweep-HomePage "
            src="./img/IconsFunctional/dust.png"
            alt="remove activity"
          />
          <h2> Smazat uložené jméno</h2>
        </div>
        <div onClick={handleOpenHowTo}>
          <img
            className="faq-HomePage"
            src="./img/IconsFunctional/faq.png"
            alt="nápověda"
          />
          <h2> Nápověda</h2>
        </div>
      </div>
    </main>
  );
};
