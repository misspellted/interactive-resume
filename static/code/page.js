function onPageLoaded()
{
    getJson("static/data/organizations.json", processOrganizations);
    getJson("static/data/institutions.json", processInstitutions);
}