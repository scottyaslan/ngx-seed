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

    this.searchOpenIssuesSubject = new Rx.Subject();
    this.loadingIssues = new Rx.Subject();
    this.loadingIssues.next(false);
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
    },

    /**
     * Observer for open issue search results
     * @returns {*}
     */
    openIssues$: function () {
        return this.searchOpenIssuesSubject.asObservable();
    },

    /**
     * Observer for loading status of open issue search
     * @returns {*}
     */
    isOpenIssuesLoading$: function () {
        return this.loadingIssues.asObservable();
    },

    /**
     * Execute a search for open issues for a given github repo
     * @param repoFullName
     * @returns {*}
     */
    searchOpenIssues: function (repoFullName) {
        this.loadingIssues.next(true);

        var repoSearchUrl = 'https://api.github.com/search/issues?q=repo:' + repoFullName + '+is:open';
        var self = this;

        return this.httpClient.get(repoSearchUrl).subscribe(function(response) {
            self.searchOpenIssuesSubject.next(response);
            self.loadingIssues.next(false);
        });
    }
};

SearchService.parameters = [
    Http.HttpClient
];

module.exports = SearchService;
