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

function tagGroupListId(tagEntry)
{
    return tagGroupId(tagEntry) + "-list";
}

function createTagGroup(tagEntry)
{
    var group = sectionNode();

    var groupHeading = h2Node();
    groupHeading.appendChild(textNode(getTagGroup(tagEntry)));
    group.appendChild(groupHeading);

    var groupListing = unorderedListNode();
    setId(groupListing, tagGroupListId(tagEntry));
    group.appendChild(groupListing);

    return group;
}

function ensureTagGroupExists(tagEntry)
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
}

function getTagValue(tagEntry)
{
    with (tagEntry)
    {
        if ("value" in tagEntry)
        {
            return value;
        }
        else
        {
            return "Unknown";
        }
    }
}

function tagListItemId(tagEntry)
{
    var group = getTagGroup(tagEntry).toLowerCase();
    var value = getTagValue(tagEntry).toLowerCase();

    return "tag-" + group + "-" + value;
}

function addTag(tagEntry)
{
    // Make sure there is a tag group waiting to receive the tag.
    ensureTagGroupExists(tagEntry);

    // Now we can add the tag as a list item.
    var listItemId = tagListItemId(tagEntry);

    var tagListItem = document.getElementById(listItemId);

    // But only add the tag if the list item doesn't exist already.
    if (!tagListItem)
    {
        tagListItem = listItemNode();

        tagListItem.appendChild(textNode(getTagValue(tagEntry)));
        setId(tagListItem, listItemId);

        document.getElementById(tagGroupListId(tagEntry)).appendChild(tagListItem);
    }
}

function processJsonTagData(tagData)
{
    JSON.parse(tagData).forEach(addTag);
}

function loadTags()
{
    getJson("static/data/tags.json", processJsonTagData);
}
