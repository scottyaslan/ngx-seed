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

var App = require('app/app.js');
var AppDemo = require('app/components/app-demo/app-demo.js');
var AppRoutes = require('app/app.routes.js');
var AppDemoDialog = require('app/components/app-demo/dialogs/demo/app-demo-dialog.js');
var ngCommon = require('@angular/common');
var ngCoreTesting = require('@angular/core/testing');
var ngMaterial = require('@angular/material');

describe('AppDemoDialog Component isolated unit tests', function () {
    var comp;

    beforeEach(function () {
        comp = new AppDemoDialog(
            {
                open: function () {
                },
                close: function () {
                }
            },
            {

            });
    });

    it('should create component', function () {
        //assertions
        expect(comp).toBeDefined();
    });

    it('should cancel the dialog', function () {
        // Spy
        spyOn(comp.dialogRef, 'close');

        // the function to test
        comp.cancel();

        //assertions
        expect(comp.dialogRef.close).toHaveBeenCalled();
    });
});
