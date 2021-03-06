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
 * Describes the properties of a TransformOutput, which are the rules to be
 * applied while generating the desired output.
 *
 */
class TransformOutput {
  /**
   * Create a TransformOutput.
   * @member {string} [onError] A Transform can define more than one outputs.
   * This property defines what the service should do when one output fails -
   * either continue to produce other outputs, or, stop the other outputs. The
   * overall Job state will not reflect failures of outputs that are specified
   * with 'ContinueJob'. The default is 'StopProcessingJob'. Possible values
   * include: 'StopProcessingJob', 'ContinueJob'
   * @member {string} [relativePriority] Sets the relative priority of the
   * TransformOutputs within a Transform. This sets the priority that the
   * service uses for processing TransformOutputs. The default priority is
   * Normal. Possible values include: 'Low', 'Normal', 'High'
   * @member {object} preset Preset that describes the operations that will be
   * used to modify, transcode, or extract insights from the source file to
   * generate the output.
   * @member {string} [preset.odatatype] Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of TransformOutput
   *
   * @returns {object} metadata of TransformOutput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TransformOutput',
      type: {
        name: 'Composite',
        className: 'TransformOutput',
        modelProperties: {
          onError: {
            required: false,
            serializedName: 'onError',
            type: {
              name: 'Enum',
              allowedValues: [ 'StopProcessingJob', 'ContinueJob' ]
            }
          },
          relativePriority: {
            required: false,
            serializedName: 'relativePriority',
            type: {
              name: 'Enum',
              allowedValues: [ 'Low', 'Normal', 'High' ]
            }
          },
          preset: {
            required: true,
            serializedName: 'preset',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '@odata.type',
                clientName: 'odatatype'
              },
              uberParent: 'Preset',
              className: 'Preset'
            }
          }
        }
      }
    };
  }
}

module.exports = TransformOutput;
