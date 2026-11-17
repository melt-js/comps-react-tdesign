import { exposeLib } from 'hel-lib-proxy';

/*
|--------------------------------------------------------------------------
|
| 对应 package.json/appGroupName
|
|--------------------------------------------------------------------------
*/
var LIB_NAME = 'comps-react-tdesign';

var lib = exposeLib(LIB_NAME);
var comps = lib;
var MyComp = lib.MyComp;

export { MyComp, comps, lib as default, lib };
