function textNode(text)
{
    return document.createTextNode(text ? text : " ");
}

function setId(element, id)
{
    element.id = id;
}

function setClass(element, className)
{
    element.className = className;
}

function elementNode(tag, id, className, contentsNode)
{
    var element = document.createElement(tag);

    if (id)
    {
        setId(element, id);
    }

    if (className)
    {
        setClass(element, className);
    }

    if (contentsNode)
    {
        element.appendChild(contentsNode);
    }

    return element;
}

function applyStyle(element, style)
{
    element.classList.add(style);
}

function removeStyle(element, style)
{
    element.classList.remove(style);
}

function spanNode(contentsNode, className, id)
{
    return elementNode("span", id, className, contentsNode);
}

function aNode(url, contentsNode, className, id)
{
    var element = elementNode("a", id, className, contentsNode);

    element.href = url;

    return element;
}

function divNode(contentsNode, className, id)
{
    return elementNode("div", id, className, contentsNode);
}

function articleNode(contentsNode, className, id)
{
    return elementNode("article", id, className, contentsNode);
}

function sectionNode(contentsNode, className, id)
{
    return elementNode("section", id, className, contentsNode);
}

function h2Node(contentsNode, className, id)
{
    return elementNode("h2", id, className, contentsNode);
}

function unorderedListNode(contentsNode, className, id)
{
    return elementNode("ul", id, className, contentsNode);
}

function listItemNode(contentsNode, className, id)
{
    return elementNode("li", id, className, contentsNode);
}
