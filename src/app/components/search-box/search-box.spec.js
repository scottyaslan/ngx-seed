var SearchBox = require('app/components/search-box/search-box.js');
var SearchService = require('app/services/search.service.js');

describe('search-box tests', function() {
    var comp;
    var fakeService = new SearchService(null);

    beforeEach(function() {
        comp = new SearchBox(fakeService);

        spyOn(fakeService, 'searchRepositories').and.callFake(function(searchTerm) {});

    });

    it('should create a component', function() {
       expect(comp).toBeDefined();
    });

    it('should call the search service when the button is clicked', function() {
        comp.onButtonClick();

        expect(fakeService.searchRepositories).toHaveBeenCalled();
    });

    it('should call the search service when Enter is pressed', function() {
        comp.onKeyPress({key: 'Enter'});

        expect(fakeService.searchRepositories).toHaveBeenCalled();
    });

    it('should NOT call the search service when other keys are pressed', function() {
        comp.onKeyPress({key: 'e'});

        expect(fakeService.searchRepositories).not.toHaveBeenCalled();
    });
});
