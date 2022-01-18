function to2DigitPlaces(value) {
    return Number.isNaN(value) ? value : Number(value.toFixed(2))
}

function appendNewRow(tableBody) {
    const nextRow = tableBody.insertRow(-1)

    setTimeout(function() {
        nextRow.classList.add('visible');
    }, 50)

    const date = nextRow.insertCell()
    const price = nextRow.insertCell()

    return [date, price]
}

function handleNewRowCreate(tableBody) {
    const firstRow = tableBody.rows[0]
    const {cells} = firstRow

    const isRowCellsEmpty = [...cells].every(({childNodes}) => childNodes.length === 0)

    if (isRowCellsEmpty) {
        firstRow.classList.remove("app-table-empty-row")

        return [cells[0], cells[1]]
    } else {
        return appendNewRow(tableBody)
    }
}
