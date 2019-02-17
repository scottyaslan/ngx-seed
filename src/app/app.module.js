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
var ngFlex = require('@angular/flex-layout');
var ngAnimations = require('@angular/platform-browser/animations');
var ngMaterial = require('@angular/material');
var ngCommon = require('@angular/common');
var ngHttp = require('@angular/common/http');
var ngPlatformBrowser = require('@angular/platform-browser');
var AppRoutes = require('app/app.routes.js');
var covalentCore = require('@covalent/core');
var App = require('app/app.js');
var AppDemo = require('app/components/app-demo/app-demo.js');
var AppDemoDialog = require('app/components/app-demo/dialogs/demo/app-demo-dialog.js');
var AppService = require('app/services/app.service.js');
var SearchService = require('app/services/search.service.js');
var SearchBox = require('app/components/search-box/search-box.js');

function AppModule() {
};

AppModule.prototype = {
    constructor: AppModule
};

AppModule.annotations = [
    new ngCore.NgModule({
        imports: [
            ngFlex.FlexLayoutModule,
            ngAnimations.BrowserAnimationsModule,
            ngCommon.CommonModule,
            ngHttp.HttpClientModule,
            ngPlatformBrowser.BrowserModule,
            ngMaterial.MatAutocompleteModule,
            ngMaterial.MatButtonModule,
            ngMaterial.MatButtonToggleModule,
            ngMaterial.MatCardModule,
            ngMaterial.MatCheckboxModule,
            ngMaterial.MatChipsModule,
            ngMaterial.MatDatepickerModule,
            ngMaterial.MatDialogModule,
            ngMaterial.MatExpansionModule,
            ngMaterial.MatFormFieldModule,
            ngMaterial.MatGridListModule,
            ngMaterial.MatIconModule,
            ngMaterial.MatInputModule,
            ngMaterial.MatListModule,
            ngMaterial.MatMenuModule,
            ngMaterial.MatProgressBarModule,
            ngMaterial.MatProgressSpinnerModule,
            ngMaterial.MatRadioModule,
            ngMaterial.MatSelectModule,
            ngMaterial.MatSlideToggleModule,
            ngMaterial.MatSliderModule,
            ngMaterial.MatSidenavModule,
            ngMaterial.MatSnackBarModule,
            ngMaterial.MatStepperModule,
            ngMaterial.MatTabsModule,
            ngMaterial.MatToolbarModule,
            ngMaterial.MatTooltipModule,
            ngMaterial.MatPaginatorModule,
            ngMaterial.MatSortModule,
            ngMaterial.MatTableModule,
            covalentCore.CovalentCommonModule,
            covalentCore.CovalentChipsModule,
            covalentCore.CovalentDataTableModule,
            covalentCore.CovalentDialogsModule,
            covalentCore.CovalentExpansionPanelModule,
            covalentCore.CovalentLoadingModule,
            covalentCore.CovalentMenuModule,
            covalentCore.CovalentNotificationsModule,
            covalentCore.CovalentPagingModule,
            covalentCore.CovalentSearchModule,
            covalentCore.CovalentStepsModule,
            AppRoutes
        ],
        declarations: [
            App,
            AppDemoDialog,
            AppDemo,
            SearchBox
        ],
        entryComponents: [
            AppDemoDialog
        ],
        providers: [
            AppService,
            SearchService
        ],
        bootstrap: [App]
    })
];

module.exports = AppModule;
