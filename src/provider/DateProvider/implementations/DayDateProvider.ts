import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { IDateProvider } from "../IDateProvider";


dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
    compareInHours(start_date: Date, stop_date: Date): number {
      const stop_date_utc = this.convertToUTC(stop_date);
      const start_date_utc = this.convertToUTC(start_date);
  
      return dayjs(stop_date_utc).diff(start_date_utc, "hours");
    }
  
    convertToUTC(date: Date): string {
      return dayjs(date).utc().local().format();
    }
  
    dateNow(): Date {
      return dayjs().toDate();
    }
  
    compareInDays(start_date: Date, stop_date: Date): number {
      const stop_date_utc = this.convertToUTC(stop_date);
      const start_date_utc = this.convertToUTC(start_date);
  
      return dayjs(stop_date_utc).diff(start_date_utc, "days");
    }
  
    addDays(days: number): Date {
      return dayjs().add(days, "days").toDate();
    }
  
    addHours(hours: number): Date {
      return dayjs().add(hours, "hour").toDate();
    }
  
    compareIfBefore(start_date: Date, stop_date: Date): boolean {
      return dayjs(start_date).isBefore(stop_date);
    }
  }
  
  export { DayjsDateProvider };