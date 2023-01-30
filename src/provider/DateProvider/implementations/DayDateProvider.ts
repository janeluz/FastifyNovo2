import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc'
import { IDateProvider } from "../IDateProvider";


dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
    compareInHours(start_task: Date, end_task: Date): number {
      const end_task_utc = this.convertToUTC(end_task);
      const start_task_utc = this.convertToUTC(start_task);
  
      return dayjs(end_task_utc).diff(start_task_utc, "hours");
    }
  
    convertToUTC(date: Date): string {
      return dayjs(date).utc().local().format();
    }
  
    dateNow(): Date {
      return dayjs().toDate();
    }
  
    compareInDays(start_task: Date, end_task: Date): number {
      const end_task_utc = this.convertToUTC(end_task);
      const start_task_utc = this.convertToUTC(start_task);
  
      return dayjs(end_task_utc).diff(start_task_utc, "days");
    }
  
    addDays(days: number): Date {
      return dayjs().add(days, "days").toDate();
    }
  
    addHours(hours: number): Date {
      return dayjs().add(hours, "hour").toDate();
    }
  
    compareIfBefore(start_task: Date, end_task: Date): boolean {
      return dayjs(start_task).isBefore(end_task);
    }
  }
  
  export { DayjsDateProvider };