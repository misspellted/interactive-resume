function get(url, handler, mimeType=null)
{
    var request = new XMLHttpRequest();

    // Attach the handler.
    request.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            handler(this.responseText);
        }
    };


    request.open("GET", url, true);

    if (mimeType)
    {
        request.overrideMimeType(mimeType);
    }

    request.send();
}

function getJson(url, handler)
{
    get(url, handler, "application/json");
}