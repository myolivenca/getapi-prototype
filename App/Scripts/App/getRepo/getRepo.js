
function getRepo(element, format, writeOn) {
    if (element && element.val() !== '') { // check if element exist
        if (format && format.val() !== '') { // check if format exist
            //check if format is JSON
            if (format.val() === 'json') {
                $.getJSON(element.val())
                    .done(function (data, textStatus, jqXHR) {
                        //parse to string format
                        var headers = jqXHR.getAllResponseHeaders();
                        var strg = JSON.stringify(data, undefined, 4);
                        //print in element
                        writeOn.html(headers + strg);

                        //apply highlight styles on response
                        utils.applyHighlight(writeOn);
                        return format.val();
                    })
                    .fail(function (e) {
                        var strg = JSON.stringify(e, undefined, 4);
                        //print in element
                        writeOn.html('ERROR: ' + strg);
                        //apply highlight styles on response
                        utils.applyHighlight(writeOn);
                        return 'error';
                    });
            } else if (format.val() === 'xml') {
                $.ajax({
                    type: "GET",
                    url: element.val(),
                    dataType: "xml",
                    success: function (xml) {
                        var strg = utils.xmlToString(xml);
                        strg = strg.replace(/</g, "&lt;");
                        strg = strg.replace(/>/g, "&gt;");
                        writeOn.html(strg);

                        //apply highlight styles on response
                        utils.applyHighlight(writeOn);
                        
                        return format.val();
                    },
                    error: function (e) {
                        var strg = JSON.stringify(e, undefined, 4);
                        //print in element
                        writeOn.html('ERROR: ' + strg);

                        //apply highlight styles on response
                        utils.applyHighlight(writeOn);
                        return 'error';
                    }
                });
            }
        }
        //no format
        else {
            writeOn.html('ERROR: you should provide a format');

            //apply highlight styles on response
            utils.applyHighlight(writeOn);
            return 'error';
        }
    } 
    //no url
    else {
        writeOn.html('ERROR: you should provide an api url');

        //apply highlight styles on response
        utils.applyHighlight(writeOn);
        return 'error';
    }
}
