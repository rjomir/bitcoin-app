function formatDateForAPI(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

async function fetchTodayPrice() {
    const result = await fetch(API_ENDPOINT)
    const res = await result.json()
    const bitcoinEURprice = res?.market_data?.current_price?.eur
    const price = to2DigitPlaces(bitcoinEURprice)
    return Number.isNaN(price) ? Promise.reject("Invalid number format") : price
}

async function fetchHistoricalPrice(date) {
    const result = await fetch(
        `${API_HISTORY_ENDPOINT}?date=${formatDateForAPI(date)}`
    )
    const res = await result.json()
    const bitcoinEURprice = res?.market_data?.current_price?.eur
    const price = to2DigitPlaces(bitcoinEURprice)
    return Number.isNaN(price) ? Promise.reject("Invalid number format") : price
}

async function getPriceDiff(nextDraw) {
    const [todayPrice, historyPrice] = await Promise.all([
        fetchTodayPrice(),
        fetchHistoricalPrice(nextDraw),
    ])

    return to2DigitPlaces((todayPrice * 100) / historyPrice)
}
