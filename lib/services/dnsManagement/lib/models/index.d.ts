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
 * Initializes a new instance of the ARecord class.
 * @constructor
 * An A record.
 *
 * @member {string} [ipv4Address] The IPv4 address of this A record.
 */
export interface ARecord {
  ipv4Address?: string;
}

/**
 * @class
 * Initializes a new instance of the AaaaRecord class.
 * @constructor
 * An AAAA record.
 *
 * @member {string} [ipv6Address] The IPv6 address of this AAAA record.
 */
export interface AaaaRecord {
  ipv6Address?: string;
}

/**
 * @class
 * Initializes a new instance of the MxRecord class.
 * @constructor
 * An MX record.
 *
 * @member {number} [preference] The preference value for this MX record.
 * @member {string} [exchange] The domain name of the mail host for this MX
 * record.
 */
export interface MxRecord {
  preference?: number;
  exchange?: string;
}

/**
 * @class
 * Initializes a new instance of the NsRecord class.
 * @constructor
 * An NS record.
 *
 * @member {string} [nsdname] The name server name for this NS record.
 */
export interface NsRecord {
  nsdname?: string;
}

/**
 * @class
 * Initializes a new instance of the PtrRecord class.
 * @constructor
 * A PTR record.
 *
 * @member {string} [ptrdname] The PTR target domain name for this PTR record.
 */
export interface PtrRecord {
  ptrdname?: string;
}

/**
 * @class
 * Initializes a new instance of the SrvRecord class.
 * @constructor
 * An SRV record.
 *
 * @member {number} [priority] The priority value for this SRV record.
 * @member {number} [weight] The weight value for this SRV record.
 * @member {number} [port] The port value for this SRV record.
 * @member {string} [target] The target domain name for this SRV record.
 */
