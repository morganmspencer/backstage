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

import { Filters } from '@backstage/backend-common';
import { Permission, PermissionCondition, PermissionJSON } from './permissions';

export type Identified<T> = T & { id: string };

export enum AuthorizeResult {
  DENY = 'DENY',
  ALLOW = 'ALLOW',
  MAYBE = 'MAYBE',
}

export type AuthorizeRequest = {
  permission: Permission;
  // TODO(authorization-framework): consider making AuthorizeRequest
  // generic to allow the type of the resourceRef to be specified at
  // permission creation time.
  resourceRef?: string;
};

export type OpaqueAuthorizeRequest = {
  permission: Permission;
};

export type AuthorizeRequestJSON = AuthorizeRequest & {
  permission: PermissionJSON;
};

export type DefinitiveAuthorizeResult = {
  result: AuthorizeResult.ALLOW | AuthorizeResult.DENY;
};

export type ConditionalAuthorizeResult = {
  result: AuthorizeResult.MAYBE;
  // TODO(authorization-framework): should we use a concrete type instead of any?
  conditions: Filters<PermissionCondition<any>>;
};

export type AuthorizeResponse =
  | DefinitiveAuthorizeResult
  | ConditionalAuthorizeResult;
