(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
	typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["comps-react-tdesign"] = {}, global.helLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

	/*
	|--------------------------------------------------------------------------
	|
	| 对应 package.json/appGroupName
	|
	|--------------------------------------------------------------------------
	*/
	var LIB_NAME = 'comps-react-tdesign';

	var lib = helLibProxy.exposeLib(LIB_NAME);
	var comps = lib;
	var MyComp = lib.MyComp;

	exports.MyComp = MyComp;
	exports.comps = comps;
	exports["default"] = lib;
	exports.lib = lib;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
