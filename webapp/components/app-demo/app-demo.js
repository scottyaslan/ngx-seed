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
var covalentCore = require('@covalent/core');
var ngRouter = require('@angular/router');
var ngMaterial = require('@angular/material');
var fdsAnimations = require('@fluid-design-system/animations');
var fdsDialogsModule = require('@fluid-design-system/dialogs');
var fdsSnackBarsModule = require('@fluid-design-system/snackbars');
var AppService = require('app/services/app.service.js');
var AppDemoDialog = require('app/components/app-demo/dialogs/demo/app-demo-dialog.js');

/**
 * AppDemo constructor.
 *
 * @param AppSnackBarService    The app snack bar service module.
 * @param AppService            The app service module.
 * @param dialog                The angular material dialog module.
 * @param TdDialogService       The covalent dialog service module.
 * @param TdDataTableService    The covalent data table service module.
 * @constructor
 */
function AppDemo(AppSnackBarService, AppService, dialog, TdDataTableService, AppDialogService) {

    this.appService = AppService;

    this.snackBarService = AppSnackBarService;

    this.dialog = dialog;

    this.dialogService = AppDialogService;

    this.dataTableService = TdDataTableService;
};

AppDemo.prototype = {
    constructor: AppDemo,

    /**
     * Respond after Angular checks the component's views and child views
     */
    ngAfterViewChecked: function () {
        this.appService.inProgress = false;
    }
};

AppDemo.annotations = [
    new ngCore.Component({
        template: require('./app-demo.html!text'),
        animations: [fdsAnimations.flyInOutAnimation]
    })
];

AppDemo.parameters = [
    fdsSnackBarsModule.FdsSnackBarService,
    AppService,
    ngMaterial.MatDialog,
    covalentCore.TdDataTableService,
    fdsDialogsModule.FdsDialogService
];

module.exports = AppDemo;
