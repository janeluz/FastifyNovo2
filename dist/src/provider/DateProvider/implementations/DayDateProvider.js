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
    compareInHours(created_at, stop_date) {
        const stop_date_utc = this.convertToUTC(stop_date);
        const created_at_utc = this.convertToUTC(created_at);
        return (0, dayjs_1.default)(stop_date_utc).diff(created_at_utc, "hours");
    }
    convertToUTC(date) {
        return (0, dayjs_1.default)(date).utc().local().format();
    }
    dateNow() {
        return (0, dayjs_1.default)().toDate();
    }
    compareInDays(created_at, updated_at) {
        const updated_at_utc = this.convertToUTC(updated_at);
        const created_at_utc = this.convertToUTC(created_at);
        return (0, dayjs_1.default)(updated_at_utc).diff(created_at_utc, "days");
    }
    addDays(days) {
        return (0, dayjs_1.default)().add(days, "days").toDate();
    }
    addHours(hours) {
        return (0, dayjs_1.default)().add(hours, "hour").toDate();
    }
    compareIfBefore(created_at, updated_at) {
        return (0, dayjs_1.default)(created_at).isBefore(updated_at);
    }
}
exports.DayjsDateProvider = DayjsDateProvider;
