

interface IDateProvider {
    compareInHours(start_date: Date,stop_date: Date): number;
    convertToUTC(date: Date): string;
    dateNow(): Date;
    compareInDays(start_date: Date,stop_date: Date): number;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    compareIfBefore(start_date: Date,stop_date: Date): boolean;
  }
  
  export { IDateProvider };
  