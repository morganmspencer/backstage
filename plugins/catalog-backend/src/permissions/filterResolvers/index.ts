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

import { ResourceFilterResolverConfig } from '@backstage/plugin-permission-backend';
import {
  Entity,
  parseEntityRef,
  RESOURCE_TYPE_CATALOG_ENTITY,
} from '@backstage/catalog-model';
import { hasAnnotation } from './hasAnnotation';
import { isEntityKind } from './isEntityKind';
import { isEntityOwner } from './isEntityOwner';
import { EntitiesCatalog, EntitiesSearchFilter } from '../../catalog/types';
import { basicEntityFilter } from '../../service/request';

export class CatalogEntityFilterResolverConfig
  implements ResourceFilterResolverConfig<Entity, EntitiesSearchFilter>
{
  constructor(private readonly entitiesCatalog: EntitiesCatalog) {}

  getResourceType() {
    return RESOURCE_TYPE_CATALOG_ENTITY;
  }

  getResolvers() {
    return [hasAnnotation, isEntityKind, isEntityOwner];
  }

  async getResource(resourceRef: string) {
    const parsed = parseEntityRef(resourceRef);

    const { entities } = await this.entitiesCatalog.entities(
      {
        filter: basicEntityFilter({
          kind: parsed.kind,
          'metadata.namespace': parsed.namespace,
          'metadata.name': parsed.name,
        }),
      },
      false,
    );

    if (!entities.length) {
      return undefined;
    }

    return entities[0];
  }
}

export { hasAnnotation, isEntityKind, isEntityOwner };
