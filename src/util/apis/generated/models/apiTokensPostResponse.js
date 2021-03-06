/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the ApiTokensPostResponse class.
 * @constructor
 * @member {string} id The unique id (UUID) of the api token
 * 
 * @member {string} [apiToken] The api token generated will not be accessible
 * again(so please save in a safe location)
 * 
 * @member {string} [description] The description of the token
 * 
 * @member {string} createdAt The creation time
 * 
 */
function ApiTokensPostResponse() {
}

/**
 * Defines the metadata of ApiTokensPostResponse
 *
 * @returns {object} metadata of ApiTokensPostResponse
 *
 */
ApiTokensPostResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ApiTokensPostResponse',
    type: {
      name: 'Composite',
      className: 'ApiTokensPostResponse',
      modelProperties: {
        id: {
          required: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        apiToken: {
          required: false,
          serializedName: 'api_token',
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

module.exports = ApiTokensPostResponse;
