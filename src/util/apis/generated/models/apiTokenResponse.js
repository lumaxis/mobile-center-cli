/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApiTokenResponse class.
 * @constructor
 * @member {string} id The unique id (UUID) of the api token
 * 
 * @member {string} [description] The description of the token
 * 
 * @member {string} createdAt The creation time
 * 
 */
function ApiTokenResponse() {
}

/**
 * Defines the metadata of ApiTokenResponse
 *
 * @returns {object} metadata of ApiTokenResponse
 *
 */
ApiTokenResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApiTokenResponse',
    type: {
      name: 'Composite',
      className: 'ApiTokenResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        description: {
          required: false,
          serializedName: 'description',
          type: {
            name: 'String'
          }
        },
        createdAt: {
          required: true,
          serializedName: 'created_at',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ApiTokenResponse;
