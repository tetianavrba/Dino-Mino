import './style.css';
import { WeekDays } from '../../../lib/types';
import { PlannerActivity } from '../PlannerActivity';

type DayPlanProps = {
  day: WeekDays;
  onDeleting: boolean;
  setActivityForDay: React.Dispatch<React.SetStateAction<string>>;
  setTooManyActivities: React.Dispatch<React.SetStateAction<boolean>>;
  setWeekDays: React.Dispatch<React.SetStateAction<WeekDays[]>>;
  endDeleting: React.Dispatch<React.SetStateAction<boolean>>;
  activityForDay: string;
};

export const DayPlan = ({
  day,
  onDeleting,
  setActivityForDay,
  setTooManyActivities,
  setWeekDays,
  endDeleting,
  activityForDay,
}: DayPlanProps) => {
  const handleAdd = () => {
    endDeleting(false);
    setActivityForDay(day.dayName);
    (day.activities.length as number) === 3 && setTooManyActivities(true);
  };
  const handleDelete = () => {
    endDeleting(true);
  };

  return (
    <>
      <div
        className={`planner_one_day ${
          activityForDay === day.dayName && 'active-day'
        }`}
      >
        {(day.activities.length as number) === 3 && (
          <button className="deleting_button--planner" onClick={handleDelete}>
            <img src="./img/IconsFunctional/remove.png" alt="add-button" />
          </button>
        )}
        {day.activities.length < 3 && (
          <button className="adding_button" onClick={handleAdd}>
            <img src="./img/IconsFunctional/plus.png" alt="add-button" />
          </button>
        )}
        <div className={`day_planner ${day.id}`}>
          <h2>{day.dayName}</h2>
        </div>
        <div className="activities">
          {(day.activities.length === 0 || day.activities === null) && (
            <>
              <img src="/img/IconsFunctional/square.png" />
              <img src="/img/IconsFunctional/square.png" />
              <img src="/img/IconsFunctional/square.png" />
            </>
          )}
          {day.activities.map((dayActivity: string, index: number) => {
            const idKey = self.crypto.randomUUID();
            return (
              <PlannerActivity
                key={idKey}
                whichDay={day.dayName}
                onDeleting={onDeleting}
                activity={dayActivity}
                setWeekDays={setWeekDays}
                indexToDelete={index}
                // setIndexToDelete={setActivityForDay}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
