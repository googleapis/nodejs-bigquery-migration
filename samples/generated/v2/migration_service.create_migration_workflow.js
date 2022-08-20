// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent, migrationWorkflow) {
  // [START bigquerymigration_v2_generated_MigrationService_CreateMigrationWorkflow_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project to which this migration workflow belongs.
   *  Example: `projects/foo/locations/bar`
   */
  // const parent = 'abc123'
  /**
   *  Required. The migration workflow to create.
   */
  // const migrationWorkflow = {}

  // Imports the Migration library
  const {MigrationServiceClient} = require('@google-cloud/migration').v2;

  // Instantiates a client
  const migrationClient = new MigrationServiceClient();

  async function callCreateMigrationWorkflow() {
    // Construct request
    const request = {
      parent,
      migrationWorkflow,
    };

    // Run request
    const response = await migrationClient.createMigrationWorkflow(request);
    console.log(response);
  }

  callCreateMigrationWorkflow();
  // [END bigquerymigration_v2_generated_MigrationService_CreateMigrationWorkflow_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
