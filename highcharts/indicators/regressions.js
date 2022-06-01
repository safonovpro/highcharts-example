/*
 Highstock JS v9.3.1 (2021-11-05)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Kamil Kulig

 License: www.highcharts.com/license
*/
'use strict';(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/indicators/regressions",["highcharts","highcharts/modules/stock"],function(h){d(h);d.Highcharts=h;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function h(d,c,g,f){d.hasOwnProperty(c)||(d[c]=f.apply(null,g))}d=d?d._modules:{};h(d,"Stock/Indicators/LinearRegression/LinearRegression.js",[d["Core/Series/SeriesRegistry.js"],
d["Core/Utilities.js"]],function(d,c){var g=this&&this.__extends||function(){var b=function(a,e){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b])};return b(a,e)};return function(a,e){function l(){this.constructor=a}b(a,e);a.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),f=d.seriesTypes.sma,h=c.isArray,k=c.extend,m=c.merge;c=function(b){function a(){var a=null!==b&&b.apply(this,
arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}g(a,b);a.prototype.getRegressionLineParameters=function(a,b){var e=this.options.params.index,l=function(a,e){return h(a)?a[e]:a},c=a.reduce(function(a,e){return e+a},0),d=b.reduce(function(a,b){return l(b,e)+a},0);c/=a.length;d/=b.length;var m=0,f=0,k;for(k=0;k<a.length;k++){var g=a[k]-c;var n=l(b[k],e)-d;m+=g*n;f+=Math.pow(g,2)}a=f?m/f:0;return{slope:a,intercept:d-a*c}};a.prototype.getEndPointY=function(a,b){return a.slope*
b+a.intercept};a.prototype.transformXData=function(a,b){var e=a[0];return a.map(function(a){return(a-e)/b})};a.prototype.findClosestDistance=function(a){var b,e;for(e=1;e<a.length-1;e++){var c=a[e]-a[e-1];0<c&&("undefined"===typeof b||c<b)&&(b=c)}return b};a.prototype.getValues=function(a,b){var e=a.xData;a=a.yData;b=b.period;var c,d={xData:[],yData:[],values:[]},m=this.options.params.xAxisUnit||this.findClosestDistance(e);for(c=b-1;c<=e.length-1;c++){var l=c-b+1;var f=c+1;var k=e[c];var g=e.slice(l,
f);l=a.slice(l,f);f=this.transformXData(g,m);g=this.getRegressionLineParameters(f,l);l=this.getEndPointY(g,f[f.length-1]);d.values.push({regressionLineParameters:g,x:k,y:l});d.xData.push(k);d.yData.push(l)}return d};a.defaultOptions=m(f.defaultOptions,{params:{xAxisUnit:null},tooltip:{valueDecimals:4}});return a}(f);k(c.prototype,{nameBase:"Linear Regression Indicator"});d.registerSeriesType("linearRegression",c);"";return c});h(d,"Stock/Indicators/LinearRegressionSlopes/LinearRegressionSlopes.js",
[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,c){var g=this&&this.__extends||function(){var c=function(b,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return c(b,a)};return function(b,a){function e(){this.constructor=b}c(b,a);b.prototype=null===a?Object.create(a):(e.prototype=a.prototype,new e)}}(),f=d.seriesTypes.linearRegression,k=c.extend,h=c.merge;c=function(c){function b(){var a=
null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}g(b,c);b.prototype.getEndPointY=function(a){return a.slope};b.defaultOptions=h(f.defaultOptions);return b}(f);k(c.prototype,{nameBase:"Linear Regression Slope Indicator"});d.registerSeriesType("linearRegressionSlope",c);"";return c});h(d,"Stock/Indicators/LinearRegressionIntercept/LinearRegressionIntercept.js",[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,c){var g=this&&this.__extends||
function(){var c=function(b,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return c(b,a)};return function(b,a){function d(){this.constructor=b}c(b,a);b.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),f=d.seriesTypes.linearRegression,k=c.extend,h=c.merge;c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;
return a}g(b,c);b.prototype.getEndPointY=function(a){return a.intercept};b.defaultOptions=h(f.defaultOptions);return b}(f);k(c.prototype,{nameBase:"Linear Regression Intercept Indicator"});d.registerSeriesType("linearRegressionIntercept",c);"";return c});h(d,"Stock/Indicators/LinearRegressionAngle/LinearRegressionAngle.js",[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(d,c){var g=this&&this.__extends||function(){var c=function(b,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return c(b,a)};return function(b,a){function d(){this.constructor=b}c(b,a);b.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),f=d.seriesTypes.linearRegression,h=c.extend,k=c.merge;c=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}g(b,c);b.prototype.slopeToAngle=function(a){return 180/Math.PI*Math.atan(a)};
b.prototype.getEndPointY=function(a){return this.slopeToAngle(a.slope)};b.defaultOptions=k(f.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span>{series.name}: <b>{point.y}\u00b0</b><br/>'}});return b}(f);h(c.prototype,{nameBase:"Linear Regression Angle Indicator"});d.registerSeriesType("linearRegressionAngle",c);"";return c});h(d,"masters/indicators/regressions.src.js",[],function(){})});
//# sourceMappingURL=regressions.js.map