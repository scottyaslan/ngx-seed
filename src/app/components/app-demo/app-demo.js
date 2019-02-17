/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ngCore = require('@angular/core');
var ngRouter = require('@angular/router');
var AppService = require('app/services/app.service.js');
var SearchService = require('app/services/search.service.js');
/**
 * AppDemo constructor.
 *
 * @param AppService            The app service module.
 * @constructor
 */
function AppDemo(AppService, SearchService) {
    this.appService = AppService;
    this.searchService = SearchService;

    this.searchResults = [];
    this.searchInProgress = false;

    this.resultCount = null;
    this.columnDefs = [
        { name: 'name', label: 'Repository', tooltip: 'repository name' },
        { name: 'description', label: 'Description', tooltip: 'repository description' },
        { name: 'url', label: 'URL' },
        { name: 'fork_count', label: 'Forks', tooltip: 'number of forks' },
        { name: 'stargazers_count', label: 'Stargazers', tooltip: 'number of stargazers' },
        { name: 'open_issues_count', label: 'Issues', tooltip: 'number of open issues' },
    ];
    this.displayedColumns = ['name', 'forks_count', 'stargazers_count', 'open_issues_count'];

};

AppDemo.prototype = {
    constructor: AppDemo,

    /**
     * Respond after Angular checks the component's views and child views
     */
    ngAfterViewChecked: function () {
        this.appService.inProgress = false;
    },

    ngOnInit: function () {
        var self = this;
        // subscribe to the search service to know when new data is available to show
        this.searchService.searchResults$().subscribe(function(results) {
            console.log('AppDemo subscribe: ', results);
            self.searchResults = results.items;
        });

        // subscribe to the loading observable to know when the search is in progress
        this.searchService.isLoading$().subscribe(function(loading) {
           self.searchInProgress = loading;
        });
    }
};

AppDemo.annotations = [
    new ngCore.Component({
        template: require('./app-demo.html!text')
    })
];

AppDemo.parameters = [
    AppService,
    SearchService
];

module.exports = AppDemo;
