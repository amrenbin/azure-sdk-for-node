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

const models = require('./index');

/**
 * Azure Batch linked service.
 *
 * @extends models['LinkedService']
 */
class AzureBatchLinkedService extends models['LinkedService'] {
  /**
   * Create a AzureBatchLinkedService.
   * @member {object} accountName The Azure Batch account name. Type: string
   * (or Expression with resultType string).
   * @member {object} [accessKey] The Azure Batch account access key.
   * @member {string} [accessKey.type] Polymorphic Discriminator
   * @member {object} batchUri The Azure Batch URI. Type: string (or Expression
   * with resultType string).
   * @member {object} poolName The Azure Batch pool name. Type: string (or
   * Expression with resultType string).
   * @member {object} linkedServiceName The Azure Storage linked service
   * reference.
   * @member {string} [linkedServiceName.referenceName] Reference LinkedService
   * name.
   * @member {object} [linkedServiceName.parameters] Arguments for
   * LinkedService.
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AzureBatchLinkedService
   *
   * @returns {object} metadata of AzureBatchLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureBatch',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'LinkedService',
        className: 'AzureBatchLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ParameterSpecificationElementType',
                  type: {
                    name: 'Composite',
                    className: 'ParameterSpecification'
                  }
              }
            }
          },
          annotations: {
            required: false,
            serializedName: 'annotations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          accountName: {
            required: true,
            serializedName: 'typeProperties.accountName',
            type: {
              name: 'Object'
            }
          },
          accessKey: {
            required: false,
            serializedName: 'typeProperties.accessKey',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'type',
                clientName: 'type'
              },
              uberParent: 'SecretBase',
              className: 'SecretBase'
            }
          },
          batchUri: {
            required: true,
            serializedName: 'typeProperties.batchUri',
            type: {
              name: 'Object'
            }
          },
          poolName: {
            required: true,
            serializedName: 'typeProperties.poolName',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'typeProperties.linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureBatchLinkedService;
