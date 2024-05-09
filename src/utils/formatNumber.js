export const formatNumber = (num) => {
  if (num < 10) {
<<<<<<< HEAD
    const text = String(num) > "0" ? String(num).padStart(2, "0" ) : num;
=======
    const text = String(num).padStart(2, "0");
>>>>>>> 2240043135df3e38123bbfa092520827935184bb
    return text;
  } else if (num >= 1000) {
    const navigator = window.navigator.language;
    const format = new Intl.NumberFormat(navigator).format(num);
    return format;
  } else {
    return num;
  }
};
