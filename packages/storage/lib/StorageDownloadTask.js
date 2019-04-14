/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import StorageTaskInternal from './StorageTaskInternal';

const DOWNLOAD_TASK = 'download';

export default class StorageDownloadTask extends StorageTaskInternal {
  constructor(storageRef, filePath) {
    super(DOWNLOAD_TASK, storageRef);
    this._beginTask = () =>
      this._storage.native.downloadFile(storageRef.toString(), filePath, this._id);

    // TODO(salakar) implement in Internals
    const promise = this._beginTask();
    this.then = promise.then.bind(promise);
    this.catch = promise.catch.bind(promise);
  }
}