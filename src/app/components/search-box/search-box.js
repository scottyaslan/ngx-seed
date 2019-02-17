var ngCore = require('@angular/core');
var SearchService = require('app/services/search.service.js');

function SearchBox(SearchService) {
    this.text = '';
    this.searchService = SearchService;
};

SearchBox.prototype = {
    constructor: SearchBox,
    ngOnInit: function() {
        console.log('init SearchBox: ' + this.text)
    },
    onButtonClick: function() {
        console.log('searching for ' + this.text);
        this.searchService.searchRepositories(this.text);
    },
    onKeyPress: function(event) {
        if (event.key === 'Enter') {
            this.onButtonClick();
        }
    }
};

SearchBox.annotations = [
    new ngCore.Component({
        selector: 'search-box',
        template: require('./search-box.html!text'),
        inputs: ['text']
    })
];

SearchBox.parameters = [
    SearchService
];

module.exports = SearchBox;
