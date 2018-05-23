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

/**
 * AppDemo constructor.
 *
 * @param AppService            The app service module.
 * @constructor
 */
function AppDemo(AppService) {
    this.appService = AppService;
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
        template: require('./app-demo.html!text')
    })
];

AppDemo.parameters = [
    AppService,
];

module.exports = AppDemo;
