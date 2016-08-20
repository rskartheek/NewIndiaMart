'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('newIndiaMartApp.util', [])
  .factory('Util', UtilService)
  .name;
