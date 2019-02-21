function educationArticleId(educationEntry)
{
    // TODO: Generate an identifier for the education entry.

    // For now, just use the name property.
    return educationEntry.institution;
}

function primaryEducationArticleTitle(educationEntry)
{
    with (educationEntry)
    {
        var leftText = field;

        if (type == "minor")
        {
            leftText += " (" + type + ")";
        }
        else if ("result" in educationEntry)
        {
            leftText += " (" + result.toLowerCase() + ")";
        }
        
        return primaryTitle(leftText, null, level, null, institution, website);
    }
}

function secondaryEducationArticleTitle(educationEntry)
{
    with (educationEntry)
    {
        return secondaryTitle(startDate + " - " + endDate, null, null, null, location, null);
    }
}

function educationArticle(educationEntry)
{
    var article = articleNode();

    article.appendChild(primaryEducationArticleTitle(educationEntry));
    article.appendChild(secondaryEducationArticleTitle(educationEntry));

    if (educationEntry.type)
    {
        if (educationEntry.type == "minor")
        {
            applyStyle(article, "minor-degree");
        }
    }

    return article;
}

function addEducation(educationEntry)
{
    var identifier = educationArticleId(educationEntry);

    var listItem = document.getElementById(identifier);

    if (!listItem)
    {
        var institutionsList = document.getElementById("educations");

        institutionsList.appendChild(educationArticle(educationEntry));
    }
}

function processJsonEducationData(educationData)
{
    JSON.parse(educationData).forEach(addEducation);
}

function loadEducations()
{
    getJson("static/data/educations.json", processJsonEducationData);
}