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
 * Initializes a new instance of the EventSubscriptionDestination class.
 * @constructor
 * Information about the destination for an event subscription
 *
 * @member {string} endpointType Polymorphic Discriminator
 */
export interface EventSubscriptionDestination {
  endpointType: string;
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionFilter class.
 * @constructor
 * Filter for the Event Subscription
 *
 * @member {string} [subjectBeginsWith] An optional string to filter events for
 * an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [subjectEndsWith] An optional string to filter events for
 * an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [includedEventTypes] A list of applicable event types that
 * need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner. Default value: false .
 */
export interface EventSubscriptionFilter {
  subjectBeginsWith?: string;
  subjectEndsWith?: string;
  includedEventTypes?: string[];
  isSubjectCaseSensitive?: boolean;
}

/**
 * @class
 * Initializes a new instance of the RetryPolicy class.
 * @constructor
 * Information about the retry policy for an event subscription
 *
 * @member {number} [maxDeliveryAttempts] Maximum number of delivery retry
 * attempts for events.
 * @member {number} [eventTimeToLiveInMinutes] Time To Live (in minutes) for
 * events.
 */
export interface RetryPolicy {
  maxDeliveryAttempts?: number;
  eventTimeToLiveInMinutes?: number;
}

/**
 * @class
 * Initializes a new instance of the DeadLetterDestination class.
 * @constructor
 * Information about the dead letter destination for an event subscription. To
 * configure a deadletter destination, do not directly instantiate an object of
 * this class. Instead, instantiate an object of a derived class. Currently,
 * StorageBlobDeadLetterDestination is the only class that derives from this
 * class.
 *
 * @member {string} endpointType Polymorphic Discriminator
 */
export interface DeadLetterDestination {
  endpointType: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Definition of a Resource
 *
 * @member {string} [id] Fully qualified identifier of the resource
 * @member {string} [name] Name of the resource
 * @member {string} [type] Type of the resource
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageBlobDeadLetterDestination class.
 * @constructor
 * Information about the storage blob based dead letter destination.
 *
 * @member {string} [resourceId] The Azure Resource ID of the storage account
 * that is the destination of the deadletter events
 * @member {string} [blobContainerName] The name of the Storage blob container
 * that is the destination of the deadletter events
 */
export interface StorageBlobDeadLetterDestination extends DeadLetterDestination {
  resourceId?: string;
  blobContainerName?: string;
}

/**
 * @class
 * Initializes a new instance of the WebHookEventSubscriptionDestination class.
 * @constructor
 * Information about the webhook destination for an event subscription
 *
 * @member {string} [endpointUrl] The URL that represents the endpoint of the
 * destination of an event subscription.
 * @member {string} [endpointBaseUrl] The base URL that represents the endpoint
 * of the destination of an event subscription.
 */
export interface WebHookEventSubscriptionDestination extends EventSubscriptionDestination {
  endpointUrl?: string;
  readonly endpointBaseUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the EventHubEventSubscriptionDestination class.
 * @constructor
 * Information about the event hub destination for an event subscription
 *
 * @member {string} [resourceId] The Azure Resource Id that represents the
 * endpoint of an Event Hub destination of an event subscription.
 */
export interface EventHubEventSubscriptionDestination extends EventSubscriptionDestination {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageQueueEventSubscriptionDestination class.
 * @constructor
 * Information about the storage queue destination for an event subscription.
 *
 * @member {string} [resourceId] The Azure Resource ID of the storage account
 * that contains the queue that is the destination of an event subscription.
 * @member {string} [queueName] The name of the Storage queue under a storage
 * account that is the destination of an event subscription.
 */
export interface StorageQueueEventSubscriptionDestination extends EventSubscriptionDestination {
  resourceId?: string;
  queueName?: string;
}

/**
 * @class
 * Initializes a new instance of the HybridConnectionEventSubscriptionDestination class.
 * @constructor
 * Information about the HybridConnection destination for an event
 * subscription.
 *
 * @member {string} [resourceId] The Azure Resource ID of an hybrid connection
 * that is the destination of an event subscription.
 */
export interface HybridConnectionEventSubscriptionDestination extends EventSubscriptionDestination {
  resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the EventSubscription class.
 * @constructor
 * Event Subscription
 *
 * @member {string} [topic] Name of the topic of the event subscription.
 * @member {string} [provisioningState] Provisioning state of the event
 * subscription. Possible values include: 'Creating', 'Updating', 'Deleting',
 * 'Succeeded', 'Canceled', 'Failed', 'AwaitingManualAction'
 * @member {object} [destination] Information about the destination where
 * events have to be delivered for the event subscription.
 * @member {string} [destination.endpointType] Polymorphic Discriminator
 * @member {object} [filter] Information about the filter for the event
 * subscription.
 * @member {string} [filter.subjectBeginsWith] An optional string to filter
 * events for an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [filter.subjectEndsWith] An optional string to filter
 * events for an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [filter.includedEventTypes] A list of applicable event types
 * that need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [filter.isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner.
 * @member {array} [labels] List of user defined labels.
 * @member {string} [eventDeliverySchema] The event delivery schema for the
 * event subscription. Possible values include: 'EventGridSchema',
 * 'InputEventSchema', 'CloudEventV01Schema'. Default value: 'InputEventSchema'
 * .
 * @member {object} [retryPolicy] The retry policy for events. This can be used
 * to configure maximum number of delivery attempts and time to live for
 * events.
 * @member {number} [retryPolicy.maxDeliveryAttempts] Maximum number of
 * delivery retry attempts for events.
 * @member {number} [retryPolicy.eventTimeToLiveInMinutes] Time To Live (in
 * minutes) for events.
 * @member {object} [deadLetterDestination] The DeadLetter destination of the
 * event subscription.
 * @member {string} [deadLetterDestination.endpointType] Polymorphic
 * Discriminator
 */
export interface EventSubscription extends Resource {
  readonly topic?: string;
  readonly provisioningState?: string;
  destination?: EventSubscriptionDestination;
  filter?: EventSubscriptionFilter;
  labels?: string[];
  eventDeliverySchema?: string;
  retryPolicy?: RetryPolicy;
  deadLetterDestination?: DeadLetterDestination;
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionUpdateParameters class.
 * @constructor
 * Properties of the Event Subscription update
 *
 * @member {object} [destination] Information about the destination where
 * events have to be delivered for the event subscription.
 * @member {string} [destination.endpointType] Polymorphic Discriminator
 * @member {object} [filter] Information about the filter for the event
 * subscription.
 * @member {string} [filter.subjectBeginsWith] An optional string to filter
 * events for an event subscription based on a resource path prefix.
 * The format of this depends on the publisher of the events.
 * Wildcard characters are not supported in this path.
 * @member {string} [filter.subjectEndsWith] An optional string to filter
 * events for an event subscription based on a resource path suffix.
 * Wildcard characters are not supported in this path.
 * @member {array} [filter.includedEventTypes] A list of applicable event types
 * that need to be part of the event subscription.
 * If it is desired to subscribe to all event types, the string "all" needs to
 * be specified as an element in this list.
 * @member {boolean} [filter.isSubjectCaseSensitive] Specifies if the
 * SubjectBeginsWith and SubjectEndsWith properties of the filter
 * should be compared in a case sensitive manner.
 * @member {array} [labels] List of user defined labels.
 * @member {string} [eventDeliverySchema] The event delivery schema for the
 * event subscription. Possible values include: 'EventGridSchema',
 * 'InputEventSchema', 'CloudEventV01Schema'
 * @member {object} [retryPolicy] The retry policy for events. This can be used
 * to configure maximum number of delivery attempts and time to live for
 * events.
 * @member {number} [retryPolicy.maxDeliveryAttempts] Maximum number of
 * delivery retry attempts for events.
 * @member {number} [retryPolicy.eventTimeToLiveInMinutes] Time To Live (in
 * minutes) for events.
 * @member {object} [deadLetterDestination] The DeadLetter destination of the
 * event subscription.
 * @member {string} [deadLetterDestination.endpointType] Polymorphic
 * Discriminator
 */
export interface EventSubscriptionUpdateParameters {
  destination?: EventSubscriptionDestination;
  filter?: EventSubscriptionFilter;
  labels?: string[];
  eventDeliverySchema?: string;
  retryPolicy?: RetryPolicy;
  deadLetterDestination?: DeadLetterDestination;
}

/**
 * @class
 * Initializes a new instance of the EventSubscriptionFullUrl class.
 * @constructor
 * Full endpoint url of an event subscription
 *
 * @member {string} [endpointUrl] The URL that represents the endpoint of the
 * destination of an event subscription.
 */
export interface EventSubscriptionFullUrl {
  endpointUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationInfo class.
 * @constructor
 * Information about an operation
 *
 * @member {string} [provider] Name of the provider
 * @member {string} [resource] Name of the resource type
 * @member {string} [operation] Name of the operation
 * @member {string} [description] Description of the operation
 */
export interface OperationInfo {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Represents an operation returned by the GetOperations request
 *
 * @member {string} [name] Name of the operation
 * @member {object} [display] Display name of the operation
 * @member {string} [display.provider] Name of the provider
 * @member {string} [display.resource] Name of the resource type
 * @member {string} [display.operation] Name of the operation
 * @member {string} [display.description] Description of the operation
 * @member {string} [origin] Origin of the operation
 * @member {object} [properties] Properties of the operation
 */
export interface Operation {
  name?: string;
  display?: OperationInfo;
  origin?: string;
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the InputSchemaMapping class.
 * @constructor
 * By default, Event Grid expects events to be in the Event Grid event schema.
 * Specifying an input schema mapping enables publishing to Event Grid using a
 * custom input schema. Currently, the only supported type of
 * InputSchemaMapping is 'JsonInputSchemaMapping'.
 *
 * @member {string} inputSchemaMappingType Polymorphic Discriminator
 */
export interface InputSchemaMapping {
  inputSchemaMappingType: string;
}

/**
 * @class
 * Initializes a new instance of the JsonField class.
 * @constructor
 * This is used to express the source of an input schema mapping for a single
 * target field in the Event Grid Event schema. This is currently used in the
 * mappings for the 'id','topic' and 'eventtime' properties. This represents a
 * field in the input event schema.
 *
 * @member {string} [sourceField] Name of a field in the input event schema
 * that's to be used as the source of a mapping.
 */
export interface JsonField {
  sourceField?: string;
}

/**
 * @class
 * Initializes a new instance of the JsonFieldWithDefault class.
 * @constructor
 * This is used to express the source of an input schema mapping for a single
 * target field in the Event Grid Event schema. This is currently used in the
 * mappings for the 'subject','eventtype' and 'dataversion' properties. This
 * represents a field in the input event schema along with a default value to
 * be used, and at least one of these two properties should be provided.
 *
 * @member {string} [sourceField] Name of a field in the input event schema
 * that's to be used as the source of a mapping.
 * @member {string} [defaultValue] The default value to be used for mapping
 * when a SourceField is not provided or if there's no property with the
 * specified name in the published JSON event payload.
 */
export interface JsonFieldWithDefault {
  sourceField?: string;
  defaultValue?: string;
}

/**
 * @class
 * Initializes a new instance of the JsonInputSchemaMapping class.
 * @constructor
 * This enables publishing to Event Grid using a custom input schema. This can
 * be used to map properties from a custom input JSON schema to the Event Grid
 * event schema.
 *
 * @member {object} [id] The mapping information for the Id property of the
 * Event Grid Event.
 * @member {string} [id.sourceField] Name of a field in the input event schema
 * that's to be used as the source of a mapping.
 * @member {object} [topic] The mapping information for the Topic property of
 * the Event Grid Event.
 * @member {string} [topic.sourceField] Name of a field in the input event
 * schema that's to be used as the source of a mapping.
 * @member {object} [eventTime] The mapping information for the EventTime
 * property of the Event Grid Event.
 * @member {string} [eventTime.sourceField] Name of a field in the input event
 * schema that's to be used as the source of a mapping.
 * @member {object} [eventType] The mapping information for the EventType
 * property of the Event Grid Event.
 * @member {string} [eventType.sourceField] Name of a field in the input event
 * schema that's to be used as the source of a mapping.
 * @member {string} [eventType.defaultValue] The default value to be used for
 * mapping when a SourceField is not provided or if there's no property with
 * the specified name in the published JSON event payload.
 * @member {object} [subject] The mapping information for the Subject property
 * of the Event Grid Event.
 * @member {string} [subject.sourceField] Name of a field in the input event
 * schema that's to be used as the source of a mapping.
 * @member {string} [subject.defaultValue] The default value to be used for
 * mapping when a SourceField is not provided or if there's no property with
 * the specified name in the published JSON event payload.
 * @member {object} [dataVersion] The mapping information for the DataVersion
 * property of the Event Grid Event.
 * @member {string} [dataVersion.sourceField] Name of a field in the input
 * event schema that's to be used as the source of a mapping.
 * @member {string} [dataVersion.defaultValue] The default value to be used for
 * mapping when a SourceField is not provided or if there's no property with
 * the specified name in the published JSON event payload.
 */
export interface JsonInputSchemaMapping extends InputSchemaMapping {
  id?: JsonField;
  topic?: JsonField;
  eventTime?: JsonField;
  eventType?: JsonFieldWithDefault;
  subject?: JsonFieldWithDefault;
  dataVersion?: JsonFieldWithDefault;
}

/**
 * @class
 * Initializes a new instance of the TrackedResource class.
 * @constructor
 * Definition of a Tracked Resource
 *
 * @member {string} location Location of the resource
 * @member {object} [tags] Tags of the resource
 */
export interface TrackedResource extends Resource {
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Topic class.
 * @constructor
 * EventGrid Topic
 *
 * @member {string} [provisioningState] Provisioning state of the topic.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded',
 * 'Canceled', 'Failed'
 * @member {string} [endpoint] Endpoint for the topic.
 * @member {string} [inputSchema] This determines the format that Event Grid
 * should expect for incoming events published to the topic. Possible values
 * include: 'EventGridSchema', 'CustomEventSchema', 'CloudEventV01Schema'.
 * Default value: 'EventGridSchema' .
 * @member {object} [inputSchemaMapping] This enables publishing using custom
 * event schemas. An InputSchemaMapping can be specified to map various
 * properties of a source schema to various required properties of the
 * EventGridEvent schema.
 * @member {string} [inputSchemaMapping.inputSchemaMappingType] Polymorphic
 * Discriminator
 */
export interface Topic extends TrackedResource {
  readonly provisioningState?: string;
  readonly endpoint?: string;
  inputSchema?: string;
  inputSchemaMapping?: InputSchemaMapping;
}

/**
 * @class
 * Initializes a new instance of the TopicUpdateParameters class.
 * @constructor
 * Properties of the Topic update
 *
 * @member {object} [tags] Tags of the resource
 */
export interface TopicUpdateParameters {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the TopicSharedAccessKeys class.
 * @constructor
 * Shared access keys of the Topic
 *
 * @member {string} [key1] Shared access key1 for the topic.
 * @member {string} [key2] Shared access key2 for the topic.
 */
export interface TopicSharedAccessKeys {
  key1?: string;
  key2?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicRegenerateKeyRequest class.
 * @constructor
 * Topic regenerate share access key request
 *
 * @member {string} keyName Key name to regenerate key1 or key2
 */
export interface TopicRegenerateKeyRequest {
  keyName: string;
}

/**
 * @class
 * Initializes a new instance of the EventType class.
 * @constructor
 * Event Type for a subject under a topic
 *
 * @member {string} [displayName] Display name of the event type.
 * @member {string} [description] Description of the event type.
 * @member {string} [schemaUrl] Url of the schema for this event type.
 */
export interface EventType extends Resource {
  displayName?: string;
  description?: string;
  schemaUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the TopicTypeInfo class.
 * @constructor
 * Properties of a topic type info.
 *
 * @member {string} [provider] Namespace of the provider of the topic type.
 * @member {string} [displayName] Display Name for the topic type.
 * @member {string} [description] Description of the topic type.
 * @member {string} [resourceRegionType] Region type of the resource. Possible
 * values include: 'RegionalResource', 'GlobalResource'
 * @member {string} [provisioningState] Provisioning state of the topic type.
 * Possible values include: 'Creating', 'Updating', 'Deleting', 'Succeeded',
 * 'Canceled', 'Failed'
 * @member {array} [supportedLocations] List of locations supported by this
 * topic type.
 */
export interface TopicTypeInfo extends Resource {
  provider?: string;
  displayName?: string;
  description?: string;
  resourceRegionType?: string;
  provisioningState?: string;
  supportedLocations?: string[];
}


/**
 * @class
 * Initializes a new instance of the EventSubscriptionsListResult class.
 * @constructor
 * Result of the List EventSubscriptions operation
 *
 */
export interface EventSubscriptionsListResult extends Array<EventSubscription> {
}

/**
 * @class
 * Initializes a new instance of the OperationsListResult class.
 * @constructor
 * Result of the List Operations operation
 *
 */
export interface OperationsListResult extends Array<Operation> {
}

/**
 * @class
 * Initializes a new instance of the TopicsListResult class.
 * @constructor
 * Result of the List Topics operation
 *
 */
export interface TopicsListResult extends Array<Topic> {
}

/**
 * @class
 * Initializes a new instance of the EventTypesListResult class.
 * @constructor
 * Result of the List Event Types operation
 *
 */
export interface EventTypesListResult extends Array<EventType> {
}

/**
 * @class
 * Initializes a new instance of the TopicTypesListResult class.
 * @constructor
 * Result of the List Topic Types operation
 *
 */
export interface TopicTypesListResult extends Array<TopicTypeInfo> {
}
