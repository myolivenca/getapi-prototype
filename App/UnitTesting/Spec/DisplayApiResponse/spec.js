describe('Display Api Response', function () {
    
    it('Return a json format file', function () {
        var url = '/App/Api/response.json';
        var element = $('#apiUrl');
        element.val(url);

        var format = $('#selectFormat');
        format.val('json');

        var writeOn = $('#apiResponse');
        var expected = getRepo(element, format, writeOn);
        expect(expected).toEqual(format.val());
    });
    
   
    it('Return a xml format file', function () {
        var url = '/App/Api/response.xml';
        var element = $('#apiUrl');
        element.val(url);

        var format = $('#selectFormat');
        format.val('xml');

        var writeOn = $('#apiResponse');
        var expected = getRepo(element, format, writeOn);
        expect(expected).toEqual(format.val());
    });
    
});