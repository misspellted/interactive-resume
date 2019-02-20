function emptySpanHtml(className, id)
{
    var element = document.createElement("span");

    if (className)
    {
        element.className = className;
    }

    if (id)
    {
        element.id = id;
    }

    return element;
}

function anchorHtml(url, contents, className, id)
{
    var element = document.createElement("a");

    if (className)
    {
        element.className = className;
    }

    if (id)
    {
        element.id = id;
    }

    element.href = url;

    element.appendChild(document.createTextNode(contents));

    return element;
}

function spanHtml(contents, className, id)
{
    var element = emptySpanHtml(className, id);

    element.appendChild(document.createTextNode(contents));

    return element;
}

function articulatedTitle(title, link)
{
    var element;

    if (link)
    {
        element = emptySpanHtml("article-title");
        element.appendChild(anchorHtml(link, title));
    }
    else
    {
        element = spanHtml(title, "article-title");
    }

    return element;
}

function articulatedTitleExtra(titleExtra)
{
    return spanHtml(titleExtra, "article-title-extra");
}