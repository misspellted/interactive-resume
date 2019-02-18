function organizationId(organization)
{
    // TODO: Generate an identifier for the organization.

    // For now, just use the name property.
    return organization.name;
}

function organizationEntry(organization)
{
    var entry = document.createElement("li");
    entry.className = "organization-entry";

    // H3: Organization Name (if website is available, create a link to it).
    var heading = document.createElement("h3");
    var headingTextNode = document.createTextNode(organization.name);
    if (organization.website)
    {
        var anchor = document.createElement("a");
        anchor.href = organization.website;
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

function addOrganization(organization)
{
    var identifier = organizationId(organization);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var organizationsList = document.getElementById("professional");

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