/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The list of services in the cluster for an application. The list is paged
 * when all of the results cannot fit in a single message. The next set of
 * results can be obtained by executing the same query with the continuation
 * token provided in this list.
 *
 */
class PagedServiceInfoList {
  /**
   * Create a PagedServiceInfoList.
   * @property {string} [continuationToken] The continuation token parameter is
   * used to obtain next set of results. The continuation token is included in
   * the response of the API when the results from the system do not fit in a
   * single response. When this value is passed to the next API call, the API
   * returns next set of results. If there are no further results, then the
   * continuation token is not included in the response.
   * @property {array} [items] List of service information.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PagedServiceInfoList
   *
   * @returns {object} metadata of PagedServiceInfoList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PagedServiceInfoList',
      type: {
        name: 'Composite',
        className: 'PagedServiceInfoList',
        modelProperties: {
          continuationToken: {
            required: false,
            serializedName: 'ContinuationToken',
            type: {
              name: 'String'
            }
          },
          items: {
            required: false,
            serializedName: 'Items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceInfoElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: 'ServiceKind',
                      clientName: 'serviceKind'
                    },
                    uberParent: 'ServiceInfo',
                    className: 'ServiceInfo'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PagedServiceInfoList;
