// function to create a date in "YYYY-M-D" format
function getTodaysDate() {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export default getTodaysDate