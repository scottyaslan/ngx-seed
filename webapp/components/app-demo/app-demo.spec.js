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

var fdsCore = require('@fluid-design-system/core');
var App = require('app/app.js');
var AppDemo = require('app/components/app-demo/app-demo.js');
var AppRoutes = require('app/app.routes.js');
var AppDemoDialog = require('app/components/app-demo/dialogs/demo/app-demo-dialog.js');
var AppService = require('app/services/app.service.js');
var ngCommon = require('@angular/common');
var ngCoreTesting = require('@angular/core/testing');

describe('app-demo component spec', function () {
    var comp;
    var fixture;
    var appService;

    beforeEach(function () {
        ngCoreTesting.TestBed.configureTestingModule({
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
                AppService,
                {
                    provide: ngCommon.APP_BASE_HREF,
                    useValue: '/'
                }
            ],
            bootstrap: [App]
        });
        fixture = ngCoreTesting.TestBed.createComponent(AppDemo);
        fixture.detectChanges();
        comp = fixture.componentInstance;

        // AppService from the root injector
        appService = ngCoreTesting.TestBed.get(AppService);
    });

    it('should create component', function () {
        //assertions
        expect(comp).toBeDefined();
    });
});
