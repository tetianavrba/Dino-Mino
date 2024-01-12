import './style.css';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { DayPlan } from './DayPlan';
import { IconCarousel } from './IconCarousel';
import { PopUp } from '../../components/Popup';
import { FunctionalDivPlannerPage } from './FunctionalDivPlannerPage';
import { WeekDays } from '../../lib/types';

export const PlannerPage = () => {
  const [weekDays, setWeekDays] = useState<WeekDays[]>([
    { id: 'monday', dayName: 'pondělí', activities: [] },
    { id: 'tuesday', dayName: 'úterý', activities: [] },
    { id: 'wednesday', dayName: 'středa', activities: [] },
    { id: 'thursday', dayName: 'čtvrtek', activities: [] },
    { id: 'friday', dayName: 'pátek', activities: [] },
    { id: 'saturday', dayName: 'sobota', activities: [] },
    { id: 'sunday', dayName: 'neděle', activities: [] },
  ]);

  useEffect(() => {
    const data = window.localStorage.getItem('weekDays');
    data !== '' && data !== null && setWeekDays(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('weekDays', JSON.stringify(weekDays));
  }, [weekDays]);

  const [activityForDay, setActivityForDay] = useState('');
  const [tooManyActivities, setTooManyActivities] = useState(false);
  const [onDeleting, setDeleting] = useState(false);

  return (
    <>
      <Header />
      <main className="container__planner_page">
        {tooManyActivities && (
          <PopUp popCheck={setTooManyActivities} location="alert" />
        )}
        <FunctionalDivPlannerPage
          onDeleting={setDeleting}
          deleting={onDeleting}
          onClearing={setWeekDays}
        />

        <div className="planner_days" id="planner_days">
          {weekDays?.map((day) => {
            return (
              <DayPlan
                key={day.id}
                day={day}
                setWeekDays={setWeekDays}
                onDeleting={onDeleting}
                setActivityForDay={setActivityForDay}
                setTooManyActivities={setTooManyActivities}
                endDeleting={setDeleting}
                activityForDay={activityForDay}
                // tooManActivities={tooManyActivities}
              />
            );
          })}
        </div>
        {!!activityForDay && !tooManyActivities && (
          <IconCarousel
            // weekDays={weekDays}
            setWeekDays={setWeekDays}
            activityForDay={activityForDay}
            setActivityForDay={setActivityForDay}
          />
        )}
      </main>
    </>
  );
};
