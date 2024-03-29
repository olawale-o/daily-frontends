const date = new Date();
const prevDate = document.querySelector(".prev");
const nextDate = document.querySelector(".next");
const currentMonth = date.getMonth();
const NEXT_FOURTEEN_DAYS = 14;

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const showDays = (lastDayIndexOfPreviousMonth, lastDateOfCurrentMonth, next_fourteen_days, lastDateOfPreviousMonth) => {
  const days = [];
  for (let x = lastDayIndexOfPreviousMonth; x >= 0; x--) {
    days.push(`<button type="button" class="day prev-date" disabled>${lastDateOfPreviousMonth - x}</button>`);
  }

  for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
    if (i === date.getDate()  && currentMonth === date.getMonth()) {
      days.push(`<button type="button" class="day today">${i}</button>`);
    } else {
      days.push(`<button type="button" class="day">${i}</button>`);
    }
  }

  for (let j = 1; j <= next_fourteen_days; j++) {
    days.push(`<button type="button" class="day next-date" disabled>${j}</button>`);
  }

  return days;
};

const renderCalendar = () => {
  const currentMonthDetails = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const previousMonthDetails = new Date(date.getFullYear(), date.getMonth(), 0);
  const lastDateOfCurrentMonth = currentMonthDetails.getDate();
  const lastDateOfPreviousMonth = previousMonthDetails.getDate();
  const lastDayIndexOfPreviousMonth = previousMonthDetails.getDay();
  
  // const lastDayIndexOfCurrentMonth = currentMonthDetails.getDay();

  // const nextDays = 7 - lastDayIndexOfCurrentMonth - 1;
  const monthDays = document.querySelector(".days");
  const monthName = document.querySelector(".month__name");
  monthName.innerHTML = MONTHS[date.getMonth()];
  const dateString = document.querySelector(".month__full");
  dateString.innerHTML = date.toDateString();

  const days = showDays(lastDayIndexOfPreviousMonth, lastDateOfCurrentMonth, NEXT_FOURTEEN_DAYS, lastDateOfPreviousMonth)

  days.forEach((day) => {
    monthDays.innerHTML += day;
  });

  // let days = "";

  // for (let x = lastDayIndexOfPreviousMonth; x >= 0; x--) {
  //   days += `<button type="button" class="day prev-date" disabled>${lastDateOfPreviousMonth - x}</button>`;
  // }

  // for (let i = 1; i <= lastDateOfCurrentMonth; i++) {
  //   if (i === date.getDate()  && currentMonth === date.getMonth()) {
  //     days += `<button type="button" class="day today">${i}</button>`;
  //   } else {
  //     days += `<button type="button" class="day">${i}</button>`;
  //   }
  // }

  // for (let j = 1; j <= NEXT_FOURTEEN_DAYS; j++) {
  //   days += `<button type="button" class="day next-date" disabled>${j}</button>`;
  //   monthDays.innerHTML = days;
  // }
};

prevDate.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

nextDate.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
