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
var ngMaterial = require('@angular/material');
var AppDemoDialog = require('./dialogs/demo/app-demo-dialog.js');

/**
 * AppDemo constructor
 * @param AppService
 * @param SearchService
 * @param MatDialog
 * @constructor
 */
function AppDemo(AppService, SearchService, MatDialog) {
    this.appService = AppService;
    this.searchService = SearchService;
    this.dialog = MatDialog;

    this.searchResults = [];
    this.searchInProgress = false;

    this.resultCount = null;
    this.displayedColumns = ['full_name', 'forks_count', 'stargazers_count', 'open_issues_count'];

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
    },

    showIssues: function(repo) {
        this.dialog.open(AppDemoDialog, { data: {repo: repo }, width: '500px' });
    }
};

AppDemo.annotations = [
    new ngCore.Component({
        template: require('./app-demo.html!text')
    })
];

AppDemo.parameters = [
    AppService,
    SearchService,
    ngMaterial.MatDialog
];

module.exports = AppDemo;
