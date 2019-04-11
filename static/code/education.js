function educationArticleId(educationEntry)
{
    var articleId;

    with (educationEntry)
    {
        if (type == "major" || type == "minor")
        {
            articleId = level + " in " + field + " at " + institution;
        }
        else
        {
            articleId = institution;
        }
    }

    return articleId;
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

    return article;
}

function addEducation(educationEntry)
{
    var identifier = educationArticleId(educationEntry);

    var educationArticleEntry = document.getElementById(identifier);

    if (!educationArticleEntry)
    {
        var educations = document.getElementById("educations");

        educationArticleEntry = educationArticle(educationEntry);
        setId(educationArticleEntry, identifier);

        educations.appendChild(educationArticleEntry);
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
