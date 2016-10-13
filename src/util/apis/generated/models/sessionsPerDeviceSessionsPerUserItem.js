/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SessionsPerDeviceSessionsPerUserItem class.
 * @constructor
 * @member {string} [datetime] the ISO 8601 datetime
 * 
 * @member {number} [count] count
 * 
 */
function SessionsPerDeviceSessionsPerUserItem() {
}

/**
 * Defines the metadata of SessionsPerDeviceSessionsPerUserItem
 *
 * @returns {object} metadata of SessionsPerDeviceSessionsPerUserItem
 *
 */
SessionsPerDeviceSessionsPerUserItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SessionsPerDevice_sessionsPerUserItem',
    type: {
      name: 'Composite',
      className: 'SessionsPerDeviceSessionsPerUserItem',
      modelProperties: {
        datetime: {
          required: false,
          serializedName: 'datetime',
          type: {
            name: 'String'
          }
        },
        count: {
          required: false,
          serializedName: 'count',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = SessionsPerDeviceSessionsPerUserItem;