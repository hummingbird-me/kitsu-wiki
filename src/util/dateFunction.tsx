import { format } from 'date-fns';

// Convert date to season and year
export const seasonYear = (date: Date): string => {
  const month = parseFloat(format(new Date(date), 'L'));

  const dateToSeason = (month: number): string => {
    if (1 <= month && month <= 3) {
      return 'Winter';
    } else if (4 <= month && month <= 6) {
      return 'Spring';
    } else if (7 <= month && month <= 9) {
      return 'Summer';
    } else if (10 <= month && month <= 12) {
      return 'Fall';
    } else {
      return 'NaN';
    }
  };

  const season = dateToSeason(month);
  const year = format(new Date(date), 'yyyy');
  return season + ' ' + year;
};
