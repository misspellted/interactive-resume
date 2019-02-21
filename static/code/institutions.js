function institutionId(institution)
{
    // TODO: Generate an identifier for the institution.

    // For now, just use the name property.
    return institution.name;
}

function primaryEducationTitle(institution)
{
    with (institution)
    {
        return primaryTitle(name, website, null, null, location, null);
    }
}

function secondaryEducationTitle(institution)
{
    with (institution)
    {
        return secondaryTitle(name, website, null, null, location, null);
    }
}

function institutionEntry(institution)
{
    var article = articleNode();

    article.appendChild(primaryEducationTitle(institution));
    article.appendChild(secondaryEducationTitle(institution));

    return article;
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