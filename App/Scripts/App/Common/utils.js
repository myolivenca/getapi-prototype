var utils = {
    applyHighlight: function(element){
        element.each(function (i, block) {
            $(this).removeClass();
            hljs.highlightBlock(block);
        });
    },
    xmlToString: function(xmlData){
        
        if($.isXMLDoc( xmlData )){
            var xmlString;
            //IE
            if (window.ActiveXObject) {
                xmlString = xmlData.xml;
            }
            // code for Mozilla, Firefox, Opera, etc.
            else {
                xmlString = (new XMLSerializer()).serializeToString(xmlData);
            }
            return xmlString;
        }
        else{
            return false;
        }
    }
};