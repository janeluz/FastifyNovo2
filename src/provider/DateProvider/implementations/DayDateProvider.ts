import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { IDateProvider } from "../IDateProvider";


dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
    compareInHours(created_at: Date, stop_date: Date): number {
      const stop_date_utc = this.convertToUTC(stop_date);
      const created_at_utc = this.convertToUTC(created_at);
  
      return dayjs(stop_date_utc).diff(created_at_utc, "hours");
    }
  
    convertToUTC(date: Date): string {
      return dayjs(date).utc().local().format();
    }
  
    dateNow(): Date {
      return dayjs().toDate();
    }
  
    compareInDays(created_at: Date, updated_at: Date): number {
      const updated_at_utc = this.convertToUTC(updated_at);
      const created_at_utc = this.convertToUTC(created_at);
  
      return dayjs(updated_at_utc).diff(created_at_utc, "days");
    }
  
    addDays(days: number): Date {
      return dayjs().add(days, "days").toDate();
    }
  
    addHours(hours: number): Date {
      return dayjs().add(hours, "hour").toDate();
    }
  
    compareIfBefore(created_at: Date, updated_at: Date): boolean {
      return dayjs(created_at).isBefore(updated_at);
    }
  }
  
  export { DayjsDateProvider };