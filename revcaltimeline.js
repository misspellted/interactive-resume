function createElement(elementType)
{
    return document.createElement(elementType);
}

function monthName(jsMonth)
{
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][jsMonth];
}

function generateYearTableId(year)
{
    return "Y" + year;
}

function generateMonthCellId(year, month)
{
    return generateYearTableId(year) + "M" + month;
}

function createYearTable(year)
{
    var rows = 3;
    var columns = 5;

    var table = createElement("table");

    var yearId = generateYearTableId(year);
    table.id = yearId;

    var row;
    var column;

    for (row = 0; row < rows; row++)
    {
        var tr = createElement("tr");

        for (column = 0; column < columns; column++)
        {
            var td = createElement("td");

            if (column == 0)
            {
                if (row == 0)
                {
                    td.setAttribute("rowspan", rows);
                    td.className = "calendar-year";

                    if (year % 2 != 0)
                    {
                        td.className += " calendar-year-odd";
                    }

                    var spanning = createElement("div");
                    spanning.className = "rotated-left-90";
                    spanning.innerText = year;
                    td.appendChild(spanning);

                    tr.appendChild(td);
                }
            }
            else
            {
                var month = 12 - (row * (columns - 1) + column - 1);

                td.id = generateMonthCellId(year, month);
                td.innerText = monthName(month - 1).charAt(0);
                td.className = "calendar-month";

                tr.appendChild(td);
            }
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
        document.getElementById("timeline").appendChild(createYearTable(year));
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