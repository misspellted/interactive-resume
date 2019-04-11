function getTagGroup(tagEntry)
{
    with (tagEntry)
    {
        if ("group" in tagEntry)
        {
            return group;
        }
        else
        {
            return "Unknown";
        }
    }
}

function tagGroupId(tagEntry)
{
    return "tag-group-" + getTagGroup(tagEntry).toLowerCase();
}

function createTagGroup(tagEntry)
{
    var group = sectionNode();

    var groupHeading = h2Node();
    groupHeading.appendChild(textNode(getTagGroup(tagEntry)));
    group.appendChild(groupHeading);

    var groupListing = unorderedListNode();
    setId(groupListing, tagGroupId(tagEntry) + "-list");
    group.appendChild(groupListing);

    return group;
}

function getOrCreateTagGroup(tagEntry)
{
    var groupId = tagGroupId(tagEntry);

    var tagGroup = document.getElementById(groupId);

    if (!tagGroup)
    {
        var tagGroups = document.getElementById("tag-groups");

        tagGroup = createTagGroup(tagEntry);
        setId(tagGroup, groupId);

        tagGroups.appendChild(tagGroup);
    }

    return tagGroup;
}

function addTag(tagEntry)
{
    var tagGroup = getOrCreateTagGroup(tagEntry);
}

function processJsonTagData(tagData)
{
    JSON.parse(tagData).forEach(addTag);
}

function loadTags()
{
    getJson("static/data/tags.json", processJsonTagData);
}
