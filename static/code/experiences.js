function experienceArticleId(experienceEntry)
{
    var articleId;

    with (experienceEntry)
    {
        articleId = title + " at " + organization;
    }
    
    return articleId;
}

function primaryExperienceArticleTitle(experienceEntry)
{
    with (experienceEntry)
    {
        var leftText = title;

        if (type == "contract")
        {
            leftText += " (" + type + ")";
        }
        
        return primaryTitle(leftText, null, null, null, organization, website);
    }
}

function secondaryExperienceArticleTitle(experienceEntry)
{
    with (experienceEntry)
    {
        return secondaryTitle(startDate + " - " + endDate, null, null, null, location, null);
    }
}

function experienceArticle(experienceEntry)
{
    var article = articleNode();

    article.appendChild(primaryExperienceArticleTitle(experienceEntry));
    article.appendChild(secondaryExperienceArticleTitle(experienceEntry));

    return article;
}

function addExperience(experienceEntry)
{
    var identifier = experienceArticleId(experienceEntry);

    var experienceArticleEntry = document.getElementById(identifier);

    if (!experienceArticleEntry)
    {
        var experiences = document.getElementById("experiences");

        experienceArticleEntry = experienceArticle(experienceEntry);
        setId(experienceArticleEntry, identifier);

        experiences.appendChild(experienceArticleEntry);
    }
}

function processJsonExperienceData(experienceData)
{
    JSON.parse(experienceData).forEach(addExperience);
}

function loadExperience()
{
    getJson("static/data/experience.json", processJsonExperienceData);
}