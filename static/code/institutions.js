function institutionId(institution)
{
    // TODO: Generate an identifier for the institution.

    // For now, just use the name property.
    return institution.name;
}

function institutionEntry(institution)
{
    var articleElement = document.createElement("article");

    articleElement.appendChild(articulatedTitle(institution.name, institution.website));
    articleElement.appendChild(articulatedTitleExtra(institution.location));

    return articleElement;
}

function addInstitution(institution)
{
    var identifier = institutionId(institution);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var institutionsList = document.getElementById("educations");

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