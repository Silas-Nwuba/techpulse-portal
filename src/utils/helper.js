import { format } from "date-fns";
import { getDate, getMonth, getYear } from "date-fns";
//prettier-ignore
const monthData = ["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
export const formatPostDate = (date) => {
  const day = getDate(new Date(date));
  const month = monthData[getMonth(new Date(date))];
  const year = getYear(new Date(date));
  const data = `${day} ${month} ${year}`;
  return data;
};

export const formatDate = (date) => {
  return format(date?.substring(0, 10), "dd-MM-yyyy");
};
export const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  const hours = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  let preiod = hours > 12 ? "Pm" : "Am";
  return { hours, minute, second, preiod };
};
