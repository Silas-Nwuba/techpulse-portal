export const formatNumber = (num) => {
  if (num < 10) {
    const text = String(num) > "0" ? String(num).padStart(2, "0" ) : num;
    return text;
  } else if (num >= 1000) {
    const navigator = window.navigator.language;
    const format = new Intl.NumberFormat(navigator).format(num);
    return format;
  } else {
    return num;
  }
};
