const table = document.querySelector(".app-table")
const tableBody = table.querySelector("tbody")
const submitButton = document.getElementById("submit-button")
const dateInput = document.getElementById("date-input")

submitButton.onclick = handleSubmit

function handleSubmit(event) {
    event.preventDefault()

    const inputDate = dateInput.value ? new Date(dateInput.value) : new Date()
    const nextDraw = getNextLottoDraw(inputDate)

    const [rowDateCell, rowPriceCell] = handleNewRowCreate(tableBody)

    rowDateCell.innerText = formatTableDate(nextDraw)

    getPriceDiff(nextDraw)
        .then((price) => {
            rowPriceCell.innerText = `€ ${to2DigitPlaces(price)}`
        })
        .catch(() => {
            rowPriceCell.innerText = " - "
        })
}

