var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function yearTableId(year)
{
    return "Y" + year;
}

function yearTableCell(year, rows)
{
    var tableCell = document.createElement("td");

    tableCell.setAttribute("rowspan", rows);
    tableCell.className = "calendar-year";

    if (year % 2 != 0)
    {
        tableCell.className += " calendar-year-odd";
    }

    var spanning = document.createElement("div");
    spanning.className = "rotated-left-90";
    spanning.innerText = year;
    tableCell.appendChild(spanning);

    return tableCell;
}

function monthCellId(year, month)
{
    return yearTableId(year) + "M" + month;
}

function monthTableCell(year, month)
{
    var tableCell = document.createElement("td");

    tableCell.id = monthCellId(year, month);
    tableCell.innerText = MONTH_NAMES[month - 1].substr(0, 3);
    tableCell.className = "calendar-month";

    return tableCell;
}

function createYearTable(year, columns)
{
    var rows = 12 / columns;

    var table = document.createElement("table");

    var yearId = yearTableId(year);
    table.id = yearId;

    var row;
    var column;

    for (row = 0; row < rows; row++)
    {
        var tr = document.createElement("tr");

        if (row == 0)
        {
            tr.appendChild(yearTableCell(year, rows));
        }

        for (column = 1; column < columns + 1; column++)
        {
            var month = 12 - (row * columns + column - 1);

            tr.appendChild(monthTableCell(year, month));
        }

        table.appendChild(tr);
    }

    return table;
}

function addYear(year)
{
    // Check to see if a year table already exists for the year.
    var yearId = yearTableId(year);

    var yearTable = document.getElementById(yearId);

    // If it doesn't exist, then add it.
    if (!yearTable)
    {
        document.getElementById("timeline").appendChild(createYearTable(year, 2));
    }
}

function addTimelineStartingFrom(startingYear)
{
    var latest = new Date().getFullYear();

    for (var year = latest; startingYear <= year; year--)
    {
        addYear(year);
    }
}