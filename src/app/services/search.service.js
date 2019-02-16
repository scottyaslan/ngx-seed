var Http = require('@angular/common/http');
var Rx = require('rxjs/Rx');

function SearchService (HttpClient) {
    this.httpClient = HttpClient;

    this.searchResultsSubject = new Rx.Subject();
}

SearchService.prototype = {
    constructor: SearchService,

    searchResults$: function () {
        return this.searchResultsSubject.asObservable();
    },

    searchRepositories: function (searchTerm) {
        var repoSearchUrl = 'https://api.github.com/search/repositories?q=' + searchTerm;
        console.log(repoSearchUrl);
        var self = this;
        // how is this possible?
        return this.httpClient.get(repoSearchUrl).subscribe(function(response) {
            var x = response;
            console.log(response);
            self.searchResultsSubject.next(response);
        });
    }
};
SearchService.parameters = [
    Http.HttpClient
];

module.exports = SearchService;
