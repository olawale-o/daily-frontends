const date = new Date();
const prevDate = document.querySelector(".prev");
const nextDate = document.querySelector(".next");
const currentMonth = date.getMonth();

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
const renderCalendar = () => {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const monthDays = document.querySelector(".days");
  const monthName = document.querySelector(".month__name");
  monthName.innerHTML = MONTHS[date.getMonth()];
  const dateString = document.querySelector(".month__full");
  dateString.innerHTML = date.toDateString();

  let days = "";

  for (let x = firstDayIndex; x >= 0; x--) {
    days += `<button type="button" class="day prev-date" disabled>${prevLastDay - x}</button>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === date.getDate() && currentMonth === date.getMonth()) {
      days += `<button type="button" class="day today">${i}</button>`;
    } else {
      days += `<button type="button" class="day">${i}</button>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<button type="button" class="day next-date" disabled>${j}</button>`;
    monthDays.innerHTML = days;
  }
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
