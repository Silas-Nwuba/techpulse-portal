export const formatNumber = (num) => {
  if (num < 10) {
    const text = String(num).padStart(2, "0");
    return text;
  }
  if (num >= 1000) {
    const navigator = window.navigator.language;
    const format = new Intl.NumberFormat(navigator).format(num);
    return format;
  }
};
