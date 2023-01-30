import { IDateProvider } from "../IDateProvider";
declare class DayjsDateProvider implements IDateProvider {
    compareInHours(start_task: Date, end_task: Date): number;
    convertToUTC(date: Date): string;
    dateNow(): Date;
    compareInDays(start_task: Date, end_task: Date): number;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    compareIfBefore(start_task: Date, end_task: Date): boolean;
}
export { DayjsDateProvider };
