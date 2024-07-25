import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const dateFormat = "YYYY-MM-DD";

export { dayjs, dateFormat };
