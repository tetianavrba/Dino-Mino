export type Ornaments = {
  id: Number;
  element: string;
  number: string;
  text: string;
  additional: string;
};

export type Seasons = {
  audio: string;
  name: string;
  poem: string;
};

export type Months = {
  audio: string;
  monthName: string;
  poem: string;
};

export type WeekDays = {
  id: string;
  dayName: string;
  activities: [];
};
