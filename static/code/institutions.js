function institutionId(institution)
{
    // TODO: Generate an identifier for the institution.

    // For now, just use the name property.
    return institution.name;
}

function institutionEntry(institution)
{
    var entry = document.createElement("li");
    entry.className = "institution-entry";

    // H3: Institution Name (if website is available, create a link to it).
    var heading = document.createElement("h3");
    var headingTextNode = document.createTextNode(institution.name);
    if (institution.website)
    {
        var anchor = document.createElement("a");
        anchor.href = institution.website;
        anchor.appendChild(headingTextNode);
        heading.appendChild(anchor);
    }
    else
    {
        heading.appendChild(headingTextNode);
    }
    
    entry.appendChild(heading);

    return entry;
}

function addInstitution(institution)
{
    var identifier = institutionId(institution);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var institutionsList = document.getElementById("academic");

        institutionsList.appendChild(institutionEntry(institution));
    }
}

function processInstitutions(textInstitutions)
{
    JSON.parse(textInstitutions)
        .forEach(institution => {
            addInstitution(institution);
    });
}