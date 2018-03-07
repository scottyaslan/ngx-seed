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
var AppRoutes = require('app/app.routes.js');
var fdsCore = require('@fluid-design-system/core');
var App = require('app/app.js');
var AppDemo = require('app/components/app-demo/app-demo.js');
var AppDemoDialog = require('app/components/app-demo/dialogs/demo/app-demo-dialog.js');
var AppService = require('app/services/app.service.js');

function AppModule() {
};

AppModule.prototype = {
    constructor: AppModule
};

AppModule.annotations = [
    new ngCore.NgModule({
        imports: [
            fdsCore,
            AppRoutes
        ],
        declarations: [
            App,
            AppDemo,
            AppDemoDialog
        ],
        entryComponents: [
            AppDemoDialog
        ],
        providers: [
            AppService
        ],
        bootstrap: [App]
    })
];

module.exports = AppModule;
