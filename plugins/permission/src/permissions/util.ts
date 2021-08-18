/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Permission, PermissionJSON } from './permission';

export const createPermissions = <T extends string>(
  permissions: Record<T, PermissionJSON>,
): Record<T, Permission> => {
  return Object.entries<PermissionJSON>(permissions).reduce<
    Record<T, Permission>
  >(
    (acc, [key, permission]) => ({
      ...acc,
      [key]: Permission.fromJSON(permission),
    }),
    {} as Record<T, Permission>,
  );
};
