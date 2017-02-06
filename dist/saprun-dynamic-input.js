"use strict";var saprunDynamicInput=angular.module("saprun-dynamic-input",[]);saprunDynamicInput.directive("saprunDynamicInput",function(){return{restrict:"E",transclude:!0,template:'\n                <div>\n                  <input ng-model="value" ng-change="changeHandler()">\n                  <div class="spacer" ng-bind="value"></div>\n                </div>\n                <span class="symbol" ng-bind="::unit"></span>',scope:{value:"=",change:"=",unit:"@",maxlength:"="},link:function(n){n.maxlength=parseInt(n.maxlength,10),console.log(n.maxlength),null==n.unit&&(n.unit=""),n.changeHandler=function(){!isNaN(n.maxlength)&&n.value.length>n.maxlength&&(n.value=n.value.substr(0,n.maxlength)),n.change()}}}}),function(){"function"==typeof define&&define.amd?define(function(){return saprunDynamicInput.name}):"undefined"!=typeof module&&module.exports&&(module.exports=saprunDynamicInput.name)}.call(void 0);