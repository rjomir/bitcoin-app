function getDaysCountTillNextLottoDraw(day) {
    switch (true) {
        case day === WEEK_DAY_INDEX.SATURDAY:
            return 4
        case day >= WEEK_DAY_INDEX.SUNDAY && day < WEEK_DAY_INDEX.WEDNESDAY:
            return WEEK_DAY_INDEX.WEDNESDAY - day
        case day >= WEEK_DAY_INDEX.WEDNESDAY && day < WEEK_DAY_INDEX.SATURDAY:
            return WEEK_DAY_INDEX.SATURDAY - day
        default:
            return 0
    }
}


function getNextLottoDraw(date = new Date()) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate() + getDaysCountTillNextLottoDraw(date.getDay())
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return new Date(year, month, day, hours, minutes, seconds)
}
