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
 * AlertSettings on the device which represents how alerts will be processed
 *
 * @extends models['BaseModel']
 */
class AlertSettings extends models['BaseModel'] {
  /**
   * Create a AlertSettings.
   * @member {string} emailNotification Value indicating whether user/admins
   * will receive emails when an alert condition occurs on the system. Possible
   * values include: 'Enabled', 'Disabled'
   * @member {string} notificationToServiceOwners Value indicating whether
   * service owners will receive emails when an alert condition occurs on the
   * system. Applicable only if emailNotification flag is Enabled. Possible
   * values include: 'Enabled', 'Disabled'
   * @member {string} alertNotificationCulture Culture setting to be used while
   * building alert emails. For eg: "en-US"
   * @member {array} [additionalRecipientEmailList] List of email addresses
   * (apart from admin/coadmin of subscription) to whom the alert emails need
   * to be sent
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AlertSettings
   *
   * @returns {object} metadata of AlertSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AlertSettings',
      type: {
        name: 'Composite',
        className: 'AlertSettings',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          emailNotification: {
            required: true,
            serializedName: 'properties.emailNotification',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          notificationToServiceOwners: {
            required: true,
            serializedName: 'properties.notificationToServiceOwners',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          alertNotificationCulture: {
            required: true,
            serializedName: 'properties.alertNotificationCulture',
            type: {
              name: 'String'
            }
          },
          additionalRecipientEmailList: {
            required: false,
            serializedName: 'properties.additionalRecipientEmailList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AlertSettings;
