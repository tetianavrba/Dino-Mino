import './style.css';
import { Ornaments } from '../../../lib/types';

type XmasTreeButtonsProps = {
  tree: Ornaments[];
  onChoice: React.Dispatch<React.SetStateAction<Ornaments | null>>;
  popCheck: React.Dispatch<React.SetStateAction<boolean>>;
  clickedDay: React.Dispatch<React.SetStateAction<number>>;
  day: number;
};

export const XmasTreeButtons = ({
  tree,
  onChoice,
  popCheck,
  clickedDay,
  day,
}: XmasTreeButtonsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const banka = (e.target as HTMLButtonElement).textContent;
    const emptyBanka = {
      id: 0,
      element: 'x',
      number: '',
      text: '',
      additional: '',
    };

    if (Number(banka) <= day) {
      tree.map((ornament: Ornaments) => {
        if (ornament.number === banka) {
          const onClickDay = Number(ornament.number);
          onChoice(ornament);
          popCheck(true);
          clickedDay(onClickDay);
        }
      });
    } else {
      onChoice(emptyBanka);
      popCheck(true);
      clickedDay(day);
    }
  };

  return (
    <div className="xmas_tree">
      <h2>Adventní kalendář</h2>
      <div className="xmas_tree_buttons">
        <div className="tree xmasTreeRow--1">
          <button id="xmas_star" onClick={handleClick}>
            24
          </button>
        </div>
        <div className="tree xmasTreeRow--2">
          <button className="xmas_red" onClick={handleClick}>
            3
          </button>
          <button className="xmas_white" onClick={handleClick}>
            21
          </button>
        </div>
        <div className="tree xmasTreeRow--3">
          <button className="xmas_green" onClick={handleClick}></button>
          <button className="xmas_cherry" onClick={handleClick}>
            12
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            9
          </button>
        </div>
        <div className="tree xmasTreeRow--4">
          <button className="xmas_blue--dark" onClick={handleClick}>
            13
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_green" onClick={handleClick}>
            20
          </button>
          <button className="xmas_white" onClick={handleClick}>
            18
          </button>
        </div>
        <div className="tree xmasTreeRow--5">
          <button className="xmas_blue" onClick={handleClick}>
            17
          </button>
          <button className="xmas_cherry" onClick={handleClick}>
            23
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            10
          </button>
          <button className="xmas_green" onClick={handleClick}>
            15
          </button>
          <button className="xmas_blue--dark" onClick={handleClick}>
            22
          </button>
        </div>
        <div className="tree xmasTreeRow--6">
          <button className="xmas_green" onClick={handleClick}>
            5
          </button>
          <button className="xmas_red" onClick={handleClick}>
            4
          </button>
          <button className="xmas_white" onClick={handleClick}>
            11
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_cherry" onClick={handleClick}>
            7
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            19
          </button>
        </div>
        <div className="tree xmasTreeRow--7">
          <button className="xmas_white" onClick={handleClick}>
            1
          </button>
          <button className="xmas" onClick={handleClick}></button>
          <button className="xmas_blue--dark" onClick={handleClick}>
            8
          </button>
          <button className="xmas_red" onClick={handleClick}>
            2
          </button>
          <button className="xmas_blue" onClick={handleClick}>
            16
          </button>
          <button className="xmas_green" onClick={handleClick}>
            6
          </button>
          <button className="xmas_red" onClick={handleClick}>
            14
          </button>
        </div>
        <div className="tree xmasTreeRow--8">
          <button id="xmas_brown" onClick={handleClick}></button>
        </div>
      </div>
    </div>
  );
};
