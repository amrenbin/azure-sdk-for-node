/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the MaxSizeCapability class.
 * @constructor
 * The maximum size capability.
 *
 * @property {number} [limit] The maximum size limit (see 'unit' for the
 * units).
 * @property {string} [unit] The units that the limit is expressed in. Possible
 * values include: 'Megabytes', 'Gigabytes', 'Terabytes', 'Petabytes'
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface MaxSizeCapability {
  readonly limit?: number;
  readonly unit?: string;
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the PerformanceLevelCapability class.
 * @constructor
 * The performance level capability.
 *
 * @property {number} [value] Performance level value.
 * @property {string} [unit] Unit type used to measure service objective
 * performance level. Possible values include: 'DTU'
 */
export interface PerformanceLevelCapability {
  readonly value?: number;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceLevelObjectiveCapability class.
 * @constructor
 * The service objectives capability.
 *
 * @property {uuid} [id] The unique ID of the service objective.
 * @property {string} [name] The service objective name.
 * @property {array} [supportedMaxSizes] The list of supported maximum database
 * sizes for this service objective.
 * @property {object} [performanceLevel] The performance level of the service
 * objective capability.
 * @property {number} [performanceLevel.value] Performance level value.
 * @property {string} [performanceLevel.unit] Unit type used to measure service
 * objective performance level. Possible values include: 'DTU'
 * @property {object} [includedMaxSize] The included (free) max size for this
 * service level objective.
 * @property {number} [includedMaxSize.limit] The maximum size limit (see
 * 'unit' for the units).
 * @property {string} [includedMaxSize.unit] The units that the limit is
 * expressed in. Possible values include: 'Megabytes', 'Gigabytes',
 * 'Terabytes', 'Petabytes'
 * @property {string} [includedMaxSize.status] The status of the capability.
 * Possible values include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [includedMaxSize.reason] The reason for the capability
 * not being available.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ServiceLevelObjectiveCapability {
  readonly id?: string;
  readonly name?: string;
  readonly supportedMaxSizes?: MaxSizeCapability[];
  readonly performanceLevel?: PerformanceLevelCapability;
  readonly includedMaxSize?: MaxSizeCapability;
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the EditionCapability class.
 * @constructor
 * The edition capability.
 *
 * @property {string} [name] The database edition name.
 * @property {array} [supportedServiceLevelObjectives] The list of supported
 * service objectives for the edition.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface EditionCapability {
  readonly name?: string;
  readonly supportedServiceLevelObjectives?: ServiceLevelObjectiveCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the ElasticPoolPerDatabaseMinDtuCapability class.
 * @constructor
 * The minimum per-database DTU capability.
 *
 * @property {number} [limit] The minimum DTUs per database.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ElasticPoolPerDatabaseMinDtuCapability {
  readonly limit?: number;
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the ElasticPoolPerDatabaseMaxDtuCapability class.
 * @constructor
 * The max per-database DTU capability.
 *
 * @property {number} [limit] The maximum DTUs per database.
 * @property {array} [supportedPerDatabaseMinDtus] The list of supported min
 * database DTUs.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ElasticPoolPerDatabaseMaxDtuCapability {
  readonly limit?: number;
  readonly supportedPerDatabaseMinDtus?: ElasticPoolPerDatabaseMinDtuCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the ElasticPoolDtuCapability class.
 * @constructor
 * The Elastic Pool DTU capability.
 *
 * @property {number} [limit] The DTU limit for the pool.
 * @property {number} [maxDatabaseCount] The maximum number of databases
 * supported.
 * @property {object} [includedMaxSize] The included (free) max size for this
 * DTU.
 * @property {number} [includedMaxSize.limit] The maximum size limit (see
 * 'unit' for the units).
 * @property {string} [includedMaxSize.unit] The units that the limit is
 * expressed in. Possible values include: 'Megabytes', 'Gigabytes',
 * 'Terabytes', 'Petabytes'
 * @property {string} [includedMaxSize.status] The status of the capability.
 * Possible values include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [includedMaxSize.reason] The reason for the capability
 * not being available.
 * @property {array} [supportedMaxSizes] The list of supported max sizes.
 * @property {array} [supportedPerDatabaseMaxSizes] The list of supported per
 * database max sizes.
 * @property {array} [supportedPerDatabaseMaxDtus] The list of supported per
 * database max DTUs.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ElasticPoolDtuCapability {
  readonly limit?: number;
  readonly maxDatabaseCount?: number;
  readonly includedMaxSize?: MaxSizeCapability;
  readonly supportedMaxSizes?: MaxSizeCapability[];
  readonly supportedPerDatabaseMaxSizes?: MaxSizeCapability[];
  readonly supportedPerDatabaseMaxDtus?: ElasticPoolPerDatabaseMaxDtuCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the ElasticPoolEditionCapability class.
 * @constructor
 * The elastic pool edition capability.
 *
 * @property {string} [name] The elastic pool edition name.
 * @property {array} [supportedElasticPoolDtus] The list of supported elastic
 * pool DTU levels for the edition.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ElasticPoolEditionCapability {
  readonly name?: string;
  readonly supportedElasticPoolDtus?: ElasticPoolDtuCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the ServerVersionCapability class.
 * @constructor
 * The server capability
 *
 * @property {string} [name] The server version name.
 * @property {array} [supportedEditions] The list of supported database
 * editions.
 * @property {array} [supportedElasticPoolEditions] The list of supported
 * elastic pool editions.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface ServerVersionCapability {
  readonly name?: string;
  readonly supportedEditions?: EditionCapability[];
  readonly supportedElasticPoolEditions?: ElasticPoolEditionCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the LocationCapabilities class.
 * @constructor
 * The location capability.
 *
 * @property {string} [name] The location name.
 * @property {array} [supportedServerVersions] The list of supported server
 * versions.
 * @property {string} [status] The status of the capability. Possible values
 * include: 'Visible', 'Available', 'Default', 'Disabled'
 * @property {string} [reason] The reason for the capability not being
 * available.
 */
export interface LocationCapabilities {
  readonly name?: string;
  readonly supportedServerVersions?: ServerVersionCapability[];
  readonly status?: string;
  reason?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * ARM resource.
 *
 * @property {string} [id] Resource ID.
 * @property {string} [name] Resource name.
 * @property {string} [type] Resource type.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the ProxyResource class.
 * @constructor
 * ARM proxy resource.
 *
 */
export interface ProxyResource extends Resource {
}

/**
 * @class
 * Initializes a new instance of the SubscriptionUsage class.
 * @constructor
 * Usage Metric of a Subscription in a Location.
 *
 * @property {string} [displayName] User-readable name of the metric.
 * @property {number} [currentValue] Current value of the metric.
 * @property {number} [limit] Boundary value of the metric.
 * @property {string} [unit] Unit of the metric.
 */
export interface SubscriptionUsage extends ProxyResource {
  readonly displayName?: string;
  readonly currentValue?: number;
  readonly limit?: number;
  readonly unit?: string;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * ARM tracked top level resource.
 *
 * @property {string} location Resource location.
 * @property {object} [tags] Resource tags.
 */
export interface TrackedResource extends Resource {
  location: string;
  tags?: { [propertyName: string]: string };
}


/**
 * @class
 * Initializes a new instance of the SubscriptionUsageListResult class.
 * @constructor
 * A list of subscription usage metrics in a location.
 *
 * @property {string} [nextLink] Link to retrieve next page of results.
 */
export interface SubscriptionUsageListResult extends Array<SubscriptionUsage> {
  readonly nextLink?: string;
}
