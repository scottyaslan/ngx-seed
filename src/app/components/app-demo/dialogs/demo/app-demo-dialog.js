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

var ngMaterial = require('@angular/material');
var ngCore = require('@angular/core');
var SearchService = require('app/services/search.service.js');

/**
 *
 * @param matDialogRef
 * @param data
 * @constructor
 */
function AppDemoDialog(matDialogRef, data, SearchService) {
    this.dialogRef = matDialogRef;
    this.data = data;
    this.searchService = SearchService;
    this.issues = [];
    this.loading = false;
};

AppDemoDialog.prototype = {
    constructor: AppDemoDialog,

    ngOnInit: function () {
        var self = this;

        // set up a subscriber to wait for the search results
        this.searchService.openIssues$().subscribe(function(results) {
            self.issues = results.items;
        });

        this.searchService.isOpenIssuesLoading$().subscribe(function(isLoading) {
            self.loading = isLoading;
        });

        // fire off the request to get the issues
        this.searchService.searchOpenIssues(this.data.repo.full_name);
    },

    /**
     * Close the dialog
     */
    close: function () {
        this.dialogRef.close();
    }
};

AppDemoDialog.annotations = [
    new ngCore.Component({
        template: require('./app-demo-dialog.html!text')
    })
];

AppDemoDialog.parameters = [
    ngMaterial.MatDialogRef,
    ngMaterial.MAT_DIALOG_DATA,
    SearchService
];

module.exports = AppDemoDialog;
