var Http = require('@angular/common/http');
var Rx = require('rxjs/Rx');

/**
 * SearchService provides search capabilities of GitHub repositories. It allows consumers to observe the results
 * to be notified when there are new data.
 * @param HttpClient
 * @constructor
 */
function SearchService (HttpClient) {
    this.httpClient = HttpClient;

    this.searchResultsSubject = new Rx.Subject();

    this.loading = new Rx.Subject();
    this.loading.next(false);
}

SearchService.prototype = {
    constructor: SearchService,

    /**
     * Get an observable of the search results
     * @returns {Observable} of the search results
     */
    searchResults$: function () {
        return this.searchResultsSubject.asObservable();
    },

    /**
     * Get an observable of when the search results are loading or not
     * @returns {Observable<T>}
     */
    isLoading$: function () {
        return this.loading.asObservable();
    },

    /**
     * Initiate a new search. Results will be made available in the searchResults$ observable
     * @param searchTerm
     * @returns {*}
     */
    searchRepositories: function (searchTerm) {
        this.loading.next(true);

        var repoSearchUrl = 'https://api.github.com/search/repositories?q=' + searchTerm;
        var self = this;

        return this.httpClient.get(repoSearchUrl).subscribe(function(response) {
            self.searchResultsSubject.next(response);
            self.loading.next(false);
        });
    }
};

SearchService.parameters = [
    Http.HttpClient
];

module.exports = SearchService;
