import { getDate, getMonth, getYear } from "date-fns";
//prettier-ignore
const monthData = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"]
export const formatPostDate = (date) => {
  const day = getDate(new Date(date));
  const month = monthData[getMonth(new Date(date))];
  const year = getYear(new Date(date));
  const data = `${day} ${month} ${year}`;
  return data;
};

export const formatDate = (date) => {
  const dataFormat = new Date(date);
  const month = monthData[dataFormat.getMonth() + 1];
  const day = dataFormat.getDate();
  const year = dataFormat.getFullYear();
  return ` ${day} ${month}, ${year}`;
};
export const formatTime = (dateTime) => {
  const date = new Date(dateTime);
  let hours = date.getUTCHours();
  const minute = date.getUTCMinutes();
  const second = date.getUTCSeconds();
  hours = hours % 12 || 12;
  const preiod = hours > 12 ? "Pm" : "Am";
  return { hours, minute, second, preiod };
};
