export const formateDate = (currentDate) => {
    const [thisYear, thisMonth, thisDate] = currentDate.split(".").reverse();
    const newDate = new Date("20" + thisYear, thisMonth - 1, thisDate);
    const year = newDate.getFullYear();
    const date = newDate.getDate();
    const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "мая",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
    ];
    const month = months[newDate.getMonth()];
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const day = days[newDate.getDay()];
    const formattedDate = `${date} ${month} ${year}, ${day}`;
    return formattedDate;
};
