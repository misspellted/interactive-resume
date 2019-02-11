function monthNames()
{
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

function generateYearTableId(year)
{
    return "Y" + year;
}

function yearTableCell(year, rows)
{
    var tableCell = createElement("td");

    tableCell.setAttribute("rowspan", rows);
    tableCell.className = "calendar-year";

    if (year % 2 != 0)
    {
        tableCell.className += " calendar-year-odd";
    }

    var spanning = createElement("div");
    spanning.className = "rotated-left-90";
    spanning.innerText = year;
    tableCell.appendChild(spanning);

    return tableCell;
}

function generateMonthCellId(year, month)
{
    return generateYearTableId(year) + "M" + month;
}

function monthTableCell(year, month)
{
    var tableCell = document.createElement("td");

    tableCell.id = generateMonthCellId(year, month);
    tableCell.innerText = monthNames()[month - 1].substr(0, 3);
    tableCell.className = "calendar-month";

    return tableCell;
}

function createElement(elementType)
{
    return document.createElement(elementType);
}

function createYearTable(year, columns)
{
    var rows = 12 / columns;

    var table = createElement("table");

    var yearId = generateYearTableId(year);
    table.id = yearId;

    var row;
    var column;

    for (row = 0; row < rows; row++)
    {
        var tr = createElement("tr");

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

function addYearIfMissing(year)
{
    var yearId = generateYearTableId(year);

    var yearTable = document.getElementById(yearId);

    if (!yearTable)
    {
        document.getElementById("timeline").appendChild(createYearTable(year, 2));
    }
}

function onBuildTimeLineClick()
{
    var starting = 2006;
    var latest = new Date().getFullYear();

    for (var current = latest; starting <= current; current--)
    {
        addYearIfMissing(current);
    }
}
