import '../ts3.1/jsdom-tests';
import jsdom = require('jsdom');

declare const domWindow: jsdom.DOMWindow;

domWindow.document.querySelector('slot'); // $ExpectType HTMLSlotElement | null
domWindow.AbstractRange.prototype; // $ExpectType AbstractRange
domWindow.StaticRange.prototype; // $ExpectType StaticRange
domWindow.ShadowRoot.prototype; // $ExpectType ShadowRoot
