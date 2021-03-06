/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TestReportFeaturesItemTestsItem class.
 * @constructor
 * @member {string} [testName]
 * 
 * @member {array} [runs]
 * 
 */
function TestReportFeaturesItemTestsItem() {
}

/**
 * Defines the metadata of TestReportFeaturesItemTestsItem
 *
 * @returns {object} metadata of TestReportFeaturesItemTestsItem
 *
 */
TestReportFeaturesItemTestsItem.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TestReport_featuresItem_testsItem',
    type: {
      name: 'Composite',
      className: 'TestReportFeaturesItemTestsItem',
      modelProperties: {
        testName: {
          required: false,
          serializedName: 'testName',
          type: {
            name: 'String'
          }
        },
        runs: {
          required: false,
          serializedName: 'runs',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TestReportFeaturesItemTestsItemRunsItemElementType',
                type: {
                  name: 'Composite',
                  className: 'TestReportFeaturesItemTestsItemRunsItem'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = TestReportFeaturesItemTestsItem;
