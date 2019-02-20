function organizationId(organization)
{
    // TODO: Generate an identifier for the organization.

    // For now, just use the name property.
    return organization.name;
}

function organizationEntry(organization)
{
    var articleElement = document.createElement("article");

    articleElement.appendChild(articulatedTitle(organization.name, organization.website));
    articleElement.appendChild(articulatedTitleExtra(organization.location));

    return articleElement;
}

function addOrganization(organization)
{
    var identifier = organizationId(organization);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var organizationsList = document.getElementById("experiences");

        organizationsList.appendChild(organizationEntry(organization));
    }
}

function processOrganizations(textOrganizations)
{
    JSON.parse(textOrganizations)
        .forEach(organization => {
            addOrganization(organization);
    });
}