'use strict';
const path = require('path');

class AliasProvider {
  static getModules(){
    return {
      'login': path.resolve('src/modules/login/'),
      'dashboard': path.resolve('src/modules/dashboard/'),
    };
  }

  static getComponents() {
    return {

    };
  }

  static getServices() {
    return {
      lodashService: path.resolve('src/libs/lodash/'),
    };
  }
}

module.exports = AliasProvider;