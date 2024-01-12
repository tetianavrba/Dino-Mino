import './style.css';
import { WeekDays } from '../../../lib/types';

type IconCarouselProps = {
  activityForDay: string;
  setActivityForDay: React.Dispatch<React.SetStateAction<string>>;
  setWeekDays: React.Dispatch<React.SetStateAction<WeekDays[]>>;
};

export const IconCarousel = ({
  activityForDay,
  setActivityForDay,
  setWeekDays,
}: IconCarouselProps) => {
  const iconList = [
    'angel.png',
    'exercise.png',
    'playground.png',
    'basketball.png',
    'exerciseBoy.png',
    'presents.png',
    'bicycle.png',
    'father.png',
    'readBoy.png',
    'cat.png',
    'fish.png',
    'readGirl.png',
    'children.png',
    'flower-pot.png',
    'singing.png',
    'christmas-tree.png',
    'football.png',
    'sledding.png',
    'christmas-tree2.png',
    'fruits.png',
    'sleep.png',
    'cleaning.png',
    'giftbox.png',
    'swimming.png',
    'crayons.png',
    'granny.png',
    'tennis.png',
    'dancing.png',
    'jigsaw.png',
    'travel-luggage.png',
    'dinosaurColor.png',
    'monster.png',
    'travel.png',
    'disco-ball.png',
    'music-notes.png',
    'walking-the-dog.png',
    'dog.png',
    'paint-palette.png',
    'walking.png',
    'doctor.png',
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const imgSrc = (e.target as HTMLImageElement).src;
    const addingImg: Array<string> = imgSrc.split('/');

    setWeekDays((prevState) => {
      let newState = [...prevState];
      const dayIndex = newState.findIndex((day) => {
        return day.dayName === activityForDay;
      });
      let newDay = newState[dayIndex];
      setActivityForDay('');
      (newDay.activities as Array<string>).push(addingImg[5]);
      newState[dayIndex] = newDay;

      return newState;
    });
  };
  return (
    <>
      <div className="carousel scroll">
        {iconList.map((icon) => {
          return (
            <div key={iconList.indexOf(icon)} className="carousel__media">
              <button onClick={handleClick}>
                <img
                  className="carousel__image"
                  src={`/img/IconsCalendar/${icon}`}
                  alt={icon}
                />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
