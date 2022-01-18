function numberTo2Digits(number) {
    return Number(number).toLocaleString("en-US", {minimumIntegerDigits: 2})
}

function formatTableDate(date) {
    const month = numberTo2Digits(date.getMonth() + 1)
    const day = numberTo2Digits(date.getDate())
    const year = date.getFullYear()
    const hour = numberTo2Digits(date.getHours())
    const minutes = numberTo2Digits(date.getMinutes())

    return `${month}-${day}-${year} ${hour}:${minutes}`
}
