function description(text)
{
    var element = document.createElement("li");
    element.appendChild(document.createTextNode(text));
    return element;
}

function organizationId(organization)
{
    // TODO: Generate an identifier for the organization.

    // For now, just use the name property.
    return organization.name;
}

function addOrganization(organization)
{
    var identifier = organizationId(organization);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var organizationsList = document.getElementById("professional");

        // console.log("organization", organization);
        organizationsList.appendChild(description(organization.name));
    }
}

function institutionId(institution)
{
    // TODO: Generate an identifier for the institution.

    // For now, just use the name property.
    return institution.name;
}

function addInstitution(institution)
{
    var identifier = institutionId(institution);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var institutionsList = document.getElementById("academic");

        // console.log("institution", institution);
        institutionsList.appendChild(description(institution.name));
    }
}

function handleDescritpions(textDescriptions)
{
    var jsonDescriptions = JSON.parse(textDescriptions);

    for (var index = 0; index < jsonDescriptions.organizations.length; index++)
    {
        addOrganization(jsonDescriptions.organizations[index]);
    }

    for (var index = 0; index < jsonDescriptions.institutions.length; index++)
    {
        addInstitution(jsonDescriptions.institutions[index]);
    }
}

function requestDescriptions(requestHandler)
{
    var request = new XMLHttpRequest();

    // Attach the handler.
    request.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            requestHandler(this.responseText);
        }
    };


    request.open("GET", "static/data/descriptions.json", true);

    // Getting a not well-formed in Firefox, so adding hard-coded value(s), for now.
    request.overrideMimeType("application/json");

    request.send();
}

function loadDescriptions()
{
    requestDescriptions(handleDescritpions);
}