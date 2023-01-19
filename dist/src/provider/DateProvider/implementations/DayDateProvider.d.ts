import { IDateProvider } from "../IDateProvider";
declare class DayjsDateProvider implements IDateProvider {
    compareInHours(created_at: Date, stop_date: Date): number;
    convertToUTC(date: Date): string;
    dateNow(): Date;
    compareInDays(created_at: Date, updated_at: Date): number;
    addDays(days: number): Date;
    addHours(hours: number): Date;
    compareIfBefore(created_at: Date, updated_at: Date): boolean;
}
export { DayjsDateProvider };
