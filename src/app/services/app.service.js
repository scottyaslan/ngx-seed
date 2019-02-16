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

var covalentCore = require('@covalent/core');

/**
 * AppService constructor.
 *
 * @param tdDataTableService    The covalent data table service module.
 * @param appDialogService      The app dialog service.
 * @param appSnackBarService    The app snack bar service module.
 * @constructor
 */
function AppService(tdDataTableService) {
    // Services
    this.dataTableService = tdDataTableService;

    // General
    this.title = "GitHub Info";
    this.inProgress = true;
    this.perspective = '';
};

AppService.prototype = {
    constructor: AppService,
};

AppService.parameters = [
    covalentCore.TdDataTableService
];

module.exports = AppService;