export interface SrvRecord {
  priority?: number;
  weight?: number;
  port?: number;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the TxtRecord class.
 * @constructor
 * A TXT record.
 *
 * @member {array} [value] The text value of this TXT record.
 */
export interface TxtRecord {
  value?: string[];
}

/**
 * @class
 * Initializes a new instance of the CnameRecord class.
 * @constructor
 * A CNAME record.
 *
 * @member {string} [cname] The canonical name for this CNAME record.
 */
export interface CnameRecord {
  cname?: string;
}

/**
 * @class
 * Initializes a new instance of the SoaRecord class.
 * @constructor
 * An SOA record.
 *
 * @member {string} [host] The domain name of the authoritative name server for
 * this SOA record.
 * @member {string} [email] The email contact for this SOA record.
 * @member {number} [serialNumber] The serial number for this SOA record.
 * @member {number} [refreshTime] The refresh value for this SOA record.
 * @member {number} [retryTime] The retry time for this SOA record.
 * @member {number} [expireTime] The expire time for this SOA record.
 * @member {number} [minimumTtl] The minimum value for this SOA record. By
 * convention this is used to determine the negative caching duration.
 */
export interface SoaRecord {
  host?: string;
  email?: string;
  serialNumber?: number;
  refreshTime?: number;
  retryTime?: number;
  expireTime?: number;
  minimumTtl?: number;
}

/**
 * @class
 * Initializes a new instance of the CaaRecord class.
 * @constructor
 * A CAA record.
 *
 * @member {number} [flags] The flags for this CAA record as an integer between
 * 0 and 255.
 * @member {string} [tag] The tag for this CAA record.
 * @member {string} [value] The value for this CAA record.
 */
export interface CaaRecord {
  flags?: number;
  tag?: string;
  value?: string;
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * A reference to a another resource
 *
 * @member {string} [id] Resource Id.
 */
export interface SubResource {
  id?: string;
}

/**
 * @class
 * Initializes a new instance of the RecordSet class.
 * @constructor
 * Describes a DNS record set (a collection of DNS records with the same name
 * and type).
 *
 * @member {string} [id] The ID of the record set.
 * @member {string} [name] The name of the record set.
 * @member {string} [type] The type of the record set.
 * @member {string} [etag] The etag of the record set.
 * @member {object} [metadata] The metadata attached to the record set.
 * @member {number} [tTL] The TTL (time-to-live) of the records in the record
 * set.
 * @member {string} [fqdn] Fully qualified domain name of the record set.
 * @member {string} [provisioningState] provisioning State of the record set.
 * @member {object} [targetResource] A reference to an azure resource from
 * where the dns resource value is taken.
 * @member {string} [targetResource.id] Resource Id.
 * @member {array} [aRecords] The list of A records in the record set.
 * @member {array} [aaaaRecords] The list of AAAA records in the record set.
 * @member {array} [mxRecords] The list of MX records in the record set.
 * @member {array} [nsRecords] The list of NS records in the record set.
 * @member {array} [ptrRecords] The list of PTR records in the record set.
 * @member {array} [srvRecords] The list of SRV records in the record set.
 * @member {array} [txtRecords] The list of TXT records in the record set.
 * @member {object} [cnameRecord] The CNAME record in the  record set.
 * @member {string} [cnameRecord.cname] The canonical name for this CNAME
 * record.
 * @member {object} [soaRecord] The SOA record in the record set.
 * @member {string} [soaRecord.host] The domain name of the authoritative name
 * server for this SOA record.
 * @member {string} [soaRecord.email] The email contact for this SOA record.
 * @member {number} [soaRecord.serialNumber] The serial number for this SOA
 * record.
 * @member {number} [soaRecord.refreshTime] The refresh value for this SOA
 * record.
 * @member {number} [soaRecord.retryTime] The retry time for this SOA record.
 * @member {number} [soaRecord.expireTime] The expire time for this SOA record.
 * @member {number} [soaRecord.minimumTtl] The minimum value for this SOA
 * record. By convention this is used to determine the negative caching
 * duration.
 * @member {array} [caaRecords] The list of CAA records in the record set.
 */
export interface RecordSet extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  etag?: string;
  metadata?: { [propertyName: string]: string };
  tTL?: number;
  readonly fqdn?: string;
  readonly provisioningState?: string;
  targetResource?: SubResource;
  aRecords?: ARecord[];
  aaaaRecords?: AaaaRecord[];
  mxRecords?: MxRecord[];
  nsRecords?: NsRecord[];
  ptrRecords?: PtrRecord[];
  srvRecords?: SrvRecord[];
  txtRecords?: TxtRecord[];
  cnameRecord?: CnameRecord;
  soaRecord?: SoaRecord;
  caaRecords?: CaaRecord[];
}

/**
 * @class
 * Initializes a new instance of the RecordSetUpdateParameters class.
 * @constructor
 * Parameters supplied to update a record set.
 *
 * @member {object} [recordSet] Specifies information about the record set
 * being updated.
 * @member {string} [recordSet.id] The ID of the record set.
 * @member {string} [recordSet.name] The name of the record set.
 * @member {string} [recordSet.type] The type of the record set.
 * @member {string} [recordSet.etag] The etag of the record set.
 * @member {object} [recordSet.metadata] The metadata attached to the record
 * set.
 * @member {number} [recordSet.tTL] The TTL (time-to-live) of the records in
 * the record set.
 * @member {string} [recordSet.fqdn] Fully qualified domain name of the record
 * set.
 * @member {string} [recordSet.provisioningState] provisioning State of the
 * record set.
 * @member {object} [recordSet.targetResource] A reference to an azure resource
 * from where the dns resource value is taken.
 * @member {string} [recordSet.targetResource.id] Resource Id.
 * @member {array} [recordSet.aRecords] The list of A records in the record
 * set.
 * @member {array} [recordSet.aaaaRecords] The list of AAAA records in the
 * record set.
 * @member {array} [recordSet.mxRecords] The list of MX records in the record
 * set.
 * @member {array} [recordSet.nsRecords] The list of NS records in the record
 * set.
 * @member {array} [recordSet.ptrRecords] The list of PTR records in the record
 * set.
 * @member {array} [recordSet.srvRecords] The list of SRV records in the record
 * set.
 * @member {array} [recordSet.txtRecords] The list of TXT records in the record
 * set.
 * @member {object} [recordSet.cnameRecord] The CNAME record in the  record
 * set.
 * @member {string} [recordSet.cnameRecord.cname] The canonical name for this
 * CNAME record.
 * @member {object} [recordSet.soaRecord] The SOA record in the record set.
 * @member {string} [recordSet.soaRecord.host] The domain name of the
 * authoritative name server for this SOA record.
 * @member {string} [recordSet.soaRecord.email] The email contact for this SOA
 * record.
 * @member {number} [recordSet.soaRecord.serialNumber] The serial number for
 * this SOA record.
 * @member {number} [recordSet.soaRecord.refreshTime] The refresh value for
 * this SOA record.
 * @member {number} [recordSet.soaRecord.retryTime] The retry time for this SOA
 * record.
 * @member {number} [recordSet.soaRecord.expireTime] The expire time for this
 * SOA record.
 * @member {number} [recordSet.soaRecord.minimumTtl] The minimum value for this
 * SOA record. By convention this is used to determine the negative caching
 * duration.
 * @member {array} [recordSet.caaRecords] The list of CAA records in the record
 * set.
 */
export interface RecordSetUpdateParameters {
  recordSet?: RecordSet;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Common properties of an Azure Resource Manager resource
 *
 * @member {string} [id] Resource ID.
 * @member {string} [name] Resource name.
 * @member {string} [type] Resource type.
 * @member {string} location Resource location.
 * @member {object} [tags] Resource tags.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Zone class.
 * @constructor
 * Describes a DNS zone.
 *
 * @member {string} [etag] The etag of the zone.
 * @member {number} [maxNumberOfRecordSets] The maximum number of record sets
 * that can be created in this DNS zone.  This is a read-only property and any
 * attempt to set this value will be ignored.
 * @member {number} [numberOfRecordSets] The current number of record sets in
 * this DNS zone.  This is a read-only property and any attempt to set this
 * value will be ignored.
 * @member {array} [nameServers] The name servers for this DNS zone. This is a
 * read-only property and any attempt to set this value will be ignored.
 * @member {string} [zoneType] The type of this DNS zone (Public or Private).
 * Possible values include: 'Public', 'Private'. Default value: 'Public' .
 * @member {array} [registrationVirtualNetworks] A list of references to
 * virtual networks that register hostnames in this DNS zone. This is a only
 * when ZoneType is Private.
 * @member {array} [resolutionVirtualNetworks] A list of references to virtual
 * networks that resolve records in this DNS zone. This is a only when ZoneType
 * is Private.
 */
export interface Zone extends Resource {
  etag?: string;
  readonly maxNumberOfRecordSets?: number;
  readonly numberOfRecordSets?: number;
  readonly nameServers?: string[];
  zoneType?: string;
  registrationVirtualNetworks?: SubResource[];
  resolutionVirtualNetworks?: SubResource[];
}

/**
 * @class
 * Initializes a new instance of the ZoneUpdate class.
 * @constructor
 * Describes a request to update a DNS zone.
 *
 * @member {object} [tags] Resource tags.
 */
export interface ZoneUpdate {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the DnsResourceReferenceRequest class.
 * @constructor
 * Represents the properties of the Dns Resource Reference Request.
 *
 * @member {array} [targetResources] A list of references to azure resources
 * for which referencing dns records need to be queried.
 */
export interface DnsResourceReferenceRequest {
  targetResources?: SubResource[];
}

/**
 * @class
 * Initializes a new instance of the DnsResourceReference class.
 * @constructor
 * Represents a single Azure resource and its referencing DNS records.
 *
 * @member {array} [dnsResources] A list of dns Records
 * @member {object} [targetResource] A reference to an azure resource from
 * where the dns resource value is taken.
 * @member {string} [targetResource.id] Resource Id.
 */
export interface DnsResourceReference {
  dnsResources?: SubResource[];
  targetResource?: SubResource;
}

/**
 * @class
 * Initializes a new instance of the DnsResourceReferenceResult class.
 * @constructor
 * Represents the properties of the Dns Resource Reference Result.
 *
 * @member {array} [dnsResourceReferences] The result of dns resource reference
 * request. A list of dns resource references for each of the azure resource in
 * the request
 */
export interface DnsResourceReferenceResult {
  dnsResourceReferences?: DnsResourceReference[];
}


/**
 * @class
 * Initializes a new instance of the RecordSetListResult class.
 * @constructor
 * The response to a record set List operation.
 *
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface RecordSetListResult extends Array<RecordSet> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ZoneListResult class.
 * @constructor
 * The response to a Zone List or ListAll operation.
 *
 * @member {string} [nextLink] The continuation token for the next page of
 * results.
 */
export interface ZoneListResult extends Array<Zone> {
  readonly nextLink?: string;
}
