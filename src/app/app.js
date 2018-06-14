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
var AppService = require('app/services/app.service.js');

/**
 * App constructor.
 *
 * @param appService            The app service.
 * @constructor
 */
function App(appService) {
    this.appService = appService;
};

App.prototype = {
    constructor: App,

    /**
     * Initialize the component
     */
    ngOnInit: function () {
        var self = this;
        this.appService.sidenav = this.sidenav; //ngCore.ViewChild
    }
};

App.annotations = [
    new ngCore.Component({
        selector: 'app',
        template: require('./app.html!text'),
        queries: {
            sidenav: new ngCore.ViewChild('sidenav')
        }
    })
];

App.parameters = [
    AppService
];

module.exports = App;
