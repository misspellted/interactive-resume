function titleSpan(title, link, className)
{
    return spanNode(link ? aNode(link, textNode(title)) : textNode(title), className);
}

function primaryTitle(leftText, leftLink, centerText, centerLink, rightText, rightLink)
{
    var primaryTitleDiv = divNode(null, "title-row");

    primaryTitleDiv.appendChild(titleSpan(leftText, leftLink, "primary-title-left"));
    primaryTitleDiv.appendChild(titleSpan(centerText, centerLink, "primary-title-center"));
    primaryTitleDiv.appendChild(titleSpan(rightText, rightLink, "primary-title-right"));

    return primaryTitleDiv;
}

function secondaryTitle(leftText, leftLink, centerText, centerLink, rightText, rightLink)
{
    var secondaryTitleDiv = divNode(null, "title-row");

    secondaryTitleDiv.appendChild(titleSpan(leftText, leftLink, "secondary-title-left"));
    secondaryTitleDiv.appendChild(titleSpan(centerText, centerLink, "secondary-title-center"));
    secondaryTitleDiv.appendChild(titleSpan(rightText, rightLink, "secondary-title-right"));

    return secondaryTitleDiv;
}

function articulatedTitle(title, link)
{
    return titleSpan(title, link, "article-title");
}

function articulatedTitleExtra(titleExtra)
{
    return titleSpan(titleExtra, null, "article-title-extra");
}