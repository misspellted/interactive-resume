function onPageLoaded()
{
    getJson("static/data/organizations.json", processOrganizations);
    loadEducations();
}