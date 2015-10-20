describe('Check the xmlToString Function', function () {
    
    it('Return a string from xml file', function () {

        var xml = $.parseXML('<?xml version="1.0" encoding="UTF-8"?><space/>');

        expect(utils.xmlToString(xml)).toEqual('<?xml version="1.0" encoding="UTF-8"?><space/>');
    }); 
    
    it('Return a false from no xml file', function () {

        var xml = '<?xml version="1.0" encoding="UTF-8"?><space/>';

        expect(utils.xmlToString(xml)).toEqual(false);
    }); 
});