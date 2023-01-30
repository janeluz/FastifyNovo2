"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayjsDateProvider = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
dayjs_1.default.extend(utc_1.default);
class DayjsDateProvider {
    compareInHours(start_task, end_task) {
        const end_task_utc = this.convertToUTC(end_task);
        const start_task_utc = this.convertToUTC(start_task);
        return (0, dayjs_1.default)(end_task_utc).diff(start_task_utc, "hours");
    }
    convertToUTC(date) {
        return (0, dayjs_1.default)(date).utc().local().format();
    }
    dateNow() {
        return (0, dayjs_1.default)().toDate();
    }
    compareInDays(start_task, end_task) {
        const end_task_utc = this.convertToUTC(end_task);
        const start_task_utc = this.convertToUTC(start_task);
        return (0, dayjs_1.default)(end_task_utc).diff(start_task_utc, "days");
    }
    addDays(days) {
        return (0, dayjs_1.default)().add(days, "days").toDate();
    }
    addHours(hours) {
        return (0, dayjs_1.default)().add(hours, "hour").toDate();
    }
    compareIfBefore(start_task, end_task) {
        return (0, dayjs_1.default)(start_task).isBefore(end_task);
    }
}
exports.DayjsDateProvider = DayjsDateProvider;
