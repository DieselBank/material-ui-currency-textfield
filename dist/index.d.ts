'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var core = require('@material-ui/core');

/**
 * Enumerations for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2016 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Object that store the helper enumerations
 * @type {{ allowedTagList: [string], keyCode: {}, fromCharCodeKeyCode: [string], keyName: {} }}
 */
const AutoNumericEnum = {};

/**
 * List of allowed tag on which autoNumeric can be used.
 */
AutoNumericEnum.allowedTagList = [
    'b',
    'caption',
    'cite',
    'code',
    'const',
    'dd',
    'del',
    'div',
    'dfn',
    'dt',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'input',
    'ins',
    'kdb',
    'label',
    'li',
    'option',
    'output',
    'p',
    'q',
    's',
    'sample',
    'span',
    'strong',
    'td',
    'th',
    'u',
];
Object.freeze(AutoNumericEnum.allowedTagList);
Object.defineProperty(AutoNumericEnum, 'allowedTagList', { configurable: false, writable: false });

/**
 * Wrapper variable that hold named keyboard keys with their respective keyCode as seen in DOM events.
 * cf. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 *
 * This deprecated information is used for obsolete browsers.
 * @deprecated
 */
AutoNumericEnum.keyCode = {
    Backspace     : 8,
    Tab           : 9,
    // No 10, 11
    // 12 === NumpadEqual on Windows
    // 12 === NumLock on Mac
    Enter         : 13,
    // 14 reserved, but not used
    // 15 does not exists
    Shift         : 16,
    Ctrl          : 17,
    Alt           : 18,
    Pause         : 19,
    CapsLock      : 20,
    // 21, 22, 23, 24, 25 : Asiatic key codes
    // 26 does not exists
    Esc           : 27,
    // 28, 29, 30, 31 : Convert, NonConvert, Accept and ModeChange keys
    Space         : 32,
    PageUp        : 33,
    PageDown      : 34,
    End           : 35,
    Home          : 36,
    LeftArrow     : 37,
    UpArrow       : 38,
    RightArrow    : 39,
    DownArrow     : 40,
    Insert        : 45,
    Delete        : 46,
    num0          : 48,
    num1          : 49,
    num2          : 50,
    num3          : 51,
    num4          : 52,
    num5          : 53,
    num6          : 54,
    num7          : 55,
    num8          : 56,
    num9          : 57,
    a             : 65,
    b             : 66,
    c             : 67,
    d             : 68,
    e             : 69,
    f             : 70,
    g             : 71,
    h             : 72,
    i             : 73,
    j             : 74,
    k             : 75,
    l             : 76,
    m             : 77,
    n             : 78,
    o             : 79,
    p             : 80,
    q             : 81,
    r             : 82,
    s             : 83,
    t             : 84,
    u             : 85,
    v             : 86,
    w             : 87,
    x             : 88,
    y             : 89,
    z             : 90,
    OSLeft        : 91,
    OSRight       : 92,
    ContextMenu   : 93,
    numpad0       : 96,
    numpad1       : 97,
    numpad2       : 98,
    numpad3       : 99,
    numpad4       : 100,
    numpad5       : 101,
    numpad6       : 102,
    numpad7       : 103,
    numpad8       : 104,
    numpad9       : 105,
    MultiplyNumpad: 106,
    PlusNumpad    : 107,
    MinusNumpad   : 109,
    DotNumpad     : 110,
    SlashNumpad   : 111,
    F1            : 112,
    F2            : 113,
    F3            : 114,
    F4            : 115,
    F5            : 116,
    F6            : 117,
    F7            : 118,
    F8            : 119,
    F9            : 120,
    F10           : 121,
    F11           : 122,
    F12           : 123,
    NumLock       : 144,
    ScrollLock    : 145,
    HyphenFirefox : 173, // On the latest Linux and Windows OS, cf. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode and https://bugzilla.mozilla.org/show_bug.cgi?id=787504 and https://stackoverflow.com/a/35473259/2834898
    MyComputer    : 182,
    MyCalculator  : 183,
    Semicolon     : 186,
    Equal         : 187,
    Comma         : 188,
    Hyphen        : 189,
    Dot           : 190,
    Slash         : 191,
    Backquote     : 192,
    LeftBracket   : 219,
    Backslash     : 220,
    RightBracket  : 221,
    Quote         : 222,
    Command       : 224,
    AltGraph      : 225,
    AndroidDefault: 229, // Android Chrome returns the same keycode number 229 for all keys pressed
};
Object.freeze(AutoNumericEnum.keyCode);
Object.defineProperty(AutoNumericEnum, 'keyCode', { configurable: false, writable: false });

/**
 * This object is the reverse of `keyCode`, and is used to translate the key code to named keys when no valid characters can be obtained by `String.fromCharCode`.
 * This object keys correspond to the `event.keyCode` number, and returns the corresponding key name (à la event.key)
 */
AutoNumericEnum.fromCharCodeKeyCode = {
    0  : 'LaunchCalculator',
    8  : 'Backspace',
    9  : 'Tab',
    13 : 'Enter',
    16 : 'Shift',
    17 : 'Ctrl',
    18 : 'Alt',
    19 : 'Pause',
    20 : 'CapsLock',
    27 : 'Escape',
    32 : ' ',
    33 : 'PageUp',
    34 : 'PageDown',
    35 : 'End',
    36 : 'Home',
    37 : 'ArrowLeft',
    38 : 'ArrowUp',
    39 : 'ArrowRight',
    40 : 'ArrowDown',
    45 : 'Insert',
    46 : 'Delete',
    48 : '0',
    49 : '1',
    50 : '2',
    51 : '3',
    52 : '4',
    53 : '5',
    54 : '6',
    55 : '7',
    56 : '8',
    57 : '9',
    // 65: 'a',
    // 66: 'b',
    // 67: 'c',
    // 68: 'd',
    // 69: 'e',
    // 70: 'f',
    // 71: 'g',
    // 72: 'h',
    // 73: 'i',
    // 74: 'j',
    // 75: 'k',
    // 76: 'l',
    // 77: 'm',
    // 78: 'n',
    // 79: 'o',
    // 80: 'p',
    // 81: 'q',
    // 82: 'r',
    // 83: 's',
    // 84: 't',
    // 85: 'u',
    // 86: 'v',
    // 87: 'w',
    // 88: 'x',
    // 89: 'y',
    // 90: 'z',
    91 : 'OS', // Note: Firefox and Chrome reports 'OS' instead of 'OSLeft'
    92 : 'OSRight',
    93 : 'ContextMenu',
    96 : '0',
    97 : '1',
    98 : '2',
    99 : '3',
    100: '4',
    101: '5',
    102: '6',
    103: '7',
    104: '8',
    105: '9',
    106: '*',
    107: '+',
    109: '-', // The 'NumpadSubtract' code
    110: '.',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    173: '-', // The 'Minus' sign on Firefox. This is only needed when using the Selenium bot though.
    182: 'MyComputer',
    183: 'MyCalculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-', // The 'Minus' sign on all other browsers
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\'',
    224: 'Meta',
    225: 'AltGraph',
};
Object.freeze(AutoNumericEnum.fromCharCodeKeyCode);
Object.defineProperty(AutoNumericEnum, 'fromCharCodeKeyCode', { configurable: false, writable: false });

/**
 * Wrapper variable that hold named keyboard keys with their respective key name (as set in KeyboardEvent.key).
 * Those names are listed here :
 * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */
AutoNumericEnum.keyName = {
    // Special values
    Unidentified  : 'Unidentified',
    AndroidDefault: 'AndroidDefault',

    // Modifier keys
    Alt       : 'Alt',
    AltGr     : 'AltGraph',
    CapsLock  : 'CapsLock', // Under Chrome, e.key is empty for CapsLock
    Ctrl      : 'Control',
    Fn        : 'Fn',
    FnLock    : 'FnLock',
    Hyper     : 'Hyper', // 'OS' under Firefox
    Meta      : 'Meta',
    OSLeft    : 'OS',
    OSRight   : 'OS',
    Command   : 'OS',
    NumLock   : 'NumLock',
    ScrollLock: 'ScrollLock',
    Shift     : 'Shift',
    Super     : 'Super', // 'OS' under Firefox
    Symbol    : 'Symbol',
    SymbolLock: 'SymbolLock',

    // Whitespace keys
    Enter: 'Enter',
    Tab  : 'Tab',
    Space: ' ', // 'Spacebar' for Firefox <37, and IE9

    // Navigation keys
    LeftArrow : 'ArrowLeft', // 'Left' for Firefox <=36, and IE9
    UpArrow   : 'ArrowUp', // 'Up' for Firefox <=36, and IE9
    RightArrow: 'ArrowRight', // 'Right' for Firefox <=36, and IE9
    DownArrow : 'ArrowDown', // 'Down' for Firefox <=36, and IE9
    End       : 'End',
    Home      : 'Home',
    PageUp    : 'PageUp',
    PageDown  : 'PageDown',

    // Editing keys
    Backspace: 'Backspace',
    Clear    : 'Clear',
    Copy     : 'Copy',
    CrSel    : 'CrSel', // 'Crsel' for Firefox <=36, and IE9
    Cut      : 'Cut',
    Delete   : 'Delete', // 'Del' for Firefox <=36, and IE9
    EraseEof : 'EraseEof',
    ExSel    : 'ExSel', // 'Exsel' for Firefox <=36, and IE9
    Insert   : 'Insert',
    Paste    : 'Paste',
    Redo     : 'Redo',
    Undo     : 'Undo',

    // UI keys
    Accept     : 'Accept',
    Again      : 'Again',
    Attn       : 'Attn', // 'Unidentified' for Firefox, Chrome, and IE9 ('KanaMode' when using the Japanese keyboard layout)
    Cancel     : 'Cancel',
    ContextMenu: 'ContextMenu', // 'Apps' for Firefox <=36, and IE9
    Esc        : 'Escape', // 'Esc' for Firefox <=36, and IE9
    Execute    : 'Execute',
    Find       : 'Find',
    Finish     : 'Finish', // 'Unidentified' for Firefox, Chrome, and IE9 ('Katakana' when using the Japanese keyboard layout)
    Help       : 'Help',
    Pause      : 'Pause',
    Play       : 'Play',
    Props      : 'Props',
    Select     : 'Select',
    ZoomIn     : 'ZoomIn',
    ZoomOut    : 'ZoomOut',

    // Device keys
    BrightnessDown: 'BrightnessDown',
    BrightnessUp  : 'BrightnessUp',
    Eject         : 'Eject',
    LogOff        : 'LogOff',
    Power         : 'Power',
    PowerOff      : 'PowerOff',
    PrintScreen   : 'PrintScreen',
    Hibernate     : 'Hibernate', // 'Unidentified' for Firefox <=37
    Standby       : 'Standby', // 'Unidentified' for Firefox <=36, and IE9
    WakeUp        : 'WakeUp',

    // IME and composition keys
    Compose: 'Compose',
    Dead   : 'Dead',

    // Function keys
    F1 : 'F1',
    F2 : 'F2',
    F3 : 'F3',
    F4 : 'F4',
    F5 : 'F5',
    F6 : 'F6',
    F7 : 'F7',
    F8 : 'F8',
    F9 : 'F9',
    F10: 'F10',
    F11: 'F11',
    F12: 'F12',

    // Document keys
    Print: 'Print',

    // 'Normal' keys
    num0            : '0',
    num1            : '1',
    num2            : '2',
    num3            : '3',
    num4            : '4',
    num5            : '5',
    num6            : '6',
    num7            : '7',
    num8            : '8',
    num9            : '9',
    a               : 'a',
    b               : 'b',
    c               : 'c',
    d               : 'd',
    e               : 'e',
    f               : 'f',
    g               : 'g',
    h               : 'h',
    i               : 'i',
    j               : 'j',
    k               : 'k',
    l               : 'l',
    m               : 'm',
    n               : 'n',
    o               : 'o',
    p               : 'p',
    q               : 'q',
    r               : 'r',
    s               : 's',
    t               : 't',
    u               : 'u',
    v               : 'v',
    w               : 'w',
    x               : 'x',
    y               : 'y',
    z               : 'z',
    A               : 'A',
    B               : 'B',
    C               : 'C',
    D               : 'D',
    E               : 'E',
    F               : 'F',
    G               : 'G',
    H               : 'H',
    I               : 'I',
    J               : 'J',
    K               : 'K',
    L               : 'L',
    M               : 'M',
    N               : 'N',
    O               : 'O',
    P               : 'P',
    Q               : 'Q',
    R               : 'R',
    S               : 'S',
    T               : 'T',
    U               : 'U',
    V               : 'V',
    W               : 'W',
    X               : 'X',
    Y               : 'Y',
    Z               : 'Z',
    Semicolon       : ';',
    Equal           : '=',
    Comma           : ',',
    Hyphen          : '-',
    Minus           : '-',
    Plus            : '+',
    Dot             : '.',
    Slash           : '/',
    Backquote       : '`',
    LeftParenthesis : '(',
    RightParenthesis: ')',
    LeftBracket     : '[',
    RightBracket    : ']',
    Backslash       : '\\',
    Quote           : '\'',

    // Numeric keypad keys
    numpad0                       : '0',
    numpad1                       : '1',
    numpad2                       : '2',
    numpad3                       : '3',
    numpad4                       : '4',
    numpad5                       : '5',
    numpad6                       : '6',
    numpad7                       : '7',
    numpad8                       : '8',
    numpad9                       : '9',
    NumpadDot                     : '.',
    NumpadDotAlt                  : ',', // Modern browsers automatically adapt the character sent by this key to the decimal character of the current language
    NumpadMultiply                : '*',
    NumpadPlus                    : '+',
    NumpadMinus                   : '-',
    NumpadSubtract                : '-',
    NumpadSlash                   : '/',
    NumpadDotObsoleteBrowsers     : 'Decimal',
    NumpadMultiplyObsoleteBrowsers: 'Multiply',
    NumpadPlusObsoleteBrowsers    : 'Add',
    NumpadMinusObsoleteBrowsers   : 'Subtract',
    NumpadSlashObsoleteBrowsers   : 'Divide',

    // Special arrays for quicker tests
    _allFnKeys           : ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'],
    _someNonPrintableKeys: ['Tab', 'Enter', 'Shift', 'ShiftLeft', 'ShiftRight', 'Control', 'ControlLeft', 'ControlRight', 'Alt', 'AltLeft', 'AltRight', 'Pause', 'CapsLock', 'Escape'],
    _directionKeys       : ['PageUp', 'PageDown', 'End', 'Home', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'],
};
Object.freeze(AutoNumericEnum.keyName._allFnKeys);
Object.freeze(AutoNumericEnum.keyName._someNonPrintableKeys);
Object.freeze(AutoNumericEnum.keyName._directionKeys);
Object.freeze(AutoNumericEnum.keyName);
Object.defineProperty(AutoNumericEnum, 'keyName', { configurable: false, writable: false });

Object.freeze(AutoNumericEnum);

/**
 * Helper functions for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2016 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Static class that holds all the helper functions autoNumeric uses.
 * Note : none of the functions in there are aware of any autoNumeric internals (which means there are no references to autoNumeric-specific info like options names or data structures).
 */
class AutoNumericHelper {
    /**
     * Return `true` if the `value` is null
     *
     * @static
     * @param {*} value The value to test
     * @returns {boolean} Return `true` if the `value` is null, FALSE otherwise
     */
    static isNull(value) {
        return value === null;
    }

    /**
     * Return `true` if the `value` is undefined
     *
     * @static
     * @param {*} value The value to test
     * @returns {boolean} Return `true` if the `value` is undefined, FALSE otherwise
     */
    static isUndefined(value) {
        return value === void(0);
    }

    /**
     * Return `true` if the `value` is undefined, null or empty
     *
     * @param {*} value
     * @returns {boolean}
     */
    static isUndefinedOrNullOrEmpty(value) {
        return value === null || value === void(0) || '' === value;
    }

    /**
     * Return `true` if the given parameter is a String
     *
     * @param {*} str
     * @returns {boolean}
     */
    static isString(str) {
        return (typeof str === 'string' || str instanceof String);
    }
    /**
     * Return `true` if the `value` is an empty string ''
     *
     * @static
     * @param {*} value The value to test
     * @returns {boolean} Return `true` if the `value` is an empty string '', FALSE otherwise
     */
    static isEmptyString(value) {
        return value === '';
    }

    /**
     * Return `true` if the parameter is a boolean
     *
     * @static
     * @param {*} value
     * @returns {boolean}
     */
    static isBoolean(value) {
        return typeof(value) === 'boolean';
    }

    /**
     * Return `true` if the parameter is a string 'true' or 'false'
     *
     * This function accepts any cases for those strings.
     * @param {string} value
     * @returns {boolean}
     */
    static isTrueOrFalseString(value) {
        const lowercaseValue = String(value).toLowerCase();
        return lowercaseValue === 'true' || lowercaseValue === 'false';
    }

    /**
     * Return `true` if the parameter is an object
     *
     * @param {*} reference
     * @returns {boolean}
     */
    static isObject(reference) {
        return typeof reference === 'object' && reference !== null && !Array.isArray(reference);
    }

    /**
     * Return `true` if the given object is empty
     * cf. http://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object and http://jsperf.com/empty-object-test
     *
     * @param {object} obj
     * @returns {boolean}
     */
    static isEmptyObj(obj) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                return false;
            }
        }
        return true;
    }

    /**
     * Return `true` if the parameter is a real number (and not a numeric string).
     *
     * @param {*} n
     * @returns {boolean}
     */
    static isNumberStrict(n) {
        return typeof n === 'number';
    }

    /**
     * Return `true` if the parameter is a number (or a number written as a string).
     *
     * @param {*} n
     * @returns {boolean}
     */
    static isNumber(n) {
        return !this.isArray(n) && !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * Return `true` if the given character is a number (0 to 9)
     *
     * @param {char} char
     * @returns {boolean}
     */
    static isDigit(char) {
        return /\d/.test(char);
    }

    /**
     * Return `true` if the parameter is a number (or a number written as a string).
     * This version also accepts Arabic and Persian numbers.
     *
     * @param {*} n
     * @returns {boolean}
     */
    static isNumberOrArabic(n) {
        const latinConvertedNumber = this.arabicToLatinNumbers(n, false, true, true);
        return this.isNumber(latinConvertedNumber);
    }

    /**
     * Return `true` if the parameter is an integer (and not a float).
     *
     * @param {*} n
     * @returns {boolean}
     */
    static isInt(n) {
        return typeof n === 'number' && parseFloat(n) === parseInt(n, 10) && !isNaN(n);
    }

    /**
     * Return `true` if the parameter is a function.
     *
     * @param {function} func
     * @returns {boolean}
     */
    static isFunction(func) {
        return typeof func === 'function';
    }

    /**
     * Return `true` if the current browser is the obsolete Internet Explorer 11 (IE11) one
     * cf. https://stackoverflow.com/a/21825207/2834898
     *
     * @returns {boolean}
     */
    static isIE11() {
        // noinspection JSUnresolvedVariable
        return !!window.MSInputMethodContext && !!document.documentMode;
    }

    /**
     * Return `true` is the string `str` contains the string `needle`
     * Note: this function does not coerce the parameters types
     *
     * @param {string} str
     * @param {string} needle
     * @returns {boolean}
     */
    static contains(str, needle) {
        //TODO Use `Array.prototype.includes()` when available (cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
        if (!this.isString(str) || !this.isString(needle) || str === '' || needle === '') {
            return false;
        }

        return str.indexOf(needle) !== -1;
    }

    /**
     * Return `true` if the `needle` is in the array
     *
     * @param {*} needle
     * @param {Array} array
     * @returns {boolean}
     */
    static isInArray(needle, array) {
        if (!this.isArray(array) || array === [] || this.isUndefined(needle)) {
            return false;
        }

        return array.indexOf(needle) !== -1;
    }

    /**
     * Return `true` if the parameter is an Array
     * //TODO Replace this by the default `Array.isArray()` function?
     *
     * @param {*} arr
     * @throws Error
     * @returns {*|boolean}
     */
    static isArray(arr) {
        if (Object.prototype.toString.call([]) === '[object Array]') { // Make sure an array has a class attribute of [object Array]
            // Test passed, now check if is an Array
            return Array.isArray(arr) || (typeof arr === 'object' && Object.prototype.toString.call(arr) === '[object Array]');
        }
        else {
            throw new Error('toString message changed for Object Array'); // Verify that the string returned by `toString` does not change in the future (cf. http://stackoverflow.com/a/8365215)
        }
    }

    /**
     * Return `true` if the parameter is a DOM element
     * cf. http://stackoverflow.com/a/4754104/2834898
     *
     * @param {*} obj
     * @returns {boolean}
     */
    static isElement(obj) {
        // return !!(obj && obj.nodeName);
        // return obj && 'nodeType' in obj;
        // return obj instanceof Element || obj instanceof HTMLInputElement || obj instanceof HTMLElement;
        if (typeof Element === 'undefined') {
            // This test is needed in environnements where the Element object does not exist (ie. in web workers)
            return false;
        }

        return obj instanceof Element;
    }

    /**
     * Return `true` in the given DOM element is an <input>.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @returns {boolean}
     * @private
     */
    static isInputElement(domElement) {
        return this.isElement(domElement) && domElement.tagName.toLowerCase() === 'input';
    }

    /**
     * Return `true` if the parameter is a string that represents a float number, and that number has a decimal part
     *
     * @param {string} str
     * @returns {boolean}
     */
    // static hasDecimals(str) {
    //     const [, decimalPart] = str.split('.');
    //     return !isUndefined(decimalPart);
    // }

    /**
     * Return the number of decimal places if the parameter is a string that represents a float number, and that number has a decimal part.
     *
     * @param {string} str
     * @returns {int}
     */
    static decimalPlaces(str) {
        const [, decimalPart] = str.split('.');
        if (!this.isUndefined(decimalPart)) {
            return decimalPart.length;
        }

        return 0;
    }

    /**
     * Return the index of the first non-zero decimal place in the given value.
     * The index starts after the decimal point, if any, and begins at '1'.
     * If no decimal places are found in the value, this function returns `0`.
     *
     * @example
     * indexFirstNonZeroDecimalPlace('0.00') -> 0
     * indexFirstNonZeroDecimalPlace('1.00') -> 0
     * indexFirstNonZeroDecimalPlace('0.12') -> 1
     * indexFirstNonZeroDecimalPlace('0.1234') -> 1
     * indexFirstNonZeroDecimalPlace('0.01234') -> 2
     * indexFirstNonZeroDecimalPlace('0.001234') -> 3
     * indexFirstNonZeroDecimalPlace('0.0001234') -> 4
     *
     * @param {number} value
     * @returns {Number|number}
     */
    static indexFirstNonZeroDecimalPlace(value) {
        const [, decimalPart] = String(Math.abs(value)).split('.');

        if (this.isUndefined(decimalPart)) {
            return 0;
        }

        let result = decimalPart.lastIndexOf('0');
        if (result === -1) {
            result = 0;
        } else {
            result += 2;
        }

        return result;
    }

    /**
     * Return the code for the key used to generate the given event.
     *
     * @param {Event} event
     * @returns {string|Number}
     */
    static keyCodeNumber(event) {
        // `event.keyCode` and `event.which` are deprecated, `KeyboardEvent.key` (https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) must be used now
        // Also, do note that Firefox generate a 'keypress' event (e.keyCode === 0) for the keys that do not print a character (ie. 'Insert', 'Delete', 'Fn' keys, 'PageUp', 'PageDown' etc.). 'Shift' on the other hand does not generate a keypress event.
        return (typeof event.which === 'undefined')?event.keyCode:event.which;
    }

    /**
     * Return the character from the event key code.
     * If the KeyboardEvent does not represent a printable character, then the key name is used (ie. 'Meta', 'Shift', 'F1', etc.)
     * @example character(50) => '2'
     *
     * @param {KeyboardEvent} event
     * @returns {string}
     */
    static character(event) {
        let result;
        if (event.key === 'Unidentified' || event.key === void(0) || this.isSeleniumBot()) {
            //XXX The selenium geckodriver do not understand `event.key`, hence when using it, we need to rely on the old deprecated `keyCode` attribute, cf. upstream issue https://github.com/mozilla/geckodriver/issues/440
            // Use the old deprecated keyCode property, if the new `key` one is not supported
            const keyCode = this.keyCodeNumber(event);
            if (keyCode === AutoNumericEnum.keyCode.AndroidDefault) {
                return AutoNumericEnum.keyName.AndroidDefault;
            }

            const potentialResult = AutoNumericEnum.fromCharCodeKeyCode[keyCode];
            if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(potentialResult)) {
                // Since `String.fromCharCode` do not return named keys for some keys ('Escape' and 'Enter' for instance), we convert the characters to the key names
                result = potentialResult;
            } else {
                result = String.fromCharCode(keyCode);
            }
        } else {
            let browser;
            switch (event.key) {
                // Manages all the special cases for obsolete browsers that return the non-standard names
                case 'Add':
                    result = AutoNumericEnum.keyName.NumpadPlus;
                    break;
                case 'Apps':
                    result = AutoNumericEnum.keyName.ContextMenu;
                    break;
                case 'Crsel':
                    result = AutoNumericEnum.keyName.CrSel;
                    break;
                case 'Decimal':
                    result = AutoNumericEnum.keyName.NumpadDot;
                    break;
                case 'Del':
                    browser = this.browser();
                    if ((browser.name === 'firefox' && browser.version <= 36) ||
                        (browser.name === 'ie' && browser.version <= 9)) {
                        // Special workaround for the obsolete browser IE11 which output a 'Delete' key when using the numpad 'dot' one! This fixes issue #401
                        // This workaround break the usage of the 'Delete' key for Firefox <=36, and IE9, since those browser send 'Del' instead of 'Delete', therefore we only use it for those obsolete browsers
                        result = AutoNumericEnum.keyName.Dot;
                    } else {
                        result = AutoNumericEnum.keyName.Delete;
                    }
                    break;
                case 'Divide':
                    result = AutoNumericEnum.keyName.NumpadSlash;
                    break;
                case 'Down':
                    result = AutoNumericEnum.keyName.DownArrow;
                    break;
                case 'Esc':
                    result = AutoNumericEnum.keyName.Esc;
                    break;
                case 'Exsel':
                    result = AutoNumericEnum.keyName.ExSel;
                    break;
                case 'Left':
                    result = AutoNumericEnum.keyName.LeftArrow;
                    break;
                case 'Meta':
                case 'Super':
                    result = AutoNumericEnum.keyName.OSLeft;
                    break;
                case 'Multiply':
                    result = AutoNumericEnum.keyName.NumpadMultiply;
                    break;
                case 'Right':
                    result = AutoNumericEnum.keyName.RightArrow;
                    break;
                case 'Spacebar':
                    result = AutoNumericEnum.keyName.Space;
                    break;
                case 'Subtract':
                    result = AutoNumericEnum.keyName.NumpadMinus;
                    break;
                case 'Up':
                    result = AutoNumericEnum.keyName.UpArrow;
                    break;
                default:
                    // The normal case
                    result = event.key;
            }
        }

        return result;
    }

    /**
     * Return an object containing the name and version of the current browser.
     * @example `browserVersion()` => { name: 'Firefox', version: '42' }
     * Based on http://stackoverflow.com/a/38080051/2834898
     *
     * @returns {{ name: string, version: string }}
     */
    static browser() {
        const ua = navigator.userAgent;
        let tem;
        let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'ie', version: (tem[1] || '') };
        }

        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem !== null) {
                return { name: tem[1].replace('OPR', 'opera'), version: tem[2] };
            }
        }

        M = M[2]?[M[1], M[2]]:[navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
            M.splice(1, 1, tem[1]);
        }

        return { name: M[0].toLowerCase(), version: M[1] };
    }

    /**
     * Check if the browser is controlled by Selenium.
     * Note: This only works within the geckodriver.
     * cf. http://stackoverflow.com/questions/33225947/can-a-website-detect-when-you-are-using-selenium-with-chromedriver
     *
     * @returns {boolean}
     */
    static isSeleniumBot() {
        // noinspection JSUnresolvedVariable
        return window.navigator.webdriver === true;
    }

    /**
     * Return `true` if the given number is negative, or if the given string contains a negative sign :
     * - everywhere in the string (by default), or
     * - on the first character only if the `checkEverywhere` parameter is set to `false`.
     *
     * Note: `-0` is not a negative number since it's equal to `0`.
     *
     * @param {number|string} numberOrNumericString A Number, or a number represented by a string
     * @param {string} negativeSignCharacter The single character that represent the negative sign
     * @param {boolean} checkEverywhere If TRUE, then the negative sign is search everywhere in the numeric string (this is needed for instance if the string is '1234.56-')
     * @returns {boolean}
     */
    static isNegative(numberOrNumericString, negativeSignCharacter = '-', checkEverywhere = true) {
        if (numberOrNumericString === negativeSignCharacter) {
            return true;
        }

        if (numberOrNumericString === '') {
            return false;
        }

        if (AutoNumericHelper.isNumber(numberOrNumericString)) {
            return numberOrNumericString < 0;
        }

        if (checkEverywhere) {
            return this.contains(numberOrNumericString, negativeSignCharacter);
        }

        return this.isNegativeStrict(numberOrNumericString, negativeSignCharacter);
    }

    /**
     * Return `true` if the given string contains a negative sign on the first character (on the far left).
     *
     * @example isNegativeStrict('1234.56')     => false
     * @example isNegativeStrict('1234.56-')    => false
     * @example isNegativeStrict('-1234.56')    => true
     * @example isNegativeStrict('-1,234.56 €') => true
     *
     * @param {string} numericString
     * @param {string} negativeSignCharacter The single character that represent the negative sign
     * @returns {boolean}
     */
    static isNegativeStrict(numericString, negativeSignCharacter = '-') {
        return numericString.charAt(0) === negativeSignCharacter;
    }

    /**
     * Return `true` if the very first character is the opening bracket, and if the rest of the `valueString` also has the closing bracket.
     *
     * @param {string} valueString
     * @param {string} leftBracket
     * @param {string} rightBracket
     * @returns {boolean}
     */
    static isNegativeWithBrackets(valueString, leftBracket, rightBracket) {
        return valueString.charAt(0) === leftBracket && this.contains(valueString, rightBracket);
    }

    /**
     * Return `true` if the formatted or unformatted numeric string represent the value 0 (ie. '0,00 €'), or is empty (' €').
     * This works since we test if there are any numbers from 1 to 9 in the string. If there is none, then the number is zero (or the string is empty).
     *
     * @param {string} numericString
     * @returns {boolean}
     */
    static isZeroOrHasNoValue(numericString) {
        return !(/[1-9]/g).test(numericString);
    }

    /**
     * Return the negative version of the value (represented as a string) given as a parameter.
     * The numeric string is a valid Javascript number when typecast to a `Number`.
     *
     * @param {string} value
     * @returns {*}
     */
    static setRawNegativeSign(value) {
        if (!this.isNegativeStrict(value, '-')) {
            return `-${value}`;
        }

        return value;
    }

    /**
     * Replace the character at the position `index` in the string `string` by the character(s) `newCharacter`.
     *
     * @param {string} string
     * @param {int} index
     * @param {string} newCharacter
     * @returns {string}
     */
    static replaceCharAt(string, index, newCharacter) {
        return `${string.substr(0, index)}${newCharacter}${string.substr(index + newCharacter.length)}`;
    }

    /**
     * Return the value clamped to the nearest minimum/maximum value, as defined in the settings.
     *
     * @param {string|number} value
     * @param {object} settings
     * @returns {number}
     */
    static clampToRangeLimits(value, settings) {
        //XXX This function always assume `settings.minimumValue` is lower than `settings.maximumValue`
        return Math.max(settings.minimumValue, Math.min(settings.maximumValue, value));
    }

    /**
     * Return the number of number or dot characters on the left side of the caret, in a formatted number.
     *
     * @param {string} formattedNumberString
     * @param {int} caretPosition This must be a positive integer
     * @param {string} decimalCharacter
     * @returns {number}
     */
    static countNumberCharactersOnTheCaretLeftSide(formattedNumberString, caretPosition, decimalCharacter) {
        // Here we count the dot and report it as a number character too, since it will 'stay' in the Javascript number when unformatted
        const numberDotOrNegativeSign = new RegExp(`[0-9${decimalCharacter}-]`); // No need to escape the decimal character here, since it's in `[]`

        let numberDotAndNegativeSignCount = 0;
        for (let i = 0; i < caretPosition; i++) {
            // Test if the character is a number, a dot or an hyphen. If it is, count it, otherwise ignore it
            if (numberDotOrNegativeSign.test(formattedNumberString[i])) {
                numberDotAndNegativeSignCount++;
            }
        }

        return numberDotAndNegativeSignCount;
    }

    /**
     * Walk the `formattedNumberString` from left to right, one char by one, counting the `formattedNumberStringIndex`.
     * If the char is in the `rawNumberString` (starting at index 0), then `rawNumberStringIndex++`, and continue until
     * there is no more characters in `rawNumberString`) or that `rawNumberStringIndex === caretPositionInRawValue`.
     * When you stop, the `formattedNumberStringIndex` is the position where the caret should be set.
     *
     * @example
     * 1234567|89.01   : position 7 (rawNumberString)
     * 123.456.7|89,01 : position 9 (formattedNumberString)
     *
     * @param {string} rawNumberString
     * @param {int} caretPositionInRawValue
     * @param {string} formattedNumberString
     * @param {string} decimalCharacter
     * @returns {*}
     */
    static findCaretPositionInFormattedNumber(rawNumberString, caretPositionInRawValue, formattedNumberString, decimalCharacter) {
        const formattedNumberStringSize = formattedNumberString.length;
        const rawNumberStringSize = rawNumberString.length;

        let formattedNumberStringIndex;
        let rawNumberStringIndex = 0;
        for (formattedNumberStringIndex = 0;
            formattedNumberStringIndex < formattedNumberStringSize &&
            rawNumberStringIndex < rawNumberStringSize &&
            rawNumberStringIndex < caretPositionInRawValue;
            formattedNumberStringIndex++) {
            if (rawNumberString[rawNumberStringIndex] === formattedNumberString[formattedNumberStringIndex] ||
                (rawNumberString[rawNumberStringIndex] === '.' && formattedNumberString[formattedNumberStringIndex] === decimalCharacter)) {
                rawNumberStringIndex++;
            }
        }

        return formattedNumberStringIndex;
    }

    /**
     * Count the number of occurrence of the given character, in the given text.
     *
     * @param {string} character
     * @param {string} text
     * @returns {number}
     */
    static countCharInText(character, text) {
        let charCounter = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === character) {
                charCounter++;
            }
        }

        return charCounter;
    }

    /**
     * Return the index that can be used to set the caret position.
     * This takes into account that the position is starting at '0', not 1.
     *
     * @param {int} characterCount
     * @returns {number}
     */
    static convertCharacterCountToIndexPosition(characterCount) {
        return Math.max(characterCount, characterCount - 1);
    }

    /**
     * Cross browser routine for getting selected range/cursor position.
     * Note: this also works with edge cases like contenteditable-enabled elements, and hidden inputs.
     *
     * @param {HTMLInputElement|EventTarget} element
     * @returns {{}}
     */
    static getElementSelection(element) {
        const position = {};

        let isSelectionStartUndefined;
        try {
            isSelectionStartUndefined = this.isUndefined(element.selectionStart);
        } catch (error) {
            isSelectionStartUndefined = false;
        }

        try {
            if (isSelectionStartUndefined) {
                const selection = window.getSelection();
                const selectionInfo = selection.getRangeAt(0);
                position.start = selectionInfo.startOffset;
                position.end = selectionInfo.endOffset;
                position.length = position.end - position.start;
            } else {
                position.start = element.selectionStart;
                position.end = element.selectionEnd;
                position.length = position.end - position.start;
            }
        } catch (error) {
            // Manages the cases where :
            // - the 'contenteditable' elements that have no selections
            // - the <input> element is of type 'hidden'
            position.start = 0;
            position.end = 0;
            position.length = 0;
        }

        return position;
    }

    /**
     * Cross browser routine for setting selected range/cursor position
     *
     * @param {HTMLInputElement|EventTarget} element
     * @param {int} start
     * @param {int|null} end
     */
    static setElementSelection(element, start, end = null) {
        if (this.isUndefinedOrNullOrEmpty(end)) {
            end = start;
        }

        if (this.isInputElement(element)) {
            element.setSelectionRange(start, end);
        } else if (!AutoNumericHelper.isNull(element.firstChild)) {
            const range = document.createRange();
            range.setStart(element.firstChild, start);
            range.setEnd(element.firstChild, end);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    /**
     * Function that throw error messages
     *
     * @param {string} message
     * @throws
     */
    static throwError(message) {
        throw new Error(message);
    }

    /**
     * Function that display a warning messages, according to the debug level.
     *
     * @param {string} message
     * @param {boolean} showWarning If FALSE, then the warning message is not displayed
     */
    static warning(message, showWarning = true) {
        if (showWarning) {
            /* eslint no-console: 0 */
            console.warn(`Warning: ${message}`);
        }
    }

    /**
     * Return `true` if the given event is a wheelup event
     *
     * @param {WheelEvent} wheelEvent
     * @returns {boolean}
     */
    static isWheelUpEvent(wheelEvent) {
        if (!wheelEvent.deltaY) {
            this.throwError(`The event passed as a parameter is not a valid wheel event, '${wheelEvent.type}' given.`);
        }

        return wheelEvent.deltaY < 0;
    }

    /**
     * Return `true` if the given event is a wheeldown event
     *
     * @param {WheelEvent} wheelEvent
     * @returns {boolean}
     */
    static isWheelDownEvent(wheelEvent) {
        if (!wheelEvent.deltaY) {
            this.throwError(`The event passed as a parameter is not a valid wheel event, '${wheelEvent.type}' given.`);
        }

        return wheelEvent.deltaY > 0;
    }

    /**
     * Return the given raw value truncated at the given number of decimal places `decimalPlaces`.
     * This function does not round the value.
     *
     * @example
     * forceDecimalPlaces(123.45678, 0) -> '123.45678'
     * forceDecimalPlaces(123.45678, 1) -> '123.4'
     * forceDecimalPlaces(123.45678, 2) -> '123.45'
     * forceDecimalPlaces(123.45678, 3) -> '123.456'
     *
     * @param {number} value
     * @param {int} decimalPlaces
     * @returns {number|string}
     */
    static forceDecimalPlaces(value, decimalPlaces) {
        // We could make sure `decimalPlaces` is an integer and positive, but we'll leave that to the dev calling this function.
        const [integerPart, decimalPart] = String(value).split('.');
        if (!decimalPart) {
            return value;
        }

        return `${integerPart}.${decimalPart.substr(0, decimalPlaces)}`;
    }

    /**
     * Return the 'nearest rounded' value, according to the given step size.
     * @example roundToNearest(264789, 10000)) => 260000
     *
     * @param {number} value
     * @param {number} stepPlace
     * @returns {*}
     */
    static roundToNearest(value, stepPlace = 1000) {
        if (0 === value) {
            return 0;
        }

        if (stepPlace === 0) {
            this.throwError('The `stepPlace` used to round is equal to `0`. This value must not be equal to zero.');
        }

        return Math.round(value / stepPlace) * stepPlace;
    }

    /**
     * Return the 'nearest rounded' value by automatically adding or subtracting the calculated offset to the initial value.
     * This is done without having to pass a step to this function, and based on the size of the given `value`.
     *
     * @example                    Calculated offset
     *           1 ->           1 (1)
     *          14 ->          10 (10)
     *         143 ->         140 (10)
     *       1.278 ->       1.300 (100)
     *      28.456 ->      28.500 (100)
     *     276.345 ->     276.000 (1.000)
     *   4.534.061 ->   4.530.000 (10.000)
     *  66.723.844 ->  66.700.000 (100.000)
     * 257.833.411 -> 258.000.000 (1.000.000)
     *
     *                           Initial   Added   Offset
     * 2 decimalPlacesRawValue : 1.12   -> 2.00   (1)
     * 3 decimalPlacesRawValue : 1.123  -> 2.000  (1)
     *
     * Special case when the `value` to round is between -1 and 1, excluded :
     * @example
     *     Number of             Initial   Result  Calculated
     *     decimal places        value     (add)   offset
     * 2 decimalPlacesRawValue : 0.12   -> 0.13    (0.01) : Math.pow(10, -2)
     * 2 decimalPlacesRawValue : 0.01   -> 0.02    (0.01)
     * 2 decimalPlacesRawValue : 0.00   -> 0.01    (0.01)
     *
     * 3 decimalPlacesRawValue : 0.123  -> 0.133   (0.01)  : Math.pow(10, -2)
     * 3 decimalPlacesRawValue : 0.012  -> 0.013   (0.001) : Math.pow(10, -3)
     * 3 decimalPlacesRawValue : 0.001  -> 0.001   (0.001)
     * 3 decimalPlacesRawValue : 0.000  -> 0.001   (0.001)
     *
     * 4 decimalPlacesRawValue : 0.4123 -> 0.4200  (0.01)   : Math.pow(10, -2)
     * 4 decimalPlacesRawValue : 0.0412 -> 0.0420  (0.001)  : Math.pow(10, -3)
     * 4 decimalPlacesRawValue : 0.0041 -> 0.0042  (0.0001) : Math.pow(10, -4)
     * 4 decimalPlacesRawValue : 0.0004 -> 0.0005  (0.0001)
     * 4 decimalPlacesRawValue : 0.0000 -> 0.0001  (0.0001)
     *
     * @param {number} value
     * @param {boolean} isAddition
     * @param {int} decimalPlacesRawValue The precision needed by the `rawValue`
     * @returns {*}
     */
    static modifyAndRoundToNearestAuto(value, isAddition, decimalPlacesRawValue) {
        value = Number(this.forceDecimalPlaces(value, decimalPlacesRawValue)); // Make sure that '0.13000000001' is converted to the number of rawValue decimal places '0.13'

        const absValue = Math.abs(value);
        if (absValue >= 0 && absValue < 1) {
            const rawValueMinimumOffset = Math.pow(10, -decimalPlacesRawValue);
            if (value === 0) {
                // 4 decimalPlacesRawValue : 0.0000 -> 0.0001 (0.0001)
                return (isAddition)?rawValueMinimumOffset:-rawValueMinimumOffset;
            }

            let offset;
            const minimumOffsetFirstDecimalPlaceIndex = decimalPlacesRawValue;
            // Find where is the first non-zero decimal places
            const indexFirstNonZeroDecimalPlace = this.indexFirstNonZeroDecimalPlace(value);
            if (indexFirstNonZeroDecimalPlace >= minimumOffsetFirstDecimalPlaceIndex - 1) {
                /* 4 decimalPlacesRawValue : 0.0041 -> 0.0042 (0.0001) : Math.pow(10, -4)
                 * 4 decimalPlacesRawValue : 0.0004 -> 0.0005 (0.0001)
                 */
                offset = rawValueMinimumOffset;
            } else {
                offset = Math.pow(10, -(indexFirstNonZeroDecimalPlace + 1));
            }

            let result;
            if (isAddition) {
                result = value + offset;
            } else {
                result = value - offset;
            }

            return this.roundToNearest(result, offset);
        } else {
            // For values >= 1
            value = parseInt(value, 10);
            const lengthValue = Math.abs(value).toString().length; // `Math.abs()` is needed here to omit the negative sign '-' in case of a negative value

            let pow;
            switch (lengthValue) {
                // Special cases for small numbers
                case 1:
                    pow = 0;
                    break;
                case 2:
                case 3:
                    pow = 1;
                    break;
                case 4:
                case 5:
                    pow = 2;
                    break;
                // Default behavior
                default:
                    pow = lengthValue - 3;
            }
            const offset = Math.pow(10, pow);

            let result;
            if (isAddition) {
                result = value + offset;
            } else {
                result = value - offset;
            }

            if (result <= 10 && result >= -10) {
                return result;
            }

            return this.roundToNearest(result, offset);
        }
    }

    /**
     * Return the 'nearest rounded' value automatically by adding the calculated offset to the initial value.
     * This will limit the result to the given number of decimal places `decimalPlacesLimit`.
     *
     * @param {number} value
     * @param {int} decimalPlacesLimit
     * @returns {*}
     */
    static addAndRoundToNearestAuto(value, decimalPlacesLimit) {
        return this.modifyAndRoundToNearestAuto(value, true, decimalPlacesLimit);
    }

    /**
     * Return the 'nearest rounded' value automatically by subtracting the calculated offset to the initial value.
     * This will limit the result to the given number of decimal places `decimalPlacesLimit`.
     *
     * @param {number} value
     * @param {int} decimalPlacesLimit
     * @returns {*}
     */
    static subtractAndRoundToNearestAuto(value, decimalPlacesLimit) {
        return this.modifyAndRoundToNearestAuto(value, false, decimalPlacesLimit);
    }

    /**
     * Take an arabic number as a string and return a javascript number.
     * By default, this function does not try to convert the arabic decimal and thousand separator characters.
     * This returns `NaN` is the conversion is not possible.
     * Based on http://stackoverflow.com/a/17025392/2834898
     *
     * @param {string} arabicNumbers
     * @param {boolean} returnANumber If `true`, return a Number, otherwise return a String
     * @param {boolean} parseDecimalCharacter
     * @param {boolean} parseThousandSeparator
     * @returns {string|number|NaN}
     */
    static arabicToLatinNumbers(arabicNumbers, returnANumber = true, parseDecimalCharacter = false, parseThousandSeparator = false) {
        if (this.isNull(arabicNumbers)) {
            return arabicNumbers;
        }

        let result = arabicNumbers.toString();
        if (result === '') {
            return arabicNumbers;
        }

        if (result.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g) === null) {
            // If no Arabic/Persian numbers are found, return the numeric string or number directly
            if (returnANumber) {
                result = Number(result);
            }

            return result;
        }

        if (parseDecimalCharacter) {
            result = result.replace(/٫/, '.'); // Decimal character
        }

        if (parseThousandSeparator) {
            result = result.replace(/٬/g, ''); // Thousand separator
        }

        // Replace the numbers only
        result = result.replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => d.charCodeAt(0) - 1632) // Arabic numbers
            .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d => d.charCodeAt(0) - 1776); // Persian numbers

        // `NaN` has precedence over the string `'NaN'`
        const resultAsNumber = Number(result);
        if (isNaN(resultAsNumber)) {
            return resultAsNumber;
        }

        if (returnANumber) {
            result = resultAsNumber;
        }

        return result;
    }

    /**
     * Create a custom event and immediately sent it from the given element.
     * By default, if no element is given, the event is thrown from `document`.
     *
     * @param {string} eventName
     * @param {HTMLElement|HTMLDocument|EventTarget} element
     * @param {object} detail
     * @param {boolean} bubbles Set to `true` if the event must bubble up
     * @param {boolean} cancelable Set to `true` if the event must be cancelable
     */
    static triggerEvent(eventName, element = document, detail = null, bubbles = true, cancelable = true) {
        let event;
        if (window.CustomEvent) {
            event = new CustomEvent(eventName, { detail, bubbles , cancelable }); // This is not supported by default by IE ; We use the polyfill for IE9 and later.
        } else {
            event = document.createEvent('CustomEvent');
            event.initCustomEvent(eventName, bubbles, cancelable, { detail });
        }

        element.dispatchEvent(event);
    }

    /**
     * Function to parse minimumValue, maximumValue & the input value to prepare for testing to determine if the value falls within the min / max range.
     * Return an object example: minimumValue: "999999999999999.99" returns the following "{s: -1, e: 12, c: Array[15]}".
     *
     * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.
     *
     * @param {number|string} n A numeric value.
     * @returns {{}}
     */
    static parseStr(n) {
        const x = {}; // A Big number instance.
        let e;
        let i;
        let nL;
        let j;

        // Minus zero?
        if (n === 0 && 1 / n < 0) {
            n = '-0';
        }

        // Determine sign. 1 positive, -1 negative
        n = n.toString();
        if (this.isNegativeStrict(n, '-')) {
            n = n.slice(1);
            x.s = -1;
        } else {
            x.s = 1;
        }

        // Decimal point?
        e = n.indexOf('.');
        if (e > -1) {
            n = n.replace('.', '');
        }

        // Length of string if no decimal character
        if (e < 0) {
            // Integer
            e = n.length;
        }

        // Determine leading zeros
        i = (n.search(/[1-9]/i) === -1) ? n.length : n.search(/[1-9]/i);
        nL = n.length;
        if (i === nL) {
            // Zero
            x.e = 0;
            x.c = [0];
        } else {
            // Determine trailing zeros
            for (j = nL - 1; n.charAt(j) === '0'; j -= 1) {
                nL -= 1;
            }
            nL -= 1;

            // Decimal location
            x.e = e - i - 1;
            x.c = [];

            // Convert string to array of digits without leading/trailing zeros
            for (e = 0; i <= nL; i += 1) {
                x.c[e] = +n.charAt(i);
                e += 1;
            }
        }

        return x;
    }

    /**
     * Function to test if the input value falls with the Min / Max settings.
     * This uses the parsed strings for the above parseStr function.
     *
     * This function is adapted from Big.js https://github.com/MikeMcl/big.js/. Many thanks to Mike.
     *
     * @param {object} y Big number instance
     * @param {object} x Big number instance
     * @returns {*}
     */
    static testMinMax(y, x) {
        const xc = x.c;
        const yc = y.c;
        let i = x.s;
        let j = y.s;
        let k = x.e;
        let l = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {
            let result;
            if (!xc[0]) {
                result = !yc[0]?0:-j;
            } else {
                result = i;
            }
            return result;
        }

        // Signs differ?
        if (i !== j) {
            return i;
        }
        const xNeg = i < 0;

        // Compare exponents
        if (k !== l) {
            return (k > l ^ xNeg)?1:-1;
        }
        i = -1;
        k = xc.length;
        l = yc.length;
        j = (k < l) ? k : l;

        // Compare digit by digit
        for (i += 1; i < j; i += 1) {
            if (xc[i] !== yc[i]) {
                return (xc[i] > yc[i] ^ xNeg)?1:-1;
            }
        }

        // Compare lengths
        let result;
        if (k === l) {
            result = 0;
        } else {
            result = (k > l ^ xNeg)?1:-1;
        }

        return result;
    }

    /**
     * Generate a random string.
     * cf. http://stackoverflow.com/a/8084248/2834898
     *
     * @param {Number} strLength Length of the generated string (in character count)
     * @returns {string}
     */
    static randomString(strLength = 5) {
        return Math.random()
            .toString(36)
            .substr(2, strLength);
    }

    /**
     * Return the DOM element when passed either a DOM element or a selector string.
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @returns {HTMLElement}
     */
    static domElement(domElementOrSelector) {
        let domElement;
        if (AutoNumericHelper.isString(domElementOrSelector)) {
            domElement = document.querySelector(domElementOrSelector);
        } else {
            domElement = domElementOrSelector;
        }

        return domElement;
    }

    /**
     * Retrieve the current element value.
     *
     * @param {HTMLElement|HTMLInputElement|EventTarget} element
     * @returns {number|string|null}
     */
    static getElementValue(element) {
        if (element.tagName.toLowerCase() === 'input') {
            return element.value;
        }

        return this.text(element);
    }

    /**
     * Modify the element value directly.
     *
     * @param {HTMLElement|HTMLInputElement} element
     * @param {number|string|null} value
     */
    static setElementValue(element, value = null) {
        if (element.tagName.toLowerCase() === 'input') {
            element.value = value;
        } else {
            element.textContent = value;
        }
    }

    /**
     * This clone the given object, and return it.
     * WARNING: This does not do a deep cloning.
     * cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Examples
     * //TODO Add a `deep` option to clone object with more than one depth
     *
     * @param {object} obj
     * @returns {object}
     */
    static cloneObject(obj) {
        return Object.assign({}, obj);
    }

    /**
     * Return a 'camelized' version of the given string.
     * By default, this assume that :
     * - the separators are hyphens '-',
     * - the 'data-' string should be removed, and
     * - that the very first word should not be capitalized.
     *
     * @example camelize('data-currency-symbol') => 'currencySymbol'
     *
     * @param {string} str Text to camelize
     * @param {string} separator Character that separate each word
     * @param {boolean} removeData If set to `true`, remove the `data-` part that you can find on some html attributes
     * @param {boolean} skipFirstWord If set to `true`, do not capitalize the very first word
     * @returns {string|null}
     */
    static camelize(str, separator = '-', removeData = true, skipFirstWord = true) {
        if (this.isNull(str)) {
            return null;
        }

        if (removeData) {
            str = str.replace(/^data-/, '');
        }

        // Cut the string into words
        const words = str.split(separator);

        // Capitalize each word
        let result = words.map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);

        // Then concatenate them back
        result = result.join('');

        if (skipFirstWord) {
            // Skip the very first letter
            result = `${result.charAt(0).toLowerCase()}${result.slice(1)}`;
        }

        return result;
    }

    /**
     * Return the text component of the given DOM element.
     *
     * @param {Element} domElement
     * @returns {string}
     */
    static text(domElement) {
        const nodeType = domElement.nodeType;

        let result;
        // cf. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
        if (nodeType === Node.ELEMENT_NODE ||
            nodeType === Node.DOCUMENT_NODE ||
            nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            result = domElement.textContent;
        } else if (nodeType === Node.TEXT_NODE) {
            result = domElement.nodeValue;
        } else {
            result = '';
        }

        return result;
    }

    /**
     * Set the text content of the given DOM element.
     * @param {Element} domElement
     * @param {string} text
     */
    static setText(domElement, text) {
        const nodeType = domElement.nodeType;
        if (nodeType === Node.ELEMENT_NODE ||
            nodeType === Node.DOCUMENT_NODE ||
            nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            domElement.textContent = text;
        }
        //TODO Display a warning if that function does not do anything?
    }

    /**
     * Filter out the given `arr` array with the elements found in `excludedElements`.
     * This returns a new array and does not modify the source.
     * cf. verification here : http://codepen.io/AnotherLinuxUser/pen/XpvrMg?editors=0012
     *
     * @param {Array} arr
     * @param {Array} excludedElements
     * @returns {*|Array.<T>}
     */
    static filterOut(arr, excludedElements) {
        return arr.filter(element => !this.isInArray(element, excludedElements));
    }

    /**
     * Remove the trailing zeros in the decimal part of a number.
     *
     * @param {string} numericString
     * @returns {*}
     */
    static trimPaddedZerosFromDecimalPlaces(numericString) {
        numericString = String(numericString);
        if (numericString === '') {
            return '';
        }

        const [integerPart, decimalPart] = numericString.split('.');
        if (this.isUndefinedOrNullOrEmpty(decimalPart)) {
            return integerPart;
        }

        const trimmedDecimalPart = decimalPart.replace(/0+$/g, '');

        let result;
        if (trimmedDecimalPart === '') {
            result = integerPart;
        } else {
            result = `${integerPart}.${trimmedDecimalPart}`;
        }

        return result;
    }

    /**
     * Return the top-most hovered item by the mouse cursor.
     *
     * @returns {*}
     */
    static getHoveredElement() {
        const hoveredElements = [...document.querySelectorAll(':hover')];
        return hoveredElements[hoveredElements.length - 1];
    }

    /**
     * Return the given array trimmed to the given length.
     * @example arrayTrim([1, 2, 3, 4], 2) -> [1, 2]
     *
     * @param {Array} array
     * @param {Number} length
     * @returns {*}
     */
    static arrayTrim(array, length) {
        const arrLength = array.length;
        if (arrLength === 0 || length > arrLength) {
            // Also manage the case where `length` is higher than the current length
            return array;
        }

        if (length < 0) {
            return [];
        }

        array.length = parseInt(length, 10);

        return array;
    }

    /**
     * Merge all the given arrays by keeping only unique elements, and return an array with de-duplicated values.
     * cf. http://stackoverflow.com/a/27664971/2834898
     *
     * @param {...array} arrays
     * @returns {[*]}
     */
    static arrayUnique(...arrays) { //FIXME à tester
        return [...new Set([].concat(...arrays))];
    }

    /**
     * Merge all the given Maps by keeping only unique elements, and return a new Map with de-duplicated keys.
     *
     * @param {...Map} mapObjects
     * @returns {Map}
     */
    static mergeMaps(...mapObjects) {
        return new Map(mapObjects.reduce((as, b) => as.concat([...b]), []));
    }

    /**
     * Search the given `value` in the object `obj`, and return the very first key it finds
     *
     * @param {object} obj
     * @param {string|number} value
     * @returns {*|null}
     */
    static objectKeyLookup(obj, value) {
        const result = Object.entries(obj).find(array => array[1] === value);
        let key = null;
        if (result !== void(0)) {
            key = result[0];
        }

        return key;
    }

    /**
     * Insert the single character `char` in the string `str` at the given position `index`
     *
     * @param {string} str
     * @param {string} char
     * @param {int} index
     * @returns {string}
     */
    static insertAt(str, char, index) {
        str = String(str);

        if (index > str.length) {
            throw new Error(`The given index is out of the string range.`);
        }

        if (char.length !== 1) {
            throw new Error('The given string `char` should be only one character long.');
        }

        if (str === '' && index === 0) {
            return char;
        }

        return `${str.slice(0, index)}${char}${str.slice(index)}`;
    }

    /**
     * Convert the given scientific notation to the 'expanded' decimal notation
     *
     * @example scientificToDecimal('-123.4567e-6') returns '-0.0001234567'
     *
     * @param {number|string} val
     * @returns {number|string}
     */
    static scientificToDecimal(val) {
        // Check that the val is a Number
        const numericValue = Number(val);
        if (isNaN(numericValue)) {
            return NaN;
        }

        // Check if the number is in a scientific notation
        val                = String(val);
        const isScientific = this.contains(val, 'e') || this.contains(val, 'E');

        if (!isScientific) {
            return val;
        }

        // Convert the scientific notation to a numeric string
        let [value, exponent] = val.split(/e/i);
        const isNegative = value < 0;
        if (isNegative) {
            value = value.replace('-', '');
        }

        const isNegativeExponent = +exponent < 0;
        if (isNegativeExponent) {
            exponent = exponent.replace('-', ''); // Remove the negative sign
        }

        const [int, float] = value.split(/\./);

        let result;
        if (isNegativeExponent) {
            if (int.length > exponent) {
                // Place the decimal point at the int length count minus exponent
                result = this.insertAt(int, '.', int.length - exponent);
            } else {
                // If that decimal point is greater than the int length, pad with zeros (ie. Number('-123.4567e-6') --> -0.0001234567)
                result = `0.${'0'.repeat(exponent - int.length)}${int}`;
            }

            result = `${result}${float?float:''}`;
        } else { // Positive exponent
            if (float) {
                value = `${int}${float}`; // Remove the '.', if any
                if (exponent < float.length) {
                    result = this.insertAt(value, '.', +exponent + int.length);
                } else {
                    result = `${value}${'0'.repeat(exponent - float.length)}`;
                }
            } else {
                value = value.replace('.', ''); // Single case where val is '1.e4'
                result = `${value}${'0'.repeat(Number(exponent))}`;
            }
        }

        if (isNegative) {
            // Put back the negative sign, if any
            result = `-${result}`;
        }

        return result;
    }
}

/**
 * Math expression tokenizer/parser/evaluator functions for autoNumeric.js
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2018 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Recursively evaluate the abstract syntax tree (AST) and return the result for the given sub-tree
 */
class Evaluator {
    constructor(ast) {
        if (ast === null) {
            throw new Error(`Invalid AST`);
        }

        // return this.evaluate(ast);
    }

    evaluate(subtree) {
        if (subtree === void(0) || subtree === null) {
            throw new Error(`Invalid AST sub-tree`);
        }

        if (subtree.type === 'number') {
            return subtree.value;
        } else if (subtree.type === 'unaryMinus') {
            return -this.evaluate(subtree.left);
        } else {
            const left  = this.evaluate(subtree.left);
            const right = this.evaluate(subtree.right);

            switch (subtree.type) {
                case 'op_+':
                    return Number(left) + Number(right);
                case 'op_-':
                    return left - right;
                case 'op_*':
                    return left * right;
                case 'op_/':
                    return left / right;
                default :
                    throw new Error(`Invalid operator '${subtree.type}'`);
            }
        }
    }
}

/**
 * Math expression tokenizer/parser/evaluator functions for autoNumeric.js
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2018 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * The Abstract Syntax Tree node
 *
 * Each node carries the node information such as type (operator type), value (if it's a leaf), and the left and right branches
 */
class ASTNode {
    /*
    constructor() {
        // this.type = void(0);
        // this.value = 0;
        // this.left = null;
        // this.right = null;
    }
    */

    static createNode(type, left, right) {
        const node = new ASTNode();
        node.type = type;
        node.left = left;
        node.right = right;

        return node;
    }

    static createUnaryNode(left) {
        const node = new ASTNode();
        node.type = 'unaryMinus';
        node.left = left;
        node.right = null;

        return node;
    }

    static createLeaf(value) {
        const node = new ASTNode();
        node.type = 'number';
        node.value = value;

        return node;
    }
}

/**
 * Math expression tokenizer/parser/evaluator functions for autoNumeric.js
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2018 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Data structure used by the Lexer and Parser classes
 */
class Token {
    constructor(type, value, symbol) {
        this.type = type;
        this.value = value;
        this.symbol = symbol;
    }
}

/**
 * Math expression tokenizer/parser/evaluator functions for autoNumeric.js
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2018 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

class Lexer {
    constructor(text) {
        this.text  = text;
        this.textLength = text.length;
        this.index = 0;
        this.token = new Token('Error', 0, 0);
    }

    /**
     * Ignore white spaces and increment the index count until a non-space character is found
     * @private
     */
    _skipSpaces() {
        while (this.text[this.index] === ' ' && this.index <= this.textLength) {
            this.index++;
        }
    }

    /**
     * Return the current index
     *
     * @returns {number}
     */
    getIndex() {
        return this.index;
    }

    /**
     * Return the next token object
     *
     * @param {string} decimalCharacter The decimal character to use in the float numbers
     * @returns {Token}
     */
    getNextToken(decimalCharacter = '.') {
        this._skipSpaces();

        // Test for the end of text
        if (this.textLength === this.index) {
            this.token.type = 'EOT'; // End of text

            return this.token;
        }

        // If the current character is a digit read a number
        if (AutoNumericHelper.isDigit(this.text[this.index])) {
            this.token.type  = 'num';
            this.token.value = this._getNumber(decimalCharacter);

            return this.token;
        }

        // Check if the current character is an operator or parentheses
        this.token.type = 'Error';
        switch (this.text[this.index]) {
            case '+': this.token.type = '+'; break;
            case '-': this.token.type = '-'; break;
            case '*': this.token.type = '*'; break;
            case '/': this.token.type = '/'; break;
            case '(': this.token.type = '('; break;
            case ')': this.token.type = ')'; break;
        }

        if (this.token.type !== 'Error') {
            this.token.symbol = this.text[this.index];
            this.index++;
        } else {
            throw new Error(`Unexpected token '${this.token.symbol}' at position '${this.token.index}' in the token function`);
        }

        return this.token;
    }

    /**
     * Return the integer or float number starting from the `this.index` string index
     *
     * @param {string} decimalCharacter The decimal character to use in the float numbers
     *
     * @returns {string}
     * @private
     */
    _getNumber(decimalCharacter) {
        this._skipSpaces();

        const startIndex = this.index;
        while (this.index <= this.textLength && AutoNumericHelper.isDigit(this.text[this.index])) { // Integer part
            this.index++;
        }

        if (this.text[this.index] === decimalCharacter) {
            this.index++;
        }

        while (this.index <= this.textLength && AutoNumericHelper.isDigit(this.text[this.index])) { // Decimal part, if any
            this.index++;
        }

        if (this.index === startIndex) {
            throw new Error(`No number has been found while it was expected`);
        }

        // Convert the localized float number to a Javascript number
        return this.text.substring(startIndex, this.index).replace(decimalCharacter, '.');
    }
}

/**
 * Math expression tokenizer/parser/evaluator functions for autoNumeric.js
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2018 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Math expression parser using the shunting-yard algorithm
 *
 * This implements the following BNF grammar:
 * EXP       -> TERM MORE_EXP
 * MORE_EXP  -> + TERM MORE_EXP |
 *              - TERM MORE_EXP |
 *              epsilon
 * TERM      -> FACTOR MORE_TERM
 * MORE_TERM -> * FACTOR MORE_TERM |
 *              / FACTOR MORE_TERM |
 *              epsilon
 * FACTOR    -> number |
 *             ( EXP ) |
 *             - FACTOR
 */
class Parser {
    /**
     * Parse the given string, and generate an abstract syntax tree (AST) from the math expression
     *
     * @param {string} text
     * @param {string} customDecimalCharacter The custom decimal character to use in floats
     * @returns {ASTNode}
     */
    constructor(text, customDecimalCharacter = '.') {
        this.text = text;
        this.decimalCharacter = customDecimalCharacter;
        this.lexer = new Lexer(text);
        this.token = this.lexer.getNextToken(this.decimalCharacter);

        return this._exp();
    }

    _exp() {
        const termNode = this._term();
        const exprNode = this._moreExp();

        //TODO Do not create an 'empty' node where this is added to 0
        return ASTNode.createNode('op_+', termNode, exprNode);
    }

    _moreExp() {
        let termNode;
        let exprNode;
        switch (this.token.type) {
            case '+':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                termNode = this._term();
                exprNode = this._moreExp();

                return ASTNode.createNode('op_+', exprNode, termNode);
            case '-':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                termNode = this._term();
                exprNode = this._moreExp();

                return ASTNode.createNode('op_-', exprNode, termNode);
        }

        return ASTNode.createLeaf(0);
    }

    _term() {
        const factorNode = this._factor();
        const termsNode = this._moreTerms();

        //TODO Do not create an 'empty' node where this is multiplied by 1
        return ASTNode.createNode('op_*', factorNode, termsNode);
    }

    _moreTerms() {
        let factorNode;
        let termsNode;
        switch (this.token.type) {
            case '*':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                factorNode = this._factor();
                termsNode = this._moreTerms();

                return ASTNode.createNode('op_*', termsNode, factorNode);
            case '/':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                factorNode = this._factor();
                termsNode = this._moreTerms();

                return ASTNode.createNode('op_/', termsNode, factorNode);
        }

        return ASTNode.createLeaf(1);
    }

    _factor() {
        let expression;
        let factor;
        let value;
        switch (this.token.type) {
            case 'num':
                value = this.token.value;
                this.token = this.lexer.getNextToken(this.decimalCharacter);

                return ASTNode.createLeaf(value);
            case '-':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                factor = this._factor();

                return ASTNode.createUnaryNode(factor);
            case '(':
                this.token = this.lexer.getNextToken(this.decimalCharacter);
                expression = this._exp();
                this._match(')');

                return expression;
            default: {
                throw new Error(`Unexpected token '${this.token.symbol}' with type '${this.token.type}' at position '${this.token.index}' in the factor function`);
            }
        }
    }

    _match(expected) {
        const index = this.lexer.getIndex() - 1;
        if (this.text[index] === expected) {
            this.token = this.lexer.getNextToken(this.decimalCharacter);
        } else {
            throw new Error(`Unexpected token '${this.token.symbol}' at position '${index}' in the match function`);
        }
    }
}

/**
 *               AutoNumeric.js
 *
 * @version      4.5.4
 * @date         2019-01-05 UTC 07:40
 *
 * @authors      Bob Knothe, Alexandre Bonneau
 * @contributors Sokolov Yura and others, cf. AUTHORS
 * @copyright    2009 Robert J. Knothe
 * @since        2009-08-09
 *
 * @summary      autoNumeric is a standalone Javascript library
 *               that provides live *as-you-type* formatting for
 *               international numbers and currencies.
 *
 * @link         http://autonumeric.org
 *
 *               Note : Some functions are borrowed from big.js
 * @see          https://github.com/MikeMcl/big.js/
 *
 * Please report any bugs to https://github.com/autoNumeric/autoNumeric
 *
 * @license      Released under the MIT License
 * @link         http://www.opensource.org/licenses/mit-license.php
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Class declaration for the AutoNumeric object.
 *
 * An AutoNumeric element is an object wrapper that keeps a reference to the DOM element it manages (usually an <input> one), and provides autoNumeric-specific variables and functions.
 */
class AutoNumeric {
    /**
     * Initialize the AutoNumeric object onto the given DOM element, and attach the settings and related event listeners to it.
     * The options passed as a parameter is an object that contains the settings (ie. {digitGroupSeparator: ".", decimalCharacter: ",", currencySymbol: '€ '})
     *
     * @example
     * anElement = new AutoNumeric(domElement); // With the default options
     * anElement = new AutoNumeric(domElement, { options }); // With one option object
     * anElement = new AutoNumeric(domElement, 'euroPos'); // With a named pre-defined string
     * anElement = new AutoNumeric(domElement, [{ options1 }, 'euroPos', { options2 }]); // With multiple option objects (the latest option overwriting the previous ones)
     * anElement = new AutoNumeric(domElement, null, { options }); // With one option object, and a failed initial value
     * anElement = new AutoNumeric(domElement).french(); // With one pre-defined language object
     * anElement = new AutoNumeric(domElement).french({ options });// With one pre-defined language object and additional options that will override the defaults
     *
     * // ...or init and set the value in one call :
     * anElement = new AutoNumeric(domElement, 12345.789); // With the default options, and an initial value
     * anElement = new AutoNumeric(domElement, 12345.789, { options });
     * anElement = new AutoNumeric(domElement, '12345.789', { options });
     * anElement = new AutoNumeric(domElement, 12345.789, 'euroPos');
     * anElement = new AutoNumeric(domElement, 12345.789, [{ options1 }, 'euroPos', { options2 }]);
     * anElement = new AutoNumeric(domElement, 12345.789).french({ options });
     * anElement = new AutoNumeric(domElement, 12345.789, { options }).french({ options }); // Not really helpful, but possible
     *
     * // The AutoNumeric constructor class can also accept a string as a css selector. Under the hood this use `QuerySelector` and limit itself to only the first element it finds.
     * anElement = new AutoNumeric('.myCssClass > input');
     * anElement = new AutoNumeric('.myCssClass > input', { options });
     * anElement = new AutoNumeric('.myCssClass > input', 'euroPos');
     * anElement = new AutoNumeric('.myCssClass > input', [{ options1 }, 'euroPos', { options2 }]);
     * anElement = new AutoNumeric('.myCssClass > input', 12345.789);
     * anElement = new AutoNumeric('.myCssClass > input', 12345.789, { options });
     * anElement = new AutoNumeric('.myCssClass > input', 12345.789, 'euroPos');
     * anElement = new AutoNumeric('.myCssClass > input', 12345.789, [{ options1 }, 'euroPos', { options2 }]);
     * anElement = new AutoNumeric('.myCssClass > input', null, { options }); // With a failed initial value
     * anElement = new AutoNumeric('.myCssClass > input', 12345.789).french({ options });
     *
     * @param {object|Array|number|string} arg1
     * @param {object|Array|number|string|null} arg2
     * @param {object|Array|number|string|null} arg3
     * @throws
     */
    constructor(arg1 = null, arg2 = null, arg3 = null) {
        // --------------------------------------------------------
        // -------------- Initialization
        // Initialize the arguments
        const { domElement, initialValue, userOptions } = AutoNumeric._setArgumentsValues(arg1, arg2, arg3);

        // Initialize the element
        this.domElement = domElement;

        // Generate the settings
        this.defaultRawValue = ''; // The default raw value to set when initializing an AutoNumeric object
        this._setSettings(userOptions, false);
        //TODO If `styleRules` is not null, add by default a class 'autoNumeric' that adds transition to color, background-color, border-color properties
        // Check if the DOM element is supported
        this._checkElement();

        // Store the additional attributes inside the AutoNumeric object
        // Note: This variable is needed and not a duplicate of `initialValueOnKeydown` nor `valueOnFocus` since it serves a different purpose and has a different lifecycle
        this.savedCancellableValue = null;

        // Initialize the undo/redo variables
        this.historyTable = []; // Keep track of *all* valid states of the element value
        this.historyTableIndex = -1; // Pointer to the current undo/redo state. This will be set to '0' during initialization since it first adds itself.
        this.onGoingRedo = false; // Variable that keeps track if a 'redo' is ongoing (in order to prevent an 'undo' to be launch when releasing the shift key before the ctrl key after a 'redo' shortcut)

        // Initialize the parent form element, if any
        this.parentForm = this._getParentForm();

        // Set the initial value if it exists and if the `formatOnPageLoad` option will allow it
        if (!this.runOnce && this.settings.formatOnPageLoad) {
            // Format the element value if needed
            this._formatDefaultValueOnPageLoad(initialValue);
        } else {
            // Otherwise set the `rawValue` and the element value, but do not format the latter yet
            let valueToSet;
            if (AutoNumericHelper.isNull(initialValue)) {
                switch (this.settings.emptyInputBehavior) {
                    case AutoNumeric.options.emptyInputBehavior.min:
                        valueToSet = this.settings.minimumValue;
                        break;
                    case AutoNumeric.options.emptyInputBehavior.max:
                        valueToSet = this.settings.maximumValue;
                        break;
                    case AutoNumeric.options.emptyInputBehavior.zero:
                        valueToSet = '0';
                        break;
                    // In order to stay consistent when `formatOnPageLoad` is set to `true`, it's still impossible to set the `null` value as the initial value
                    case AutoNumeric.options.emptyInputBehavior.focus:
                    case AutoNumeric.options.emptyInputBehavior.press:
                    case AutoNumeric.options.emptyInputBehavior.always:
                    case AutoNumeric.options.emptyInputBehavior.null:
                        valueToSet = '';
                        break;
                    // When `emptyInputBehavior` is a number or a string representing a number
                    default :
                        valueToSet = this.settings.emptyInputBehavior;
                }
            } else {
                valueToSet = initialValue;
            }

            this._setElementAndRawValue(valueToSet);
        }

        this.runOnce = true;

        // Add the events listeners only on input or editable elements
        this.hasEventListeners = false;
        if (this.isInputElement || this.isContentEditable) {
            if (!this.settings.noEventListeners) {
                //XXX Here we make sure the global list is created after creating the event listeners, to only create the event listeners on `document` once
                this._createEventListeners();
            }

            this._setWritePermissions(true);
        }

        // Save the initial values (html attribute + element.value) for the pristine test
        this._saveInitialValues(initialValue);
        
        // Setup the data for the persistent storage solution (ie. sessionStorage or cookies)
        this.sessionStorageAvailable = this.constructor._storageTest();
        this.storageNamePrefix = 'AUTO_'; // The prefix for the raw value storage name variable can be modified here
        this._setPersistentStorageName();

        // --------------------------------------------------------
        // -------------- Tracking
        // Keep track if the element is currently focused
        this.isFocused = false;
        // Keep track if a mouse wheel event is currently ongoing
        this.isWheelEvent = false;
        // Keep track if a drop event is currently ongoing
        this.isDropEvent = false;
        // Keep track if the user is currently editing the element
        this.isEditing = false;
        // Keep track of the rawValue (needed to define if a change event must be sent on blur or enter key)
        this.rawValueOnFocus = void(0);
        // Watch any external changes to the element value/textContent/nodeValue and `set()` the new value so that it gets formatted/saved in the history
        this.internalModification = false; // This is temporarily set to `true` only when the AutoNumeric object does update the element value
        this.attributeToWatch = this._getAttributeToWatch();
        this.getterSetter = Object.getOwnPropertyDescriptor(this.domElement.__proto__, this.attributeToWatch);
        this._addWatcher();

        if (this.settings.createLocalList) {
            // Keep track of every AutoNumeric elements that this object initialized
            this._createLocalList();
        }

        // Keep track of all AutoNumeric elements in the current web page
        this.constructor._addToGlobalList(this);

        // --------------------------------------------------------
        // -------------- Methods
        // Create the global functions
        this.global = {
            /**
             * Set the same given element value for each elements in the local AutoNumeric element list, and format those elements immediately
             *
             * @param {number|string} newValue The value must be a number or a numeric string
             * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
             */
            set: (newValue, options = null) => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.set(newValue, options);
                });
            },

            /**
             * Set the value given value directly as the DOM element value, without formatting it beforehand.
             * This sets the same unformatted value for each elements in the local AutoNumeric element list.
             *
             * @param {number|string} value
             * @param {object} options
             */
            setUnformatted: (value, options = null) => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.setUnformatted(value, options);
                });
            },

            /**
             * This is an alias of the `getNumericString()` function, and should not be used anymore.
             *
             * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
             * @returns {Array<string>}
             * @deprecated
             */
            get: (callback = null) => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.get());
                });
                this._executeCallback(result, callback);

                return result;
            },

            /**
             * Return an array of the unformatted values (as a string) of each AutoNumeric element of the local AutoNumeric element list
             *
             * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
             * @returns {Array<string>}
             */
            getNumericString: (callback = null) => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.getNumericString());
                });
                this._executeCallback(result, callback);

                return result;
            },

            /**
             * Return an array of the current formatted values (as a string) of each AutoNumeric element of the local AutoNumeric element list
             *
             * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
             * @returns {Array<string>}
             */
            getFormatted: (callback = null) => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.getFormatted());
                });
                this._executeCallback(result, callback);

                return result;
            },

            /**
             * Return an array of the element unformatted values (as a real Javascript number), for each element of the local AutoNumeric element list
             *
             * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
             * @returns {Array<number>}
             */
            getNumber: (callback = null) => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.getNumber());
                });
                this._executeCallback(result, callback);

                return result;
            },

            /**
             * Returns the unformatted values (following the `outputFormat` setting) of each element of the local AutoNumeric element list into an array
             *
             * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
             * @returns {Array<string>}
             */
            getLocalized: (callback = null) => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.getLocalized());
                });
                this._executeCallback(result, callback);

                return result;
            },

            /**
             * Force each element of the local AutoNumeric element list to reformat its value
             */
            reformat: () => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.reformat();
                });
            },

            /**
             * Remove the formatting and keep only the raw unformatted value (as a numericString) in each elements of the local AutoNumeric element list
             */
            unformat: () => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.unformat();
                });
            },

            /**
             * Remove the formatting and keep only the localized unformatted value in the element, with the option to override the default outputFormat if needed
             *
             * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
             */
            unformatLocalized: (forcedOutputFormat = null) => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.unformatLocalized(forcedOutputFormat);
                });
            },

            /**
             * Updates the AutoNumeric settings, and immediately format the elements accordingly, for each elements of the local AutoNumeric element list
             *
             * @param {object} newOptions This can be either one or more option objects
             */
            update: (...newOptions) => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.update(...newOptions);
                });
            },

            /**
             * Return `true` if *all* the autoNumeric-managed elements are pristine, if their raw value hasn't changed.
             * By default, this returns `true` if the raw unformatted value is still the same even if the formatted one has changed (due to a configuration update for instance).
             *
             * @param {boolean} checkOnlyRawValue If set to `true`, the pristine value is done on the raw unformatted value, not the formatted one. If set to `false`, this also checks that the formatted value hasn't changed.
             * @returns {boolean}
             */
            isPristine: (checkOnlyRawValue = true) => {
                let isPristine = true;
                this.autoNumericLocalList.forEach(aNObject => {
                    if (isPristine && !aNObject.isPristine(checkOnlyRawValue)) {
                        isPristine = false;
                    }
                });

                return isPristine;
            },

            /**
             * Execute the `clear()` method on each AutoNumeric object in the local AutoNumeric element list
             *
             * @param {boolean} forceClearAll
             */
            clear: (forceClearAll = false) => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.clear(forceClearAll);
                });
            },

            /**
             * Execute the `remove()` method on each AutoNumeric object in the local AutoNumeric element list
             */
            remove: () => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.remove();
                });
            },

            /**
             * Execute the `wipe()` method on each AutoNumeric object in the local AutoNumeric element list
             */
            wipe: () => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.wipe();
                });
            },

            /**
             * Execute the `nuke()` method on each AutoNumeric object in the local AutoNumeric element list
             */
            nuke: () => {
                this.autoNumericLocalList.forEach(aNObject => {
                    aNObject.nuke();
                });
            },

            /**
             * Return `true` if the given AutoNumeric object (or DOM element) is in the local AutoNumeric element list
             *
             * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
             * @returns {*}
             */
            has: domElementOrAutoNumericObject => {
                let result;
                if (domElementOrAutoNumericObject instanceof AutoNumeric) {
                    result = this.autoNumericLocalList.has(domElementOrAutoNumericObject.node());
                } else {
                    result = this.autoNumericLocalList.has(domElementOrAutoNumericObject);
                }

                return result;
            },

            /**
             * Add an existing AutoNumeric object (or DOM element) to the local AutoNumeric element list, using the DOM element as the key.
             * This manages the case where `addObject` is used on an AutoNumeric object that already has multiple elements in its local list.
             *
             * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
             */
            addObject: domElementOrAutoNumericObject => {
                // Start with the same data, whatever the user passed as arguments
                let domElement;
                let otherAutoNumericObject;
                if (domElementOrAutoNumericObject instanceof AutoNumeric) {
                    domElement = domElementOrAutoNumericObject.node();
                    otherAutoNumericObject = domElementOrAutoNumericObject;
                } else {
                    domElement = domElementOrAutoNumericObject;
                    otherAutoNumericObject = AutoNumeric.getAutoNumericElement(domElement);
                }

                // Check if the current autoNumeric object has a local list
                if (!this._hasLocalList()) {
                    this._createLocalList();
                }

                // Check if the other autoNumeric object has a local list...
                let otherANLocalList = otherAutoNumericObject._getLocalList();
                if (otherANLocalList.size === 0) {
                    // Special case if the other AutoNumeric object has an empty local list, then populate itself to it
                    otherAutoNumericObject._createLocalList();
                    otherANLocalList = otherAutoNumericObject._getLocalList(); // Update the other local list
                }

                let mergedLocalLists;
                if (otherANLocalList instanceof Map) {
                    // ...If it does, merge the local lists together
                    mergedLocalLists = AutoNumericHelper.mergeMaps(this._getLocalList(), otherANLocalList);
                } else {
                    // ...If not, just set the current local list onto the other AutoNumeric object
                    // We need to specify the AutoNumeric object, otherwise the `_addToLocalList` function would not correctly add the AutoNumeric object since we would not have a reference to it, but a reference to the current AutoNumeric object on which is called this method.
                    this._addToLocalList(domElement, otherAutoNumericObject);
                    mergedLocalLists = this._getLocalList();
                }

                // Update the resulting list, on all the objects of that local list (so that we can indifferently use `init()` on any object belonging to that list)
                mergedLocalLists.forEach(aNObject => {
                    aNObject._setLocalList(mergedLocalLists);
                });
            },

            /**
             * Remove the given AutoNumeric object (or DOM element) from the local AutoNumeric element list, using the DOM element as the key.
             * If this function attempts to remove the current AutoNumeric object from the local list, a warning is shown, but the deletion is still done.
             *
             * Special cases :
             * - If the current object removes itself, then it's removed from the shared local list, then a new empty local list is used/created
             * - If another object remove this object, then a local list with only this object is used/created
             *
             * @param {HTMLElement|HTMLInputElement|AutoNumeric} domElementOrAutoNumericObject
             * @param {boolean} keepCurrentANObject If set to `false`, then the function will also remove the current AutoNumeric object if asked, otherwise it will ignore it and print a warning message
             */
            removeObject: (domElementOrAutoNumericObject, keepCurrentANObject = false) => {
                // Start with the same data, whatever the user passed as arguments
                let domElement;
                let otherAutoNumericObject;
                if (domElementOrAutoNumericObject instanceof AutoNumeric) {
                    domElement = domElementOrAutoNumericObject.node();
                    otherAutoNumericObject = domElementOrAutoNumericObject;
                } else {
                    domElement = domElementOrAutoNumericObject;
                    otherAutoNumericObject = AutoNumeric.getAutoNumericElement(domElement);
                }

                // Remove the other object from the local list
                const initialCompleteLocalList = this.autoNumericLocalList;
                this.autoNumericLocalList.delete(domElement);

                // Update the local list for all objects in it
                initialCompleteLocalList.forEach(aNObject => {
                    aNObject._setLocalList(this.autoNumericLocalList);
                });

                if (!keepCurrentANObject && domElement === this.node()) {
                    // This object is removed by itself
                    // Empty the object local list
                    otherAutoNumericObject._setLocalList(new Map);
                } else {
                    // This object is removed by another object
                    // Set the local list for the removed object, with only this object in it
                    otherAutoNumericObject._createLocalList();
                }
            },

            /**
             * Remove all elements from the shared list, effectively emptying it.
             * This is the equivalent of calling `detach()` on each of its elements.
             *
             * @param {boolean} keepEachANObjectInItsOwnList If set to `true`, then instead of completely emptying the local list of each AutoNumeric objects, each one of those keeps itself in its own local list
             */
            empty: (keepEachANObjectInItsOwnList = false) => {
                const initialCompleteLocalList = this.autoNumericLocalList;

                // Update the local list for all objects in it
                initialCompleteLocalList.forEach(aNObject => {
                    if (keepEachANObjectInItsOwnList) {
                        aNObject._createLocalList();
                    } else {
                        aNObject._setLocalList(new Map);
                    }
                });
            },

            /**
             * Return an array containing all the AutoNumeric DOM elements that have been initialized by each other
             *
             * @returns {Array<HTMLElement>}
             */
            elements: () => {
                const result = [];
                this.autoNumericLocalList.forEach(aNObject => {
                    result.push(aNObject.node());
                });

                return result;
            },

            /**
             * Return the `Map` object directly
             * @returns {Map}
             */
            getList: () => this.autoNumericLocalList,

            /**
             * Return the number of element in the local AutoNumeric element list
             * @returns {number}
             */
            size: () => this.autoNumericLocalList.size,
        };

        // Create the functions that will allow to change each setting one by one
        /**
         * For each options, we define if we need to reformat the element content (does changing the options should change the way its value is displayed?).
         * If yes, then we use the `update()` for force a reformat, otherwise, we just update the `settings` object.
         */
        this.options = {
            /**
             * Reset any options set previously, by overwriting them with the default settings
             *
             * @returns {AutoNumeric}
             */
            reset                        : () => {
                //TODO Add a `settings` parameter so that the user can reset to a specific set of settings. This is different than update since it drops any non-default settings before using those new settings.
                this.settings = { rawValue : this.defaultRawValue }; // Here we pass the default rawValue in order to prevent showing a warning that we try to set an `undefined` value
                this.update(AutoNumeric.defaultSettings);

                return this;
            },
            allowDecimalPadding          : allowDecimalPadding => {
                this.update({ allowDecimalPadding });

                return this;
            },
            alwaysAllowDecimalCharacter  : alwaysAllowDecimalCharacter => { //FIXME Test this
                this.update({ alwaysAllowDecimalCharacter });

                return this;
            },
            caretPositionOnFocus         : caretPositionOnFocus => { //FIXME test this
                this.settings.caretPositionOnFocus = caretPositionOnFocus;

                return this;
            },
            createLocalList              : createLocalList => {
                this.settings.createLocalList = createLocalList;

                // Delete the local list when this is set to `false`, create it if this is set to `true` and there is not pre-existing list
                if (this.settings.createLocalList) {
                    if (!this._hasLocalList()) {
                        this._createLocalList();
                    }
                } else {
                    this._deleteLocalList();
                }

                return this;
            },
            currencySymbol               : currencySymbol => {
                this.update({ currencySymbol });

                return this;
            },
            currencySymbolPlacement      : currencySymbolPlacement => {
                this.update({ currencySymbolPlacement });

                return this;
            },
            decimalCharacter             : decimalCharacter => {
                this.update({ decimalCharacter });

                return this;
            },
            decimalCharacterAlternative  : decimalCharacterAlternative => {
                this.settings.decimalCharacterAlternative = decimalCharacterAlternative;

                return this;
            },
            /**
             * Update the decimal places globally, which means this override any previously set number of decimal shown on focus, on blur, or in the raw value.
             *
             * @param {int} decimalPlaces
             * @returns {AutoNumeric}
             */
            decimalPlaces                : decimalPlaces => {
                AutoNumericHelper.warning('Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.', this.settings.showWarnings);
                this.update({ decimalPlaces });

                return this;
            },
            decimalPlacesRawValue        : decimalPlacesRawValue => { //FIXME test this
                this.update({ decimalPlacesRawValue });

                return this;
            },
            decimalPlacesShownOnBlur     : decimalPlacesShownOnBlur => {
                this.update({ decimalPlacesShownOnBlur });

                return this;
            },
            decimalPlacesShownOnFocus    : decimalPlacesShownOnFocus => {
                this.update({ decimalPlacesShownOnFocus });

                return this;
            },
            defaultValueOverride         : defaultValueOverride => {
                this.update({ defaultValueOverride });

                return this;
            },
            digitalGroupSpacing          : digitalGroupSpacing => {
                this.update({ digitalGroupSpacing });

                return this;
            },
            digitGroupSeparator          : digitGroupSeparator => {
                this.update({ digitGroupSeparator });

                return this;
            },
            divisorWhenUnfocused         : divisorWhenUnfocused => {
                this.update({ divisorWhenUnfocused });

                return this;
            },
            emptyInputBehavior           : emptyInputBehavior => {
                if (this.rawValue === null && emptyInputBehavior !== AutoNumeric.options.emptyInputBehavior.null) {
                    // Special case : if the current `rawValue` is `null` and the `emptyInputBehavior` is changed to something else than `'null'`, then it makes that `rawValue` invalid.
                    // Here we can either prevent the option update and throw an error, or still accept the option update and update the value from `null` to `''`.
                    // We cannot keep `rawValue` to `null` since if `emptyInputBehavior` is not set to `null`, lots of function assume `rawValue` is a string.
                    AutoNumericHelper.warning(`You are trying to modify the \`emptyInputBehavior\` option to something different than \`'null'\` (${emptyInputBehavior}), but the element raw value is currently set to \`null\`. This would result in an invalid \`rawValue\`. In order to fix that, the element value has been changed to the empty string \`''\`.`, this.settings.showWarnings);
                    this.rawValue = '';
                }

                this.update({ emptyInputBehavior });

                return this;
            },
            eventBubbles                 : eventBubbles => {
                this.settings.eventBubbles = eventBubbles;

                return this;
            },
            eventIsCancelable            : eventIsCancelable => {
                this.settings.eventIsCancelable = eventIsCancelable;

                return this;
            },
            failOnUnknownOption          : failOnUnknownOption => {
                this.settings.failOnUnknownOption = failOnUnknownOption; //FIXME test this

                return this;
            },
            formatOnPageLoad             : formatOnPageLoad => {
                this.settings.formatOnPageLoad = formatOnPageLoad; //FIXME test this

                return this;
            },
            formulaMode                  : formulaMode => {
                this.settings.formulaMode = formulaMode; //FIXME Test this

                return this;
            },
            historySize                  : historySize => {
                this.settings.historySize = historySize;

                return this;
            },
            isCancellable                : isCancellable => {
                this.settings.isCancellable = isCancellable; //FIXME test this

                return this;
            },
            leadingZero                  : leadingZero => {
                this.update({ leadingZero });

                return this;
            },
            maximumValue                 : maximumValue => {
                this.update({ maximumValue });

                return this;
            },
            minimumValue                 : minimumValue => {
                this.update({ minimumValue });

                return this;
            },
            modifyValueOnWheel           : modifyValueOnWheel => {
                this.settings.modifyValueOnWheel = modifyValueOnWheel; //FIXME test this

                return this;
            },
            negativeBracketsTypeOnBlur   : negativeBracketsTypeOnBlur => {
                this.update({ negativeBracketsTypeOnBlur });

                return this;
            },
            negativePositiveSignPlacement: negativePositiveSignPlacement => {
                this.update({ negativePositiveSignPlacement });

                return this;
            },
            negativeSignCharacter        : negativeSignCharacter => {
                this.update({ negativeSignCharacter });

                return this;
            },
            noEventListeners             : noEventListeners => { //FIXME test this
                if (noEventListeners === AutoNumeric.options.noEventListeners.noEvents && this.settings.noEventListeners === AutoNumeric.options.noEventListeners.addEvents) {
                    // Remove the events once
                    this._removeEventListeners();
                }

                this.update({ noEventListeners });

                return this;
            },
            onInvalidPaste               : onInvalidPaste => {
                this.settings.onInvalidPaste = onInvalidPaste; //FIXME test this

                return this;
            },
            outputFormat                 : outputFormat => {
                this.settings.outputFormat = outputFormat;

                return this;
            },
            overrideMinMaxLimits         : overrideMinMaxLimits => {
                this.update({ overrideMinMaxLimits });

                return this;
            },
            positiveSignCharacter        : positiveSignCharacter => {
                this.update({ positiveSignCharacter });

                return this;
            },
            rawValueDivisor              : rawValueDivisor => {
                this.update({ rawValueDivisor });

                return this;
            },
            readOnly                     : readOnly => {
                // When changing the readOnly attribute, the raw and formatted values do not change, so no need to call the costly 'update()` method
                this.settings.readOnly = readOnly;
                this._setWritePermissions();

                return this;
            },
            roundingMethod               : roundingMethod => {
                this.update({ roundingMethod });

                return this;
            },
            saveValueToSessionStorage    : saveValueToSessionStorage => {
                this.update({ saveValueToSessionStorage });

                return this;
            },
            symbolWhenUnfocused          : symbolWhenUnfocused => {
                this.update({ symbolWhenUnfocused });

                return this;
            },
            selectNumberOnly             : selectNumberOnly => {
                this.settings.selectNumberOnly = selectNumberOnly; //FIXME test this

                return this;
            },
            selectOnFocus                : selectOnFocus => {
                this.settings.selectOnFocus = selectOnFocus; //FIXME test this

                return this;
            },
            serializeSpaces              : serializeSpaces => {
                this.settings.serializeSpaces = serializeSpaces; //FIXME test this

                return this;
            },
            showOnlyNumbersOnFocus       : showOnlyNumbersOnFocus => {
                this.update({ showOnlyNumbersOnFocus });

                return this;
            },
            showPositiveSign             : showPositiveSign => {
                this.update({ showPositiveSign });

                return this;
            },
            showWarnings                 : showWarnings => {
                this.settings.showWarnings = showWarnings; //FIXME test this

                return this;
            },
            styleRules                   : styleRules => {
                this.update({ styleRules });

                return this;
            },
            suffixText                   : suffixText => {
                this.update({ suffixText });

                return this;
            },
            unformatOnHover              : unformatOnHover => {
                this.settings.unformatOnHover = unformatOnHover; //FIXME test this

                return this;
            },
            unformatOnSubmit             : unformatOnSubmit => {
                this.settings.unformatOnSubmit = unformatOnSubmit; //FIXME test this

                return this;
            },
            valuesToStrings              : valuesToStrings => {
                this.update({ valuesToStrings });

                return this;
            },
            watchExternalChanges         : watchExternalChanges => { //FIXME test this
                this.update({ watchExternalChanges });

                return this;
            },
            wheelOn                      : wheelOn => {
                this.settings.wheelOn = wheelOn; //FIXME test this

                return this;
            },
            wheelStep                    : wheelStep => {
                this.settings.wheelStep = wheelStep; //FIXME test this

                return this;
            },
        };

        // Once the autoNumeric element has been initialized, broadcast that message with additional info.
        // Note: When using `AutoNumeric.multiple()`, one event is sent *per* element initialized
        this._triggerEvent(AutoNumeric.events.initialized, this.domElement, {
            newValue   : AutoNumericHelper.getElementValue(this.domElement),
            newRawValue: this.rawValue,
            error      : null,
            aNElement  : this,
        });
    }

    /**
     * Return the autoNumeric version number (for debugging purpose)
     *
     * @returns {string}
     */
    static version() {
        return '4.5.4';
    }

    /**
     * Take the parameters given to the AutoNumeric object, and output the three variables that are needed to finish initializing it :
     * - domElement : The target DOM element
     * - initialValue : The initial value, or `null` if none is given
     * - userOptions : The option object
     *
     * @param {object|Array|number|string} arg1
     * @param {object|Array|number|string|null} arg2
     * @param {object|Array|number|string|null} arg3
     * @returns {{domElement: *, initialValue: *, userOptions: *}}
     * @throws
     * @private
     */
    static _setArgumentsValues(arg1, arg2, arg3) {
        // Basic check on the argument count
        if (AutoNumericHelper.isNull(arg1)) {
            AutoNumericHelper.throwError('At least one valid parameter is needed in order to initialize an AutoNumeric object');
        }

        // Prepare the arguments in order to create the AutoNumeric object with the right values
        // Test the argument types
        const isArg1Element = AutoNumericHelper.isElement(arg1);
        const isArg1String = AutoNumericHelper.isString(arg1);

        const isArg2Object = AutoNumericHelper.isObject(arg2);
        const isArg2Array = Array.isArray(arg2) && arg2.length > 0;
        const isArg2Number = AutoNumericHelper.isNumberOrArabic(arg2) || arg2 === '';
        const isArg2PreDefinedOptionName = this._isPreDefinedOptionValid(arg2);
        const isArg2Null = AutoNumericHelper.isNull(arg2);
        const isArg2EmptyString = AutoNumericHelper.isEmptyString(arg2);

        const isArg3Object = AutoNumericHelper.isObject(arg3);
        const isArg3Array = Array.isArray(arg3) && arg3.length > 0;
        const isArg3Null = AutoNumericHelper.isNull(arg3);
        const isArg3PreDefinedOptionName = this._isPreDefinedOptionValid(arg3);

        // Given the parameters passed, sort the data and return a stable state before the initialization
        let domElement;
        let userOptions;
        let initialValue;

        //TODO Simplify those tests -->
        if (isArg1Element && isArg2Null && isArg3Null) {
            // new AutoNumeric(domElement); // With the default options
            domElement = arg1;
            initialValue = null;
            userOptions = null;
        } else if (isArg1Element && isArg2Number && isArg3Null) {
            // new AutoNumeric(domElement, 12345.789); // With the default options, and an initial value
            // new AutoNumeric(domElement, '12345.789');
            domElement = arg1;
            initialValue = arg2;
            userOptions = null;
        } else if (isArg1Element && isArg2Object && isArg3Null) {
            // new AutoNumeric(domElement, { options }); // With one option object
            domElement = arg1;
            initialValue = null;
            userOptions = arg2;
        } else if (isArg1Element && isArg2PreDefinedOptionName && isArg3Null) {
            // new AutoNumeric(domElement, 'euroPos'); // With one pre-defined option name
            domElement = arg1;
            initialValue = null;
            userOptions = this._getOptionObject(arg2);
        } else if (isArg1Element && isArg2Array && isArg3Null) {
            // new AutoNumeric(domElement, [{ options1 }, { options2 }]); // With multiple option objects (the latest option overwriting the previous ones)
            domElement = arg1;
            initialValue = null;
            userOptions = this.mergeOptions(arg2);
        } else if (isArg1Element && (isArg2Null || isArg2EmptyString) && isArg3Object) {
            // new AutoNumeric(domElement, null, { options }); // With one option object
            domElement = arg1;
            initialValue = null;
            userOptions = arg3;
        } else if (isArg1Element && (isArg2Null || isArg2EmptyString) && isArg3Array) {
            // new AutoNumeric(domElement, null, [{ options1 }, { options2 }]); // With multiple option objects
            domElement = arg1;
            initialValue = null;
            userOptions = this.mergeOptions(arg3);
        } else if (isArg1String && isArg2Null && isArg3Null) {
            // new AutoNumeric('.myCssClass > input');
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = null;
        } else if (isArg1String && isArg2Object && isArg3Null) {
            // new AutoNumeric('.myCssClass > input', { options });
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = arg2;
        } else if (isArg1String && isArg2PreDefinedOptionName && isArg3Null) {
            // new AutoNumeric('.myCssClass > input', 'euroPos');
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = this._getOptionObject(arg2);
        } else if (isArg1String && isArg2Array && isArg3Null) {
            // new AutoNumeric('.myCssClass > input', [{ options1 }, { options2 }]); // With multiple option objects
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = this.mergeOptions(arg2);
        } else if (isArg1String && (isArg2Null || isArg2EmptyString) && isArg3Object) {
            // new AutoNumeric('.myCssClass > input', null, { options });
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = arg3;
        } else if (isArg1String && (isArg2Null || isArg2EmptyString) && isArg3Array) {
            // new AutoNumeric('.myCssClass > input', null, [{ options1 }, { options2 }]); // With multiple option objects
            domElement = document.querySelector(arg1);
            initialValue = null;
            userOptions = this.mergeOptions(arg3);
        } else if (isArg1String && isArg2Number && isArg3Null) {
            // new AutoNumeric('.myCssClass > input', 12345.789);
            // new AutoNumeric('.myCssClass > input', '12345.789');
            // new AutoNumeric('.myCssClass > input', '');
            domElement = document.querySelector(arg1);
            initialValue = arg2;
            userOptions = null;
        } else if (isArg1String && isArg2Number && isArg3Object) {
            // new AutoNumeric('.myCssClass > input', 12345.789, { options });
            // new AutoNumeric('.myCssClass > input', '12345.789', { options });
            // new AutoNumeric('.myCssClass > input', '', { options });
            domElement = document.querySelector(arg1);
            initialValue = arg2;
            userOptions = arg3;
        } else if (isArg1String && isArg2Number && isArg3PreDefinedOptionName) {
            // new AutoNumeric('.myCssClass > input', 12345.789, 'euroPos');
            // new AutoNumeric('.myCssClass > input', '12345.789', 'euroPos');
            // new AutoNumeric('.myCssClass > input', '', 'euroPos');
            domElement = document.querySelector(arg1);
            initialValue = arg2;
            userOptions = this._getOptionObject(arg3);
        } else if (isArg1String && isArg2Number && isArg3Array) {
            // new AutoNumeric('.myCssClass > input', 12345.789, [{ options1 }, 'euroPos', { options2 }]);
            // new AutoNumeric('.myCssClass > input', '12345.789', [{ options1 }, 'euroPos', { options2 }]);
            // new AutoNumeric('.myCssClass > input', '', [{ options1 }, 'euroPos', { options2 }]);
            domElement = document.querySelector(arg1);
            initialValue = arg2;
            userOptions = this.mergeOptions(arg3);
        } else if (isArg1Element && isArg2Number && isArg3Object) {
            // new AutoNumeric(domElement, 12345.789, { options });
            // new AutoNumeric(domElement, '12345.789', { options });
            // new AutoNumeric(domElement, '', { options });
            domElement = arg1;
            initialValue = arg2;
            userOptions = arg3;
        } else if (isArg1Element && isArg2Number && isArg3PreDefinedOptionName) {
            // new AutoNumeric(domElement, 12345.789, 'euroPos');
            // new AutoNumeric(domElement, '12345.789', 'euroPos');
            // new AutoNumeric(domElement, '', 'euroPos');
            domElement = arg1;
            initialValue = arg2;
            userOptions = this._getOptionObject(arg3);
        } else if (isArg1Element && isArg2Number && isArg3Array) {
            // new AutoNumeric(domElement, 12345.789, [{ options1 }, { options2 }]);
            // new AutoNumeric(domElement, '12345.789', [{ options1 }, { options2 }]);
            // new AutoNumeric(domElement, '', [{ options1 }, { options2 }]);
            domElement = arg1;
            initialValue = arg2;
            userOptions = this.mergeOptions(arg3);
        } else {
            AutoNumericHelper.throwError(`The parameters given to the AutoNumeric object are not valid, '${arg1}', '${arg2}' and '${arg3}' given.`);
        }

        if (AutoNumericHelper.isNull(domElement)) {
            AutoNumericHelper.throwError(`The selector '${arg1}' did not select any valid DOM element. Please check on which element you called AutoNumeric.`);
        }

        return { domElement, initialValue, userOptions };
    }

    /**
     * Merge the option objects found in the given array `optionsArray`.
     * If a `string` is found, then we try to get the related pre-defined option using that string as its name.
     * When merging the options, the latest option overwrite any previously set. This allows to fine tune a pre-defined option for instance.
     *
     * @param {Array<object|string>} optionsArray
     * @returns {{}}
     */
    static mergeOptions(optionsArray) {
        // This allows the user to use multiple options (strings or objects) in an array, and overwrite the previous one with the next option element ; this is useful to tune the wanted format
        const mergedOptions = {};
        optionsArray.forEach(optionObjectOrPredefinedOptionString => {
            Object.assign(mergedOptions, this._getOptionObject(optionObjectOrPredefinedOptionString));
        });

        return mergedOptions;
    }

    /**
     * Return `true` if the given pre-defined option name is an attribute of the `AutoNumeric.predefinedOptions` object
     *
     * @param {string} preDefinedOptionName
     * @returns {boolean}
     * @private
     */
    static _isPreDefinedOptionValid(preDefinedOptionName) {
        return AutoNumeric.predefinedOptions.hasOwnProperty(preDefinedOptionName);
    }

    /**
     * Return an option object based on the given parameter.
     * If `optionObjectOrPredefinedName` is as string, then we retrieve the pre-defined option object, if it's an object, we use it as is.
     *
     * @param {object|string} optionObjectOrPredefinedName
     * @returns {object}
     */
    static _getOptionObject(optionObjectOrPredefinedName) {
        let options;
        if (AutoNumericHelper.isString(optionObjectOrPredefinedName)) {
            options = AutoNumeric.getPredefinedOptions()[optionObjectOrPredefinedName];
            if (options === void(0) || options === null) {
                // If the given pre-defined name does not exist, warn that something is wrong, and continue the execution of the initialization
                AutoNumericHelper.warning(`The given pre-defined option [${optionObjectOrPredefinedName}] is not recognized by autoNumeric. Please check that pre-defined option name.`, true);
            }
        } else { // A `settings` object
            options = optionObjectOrPredefinedName;
        }

        return options;
    }

    /**
     * Save the initial element values for later use in the pristine test.
     * Those values are :
     * - the html attribute (ie. <input value='42'>), and
     * - the script `value` (ie. `let domElement.value`)
     *
     * @param {null|number|string} initialValue
     * @private
     */
    _saveInitialValues(initialValue) {
        // Keep the very first initial values (in the html attribute and set by the script). This is needed to check if the element is pristine.
        // Save the html attribute 'value'
        this.initialValueHtmlAttribute = AutoNumericHelper.scientificToDecimal(this.domElement.getAttribute('value'));
        if (AutoNumericHelper.isNull(this.initialValueHtmlAttribute)) {
            // Set the default empty value attribute instead of `null`, since if the initial value is null, the empty string is used
            this.initialValueHtmlAttribute = '';
        }

        // Save the 'script' value
        this.initialValue = initialValue;
        if (AutoNumericHelper.isNull(this.initialValue)) {
            // Same as above
            this.initialValue = '';
        }
    }

    /**
     * Generate all the event listeners for the given DOM element
     * @private
     */
    _createEventListeners() {
        this.formulaMode = false;
        // Create references to the event handler functions, so we can then cleanly removes those listeners if needed
        // That would not be possible if we used closures directly in the event handler declarations
        this._onFocusInFunc = e => { this._onFocusIn(e); };
        this._onFocusInAndMouseEnterFunc = e => { this._onFocusInAndMouseEnter(e); };
        this._onFocusFunc = () => { this._onFocus(); };
        this._onKeydownFunc = e => { this._onKeydown(e); };
        this._onKeypressFunc = e => { this._onKeypress(e); };
        this._onKeyupFunc = e => { this._onKeyup(e); };
        this._onFocusOutAndMouseLeaveFunc = e => { this._onFocusOutAndMouseLeave(e); };
        this._onPasteFunc = e => { this._onPaste(e); };
        this._onWheelFunc = e => { this._onWheel(e); };
        this._onDropFunc = e => { this._onDrop(e); };
        this._onKeydownGlobalFunc = e => { this._onKeydownGlobal(e); };
        this._onKeyupGlobalFunc = e => { this._onKeyupGlobal(e); };

        // Add the event listeners
        this.domElement.addEventListener('focusin', this._onFocusInFunc, false);
        this.domElement.addEventListener('focus', this._onFocusInAndMouseEnterFunc, false);
        this.domElement.addEventListener('focus', this._onFocusFunc, false);
        this.domElement.addEventListener('mouseenter', this._onFocusInAndMouseEnterFunc, false);
        this.domElement.addEventListener('keydown', this._onKeydownFunc, false);
        this.domElement.addEventListener('keypress', this._onKeypressFunc, false);
        this.domElement.addEventListener('keyup', this._onKeyupFunc, false);
        this.domElement.addEventListener('blur', this._onFocusOutAndMouseLeaveFunc, false);
        this.domElement.addEventListener('mouseleave', this._onFocusOutAndMouseLeaveFunc, false);
        this.domElement.addEventListener('paste', this._onPasteFunc, false);
        this.domElement.addEventListener('wheel', this._onWheelFunc, false);
        this.domElement.addEventListener('drop', this._onDropFunc, false);
        this._setupFormListener();

        // Keep track if the event listeners have been initialized on this object
        this.hasEventListeners = true;

        // Create one global event listener for the keyup event on the document object, which will be shared by all the autoNumeric elements
        if (!AutoNumeric._doesGlobalListExists()) {
            document.addEventListener('keydown', this._onKeydownGlobalFunc, false);
            document.addEventListener('keyup', this._onKeyupGlobalFunc, false);
        }
    }

    /**
     * Remove all the autoNumeric-related event listeners for the given DOM element
     * @private
     */
    _removeEventListeners() {
        this.domElement.removeEventListener('focusin', this._onFocusInFunc, false);
        this.domElement.removeEventListener('focus', this._onFocusInAndMouseEnterFunc, false);
        this.domElement.removeEventListener('focus', this._onFocusFunc, false);
        this.domElement.removeEventListener('mouseenter', this._onFocusInAndMouseEnterFunc, false);
        this.domElement.removeEventListener('blur', this._onFocusOutAndMouseLeaveFunc, false);
        this.domElement.removeEventListener('mouseleave', this._onFocusOutAndMouseLeaveFunc, false);
        this.domElement.removeEventListener('keydown', this._onKeydownFunc, false);
        this.domElement.removeEventListener('keypress', this._onKeypressFunc, false);
        this.domElement.removeEventListener('keyup', this._onKeyupFunc, false);
        this.domElement.removeEventListener('paste', this._onPasteFunc, false);
        this.domElement.removeEventListener('wheel', this._onWheelFunc, false);
        this.domElement.removeEventListener('drop', this._onDropFunc, false);
        this._removeFormListener();

        // Keep track if the event listeners have been initialized on this object
        this.hasEventListeners = false;

        document.removeEventListener('keydown', this._onKeydownGlobalFunc, false);
        document.removeEventListener('keyup', this._onKeyupGlobalFunc, false);
    }

    /**
     * Toggle the event listeners according to the `noEventListeners` option, if those were not activated/deactivated before
     * @private
     */
    _updateEventListeners() {
        if (!this.settings.noEventListeners && !this.hasEventListeners) {
            // Special case where an update is done on an element that did not activate its event listeners in the first place
            // ie. when an element is first created with `contenteditable="false"`, then an update is done with `anElement.french()`
            this._createEventListeners();
        }

        if (this.settings.noEventListeners && this.hasEventListeners) {
            this._removeEventListeners();
        }
    }

    /**
     * Mark the parent <form> so that other AutoNumeric object will not add more listeners.
     * Add a counter so that when removing the AutoNumeric object, we only remove the submit listener if that count is equal to 0.
     * Also keep a reference to the 'submit' event handler function to be able to remove that handler later if the `_removeFormListener()` function is called from another AutoNumeric object.
     *
     * @private
     */
    _setupFormListener() {
        if (!AutoNumericHelper.isNull(this.parentForm)) {
            // Setup the handler function
            this._onFormSubmitFunc = () => { this._onFormSubmit(); };
            this._onFormResetFunc = () => { this._onFormReset(); };

            // Check if the parent form already has the AutoNumeric mark
            if (this._hasParentFormCounter()) {
                this._incrementParentFormCounter();
            } else {
                // If not, add the counter
                this._initializeFormCounterToOne();
                // And add the submit and reset event listeners
                this.parentForm.addEventListener('submit', this._onFormSubmitFunc, false);
                this.parentForm.addEventListener('reset', this._onFormResetFunc, false);
                // Also keep a reference to the handler function so that we can remove it later
                this._storeFormHandlerFunction();
            }
        }
    }

    /**
     * Remove the form 'submit' event listener, as well as the `dataset` info (`anCount` and `anFormHandler`) from the parent form, only when there are only one AutoNumeric child element left in that <form>.
     * Otherwise decrement the `anCount`.
     *
     * @private
     */
    _removeFormListener() {
        if (!AutoNumericHelper.isNull(this.parentForm)) {
            // Check the parent form counter value
            const anCount = this._getParentFormCounter();

            if (anCount === 1) {
                // If it's 1, remove the listeners
                this.parentForm.removeEventListener('submit', this._getFormHandlerFunction().submitFn, false);
                this.parentForm.removeEventListener('reset', this._getFormHandlerFunction().resetFn, false);
                // Also remove the dataset info
                this._removeFormDataSetInfo();
            } else if (anCount > 1) {
                // Otherwise if it's >1 decrement the counter
                this._decrementParentFormCounter();
            } else {
                // If it's <1, throw an error
                AutoNumericHelper.throwError(`The AutoNumeric object count on the form is incoherent.`);
            }
        }
    }

    /**
     * Return `true` if the parent form has the form counter attribute
     *
     * @returns {boolean}
     * @private
     */
    _hasParentFormCounter() {
        return 'anCount' in this.parentForm.dataset;
    }

    /**
     * Return the count of AutoNumeric form children
     *
     * @returns {number}
     * @private
     */
    _getParentFormCounter() {
        return Number(this.parentForm.dataset.anCount);
    }

    /**
     * Set the count of AutoNumeric form children to 1 for the given form element, or if none are passed, the current `this.parentForm` one.
     *
     * @param {HTMLFormElement|null} formElement
     * @private
     */
    _initializeFormCounterToOne(formElement = null) {
        this._getFormElement(formElement).dataset.anCount = 1;
    }

    /**
     * Increment the AutoNumeric form children count for the given form element, or if none are passed, the current `this.parentForm` one.
     *
     * @param {HTMLFormElement|null} formElement
     * @private
     */
    _incrementParentFormCounter(formElement = null) {
        this._getFormElement(formElement).dataset.anCount++;
    }

    /**
     * Decrement the AutoNumeric form children count for the current `this.parentForm` form element.
     *
     * @private
     */
    _decrementParentFormCounter() {
        this.parentForm.dataset.anCount--;
    }

    /**
     * Return `true` if the global form handler list exists on the `window` object.
     *
     * @returns {boolean}
     * @private
     */
    static _doesFormHandlerListExists() {
        const type = typeof window.aNFormHandlerMap;

        return type !== 'undefined' && type === 'object';
    }

    /**
     * Create the global form handler list on the `window` object.
     *
     * @private
     */
    static _createFormHandlerList() {
        window.aNFormHandlerMap = new Map(); // I would have used a `WeakMap` here, but that does not allow using non-object for keys
    }

    /**
     * Return `true` if the given form element, or if none are passed, the current `this.parentForm` one has a form handler name.
     *
     * @param {HTMLFormElement|null} formElement
     * @returns {boolean}
     * @private
     */
    _hasFormHandlerFunction(formElement = null) {
        return 'anFormHandler' in this._getFormElement(formElement).dataset;
    }

    /**
     * Return the given form element, or defaults to `this.parentForm` if no argument is passed.
     *
     * @param {HTMLFormElement|null} formElement
     * @returns {*}
     * @private
     */
    _getFormElement(formElement = null) {
        let formElementToUse;
        if (!AutoNumericHelper.isNull(formElement)) {
            formElementToUse = formElement;
        } else {
            formElementToUse = this.parentForm;
        }

        return formElementToUse;
    }

    /**
     * Generate a form handler unique name and store it in the global form handler list.
     * This also save that name in the dataset of the given form element.
     *
     * @param {HTMLFormElement|null} formElement
     * @private
     */
    _storeFormHandlerFunction(formElement = null) {
        // Create the weakMap if it does not exist
        if (!this.constructor._doesFormHandlerListExists()) {
            this.constructor._createFormHandlerList();
        }

        // Generate a unique name and save it in the form dataset
        const formHandlerName = AutoNumericHelper.randomString();
        this._getFormElement(formElement).dataset.anFormHandler = formHandlerName;

        // Add the form handler name and handle function reference to the WeakMap
        window.aNFormHandlerMap.set(formHandlerName, { submitFn: this._onFormSubmitFunc, resetFn: this._onFormResetFunc });
    }

    /**
     * Return the form handler key name from the parent form element, for the global form handler list.
     *
     * @returns {string|*}
     * @private
     */
    _getFormHandlerKey() {
        if (!this._hasFormHandlerFunction()) {
            AutoNumericHelper.throwError(`Unable to retrieve the form handler name`);
        }

        const formHandlerName = this.parentForm.dataset.anFormHandler;
        if (formHandlerName === '') {
            AutoNumericHelper.throwError(`The form handler name is invalid`);
        }

        return formHandlerName;
    }

    /**
     * Return the 'submit' event handler function used for the parent form.
     *
     * @returns {function}
     * @private
     */
    _getFormHandlerFunction() {
        const formHandlerName = this._getFormHandlerKey();

        return window.aNFormHandlerMap.get(formHandlerName);
    }

    /**
     * Remove the dataset attributes `data-an-count` and `data-an-form-handler` from the parent form element.
     *
     * @private
     */
    _removeFormDataSetInfo() {
        // Just in case, set the counter to 0
        this._decrementParentFormCounter();
        // Remove the form handler function from the FormHandlerFunction Map
        window.aNFormHandlerMap.delete(this._getFormHandlerKey());
        // Lastly, remove the dataset attributes
        this.parentForm.removeAttribute('data-an-count');
        this.parentForm.removeAttribute('data-an-form-handler');
    }

    /**
     * Set the DOM element write permissions according to the current settings, by setting the `readonly` or `contenteditable` attributes depending of its tag type.
     * If the `useHtmlAttribute` parameter is set to `true`, then the `readonly` html attribute is used and has precedence over the `readOnly` option to set the element as read-only.
     *
     * @param {boolean} useHtmlAttribute If set to `true`, then the write permissions are set by taking into account the html 'readonly' attribute, even if the `readOnly` option is set to false
     * @private
     */
    _setWritePermissions(useHtmlAttribute = false) {
        if ((useHtmlAttribute && this.domElement.readOnly) || this.settings.readOnly) {
            this._setReadOnly();
        } else {
            this._setReadWrite();
        }
    }

    /**
     * Set the element to be read-only.
     * If the DOM element tag is not an `input`, then it `contenteditable` attribute is set to `false`.
     *
     * @private
     */
    _setReadOnly() {
        if (this.isInputElement) {
            this.domElement.readOnly = true;
        } else {
            this.domElement.setAttribute('contenteditable', false);
        }
    }

    /**
     * Set the element to be read-write.
     *
     * @private
     */
    _setReadWrite() {
        if (this.isInputElement) {
            this.domElement.readOnly = false;
        } else {
            this.domElement.setAttribute('contenteditable', true);
        }
    }

    /**
     * Add a watcher so that any external change to the AutoNumeric-managed element would be detected.
     * As soon as such change is detected, AutoNumeric then tries to `set()` the value so that it gets formatted and stored in the history.
     * //XXX For now, this only works when watching the `value` attribute, not the `textContent` one
     * @private
     */
    _addWatcher() {
        // `getterSetter` can be undefined when a non-input element is used
        if (!AutoNumericHelper.isUndefined(this.getterSetter)) {
            const { set: setter, get: getter } = this.getterSetter;
            Object.defineProperty(this.domElement, this.attributeToWatch, {
                configurable: true, // This is needed in some rare cases
                get         : () => getter.call(this.domElement),
                set         : val => {
                    setter.call(this.domElement, val);
                    // Only `set()` the value if the modification comes from an external source
                    if (this.settings.watchExternalChanges && !this.internalModification) {
                        this.set(val);
                    }
                },
            });
        }

        //FIXME The code above fails for the `textContent` attribute since `this.getterSetter` is undefined when using `getOwnPropertyDescriptor()`
        /* //XXX The code below *almost* work for the textContent, but breaks some unit tests
        this.valueWatched = this.domElement[this.attributeToWatch];
        Object.defineProperty(this.domElement, this.attributeToWatch, {
            configurable: true, // This is needed in some rare cases
            get         : () => this.valueWatched,
            set         : val => {
                this.valueWatched = val;
                // Only `set()` the value if the modification comes from an external source
                if (this.settings.watchExternalChanges && !this.internalModification) {
                    this.set(val);
                }
            },
        });
        */
    }

    /**
     * Remove the watcher on the AutoNumeric-managed element
     * Note: This needs to be called when the AutoNumeric element is 'removed', otherwise the getter/setter stays on the DOM element and that can lead to problem if the user initialize another AutoNumeric object on it.
     * @private
     */
    _removeWatcher() {
        // `getterSetter` can be undefined when a non-input element is used
        if (!AutoNumericHelper.isUndefined(this.getterSetter)) {
            const { set: setter, get: getter } = this.getterSetter;
            Object.defineProperty(this.domElement, this.attributeToWatch, {
                configurable: true, // This is needed in some rare cases
                get         : () => getter.call(this.domElement),
                set         : val => {
                    setter.call(this.domElement, val);
                },
            });
        }

        //FIXME The code above fails for the `textContent` attribute since `this.getterSetter` is undefined when using `getOwnPropertyDescriptor()`
        /* //XXX The code below *almost* work for the textContent, but breaks some unit tests
        this.valueWatched = this.domElement[this.attributeToWatch];
        Object.defineProperty(this.domElement, this.attributeToWatch, {
            configurable: true, // This is needed in some rare cases
            get         : () => this.valueWatched,
            set         : val => {
                this.valueWatched = val;
            },
        });
        */
    }

    /**
     * Return the name of the object attribute that store the current formatted data in the DOM element.
     *
     * @returns {string}
     * @private
     */
    _getAttributeToWatch() {
        let attributeToWatch;
        if (this.isInputElement) {
            attributeToWatch = 'value';
        } else {
            const nodeType = this.domElement.nodeType;
            if (nodeType === Node.ELEMENT_NODE ||
                nodeType === Node.DOCUMENT_NODE ||
                nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                attributeToWatch = 'textContent';
            } else if (nodeType === Node.TEXT_NODE) {
                attributeToWatch = 'nodeValue';
            }
        }

        return attributeToWatch;
    }

    /**
     * Save the current raw value into the history table, along with the selection information.
     *
     * If the user has done some undos and tries to enter:
     * - a new and different number than the 'next' state, this drops the rest of the history table
     * - the very same number that result in the same rawValue than the 'next' state, we only move the history table pointer to the next state
     *
     * @private
     */
    _historyTableAdd() {
        //TODO Add a `this.settings.saveSelectionsIntoHistory` option to prevent saving the selections (in order to gain performance)
        const isEmptyHistoryTable = this.historyTable.length === 0;
        // Only add a new value if it's different than the previous one (to prevent infinitely adding values on mouseover for instance)
        if (isEmptyHistoryTable || this.rawValue !== this._historyTableCurrentValueUsed()) {
            // Trim the history table if the user changed the value of an intermediary state
            let addNewHistoryState = true;
            if (!isEmptyHistoryTable) {
                // If some undo has been done and the user type the exact same data than the next entry after the current history pointer, do no drop the rest of the 'redo' list, and just advance the historyTableIndex
                const nextHistoryStateIndex = this.historyTableIndex + 1;
                if (nextHistoryStateIndex < this.historyTable.length && this.rawValue === this.historyTable[nextHistoryStateIndex].value) {
                    // If the character input result in the same state than the next one, do not remove the next history states nor add a new one
                    addNewHistoryState = false;
                } else {
                    // First remove anything that is after the current index
                    AutoNumericHelper.arrayTrim(this.historyTable, this.historyTableIndex + 1);
                }
            }

            // Update the history pointer
            this.historyTableIndex++;

            // Add the new history state, if needed
            if (addNewHistoryState) {
                // Save the selection info
                const selection = AutoNumericHelper.getElementSelection(this.domElement);
                this.selectionStart = selection.start;
                this.selectionEnd = selection.end;

                // Then add the new raw value
                this.historyTable.push({
                    // Save the rawValue and selection start/end
                    value: this.rawValue,
                    // The selection for this element is temporary, and will be updated when the next history state will be recorded.
                    // That way, we are always sure we save the last caret or selection positions just before the value is changed. Otherwise we would only save those positions when the value is first changed, and would not take into account that the user could move the caret around afterward.
                    // For instance, this is needed if the user change the element value, and immediately undo it ; if he then does a redo, he'll see the value and the right selection
                    // To sum up; The selection position are not always +1 character, since it could also be '2' if a group separator is added when entering one character. That's why the current history state caret/selection position is updated on each `keyup` event.
                    start: this.selectionStart + 1, // Here we add one since the user added one character too
                    end  : this.selectionEnd + 1,
                });

                // Update the selection in the previous entry, in order to keep track of the updated caret/selection positions
                if (this.historyTable.length > 1) {
                    this.historyTable[this.historyTableIndex - 1].start = this.selectionStart;
                    this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd;
                }
            }

            // Limit the history table size according to the `historySize` option
            if (this.historyTable.length > this.settings.historySize) {
                this._historyTableForget();
            }
        }
    }

    /**
     * Debug function for the history table
     * @private
     */
    /*
    _debugHistoryTable() {
        let i = 0;
        let mark;
        this.historyTable.forEach(history => {
            if (this.historyTableIndex === i) {
                mark = '> ';
            } else {
                mark = '';
            }
            console.log(`${mark}${i++}: ${history.value} ${history.start}|${history.end} [onGoingRedo: ${this.onGoingRedo}]`); //DEBUG
        });
    }
    */

    /**
     * 'Undo' or 'Redo' the last/next user entry in the history table.
     * This does not modify the history table, only the pointer to the current state.
     *
     * @param {boolean} undo If set to `true`, then this function does an 'Undo', otherwise it does a 'Redo'
     * @private
     */
    _historyTableUndoOrRedo(undo = true) {
        let check;
        if (undo) {
            // Only 'undo' if there are some info to undo
            check = this.historyTableIndex > 0;
            if (check) {
                this.historyTableIndex--;
            }
        } else {
            // Only 'redo' if there are some info to redo at the end of the history table
            check = this.historyTableIndex + 1 < this.historyTable.length;
            if (check) {
                this.historyTableIndex++;
            }
        }

        if (check) {
            // Set the value back
            const undoInfo = this.historyTable[this.historyTableIndex];
            this.set(undoInfo.value, null, false); // next or previous raw value

            // Set the selection back
            AutoNumericHelper.setElementSelection(this.domElement, undoInfo.start, undoInfo.end);
        }
    }

    /**
     * 'Undo' the last user entry by going back one entry in the history table.
     * This keeps the following entries in order to allow for a 'redo'.
     * This does not modify the history table, only the pointer to the current state.
     * @private
     */
    _historyTableUndo() {
        this._historyTableUndoOrRedo(true);
    }

    /**
     * 'Redo' the next user entry in the history table.
     * This does not modify the history table, only the pointer to the current state.
     * @private
     */
    _historyTableRedo() {
        this._historyTableUndoOrRedo(false);
    }

    /**
     * Reset the history table to its initial state, and select the value.
     * @private
     */
    /*
    resetHistoryTable() { //FIXME Test this
        this.set(this.rawValue, null, false);
        this.select();
        const selection = AutoNumericHelper.getElementSelection(this.domElement);
        this.historyTableIndex = 0;
        this.historyTable = [{
            // Save the rawValue and selection start/end
            value: this.rawValue,
            start: selection.start,
            end  : selection.end,
        }];
    }
    */

    /**
     * Make the history table forget its first N elements, shifting its indexes in the process.
     * `N` being given as the `numberOfEntriesToForget` parameter.
     *
     * @param {Number} numberOfEntriesToForget
     * @returns {object|Array<object>} The discarded objects, in an Array.
     * @private
     */
    _historyTableForget(numberOfEntriesToForget = 1) {
        const shiftedAway = [];
        for (let i = 0; i < numberOfEntriesToForget; i++) {
            shiftedAway.push(this.historyTable.shift());
            // Update the history table index accordingly
            this.historyTableIndex--;
            if (this.historyTableIndex < 0) {
                // In case this function is called more times than there is states in the history table
                this.historyTableIndex = 0;
            }
        }

        if (shiftedAway.length === 1) {
            return shiftedAway[0];
        }

        return shiftedAway;
    }

    /**
     * Return the currently used value from the history table.
     *
     * @returns {string|number}
     * @private
     */
    _historyTableCurrentValueUsed() {
        let indexToUse = this.historyTableIndex;
        if (indexToUse < 0) {
            indexToUse = 0;
        }

        let result;
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(this.historyTable[indexToUse])) {
            result = '';
        } else {
            result = this.historyTable[indexToUse].value;
        }

        return result;
    }

    /**
     * Parse the `styleRules` option and run the test for each given rules, either pre-defined ones like `positive`, `negative` and `ranges`, or user defined callbacks within the `userDefined` attribute.
     * @private
     */
    _parseStyleRules() {
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(this.settings.styleRules) || this.rawValue === '') {
            return;
        }

        // 'positive' attribute
        if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive)) {
            if (this.rawValue >= 0) {
                this._addCSSClass(this.settings.styleRules.positive);
            } else {
                this._removeCSSClass(this.settings.styleRules.positive);
            }
        }

        // 'negative' attribute
        if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative)) {
            if (this.rawValue < 0) {
                this._addCSSClass(this.settings.styleRules.negative);
            } else {
                this._removeCSSClass(this.settings.styleRules.negative);
            }
        }

        // 'ranges' attribute
        if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) && this.settings.styleRules.ranges.length !== 0) {
            this.settings.styleRules.ranges.forEach(range => {
                if (this.rawValue >= range.min && this.rawValue < range.max) {
                    this._addCSSClass(range.class);
                } else {
                    this._removeCSSClass(range.class);
                }
            });
        }

        // 'userDefined' attribute
        //TODO Also pass the old raw value as a parameter, and not only the new raw value
        if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) && this.settings.styleRules.userDefined.length !== 0) {
            this.settings.styleRules.userDefined.forEach(userObject => {
                if (AutoNumericHelper.isFunction(userObject.callback)) {
                    // Test for the type of the `classes` attribute, which changes the function behavior
                    if (AutoNumericHelper.isString(userObject.classes)) {
                        // If 'classes' is a string, set it if `true`, remove it if `false`
                        if (userObject.callback(this.rawValue)) {
                            this._addCSSClass(userObject.classes);
                        } else {
                            this._removeCSSClass(userObject.classes);
                        }
                    } else if (AutoNumericHelper.isArray(userObject.classes)) {
                        if (userObject.classes.length === 2) {
                            // If 'classes' is an array with only 2 elements, set the first class if `true`, the second if `false`
                            if (userObject.callback(this.rawValue)) {
                                this._addCSSClass(userObject.classes[0]);
                                this._removeCSSClass(userObject.classes[1]);
                            } else {
                                this._removeCSSClass(userObject.classes[0]);
                                this._addCSSClass(userObject.classes[1]);
                            }
                        } else if (userObject.classes.length > 2) {
                            // The callback returns an array of indexes to use on the `classes` array
                            const callbackResult = userObject.callback(this.rawValue);
                            if (AutoNumericHelper.isArray(callbackResult)) {
                                // If multiple indexes are returned
                                userObject.classes.forEach((userClass, index) => {
                                    if (AutoNumericHelper.isInArray(index, callbackResult)) {
                                        this._addCSSClass(userClass);
                                    } else {
                                        this._removeCSSClass(userClass);
                                    }
                                });
                            } else if (AutoNumericHelper.isInt(callbackResult)) {
                                // If only one index is returned
                                userObject.classes.forEach((userClass, index) => {
                                    if (index === callbackResult) {
                                        this._addCSSClass(userClass);
                                    } else {
                                        this._removeCSSClass(userClass);
                                    }
                                });
                            } else if (AutoNumericHelper.isNull(callbackResult)) {
                                // Remove all the classes
                                userObject.classes.forEach(userClass => {
                                    this._removeCSSClass(userClass);
                                });
                            } else {
                                AutoNumericHelper.throwError(`The callback result is not an array nor a valid array index, ${typeof callbackResult} given.`);
                            }
                        } else {
                            AutoNumericHelper.throwError('The classes attribute is not valid for the `styleRules` option.');
                        }
                    } else if (AutoNumericHelper.isUndefinedOrNullOrEmpty(userObject.classes)) {
                        // If 'classes' is `undefined` or `null`, then the callback is called with the AutoNumeric object passed as a parameter
                        userObject.callback(this);
                    } else {
                        AutoNumericHelper.throwError('The callback/classes structure is not valid for the `styleRules` option.');
                    }
                } else {
                    AutoNumericHelper.warning(`The given \`styleRules\` callback is not a function, ${typeof callback} given.`, this.settings.showWarnings);
                }
            });
        }
    }

    /**
     * Add the given CSS class to the DOM element.
     *
     * @param {string} cssClassName
     * @private
     */
    _addCSSClass(cssClassName) {
        this.domElement.classList.add(cssClassName);
    }

    /**
     * Remove the given CSS class from the DOM element.
     *
     * @param {string} cssClassName
     * @private
     */
    _removeCSSClass(cssClassName) {
        this.domElement.classList.remove(cssClassName);
    }

    // This are the public function available on each autoNumeric-managed element

    /**
     * Method that updates the AutoNumeric settings, and immediately format the element accordingly.
     * The options passed as parameter(s) is either one or many objects that each contains some settings, ie. :
     * {
     *     digitGroupSeparator: ".",
     *     decimalCharacter: ",",
     *     currencySymbol: '€ ',
     * }
     * If multiple options are passed, the latter overwrite the previous ones.
     *
     * Note: If the new settings are not validated, or the call to `set()` fails, then the previous valid settings are reverted back to.
     *
     * @example anElement.update({ options }) // Updates the settings
     * @example anElement.update({ options1 }, { options2 }) // Updates the settings with multiple option objects
     * @example anElement.update([{ options1 }, { options2 }]) // Updates the settings with multiple option objects in a single array
     *
     * @param {object|string|array} newOptions
     * @returns {AutoNumeric}
     */
    update(...newOptions) {
        if (Array.isArray(newOptions) && Array.isArray(newOptions[0])) {
            // Allows to pass a single array of options
            newOptions = newOptions[0];
        }

        // Keep a copy of the original settings before changing them, in case they do not validate correctly, so we can switch back to them
        const originalSettings = AutoNumericHelper.cloneObject(this.settings); //TODO Check that the `styleRules` option is correctly cloned (due to depth cloning limitation)

        // Store the current unformatted input value
        const numericString = this.rawValue;

        // Generate a single option object with the settings from the latter overwriting those from the former
        let optionsToUse = {};
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(newOptions) || newOptions.length === 0) {
            optionsToUse = null;
        } else if (newOptions.length >= 1) {
            newOptions.forEach(optionObject => {
                if (this.constructor._isPreDefinedOptionValid(optionObject)) {
                    // The option object is a predefined option name (ie. 'euro')
                    optionObject = this.constructor._getOptionObject(optionObject);
                }

                Object.assign(optionsToUse, optionObject);
            });
        }

        // Update the settings
        try {
            this._setSettings(optionsToUse, true);
            this._setWritePermissions(); // Update the read/write permissions
            this._updateEventListeners();

            // Reformat the input value with the new settings
            // Note: we always `set`, even when `numericString` is the empty string '', since `emptyInputBehavior` (set to `always` or `zero`) can change how the empty input is formatted
            this.set(numericString);
        } catch (error) {
            // If the settings validation fails, then we switch back to the previous valid settings
            this._setSettings(originalSettings, true); // `_setSettings()` is used here instead of directly doing `this.settings = originalSettings;` since lots of side variables are calculated from the settings, and we need to get those back to their previous state. Note: `_setSettings()` is called in the 'update' mode in order to correctly set back the `originalDecimalPlacesRawValue` value.
            AutoNumericHelper.throwError(`Unable to update the settings, those are invalid: [${error}]`);

            return this;
        }

        return this;
    }

    /**
     * Return the options object containing all the current autoNumeric settings in effect.
     * You can then directly access each option by using its name : `anElement.getSettings().optionNameAutoCompleted`.
     *
     * @example
     * anElement.getSettings()
     * anElement.getSettings().decimalCharacter // Return the decimalCharacter setting as a string - any valid option name can be used
     *
     * @returns {object}
     */
    getSettings() {
        return this.settings;
    }

    /**
     * Set the given element value, and format it immediately.
     * Additionally, this `set()` method can accept options that will be merged into the current AutoNumeric element, taking precedence over any previous settings.
     *
     * @example anElement.set('12345.67') // Formats the value
     * @example anElement.set(12345.67) // Formats the value
     * @example anElement.set(12345.67, { decimalCharacter : ',' }) // Update the settings and formats the value in one go
     * @example anElement.northAmerican().set('$12,345.67') // Set an already formatted value (this does not _exactly_ respect the currency symbol/negative placements, but only remove all non-numbers characters, according to the ones given in the settings)
     * @example anElement.set(null) // Set the rawValue and element value to `null`
     *
     * @param {number|string|null} newValue The value must be a Number, a numeric string or `null` (if `emptyInputBehavior` is set to `'null'`)
     * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
     * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history table
     * @returns {AutoNumeric}
     * @throws
     */
    set(newValue, options = null, saveChangeToHistory = true) {
        //TODO Add the `saveSettings` options. If `true`, then when `options` is passed, then it overwrite the current `this.settings`. If `false` the `options` are only used once and `this.settings` is not modified
        if (AutoNumericHelper.isUndefined(newValue)) {
            AutoNumericHelper.warning(`You are trying to set an 'undefined' value ; an error could have occurred.`, this.settings.showWarnings);
            return this;
        }

        // The options update is done only if the `newValue` is not `undefined`
        if (!AutoNumericHelper.isNull(options)) {
            this._setSettings(options, true); // We do not call `update` here since this would call `set` too
        }

        if (newValue === null && this.settings.emptyInputBehavior !== AutoNumeric.options.emptyInputBehavior.null) {
            AutoNumericHelper.warning(`You are trying to set the \`null\` value while the \`emptyInputBehavior\` option is set to ${this.settings.emptyInputBehavior}. If you want to be able to set the \`null\` value, you need to change the 'emptyInputBehavior' option to \`'null'\`.`, this.settings.showWarnings);
            return this;
        }

        let value;
        if (newValue === null) {
            //TODO Merge this into a global `if (newValue === null) {` test, with the test above
            // Here this.settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.null
            this._setElementAndRawValue(null, null, saveChangeToHistory);
            this._saveValueToPersistentStorage();

            return this;
        }

        value = this.constructor._toNumericValue(newValue, this.settings);
        if (isNaN(Number(value))) {
            //TODO Do not modify the element value if the newValue results in `NaN`. Make sure the settings, if modified, are revert back too.
            AutoNumericHelper.warning(`The value you are trying to set results in \`NaN\`. The element value is set to the empty string instead.`, this.settings.showWarnings);
            this.setValue('', saveChangeToHistory);

            return this;
        }

        if (value === '') {
            switch (this.settings.emptyInputBehavior) {
                case AutoNumeric.options.emptyInputBehavior.zero:
                    value = 0;
                    break;
                case AutoNumeric.options.emptyInputBehavior.min:
                    value = this.settings.minimumValue;
                    break;
                case AutoNumeric.options.emptyInputBehavior.max:
                    value = this.settings.maximumValue;
                    break;
                default:
                    if (AutoNumericHelper.isNumber(this.settings.emptyInputBehavior)) {
                        value = Number(this.settings.emptyInputBehavior);
                    }
            }
        }

        if (value !== '') {
            const [minTest, maxTest] = this.constructor._checkIfInRangeWithOverrideOption(value, this.settings);

            // Modify the formatted value if the rawValue is found in the `valuesToStrings` option
            if (minTest && maxTest && this.settings.valuesToStrings && this._checkValuesToStrings(value)) {
                // Set the raw value normally, and the formatted value with the corresponding string
                this._setElementAndRawValue(this.settings.valuesToStrings[value], value, saveChangeToHistory);
                this._saveValueToPersistentStorage();

                return this;
            }

            // This test is needed by the `showPositiveSign` option
            const isZero = AutoNumericHelper.isZeroOrHasNoValue(value);
            if (isZero) {
                value = '0';
            }

            if (minTest && maxTest) {
                let forcedRawValue = this.constructor._roundRawValue(value, this.settings);
                forcedRawValue = this._trimLeadingAndTrailingZeros(forcedRawValue.replace(this.settings.decimalCharacter, '.')); // Move the `setRawValue` call after the `setElementValue` one
                value = this._getRawValueToFormat(value); // Multiply the raw value to obtain the formatted value

                // Round the given value according to the object state (focused/unfocused)
                if (this.isFocused) {
                    value = this.constructor._roundFormattedValueShownOnFocus(value, this.settings);
                } else {
                    if (this.settings.divisorWhenUnfocused) {
                        value = value / this.settings.divisorWhenUnfocused;
                        value = value.toString();
                    }

                    value = this.constructor._roundFormattedValueShownOnBlur(value, this.settings);
                }

                value = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(value, this.settings);
                value = this.constructor._addGroupSeparators(value, this.settings, this.isFocused, this.rawValue, forcedRawValue);
                if (!this.isFocused && this.settings.symbolWhenUnfocused) {
                    value = `${value}${this.settings.symbolWhenUnfocused}`;
                }

                if (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) {
                    this._saveValueToPersistentStorage();
                }

                this._setElementAndRawValue(value, forcedRawValue, saveChangeToHistory);

                return this;
            } else {
                if (!minTest) {
                    this._triggerEvent(AutoNumeric.events.minRangeExceeded, this.domElement);
                }

                if (!maxTest) {
                    this._triggerEvent(AutoNumeric.events.maxRangeExceeded, this.domElement);
                }

                AutoNumericHelper.throwError(`The value [${value}] being set falls outside of the minimumValue [${this.settings.minimumValue}] and maximumValue [${this.settings.maximumValue}] range set for this element`);

                this._removeValueFromPersistentStorage();
                this.setValue('', saveChangeToHistory); //TODO Shouldn't we just drop that faulty newValue and keep the previous one? This is behind a `throwError()` call anyway..

                return this;
            }
        } else {
            // Here, `value` equal the empty string `''`
            let result;
            if (this.settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.always) {
                // Keep the currency symbol as per emptyInputBehavior
                result = this.settings.currencySymbol;
            } else {
                result = '';
            }

            this._setElementAndRawValue(result, '', saveChangeToHistory);

            return this;
        }
    }

    /**
     * Set the given value directly as the DOM element value, without formatting it beforehand.
     * You can also set the value and update the setting in one go (the value will again not be formatted immediately).
     *
     * @param {number|string} value
     * @param {object} options
     * @returns {AutoNumeric}
     * @throws
     */
    setUnformatted(value, options = null) {
        //TODO Should we use `AutoNumeric.unformat()` here and set the unformatted result in case `value` is formatted?
        if (value === null || AutoNumericHelper.isUndefined(value)) {
            return this;
        }

        // The options update is done only if the `value` is not null
        if (!AutoNumericHelper.isNull(options)) {
            this._setSettings(options, true); // We do not call `update` here since this would call `set` too
        }

        const strippedValue = this.constructor._removeBrackets(value, this.settings);
        const normalizedValue = this.constructor._stripAllNonNumberCharacters(strippedValue, this.settings, true, this.isFocused);
        if (!AutoNumericHelper.isNumber(normalizedValue)) {
            AutoNumericHelper.throwError(`The value is not a valid one, it's not a numeric string nor a recognized currency.`);
        }

        const [minTest, maxTest] = this.constructor._checkIfInRangeWithOverrideOption(normalizedValue, this.settings);
        if (minTest && maxTest) {
            // If the `normalizedValue` is in the range
            this.setValue(value);
        } else {
            AutoNumericHelper.throwError(`The value is out of the range limits [${this.settings.minimumValue}, ${this.settings.maximumValue}].`);
        }

        return this;
    }

    /**
     * Set the given value directly as the DOM element value, without formatting it beforehand, and without checking its validity.
     * This also updates the `rawValue` with the given `newValue`, without checking it too ; if it's not formatted like a number recognized by Javascript, this *will* likely make other AutoNumeric methods fail.
     *
     * @param {string|number|null} newValue The new value to set on the element
     * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history array, otherwise it is not
     * @returns {AutoNumeric}
     */
    setValue(newValue, saveChangeToHistory = true) {
        this._setElementAndRawValue(newValue, saveChangeToHistory);

        return this;
    }

    /**
     * Save the raw value inside the AutoNumeric object.
     *
     * @param {number|string|null} rawValue The numeric value as understood by Javascript like a `Number`
     * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history array, otherwise it is not
     * @private
     */
    _setRawValue(rawValue, saveChangeToHistory = true) {
        // Only set the raw value if the given value is different than the current one
        if (this.rawValue !== rawValue) { //TODO Manage the case where one value is a string while the other is a number?
            const oldRawValue = this.rawValue;
            // Update the raw value
            this.rawValue = rawValue; // By default, if the `rawValue` is changed programmatically

            if ((!AutoNumericHelper.isNull(this.settings.rawValueDivisor) && this.settings.rawValueDivisor !== 0) && // Only divide if the `rawValueDivisor` option is set
                rawValue !== '' && rawValue !== null && // Do not modify the `rawValue` if it's an empty string or null
                this._isUserManuallyEditingTheValue()) { // If the user is manually changing the element value
                this.rawValue /= this.settings.rawValueDivisor;
            }

            // Broadcast the `rawValueModified` event since the `rawValue` has been modified
            this._triggerEvent(AutoNumeric.events.rawValueModified, this.domElement, {
                oldRawValue,
                newRawValue: this.rawValue,
                isPristine : this.isPristine(true),
                error      : null,
                aNElement  : this,
            });

            // Change the element style or use the relevant callbacks
            this._parseStyleRules();

            if (saveChangeToHistory) {
                // Save in the history the last known raw value and formatted result selection
                this._historyTableAdd();
            }
        }
    }

    /**
     * Set the given value on the DOM element, without affecting the `rawValue`.
     * This send an 'autoNumeric:formatted' event if the new value is different than the old one.
     *
     * @param {number|string} newElementValue
     * @param {boolean} sendFormattedEvent If set to `true`, then the `AutoNumeric.events.formatted` event is sent if the value has changed
     * @returns {AutoNumeric}
     * @private
     */
    _setElementValue(newElementValue, sendFormattedEvent = true) {
        //TODO Use an internal attribute to track the current value of the element `formattedValue` (like its counterpart `rawValue`). This would allow us to avoid calling `getElementValue` many times
        const oldElementValue = AutoNumericHelper.getElementValue(this.domElement);

        // Only update the value if it's different from the current one
        if (newElementValue !== oldElementValue) {
            this.internalModification = true;
            AutoNumericHelper.setElementValue(this.domElement, newElementValue);
            this.internalModification = false;

            if (sendFormattedEvent) {
                this._triggerEvent(AutoNumeric.events.formatted, this.domElement, {
                    oldValue   : oldElementValue,
                    newValue   : newElementValue,
                    oldRawValue: this.rawValue,
                    newRawValue: this.rawValue,
                    isPristine : this.isPristine(false),
                    error      : null,
                    aNElement  : this,
                });
            }
        }

        return this;
    }

    /**
     * Set the given value on the DOM element, and the raw value on `this.rawValue`, if both are given.
     * If only one value is given, then both the DOM element value and the raw value are set with that value.
     * The third argument `saveChangeToHistory` defines if the change should be recorded in the history array.
     * Note: if the second argument `rawValue` is a boolean, we consider that is really is the `saveChangeToHistory` argument.
     *
     * @param {number|string|null} newElementValue
     * @param {number|string|null|boolean} rawValue
     * @param {boolean} saveChangeToHistory
     * @returns {AutoNumeric}
     * @private
     */
    _setElementAndRawValue(newElementValue, rawValue = null, saveChangeToHistory = true) {
        if (AutoNumericHelper.isNull(rawValue)) {
            rawValue = newElementValue;
        } else if (AutoNumericHelper.isBoolean(rawValue)) {
            saveChangeToHistory = rawValue;
            rawValue = newElementValue;
        }

        //XXX The order here is important ; the value should first be set on the element, then and only then we should update the raw value
        // In the `set()` function, we make sure to call `_setRawValue` *after* `setElementValue` so that if `_setRawValue` calls a callback that modify the `rawValue`, then the new value is set correctly (after `setElementValue` briefly set its value first)
        this._setElementValue(newElementValue);
        this._setRawValue(rawValue, saveChangeToHistory);

        return this;
    }

    /**
     * Return the multiplied raw value with the `rawValueDivisor`.
     * This is used to display different values between the raw and formatted values.
     *
     * @param {number|string|null} rawValue The numeric value as understood by Javascript like a `Number`
     * @returns {number|string|null}
     * @private
     */
    _getRawValueToFormat(rawValue) {
        let rawValueForTheElementValue;
        if ((!AutoNumericHelper.isNull(this.settings.rawValueDivisor) && this.settings.rawValueDivisor !== 0) && // Only multiply if the `rawValueDivisor` option is set
            rawValue !== '' && rawValue !== null) { // Do not modify the `rawValue` if it's an empty string or null
            // !this._isUserManuallyEditingTheValue()) { // If the user is NOT manually changing the element value, but that is done programmatically
            rawValueForTheElementValue = rawValue * this.settings.rawValueDivisor;
        } else {
            rawValueForTheElementValue = rawValue;
        }

        return rawValueForTheElementValue;
    }

    /**
     * Check if the given value has a corresponding key in the `valuesToStrings` option object.
     *
     * @param {number|string} value
     * @returns {boolean} Returns `true` if such a key is found.
     * @private
     */
    _checkValuesToStrings(value) {
        return this.constructor._checkValuesToStringsArray(value, this.valuesToStringsKeys);
    }

    /**
     * Check if the given value has a corresponding key in the `stringsArray` array.
     *
     * @param {number|string} key
     * @param {array} stringsArray Array where the `key` is checked against its keys
     * @returns {boolean} Returns `true` if such a key is found.
     * @private
     */
    static _checkValuesToStringsArray(key, stringsArray) {
        return AutoNumericHelper.isInArray(String(key), stringsArray);
    }

    /**
     * Static helper for checking if the given `key` is found in the settings' `valuesToStrings` option object.
     *
     * @param {number|string} key
     * @param {object} settings
     * @returns {boolean}
     * @private
     */
    static _checkValuesToStringsSettings(key, settings) {
        return this._checkValuesToStringsArray(key, Object.keys(settings.valuesToStrings));
    }

    /**
     * Static helper for checking if the given `value` is found in the settings' `valuesToStrings` option object.
     *
     * @param {number|string} value
     * @param {object} settings
     * @returns {boolean}
     * @private
     */
    static _checkStringsToValuesSettings(value, settings) {
        return this._checkValuesToStringsArray(value, Object.values(settings.valuesToStrings));
    }

    /**
     * Return `true` if the user is currently modifying the element value manually.
     *
     * @returns {boolean}
     * @private
     */
    _isUserManuallyEditingTheValue() {
        // return (this.isFocused && this.isEditing) || this.isWheelEvent || this.isDropEvent;
        return (this.isFocused && this.isEditing) || this.isDropEvent;
    }

    /**
     * Execute the given callback function using the given result as its first parameter, and the AutoNumeric object as its second.
     *
     * @param {number|string|Array|null} result
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     * @private
     */
    _executeCallback(result, callback) {
        if (!AutoNumericHelper.isNull(callback) && AutoNumericHelper.isFunction(callback)) {
            callback(result, this);
        }
    }

    /**
     * Trigger the given event on the given element with the given detail.
     * This takes into account the `eventBubbles` and `eventIsCancelable` options.
     *
     * @param {string} eventName
     * @param {HTMLElement|HTMLDocument|EventTarget} element
     * @param {object} detail
     * @private
     */
    _triggerEvent(eventName, element = document, detail = null) {
        AutoNumericHelper.triggerEvent(eventName, element, detail, this.settings.eventBubbles, this.settings.eventIsCancelable);
    }

    /**
     * Alias of the `getNumericString()` function.
     * Developers should use one of the more explicit function names to get what they want :
     * - a numeric string : `getNumericString()`
     * - a formatted string : `getFormatted()`
     * - a number : `getNumber()`, or
     * - a localized numeric string : `getLocalized()`
     *
     * @usage anElement.get();
     *
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     *
     * @deprecated
     * @returns {string|null}
     */
    get(callback = null) {
        return this.getNumericString(callback);
    }

    /**
     * Return the unformatted value as a string.
     * This can also return `null` if `rawValue` is null.
     *
     * @usage anElement.getNumericString();
     *
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     *
     * @returns {string|null}
     */
    getNumericString(callback = null) {
        let result;
        if (AutoNumericHelper.isNull(this.rawValue)) {
            result = null;
        } else {
            // Always return a numeric string
            // The following statement gets rid of the trailing zeros in the decimal places since the current method does not pad decimals
            result = AutoNumericHelper.trimPaddedZerosFromDecimalPlaces(this.rawValue);
        }

        this._executeCallback(result, callback);

        return result;
    }

    /**
     * Return the current formatted value of the AutoNumeric element as a string
     *
     * @usage anElement.getFormatted()
     *
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     *
     * @returns {string}
     */
    getFormatted(callback = null) {
        if (!('value' in this.domElement || 'textContent' in this.domElement)) {
            // Make sure `.value` or `.textContent' exists before trying to access those properties
            AutoNumericHelper.throwError('Unable to get the formatted string from the element.');
        }

        const result = AutoNumericHelper.getElementValue(this.domElement);
        this._executeCallback(result, callback);

        return result;
    }

    /**
     * Return the element unformatted value as a real Javascript number.
     * Warning: This can lead to precision problems with big numbers that should be stored as strings.
     *
     * @usage anElement.getNumber()
     *
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     *
     * @returns {number|null}
     */
    getNumber(callback = null) {
        let result;
        if (this.rawValue === null) {
            result = null;
        } else {
            result = this.constructor._toLocale(this.getNumericString(), 'number', this.settings);
        }

        this._executeCallback(result, callback);

        return result;
    }

    /**
     * Returns the unformatted value, but following the `outputFormat` setting, which means the output can either be :
     * - a string (that could or could not represent a number (ie. "12345,67-")), or
     * - a plain number (if the setting 'number' is used).
     *
     * By default the returned values are an ISO numeric string "1234.56" or "-1234.56" where the decimal character is a period.
     * Check the "outputFormat" option definition for more details.
     *
     * @usage anElement.getLocalized();
     *
     * @param {null|string|function} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @param {function|null} callback If a callback is passed, then the result is passed to it as its first argument, and the AutoNumeric object has its second
     *
     * @returns {*}
     */
    getLocalized(forcedOutputFormat = null, callback = null) {
        // First, check if only a callback has been passed, and if so, sanitize the parameters
        if (AutoNumericHelper.isFunction(forcedOutputFormat) && AutoNumericHelper.isNull(callback)) {
            callback = forcedOutputFormat;
            forcedOutputFormat = null;
        }

        // Then get the localized value
        let value;
        if (AutoNumericHelper.isEmptyString(this.rawValue)) {
            value = '';
        } else {
            // Here I use `this.rawValue` instead of `this.getNumericString()` since the current input value could be unformatted with a localization (ie. '1234567,89-').
            // I also convert the rawValue to a number, then back to a string in order to drop the decimal part if the rawValue is an integer.
            value = ''+Number(this.rawValue);
        }

        if (value !== '' && Number(value) === 0 && this.settings.leadingZero !== AutoNumeric.options.leadingZero.keep) {
            value = '0';
        }

        let outputFormatToUse;
        if (AutoNumericHelper.isNull(forcedOutputFormat)) {
            outputFormatToUse = this.settings.outputFormat;
        } else {
            outputFormatToUse = forcedOutputFormat;
        }

        const result = this.constructor._toLocale(value, outputFormatToUse, this.settings);
        this._executeCallback(result, callback);

        return result;
    }

    /**
     * Force the element to reformat its value again (just in case the formatting has been lost).
     * This can be used right after a form submission for instance (after a previous call to `unformat`).
     *
     * @example anElement.reformat()
     *
     * @returns {AutoNumeric}
     */
    reformat() {
        // `this.rawValue` is used instead of `this.domElement.value` because when the content is `unformatLocalized`, it can become a string that cannot be converted to a number easily
        this.set(this.rawValue);

        return this;
    }

    /**
     * Remove the formatting and keep only the raw unformatted value in the element (as a numericString)
     * Note: this is loosely based on the previous 'unSet()' function
     *
     * By default, values are returned as ISO numeric strings (ie. "1234.56" or "-1234.56"), where the decimal character is a period.
     * @example anElement.unformat()
     *
     * @returns {AutoNumeric}
     */
    unformat() {
        this._setElementValue(this.getNumericString());

        return this;
    }

    /**
     * Remove the formatting and keep only the localized unformatted value in the element, with the option to override the default outputFormat if needed
     *
     * Locale formats are supported "1234.56-" or "1234,56" or "-1234,56 or "1234,56-", or even plain numbers.
     * Take a look at the `outputFormat` option definition in the default settings for more details.
     *
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {AutoNumeric}
     */
    unformatLocalized(forcedOutputFormat = null) {
        this._setElementValue(this.getLocalized(forcedOutputFormat));

        return this;
    }

    /**
     * Return `true` if the current value is the same as when the element got initialized.
     * Note: By default, this returns `true` if the raw unformatted value is still the same even if the formatted one has changed (due to a configuration update for instance).
     * In order to test if the formatted value is the same (which means neither the raw value nor the settings have been changed), then you must pass `false` as its argument.
     *
     * @param {boolean} checkOnlyRawValue If set to `true`, the pristine value is done on the raw unformatted value, not the formatted one.  If set to `false`, this also checks that the formatted value hasn't changed.
     * @returns {boolean}
     */
    isPristine(checkOnlyRawValue = true) {
        let result;
        if (checkOnlyRawValue) {
            result = this.initialValue === this.getNumericString();
        } else {
            result = this.initialValueHtmlAttribute === this.getFormatted();
        }

        return result;
    }

    /**
     * Select the formatted element content, based on the `selectNumberOnly` option
     *
     * @returns {AutoNumeric}
     */
    select() {
        if (this.settings.selectNumberOnly) {
            this.selectNumber();
        } else {
            this._defaultSelectAll();
        }

        return this;
    }

    /**
     * Select the whole element content (including the currency symbol).
     * @private
     */
    _defaultSelectAll() {
        AutoNumericHelper.setElementSelection(this.domElement, 0, AutoNumericHelper.getElementValue(this.domElement).length);
    }

    /**
     * Select only the numbers in the formatted element content, leaving out the currency symbol, whatever the value of the `selectNumberOnly` option
     *
     * @returns {AutoNumeric}
     */
    selectNumber() {
        //TODO Make sure the selection is ok when showPositiveSign is set to `true` (select the negative sign, but not the positive one)
        const unformattedValue = AutoNumericHelper.getElementValue(this.domElement);
        const valueLen = unformattedValue.length;
        const currencySymbolSize = this.settings.currencySymbol.length;
        const currencySymbolPlacement = this.settings.currencySymbolPlacement;
        const negLen = (!AutoNumericHelper.isNegative(unformattedValue, this.settings.negativeSignCharacter))?0:1;
        const suffixTextLen = this.settings.suffixText.length;

        let start;
        if (currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
            start = 0;
        } else if (this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.left &&
            negLen === 1 && currencySymbolSize > 0) {
            start = currencySymbolSize + 1;
        } else {
            start = currencySymbolSize;
        }

        let end;
        if (currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
            end = valueLen - suffixTextLen;
        } else {
            switch (this.settings.negativePositiveSignPlacement) {
                case AutoNumeric.options.negativePositiveSignPlacement.left:
                    end = valueLen - (suffixTextLen + currencySymbolSize);
                    break;
                case AutoNumeric.options.negativePositiveSignPlacement.right:
                    if (currencySymbolSize > 0) {
                        end = valueLen - (currencySymbolSize + negLen + suffixTextLen);
                    } else {
                        end = valueLen - (currencySymbolSize + suffixTextLen);
                    }
                    break;
                default :
                    end = valueLen - (currencySymbolSize + suffixTextLen);
            }
        }

        AutoNumericHelper.setElementSelection(this.domElement, start, end);

        return this;
    }

    /**
     * Select only the integer part in the formatted element content, whatever the value of `selectNumberOnly`
     *
     * @returns {AutoNumeric}
     */
    selectInteger() {
        let start = 0;
        const isPositive = this.rawValue >= 0;

        // Negative or positive sign, if any
        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix ||
            (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix &&
            (this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.prefix ||
            this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.none))) {
            if ((this.settings.showPositiveSign && isPositive) ||  // This only exclude the positive sign from being selected
                (!isPositive && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.left)) { // And this exclude the negative sign from being selected in this special case : '-€ 1.234,57suffixText'
                start = start + 1;
            }
        }

        // Currency symbol
        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
            start = start + this.settings.currencySymbol.length;
        }

        // Calculate the selection end position
        const elementValue = AutoNumericHelper.getElementValue(this.domElement);
        let end = elementValue.indexOf(this.settings.decimalCharacter);
        if (end === -1) {
            // No decimal character found
            if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
                end = elementValue.length - this.settings.currencySymbol.length;
            } else {
                end = elementValue.length;
            }

            // Trailing negative sign
            if (!isPositive &&
                (this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix ||
                this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix)) {
                end = end - 1;
            }

            // Avoid selecting the suffix test
            end = end - this.settings.suffixText.length;
        }

        AutoNumericHelper.setElementSelection(this.domElement, start, end);

        return this;
    }

    /**
     * Select only the decimal part in the formatted element content, whatever the value of `selectNumberOnly`
     * Multiple cases are possible :
     * +1.234,57suffixText
     *
     * € +1.234,57suffixText
     * +€ 1.234,57suffixText
     * € 1.234,57+suffixText
     *
     * 1.234,57+ €suffixText
     * 1.234,57 €+suffixText
     * +1.234,57 €suffixText
     *
     * @returns {AutoNumeric}
     */
    selectDecimal() {
        let start = AutoNumericHelper.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter);
        let end;

        if (start === -1) {
            // The decimal character has not been found, we deselect all
            start = 0;
            end = 0;
        } else {
            // A decimal character has been found
            start = start + 1; // We add 1 to exclude the decimal character from the selection

            let decimalCount;
            if (this.isFocused) {
                decimalCount = this.settings.decimalPlacesShownOnFocus;
            } else {
                decimalCount = this.settings.decimalPlacesShownOnBlur;
            }

            end = start + Number(decimalCount);
        }

        AutoNumericHelper.setElementSelection(this.domElement, start, end);

        return this;
    }

    /**
     * Return the DOM element reference of the autoNumeric-managed element
     *
     * @returns {HTMLElement|HTMLInputElement}
     */
    node() {
        return this.domElement;
    }

    /**
     * Return the DOM element reference of the parent node of the autoNumeric-managed element
     *
     * @returns {HTMLElement|HTMLInputElement|Node}
     */
    parent() {
        return this.domElement.parentNode;
    }

    /**
     * Detach the current AutoNumeric element from the shared local 'init' list.
     * This means any changes made on that local shared list will not be transmitted to that element anymore.
     * Note : The user can provide another AutoNumeric element, and detach this one instead of the current one.
     *
     * @param {AutoNumeric} otherAnElement
     * @returns {AutoNumeric}
     */
    detach(otherAnElement = null) { //FIXME test this
        let domElementToDetach;
        if (!AutoNumericHelper.isNull(otherAnElement)) {
            domElementToDetach = otherAnElement.node();
        } else {
            domElementToDetach = this.domElement;
        }

        this._removeFromLocalList(domElementToDetach); //FIXME What happens if the selected dom element does not exist in the list?

        return this;
    }

    /**
     * Attach the given AutoNumeric element to the shared local 'init' list.
     * When doing that, by default the DOM content is left untouched.
     * The user can force a reformat with the new shared list options by passing a second argument to `true`.
     *
     * @param {AutoNumeric} otherAnElement
     * @param {boolean} reFormat
     * @returns {AutoNumeric}
     */
    attach(otherAnElement, reFormat = true) { //FIXME test this
        this._addToLocalList(otherAnElement.node()); //FIXME Should we make sure the element is not already in the list?
        if (reFormat) {
            otherAnElement.update(this.settings);
        }

        return this;
    }

    /**
     * Format and return the given value, or set the formatted value into the given DOM element if one is passed as an argument.
     * By default, this use the current element settings.
     * The user can override any option of its choosing by passing an option object.
     *
     * @param {number|HTMLElement|HTMLInputElement} valueOrElement
     * @param {null|object} optionOverride
     * @returns {string|null}
     */
    formatOther(valueOrElement, optionOverride = null) { //FIXME test this
        return this._formatOrUnformatOther(true, valueOrElement, optionOverride);
    }

    /**
     * Unformat and return the raw numeric string corresponding to the given value, or directly set the unformatted value into the given DOM element if one is passed as an argument.
     * By default, this use the current element settings.
     * The user can override any option of its choosing by passing an option object.

     * @param {string|HTMLElement|HTMLInputElement} stringOrElement
     * @param {null|object} optionOverride
     * @returns {string|null}
     */
    unformatOther(stringOrElement, optionOverride = null) { //FIXME test this
        return this._formatOrUnformatOther(false, stringOrElement, optionOverride);
    }

    /**
     * Method that either format or unformat the value of another element.
     *
     * - Format and return the given value, or set the formatted value into the given DOM element if one is passed as an argument.
     * - Unformat and return the raw numeric string corresponding to the given value, or directly set the unformatted value into the given DOM element if one is passed as an argument.
     *
     * By default, this use the current element settings.
     * The user can override any option of its choosing by passing an option object.
     *
     * @param {boolean} isFormatting If set to `true`, then the method formats, otherwise if set to `false`, it unformats
     * @param {number|string|HTMLElement|HTMLInputElement} valueOrStringOrElement
     * @param {null|object} optionOverride
     * @returns {string|null}
     * @private
     */
    _formatOrUnformatOther(isFormatting, valueOrStringOrElement, optionOverride = null) { //FIXME test this
        // If the user wants to override the current element settings temporarily
        let settingsToUse;
        if (!AutoNumericHelper.isNull(optionOverride)) {
            settingsToUse = this._cloneAndMergeSettings(optionOverride);
        } else {
            settingsToUse = this.settings;
        }

        // Then the unformatting is done...
        let result;
        if (AutoNumericHelper.isElement(valueOrStringOrElement)) {
            // ...either directly on the DOM element value
            const elementValue = AutoNumericHelper.getElementValue(valueOrStringOrElement);
            if (isFormatting) {
                result = AutoNumeric.format(elementValue, settingsToUse);
            }
            else {
                result = AutoNumeric.unformat(elementValue, settingsToUse);
            }

            AutoNumericHelper.setElementValue(valueOrStringOrElement, result); //TODO Use `unformatAndSet` and `formatAndSet`instead

            return null;
        }

        // ...or on the given value
        if (isFormatting) {
            result = AutoNumeric.format(valueOrStringOrElement, settingsToUse);
        }
        else {
            result = AutoNumeric.unformat(valueOrStringOrElement, settingsToUse);
        }

        return result;
    }

    /**
     * Use the current AutoNumeric element settings to initialize the DOM element(s) given as a parameter.
     * Doing so will *link* the AutoNumeric elements together since they will share the same local AutoNumeric element list.
     * (cf. prototype pattern : https://en.wikipedia.org/wiki/Prototype_pattern)
     *
     * You can `init` either a single DOM element (in that case an AutoNumeric object will be returned), or an array of DOM elements or a string that will be used as a CSS selector. In the latter cases, an array of AutoNumeric objects will then be returned (or an empty array if nothing gets selected by the CSS selector).
     *
     * Use case : Once you have an AutoNumeric element already setup correctly with the right options, you can use it as many times you want to initialize as many other DOM elements as needed.
     * Note : this works only on elements that can be managed by autoNumeric.
     *
     * @param {HTMLElement|HTMLInputElement|Array<HTMLElement|HTMLInputElement>|string} domElementOrArrayOrString
     * @param {boolean} attached If set to `false`, then the newly generated AutoNumeric element will not share the same local element list
     * @returns {AutoNumeric|[AutoNumeric]}
     */
    init(domElementOrArrayOrString, attached = true) {
        let returnASingleAutoNumericObject = false; // By default, this function returns an array of AutoNumeric objects
        let domElementsArray = [];
        if (AutoNumericHelper.isString(domElementOrArrayOrString)) {
            domElementsArray = [... document.querySelectorAll(domElementOrArrayOrString)]; // Convert a NodeList to an Array
        } else if (AutoNumericHelper.isElement(domElementOrArrayOrString)) {
            domElementsArray.push(domElementOrArrayOrString);
            returnASingleAutoNumericObject = true; // Special case when only one DOM element is passed as a parameter
        } else if (AutoNumericHelper.isArray(domElementOrArrayOrString)) {
            domElementsArray = domElementOrArrayOrString;
        } else {
            AutoNumericHelper.throwError(`The given parameters to the 'init' function are invalid.`);
        }

        if (domElementsArray.length === 0) {
            AutoNumericHelper.warning(`No valid DOM elements were given hence no AutoNumeric object were instantiated.`, true);

            return [];
        }

        const currentLocalList = this._getLocalList();
        const autoNumericObjectsArray = [];

        // Instantiate (and link depending on `attached`) each AutoNumeric objects
        domElementsArray.forEach(domElement => {
            // Initialize the new AutoNumeric element
            const originalCreateLocalListSetting = this.settings.createLocalList;
            if (attached) {
                // Temporary variable to know if we should create the local list during the initialization (since we'll remove it afterwards)
                this.settings.createLocalList = false;
            }

            const newAutoNumericElement =  new AutoNumeric(domElement, AutoNumericHelper.getElementValue(domElement), this.settings);

            // Set the common shared local list if needed
            // If the user wants to create a detached new AutoNumeric element, then skip the following step that bind the two elements together by default
            if (attached) {
                // 1) Set the local list reference to point to the initializer's one
                newAutoNumericElement._setLocalList(currentLocalList);

                // 2) Add the new element to that existing list
                this._addToLocalList(domElement, newAutoNumericElement); // Here we use the *new* AutoNumeric object reference to add to the local list, since we'll need the reference to `this` in the methods to points to that new AutoNumeric object.
                this.settings.createLocalList = originalCreateLocalListSetting;
            }

            autoNumericObjectsArray.push(newAutoNumericElement);
        });

        if (returnASingleAutoNumericObject) {
            // If a single DOM element was used as the parameter, then we return an AutoNumeric object directly
            return autoNumericObjectsArray[0];
        }

        // ...otherwise we return an Array of AutoNumeric objects
        return autoNumericObjectsArray;
    }

    /**
     * Reset the element value either to the empty string '', or the currency sign, depending on the `emptyInputBehavior` option value.
     * If you set the `forceClearAll` argument to `true`, then the `emptyInputBehavior` option is overridden and the whole input is clear, including any currency sign.
     *
     * @param {boolean} forceClearAll
     * @returns {AutoNumeric}
     */
    clear(forceClearAll = false) {
        if (forceClearAll) {
            const temporaryForcedOptions = {
                emptyInputBehavior: AutoNumeric.options.emptyInputBehavior.focus,
            };
            this.set('', temporaryForcedOptions);
        } else {
            this.set('');
        }

        return this;
    }

    /**
     * Remove the autoNumeric data and event listeners from the element, but keep the element content intact.
     * This also clears the value from sessionStorage (or cookie, depending on browser supports).
     * Note: this does not remove the formatting.
     *
     * @example anElement.remove()
     */
    remove() {
        this._removeValueFromPersistentStorage();
        this._removeEventListeners();
        this._removeWatcher();

        // Also remove the element from the local AutoNumeric list
        this._removeFromLocalList(this.domElement);
        // Also remove the element from the global AutoNumeric list
        this.constructor._removeFromGlobalList(this);
    }

    /**
     * Remove the autoNumeric data and event listeners from the element, and reset its value to the empty string ''.
     * This also clears the value from sessionStorage (or cookie, depending on browser supports).
     *
     * @example anElement.wipe()
     */
    wipe() {
        this._setElementValue('', false); // Do not send the 'AutoNumeric.events.formatted' event when wiping an AutoNumeric object
        this.remove();
    }

    /**
     * Remove the autoNumeric data and event listeners from the element, and delete the DOM element altogether
     */
    nuke() {
        this.remove();
        // Remove the element from the DOM
        this.domElement.parentNode.removeChild(this.domElement);
    }


    // Special functions that really work on the parent <form> element, instead of the <input> element itself

    /**
     * Return a reference to the parent <form> element if it exists, otherwise return `null`.
     * If the parent form element as already been found, this directly return a reference to it.
     * However, you can force AutoNumeric to search again for its reference by passing `true` as a parameter to this method.
     * This method updates the `this.parentForm` attribute.
     *
     * In either case, whenever a new parent form is set for the current AutoNumeric element, we make sure to update the anCount and anFormHandler attributes on both the old form and the new one (for instance in case the user moved the input elements with `appendChild()` since AutoNumeric cannot not detect that).
     *
     * @param {boolean} forceSearch If set to `true`, the parent form is searched again, even if `this.parentForm` is already set.
     *
     * @returns {HTMLFormElement|null}
     */
    form(forceSearch = false) {
        if (forceSearch || AutoNumericHelper.isUndefinedOrNullOrEmpty(this.parentForm)) {
            const newParentForm = this._getParentForm();
            if (!AutoNumericHelper.isNull(newParentForm) && newParentForm !== this.parentForm) {
                // If the current parent form exists and is different from the previous parent form

                // Search for all the AutoNumeric elements in the old parent form
                const oldANChildren = this._getFormAutoNumericChildren(this.parentForm);
                // Update the anCount with the correct number of AutoNumeric elements
                this.parentForm.dataset.anCount = oldANChildren.length;

                // Check if the new parent form already has a anFormHandler name
                if (this._hasFormHandlerFunction(newParentForm)) {
                    this._incrementParentFormCounter(newParentForm); // Increment its counter
                } else {
                    // Create one and set the anCount to 1
                    this._storeFormHandlerFunction(newParentForm);
                    this._initializeFormCounterToOne(newParentForm);
                }
            }

            this.parentForm = newParentForm;
        }

        return this.parentForm;
    }

    /**
     * Return an array of the AutoNumeric-managed elements for the given form element is passed, otherwise for the current `this.parentForm` element.
     *
     * @param {HTMLFormElement|null} formElement
     *
     * @returns {Array.<HTMLInputElement>}
     * @private
     */
    _getFormAutoNumericChildren(formElement) {
        // Search for all the child AutoNumeric elements in that parent form
        //TODO This only search for <input> elements, not contenteditable non-input tag ones, for now. Add a parameter to allow this function to search on every tags.
        const inputList = [... formElement.querySelectorAll('input')];

        return inputList.filter(input => this.constructor.isManagedByAutoNumeric(input));
    }

    /**
     * Return a reference to the parent <form> element if it exists, otherwise return `null`.
     *
     * @returns {HTMLFormElement|null}
     * @private
     */
    _getParentForm() {
        if (this.domElement.tagName.toLowerCase() === 'body') {
            return null;
        }

        let node = this.domElement;
        let tagName;
        do {
            node = node.parentNode;
            if (AutoNumericHelper.isNull(node)) {
                // Special case when using templates with frameworks like Vue.js, where the input element can be 'detached' when initializing the DOM structure
                return null;
            }

            if (node.tagName) {
                tagName = node.tagName.toLowerCase();
            } else {
                tagName = '';
            }

            if (tagName === 'body') {
                // Get out of the loop if we get up to the `<body>` element
                break;
            }
        } while (tagName !== 'form');

        if (tagName === 'form') {
            return node;
        } else {
            return null;
        }
    }

    /**
     * Return a string in standard URL-encoded notation with the form input values being unformatted.
     * This string can be used as a query for instance.
     *
     * @returns {string}
     */
    formNumericString() {
        return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces);
    }

    /**
     * Return a string in standard URL-encoded notation with the form input values being formatted.
     *
     * @returns {string}
     */
    formFormatted() {
        return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces);
    }

    /**
     * Return a string in standard URL-encoded notation with the form input values, with localized values.
     * The default output format can be overridden by passing the option as a parameter.
     *
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {string}
     */
    formLocalized(forcedOutputFormat = null) {
        let outputFormatToUse;
        if (AutoNumericHelper.isNull(forcedOutputFormat)) {
            outputFormatToUse = this.settings.outputFormat;
        } else {
            outputFormatToUse = forcedOutputFormat;
        }

        return this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, outputFormatToUse);
    }

    /**
     * Return an array containing an object for each form <input> element.
     * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is an unformatted numeric string.
     *
     * @returns {Array}
     */
    formArrayNumericString() {
        return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces);
    }

    /**
     * Return an array containing an object for each form <input> element.
     * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is the formatted string.
     *
     * @returns {Array}
     */
    formArrayFormatted() {
        return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces);
    }

    /**
     * Return an array containing an object for each form <input> element.
     * Those objects are of the following structure `{ name: foo, value: '42' }`, where the `name` is the DOM element name, and the `value` is the localized numeric string.
     *
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {Array}
     */
    formArrayLocalized(forcedOutputFormat = null) {
        let outputFormatToUse;
        if (AutoNumericHelper.isNull(forcedOutputFormat)) {
            outputFormatToUse = this.settings.outputFormat;
        } else {
            outputFormatToUse = forcedOutputFormat;
        }

        return this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, outputFormatToUse);
    }

    /**
     * Return a JSON string containing an object representing the form input values.
     * This is based on the result of the `formArrayNumericString()` function.
     *
     * @returns {string}
     */
    formJsonNumericString() {
        return JSON.stringify(this.formArrayNumericString());
    }

    /**
     * Return a JSON string containing an object representing the form input values.
     * This is based on the result of the `formArrayFormatted()` function.
     *
     * @returns {string}
     */
    formJsonFormatted() {
        return JSON.stringify(this.formArrayFormatted());
    }

    /**
     * Return a JSON string containing an object representing the form input values.
     * This is based on the result of the `formArrayLocalized()` function.
     *
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {string}
     */
    formJsonLocalized(forcedOutputFormat = null) {
        return JSON.stringify(this.formArrayLocalized(forcedOutputFormat));
    }

    /**
     * Unformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element, to numeric strings
     *
     * @returns {AutoNumeric}
     */
    formUnformat() { //FIXME test this
        const inputs = this.constructor._getChildANInputElement(this.form());
        inputs.forEach(input => {
            AutoNumeric.getAutoNumericElement(input).unformat();
        });

        return this;
    }

    /**
     * Unformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element, to localized strings
     *
     * @returns {AutoNumeric}
     */
    formUnformatLocalized() { //FIXME test this
        const inputs = this.constructor._getChildANInputElement(this.form());
        inputs.forEach(input => {
            AutoNumeric.getAutoNumericElement(input).unformatLocalized();
        });

        return this;
    }

    /**
     * Reformat all the autoNumeric-managed elements that are a child of the parent <form> element of this DOM element
     *
     * @returns {AutoNumeric}
     */
    formReformat() { //FIXME test this
        const inputs = this.constructor._getChildANInputElement(this.form());
        inputs.forEach(input => {
            AutoNumeric.getAutoNumericElement(input).reformat();
        });

        return this;
    }

    /**
     * Convert the input values to numeric strings, submit the form, then reformat those back.
     * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
     * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formNumericString()`.
     *
     * @param {function|null} callback
     * @returns {AutoNumeric}
     */
    formSubmitNumericString(callback = null) { //FIXME test this
        if (AutoNumericHelper.isNull(callback)) {
            this.formUnformat();
            this.form().submit();
            this.formReformat();
        } else if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formNumericString());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Submit the form with the current formatted values.
     * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
     * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formFormatted()`.
     *
     * @param {function|null} callback
     * @returns {AutoNumeric}
     */
    formSubmitFormatted(callback = null) { //FIXME test this
        if (AutoNumericHelper.isNull(callback)) {
            this.form().submit();
        } else if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formFormatted());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Convert the input values to localized strings, submit the form, then reformat those back.
     * The function can either take a callback, or not. If it doesn't, the default `form.submit()` function will be called.
     * Otherwise, it runs `callback(value)` with `value` being equal to the result of `formLocalized()`.
     *
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @param {function|null} callback
     * @returns {AutoNumeric}
     */
    formSubmitLocalized(forcedOutputFormat = null, callback = null) { //FIXME test this
        if (AutoNumericHelper.isNull(callback)) {
            this.formUnformatLocalized();
            this.form().submit();
            this.formReformat();
        } else if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formLocalized(forcedOutputFormat));
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate an array of numeric strings from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formArrayNumericString()`.
     *
     * @param {function} callback
     * @returns {AutoNumeric}
     */
    formSubmitArrayNumericString(callback) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formArrayNumericString());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate an array of the current formatted values from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formArrayFormatted()`.
     *
     * @param {function} callback
     * @returns {AutoNumeric}
     */
    formSubmitArrayFormatted(callback) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formArrayFormatted());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate an array of localized strings from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formArrayLocalized()`.
     *
     * @param {function} callback
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {AutoNumeric}
     */
    formSubmitArrayLocalized(callback, forcedOutputFormat = null) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formArrayLocalized(forcedOutputFormat));
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate a JSON string with the numeric strings values from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formJsonNumericString()`.
     *
     * @param {function} callback
     * @returns {AutoNumeric}
     */
    formSubmitJsonNumericString(callback) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formJsonNumericString());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate a JSON string with the current formatted values from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formJsonFormatted()`.
     *
     * @param {function} callback
     * @returns {AutoNumeric}
     */
    formSubmitJsonFormatted(callback) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formJsonFormatted());
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Generate a JSON string with the localized strings values from the `<input>` elements, and pass it to the given callback.
     * Under the hood, the array is generated via a call to `formJsonLocalized()`.
     *
     * @param {function} callback
     * @param {null|string} forcedOutputFormat If set to something different than `null`, then this is used as an overriding outputFormat option
     * @returns {AutoNumeric}
     */
    formSubmitJsonLocalized(callback, forcedOutputFormat = null) { //FIXME test this
        if (AutoNumericHelper.isFunction(callback)) {
            callback(this.formJsonLocalized(forcedOutputFormat));
        } else {
            AutoNumericHelper.throwError(`The given callback is not a function.`);
        }

        return this;
    }

    /**
     * Unformat the given AutoNumeric element, and update the `hoveredWithAlt` variable.
     *
     * @param {AutoNumeric} anElement
     * @private
     */
    static _unformatAltHovered(anElement) {
        anElement.hoveredWithAlt = true;
        anElement.unformat();
    }

    /**
     * Reformat the given AutoNumeric element, and update the `hoveredWithAlt` variable.
     *
     * @param {AutoNumeric} anElement
     * @private
     */
    static _reformatAltHovered(anElement) {
        anElement.hoveredWithAlt = false;
        anElement.reformat();
    }

    /**
     * Return an array of autoNumeric elements, child of the <form> element passed as a parameter.
     *
     * @param {HTMLElement} formNode
     * @returns {Array}
     * @private
     */
    static _getChildANInputElement(formNode) { //FIXME test this
        const inputList = formNode.getElementsByTagName('input');

        // Loop this list and keep only the inputs that are managed by AutoNumeric
        const autoNumericInputs = [];
        const inputElements = Array.prototype.slice.call(inputList, 0);
        inputElements.forEach(input => {
            if (this.test(input)) {
                autoNumericInputs.push(input);
            }
        });

        return autoNumericInputs;
    }

    // Static methods
    /**
     * Test if the given DOM element, or the element selected by the given selector string is already managed by AutoNumeric (if it has been initialized on the current page).
     *
     * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
     * @returns {boolean}
     */
    static test(domElementOrSelector) {
        return this._isInGlobalList(AutoNumericHelper.domElement(domElementOrSelector));
    }

    /**
     * Create a WeakMap with the given name.
     *
     * @param {string} weakMapName
     * @private
     */
    static _createWeakMap(weakMapName) {
        window[weakMapName] = new WeakMap();
    }

    /**
     * Create a list of all the AutoNumeric elements that are initialized on the current page.
     * This is needed in order to determine if a given dom element is already managed by autoNumeric.
     * This uses a WeakMap in order to limit potential garbage collection problems.
     * (cf. my tests on http://codepen.io/AnotherLinuxUser/pen/pRQGaM?editors=1011)
     * @private
     */
    static _createGlobalList() {
        // The check that this global list does not exists already is done in the add and remove functions already
        this.autoNumericGlobalListName = 'autoNumericGlobalList'; //XXX This looks weird to set a variable on `this.` in a static method, but that really declare that variable like a static property
        // Note: I should not get any memory leaks for referencing the DOM element in the `value`, this DOM element also being the `key`, according to the spec : http://www.ecma-international.org/ecma-262/6.0/#sec-weakmap-objects
        this._createWeakMap(this.autoNumericGlobalListName);
    }

    /**
     * Return `true` if the global AutoNumeric element list exists.
     *
     * @returns {boolean}
     * @private
     */
    static _doesGlobalListExists() {
        const type = typeof window[this.autoNumericGlobalListName];
        return type !== 'undefined' &&
               type === 'object';
    }

    /**
     * Add the given object to the global AutoNumeric element list.
     *
     * @param {AutoNumeric} autoNumericObject
     * @private
     */
    static _addToGlobalList(autoNumericObject) {
        if (!this._doesGlobalListExists()) {
            this._createGlobalList();
        }

        const domElement = autoNumericObject.node();
        // This checks if the object is not already in the global list before adding it.
        // This could happen if an AutoNumeric element is initialized, then the DOM element is removed directly via `removeChild` (hence the reference does not get removed from the global list), then it get recreated and initialized again
        if (this._isInGlobalList(domElement)) {
            if (this._getFromGlobalList(domElement) === this) {
                // Do not add this AutoNumeric object again since it's already in that global list
                return;
            } else {
                // Print a warning to warn that the domElement already has a reference in the global map (but we cannot for sure starts deleting those old references since they could still be used by another AutoNumeric object)
                AutoNumericHelper.warning(`A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.`, autoNumericObject.getSettings().showWarnings);
            }
        }

        window[this.autoNumericGlobalListName].set(domElement, autoNumericObject);
    }

    /**
     * Remove the given object from the global AutoNumeric element list.
     *
     * @param {AutoNumeric} autoNumericObject
     * @private
     */
    static _removeFromGlobalList(autoNumericObject) { //FIXME test this
        if (this._doesGlobalListExists()) {
            window[this.autoNumericGlobalListName].delete(autoNumericObject.node());
        }
    }

    /**
     * Return the value associated to the key `domElement` passed as a parameter.
     * The value is the AutoNumeric object that manages the DOM element `domElement`.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @returns {null|AutoNumeric}
     * @private
     */
    static _getFromGlobalList(domElement) { //FIXME test this
        if (this._doesGlobalListExists()) {
            return window[this.autoNumericGlobalListName].get(domElement);
        }

        return null;
    }

    /**
     * Check if the given DOM element is in the global AutoNumeric element list.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @returns {boolean}
     * @private
     */
    static _isInGlobalList(domElement) { //FIXME test this
        if (!this._doesGlobalListExists()) {
            return false;
        }

        return window[this.autoNumericGlobalListName].has(domElement);
    }

    /**
     * Create a `Map` that will stores all the autoNumeric elements that are initialized from this current element.
     * @private
     */
    _createLocalList() {
        this.autoNumericLocalList = new Map();
        this._addToLocalList(this.domElement);
    }

    /**
     * In some rare cases, you could want to delete the local list generated during the element initialization (in order to use another one instead for instance).
     * @private
     */
    _deleteLocalList() {
        delete this.autoNumericLocalList;
    }

    /**
     * Set the local list with the given Map object.
     *
     * @param {Map} localList
     * @private
     */
    _setLocalList(localList) {
        this.autoNumericLocalList = localList;
    }

    /**
     * Return the local list Map object.
     *
     * @returns {*|Map}
     * @private
     */
    _getLocalList() {
        return this.autoNumericLocalList;
    }

    /**
     * Return `true` if the AutoNumeric object has a local list defined already and has at least one element in it (itself usually).
     *
     * @returns {boolean}
     * @private
     */
    _hasLocalList() {
        return this.autoNumericLocalList instanceof Map && this.autoNumericLocalList.size !== 0;
    }

    /**
     * Add the given object to the local autoNumeric element list.
     * Note: in order to keep a coherent list, we only add DOM elements in it, not the autoNumeric object.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @param {AutoNumeric} autoNumericObject A reference to the AutoNumeric object that manage the given DOM element
     * @throws
     * @private
     */
    _addToLocalList(domElement, autoNumericObject = null) {
        if (AutoNumericHelper.isNull(autoNumericObject)) {
            autoNumericObject = this;
        }

        if (!AutoNumericHelper.isUndefined(this.autoNumericLocalList)) {
            this.autoNumericLocalList.set(domElement, autoNumericObject); // Use the DOM element as key, and the AutoNumeric object as the value
        } else {
            AutoNumericHelper.throwError(`The local list provided does not exists when trying to add an element. [${this.autoNumericLocalList}] given.`);
        }
    }

    /**
     * Remove the given object from the local autoNumeric element list.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @private
     */
    _removeFromLocalList(domElement) {
        if (!AutoNumericHelper.isUndefined(this.autoNumericLocalList)) {
            this.autoNumericLocalList.delete(domElement);
        } else if (this.settings.createLocalList) {
            AutoNumericHelper.throwError(`The local list provided does not exists when trying to remove an element. [${this.autoNumericLocalList}] given.`);
        }
    }

    /**
     * Merge the `newSettings` given as parameters into the current element settings.
     *
     * WARNING: Using `Object.assign()` here means the merge is not recursive and only one depth is merged.
     * cf. http://stackoverflow.com/a/39188108/2834898
     * cf. tests on http://codepen.io/AnotherLinuxUser/pen/KaJORq?editors=0011
     *
     * @param {object} newSettings
     * @private
     */
    _mergeSettings(...newSettings) {
        Object.assign(this.settings, ...newSettings);
    }

    /**
     * Return a new object with the current element settings merged with the new settings.
     *
     * @param {object} newSettings
     * @returns {object}
     * @private
     */
    _cloneAndMergeSettings(...newSettings) {
        const result = {};
        Object.assign(result, this.settings, ...newSettings);

        return result;
    }

    /**
     * Validate the given option object.
     * If the options are valid, this function returns nothing, otherwise if the options are invalid, this function throws an error.
     *
     * This tests if the options are not conflicting and are well formatted.
     * This function is lenient since it only tests the settings properties ; it ignores any other properties the options object could have.
     *
     * @param {*} userOptions
     * @param {Boolean} shouldExtendDefaultOptions If `true`, then this function will extends the `userOptions` passed by the user, with the default options.
     * @param {object|null} originalOptions The user can pass the original options (and not the one that are generated from the default settings and the various usability corrections), in order to add compatibility and conflicts checks.
     * @throws Error This throws if the `userOptions` are not valid
     */
    static validate(userOptions, shouldExtendDefaultOptions = true, originalOptions = null) {
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(userOptions) || !AutoNumericHelper.isObject(userOptions)) {
            AutoNumericHelper.throwError(`The userOptions are invalid ; it should be a valid object, [${userOptions}] given.`);
        }

        const isOriginalOptionAnObject = AutoNumericHelper.isObject(originalOptions);
        if (!isOriginalOptionAnObject && !AutoNumericHelper.isNull(originalOptions)) {
            AutoNumericHelper.throwError(`The 'originalOptions' parameter is invalid ; it should either be a valid option object or \`null\`, [${userOptions}] given.`);
        }

        // If the user used old options, we convert them to new ones
        if (!AutoNumericHelper.isNull(userOptions)) {
            this._convertOldOptionsToNewOnes(userOptions);
        }

        // The user can choose if the `userOptions` has already been extended with the default options, or not
        let options;
        if (shouldExtendDefaultOptions) {
            options = Object.assign({}, this.getDefaultConfig(), userOptions);
        } else {
            options = userOptions;
        }

        // First things first, we test that the `showWarnings` option is valid
        if (!AutoNumericHelper.isTrueOrFalseString(options.showWarnings) && !AutoNumericHelper.isBoolean(options.showWarnings)) {
            AutoNumericHelper.throwError(`The debug option 'showWarnings' is invalid ; it should be either 'true' or 'false', [${options.showWarnings}] given.`);
        }

        // Define the regular expressions needed for the following tests
        const testPositiveInteger = /^[0-9]+$/;
        const testNumericalCharacters = /[0-9]+/;
        // const testFloatAndPossibleNegativeSign = /^-?[0-9]+(\.?[0-9]+)$/;
        const testFloatOrIntegerAndPossibleNegativeSign = /^-?[0-9]+(\.?[0-9]+)?$/;
        const testPositiveFloatOrInteger = /^[0-9]+(\.?[0-9]+)?$/;

        // Then tests the options individually
        if (!AutoNumericHelper.isTrueOrFalseString(options.allowDecimalPadding) &&
            !AutoNumericHelper.isBoolean(options.allowDecimalPadding) &&
            options.allowDecimalPadding !== AutoNumeric.options.allowDecimalPadding.floats) {
            AutoNumericHelper.throwError(`The decimal padding option 'allowDecimalPadding' is invalid ; it should either be \`false\`, \`true\` or \`'floats'\`, [${options.allowDecimalPadding}] given.`);
        }

        if ((options.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.never ||
            options.allowDecimalPadding === 'false') &&
            (options.decimalPlaces !== AutoNumeric.options.decimalPlaces.none ||
            options.decimalPlacesShownOnBlur !== AutoNumeric.options.decimalPlacesShownOnBlur.none ||
            options.decimalPlacesShownOnFocus !== AutoNumeric.options.decimalPlacesShownOnFocus.none)) {
            AutoNumericHelper.warning(`Setting 'allowDecimalPadding' to [${options.allowDecimalPadding}] will override the current 'decimalPlaces*' settings [${options.decimalPlaces}, ${options.decimalPlacesShownOnBlur} and ${options.decimalPlacesShownOnFocus}].`, options.showWarnings);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.alwaysAllowDecimalCharacter) &&
            !AutoNumericHelper.isBoolean(options.alwaysAllowDecimalCharacter)) {
            AutoNumericHelper.throwError(`The option 'alwaysAllowDecimalCharacter' is invalid ; it should either be \`true\` or \`false\`, [${options.alwaysAllowDecimalCharacter}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.caretPositionOnFocus) && !AutoNumericHelper.isInArray(options.caretPositionOnFocus, [
            AutoNumeric.options.caretPositionOnFocus.start,
            AutoNumeric.options.caretPositionOnFocus.end,
            AutoNumeric.options.caretPositionOnFocus.decimalLeft,
            AutoNumeric.options.caretPositionOnFocus.decimalRight,
        ])) {
            AutoNumericHelper.throwError(`The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be \`null\`, 'focus', 'press', 'always' or 'zero', [${options.caretPositionOnFocus}] given.`);
        }

        // Special case here for `caretPositionOnFocus` and `selectOnFocus` where we need to check the original non-tempered version of the options in order to check for conflicts, since using the default settings remove those and would prevent us warning the user that his option object is not correct.
        let optionsToUse;
        if (isOriginalOptionAnObject) {
            optionsToUse = originalOptions;
        } else {
            optionsToUse = this._correctCaretPositionOnFocusAndSelectOnFocusOptions(userOptions);
        }

        if (!AutoNumericHelper.isNull(optionsToUse) &&
            ((optionsToUse.caretPositionOnFocus !== AutoNumeric.options.caretPositionOnFocus.doNoForceCaretPosition &&
            optionsToUse.selectOnFocus === AutoNumeric.options.selectOnFocus.select))) {
            AutoNumericHelper.warning(`The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '${optionsToUse.caretPositionOnFocus}'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.`, options.showWarnings);
        }

        if (!AutoNumericHelper.isInArray(options.digitGroupSeparator, [
            AutoNumeric.options.digitGroupSeparator.comma,
            AutoNumeric.options.digitGroupSeparator.dot,
            AutoNumeric.options.digitGroupSeparator.normalSpace,
            AutoNumeric.options.digitGroupSeparator.thinSpace,
            AutoNumeric.options.digitGroupSeparator.narrowNoBreakSpace,
            AutoNumeric.options.digitGroupSeparator.noBreakSpace,
            AutoNumeric.options.digitGroupSeparator.noSeparator,
            AutoNumeric.options.digitGroupSeparator.apostrophe,
            AutoNumeric.options.digitGroupSeparator.arabicThousandsSeparator,
            AutoNumeric.options.digitGroupSeparator.dotAbove,
            AutoNumeric.options.digitGroupSeparator.privateUseTwo,
        ])) {
            AutoNumericHelper.throwError(`The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', "'", '\u0092', ' ', '\u2009', '\u202f', '\u00a0' or empty (''), [${options.digitGroupSeparator}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.showOnlyNumbersOnFocus) && !AutoNumericHelper.isBoolean(options.showOnlyNumbersOnFocus)) {
            AutoNumericHelper.throwError(`The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'true' or 'false', [${options.showOnlyNumbersOnFocus}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.digitalGroupSpacing, [
            AutoNumeric.options.digitalGroupSpacing.two,
            AutoNumeric.options.digitalGroupSpacing.twoScaled,
            AutoNumeric.options.digitalGroupSpacing.three,
            AutoNumeric.options.digitalGroupSpacing.four,
        ]) && !(options.digitalGroupSpacing >= 2 && options.digitalGroupSpacing <= 4)) {
            AutoNumericHelper.throwError(`The grouping separator option for thousands 'digitalGroupSpacing' is invalid ; it should be '2', '2s', '3', or '4', [${options.digitalGroupSpacing}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.decimalCharacter, [
            AutoNumeric.options.decimalCharacter.comma,
            AutoNumeric.options.decimalCharacter.dot,
            AutoNumeric.options.decimalCharacter.middleDot,
            AutoNumeric.options.decimalCharacter.arabicDecimalSeparator,
            AutoNumeric.options.decimalCharacter.decimalSeparatorKeySymbol,
        ])) {
            AutoNumericHelper.throwError(`The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [${options.decimalCharacter}] given.`);
        }

        // Checks if the decimal and thousand characters are the same
        if (options.decimalCharacter === options.digitGroupSeparator) {
            AutoNumericHelper.throwError(`autoNumeric will not function properly when the decimal character 'decimalCharacter' [${options.decimalCharacter}] and the thousand separator 'digitGroupSeparator' [${options.digitGroupSeparator}] are the same character.`);
        }

        if (!AutoNumericHelper.isNull(options.decimalCharacterAlternative) && !AutoNumericHelper.isString(options.decimalCharacterAlternative)) {
            AutoNumericHelper.throwError(`The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [${options.decimalCharacterAlternative}] given.`);
        }

        if (options.currencySymbol !== '' && !AutoNumericHelper.isString(options.currencySymbol)) {
            AutoNumericHelper.throwError(`The currency symbol option 'currencySymbol' is invalid ; it should be a string, [${options.currencySymbol}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.currencySymbolPlacement, [
            AutoNumeric.options.currencySymbolPlacement.prefix,
            AutoNumeric.options.currencySymbolPlacement.suffix,
        ])) {
            AutoNumericHelper.throwError(`The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [${options.currencySymbolPlacement}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.negativePositiveSignPlacement, [
            AutoNumeric.options.negativePositiveSignPlacement.prefix,
            AutoNumeric.options.negativePositiveSignPlacement.suffix,
            AutoNumeric.options.negativePositiveSignPlacement.left,
            AutoNumeric.options.negativePositiveSignPlacement.right,
            AutoNumeric.options.negativePositiveSignPlacement.none,
        ])) {
            AutoNumericHelper.throwError(`The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [${options.negativePositiveSignPlacement}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.showPositiveSign) && !AutoNumericHelper.isBoolean(options.showPositiveSign)) {
            AutoNumericHelper.throwError(`The show positive sign option 'showPositiveSign' is invalid ; it should be either 'true' or 'false', [${options.showPositiveSign}] given.`);
        }

        if (!AutoNumericHelper.isString(options.suffixText) || (options.suffixText !== '' && (AutoNumericHelper.isNegative(options.suffixText, options.negativeSignCharacter) || testNumericalCharacters.test(options.suffixText)))) {
            AutoNumericHelper.throwError(`The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '${options.negativeSignCharacter}' nor any numerical characters, [${options.suffixText}] given.`);
        }

        if (!AutoNumericHelper.isString(options.negativeSignCharacter) ||
            options.negativeSignCharacter.length !== 1 ||
            AutoNumericHelper.isUndefinedOrNullOrEmpty(options.negativeSignCharacter) ||
            testNumericalCharacters.test(options.negativeSignCharacter)) {
            AutoNumericHelper.throwError(`The negative sign character option 'negativeSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [${options.negativeSignCharacter}] given.`);
        }

        if (!AutoNumericHelper.isString(options.positiveSignCharacter) ||
            options.positiveSignCharacter.length !== 1 ||
            AutoNumericHelper.isUndefinedOrNullOrEmpty(options.positiveSignCharacter) ||
            testNumericalCharacters.test(options.positiveSignCharacter)) {
            AutoNumericHelper.throwError(`The positive sign character option 'positiveSignCharacter' is invalid ; it should be a single character, and cannot be any numerical characters, [${options.positiveSignCharacter}] given.\nIf you want to hide the positive sign character, you need to set the \`showPositiveSign\` option to \`true\`.`);
        }

        if (options.negativeSignCharacter === options.positiveSignCharacter) {
            AutoNumericHelper.throwError(`The positive 'positiveSignCharacter' and negative 'negativeSignCharacter' sign characters cannot be identical ; [${options.negativeSignCharacter}] given.`);
        }

        const [leftBracket, rightBracket] = AutoNumericHelper.isNull(options.negativeBracketsTypeOnBlur)?['', '']:options.negativeBracketsTypeOnBlur.split(',');
        if (AutoNumericHelper.contains(options.digitGroupSeparator, options.negativeSignCharacter) ||
            AutoNumericHelper.contains(options.decimalCharacter, options.negativeSignCharacter) ||
            AutoNumericHelper.contains(options.decimalCharacterAlternative, options.negativeSignCharacter) ||
            AutoNumericHelper.contains(leftBracket, options.negativeSignCharacter) ||
            AutoNumericHelper.contains(rightBracket, options.negativeSignCharacter) ||
            AutoNumericHelper.contains(options.suffixText, options.negativeSignCharacter)) {
            AutoNumericHelper.throwError(`The negative sign character option 'negativeSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [${options.negativeSignCharacter}] given.`);
        }

        if (AutoNumericHelper.contains(options.digitGroupSeparator, options.positiveSignCharacter) ||
            AutoNumericHelper.contains(options.decimalCharacter, options.positiveSignCharacter) ||
            AutoNumericHelper.contains(options.decimalCharacterAlternative, options.positiveSignCharacter) ||
            AutoNumericHelper.contains(leftBracket, options.positiveSignCharacter) ||
            AutoNumericHelper.contains(rightBracket, options.positiveSignCharacter) ||
            AutoNumericHelper.contains(options.suffixText, options.positiveSignCharacter)) {
            AutoNumericHelper.throwError(`The positive sign character option 'positiveSignCharacter' is invalid ; it should not be equal or a part of the digit separator, the decimal character, the decimal character alternative, the negative brackets or the suffix text, [${options.positiveSignCharacter}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.overrideMinMaxLimits) && !AutoNumericHelper.isInArray(options.overrideMinMaxLimits, [
            AutoNumeric.options.overrideMinMaxLimits.ceiling,
            AutoNumeric.options.overrideMinMaxLimits.floor,
            AutoNumeric.options.overrideMinMaxLimits.ignore,
        ])) {
            AutoNumericHelper.throwError(`The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [${options.overrideMinMaxLimits}] given.`);
        }

        if (!AutoNumericHelper.isString(options.maximumValue) || !testFloatOrIntegerAndPossibleNegativeSign.test(options.maximumValue)) {
            AutoNumericHelper.throwError(`The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [${options.maximumValue}] given.`);
        }

        if (!AutoNumericHelper.isString(options.minimumValue) || !testFloatOrIntegerAndPossibleNegativeSign.test(options.minimumValue)) {
            AutoNumericHelper.throwError(`The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [${options.minimumValue}] given.`);
        }

        if (parseFloat(options.minimumValue) > parseFloat(options.maximumValue)) {
            AutoNumericHelper.throwError(`The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [${options.minimumValue}] should be smaller than 'maximumValue' [${options.maximumValue}].`);
        }

        if (!((AutoNumericHelper.isInt(options.decimalPlaces) && options.decimalPlaces >= 0) || // If integer option
            (AutoNumericHelper.isString(options.decimalPlaces) && testPositiveInteger.test(options.decimalPlaces))) // If string option
        ) {
            AutoNumericHelper.throwError(`The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [${options.decimalPlaces}] given.`);
        }

        if (!(AutoNumericHelper.isNull(options.decimalPlacesRawValue) ||
            (AutoNumericHelper.isInt(options.decimalPlacesRawValue) && options.decimalPlacesRawValue >= 0) || // If integer option
            (AutoNumericHelper.isString(options.decimalPlacesRawValue) && testPositiveInteger.test(options.decimalPlacesRawValue))) // If string option
        ) {
            AutoNumericHelper.throwError(`The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or \`null\`, [${options.decimalPlacesRawValue}] given.`);
        }

        // Checks if the number of decimal places for the raw value is lower than the `decimalPlaces`, `decimalPlacesShownOnFocus` and/or `decimalPlacesShownOnBlur` options
        this._validateDecimalPlacesRawValue(options);

        if (!AutoNumericHelper.isNull(options.decimalPlacesShownOnFocus) &&
            !testPositiveInteger.test(String(options.decimalPlacesShownOnFocus))) {
            AutoNumericHelper.throwError(`The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or \`null\`, [${options.decimalPlacesShownOnFocus}] given.`);
        }

        // Checks if the extended decimal places "decimalPlacesShownOnFocus" is greater than the decimal places number `decimalPlaces`
        if (!AutoNumericHelper.isNull(options.decimalPlacesShownOnFocus) && Number(options.decimalPlaces) > Number(options.decimalPlacesShownOnFocus)) {
            AutoNumericHelper.warning(`The extended decimal places 'decimalPlacesShownOnFocus' [${options.decimalPlacesShownOnFocus}] should be greater than the 'decimalPlaces' [${options.decimalPlaces}] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?`, options.showWarnings);
        }

        if (!AutoNumericHelper.isNull(options.divisorWhenUnfocused) &&
            !testPositiveFloatOrInteger.test(options.divisorWhenUnfocused) ||
            options.divisorWhenUnfocused === 0 || options.divisorWhenUnfocused === '0' ||
            options.divisorWhenUnfocused === 1 || options.divisorWhenUnfocused === '1') {
            AutoNumericHelper.throwError(`The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [${options.divisorWhenUnfocused}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.decimalPlacesShownOnBlur) && !testPositiveInteger.test(options.decimalPlacesShownOnBlur)) {
            AutoNumericHelper.throwError(`The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or \`null\`, [${options.decimalPlacesShownOnBlur}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.symbolWhenUnfocused) && !AutoNumericHelper.isString(options.symbolWhenUnfocused)) {
            AutoNumericHelper.throwError(`The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [${options.symbolWhenUnfocused}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.saveValueToSessionStorage) && !AutoNumericHelper.isBoolean(options.saveValueToSessionStorage)) {
            AutoNumericHelper.throwError(`The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'true' or 'false', [${options.saveValueToSessionStorage}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.onInvalidPaste, [
            AutoNumeric.options.onInvalidPaste.error,
            AutoNumeric.options.onInvalidPaste.ignore,
            AutoNumeric.options.onInvalidPaste.clamp,
            AutoNumeric.options.onInvalidPaste.truncate,
            AutoNumeric.options.onInvalidPaste.replace,
        ])) {
            AutoNumericHelper.throwError(`The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [${options.onInvalidPaste}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.roundingMethod, [
            AutoNumeric.options.roundingMethod.halfUpSymmetric,
            AutoNumeric.options.roundingMethod.halfUpAsymmetric,
            AutoNumeric.options.roundingMethod.halfDownSymmetric,
            AutoNumeric.options.roundingMethod.halfDownAsymmetric,
            AutoNumeric.options.roundingMethod.halfEvenBankersRounding,
            AutoNumeric.options.roundingMethod.upRoundAwayFromZero,
            AutoNumeric.options.roundingMethod.downRoundTowardZero,
            AutoNumeric.options.roundingMethod.toCeilingTowardPositiveInfinity,
            AutoNumeric.options.roundingMethod.toFloorTowardNegativeInfinity,
            AutoNumeric.options.roundingMethod.toNearest05,
            AutoNumeric.options.roundingMethod.toNearest05Alt,
            AutoNumeric.options.roundingMethod.upToNext05,
            AutoNumeric.options.roundingMethod.downToNext05,
        ])) {
            AutoNumericHelper.throwError(`The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [${options.roundingMethod}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.negativeBracketsTypeOnBlur) && !AutoNumericHelper.isInArray(options.negativeBracketsTypeOnBlur, [
            AutoNumeric.options.negativeBracketsTypeOnBlur.parentheses,
            AutoNumeric.options.negativeBracketsTypeOnBlur.brackets,
            AutoNumeric.options.negativeBracketsTypeOnBlur.chevrons,
            AutoNumeric.options.negativeBracketsTypeOnBlur.curlyBraces,
            AutoNumeric.options.negativeBracketsTypeOnBlur.angleBrackets,
            AutoNumeric.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks,
            AutoNumeric.options.negativeBracketsTypeOnBlur.halfBrackets,
            AutoNumeric.options.negativeBracketsTypeOnBlur.whiteSquareBrackets,
            AutoNumeric.options.negativeBracketsTypeOnBlur.quotationMarks,
            AutoNumeric.options.negativeBracketsTypeOnBlur.guillemets,
        ])) {
            AutoNumericHelper.throwError(`The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [${options.negativeBracketsTypeOnBlur}] given.`);
        }

        if (!(AutoNumericHelper.isString(options.emptyInputBehavior) || AutoNumericHelper.isNumber(options.emptyInputBehavior)) ||
            !(AutoNumericHelper.isInArray(options.emptyInputBehavior, [
                AutoNumeric.options.emptyInputBehavior.focus,
                AutoNumeric.options.emptyInputBehavior.press,
                AutoNumeric.options.emptyInputBehavior.always,
                AutoNumeric.options.emptyInputBehavior.min,
                AutoNumeric.options.emptyInputBehavior.max,
                AutoNumeric.options.emptyInputBehavior.zero,
                AutoNumeric.options.emptyInputBehavior.null,
            ]) || testFloatOrIntegerAndPossibleNegativeSign.test(options.emptyInputBehavior))) {
            AutoNumericHelper.throwError(`The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'min', 'max', 'zero', 'null', a number, or a string that represents a number, [${options.emptyInputBehavior}] given.`);
        }

        if (options.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.zero &&
            (options.minimumValue > 0 || options.maximumValue < 0)) {
            AutoNumericHelper.throwError(`The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [${options.minimumValue}, ${options.maximumValue}].`);
        }

        if (testFloatOrIntegerAndPossibleNegativeSign.test(String(options.emptyInputBehavior))) {
            const [minTest, maxTest] = this._checkIfInRangeWithOverrideOption(options.emptyInputBehavior, options);
            if ((!minTest || !maxTest)) {
                AutoNumericHelper.throwError(`The 'emptyInputBehavior' option is set to a number or a string that represents a number, but its value [${options.emptyInputBehavior}] is outside of the range defined by the 'minimumValue' and 'maximumValue' options [${options.minimumValue}, ${options.maximumValue}].`);
            }
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.eventBubbles) && !AutoNumericHelper.isBoolean(options.eventBubbles)) {
            AutoNumericHelper.throwError(`The event bubbles option 'eventBubbles' is invalid ; it should be either 'true' or 'false', [${options.eventBubbles}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.eventIsCancelable) && !AutoNumericHelper.isBoolean(options.eventIsCancelable)) {
            AutoNumericHelper.throwError(`The event is cancelable option 'eventIsCancelable' is invalid ; it should be either 'true' or 'false', [${options.eventIsCancelable}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.leadingZero, [
            AutoNumeric.options.leadingZero.allow,
            AutoNumeric.options.leadingZero.deny,
            AutoNumeric.options.leadingZero.keep,
        ])) {
            AutoNumericHelper.throwError(`The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [${options.leadingZero}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.formatOnPageLoad) && !AutoNumericHelper.isBoolean(options.formatOnPageLoad)) {
            AutoNumericHelper.throwError(`The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'true' or 'false', [${options.formatOnPageLoad}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.formulaMode) && !AutoNumericHelper.isBoolean(options.formulaMode)) {
            AutoNumericHelper.throwError(`The formula mode option 'formulaMode' is invalid ; it should be either 'true' or 'false', [${options.formulaMode}] given.`);
        }

        if (!testPositiveInteger.test(options.historySize) || options.historySize === 0) {
            AutoNumericHelper.throwError(`The history size option 'historySize' is invalid ; it should be a positive integer, [${options.historySize}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.selectNumberOnly) && !AutoNumericHelper.isBoolean(options.selectNumberOnly)) {
            AutoNumericHelper.throwError(`The select number only option 'selectNumberOnly' is invalid ; it should be either 'true' or 'false', [${options.selectNumberOnly}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.selectOnFocus) && !AutoNumericHelper.isBoolean(options.selectOnFocus)) {
            AutoNumericHelper.throwError(`The select on focus option 'selectOnFocus' is invalid ; it should be either 'true' or 'false', [${options.selectOnFocus}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.defaultValueOverride) && (options.defaultValueOverride !== '' && !testFloatOrIntegerAndPossibleNegativeSign.test(options.defaultValueOverride))) {
            AutoNumericHelper.throwError(`The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [${options.defaultValueOverride}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.unformatOnSubmit) && !AutoNumericHelper.isBoolean(options.unformatOnSubmit)) {
            AutoNumericHelper.throwError(`The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'true' or 'false', [${options.unformatOnSubmit}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.valuesToStrings) &&
            !(AutoNumericHelper.isObject(options.valuesToStrings))) {
            AutoNumericHelper.throwError(`The option 'valuesToStrings' is invalid ; it should be an object, ideally with 'key -> value' entries, [${options.valuesToStrings}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.outputFormat) && !AutoNumericHelper.isInArray(options.outputFormat, [
            AutoNumeric.options.outputFormat.string,
            AutoNumeric.options.outputFormat.number,
            AutoNumeric.options.outputFormat.dot,
            AutoNumeric.options.outputFormat.negativeDot,
            AutoNumeric.options.outputFormat.comma,
            AutoNumeric.options.outputFormat.negativeComma,
            AutoNumeric.options.outputFormat.dotNegative,
            AutoNumeric.options.outputFormat.commaNegative,
        ])) {
            AutoNumericHelper.throwError(`The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [${options.outputFormat}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.isCancellable) && !AutoNumericHelper.isBoolean(options.isCancellable)) {
            AutoNumericHelper.throwError(`The cancellable behavior option 'isCancellable' is invalid ; it should be either 'true' or 'false', [${options.isCancellable}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.modifyValueOnWheel) && !AutoNumericHelper.isBoolean(options.modifyValueOnWheel)) {
            AutoNumericHelper.throwError(`The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'true' or 'false', [${options.modifyValueOnWheel}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.watchExternalChanges) && !AutoNumericHelper.isBoolean(options.watchExternalChanges)) {
            AutoNumericHelper.throwError(`The option 'watchExternalChanges' is invalid ; it should be either 'true' or 'false', [${options.watchExternalChanges}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.wheelOn, [
            AutoNumeric.options.wheelOn.focus,
            AutoNumeric.options.wheelOn.hover,
        ])) {
            AutoNumericHelper.throwError(`The wheel behavior option 'wheelOn' is invalid ; it should either be 'focus' or 'hover', [${options.wheelOn}] given.`);
        }

        if (!(AutoNumericHelper.isString(options.wheelStep) || AutoNumericHelper.isNumber(options.wheelStep)) ||
            (options.wheelStep !== 'progressive' && !testPositiveFloatOrInteger.test(options.wheelStep)) ||
            Number(options.wheelStep) === 0) {
            // A step equal to '0' is rejected
            AutoNumericHelper.throwError(`The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [${options.wheelStep}] given.`);
        }

        if (!AutoNumericHelper.isInArray(options.serializeSpaces, [
            AutoNumeric.options.serializeSpaces.plus,
            AutoNumeric.options.serializeSpaces.percent,
        ])) {
            AutoNumericHelper.throwError(`The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [${options.serializeSpaces}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.noEventListeners) && !AutoNumericHelper.isBoolean(options.noEventListeners)) {
            AutoNumericHelper.throwError(`The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'true' or 'false', [${options.noEventListeners}] given.`);
        }

        if (!AutoNumericHelper.isNull(options.styleRules) &&
            !(AutoNumericHelper.isObject(options.styleRules) &&
            ((options.styleRules.hasOwnProperty('positive') ||
            options.styleRules.hasOwnProperty('negative') ||
            options.styleRules.hasOwnProperty('ranges') ||
            options.styleRules.hasOwnProperty('userDefined'))))) {
            AutoNumericHelper.throwError(`The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [${options.styleRules}] given.`);
        }

        // Deeper tests of the `styleRules` object : Check that the callback, if defined, is a function
        if (!AutoNumericHelper.isNull(options.styleRules) &&
            options.styleRules.hasOwnProperty('userDefined') &&
            !AutoNumericHelper.isNull(options.styleRules.userDefined)) {
            options.styleRules.userDefined.forEach(rule => {
                if (rule.hasOwnProperty('callback') && !AutoNumericHelper.isFunction(rule.callback)) {
                    AutoNumericHelper.throwError(`The callback defined in the \`userDefined\` attribute is not a function, ${typeof rule.callback} given.`);
                }
            });
        }

        if (!AutoNumericHelper.isNull(options.rawValueDivisor) &&
            !testPositiveFloatOrInteger.test(options.rawValueDivisor) ||
            options.rawValueDivisor === 0 || options.rawValueDivisor === '0' ||
            options.rawValueDivisor === 1 || options.rawValueDivisor === '1') {
            AutoNumericHelper.throwError(`The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [${options.rawValueDivisor}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.readOnly) && !AutoNumericHelper.isBoolean(options.readOnly)) {
            AutoNumericHelper.throwError(`The option 'readOnly' is invalid ; it should be either 'true' or 'false', [${options.readOnly}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.unformatOnHover) && !AutoNumericHelper.isBoolean(options.unformatOnHover)) {
            AutoNumericHelper.throwError(`The option 'unformatOnHover' is invalid ; it should be either 'true' or 'false', [${options.unformatOnHover}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.failOnUnknownOption) && !AutoNumericHelper.isBoolean(options.failOnUnknownOption)) {
            AutoNumericHelper.throwError(`The debug option 'failOnUnknownOption' is invalid ; it should be either 'true' or 'false', [${options.failOnUnknownOption}] given.`);
        }

        if (!AutoNumericHelper.isTrueOrFalseString(options.createLocalList) && !AutoNumericHelper.isBoolean(options.createLocalList)) {
            AutoNumericHelper.throwError(`The debug option 'createLocalList' is invalid ; it should be either 'true' or 'false', [${options.createLocalList}] given.`);
        }
    }

    /**
     * Check the `decimalPlaces*` options and output the relevant warnings if some of those will get overwritten during the initialization or settings update.
     *
     * @param {object} options
     * @private
     */
    static _validateDecimalPlacesRawValue(options) {
        // Checks if the number of decimal places for the raw value is lower than the `decimalPlaces`, `decimalPlacesShownOnFocus` and/or `decimalPlacesShownOnBlur` options
        if (!AutoNumericHelper.isNull(options.decimalPlacesRawValue)) {
            if (options.decimalPlacesRawValue < options.decimalPlaces) {
                AutoNumericHelper.warning(`The number of decimal places to store in the raw value [${options.decimalPlacesRawValue}] is lower than the ones to display [${options.decimalPlaces}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlaces\`.`, options.showWarnings);
            }

            if (options.decimalPlacesRawValue < options.decimalPlacesShownOnFocus) {
                AutoNumericHelper.warning(`The number of decimal places to store in the raw value [${options.decimalPlacesRawValue}] is lower than the ones shown on focus [${options.decimalPlacesShownOnFocus}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlacesShownOnFocus\`.`, options.showWarnings);
            }

            if (options.decimalPlacesRawValue < options.decimalPlacesShownOnBlur) {
                AutoNumericHelper.warning(`The number of decimal places to store in the raw value [${options.decimalPlacesRawValue}] is lower than the ones shown when unfocused [${options.decimalPlacesShownOnBlur}]. This will likely confuse your users.
To solve that, you'd need to either set \`decimalPlacesRawValue\` to \`null\`, or set a number of decimal places for the raw value equal of bigger than \`decimalPlacesShownOnBlur\`.`, options.showWarnings);
            }
        }
    }

    /**
     * Return `true` if the settings/options are valid, `false` otherwise.
     *
     * @param {object} options
     * @returns {boolean}
     */
    static areSettingsValid(options) {
        let isValid = true;
        try {
            this.validate(options, true);
        } catch (error) {
            isValid = false;
        }

        return isValid;
    }

    /**
     * Return the default autoNumeric settings.
     *
     * @returns {object}
     */
    static getDefaultConfig() {
        return AutoNumeric.defaultSettings;
    }

    /**
     * Return all the predefined language options in one object.
     * You can also access a specific language object directly by using `AutoNumeric.getPredefinedOptions().French` for instance.
     *
     * @returns {object}
     */
    static getPredefinedOptions() {
        return AutoNumeric.predefinedOptions;
    }

    /**
     * Analyse the given array `options` and return a single 'merged' option objet.
     * `options` can be `null`, or an array of an option objects, or an array containing another array of option objects / strings (pre-defined option names)
     *
     * @param {null|Array<object|string|Array<string|object>>} options
     * @returns {null|object}
     * @private
     */
    static _generateOptionsObjectFromOptionsArray(options) {
        let optionsResult;
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(options) || options.length === 0) {
            optionsResult = null;
        } else {
            optionsResult = {};
            if (options.length === 1 && Array.isArray(options[0])) {
                options[0].forEach(optionObject => {
                    // Using `_getOptionObject()` allows using pre-defined names in the `options` array
                    Object.assign(optionsResult, this._getOptionObject(optionObject));
                });
            } else if (options.length >= 1) {
                options.forEach(optionObject => {
                    Object.assign(optionsResult, this._getOptionObject(optionObject));
                });
            }
        }

        return optionsResult;
    }

    /**
     * Format the given number (or numeric string) with the given options. This returns the formatted value as a string.
     * This can also format the given DOM element value with the given options and returns the formatted value as a string.
     * Note : This function does *not* update that element value with the newly formatted value.
     * This basically allows to get the formatted value without first having to initialize an AutoNumeric object.
     *
     * @param {number|string|HTMLElement|HTMLInputElement} numericStringOrDomElement A number, or a string that represent a javascript number, or a DOM element
     * @param {object|null} options Multiple objects can be passed, the latter overwriting the settings from the former ones
     * @returns {string|null}
     */
    static format(numericStringOrDomElement, ...options) {
        if (AutoNumericHelper.isUndefined(numericStringOrDomElement) || numericStringOrDomElement === null) {
            return null;
        }

        // Retrieve the value to format
        let value;
        if (AutoNumericHelper.isElement(numericStringOrDomElement)) {
            value = AutoNumericHelper.getElementValue(numericStringOrDomElement);
        } else {
            value = numericStringOrDomElement;
        }

        if (!AutoNumericHelper.isString(value) && !AutoNumericHelper.isNumber(value)) {
            AutoNumericHelper.throwError(`The value "${value}" being "set" is not numeric and therefore cannot be used appropriately.`);
        }

        // Manage options
        const optionsToUse = this._generateOptionsObjectFromOptionsArray(options);

        // Initiate a very basic settings object
        const settings = Object.assign({}, this.getDefaultConfig(), optionsToUse);
        settings.isNegativeSignAllowed = value < 0;
        settings.isPositiveSignAllowed = value >= 0;
        this._setBrackets(settings);

        const regex = {};
        this._cachesUsualRegularExpressions(settings, regex); // This is needed by `_stripAllNonNumberCharactersExceptCustomDecimalChar` that uses those regex

        // Check the validity of the `value` parameter
        // Convert the value to a numeric string, stripping unnecessary characters in the process
        let valueString = this._toNumericValue(value, settings);
        if (isNaN(Number(valueString))) {
            AutoNumericHelper.throwError(`The value [${valueString}] that you are trying to format is not a recognized number.`);
        }

        // Basic tests to check if the given valueString is valid
        const [minTest, maxTest] = this._checkIfInRangeWithOverrideOption(valueString, settings);
        if (!minTest || !maxTest) {
            // Throw a custom event
            AutoNumericHelper.triggerEvent(AutoNumeric.events.formatted, document, {
                oldValue   : null,
                newValue   : null,
                oldRawValue: null,
                newRawValue: null,
                isPristine : null,
                error      : 'Range test failed',
                aNElement  : null,
            }, true, true);
            AutoNumericHelper.throwError(`The value [${valueString}] being set falls outside of the minimumValue [${settings.minimumValue}] and maximumValue [${settings.maximumValue}] range set for this element`);
        }

        // Directly format any `valuesToStrings` values, if found
        if (settings.valuesToStrings && this._checkValuesToStringsSettings(value, settings)) {
            return settings.valuesToStrings[value];
        }

        // Generate the `negativePositiveSignPlacement` option as needed
        this._correctNegativePositiveSignPlacementOption(settings);
        // Calculate the needed decimal places
        this._calculateDecimalPlacesOnInit(settings);

        // Multiply the raw value with `rawValueDivisor` if defined
        if ((!AutoNumericHelper.isUndefinedOrNullOrEmpty(settings.rawValueDivisor) && settings.rawValueDivisor !== 0) && // Only divide if the `rawValueDivisor` option is set
            valueString !== '' && valueString !== null) { // Do not modify the `valueString` if it's an empty string or null
            valueString *= settings.rawValueDivisor;
        }

        // Everything is ok, proceed to rounding, formatting and grouping
        valueString = this._roundFormattedValueShownOnFocus(valueString, settings);
        valueString = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(valueString, settings);
        valueString = this._addGroupSeparators(valueString, settings, false, valueString);

        return valueString;
    }

    /**
     * Format the given DOM element value, and set the resulting value back as the element value.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @param {object} options
     * @returns {string|null}
     */
    static formatAndSet(domElement, options = null) { //FIXME test this
        const formattedValue = this.format(domElement, options);
        AutoNumericHelper.setElementValue(domElement, formattedValue);

        return formattedValue;
    }

    /**
     * Unformat the given formatted string with the given options. This returns a numeric string.
     * It can also unformat the given DOM element value with the given options and returns the unformatted numeric string.
     * Note: This does *not* update that element value.
     * This basically allows to get the unformatted value without first having to initialize an AutoNumeric object.
     *
     * @param {string|number|HTMLElement|HTMLInputElement} numericStringOrDomElement A number, or a string that represent a javascript number, or a DOM element
     * @param {object|null} options Multiple objects can be passed, the latter overwriting the settings from the former ones
     * @returns {string|number|NaN}
     */
    static unformat(numericStringOrDomElement, ...options) {
        if (AutoNumericHelper.isNumberStrict(numericStringOrDomElement)) {
            // Giving an unformatted value should return the same unformatted value, whatever the options passed as a parameter
            return numericStringOrDomElement;
        }

        // Retrieve the value to unformat
        let value;
        if (AutoNumericHelper.isElement(numericStringOrDomElement)) {
            value = AutoNumericHelper.getElementValue(numericStringOrDomElement);
        } else {
            value = numericStringOrDomElement;
        }

        if (value === '') {
            // This allows to be coherent when serializing forms with empty inputs. Fix issue #512.
            return '';
        }

        if (AutoNumericHelper.isUndefined(value) || value === null) {
            return null;
        }

        if (AutoNumericHelper.isArray(value) || AutoNumericHelper.isObject(value)) {
            // Check the validity of the `value` parameter
            AutoNumericHelper.throwError(`A number or a string representing a number is needed to be able to unformat it, [${value}] given.`);
        }

        // Manage options
        const optionsToUse = this._generateOptionsObjectFromOptionsArray(options);

        // Generate the settings
        const settings = Object.assign({}, this.getDefaultConfig(), optionsToUse);
        settings.isNegativeSignAllowed = false;
        settings.isPositiveSignAllowed = true;
        value = value.toString();

        // Directly unformat any `valuesToStrings` values, if found
        if (settings.valuesToStrings && this._checkStringsToValuesSettings(value, settings)) {
            return AutoNumericHelper.objectKeyLookup(settings.valuesToStrings, value);
        }

        // This checks if a negative sign is anywhere in the `value`, not just on the very first character (ie. '12345.67-')
        if (AutoNumericHelper.isNegative(value, settings.negativeSignCharacter)) {
            settings.isNegativeSignAllowed = true;
            settings.isPositiveSignAllowed = false;
        } else if (!AutoNumericHelper.isNull(settings.negativeBracketsTypeOnBlur)) {
            [settings.firstBracket, settings.lastBracket] = settings.negativeBracketsTypeOnBlur.split(',');
            if (value.charAt(0) === settings.firstBracket &&
                value.charAt(value.length - 1) === settings.lastBracket) {
                settings.isNegativeSignAllowed = true;
                settings.isPositiveSignAllowed = false;
                value = this._removeBrackets(value, settings, false);
            }
        }

        value = this._convertToNumericString(value, settings);
        const unwantedCharacters = new RegExp(`[^+-0123456789.]`, 'gi');
        if (unwantedCharacters.test(value)) {
            return NaN;
        }

        // Generate the `negativePositiveSignPlacement` option as needed
        this._correctNegativePositiveSignPlacementOption(settings);
        // Calculate the needed decimal places
        if (settings.decimalPlacesRawValue) { // `originalDecimalPlacesRawValue` needs to be defined
            settings.originalDecimalPlacesRawValue = settings.decimalPlacesRawValue;
        } else {
            settings.originalDecimalPlacesRawValue = settings.decimalPlaces;
        }

        this._calculateDecimalPlacesOnInit(settings);

        // Divide the raw value with `rawValueDivisor` if defined
        if ((!AutoNumericHelper.isUndefinedOrNullOrEmpty(settings.rawValueDivisor) && settings.rawValueDivisor !== 0) && // Only divide if the `rawValueDivisor` option is set
            value !== '' && value !== null) { // Do not modify the `value` if it's an empty string or null
            value /= settings.rawValueDivisor;
        }

        value = this._roundRawValue(value, settings);
        value = value.replace(settings.decimalCharacter, '.'); // Here we need to convert back the decimal character to a period since `_roundValue` adds it in some cases
        value = this._toLocale(value, settings.outputFormat, settings);

        return value;
    }

    /**
     * Unformat the given DOM element value, and set the resulting value back as the element value.
     *
     * @param {HTMLElement|HTMLInputElement} domElement
     * @param {object} options
     * @returns {*}
     */
    static unformatAndSet(domElement, options = null) { //FIXME test this
        const unformattedValue = this.unformat(domElement, options);
        AutoNumericHelper.setElementValue(domElement, unformattedValue);

        return unformattedValue;
    }

    /**
     * Unformat and localize the given formatted string with the given options. This returns a numeric string.
     * It can also unformat and localize the given DOM element value with the given options and returns the unformatted numeric string.
     * Note: This does *not* update that element value.
     * This basically allows to get the localized value without first having to initialize an AutoNumeric object.
     *
     * @param {string|number|HTMLElement|HTMLInputElement} numericStringOrDomElement
     * @param {object} settings
     * @returns {*}
     */
    static localize(numericStringOrDomElement, settings = null) {
        let value;
        if (AutoNumericHelper.isElement(numericStringOrDomElement)) {
            value = AutoNumericHelper.getElementValue(numericStringOrDomElement);
        } else {
            value = numericStringOrDomElement;
        }

        if (value === '') {
            // This allows to be coherent when serializing forms with empty inputs. Fix issue #512.
            return '';
        }

        if (AutoNumericHelper.isNull(settings)) {
            settings = AutoNumeric.defaultSettings;
        }

        value = this.unformat(value, settings);

        //XXX The following code is pretty close to the one you can find in `getLocalized()`, but different enough so we won't refactor it.
        if (Number(value) === 0 && settings.leadingZero !== AutoNumeric.options.leadingZero.keep) {
            value = '0';
        }

        let outputFormatToUse;
        if (AutoNumericHelper.isNull(settings)) {
            outputFormatToUse = settings.outputFormat;
        } else {
            outputFormatToUse = AutoNumeric.defaultSettings.outputFormat;
        }

        return this._toLocale(value, outputFormatToUse, settings);
    }

    static localizeAndSet(domElement, options = null) { //FIXME test this
        const localizedValue = this.localize(domElement, options);
        AutoNumericHelper.setElementValue(domElement, localizedValue);

        return localizedValue;
    }

    /**
     * Return `true` if the given DOM element has an AutoNumeric object that manages it.
     * This function also accepts a selector string.
     *
     * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
     * @returns {boolean}
     */
    static isManagedByAutoNumeric(domElementOrSelector) { //FIXME test this
        return this._isInGlobalList(AutoNumericHelper.domElement(domElementOrSelector));
    }

    /**
     * Return the AutoNumeric object that manages the given DOM element.
     * This function also accepts a selector string.
     *
     * @param {HTMLElement|string} domElementOrSelector Accepts either directly a DOM element to test, or a string selector (that will return one and only one element, if any)
     * @returns {null|AutoNumeric}
     */
    static getAutoNumericElement(domElementOrSelector) {
        const domElement = AutoNumericHelper.domElement(domElementOrSelector);

        if (!this.isManagedByAutoNumeric(domElement)) {
            return null;
        }

        return this._getFromGlobalList(domElement);
    }

    /**
     * Set the given element value, and format it immediately.
     * Return `null` if no AutoNumeric object is found, else, return the AutoNumeric object.
     *
     * @param {HTMLElement|string} domElementOrSelector Either a DOM element reference, or a selector string can be used
     * @param {number|string|null} newValue The value must be a Number, a numeric string or `null` (if `emptyInputBehavior` is set to `'null'`)
     * @param {object} options A settings object that will override the current settings. Note: the update is done only if the `newValue` is defined.
     * @param {boolean} saveChangeToHistory If set to `true`, then the change is recorded in the history table
     * @returns {AutoNumeric|null}
     */
    static set(domElementOrSelector, newValue, options = null, saveChangeToHistory = true) {
        const domElement = AutoNumericHelper.domElement(domElementOrSelector);

        if (!this.isManagedByAutoNumeric(domElement)) {
            let showWarnings;
            if (!AutoNumericHelper.isNull(options) && options.hasOwnProperty('showWarnings')) {
                showWarnings = options.showWarnings;
            } else {
                showWarnings = true;
            }

            AutoNumericHelper.warning(`Impossible to find an AutoNumeric object for the given DOM element or selector.`, showWarnings);

            return null;
        }

        return this.getAutoNumericElement(domElement).set(newValue, options, saveChangeToHistory);
    }

    /**
     * Return the unformatted value as a string from the given DOM element or query selector.
     * This can also return `null` if `rawValue` is null.
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @param {function|null} callback
     * @returns {string|null}
     */
    static getNumericString(domElementOrSelector, callback = null) {
        return this._get(domElementOrSelector, 'getNumericString', callback);
    }

    /**
     * Return the current formatted value of the AutoNumeric element as a string, from the given DOM element or query selector.
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @param {function|null} callback
     * @returns {string}
     */
    static getFormatted(domElementOrSelector, callback = null) {
        return this._get(domElementOrSelector, 'getFormatted', callback);
    }

    /**
     * Return the element unformatted value as a real Javascript number, from the given DOM element or query selector.
     * Warning: This can lead to precision problems with big numbers that should be stored as strings.
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @param {function|null} callback
     * @returns {number|null}
     */
    static getNumber(domElementOrSelector, callback = null) {
        return this._get(domElementOrSelector, 'getNumber', callback);
    }

    /**
     * DRY the code between the static `get*` functions
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @param {string} getFunction The name of the non-static `get*` function as a string
     * @param {function|null} callback
     * @returns {*}
     * @private
     */
    static _get(domElementOrSelector, getFunction, callback = null) {
        const domElement = AutoNumericHelper.domElement(domElementOrSelector);

        if (!this.isManagedByAutoNumeric(domElement)) {
            AutoNumericHelper.throwError(`Impossible to find an AutoNumeric object for the given DOM element or selector.`);
        }

        return this.getAutoNumericElement(domElement)[getFunction](callback);
    }

    /**
     * Returns the unformatted value following the `outputFormat` setting, from the given DOM element or query selector.
     * See the non-static `getLocalized()` method documentation for more details.
     *
     * @param {HTMLElement|string} domElementOrSelector
     * @param {null|string|function} forcedOutputFormat
     * @param {function|null} callback
     * @returns {*}
     */
    static getLocalized(domElementOrSelector, forcedOutputFormat = null, callback = null) {
        const domElement = AutoNumericHelper.domElement(domElementOrSelector);

        if (!this.isManagedByAutoNumeric(domElement)) {
            AutoNumericHelper.throwError(`Impossible to find an AutoNumeric object for the given DOM element or selector.`);
        }

        return this.getAutoNumericElement(domElement).getLocalized(forcedOutputFormat, callback);
    }

    // Pre-defined options can be called to update the current default options with their specificities
    //XXX A better way would be to not initialize first, but that's not possible since `new` is called first and we do not pass the language options (ie. `French`) to the constructor

    /**
     * Update the AutoNumeric object with the predefined options, and possibly some option overrides.
     *
     * @param {object} predefinedOption
     * @param {object} optionOverride
     * @private
     * @returns {AutoNumeric}
     */
    _updatePredefinedOptions(predefinedOption, optionOverride = null) {
        if (!AutoNumericHelper.isNull(optionOverride)) {
            this._mergeSettings(predefinedOption, optionOverride);
            this.update(this.settings);
        } else {
            this.update(predefinedOption);
        }

        return this;
    }

    /**
     * Update the settings to use the French pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    french(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().French, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the North American pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    northAmerican(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().NorthAmerican, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the British pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    british(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().British, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the Swiss pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    swiss(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().Swiss, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the Japanese pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    japanese(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().Japanese, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the Spanish pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    spanish(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().Spanish, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the Chinese pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    chinese(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().Chinese, optionOverride);

        return this;
    }

    /**
     * Update the settings to use the Brazilian pre-defined language options.
     * Those pre-defined options can be overridden by passing an option object as a parameter.
     *
     * @param {object} optionOverride
     * @returns {AutoNumeric}
     */
    brazilian(optionOverride = null) {
        this._updatePredefinedOptions(AutoNumeric.getPredefinedOptions().Brazilian, optionOverride);

        return this;
    }


    // Internal private functions
    /**
     * Run any callbacks found in the settings object in order to set the settings value back.
     * Any parameter can have a callback defined.
     * The callback takes the current AutoNumeric element as the first argument, and the key name as the second.
     * @example callback(this, 'currencySymbol')
     */
    _runCallbacksFoundInTheSettingsObject() { //FIXME test this
        // Loops through the this.settings object (option array) to find the following
        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
                const value = this.settings[key];

                if (typeof value === 'function') {
                    this.settings[key] = value(this, key);
                } else {
                    // Calls the attached function from the html5 data. For instance: <tag data-currency-symbol="functionName"></tag>
                    let htmlAttribute = this.domElement.getAttribute(key); //TODO Use `dataset` instead of `getAttribute` when we won't need to support obsolete browsers
                    htmlAttribute = AutoNumericHelper.camelize(htmlAttribute);
                    if (typeof this.settings[htmlAttribute] === 'function') {
                        this.settings[key] = htmlAttribute(this, key);
                    }
                }
            }
        }
    }

    /**
     * Keep track if the settings configuration leads to a trailing negative sign (only when the raw value is negative), so we do not have to test the settings values every time we need to know that.
     * `isTrailingNegative` is set to `true` if the settings result in a trailing negative character, `false` otherwise.
     * Note: This returns `true` even if the raw value is positive.
     * @private
     */
    _setTrailingNegativeSignInfo() {
        this.isTrailingNegative = (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix) ||
        (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix &&
        (this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.right));
    }

    /**
     * Strip all the unwanted non-number characters.
     * However it does not reorder the localized negative sign.
     *
     * @param {string} s
     * @param {object} settings
     * @param {boolean} stripZeros If set to `false`, then the leading zero(s) are not stripped, otherwise if set to `true`, the `leadingZero` option is followed
     * @param {boolean} isFocused If the element is focused, then this is `true`
     * @returns {string}
     * @private
     */
    static _stripAllNonNumberCharacters(s, settings, stripZeros, isFocused) {
        return this._stripAllNonNumberCharactersExceptCustomDecimalChar(s, settings, stripZeros, isFocused).replace(settings.decimalCharacter, '.');
    }

    /**
     * Strip all unwanted non-number characters except the custom decimal character.
     *
     * It converts the custom negative sign and removes the positive sign (custom or not).
     * This keeps :
     * - the numbers,
     * - the normal negative sign '-' if any,
     * - and the *custom* decimal character.
     *
     * @param {string} s
     * @param {object} settings
     * @param {boolean} stripZeros If set to `false`, then the leading zero(s) are not stripped, otherwise if set to `true`, the `leadingZero` option is followed
     * @param {boolean} isFocused If the element is focused, then this is `true`
     * @returns {string|*}
     */
    static _stripAllNonNumberCharactersExceptCustomDecimalChar(s, settings, stripZeros, isFocused) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        //TODO This function is called 10 times (sic!) on each key input, couldn't we lower that number? cf. issue #325
        s = this._normalizeCurrencySuffixAndNegativeSignCharacters(s, settings);

        // Then remove all the characters that are not numbers, the normal negative sign '-', or the custom decimal character (note: this also remove any custom positive sign)
        s = s.replace(settings.allowedAutoStrip, '');

        // Get only number string
        const m = s.match(settings.numRegAutoStrip);
        s = m ? [m[1], m[2], m[3]].join('') : '';

        if (settings.leadingZero === AutoNumeric.options.leadingZero.allow || settings.leadingZero === AutoNumeric.options.leadingZero.keep) {
            let negativeSign = '';
            const [integerPart, decimalPart] = s.split(settings.decimalCharacter);
            let modifiedIntegerPart = integerPart;
            if (AutoNumericHelper.contains(modifiedIntegerPart, settings.negativeSignCharacter)) {
                negativeSign = settings.negativeSignCharacter;
                modifiedIntegerPart = modifiedIntegerPart.replace(settings.negativeSignCharacter, '');
            }

            // Strip leading zero on positive value if needed
            if (negativeSign === '' && modifiedIntegerPart.length > settings.mIntPos && modifiedIntegerPart.charAt(0) === '0') {
                modifiedIntegerPart = modifiedIntegerPart.slice(1);
            }

            // Strip leading zero on negative value if needed
            if (negativeSign !== '' && modifiedIntegerPart.length > settings.mIntNeg && modifiedIntegerPart.charAt(0) === '0') {
                modifiedIntegerPart = modifiedIntegerPart.slice(1);
            }

            s = `${negativeSign}${modifiedIntegerPart}${AutoNumericHelper.isUndefined(decimalPart)?'':settings.decimalCharacter + decimalPart}`;
        }

        if ((stripZeros && settings.leadingZero === AutoNumeric.options.leadingZero.deny) ||
            (!isFocused && settings.leadingZero === AutoNumeric.options.leadingZero.allow)) {
            s = s.replace(settings.stripReg, '$1$2');
        }

        return s;
    }

    /**
     * Sets or removes brackets on negative values, depending on the focus state, which is passed as `isFocused`.
     * The focus state is 'stored' in that object property.
     *
     * @param {string} value
     * @param {object} settings
     * @param {boolean} isFocused
     * @returns {*}
     */
    static _toggleNegativeBracket(value, settings, isFocused) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        let result;
        if (isFocused) {
            result = this._removeBrackets(value, settings);
        } else {
            result = this._addBrackets(value, settings);
        }

        return result;
    }

    /**
     * Add the bracket types specified in the `settings` object, to the given string `value`.
     *
     * @param {string} value
     * @param {object} settings
     * @returns {string}
     * @private
     */
    static _addBrackets(value, settings) {
        if (AutoNumericHelper.isNull(settings.negativeBracketsTypeOnBlur)) {
            return value;
        }

        return `${settings.firstBracket}${value.replace(settings.negativeSignCharacter, '')}${settings.lastBracket}`;
    }

    /**
     * Remove the bracket types specified in the `settings` object, from the given string `value`.
     *
     * @param {string} value
     * @param {object} settings
     * @param {boolean} rearrangeSignsAndValueOrder If set to `true`, then only the brackets are remove and a negative sign is added, without reordering the negative sign, currency symbol and value according to the settings.
     * @returns {string}
     * @private
     */
    static _removeBrackets(value, settings, rearrangeSignsAndValueOrder = true) {
        let result;
        if (!AutoNumericHelper.isNull(settings.negativeBracketsTypeOnBlur) && value.charAt(0) === settings.firstBracket) {
            // Remove the brackets if they are present
            result = value.replace(settings.firstBracket, '');
            result = result.replace(settings.lastBracket, '');

            // Add back the negative sign at the right place
            if (rearrangeSignsAndValueOrder) {
                // First we need to remove the currency symbol from the value, since we want to be able to add back the negative sign at the right place (including between the value and the currency sign)
                result = result.replace(settings.currencySymbol, '');
                result = this._mergeCurrencySignNegativePositiveSignAndValue(result, settings, true, false); //TODO This assume the value is negative and non-empty. Is this always the case?
            } else {
                // Here we only want to add the negative sign since we removed the brackets, without reordering
                result = `${settings.negativeSignCharacter}${result}`;
            }
        } else {
            result = value;
        }

        return result;
    }

    /**
     * Analyze the `negativeBracketsTypeOnBlur` options and keep track of the first and last bracket characters to use.
     *
     * @param {object} settings
     * @private
     */
    static _setBrackets(settings) {
        if (AutoNumericHelper.isNull(settings.negativeBracketsTypeOnBlur)) {
            settings.firstBracket = '';
            settings.lastBracket  = '';
        } else {
            // Use temporary variables to fix the MS Edge destructuring issue (see pull request #564)
            const [firstBracket, lastBracket] = settings.negativeBracketsTypeOnBlur.split(',');
            settings.firstBracket = firstBracket;
            settings.lastBracket = lastBracket;
        }
    }

    /**
     * Return a number as a numeric string that can be typecast to a Number that Javascript will understand.
     *
     * This function returns the given string by stripping:
     * - the currency sign (currencySymbol),
     * - the grouping separators (digitalGroupSpacing),
     * - the suffix text (suffixText),
     * - the positive sign (positiveSignCharacter),
     * - the brackets if any,
     * - by replacing the negative sign character with an hyphen,
     * - and by replacing the decimal character (decimalCharacter) by a dot.
     *
     * Lastly, it also put the negative sign back to its normal position if needed.
     * Bonus; it converts any arabic numbers found to the latin ones.
     *
     * @param {string} s
     * @param {object} settings
     * @returns {string|void|*}
     */
    static _convertToNumericString(s, settings) {
        // Remove the custom brackets
        s = this._removeBrackets(s, settings, false);
        s = this._normalizeCurrencySuffixAndNegativeSignCharacters(s, settings);

        // Remove the grouping separators (thousands separators usually)
        s = s.replace(new RegExp(`[${settings.digitGroupSeparator}]`, 'g'), '');

        // Replace the decimal character by a dot
        if (settings.decimalCharacter !== '.') {
            s = s.replace(settings.decimalCharacter, '.');
        }

        // Move the trailing negative sign, if any, to the usual leftmost position
        if (AutoNumericHelper.isNegative(s) && s.lastIndexOf('-') === s.length - 1) {
            s = s.replace('-', '');
            s = `-${s}`;
        }

        // Replace the custom positive sign
        if (settings.showPositiveSign) {
            s = s.replace(settings.positiveSignCharacter, '');
        }

        // Convert arabic numbers to latin ones, if any
        const convertToNumber = settings.leadingZero !== AutoNumeric.options.leadingZero.keep;
        const temp = AutoNumericHelper.arabicToLatinNumbers(s, convertToNumber, false, false);
        if (!isNaN(temp)) {
            s = temp.toString();
        }

        return s;
    }

    /**
     * Removes the currency symbol and the suffix text from the given string, and replace the custom negative sign with an hyphen.
     *
     * @param {string} s
     * @param {object} settings
     * @returns {string | *}
     * @private
     */
    static _normalizeCurrencySuffixAndNegativeSignCharacters(s, settings) {
        s = String(s); // Typecast to to a string, in case that the given value is a number

        // Remove the currency symbol
        if (settings.currencySymbol !== AutoNumeric.options.currencySymbol.none) {
            s = s.replace(settings.currencySymbol, '');
        }

        // Remove the suffixText
        if (settings.suffixText !== AutoNumeric.options.suffixText.none) {
            s = s.replace(settings.suffixText, '');
        }

        // Replace the custom negative sign with an hyphen
        if (settings.negativeSignCharacter !== AutoNumeric.options.negativeSignCharacter.hyphen) {
            s = s.replace(settings.negativeSignCharacter, '-');
        }

        return s;
    }

    /**
     * Converts the ISO numeric string to the locale decimal and minus sign placement.
     * See the "outputFormat" option definition for more details.
     * Note: If the `outputFormat` is set to a number, the custom `negativeSignCharacter` is ignored.
     *
     * @param {string|null} value The unformatted value
     * @param {string|null} locale
     * @param {object} settings
     * @returns {*}
     */
    static _toLocale(value, locale, settings) {
        if (AutoNumericHelper.isNull(locale) || locale === AutoNumeric.options.outputFormat.string) {
            return value;
        }

        let result;
        switch (locale) {
            case AutoNumeric.options.outputFormat.number:
                result = Number(value);
                break;
            case AutoNumeric.options.outputFormat.dotNegative:
                result = AutoNumericHelper.isNegative(value) ? value.replace('-', '') + '-' : value;
                break;
            case AutoNumeric.options.outputFormat.comma:
            case AutoNumeric.options.outputFormat.negativeComma:
                result = value.replace('.', ',');
                break;
            case AutoNumeric.options.outputFormat.commaNegative:
                result = value.replace('.', ',');
                result = AutoNumericHelper.isNegative(result) ? result.replace('-', '') + '-' : result;
                break;
            // The default case
            case AutoNumeric.options.outputFormat.dot:
            case AutoNumeric.options.outputFormat.negativeDot:
                result = value;
                break;
            default :
                AutoNumericHelper.throwError(`The given outputFormat [${locale}] option is not recognized.`);
        }

        if (locale !== AutoNumeric.options.outputFormat.number && settings.negativeSignCharacter !== '-') {
            // Modify the default minus sign with the custom one, if any
            result = result.replace('-', settings.negativeSignCharacter);
        }

        return result;
    }

    /**
     * Modify the negative sign and the decimal character of the given string value to an hyphen (-) and a dot (.) in order to make that value 'typecastable' to a real number.
     *
     * @param {string} s The formatted value
     * @returns {string} The value with the 'normal' minus sign and decimal character
     */
    _modifyNegativeSignAndDecimalCharacterForRawValue(s) {
        if (this.settings.decimalCharacter !== '.') {
            s = s.replace(this.settings.decimalCharacter, '.');
        }

        if (this.settings.negativeSignCharacter !== '-' && this.settings.isNegativeSignAllowed) {
            s = s.replace(this.settings.negativeSignCharacter, '-');
        }

        if (!s.match(/\d/)) {
            // The default value returned by `get` is not formatted with decimals
            s += '0';
        }

        return s;
    }

    /**
     * Modify the negative sign and the decimal character to use those defined in the settings.
     *
     * @param {string} s
     * @param {object} settings
     * @returns {string}
     */
    static _modifyNegativeSignAndDecimalCharacterForFormattedValue(s, settings) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        if (settings.negativeSignCharacter !== '-') {
            s = s.replace('-', settings.negativeSignCharacter);
        }

        if (settings.decimalCharacter !== '.') {
            s = s.replace('.', settings.decimalCharacter);
        }

        return s;
    }

    /**
     * Return `true` if the given value is empty or is equal to the negative sign character defined in the given settings.
     *
     * @param {string} value
     * @param {object} settings
     * @returns {boolean}
     * @private
     */
    static _isElementValueEmptyOrOnlyTheNegativeSign(value, settings) {
        return value === '' || value === settings.negativeSignCharacter;
    }

    /**
     * Return the value with the currency symbol and the suffix text ordered according to the given settings.
     *
     * @param {string} value
     * @param {object} settings
     * @param {boolean} signOnEmpty
     * @returns {*}
     * @private
     */
    static _orderValueCurrencySymbolAndSuffixText(value, settings, signOnEmpty) {
        let result;
        if (settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.always || signOnEmpty) {
            switch (settings.negativePositiveSignPlacement) {
                case AutoNumeric.options.negativePositiveSignPlacement.left:
                case AutoNumeric.options.negativePositiveSignPlacement.prefix:
                case AutoNumeric.options.negativePositiveSignPlacement.none:
                    result = value + settings.currencySymbol + settings.suffixText;
                    break;
                default :
                    result = settings.currencySymbol + value + settings.suffixText;
            }
        } else {
            result = value;
        }

        return result;
    }

    /**
     * Modify the input value by adding the group separators, as defined in the settings, and the negative brackets if needed.
     *
     * @param {string} inputValue The formatted value (ie. with the `decimalCharacter` defined in the settings, not the raw value)
     * @param {object} settings
     * @param {boolean} isFocused
     * @param {number|string|null} currentRawValue The object current raw value (`this.rawValue`)
     * @param {number|string|null} forcedRawValue If this is set, then this rawValue is used instead of the one passed through the `settings` object. This is useful is some very specific cases where we need to set the raw value *after* settings the formatted value, using the `_addGroupSeparators()` method.
     * @returns {*}
     */
    static _addGroupSeparators(inputValue, settings, isFocused, currentRawValue, forcedRawValue = null) {
        //TODO Test if `inputValue` === '', and return '' directly if that's the case,
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        let isValueNegative;
        if (!AutoNumericHelper.isNull(forcedRawValue)) {
            // Prefer directly testing if the raw value is negative in order for the test to be more performant than manipulating the formatted value
            isValueNegative = forcedRawValue < 0;
        } else {
            isValueNegative = AutoNumericHelper.isNegative(inputValue, settings.negativeSignCharacter) || AutoNumericHelper.isNegativeWithBrackets(inputValue, settings.firstBracket, settings.lastBracket); // Test if the value is negative before removing the negative sign
        }

        inputValue = this._stripAllNonNumberCharactersExceptCustomDecimalChar(inputValue, settings, false, isFocused);

        if (this._isElementValueEmptyOrOnlyTheNegativeSign(inputValue, settings)) {
            return this._orderValueCurrencySymbolAndSuffixText(inputValue, settings, true);
        }

        const isZeroOrHasNoValue = AutoNumericHelper.isZeroOrHasNoValue(inputValue);

        // Temporarily remove the negative sign if present
        if (isValueNegative) {
            inputValue = inputValue.replace('-', ''); // At this point the `inputValue` has been normalized with a 'normal' negative sign `'-'` //TODO Check that comment validity, since `_stripAllNonNumberCharactersExceptCustomDecimalChar` *does not* convert the negative sign
        }

        settings.digitalGroupSpacing = settings.digitalGroupSpacing.toString();
        let digitalGroup;
        switch (settings.digitalGroupSpacing) {
            case AutoNumeric.options.digitalGroupSpacing.two:
                digitalGroup = /(\d)((\d)(\d{2}?)+)$/;
                break;
            case AutoNumeric.options.digitalGroupSpacing.twoScaled:
                digitalGroup = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                break;
            case AutoNumeric.options.digitalGroupSpacing.four:
                digitalGroup = /(\d)((\d{4}?)+)$/;
                break;
            case AutoNumeric.options.digitalGroupSpacing.three:
            default :
                digitalGroup = /(\d)((\d{3}?)+)$/;
        }

        // Splits the string at the decimal string
        let [integerPart, decimalPart] = inputValue.split(settings.decimalCharacter);
        if (settings.decimalCharacterAlternative && AutoNumericHelper.isUndefined(decimalPart)) {
            [integerPart, decimalPart] = inputValue.split(settings.decimalCharacterAlternative);
        }

        if (settings.digitGroupSeparator !== '') {
            // Re-inserts the thousand separator via a regular expression
            while (digitalGroup.test(integerPart)) {
                integerPart = integerPart.replace(digitalGroup, `$1${settings.digitGroupSeparator}$2`);
            }
        }

        // Find out how many decimal places should be kept, depending on the object state (isFocused)
        let decimalPlacesToRoundTo;
        if (isFocused) {
            decimalPlacesToRoundTo = settings.decimalPlacesShownOnFocus;
        } else {
            decimalPlacesToRoundTo = settings.decimalPlacesShownOnBlur;
        }

        if (decimalPlacesToRoundTo !== 0 && !AutoNumericHelper.isUndefined(decimalPart)) {
            if (decimalPart.length > decimalPlacesToRoundTo) {
                // Trim the excessive number of decimal places
                decimalPart = decimalPart.substring(0, decimalPlacesToRoundTo);
            }

            // Joins the whole number with the decimal value
            inputValue = `${integerPart}${settings.decimalCharacter}${decimalPart}`;
        } else {
            // Otherwise if it's an integer
            inputValue = integerPart;
        }

        // Add back the negative/positive sign and the currency symbol, at the right positions
        inputValue = AutoNumeric._mergeCurrencySignNegativePositiveSignAndValue(inputValue, settings, isValueNegative, isZeroOrHasNoValue); //TODO this function is called again in `_toggleNegativeBracket` if the brackets are removed; let's DRY this

        if (AutoNumericHelper.isNull(forcedRawValue)) {
            // If the raw value is not forced, use the default one from the settings object
            forcedRawValue = currentRawValue;
        }

        // Toggle the negative sign and brackets
        if (settings.negativeBracketsTypeOnBlur !== null && (forcedRawValue < 0 || AutoNumericHelper.isNegativeStrict(inputValue, settings.negativeSignCharacter))) {
            inputValue = this._toggleNegativeBracket(inputValue, settings, isFocused);
        }

        let result;
        if (settings.suffixText) {
            result = `${inputValue}${settings.suffixText}`;
        } else {
            result = inputValue;
        }

        return result;
    }

    /**
     * Return a semi-formatted string where the input value, the negative or positive sign, and the currency symbol are stitched together at the right positions, using the options set in the `settings` object.
     * Note : the `inputValue` is usually not a numeric string since the grouping symbols are already added to it at this point.
     *
     * @param {string} inputValue
     * @param {object} settings
     * @param {boolean} isValueNegative
     * @param {boolean} isZeroOrHasNoValue
     * @returns {*}
     * @throws
     * @private
     */
    static _mergeCurrencySignNegativePositiveSignAndValue(inputValue, settings, isValueNegative, isZeroOrHasNoValue) {
        let signToUse = '';
        if (isValueNegative) {
            signToUse = settings.negativeSignCharacter;
        } else if (settings.showPositiveSign && !isZeroOrHasNoValue) {
            signToUse = settings.positiveSignCharacter;
        }

        let result;
        if (settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
            if (settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                (isValueNegative || (!isValueNegative && settings.showPositiveSign && !isZeroOrHasNoValue))) {
                switch (settings.negativePositiveSignPlacement) {
                    case AutoNumeric.options.negativePositiveSignPlacement.prefix:
                    case AutoNumeric.options.negativePositiveSignPlacement.left:
                        result = `${signToUse}${settings.currencySymbol}${inputValue}`;
                        break;
                    case AutoNumeric.options.negativePositiveSignPlacement.right:
                        result = `${settings.currencySymbol}${signToUse}${inputValue}`;
                        break;
                    case AutoNumeric.options.negativePositiveSignPlacement.suffix:
                        result = `${settings.currencySymbol}${inputValue}${signToUse}`;
                        break;
                }
            } else {
                result = settings.currencySymbol + inputValue;
            }
        } else if (settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
            if (settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                (isValueNegative || (!isValueNegative && settings.showPositiveSign && !isZeroOrHasNoValue))) {
                switch (settings.negativePositiveSignPlacement) {
                    case AutoNumeric.options.negativePositiveSignPlacement.suffix:
                    case AutoNumeric.options.negativePositiveSignPlacement.right:
                        result = `${inputValue}${settings.currencySymbol}${signToUse}`;
                        break;
                    case AutoNumeric.options.negativePositiveSignPlacement.left:
                        result = `${inputValue}${signToUse}${settings.currencySymbol}`;
                        break;
                    case AutoNumeric.options.negativePositiveSignPlacement.prefix:
                        result = `${signToUse}${inputValue}${settings.currencySymbol}`;
                        break;
                }
            } else {
                result = inputValue + settings.currencySymbol;
            }
        }

        return result;
    }

    /**
     * Calculate where to put the caret position on focus if the element content is not selected.
     * This calculation is affected by the `caretPositionOnFocus` option which can be either `null`, `'start'`, `'end'`, `'decimalLeft'` or 'decimalRight'`, and will decide where to put the caret (on the left or right of the value or the decimal character, respectively) :
     * - `null` : the caret position is not forced
     * - `'start'` : the caret is positioned on the left hand side of the value
     * - `'end'` : the caret is positioned on the right hand side of the value
     * - `'decimalLeft'` : the caret is positioned on the left side of the decimal character
     * - `'decimalRight'` : the caret is positioned on the right side of the decimal character
     *
     * @param {string} value The formatted string stripped of the currency symbol and negative/positive sign
     * @returns {number}
     * @throws
     * @private
     */
    _initialCaretPosition(value) {
        if (AutoNumericHelper.isNull(this.settings.caretPositionOnFocus) &&
            this.settings.selectOnFocus === AutoNumeric.options.selectOnFocus.doNotSelect) {
            AutoNumericHelper.throwError('`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`.');
        }

        const isValueNegative = this.rawValue < 0;
        const isZeroOrHasNoValue = AutoNumericHelper.isZeroOrHasNoValue(value);
        const totalLength = value.length;

        let valueSize = 0;
        let integerSize = 0;
        let hasDecimalChar = false;
        let offsetDecimalChar = 0;
        if (this.settings.caretPositionOnFocus !== AutoNumeric.options.caretPositionOnFocus.start) {
            value = value.replace(this.settings.negativeSignCharacter, '');
            value = value.replace(this.settings.positiveSignCharacter, '');
            value = value.replace(this.settings.currencySymbol, '');
            valueSize = value.length;
            hasDecimalChar = AutoNumericHelper.contains(value, this.settings.decimalCharacter);

            if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalLeft ||
                this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalRight) {
                if (hasDecimalChar) {
                    integerSize = value.indexOf(this.settings.decimalCharacter);
                    offsetDecimalChar = this.settings.decimalCharacter.length;
                } else {
                    integerSize = valueSize;
                    offsetDecimalChar = 0;
                }
            }
        }

        let signToUse = '';
        if (isValueNegative) {
            signToUse = this.settings.negativeSignCharacter;
        } else if (this.settings.showPositiveSign && !isZeroOrHasNoValue) {
            signToUse = this.settings.positiveSignCharacter;
        }

        const positiveNegativeSignSize = signToUse.length;
        const currencySymbolSize = this.settings.currencySymbol.length;

        // Calculate the caret position based on `currencySymbolPlacement`, `negativePositiveSignPlacement` and `caretPositionOnFocus`
        let caretPosition;
        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
            if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.start) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +€|12.34
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // +€|12.34
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // €+|12.34
                            caretPosition = positiveNegativeSignSize + currencySymbolSize;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // €|12.34+
                            caretPosition = currencySymbolSize;
                            break;
                    }
                } else {                                                               // €|12.34
                    caretPosition = currencySymbolSize;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.end) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +€12.34|
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // +€12.34|
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // €+12.34|
                            caretPosition = totalLength;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // €12.34|+
                            caretPosition = currencySymbolSize + valueSize;
                            break;
                    }
                } else {                                                               // €12.34|
                    caretPosition = totalLength;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalLeft) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +€12|.34
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // +€12|.34
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // €+12|.34
                            caretPosition = positiveNegativeSignSize + currencySymbolSize + integerSize;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // €12|.34+
                            caretPosition = currencySymbolSize + integerSize;
                            break;
                    }
                } else {                                                               // €12|.34
                    caretPosition = currencySymbolSize + integerSize;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalRight) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +€12.|34
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // +€12.|34
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // €+12.|34
                            caretPosition = positiveNegativeSignSize + currencySymbolSize + integerSize + offsetDecimalChar;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // €12.|34+
                            caretPosition = currencySymbolSize + integerSize + offsetDecimalChar;
                            break;
                    }
                } else {                                                               // €12.|34
                    caretPosition = currencySymbolSize + integerSize + offsetDecimalChar;
                }
            }
        } else if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
            if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.start) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // |12.34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // |12.34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // |12.34+€
                            caretPosition = 0;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +|12.34€
                            caretPosition = positiveNegativeSignSize;
                            break;
                    }
                } else {                                                               // |12.34€
                    caretPosition = 0;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.end) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // 12.34|€+
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // 12.34|€+
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // 12.34|+€
                            caretPosition = valueSize;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +12.34|€
                            caretPosition = positiveNegativeSignSize + valueSize;
                            break;
                    }
                } else {                                                               // 12.34|€
                    caretPosition = valueSize;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalLeft) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // 12|.34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // 12|.34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // 12|.34+€
                            caretPosition = integerSize;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +12|.34€
                            caretPosition = positiveNegativeSignSize + integerSize;
                            break;
                    }
                } else {                                                               // 12|.34€
                    caretPosition = integerSize;
                }
            } else if (this.settings.caretPositionOnFocus === AutoNumeric.options.caretPositionOnFocus.decimalRight) {
                if (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.none &&
                    (isValueNegative || (!isValueNegative && this.settings.showPositiveSign && !isZeroOrHasNoValue))) {
                    switch (this.settings.negativePositiveSignPlacement) {
                        case AutoNumeric.options.negativePositiveSignPlacement.suffix: // 12.|34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.right:  // 12.|34€+
                        case AutoNumeric.options.negativePositiveSignPlacement.left:   // 12.|34+€
                            caretPosition = integerSize + offsetDecimalChar;
                            break;
                        case AutoNumeric.options.negativePositiveSignPlacement.prefix: // +12.|34€
                            caretPosition = positiveNegativeSignSize + integerSize + offsetDecimalChar;
                            break;
                    }
                } else {                                                               // 12.|34€
                    caretPosition = integerSize + offsetDecimalChar;
                }
            }
        }

        return caretPosition;
    }

    /**
     * Truncate the trailing zeroes to the given number of decimal places
     *
     * @param {string} roundedInputValue
     * @param {int} decimalPlacesNeeded The number of decimal places to keep
     * @returns {string}
     */
    static _truncateZeros(roundedInputValue, decimalPlacesNeeded) {
        let regex;
        switch (decimalPlacesNeeded) {
            case 0:
                // Prevents padding - removes trailing zeros until the first significant digit is encountered
                regex = /(\.(?:\d*[1-9])?)0*$/;
                break;
            case 1:
                // Allows padding when decimalPlacesNeeded equals one - leaves one zero trailing the decimal character
                regex = /(\.\d(?:\d*[1-9])?)0*$/;
                break;
            default :
                // Removes superfluous zeros after the decimalPlacesNeeded length
                regex = new RegExp(`(\\.\\d{${decimalPlacesNeeded}}(?:\\d*[1-9])?)0*`);
        }

        // If there are no decimal places, we don't need a decimal point at the end
        roundedInputValue = roundedInputValue.replace(regex, '$1');
        if (decimalPlacesNeeded === 0) {
            roundedInputValue = roundedInputValue.replace(/\.$/, '');
        }

        return roundedInputValue;
    }

    /**
     * Round the given `value` with the number of decimal places to keep for the raw value.
     *
     * @param {string|null} value An unformatted numeric value
     * @param {object} settings
     * @returns {*}
     * @private
     */
    static _roundRawValue(value, settings) {
        return this._roundValue(value, settings, settings.decimalPlacesRawValue);
    }

    /**
     * Round the given `value` with the number of decimal places to show for the element if focused.
     *
     * @param {string|null} value An unformatted numeric value
     * @param {object} settings
     * @returns {*}
     * @private
     */
    static _roundFormattedValueShownOnFocus(value, settings) {
        return this._roundValue(value, settings, Number(settings.decimalPlacesShownOnFocus));
    }

    /**
     * Round the given `value` with the number of decimal places to show for the element if unfocused.
     *
     * @param {string|null} value An unformatted numeric value
     * @param {object} settings
     * @returns {*}
     * @private
     */
    static _roundFormattedValueShownOnBlur(value, settings) {
        return this._roundValue(value, settings, Number(settings.decimalPlacesShownOnBlur));
    }

    /**
     * Round the given `value` with the number of decimal places to show for the element based on the value of isFocused.
     *
     * @param {string|null} value An unformatted numeric value
     * @param {object} settings
     * @param {boolean} isFocused
     * @returns {*}
     * @private
     */
    static _roundFormattedValueShownOnFocusOrBlur(value, settings, isFocused) {
        if (isFocused) {
            return this._roundFormattedValueShownOnFocus(value, settings);
        } else {
            return this._roundFormattedValueShownOnBlur(value, settings);
        }
    }

    /**
     * Round the input value using the rounding method defined in the settings.
     * This function accepts multiple rounding methods. See the documentation for more details about those.
     *
     * Note : This is handled as text since JavaScript math functions can return inaccurate values.
     *
     * @param {string|null} inputValue An unformatted numeric value
     * @param {object} settings
     * @param {int} decimalPlacesToRoundTo
     * @returns {*}
     */
    static _roundValue(inputValue, settings, decimalPlacesToRoundTo) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        if (AutoNumericHelper.isNull(inputValue)) {
            // Prevent rounding a `null` value
            return inputValue;
        }

        //TODO Divide this function to make it easier to understand
        inputValue = (inputValue === '') ? '0' : inputValue.toString();
        if (settings.roundingMethod === AutoNumeric.options.roundingMethod.toNearest05 ||
            settings.roundingMethod === AutoNumeric.options.roundingMethod.toNearest05Alt ||
            settings.roundingMethod === AutoNumeric.options.roundingMethod.upToNext05 ||
            settings.roundingMethod === AutoNumeric.options.roundingMethod.downToNext05) {
            return this._roundCloseTo05(inputValue, settings);
        }

        const [negativeSign, preparedValue] = AutoNumeric._prepareValueForRounding(inputValue, settings);
        inputValue = preparedValue;

        const decimalCharacterPosition = inputValue.lastIndexOf('.');
        const inputValueHasNoDot = decimalCharacterPosition === -1; // No dot character is found in the `inputValue`
        const [, decimalPart] = inputValue.split('.'); // Here the decimal character is always a period '.'
        const hasDecimals = decimalPart > 0;

        // If no decimals are detected
        if (!hasDecimals &&
            (settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.never ||
            settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.floats)) {
            return (Number(inputValue) === 0) ? inputValue : `${negativeSign}${inputValue}`;
        }

        // Else there are some decimal places that may need to be rounded
        // Sets the truncate zero method
        let temporaryDecimalPlacesOverride;
        if (settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.always ||
            settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.floats) {
            temporaryDecimalPlacesOverride = decimalPlacesToRoundTo;
        } else {
            temporaryDecimalPlacesOverride = 0;
        }

        // Define the decimal position to use (use the very last position if there are no dot in the initial inputValue)
        const decimalPositionToUse = inputValueHasNoDot ? inputValue.length - 1 : decimalCharacterPosition;
        // Checks decimal places to determine if rounding is required
        let checkDecimalPlaces = (inputValue.length - 1) - decimalPositionToUse;
        let inputValueRounded = '';

        // Check if no rounding is required
        if (checkDecimalPlaces <= decimalPlacesToRoundTo) {
            // Check if we need to pad with zeros
            inputValueRounded = inputValue;
            if (checkDecimalPlaces < temporaryDecimalPlacesOverride) {
                if (inputValueHasNoDot) {
                    inputValueRounded = `${inputValueRounded}${settings.decimalCharacter}`;
                }

                let zeros = '000000'; //TODO Change that string with a longer one to prevent having to loop numerous times in the next `while` statement?
                while (checkDecimalPlaces < temporaryDecimalPlacesOverride) {
                    zeros = zeros.substring(0, temporaryDecimalPlacesOverride - checkDecimalPlaces);
                    inputValueRounded += zeros;
                    checkDecimalPlaces += zeros.length;
                }
            } else if (checkDecimalPlaces > temporaryDecimalPlacesOverride) {
                inputValueRounded = this._truncateZeros(inputValueRounded, temporaryDecimalPlacesOverride);
            } else if (checkDecimalPlaces === 0 && temporaryDecimalPlacesOverride === 0) {
                // Remove any trailing dot, if any
                inputValueRounded = inputValueRounded.replace(/\.$/, '');
            }

            return (Number(inputValueRounded) === 0) ? inputValueRounded : `${negativeSign}${inputValueRounded}`;
        }

        // Rounded length of the string after rounding
        let roundedStrLength;
        if (inputValueHasNoDot) {
            roundedStrLength = decimalPlacesToRoundTo - 1;
        } else {
            roundedStrLength = Number(decimalPlacesToRoundTo) + Number(decimalCharacterPosition);
        }

        const lastDigit = Number(inputValue.charAt(roundedStrLength + 1));
        let inputValueArray = inputValue.substring(0, roundedStrLength + 1).split('');
        let odd;
        if (inputValue.charAt(roundedStrLength) === '.') {
            odd = inputValue.charAt(roundedStrLength - 1) % 2;
        } else {
            odd = inputValue.charAt(roundedStrLength) % 2;
        }

        if (this._shouldRoundUp(lastDigit, settings, negativeSign, odd)) {
            // Round up the last digit if required, and continue until no more 9's are found
            for (let i = (inputValueArray.length - 1); i >= 0; i -= 1) {
                if (inputValueArray[i] !== '.') {
                    inputValueArray[i] = +inputValueArray[i] + 1;
                    if (inputValueArray[i] < 10) {
                        break;
                    }

                    if (i > 0) {
                        inputValueArray[i] = '0';
                    }
                }
            }
        }

        // Reconstruct the string, converting any 10's to 0's
        inputValueArray = inputValueArray.slice(0, roundedStrLength + 1);

        // Return the rounded value
        inputValueRounded = this._truncateZeros(inputValueArray.join(''), temporaryDecimalPlacesOverride);

        return (Number(inputValueRounded) === 0) ? inputValueRounded : `${negativeSign}${inputValueRounded}`;
    }

    /**
     * Round the `value` when the rounding method deals with '.05'
     *
     * @param {string} value
     * @param {object} settings
     * @returns {string}
     * @private
     */
    static _roundCloseTo05(value, settings) {
        switch (settings.roundingMethod) {
            case AutoNumeric.options.roundingMethod.toNearest05:
            case AutoNumeric.options.roundingMethod.toNearest05Alt:
                value = (Math.round(value * 20) / 20).toString();
                break;
            case AutoNumeric.options.roundingMethod.upToNext05:
                value = (Math.ceil(value * 20) / 20).toString();
                break;
            default :
                value = (Math.floor(value * 20) / 20).toString();
        }

        let result;
        if (!AutoNumericHelper.contains(value, '.')) {
            result = value + '.00';
        } else if (value.length - value.indexOf('.') < 3) {
            result = value + '0';
        } else {
            result = value;
        }

        return result;
    }

    /**
     * Modify the given `value` in order to make it usable for the rest of the rounding function.
     * This convert the `value` to a positive one, trim any leading zeros and make sure it does not starts with a leading dot.
     *
     * @param {string} value The unformatted value
     * @param {object} settings
     * @returns {[string, string]}
     * @private
     */
    static _prepareValueForRounding(value, settings) {
        // Checks if `inputValue` is a negative value
        let negativeSign = '';
        if (AutoNumericHelper.isNegativeStrict(value, '-')) { // The value being unformatted, we check for the minus sign
            negativeSign = '-';

            // Removes the negative sign that will be added back later if required
            value = value.replace('-', '');
        }

        // Append a zero if the first character is not a digit (then it is likely a dot)
        if (!value.match(/^\d/)) {
            value = `0${value}`;
        }

        // Determines if the value is equal to zero. If it is, remove the negative sign
        if (Number(value) === 0) {
            negativeSign = '';
        }

        // Trims leading zero's as needed
        if ((Number(value) > 0 && settings.leadingZero !== AutoNumeric.options.leadingZero.keep) ||
            (value.length > 0 && settings.leadingZero === AutoNumeric.options.leadingZero.allow)) {
            value = value.replace(/^0*(\d)/, '$1');
        }

        return [negativeSign, value];
    }

    /**
     * Return `true` if a round up should be done given the last digit, the settings and other information about the value.
     *
     * @param {number} lastDigit
     * @param {object} settings
     * @param {string} negativeSign This variable comes from `_prepareValueForRounding()`, which return `'-'` if the initial value was negative
     * @param {number} odd
     * @returns {boolean}
     * @private
     */
    static _shouldRoundUp(lastDigit, settings, negativeSign, odd) {
        return (lastDigit > 4 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfUpSymmetric)                                     || // Round half up symmetric
            (lastDigit > 4 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfUpAsymmetric && negativeSign === '')                || // Round half up asymmetric positive values
            (lastDigit > 5 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfUpAsymmetric && negativeSign === '-')               || // Round half up asymmetric negative values
            (lastDigit > 5 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfDownSymmetric)                                      || // Round half down symmetric
            (lastDigit > 5 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfDownAsymmetric && negativeSign === '')              || // Round half down asymmetric positive values
            (lastDigit > 4 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfDownAsymmetric && negativeSign === '-')             || // Round half down asymmetric negative values
            (lastDigit > 5 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfEvenBankersRounding)                                ||
            (lastDigit === 5 && settings.roundingMethod === AutoNumeric.options.roundingMethod.halfEvenBankersRounding && odd === 1)                 ||
            (lastDigit > 0 && settings.roundingMethod === AutoNumeric.options.roundingMethod.toCeilingTowardPositiveInfinity && negativeSign === '') ||
            (lastDigit > 0 && settings.roundingMethod === AutoNumeric.options.roundingMethod.toFloorTowardNegativeInfinity && negativeSign === '-')  ||
            (lastDigit > 0 && settings.roundingMethod === AutoNumeric.options.roundingMethod.upRoundAwayFromZero);                                      // Round up away from zero
    }

    /**
     * Truncates the decimal part of a number to the given number of decimal places `decimalPlacesToRoundTo`.
     *
     * @param {string} value
     * @param {object} settings
     * @param {boolean} isPaste
     * @param {int} decimalPlacesToRoundTo
     * @returns {*}
     */
    static _truncateDecimalPlaces(value, settings, isPaste, decimalPlacesToRoundTo) {
        if (isPaste) {
            value = this._roundFormattedValueShownOnFocus(value, settings);
        }

        const [integerPart, decimalPart] = value.split(settings.decimalCharacter);

        // Truncate the decimal part to the satisfying length since we would round it anyway
        if (decimalPart && decimalPart.length > decimalPlacesToRoundTo) {
            if (decimalPlacesToRoundTo > 0) {
                const modifiedDecimalPart = decimalPart.substring(0, decimalPlacesToRoundTo);
                value = `${integerPart}${settings.decimalCharacter}${modifiedDecimalPart}`;
            } else {
                value = integerPart;
            }
        }

        return value;
    }

    /**
     * Check that the number satisfy the format conditions
     * and lays between settings.minimumValue and settings.maximumValue
     * and the string length does not exceed the digits in settings.minimumValue and settings.maximumValue
     *
     * @param {string} value
     * @param {object} settings
     * @returns {*}
     */
    static _checkIfInRangeWithOverrideOption(value, settings) {
        if (AutoNumericHelper.isNull(value) && settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.null) {
            // When the `null` value is accepted as the `rawValue`, the limits are ignored
            return [true, true];
        }

        value = value.toString();
        value = value.replace(',', '.');
        const minParse = AutoNumericHelper.parseStr(settings.minimumValue);
        const maxParse = AutoNumericHelper.parseStr(settings.maximumValue);
        const valParse = AutoNumericHelper.parseStr(value);

        let result;
        switch (settings.overrideMinMaxLimits) {
            case AutoNumeric.options.overrideMinMaxLimits.floor:
                result = [AutoNumericHelper.testMinMax(minParse, valParse) > -1, true];
                break;
            case AutoNumeric.options.overrideMinMaxLimits.ceiling:
                result = [true, AutoNumericHelper.testMinMax(maxParse, valParse) < 1];
                break;
            case AutoNumeric.options.overrideMinMaxLimits.ignore:
                result = [true, true];
                break;
            default:
                result = [AutoNumericHelper.testMinMax(minParse, valParse) > -1, AutoNumericHelper.testMinMax(maxParse, valParse) < 1];
        }

        return result;
    }

    /**
     * Original settings saved for use when the `decimalPlacesShownOnFocus` and `showOnlyNumbersOnFocus` options are used.
     * Those original settings are used exclusively in the `focusin` and `focusout` event handlers.
     */
    _keepAnOriginalSettingsCopy() {
        this.originalDigitGroupSeparator = this.settings.digitGroupSeparator;
        this.originalCurrencySymbol      = this.settings.currencySymbol;
        this.originalSuffixText          = this.settings.suffixText;
    }

    /**
     * Original settings saved for use when `decimalPlacesShownOnFocus` & `showOnlyNumbersOnFocus` options are being used.
     * This is taken from Quirksmode.
     *
     * @param {string} name
     * @returns {*}
     */
    static _readCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        let c = '';
        for (let i = 0; i < ca.length; i += 1) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }

        return null;
    }

    /**
     * Test if sessionStorage is supported.
     * This is taken from Modernizr.
     *
     * @returns {boolean}
     */
    static _storageTest() {
        const mod = 'modernizr';
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Removes any zeros in excess in the front and back of the given `value`, according to the `settings`.
     * This also manages the cases where the decimal point is on the far left or far right of the `value`.
     *
     * @param {string} value
     * @returns {string|null}
     */
    _trimLeadingAndTrailingZeros(value) {
        // Return the empty string is the value is already empty. This prevent converting that value to '0'.
        if (value === '' || value === null) {
            return value;
        }

        if (this.settings.leadingZero !== AutoNumeric.options.leadingZero.keep) {
            if (Number(value) === 0) {
                // Return '0' if the value is zero
                return '0';
            }

            // Trim the leading zeros, while leaving one zero to the left of the decimal point if needed
            value = value.replace(/^(-)?0+(?=\d)/g,'$1');
        }

        //TODO remove this from that function and use `trimPaddedZerosFromDecimalPlaces()` instead
        // Trim the trailing zeros after the last decimal place not being a zero (ie. 1.2300 -> 1.23)
        if (AutoNumericHelper.contains(value, '.')) {
            value = value.replace(/(\.[0-9]*?)0+$/, '$1');
        }

        // Remove any trailing decimal point
        value = value.replace(/\.$/, '');

        return value;
    }

    /**
     * Generate the name for the persistent stored data variable
     * @private
     */
    _setPersistentStorageName() {
        if (this.settings.saveValueToSessionStorage) {
            if (this.domElement.name !== '' && !AutoNumericHelper.isUndefined(this.domElement.name)) {
                this.rawValueStorageName = `${this.storageNamePrefix}${decodeURIComponent(this.domElement.name)}`;
            } else {
                this.rawValueStorageName = `${this.storageNamePrefix}${this.domElement.id}`;
            }
        }
    }

    /**
     * Save the raw Value into sessionStorage or a cookie depending on what the browser is supporting.
     * @private
     */
    _saveValueToPersistentStorage() {
        if (this.settings.saveValueToSessionStorage) {
            if (this.sessionStorageAvailable) {
                sessionStorage.setItem(this.rawValueStorageName, this.rawValue);
            } else {
                // Use cookies for obsolete browsers that do not support sessionStorage (ie. IE 6 & 7)
                document.cookie = `${this.rawValueStorageName}=${this.rawValue}; expires= ; path=/`;
            }
        }
    }

    /**
     * Retrieve the raw value from sessionStorage or the cookie depending on what the browser is supporting.
     *
     * @returns {*}
     * @private
     */
    _getValueFromPersistentStorage() {
        if (this.settings.saveValueToSessionStorage) {
            let result;
            if (this.sessionStorageAvailable) {
                result = sessionStorage.getItem(this.rawValueStorageName);
            } else {
                result = this.constructor._readCookie(this.rawValueStorageName);
            }

            return result;
        }

        AutoNumericHelper.warning('`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.', this.settings.showWarnings);

        return null;
    }

    /**
     * Remove the raw value data from sessionStorage or the cookie depending on what the browser is supporting.
     * @private
     */
    _removeValueFromPersistentStorage() {
        if (this.settings.saveValueToSessionStorage) {
            if (this.sessionStorageAvailable) {
                sessionStorage.removeItem(this.rawValueStorageName);
            } else {
                const date = new Date();
                date.setTime(date.getTime() - 86400000); // -86400000 === -1 * 24 * 60 * 60 * 1000
                const expires = `; expires=${date.toUTCString()}`;
                document.cookie = `${this.rawValueStorageName}='' ;${expires}; path=/`;
            }
        }
    }

    /**
     * Get the default value from the html `value` attribute.
     * Return the empty string if such attribute is not found.
     *
     * @param {HTMLElement} domElement
     *
     * @returns {string}
     * @private
     */
    _getDefaultValue(domElement) {
        // Get the default html value
        // Note: we do not use the simpler `return domElement.defaultValue;` code since the given domElement can sometime be a `contenteditable` element which does not support the `defaultValue` attribute.
        const value = domElement.getAttribute('value');

        if (AutoNumericHelper.isNull(value)) {
            return '';
        }

        return value;
    }

    /**
     * Handler for 'focusin' and 'mouseenter' events
     * On focusin, multiple things happens :
     * - If `Alt` is pressed, unformat
     * - Remove the separators if `showOnlyNumbersOnFocus` is set
     * - Depending on `emptyInputBehavior`, reformat the empty formatted value
     * - Display the correct number of decimal places (on focus/blur)
     * - Place the caret correctly if the element is empty
     *
     * Note: On focusin, the `rawValue` is never changed. Only the formatted value can be modified.
     *
     * @param {KeyboardEvent|MouseEvent} e
     * @private
     */
    _onFocusInAndMouseEnter(e) {
        //TODO Create separate handlers for the focus and mouseenter events
        this.isEditing = false; // Just in case no `keyUp` event have been sent (ie. if the user lost the focus from the current window while typing)

        if (!this.formulaMode && this.settings.unformatOnHover && e.type === 'mouseenter' && e.altKey) {
            this.constructor._unformatAltHovered(this);

            return;
        }

        if (e.type === 'focus') { //TODO Move that back to the 'focus' event handler when the separation between the 'focus' and 'mouseenter' handler will be done
            // Keep track if the element is currently focused
            this.isFocused = true;
            this.rawValueOnFocus = this.rawValue; // Keep track of the initial rawValue. This is needed to define if a change event must be dispatched later
        }

        if (e.type === 'focus' && this.settings.unformatOnHover && this.hoveredWithAlt) {
            this.constructor._reformatAltHovered(this);
        }

        if (e.type === 'focus' || e.type === 'mouseenter' && !this.isFocused) {
            let elementValueToSet = null; // Store the value we want to set on the element, and only call `_setElementValue()` once

            if (this.settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.focus &&
                this.rawValue < 0 && this.settings.negativeBracketsTypeOnBlur !== null && this.settings.isNegativeSignAllowed) { //FIXME this is called a second time in _addGroupSeparators too. Prevent this, if possible.
                // Only remove the brackets if the value is negative
                elementValueToSet = this.constructor._removeBrackets(AutoNumericHelper.getElementValue(this.domElement), this.settings);
                //FIXME The element value is set here, why continue and set it again later in that same parent logic block?
            }

            // Use the `rawValue`, multiplied by `rawValueDivisor` if defined
            const rawValueToFormat = this._getRawValueToFormat(this.rawValue);

            // Modify the element value according to the number of decimal places to show on focus or the `showOnlyNumbersOnFocus` option
            if (rawValueToFormat !== '') {
                // Round the given value according to the object state (focus/unfocused)
                const roundedValue = this.constructor._roundFormattedValueShownOnFocusOrBlur(rawValueToFormat, this.settings, this.isFocused);

                if (this.settings.showOnlyNumbersOnFocus === AutoNumeric.options.showOnlyNumbersOnFocus.onlyNumbers) {
                    //TODO Use a `this.settingsOverride` object instead of modifying the `this.settings` object
                    this.settings.digitGroupSeparator = '';
                    this.settings.currencySymbol      = '';
                    this.settings.suffixText          = '';
                    elementValueToSet = roundedValue.replace('.', this.settings.decimalCharacter);
                } else {
                    let formattedValue;
                    if (AutoNumericHelper.isNull(roundedValue)) {
                        formattedValue = '';
                    } else {
                        formattedValue = this.constructor._addGroupSeparators(roundedValue.replace('.', this.settings.decimalCharacter), this.settings, this.isFocused, rawValueToFormat);
                    }

                    elementValueToSet = formattedValue;
                }
            }

            // In order to send a 'native' change event when blurring the input, we need to first store the initial input value on focus.
            if (AutoNumericHelper.isNull(elementValueToSet)) {
                this.valueOnFocus = '';
            } else {
                this.valueOnFocus = elementValueToSet;
            }

            this.lastVal = this.valueOnFocus;
            const isEmptyValue = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings);
            const orderedValue = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, true); // This displays the currency sign on hover even if the rawValue is empty
            const orderedValueTest = (isEmptyValue && orderedValue !== '') && this.settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.focus;
            if (orderedValueTest) {
                elementValueToSet = orderedValue;
            }

            if (!AutoNumericHelper.isNull(elementValueToSet)) {
                this._setElementValue(elementValueToSet);
            }

            if (orderedValueTest && orderedValue === this.settings.currencySymbol && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
                // If there is a currency symbol and its on the right hand side, then we place the caret accordingly on the far left side
                AutoNumericHelper.setElementSelection(e.target, 0);
            }
        }
    }

    /**
     * Handler for the 'focus' event.
     * We update the info of the focused state in the `this.isFocused` variable when the element gets focused.
     * @private
     */
    _onFocus() {
        if (this.settings.isCancellable) {
            // Save the current unformatted value for later use by the 'cancellable' feature
            this._saveCancellableValue();
        }
    }

    /**
     * Handler for the 'focusin' event.
     * This is called before the 'focus' event, and is necessary to change the selection on focus under Firefox for instance.
     *
     * @param {Event} e
     * @private
     */
    _onFocusIn(e) {
        if (this.settings.selectOnFocus) {
            // The whole input content is selected on focus (following the `selectOnFocus` and `selectNumberOnly` options)
            //XXX Firefox <47 does not respect this selection...Oh well.
            this.select();
        } else {
            // Or we decide where to put the caret using the `caretPositionOnFocus` option
            if (!AutoNumericHelper.isNull(this.settings.caretPositionOnFocus)) {
                AutoNumericHelper.setElementSelection(e.target, this._initialCaretPosition(AutoNumericHelper.getElementValue(this.domElement)));
            }
        }
    }

    /**
     * Enter the special 'formula mode' where users can enter a math expression that will be evaluated on blur and `enter`
     * @private
     */
    _enterFormulaMode() {
        if (this.settings.formulaMode) {
            this.formulaMode = true; // 'Deactivate' the normal event listeners behavior
            // Clear the input and add a '=' sign to it
            AutoNumericHelper.setElementValue(this.domElement, '=');
            // Put the caret after the `=` character
            AutoNumericHelper.setElementSelection(this.domElement, 1);
        }
    }

    /**
     * Exit the formula mode
     * Tries to parse and evaluate the math expression, then `set()` the result if it's correct, otherwise reformat with the previous `rawValue`
     * @private
     */
    _exitFormulaMode() {
        // Parse the formula
        let formula = AutoNumericHelper.getElementValue(this.domElement);
        formula     = formula.replace(/^\s*=/, ''); // Remove all the leading whitespaces and the equal sign from the formula
        let result;
        try {
            const ast = new Parser(formula, this.settings.decimalCharacter);
            result    = (new Evaluator()).evaluate(ast);
        } catch (e) {
            // Error when parsing the math expression
            this._triggerEvent(AutoNumeric.events.invalidFormula, this.domElement, {
                formula,
                aNElement: this,
            });
            this.reformat();
            this.formulaMode = false;

            return;
        }

        // The math expression is correctly parsed
        this._triggerEvent(AutoNumeric.events.validFormula, this.domElement, {
            formula,
            result,
            aNElement: this,
        });
        this.set(result); // Note: we can have a valid formula, but an invalid value (ie. out of the min/max range)
        this.formulaMode = false;
    }

    /**
     * Returns `true` if the non printable key is accepted in formula mode
     *
     * @returns {boolean}
     * @private
     */
    _acceptNonPrintableKeysInFormulaMode() {
        return this.eventKey === AutoNumericEnum.keyName.Backspace || this.eventKey === AutoNumericEnum.keyName.Delete ||
            this.eventKey === AutoNumericEnum.keyName.LeftArrow || this.eventKey === AutoNumericEnum.keyName.RightArrow ||
            this.eventKey === AutoNumericEnum.keyName.Home || this.eventKey === AutoNumericEnum.keyName.End;
    }

    /**
     * Handler for 'keydown' events.
     * The user just started pushing any key, hence one event is sent.
     *
     * Note :
     * By default a 'normal' input output those events in the right order when inputting a character key (ie. 'a') :
     * - keydown
     * - keypress
     * - input
     * - keyup
     *
     * ...when inputting a modifier key (ie. 'ctrl') :
     * - keydown
     * - keyup
     *
     * If 'delete' or 'backspace' are entered 'normally', the following events are sent :
     * - keydown
     * - input
     * - keyup
     *
     * If 'delete' or 'backspace' are entered continuously (with the key still pressed), the following events are sent :
     * - keydown
     * - input
     * [- keydown
     * - input] x times
     * - keyup
     *
     * If 'enter' is entered and the value has not changed, the following events are sent :
     * - keydown
     * - keypress
     * - keyup
     *
     * If 'enter' is entered and the value has been changed, the following events are sent :
     * - keydown
     * - keypress
     * - change
     * - keyup
     *
     * When a paste is done, the following events are sent :
     * - input (if paste is done with the mouse)
     *
     * - keydown (if paste is done with ctrl+v)
     * - keydown
     * - input
     * - keyup
     * - keyup
     *
     * @param {KeyboardEvent} e
     */
    _onKeydown(e) {
        this.formatted = false; // Keep track if the element has been formatted already. If that's the case, prevent further format calculations.
        this.isEditing = true; // Keep track if the user is currently editing the element manually

        if (!this.formulaMode && !this.isFocused && this.settings.unformatOnHover && e.altKey && this.domElement === AutoNumericHelper.getHoveredElement()) {
            // Here I prevent calling _unformatAltHovered if the element is already focused, since the global 'keydown' listener will pick it up as well
            this.constructor._unformatAltHovered(this);

            return;
        }

        this._updateEventKeyInfo(e);
        this.initialValueOnKeydown = AutoNumericHelper.getElementValue(e.target); // This is needed in `onKeyup()` to check if the value as changed during the key press
        this.initialRawValueOnKeydown = this.rawValue;

        this.keydownEventCounter += 1; // Every time the keydown event is caught, increment the counter to keep track if the key is continuously pressed
        if (this.keydownEventCounter === 1) {
            this.initialRawValueOnFirstKeydown = this.rawValue;
        }

        if (this.formulaMode) {
            if (this.eventKey === AutoNumericEnum.keyName.Esc) { // Cancel the formula
                this.formulaMode = false;
                this.reformat();

                return;
            }

            if (this.eventKey === AutoNumericEnum.keyName.Enter) { // Calculate the formula
                this._exitFormulaMode();

                return;
            }

            // Accept the backspace, delete, arrow, home and end keys
            if (this._acceptNonPrintableKeysInFormulaMode()) {
                return;
            }

            //TODO Manage the undo/redo events *while* editing a math expression
            //TODO Manage the cut/paste events *while* editing a math expression
        } else if (this.eventKey === AutoNumericEnum.keyName.Equal) {
            this._enterFormulaMode();

            return;
        }

        if (this.domElement.readOnly || this.settings.readOnly || this.domElement.disabled) {
            this.processed = true;

            return;
        }

        if (this.eventKey === AutoNumericEnum.keyName.Esc) {
            //XXX The default 'Escape' key behavior differs between Firefox and Chrome, Firefox already having a built-in 'cancellable-like' feature. This is why we call `e.preventDefault()` here instead of just when `isCancellable` is set to `true`. This allow us to keep the same behavior across browsers.
            e.preventDefault();

            if (this.settings.isCancellable) {
                // If the user wants to cancel his modifications:
                // We set back the saved value
                if (this.rawValue !== this.savedCancellableValue) {
                    // Do not set the value again if it has not changed
                    this.set(this.savedCancellableValue);
                    // And we need to send an 'input' event when setting back the initial value in order to make other scripts aware of the value change...
                    this._triggerEvent(AutoNumeric.events.native.input, e.target);
                }
            }

            // ..and lastly we update the caret selection, even if the option `isCancellable` is false
            this.select();
            //TODO Add an option to select either the integer or decimal part with `Esc`
        }

        // The "enter" key throws a `change` event if the raw value has changed since the `focus` event
        let targetValue = AutoNumericHelper.getElementValue(e.target);
        if (this.eventKey === AutoNumericEnum.keyName.Enter && this.rawValue !== this.rawValueOnFocus) {
            this._triggerEvent(AutoNumeric.events.native.change, e.target);
            this.valueOnFocus = targetValue;
            this.rawValueOnFocus = this.rawValue;

            if (this.settings.isCancellable) {
                // If the user activated the 'cancellable' feature, we save the validated value when 'Enter' is hit
                this._saveCancellableValue();
            }
        }

        this._updateInternalProperties(e);

        if (this._processNonPrintableKeysAndShortcuts(e)) {
            this.processed = true;

            return;
        }

        // Check if the key is a delete/backspace key
        if (this.eventKey === AutoNumericEnum.keyName.Backspace || this.eventKey === AutoNumericEnum.keyName.Delete) {
            this._processCharacterDeletion(); // Because backspace and delete only triggers keydown and keyup events, not keypress
            this.processed = true;
            this._formatValue(e);

            // If and only if the resulting value has changed after that backspace/delete, then we have to send an 'input' event like browsers normally do.
            targetValue = AutoNumericHelper.getElementValue(e.target); // Update the value since it could have been changed during the deletion
            if ((targetValue !== this.lastVal) && this.throwInput) {
                // Throw an input event when a character deletion is detected
                this._triggerEvent(AutoNumeric.events.native.input, e.target);
                e.preventDefault(); // ...and immediately prevent the browser to delete a second character
            }

            this.lastVal = targetValue;
            this.throwInput = true;
        }
    }

    /**
     * Handler for 'keypress' events.
     * The user is still pressing the key, which will output a character (ie. '2') continuously until he releases the key.
     * Note: 'keypress' events are not sent for delete keys like Backspace/Delete.
     *
     * @param {KeyboardEvent} e
     */
    _onKeypress(e) {
        if (this.formulaMode) {
            // Accept the backspace, delete, arrow, home and end keys
            if (this._acceptNonPrintableKeysInFormulaMode()) {
                return;
            }

            //TODO Prevent keys to be entered on the left-hand side of the '=' sign?...Or just let the user see what they are wrongly doing?
            if (this.settings.formulaChars.test(this.eventKey)) { // Accept the custom decimal character too
                return; // Accept the key in the formula (and do not accept the '=' character here again)
            } else {
                e.preventDefault(); // Reject the key
            }

            return;
        }

        if (this.eventKey === AutoNumericEnum.keyName.Insert) {
            return;
        }

        const processed = this.processed;
        this._updateInternalProperties(e);

        if (this._processNonPrintableKeysAndShortcuts(e)) {
            return;
        }

        if (processed) {
            e.preventDefault();

            return;
        }

        const isCharacterInsertionAllowed = this._processCharacterInsertion();
        if (isCharacterInsertionAllowed) {
            this._formatValue(e);
            const targetValue = AutoNumericHelper.getElementValue(e.target);
            if ((targetValue !== this.lastVal) && this.throwInput) {
                // Throws input event on adding a character
                this._triggerEvent(AutoNumeric.events.native.input, e.target);
                e.preventDefault(); // ...and immediately prevent the browser to add a second character
            } else {
                if ((this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) &&
                    (AutoNumericHelper.getElementSelection(e.target).start === AutoNumericHelper.getElementSelection(e.target).end) &&
                    AutoNumericHelper.getElementSelection(e.target).start === targetValue.indexOf(this.settings.decimalCharacter)) {
                    const position = AutoNumericHelper.getElementSelection(e.target).start + 1;
                    AutoNumericHelper.setElementSelection(e.target, position);
                }

                e.preventDefault();
            }

            this.lastVal = AutoNumericHelper.getElementValue(e.target);
            this.throwInput = true;

            return;
        }

        e.preventDefault();
    }

    /**
     * Handler for 'keyup' events.
     * The user just released any key, hence one event is sent.
     *
     * @param {KeyboardEvent} e
     */
    _onKeyup(e) {
        this.isEditing = false;
        const multipleKeydownEvents = this.keydownEventCounter > 1;
        this.keydownEventCounter = 0; // Reset the keydown events counter

        if (this.formulaMode) {
            return;
        }

        if (this.settings.isCancellable && this.eventKey === AutoNumericEnum.keyName.Esc) {
            // If the user wants to cancel its modifications, we drop the 'keyup' event for the Esc key
            e.preventDefault();

            return;
        }

        // Manage the undo/redo events
        if (this.eventKey === AutoNumericEnum.keyName.Z || this.eventKey === AutoNumericEnum.keyName.z) {
            if (e.ctrlKey && e.shiftKey) {
                // Redo
                e.preventDefault();
                this._historyTableRedo();
                this.onGoingRedo = true;

                return;
            } else if (e.ctrlKey && !e.shiftKey) {
                if (this.onGoingRedo) {
                    // Prevent an 'undo' to be launch when releasing the shift key before the ctrl key after a 'redo' shortcut
                    this.onGoingRedo = false;
                } else {
                    e.preventDefault();
                    // Undo
                    this._historyTableUndo();

                    return;
                }
            }
        }

        if (this.onGoingRedo && (e.ctrlKey || e.shiftKey)) {
            // Special case where if the user has entered `Control+Shift+z`, then release `z`, keeping `Control` or `Shift` pressed, then `this.onGoingRedo` is never changed back to `false` when the user release `Control` or `Shift`
            this.onGoingRedo = false;
        }

        // Manage the Cut event
        if ((e.ctrlKey || e.metaKey) && this.eventKey === AutoNumericEnum.keyName.x) {
            // Save the caret position at the start of the selection
            const caretPosition = AutoNumericHelper.getElementSelection(this.domElement).start;
            // Convert the remaining 'formatted' numbers in a Js number
            const cutNumber = this.constructor._toNumericValue(AutoNumericHelper.getElementValue(e.target), this.settings);
            // Try to set that value with `set()`
            this.set(cutNumber);
            // Set back the initial caret position
            this._setCaretPosition(caretPosition);
        }

        // Manage the reformat when hovered with the Alt key pressed
        if (this.eventKey === AutoNumericEnum.keyName.Alt && this.settings.unformatOnHover && this.hoveredWithAlt) {
            this.constructor._reformatAltHovered(this);

            return;
        }

        this._updateInternalProperties(e);

        const skip = this._processNonPrintableKeysAndShortcuts(e);
        delete this.valuePartsBeforePaste;
        const targetValue = AutoNumericHelper.getElementValue(e.target);
        if (skip || !multipleKeydownEvents && targetValue === '') { // When the user keeps pressing the backspace or delete key, and end up deleting the entire input text, then the target value is equal to '', but we shouldn't `return` without first testing what was the initial value when the user started pressing any key (cf. issue #621)
            return;
        }

        // Added to properly place the caret when only the currency sign is present
        if (targetValue === this.settings.currencySymbol) {
            if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
                AutoNumericHelper.setElementSelection(e.target, 0);
            } else {
                AutoNumericHelper.setElementSelection(e.target, this.settings.currencySymbol.length);
            }
        } else if (this.eventKey === AutoNumericEnum.keyName.Tab) {
            AutoNumericHelper.setElementSelection(e.target, 0, targetValue.length);
        }

        if ((targetValue === this.settings.suffixText) ||
            (this.rawValue === '' && this.settings.currencySymbol !== '' && this.settings.suffixText !== '')) {
            AutoNumericHelper.setElementSelection(e.target, 0);
        }

        // Saves the extended decimal to preserve the data when navigating away from the page
        if (this.settings.decimalPlacesShownOnFocus !== null) {
            this._saveValueToPersistentStorage();
        }

        if (!this.formatted) {  //TODO Is this line needed? Considering that onKeydown and onKeypress both finish by setting it to false...
            this._formatValue(e);
        }

        // Force the `rawValue` update on Android Chrome
        this._saveRawValueForAndroid();

        // If the input value has changed during the key press event chain, an event is sent to alert that a formatting has been done (cf. Issue #187)
        if ((multipleKeydownEvents && targetValue !== this.initialRawValueOnFirstKeydown) || // If multiple keydown events are detected, then we need to check the rawValue saved on the very first event
            targetValue !== this.initialValueOnKeydown) {
            this._triggerEvent(AutoNumeric.events.formatted, e.target, {
                oldValue   : this.initialValueOnKeydown,
                newValue   : targetValue,
                oldRawValue: this.initialRawValueOnKeydown,
                newRawValue: this.rawValue,
                isPristine : this.isPristine(false),
                error      : null,
                aNElement  : this,
            });
        }

        // Update the selection of the current element of the history table
        if (this.historyTable.length > 1) {
            const selection = AutoNumericHelper.getElementSelection(this.domElement);
            this.selectionStart = selection.start;
            this.selectionEnd = selection.end;
            this.historyTable[this.historyTableIndex].start = this.selectionStart;
            this.historyTable[this.historyTableIndex].end = this.selectionEnd;
        }
    }

    /**
     * On Android Chrome, the `rawValue` is not updated when the user changes the input value.
     * This function updates the `rawValue` accordingly.
     * @private
     */
    _saveRawValueForAndroid() {
        if (this.eventKey === AutoNumericEnum.keyName.AndroidDefault) {
            let normalizedValue = this.constructor._stripAllNonNumberCharactersExceptCustomDecimalChar(this.getFormatted(), this.settings, true, this.isFocused);
            normalizedValue = this.constructor._convertToNumericString(normalizedValue, this.settings);

            this._setRawValue(normalizedValue);
        }
    }

    /**
     * Handler for 'focusout' events
     * On focusout, multiple things happens :
     * - The element value is formatted back if the `Alt` key was pressed,
     * - The element value is formatted back if `showOnlyNumbersOnFocus` was set to only show numbers,
     * - The element value is multiplied by `rawValueDivisor` on `blur`
     *
     * Note: On focusout, the `rawValue` is never changed. Only the formatted value can be modified.
     *
     * @param {Event} e
     */
    _onFocusOutAndMouseLeave(e) {
        //TODO Create separate handlers for blur and mouseleave
        this.isEditing = false; // Just in case no `keyUp` event have been sent (if the user lost the focus to the window while typing)

        if (e.type === 'mouseleave' && this.formulaMode) {
            return;
        }

        //FIXME Do not call `set()` if the current raw value is the same as the one we are trying to set (currently, on focus out, `set()` is always called, even if the value has not changed
        if (this.settings.unformatOnHover && e.type === 'mouseleave' && this.hoveredWithAlt) {
            this.constructor._reformatAltHovered(this);

            return;
        }

        if ((e.type === 'mouseleave' && !this.isFocused) || e.type === 'blur') {
            if (e.type === 'blur' && this.formulaMode) {
                this._exitFormulaMode();
            }

            this._saveValueToPersistentStorage();
            if (this.settings.showOnlyNumbersOnFocus === AutoNumeric.options.showOnlyNumbersOnFocus.onlyNumbers) {
                this.settings.digitGroupSeparator = this.originalDigitGroupSeparator;
                this.settings.currencySymbol = this.originalCurrencySymbol;
                this.settings.suffixText = this.originalSuffixText;
            }

            // Use the rawValue, multiplied by `rawValueDivisor` if defined
            const rawValueToFormat = this._getRawValueToFormat(this.rawValue);
            const isRawValueNull = AutoNumericHelper.isNull(rawValueToFormat);
            const [minTest, maxTest] = this.constructor._checkIfInRangeWithOverrideOption(rawValueToFormat, this.settings);

            // Directly set the formatted value if the `rawValue` is found in `valuesToStrings`
            let elementValueIsAlreadySet = false;
            if (rawValueToFormat !== '' && !isRawValueNull) {
                if (!minTest) {
                    this._triggerEvent(AutoNumeric.events.minRangeExceeded, this.domElement);
                }

                if (!maxTest) {
                    this._triggerEvent(AutoNumeric.events.maxRangeExceeded, this.domElement);
                }

                if (this.settings.valuesToStrings && this._checkValuesToStrings(rawValueToFormat)) {
                    // Set the formatted value with the corresponding string
                    this._setElementValue(this.settings.valuesToStrings[rawValueToFormat]);
                    elementValueIsAlreadySet = true;
                }
            }

            // Only generate the formatted value if no `valuesToStrings` have been found
            if (!elementValueIsAlreadySet) {
                let value;
                if (isRawValueNull || rawValueToFormat === '') {
                    value = rawValueToFormat;
                } else {
                    value = String(rawValueToFormat);
                }

                if (rawValueToFormat !== '' && !isRawValueNull) {
                    if (minTest && maxTest && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(rawValueToFormat, this.settings)) {
                        value = this._modifyNegativeSignAndDecimalCharacterForRawValue(value);

                        if (this.settings.divisorWhenUnfocused && !AutoNumericHelper.isNull(value)) {
                            value = value / this.settings.divisorWhenUnfocused;
                            value = value.toString();
                        }

                        value = this.constructor._roundFormattedValueShownOnBlur(value, this.settings);
                        value = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(value, this.settings);
                    } else {
                        if (!minTest) {
                            this._triggerEvent(AutoNumeric.events.minRangeExceeded, this.domElement);
                        }

                        if (!maxTest) {
                            this._triggerEvent(AutoNumeric.events.maxRangeExceeded, this.domElement);
                        }
                    }
                } else if (rawValueToFormat === '') {
                    switch (this.settings.emptyInputBehavior) {
                        case AutoNumeric.options.emptyInputBehavior.zero:
                            this._setRawValue('0');
                            value = this.constructor._roundValue('0', this.settings, 0); 
                            break;
                        case AutoNumeric.options.emptyInputBehavior.min:
                            this._setRawValue(this.settings.minimumValue);
                            value = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.minimumValue, this.settings, this.isFocused); 
                            break;
                        case AutoNumeric.options.emptyInputBehavior.max:
                            this._setRawValue(this.settings.maximumValue);
                            value = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.maximumValue, this.settings, this.isFocused); 
                            break;
                        default:
                            if (AutoNumericHelper.isNumber(this.settings.emptyInputBehavior)) {
                                this._setRawValue(this.settings.emptyInputBehavior);
                                value = this.constructor._roundFormattedValueShownOnFocusOrBlur(this.settings.emptyInputBehavior, this.settings, this.isFocused);
                            }
                    }
                }


                let groupedValue = this.constructor._orderValueCurrencySymbolAndSuffixText(value, this.settings, false);
                if (!(this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(value, this.settings) ||
                        (isRawValueNull && this.settings.emptyInputBehavior === AutoNumeric.options.emptyInputBehavior.null))) {
                    groupedValue = this.constructor._addGroupSeparators(value, this.settings, false, rawValueToFormat);
                }

                // Testing for `allowDecimalPadding.never` or `allowDecimalPadding.floats` is needed to make sure we do not keep a trailing decimalCharacter (like '500.') in the element, since the raw value would still be a correctly formatted integer ('500')
                if (groupedValue !== rawValueToFormat ||
                    rawValueToFormat === '' || // This make sure we get rid on any currency symbol or suffix that might have been added on focus
                    this.settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.never ||
                    this.settings.allowDecimalPadding === AutoNumeric.options.allowDecimalPadding.floats) {
                    if (this.settings.symbolWhenUnfocused && rawValueToFormat !== '' && rawValueToFormat !== null) {
                        groupedValue = `${groupedValue}${this.settings.symbolWhenUnfocused}`;
                    }

                    this._setElementValue(groupedValue);
                }
            }

            if (e.type === 'blur') {
                //TODO Create separate handlers for blur and mouseleave, really.
                this._onBlur(e);
            }
        }
    }

    /**
     * Handler for 'paste' event
     *
     * @param {Event|ClipboardEvent} e
     */
    _onPaste(e) {
        //FIXME When pasting '000' on a thousand group selection, the whole selection gets deleted, and only one '0' is pasted (cf. issue #302)
        // The event is prevented by default, since otherwise the user would be able to paste invalid characters into the input
        e.preventDefault();

        if (this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled) {
            // Do not allow pasting in a readonly element (fix issue #505)
            return;
        }

        let rawPastedText;
        if (window.clipboardData && window.clipboardData.getData) {
            // Special case for the obsolete and non-standard IE browsers 10 and 11
            rawPastedText = window.clipboardData.getData('Text');
        } else if (e.clipboardData && e.clipboardData.getData) {
            // Normal case with modern browsers
            rawPastedText = e.clipboardData.getData('text/plain');
        } else {
            AutoNumericHelper.throwError('Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium).');
        }

        // Fix for firefox paste handling on `contenteditable` elements where `e.target` is the the text node, not the element
        let eventTarget;
        if (!e.target.tagName) {
            eventTarget = e.explicitOriginalTarget;
        } else {
            eventTarget = e.target;
        }

        // 0. Special case if the user has selected all the input text before pasting
        const initialFormattedValue = AutoNumericHelper.getElementValue(eventTarget);
        const selectionStart = eventTarget.selectionStart || 0;
        const selectionEnd = eventTarget.selectionEnd || 0;
        const selectionSize = selectionEnd - selectionStart;

        if (selectionSize === initialFormattedValue.length) { // If all the element text is selected
            //TODO Refactor this with the tests below
            // Since the whole element content will be replaced, no need to complicate things and directly test for the validity of the pasted content, then set the `rawValue` and caret position (fix issue #482)
            // 1. Strip all thousand separators, brackets and currency sign, and convert the decimal character to a dot
            const untranslatedPastedText = this._preparePastedText(rawPastedText);
            const pastedRawValue = AutoNumericHelper.arabicToLatinNumbers(untranslatedPastedText, false, false, false); // Allow pasting arabic numbers

            // 2. Check that the paste is a valid number once it has been normalized to a raw value
            if (pastedRawValue === '.' || pastedRawValue === '' || (pastedRawValue !== '.' && !AutoNumericHelper.isNumber(pastedRawValue))) {
                this.formatted = true; // This prevent the `keyup` event on the `v` key during a paste to try to format an empty value.
                // If the user tries to paste a single decimal character (that has been translated to '.' already) or the empty value, ignore the paste
                if (this.settings.onInvalidPaste === AutoNumeric.options.onInvalidPaste.error) {
                    AutoNumericHelper.throwError(`The pasted value '${rawPastedText}' is not a valid paste content.`);
                }

                return;
            }

            // 3. Then try to set it as the new value. The `set()` method will run the additional tests (ie. limits) as needed.
            this.set(pastedRawValue);
            this.formatted = true;

            // 4. On a 'normal' non-autoNumeric input, an `input` event is sent when a paste is done. We mimic that.
            this._triggerEvent(AutoNumeric.events.native.input, eventTarget);

            // 5. Return since the job is done
            return;
        }

        // 1. Check if the paste has a negative sign (only if it's the first character), and store that information for later use
        const isPasteNegative = AutoNumericHelper.isNegativeStrict(rawPastedText, this.settings.negativeSignCharacter);
        if (isPasteNegative) {
            // 1a. Remove the negative sign from the pasted text
            rawPastedText = rawPastedText.slice(1, rawPastedText.length);
        }

        // 2. Strip all thousand separators, brackets and currency sign, and convert the decimal character to a dot
        const untranslatedPastedText = this._preparePastedText(rawPastedText);

        let pastedText;
        if (untranslatedPastedText === '.') {
            // Special case : If the user tries to paste a single decimal character (that has been translated to '.' already)
            pastedText = '.';
        } else {
            // Normal case
            // Allow pasting arabic numbers
            pastedText = AutoNumericHelper.arabicToLatinNumbers(untranslatedPastedText, false, false, false);
        }

        // 3. Test if the paste is valid (only has numbers and eventually a decimal character). If it's not valid, stop here.
        if (pastedText !== '.' && (!AutoNumericHelper.isNumber(pastedText) || pastedText === '')) {
            this.formatted = true; // This prevent the `keyup` event on the `v` key during a paste to try to format an empty value (fix issue #484)
            if (this.settings.onInvalidPaste === AutoNumeric.options.onInvalidPaste.error) {
                AutoNumericHelper.throwError(`The pasted value '${rawPastedText}' is not a valid paste content.`);
            }

            return;
        }

        // 4. Calculate the paste result
        let caretPositionOnInitialTextAfterPasting;
        let isInitialValueNegative = AutoNumericHelper.isNegativeStrict(this.getNumericString(), this.settings.negativeSignCharacter);
        let isPasteNegativeAndInitialValueIsPositive;
        let result;

        // If the pasted content is negative, then the result will be negative too
        if (isPasteNegative && !isInitialValueNegative) {
            isInitialValueNegative = true;
            isPasteNegativeAndInitialValueIsPositive = true;
        }
        else {
            isPasteNegativeAndInitialValueIsPositive = false;
        }

        // 1. Generate the unformatted result
        const leftFormattedPart  = initialFormattedValue.slice(0, selectionStart);
        const rightFormattedPart = initialFormattedValue.slice(selectionEnd, initialFormattedValue.length);

        if (selectionStart !== selectionEnd) {
            // a. If there is a selection, remove the selected part, and return the left and right part
            result = this._preparePastedText(leftFormattedPart + rightFormattedPart);
        } else {
            // b. Else if this is only one caret (and therefore no selection), then return the left and right part
            result = this._preparePastedText(initialFormattedValue);
        }

        // Add back the negative sign if needed
        if (isInitialValueNegative) {
            result = AutoNumericHelper.setRawNegativeSign(result);
        }

        // Build the unformatted result string
        caretPositionOnInitialTextAfterPasting = AutoNumericHelper.convertCharacterCountToIndexPosition(AutoNumericHelper.countNumberCharactersOnTheCaretLeftSide(initialFormattedValue, selectionStart, this.settings.decimalCharacter));
        if (isPasteNegativeAndInitialValueIsPositive) {
            // If the initial paste is negative and the initial value is not, then I must offset the caret position by one place to the right to take the additional hyphen into account
            caretPositionOnInitialTextAfterPasting++;
            //TODO Quid if the negative sign is not on the left (negativePositiveSignPlacement and currencySymbolPlacement)?
            //TODO Quid if the positive sign is shown?
        }

        let leftPart  = result.slice(0, caretPositionOnInitialTextAfterPasting);
        let rightPart = result.slice(caretPositionOnInitialTextAfterPasting, result.length);
        let leftPartContainedADot = false;
        if (pastedText === '.') {
            if (AutoNumericHelper.contains(leftPart, '.')) {
                // If I remove a dot here, then I need to update the caret position (decrement it by 1) when positioning it
                // To do so, we keep that info in order to modify the caret position later
                leftPartContainedADot = true;
                leftPart              = leftPart.replace('.', '');
            }

            rightPart = rightPart.replace('.', '');
        }

        // Manage the case where a negative number is pasted onto another negative number that is entirely selected (cf. issue #593)
        let negativePasteOnNegativeNumber = false;
        if (leftPart === '' && rightPart === '-') {
            leftPart = '-';
            rightPart = '';
            // When pasting a negative number on a negative number, we need to offset the caret position one place to the right to take into account the negative sign
            negativePasteOnNegativeNumber = true;
        }

        // -- Here, we are good to go to continue on the same basis for each value of the `onInvalidPaste` option

        switch (this.settings.onInvalidPaste) {
            /* 4a. Truncate paste behavior:
             * Insert as many numbers as possible on the right hand side of the caret from the pasted text content, until the input reach its range limit.
             * If there is more characters in the clipboard once a limit is reached, drop the extraneous characters.
             * Otherwise paste all the numbers from the clipboard.
             * While doing so, we check if the result is within the minimum and maximum values allowed, and stop as soon as we encounter one of those.
             *
             * 4b. Replace paste behavior:
             * Idem than the 'truncate' paste behavior, except that when a range limit is hit, we try to replace the subsequent initial numbers with the pasted ones, until we hit the range limit a second (and last) time, or we run out of numbers to paste
             */
            /* eslint no-case-declarations: 0 */
            case AutoNumeric.options.onInvalidPaste.truncate:
            case AutoNumeric.options.onInvalidPaste.replace:
                // c. Add numbers one by one at the caret position, while testing if the result is valid and within the range of the minimum and maximum value
                //    Continue until you either run out of numbers to paste, or that you get out of the range limits
                const minParse = AutoNumericHelper.parseStr(this.settings.minimumValue);
                const maxParse = AutoNumericHelper.parseStr(this.settings.maximumValue);
                let lastGoodKnownResult = result; // This is set as the default, in case we do not add even one number
                let pastedTextIndex = 0;
                let modifiedLeftPart = leftPart;

                while (pastedTextIndex < pastedText.length) {
                    // Modify the result with another pasted character
                    modifiedLeftPart += pastedText[pastedTextIndex];
                    result = modifiedLeftPart + rightPart;

                    // Check the range limits
                    if (!this.constructor._checkIfInRange(result, minParse, maxParse)) {
                        // The result is out of the range limits, stop the loop here
                        break;
                    }

                    // Save the last good known result
                    lastGoodKnownResult = result;

                    // Update the local variables for the next loop
                    pastedTextIndex++;
                }

                // Update the last caret position where to insert a new number
                caretPositionOnInitialTextAfterPasting += pastedTextIndex;
                if (negativePasteOnNegativeNumber) caretPositionOnInitialTextAfterPasting++;

                //XXX Here we have the result for the `truncate` option
                if (this.settings.onInvalidPaste === AutoNumeric.options.onInvalidPaste.truncate) {
                    //TODO If the user as defined a truncate callback and there are still some numbers (that will be dropped), then call this callback with the initial paste as well as the remaining numbers
                    result = lastGoodKnownResult;

                    if (leftPartContainedADot) {
                        // If a dot has been removed for the part on the left of the caret, we decrement the caret index position
                        caretPositionOnInitialTextAfterPasting--;
                    }
                    break;
                }
                //XXX ...else we need to continue modifying the result for the 'replace' option

                // d. Until there are numbers to paste, replace the initial numbers one by one, and still do the range test.
                //    Stop when you have no more numbers to paste, or if you are out of the range limits.
                //    If you do get to the range limits, use the previous known good value within those limits.
                //    Note: The numbers are replaced one by one, in the integer then decimal part, while ignoring the decimal character
                //TODO What should happen if the user try to paste a decimal number? Should we override the current initial decimal character in favor of this new one? If we do, then we have to recalculate the vMin/vMax from the start in order to take into account this new decimal character position..
                let lastGoodKnownResultIndex = caretPositionOnInitialTextAfterPasting;
                const lastGoodKnownResultSize = lastGoodKnownResult.length;

                while (pastedTextIndex < pastedText.length && lastGoodKnownResultIndex < lastGoodKnownResultSize) {
                    if (lastGoodKnownResult[lastGoodKnownResultIndex] === '.') {
                        // We skip the decimal character 'replacement'. That way, we do not change the decimal character position regarding the remaining numbers.
                        lastGoodKnownResultIndex++;
                        continue;
                    }

                    // This replace one character at a time
                    result = AutoNumericHelper.replaceCharAt(lastGoodKnownResult, lastGoodKnownResultIndex, pastedText[pastedTextIndex]);

                    // Check the range limits
                    if (!this.constructor._checkIfInRange(result, minParse, maxParse)) {
                        // The result is out of the range limits, stop the loop here
                        break;
                    }

                    // Save the last good known result
                    lastGoodKnownResult = result;

                    // Update the local variables for the next loop
                    pastedTextIndex++;
                    lastGoodKnownResultIndex++;
                }

                // Update the last caret position where to insert a new number
                caretPositionOnInitialTextAfterPasting = lastGoodKnownResultIndex;

                if (leftPartContainedADot) {
                    // If a dot has been removed for the part on the left of the caret, we decrement the caret index position
                    caretPositionOnInitialTextAfterPasting--;
                }

                result = lastGoodKnownResult;

                break;
            /* 4c. Normal paste behavior:
             * Insert the pasted number inside the current unformatted text, at the correct caret position or selection
             */
            case AutoNumeric.options.onInvalidPaste.error:
            case AutoNumeric.options.onInvalidPaste.ignore:
            case AutoNumeric.options.onInvalidPaste.clamp:
            default:
                // Generate the unformatted result
                result = `${leftPart}${pastedText}${rightPart}`;

                // 2. Calculate the caret position in the unformatted value, for later use
                if (selectionStart === selectionEnd) {
                    // There is no selection, then the caret position is set after the pasted text
                    const indexWherePastedTextHasBeenInserted = AutoNumericHelper.convertCharacterCountToIndexPosition(AutoNumericHelper.countNumberCharactersOnTheCaretLeftSide(initialFormattedValue, selectionStart, this.settings.decimalCharacter));
                    caretPositionOnInitialTextAfterPasting = indexWherePastedTextHasBeenInserted + pastedText.length; // I must not count the characters that have been removed from the pasted text (ie. '.')
                } else if (rightPart === '') {
                    // If the user selected from the caret position to the end of the input (on the far right)
                    caretPositionOnInitialTextAfterPasting = AutoNumericHelper.convertCharacterCountToIndexPosition(AutoNumericHelper.countNumberCharactersOnTheCaretLeftSide(initialFormattedValue, selectionStart, this.settings.decimalCharacter)) + pastedText.length;
                    if (negativePasteOnNegativeNumber) caretPositionOnInitialTextAfterPasting++;
                } else {
                    // Usual case
                    const indexSelectionEndInRawValue = AutoNumericHelper.convertCharacterCountToIndexPosition(AutoNumericHelper.countNumberCharactersOnTheCaretLeftSide(initialFormattedValue, selectionEnd, this.settings.decimalCharacter));

                    // Here I must not count the characters that have been removed from the pasted text (ie. '.'), or the thousand separators in the initial selected text
                    const selectedText = AutoNumericHelper.getElementValue(eventTarget).slice(selectionStart, selectionEnd);
                    caretPositionOnInitialTextAfterPasting = indexSelectionEndInRawValue - selectionSize + AutoNumericHelper.countCharInText(this.settings.digitGroupSeparator, selectedText) + pastedText.length;
                }

                // Modify the caret position for special cases, only if the whole input has not been selected
                if (isPasteNegativeAndInitialValueIsPositive) {
                    // If the pasted value has a negative sign ('-'), but the initial value does not, offset the index by one
                    caretPositionOnInitialTextAfterPasting++;
                }

                if (leftPartContainedADot) {
                    // If a dot has been removed for the part on the left of the caret, we decrement the caret index position
                    caretPositionOnInitialTextAfterPasting--;
                }
        }

        // 5. Check if the result is a valid number, if not, drop the paste and do nothing.
        if (!AutoNumericHelper.isNumber(result) || result === '') {
            if (this.settings.onInvalidPaste === AutoNumeric.options.onInvalidPaste.error) {
                AutoNumericHelper.throwError(`The pasted value '${rawPastedText}' would result into an invalid content '${result}'.`); //TODO Should we send a warning instead of throwing an error?
                //TODO This is not DRY ; refactor with above
            }
            return;
        }

        // 6. If it's a valid number, check if it falls inside the minimum and maximum value. If this fails, modify the value following this procedure :
        /*
         * If 'error' (this is the default) :
         *      - Normal paste behavior.
         *      - Try to set the new value, if it fails, then throw an error in the console.
         *      - Do not change the input value, do not change the current selection.
         * If 'ignore' :
         *      - Normal paste behavior.
         *      - Try to set the new value, if it fails, do nothing more.
         *      - Do not change the input value, do not change the current selection.
         * If 'clamp' :
         *      - Normal paste behavior.
         *      - Try to set the new value, if it fails, set the value to the minimum or maximum limit, whichever is closest to the
         *        paste result.
         *      - Change the caret position to be positioned on the left hand side of the decimal character.
         * If 'truncate' :
         *      - Truncate paste behavior.
         *      - Try to set the new value, until it fails (if the result is out of the min and max value limits).
         *      - Drop the remaining non-pasted numbers, and keep the last known non-failing result.
         *      - Change the caret position to be positioned after the last pasted character.
         * If 'replace' :
         *      - Replace paste behavior.
         *      - Try to set the new value, until it fails (if the result is out of the min and max value limits).
         *      - Then try to replace as many numbers as possible with the pasted ones. Once it fails, keep the last known non-failing result.
         *      - Change the caret position to be positioned after the last pasted character.
         */
        let valueHasBeenSet = false;
        let valueHasBeenClamped = false;
        try {
            this.set(result);
            valueHasBeenSet = true;
        } catch (error) {
            let clampedValue;
            switch (this.settings.onInvalidPaste) {
                case AutoNumeric.options.onInvalidPaste.clamp:
                    clampedValue = AutoNumericHelper.clampToRangeLimits(result, this.settings);
                    try {
                        this.set(clampedValue);
                    } catch (error) {
                        AutoNumericHelper.throwError(`Fatal error: Unable to set the clamped value '${clampedValue}'.`);
                    }

                    valueHasBeenClamped = true;
                    valueHasBeenSet = true;
                    result = clampedValue; // This is used only for setting the caret position later
                    break;
                case AutoNumeric.options.onInvalidPaste.error:
                case AutoNumeric.options.onInvalidPaste.truncate:
                case AutoNumeric.options.onInvalidPaste.replace:
                    // Throw an error message
                    AutoNumericHelper.throwError(`The pasted value '${rawPastedText}' results in a value '${result}' that is outside of the minimum [${this.settings.minimumValue}] and maximum [${this.settings.maximumValue}] value range.`);
                // falls through
                case AutoNumeric.options.onInvalidPaste.ignore:
                // Do nothing
                // falls through
                default :
                    return; // ...and nothing else should be changed
            }
        }

        // 7. Then lastly, set the caret position at the right logical place
        const targetValue = AutoNumericHelper.getElementValue(eventTarget);
        let caretPositionInFormattedNumber;
        if (valueHasBeenSet) {
            switch (this.settings.onInvalidPaste) {
                case AutoNumeric.options.onInvalidPaste.clamp:
                    if (valueHasBeenClamped) {
                        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
                            AutoNumericHelper.setElementSelection(eventTarget, targetValue.length - this.settings.currencySymbol.length); // This puts the caret on the right of the last decimal place
                        } else {
                            AutoNumericHelper.setElementSelection(eventTarget, targetValue.length); // ..and this on the far right
                        }

                        break;
                    } // else if the value has not been clamped, the default behavior is used...
                // falls through
                case AutoNumeric.options.onInvalidPaste.error:
                case AutoNumeric.options.onInvalidPaste.ignore:
                case AutoNumeric.options.onInvalidPaste.truncate:
                case AutoNumeric.options.onInvalidPaste.replace:
                default :
                    // Whenever one or multiple characters are pasted, this means we have to manage the potential thousand separators that could be added by the formatting
                    caretPositionInFormattedNumber = AutoNumericHelper.findCaretPositionInFormattedNumber(result, caretPositionOnInitialTextAfterPasting, targetValue, this.settings.decimalCharacter);
                    AutoNumericHelper.setElementSelection(eventTarget, caretPositionInFormattedNumber);
            }
        }

        // 8. We make sure we send an input event only if the result is different than the initial value before the paste
        if (valueHasBeenSet && initialFormattedValue !== targetValue) {
            // On a 'normal' non-autoNumeric input, an `input` event is sent when a paste is done. We mimic that.
            this._triggerEvent(AutoNumeric.events.native.input, eventTarget);
        }
    }

    /**
     * When focusing out of the input, we check if the value has changed, and if it has, then we send a `change` event (since the native one would have been prevented by `e.preventDefault()` called in the other event listeners).
     * We also update the info of the focused state in the `this.isFocused` variable.
     *
     * @param {Event} e
     */
    _onBlur(e) {
        // Keep track if the element is currently focused
        this.isFocused = false;
        // Keep track if the user is currently editing the element
        this.isEditing = false;

        // Send a `change` event if the raw value has been changed since the last focus or 'enter' validation
        if (this.rawValue !== this.rawValueOnFocus) {
            this._triggerEvent(AutoNumeric.events.native.change, e.target);
        }

        this.rawValueOnFocus = void(0); // Reset the tracker
    }

    /**
     * Handler for 'wheel' event
     *
     * @param {WheelEvent} e
     */
    _onWheel(e) {
        if (this.formulaMode) {
            return;
        }

        if (this.settings.readOnly || this.domElement.readOnly || this.domElement.disabled) {
            // Do not allow scrolling in a readonly element (fix issue #541)
            return;
        }

        if (this.settings.modifyValueOnWheel) {
            if (this.settings.wheelOn === AutoNumeric.options.wheelOn.focus) {
                if (this.isFocused) {
                    if (!e.shiftKey) {
                        this.wheelAction(e);
                    }
                } else if (e.shiftKey) {
                    this.wheelAction(e);
                }
            } else if (this.settings.wheelOn === AutoNumeric.options.wheelOn.hover) {
                if (!e.shiftKey) {
                    this.wheelAction(e);
                } else {
                    // Note: When not `defaultPrevented`, Shift + mouse wheel is reserved by the browsers for horizontal scrolling.
                    // Hence, using the Shift key with the `wheelOn` 'hover' option will only scroll the page if we prevent the default behavior
                    e.preventDefault(); // Do not scroll horizontally

                    // Scroll vertically
                    window.scrollBy(0, AutoNumericHelper.isNegativeStrict(String(e.deltaY))?-50:50); // `e.deltaY` is usually too small compared to how the page is scrolled. That's why we use a fixed offset.
                }
            } else {
                AutoNumericHelper.throwError('Unknown `wheelOn` option.');
            }
        }
    }

    /**
     * Increment or decrement the element value according to the `wheelStep` option chosen
     *
     * @param {WheelEvent} e The `wheel` event
     */
    wheelAction(e) {
        this.isWheelEvent = true; // Keep the info that we are currently managing a mouse wheel event

        // 0) First, save the caret position so we can set it back once the value has been changed
        const selectionStart = e.target.selectionStart || 0;
        const selectionEnd = e.target.selectionEnd || 0;

        // 1) Get the unformatted value
        const currentUnformattedValue = this.rawValue;

        let result;
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(currentUnformattedValue)) {
            // If by default the input is empty, start at '0'
            if (this.settings.minimumValue > 0 || this.settings.maximumValue < 0) {
                // or if '0' is not between min and max value, 'minimumValue' if the user does a wheelup, 'maximumValue' if the user does a wheeldown
                if (AutoNumericHelper.isWheelUpEvent(e)) {
                    result = this.settings.minimumValue;
                } else if (AutoNumericHelper.isWheelDownEvent(e)) {
                    result = this.settings.maximumValue;
                } else {
                    AutoNumericHelper.throwError(`The event is not a 'wheel' event.`);
                }
            } else {
                result = 0;
            }
        } else {
            result = currentUnformattedValue;
        }

        result = +result; // Typecast to a number needed for the following addition/subtraction

        // 2) Increment/Decrement the value
        // But first, choose the increment/decrement method ; fixed or progressive
        if (AutoNumericHelper.isNumber(this.settings.wheelStep)) {
            const step = +this.settings.wheelStep; // Typecast to a number needed for the following addition/subtraction
            // Fixed method
            // This is the simplest method, where a fixed offset in added/subtracted from the current value
            if (AutoNumericHelper.isWheelUpEvent(e)) { // Increment
                result += step;
            } else if (AutoNumericHelper.isWheelDownEvent(e)) { // Decrement
                result -= step;
            }
        } else {
            // Progressive method
            // For this method, we calculate an offset that is in relation to the size of the current number (using only the integer part size).
            // The bigger the number, the bigger the offset (usually the number count in the integer part minus 3, except for small numbers where a different behavior is better for the user experience).
            //TODO Known limitation : The progressive method does not play well with numbers between 0 and 1 where to modify the decimal places the rawValue first has to go from '1' to '0'
            if (AutoNumericHelper.isWheelUpEvent(e)) { // Increment
                result = AutoNumericHelper.addAndRoundToNearestAuto(result, this.settings.decimalPlacesRawValue);
            } else if (AutoNumericHelper.isWheelDownEvent(e)) { // Decrement
                result = AutoNumericHelper.subtractAndRoundToNearestAuto(result, this.settings.decimalPlacesRawValue);
            }
        }

        // 3) Set the new value so it gets formatted
        // First clamp the result if needed
        result = AutoNumericHelper.clampToRangeLimits(result, this.settings);
        if (result !== +currentUnformattedValue) {
            // Only 'set' the value if it has changed. For instance 'set' should not happen if the user hits a limit and continue to try to go past it since we clamp the value.
            this.set(result);

            // Since we changed the input value, we send a native `input` event
            this._triggerEvent(AutoNumeric.events.native.input, e.target);
        }

        //XXX Do not prevent if the value is not modified? From a UX point of view, preventing the wheel event when the user use it on top of an autoNumeric element should always be done, even if the value does not change. Perhaps that could affect other scripts relying on this event to be sent though.
        e.preventDefault(); // We prevent the page to scroll while we increment/decrement the value

        // 4) Finally, we set back the caret position/selection
        // There is no need to take into account the fact that the number count could be different at the end of the wheel event ; it would be too complex and most of the time unreliable
        this._setSelection(selectionStart, selectionEnd);

        this.isWheelEvent = false; // Set back the mouse wheel indicator to its default
    }

    /**
     * Handler for 'drop' event
     *
     * @param {DragEvent} e
     */
    _onDrop(e) {
        if (this.formulaMode) { // Dropping while in formula mode shouldn't be possible. This is done 'just in case'
            return;
        }

        // Note: by default browsers already prevent the drop on readOnly and disabled elements
        this.isDropEvent = true;
        e.preventDefault();
        let format;
        if (AutoNumericHelper.isIE11()) {
            format = 'text';
        } else {
            format = 'text/plain';
        }

        const droppedText = e.dataTransfer.getData(format);
        const cleanedValue = this.unformatOther(droppedText);
        this.set(cleanedValue);
        this.isDropEvent = false;
    }

    /**
     * Handler for 'submit' events happening on the parent <form> element.
     * If `unformatOnSubmit` is set to `true`, the element value is first unformatted before the form is submitted.
     *
     * @returns {boolean}
     */
    _onFormSubmit() {
        // Search for all the AutoNumeric children of the form element and call the `_unformatOnSubmit()` function
        const inputElements = this._getFormAutoNumericChildren(this.parentForm);
        const aNElements = inputElements.map(aNElement => this.constructor.getAutoNumericElement(aNElement));
        aNElements.forEach(aNElement => aNElement._unformatOnSubmit());

        return true;
    }

    /**
     * Handler for 'reset' events caught on the parent <form> element.
     * When such event is detected, then every child AutoNumeric elements must format their default value that the browser is forcing upon them.
     *
     * @private
     */
    _onFormReset() {
        const inputElements = this._getFormAutoNumericChildren(this.parentForm);
        const aNElements = inputElements.map(aNElement => this.constructor.getAutoNumericElement(aNElement));
        // Tell all the AutoNumeric children to format their default value
        aNElements.forEach(aNElement => {
            const val = this._getDefaultValue(aNElement.node());
            // aNElement.set(val); //XXX If I use that line, the format is first correctly done, but the form reset is still not finished and will overwrite the formatting. This is why we need to use the following setTimeout line.
            setTimeout(() => aNElement.set(val), 0); //XXX This is an ugly hack, but it seems to be the accepted answer to this problem (https://stackoverflow.com/a/8152960/2834898). This is sad. Do note that I use '0ms' here since using `setTimeout` will push that code on the event stack, and as soon as the reset will be finished, this will be run (see https://stackoverflow.com/a/23987283/2834898).
        });
    }

    /**
     * Unformat the element value according to the `unformatOnSubmit` option
     *
     * @private
     */
    _unformatOnSubmit() {
        if (this.settings.unformatOnSubmit) {
            this._setElementValue(this.rawValue);
        }
    }

    /**
     * Listen for the `alt` key keydown event globally, and if the event is caught, unformat the AutoNumeric element that is hovered by the mouse.
     *
     * @param {KeyboardEvent} e
     * @private
     */
    _onKeydownGlobal(e) {
        //TODO Find a way to keep the caret position between the alt keyup/keydown states
        if (AutoNumericHelper.character(e) === AutoNumericEnum.keyName.Alt) {
            const hoveredElement = AutoNumericHelper.getHoveredElement();
            if (AutoNumeric.isManagedByAutoNumeric(hoveredElement)) {
                const anElement = AutoNumeric.getAutoNumericElement(hoveredElement);
                if (!anElement.formulaMode && anElement.settings.unformatOnHover) {
                    this.constructor._unformatAltHovered(anElement);
                }
            }
        }
    }

    /**
     * Listen for the `alt` key keyup event globally, and if the event is caught, reformat the AutoNumeric element that is hovered by the mouse.
     *
     * @param {KeyboardEvent} e
     * @private
     */
    _onKeyupGlobal(e) {
        if (AutoNumericHelper.character(e) === AutoNumericEnum.keyName.Alt) {
            const hoveredElement = AutoNumericHelper.getHoveredElement();
            if (AutoNumeric.isManagedByAutoNumeric(hoveredElement)) {
                const anElement = AutoNumeric.getAutoNumericElement(hoveredElement);
                if (anElement.formulaMode || !anElement.settings.unformatOnHover) {
                    return;
                }

                this.constructor._reformatAltHovered(anElement);
            }
        }
    }

    /**
     * Return `true` if the DOM element is supported by autoNumeric.
     * A supported element is an element whitelisted in the `allowedTagList`.
     *
     * @returns {boolean}
     * @private
     */
    _isElementTagSupported() {
        if (!AutoNumericHelper.isElement(this.domElement)) {
            AutoNumericHelper.throwError(`The DOM element is not valid, ${this.domElement} given.`);
        }

        return AutoNumericHelper.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList);
    }

    /**
     * Return `true` in the DOM element is an <input>.
     *
     * @returns {boolean}
     * @private
     */
    _isInputElement() {
        return this.domElement.tagName.toLowerCase() === 'input';
    }

    /**
     * Return `true` if the input type is supported by AutoNumeric
     *
     * @returns {boolean}
     * @throws
     */
    _isInputTypeSupported() {
        return (this.domElement.type === 'text' ||
                this.domElement.type === 'hidden' ||
                this.domElement.type === 'tel' ||
                AutoNumericHelper.isUndefinedOrNullOrEmpty(this.domElement.type));
    }

    /**
     * Check if the DOM element is supported by autoNumeric.
     * A supported element is either an <input> element with the correct 'type' attribute, or a tag whitelisted in the `allowedTagList` array.
     * If the check fails, this method throws.
     * This function also sets the info `this.isInputElement` which keep tracks if the DOM element is an <input> or not, and the `this.isContentEditable` if the element has the `contenteditable` attribute set to `true` initially.
     *
     * @throws
     * @private
     */
    _checkElement() {
        const currentElementTag = this.domElement.tagName.toLowerCase();

        if (!this._isElementTagSupported()) {
            AutoNumericHelper.throwError(`The <${currentElementTag}> tag is not supported by autoNumeric`);
        }

        if (this._isInputElement()) {
            if (!this._isInputTypeSupported()) {
                AutoNumericHelper.throwError(`The input type "${this.domElement.type}" is not supported by autoNumeric`);
            }

            this.isInputElement = true;
        } else {
            this.isInputElement = false;
            this.isContentEditable = this.domElement.hasAttribute('contenteditable') && this.domElement.getAttribute('contenteditable') === 'true';
        }
    }

    /**
     * Formats the default value on page load.
     * This is called only if the `formatOnPageLoad` option is set to `true`.
     *
     * @param {number|string|null} forcedInitialValue The value that should be used for initialization, in place on the eventual html one
     */
    _formatDefaultValueOnPageLoad(forcedInitialValue = null) {
        let setValue = true;
        let currentValue;
        if (!AutoNumericHelper.isNull(forcedInitialValue)) {
            currentValue = forcedInitialValue;
        } else {
            // Make sure the initial value does not have any superfluous whitespaces around it (Fix issue #479)
            currentValue = AutoNumericHelper.getElementValue(this.domElement).trim();
            // Correct the DOM attribute in case some whitespaces were present
            this.domElement.setAttribute('value', currentValue);
        }

        if (this.isInputElement || this.isContentEditable) {
            /*
             * If the input value has been set by the dev, but not directly as an attribute in the html, then it takes
             * precedence and should get formatted during the initialization (if this input value is a valid number and that the
             * developer wants it formatted on init (cf. the `settings.formatOnPageLoad` option)).
             * Note; this is true whatever the developer has set for `data-default-value-override` in the html (asp.net users).
             *
             * In other words : if `defaultValueOverride` is not null, it means the developer is trying to prevent postback problems.
             * But if `input.value` is set to a number, and the html `value` attribute is not set, then it means the dev has
             * changed the input value, and then it means we should not overwrite his own decision to do so.
             * Hence, if `defaultValueOverride` is not null, but `input.value` is a number and `this.domElement.hasAttribute('value')`
             * is false, we should ignore `defaultValueOverride` altogether.
             */
            const unLocalizedCurrentValue = this.constructor._toNumericValue(currentValue, this.settings); // This allows to use a localized value on startup
            if (!this.domElement.hasAttribute('value') || this.domElement.getAttribute('value') === '') {
                // Check if the `value` is valid or not
                if (!isNaN(Number(unLocalizedCurrentValue)) && Infinity !== unLocalizedCurrentValue) {
                    this.set(unLocalizedCurrentValue);
                    setValue = false;
                } else {
                    // If not, inform the developer that nothing usable has been provided
                    AutoNumericHelper.throwError(`The value [${currentValue}] used in the input is not a valid value autoNumeric can work with.`);
                }
            } else {
                /* Checks for :
                 * - page reload from back button, and
                 * - ASP.net form post back
                 *      The following HTML data attribute is REQUIRED (data-an-default="same value as the value attribute")
                 *      example: <asp:TextBox runat="server" id="someID" text="1234.56" data-an-default="1234.56">
                 */
                if ((this.settings.defaultValueOverride !== null && this.settings.defaultValueOverride.toString() !== currentValue) ||
                    (this.settings.defaultValueOverride === null && currentValue !== '' && currentValue !== this.domElement.getAttribute('value')) ||
                    (currentValue !== '' && this.domElement.getAttribute('type') === 'hidden' && !AutoNumericHelper.isNumber(unLocalizedCurrentValue))) {
                    if (this.settings.saveValueToSessionStorage && (this.settings.decimalPlacesShownOnFocus !== null || this.settings.divisorWhenUnfocused)) {
                        this._setRawValue(this._getValueFromPersistentStorage());
                    }

                    // If the decimalPlacesShownOnFocus value should NOT be saved in sessionStorage
                    if (!this.settings.saveValueToSessionStorage) {
                        const toStrip = this.constructor._removeBrackets(currentValue, this.settings);
                        if ((this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix ||
                            (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix)) &&
                            this.settings.negativeSignCharacter !== '' &&
                            AutoNumericHelper.isNegative(currentValue, this.settings.negativeSignCharacter)) {
                            this._setRawValue(`-${this.constructor._stripAllNonNumberCharacters(toStrip, this.settings, true, this.isFocused)}`);
                        } else {
                            this._setRawValue(this.constructor._stripAllNonNumberCharacters(toStrip, this.settings, true, this.isFocused));
                        }
                    }

                    setValue = false;
                }
            }

            if (currentValue === '') {
                switch (this.settings.emptyInputBehavior) {
                    case AutoNumeric.options.emptyInputBehavior.focus:
                    case AutoNumeric.options.emptyInputBehavior.null:
                    case AutoNumeric.options.emptyInputBehavior.press:
                        break;
                    case AutoNumeric.options.emptyInputBehavior.always:
                        this._setElementValue(this.settings.currencySymbol);
                        break;
                    case AutoNumeric.options.emptyInputBehavior.min:
                        this.set(this.settings.minimumValue);
                        break;
                    case AutoNumeric.options.emptyInputBehavior.max:
                        this.set(this.settings.maximumValue);
                        break;
                    case AutoNumeric.options.emptyInputBehavior.zero:
                        this.set('0');
                        break;
                    // When `emptyInputBehavior` is a number or a string representing a number
                    default:
                        this.set(this.settings.emptyInputBehavior);
                }
            } else if (setValue && currentValue === this.domElement.getAttribute('value')) {
                this.set(currentValue);
            }
        } else if (this.settings.defaultValueOverride === null ||
            this.settings.defaultValueOverride === currentValue) {
            this.set(currentValue);
        }
    }

    /**
     * Enhance the user experience by modifying the default `negativePositiveSignPlacement` option depending on `currencySymbol` and `currencySymbolPlacement`.
     *
     * If the user has not set the placement of the negative sign (`negativePositiveSignPlacement`), but has set a currency symbol (`currencySymbol`),
     * then we modify the default value of `negativePositiveSignPlacement` in order to keep the resulting output logical by default :
     * - "$-1,234.56" instead of "-$1,234.56" ({currencySymbol: "$", negativePositiveSignPlacement: "r"})
     * - "-1,234.56$" instead of "1,234.56-$" ({currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "p"})
     *
     * @param {object} settings
     */
    static _correctNegativePositiveSignPlacementOption(settings) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        // If negativePositiveSignPlacement is already set, we do not overwrite it
        if (!AutoNumericHelper.isNull(settings.negativePositiveSignPlacement)) {
            return;
        }

        if (!AutoNumericHelper.isUndefined(settings) &&
            AutoNumericHelper.isUndefinedOrNullOrEmpty(settings.negativePositiveSignPlacement) &&
            !AutoNumericHelper.isUndefinedOrNullOrEmpty(settings.currencySymbol)) {
            switch (settings.currencySymbolPlacement) {
                case AutoNumeric.options.currencySymbolPlacement.suffix:
                    settings.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.prefix; // Default -1,234.56 €
                    break;
                case AutoNumeric.options.currencySymbolPlacement.prefix:
                    settings.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.left; // Default -$1,234.56
                    break;
                default :
                //
            }
        } else {
            // Sets the default value if `negativePositiveSignPlacement` is `null`
            settings.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.left;
        }
    }

    /**
     * Correct the `caretPositionOnFocus` and `selectOnFocus` options, since setting both leads to a conflict.
     * This method directly modifies the `options` object passed as a parameter, then returns it.
     * It returns `null` if the given option is `null`.
     *
     * @param {object} options The options passed as an argument by the user
     * @returns {object|null}
     * @private
     */
    static _correctCaretPositionOnFocusAndSelectOnFocusOptions(options) {
        if (AutoNumericHelper.isNull(options)) {
            return null;
        }

        // If the user has set the `caretPositionOnFocus` option, do not set `selectOnFocus` to `true` by default
        if (!AutoNumericHelper.isUndefinedOrNullOrEmpty(options.caretPositionOnFocus) && AutoNumericHelper.isUndefinedOrNullOrEmpty(options.selectOnFocus)) {
            options.selectOnFocus = AutoNumeric.options.selectOnFocus.doNotSelect;
        }

        // If the user has set the `selectOnFocus` option to `true`, set `caretPositionOnFocus` to `doNoForceCaretPosition`
        if (AutoNumericHelper.isUndefinedOrNullOrEmpty(options.caretPositionOnFocus) && !AutoNumericHelper.isUndefinedOrNullOrEmpty(options.selectOnFocus) && options.selectOnFocus === AutoNumeric.options.selectOnFocus.select) {
            options.caretPositionOnFocus = AutoNumeric.options.caretPositionOnFocus.doNoForceCaretPosition;
        }

        return options;
    }

    /**
     * Calculate the number de decimal places to be used by the AutoNumeric object, for each of its state, and for its formatted and raw value.
     * By default, the `rawValue` precision is the same as the formatted value one.
     *
     * This method is called during the AutoNumeric object initialization. This assumes some internal variable state.
     *
     * This methods set the following options accordingly to their own value and the mandatory `decimalPlaces` option:
     * - decimalPlacesRawValue     (nullable)
     * - decimalPlacesShownOnBlur  (nullable)
     * - decimalPlacesShownOnFocus (nullable)
     *
     * Note: the `decimalPlaces` option is only used here and only serve to define those three previous options value.
     * AutoNumeric will then *only* use `decimalPlacesRawValue`, `decimalPlacesShownOnBlur` and `decimalPlacesShownOnFocus` from there.
     *
     * This methods directly modifies the `settings` object passed as a parameter.
     *
     * @param {object} settings This is an object with the new settings to use.
     * @private
     */
    static _calculateDecimalPlacesOnInit(settings) {
        // Check the `decimalPlaces*` options and output any warnings as needed, before modifying those options
        this._validateDecimalPlacesRawValue(settings);

        // Initialization phase
        //XXX This assumes at this stage, `settings.decimalPlaces` as been set from the default options

        // Overwrite the `decimalPlaces*` values if the `decimalPlaces*` options are not set in the `settings`
        // Sets `decimalPlacesShownOnBlur` (previously known as `scaleDecimalPlaces`)
        if (settings.decimalPlacesShownOnFocus === AutoNumeric.options.decimalPlacesShownOnFocus.useDefault)  {
            settings.decimalPlacesShownOnFocus = settings.decimalPlaces;
        }

        if (settings.decimalPlacesShownOnBlur === AutoNumeric.options.decimalPlacesShownOnBlur.useDefault)  {
            settings.decimalPlacesShownOnBlur = settings.decimalPlaces;
        }

        if (settings.decimalPlacesRawValue === AutoNumeric.options.decimalPlacesRawValue.useDefault)  {
            settings.decimalPlacesRawValue = settings.decimalPlaces;
        }

        // Add the additional decimal places to the raw value
        let additionalDecimalPlacesRawValue = 0;
        if (settings.rawValueDivisor && settings.rawValueDivisor !== AutoNumeric.options.rawValueDivisor.none) {
            additionalDecimalPlacesRawValue = String(settings.rawValueDivisor).length - 1; // ie. Dividing by '100' adds 2 decimal places to the needed precision
            if (additionalDecimalPlacesRawValue < 0) {
                additionalDecimalPlacesRawValue = 0;
            }
        }

        settings.decimalPlacesRawValue = Math.max(
            Math.max(settings.decimalPlacesShownOnBlur, settings.decimalPlacesShownOnFocus) + additionalDecimalPlacesRawValue,
            Number(settings.originalDecimalPlacesRawValue) + additionalDecimalPlacesRawValue
        );
    }

    /**
     * Recalculate the number de decimal places to be used by the AutoNumeric object, for each of its state, and for its formatted and raw value.
     * By default, the `rawValue` precision is the same as the formatted value one.
     *
     * This method is close to the one called during initialization, `_calculateDecimalPlacesOnInit()`, but with slight difference so that the `decimalPlaces*` options are correctly updated as needed.
     *
     * This methods set the following options accordingly to their own value and the mandatory `decimalPlaces` option:
     * - decimalPlacesRawValue     (nullable)
     * - decimalPlacesShownOnBlur  (nullable)
     * - decimalPlacesShownOnFocus (nullable)
     *
     * Note: the `decimalPlaces` option is only used here and only serve to define those three previous options value.
     * AutoNumeric will then *only* use `decimalPlacesRawValue`, `decimalPlacesShownOnBlur` and `decimalPlacesShownOnFocus` from there.
     *
     * This methods directly modifies the `settings` object passed as a parameter.
     *
     * @param {object} settings This is an object with the new settings to use.
     * @param {object} currentSettings This is the current settings (`this.settings`) used by the element.
     * @private
     */
    static _calculateDecimalPlacesOnUpdate(settings, currentSettings = null) {
        // Check the `decimalPlaces*` options and output any warnings as needed, before modifying those options
        this._validateDecimalPlacesRawValue(settings);

        // Update phase
        if (AutoNumericHelper.isNull(currentSettings)) {
            AutoNumericHelper.throwError(`When updating the settings, the previous ones should be passed as an argument.`);
        }

        const decimalPlacesInOptions = 'decimalPlaces' in settings;
        if (!(decimalPlacesInOptions ||
                'decimalPlacesRawValue' in settings ||
                'decimalPlacesShownOnFocus' in settings ||
                'decimalPlacesShownOnBlur' in settings ||
                'rawValueDivisor' in settings)) {
            // Do Nothing if no decimal places-related options are modified
            return;
        }

        // Overwrite the `decimalPlaces*` values if the `decimalPlaces*` options are not set in the `settings`
        if (decimalPlacesInOptions) {
            if (!('decimalPlacesShownOnFocus' in settings) ||
                settings.decimalPlacesShownOnFocus === AutoNumeric.options.decimalPlacesShownOnFocus.useDefault)  {
                settings.decimalPlacesShownOnFocus = settings.decimalPlaces;
            }

            if (!('decimalPlacesShownOnBlur' in settings) ||
                settings.decimalPlacesShownOnBlur === AutoNumeric.options.decimalPlacesShownOnBlur.useDefault)  {
                settings.decimalPlacesShownOnBlur = settings.decimalPlaces;
            }

            if (!('decimalPlacesRawValue' in settings) ||
                settings.decimalPlacesRawValue === AutoNumeric.options.decimalPlacesRawValue.useDefault)  {
                settings.decimalPlacesRawValue = settings.decimalPlaces;
            }
        } else {
            if (AutoNumericHelper.isUndefined(settings.decimalPlacesShownOnFocus)) {
                settings.decimalPlacesShownOnFocus = currentSettings.decimalPlacesShownOnFocus;
            }

            if (AutoNumericHelper.isUndefined(settings.decimalPlacesShownOnBlur)) {
                settings.decimalPlacesShownOnBlur = currentSettings.decimalPlacesShownOnBlur;
            }
        }

        // Add the additional decimal places to the raw value
        let additionalDecimalPlacesRawValue = 0;
        if (settings.rawValueDivisor && settings.rawValueDivisor !== AutoNumeric.options.rawValueDivisor.none) {
            additionalDecimalPlacesRawValue = String(settings.rawValueDivisor).length - 1; // ie. Dividing by '100' adds 2 decimal places to the needed precision
            if (additionalDecimalPlacesRawValue < 0) {
                additionalDecimalPlacesRawValue = 0;
            }
        }

        if (!settings.decimalPlaces && !settings.decimalPlacesRawValue) {
            settings.decimalPlacesRawValue = Math.max(
                Math.max(settings.decimalPlacesShownOnBlur, settings.decimalPlacesShownOnFocus) + additionalDecimalPlacesRawValue,
                Number(currentSettings.originalDecimalPlacesRawValue) + additionalDecimalPlacesRawValue
            );
        } else {
            settings.decimalPlacesRawValue = Math.max(
                Math.max(settings.decimalPlacesShownOnBlur, settings.decimalPlacesShownOnFocus) + additionalDecimalPlacesRawValue,
                Number(settings.decimalPlacesRawValue) + additionalDecimalPlacesRawValue
            );
        }
    }

    /**
     * Analyze and save the minimumValue and maximumValue integer size for later uses
     * @private
     */
    _calculateVMinAndVMaxIntegerSizes() {
        let [maximumValueIntegerPart] = this.settings.maximumValue.toString().split('.');
        let [minimumValueIntegerPart] = (!this.settings.minimumValue && this.settings.minimumValue !== 0)?[]:this.settings.minimumValue.toString().split('.');
        maximumValueIntegerPart = maximumValueIntegerPart.replace(this.settings.negativeSignCharacter, '');
        minimumValueIntegerPart = minimumValueIntegerPart.replace(this.settings.negativeSignCharacter, '');

        this.settings.mIntPos = Math.max(maximumValueIntegerPart.length, 1);
        this.settings.mIntNeg = Math.max(minimumValueIntegerPart.length, 1);
    }

    /**
     * Calculate once what are the `valuesToStrings` option keys.
     * @private
     */
    _calculateValuesToStringsKeys() {
        if (this.settings.valuesToStrings) {
            this.valuesToStringsKeys = Object.keys(this.settings.valuesToStrings);
        } else {
            this.valuesToStringsKeys = [];
        }
    }

    /**
     * Caches regular expressions for _stripAllNonNumberCharactersExceptCustomDecimalChar
     *
     * @param {object} settings
     * @param {object} regex
     */
    static _cachesUsualRegularExpressions(settings, regex) {
        // Test if there is a negative character in the string
        let negativeSignReg;
        if (settings.negativeSignCharacter !== AutoNumeric.options.negativeSignCharacter.hyphen) {
            negativeSignReg = `([-\\${settings.negativeSignCharacter}]?)`;
        } else {
            negativeSignReg = '(-?)';
        }

        regex.aNegRegAutoStrip = negativeSignReg;
        settings.allowedAutoStrip = new RegExp(`[^-0123456789\\${settings.decimalCharacter}]`, 'g');
        settings.numRegAutoStrip = new RegExp(`${negativeSignReg}(?:\\${settings.decimalCharacter}?([0-9]+\\${settings.decimalCharacter}[0-9]+)|([0-9]*(?:\\${settings.decimalCharacter}[0-9]*)?))`);

        // Using this regex version `^${regex.aNegRegAutoStrip}0*(\\d|$)` entirely clear the input on blur
        settings.stripReg = new RegExp(`^${regex.aNegRegAutoStrip}0*([0-9])`);

        // All the characters that are accepted during the formula mode
        settings.formulaChars = new RegExp(`[0-9${settings.decimalCharacter}+\\-*/() ]`);
    }

    /**
     * Modify the user settings to make them 'exploitable' later.
     */
    _transformOptionsValuesToDefaultTypes() {
        for (const key in this.settings) {
            if (this.settings.hasOwnProperty(key)) {
                const value = this.settings[key];

                // Convert the strings 'true' and 'false' to booleans
                if (value === 'true' || value === 'false') {
                    this.settings[key] = value === 'true';
                }

                // Convert numbers in options to strings
                //TODO Only transform the values of type 'Number' to 'String' if it's a currency number (so that we can have big numbers). Do not convert other numbers (ie. `historySize`)
                if (typeof value === 'number') {
                    this.settings[key] = value.toString();
                }
            }
        }
    }

    /**
     * Convert the old settings options name to new ones.
     *
     * @param {object} options
     */
    static _convertOldOptionsToNewOnes(options) {
        //TODO Delete this function once the old options are not used anymore
        const oldOptionsConverter = {
            // Old option names, with their corresponding new names
            aSep                              : 'digitGroupSeparator',
            nSep                              : 'showOnlyNumbersOnFocus',
            dGroup                            : 'digitalGroupSpacing',
            aDec                              : 'decimalCharacter',
            altDec                            : 'decimalCharacterAlternative',
            aSign                             : 'currencySymbol',
            pSign                             : 'currencySymbolPlacement',
            pNeg                              : 'negativePositiveSignPlacement',
            aSuffix                           : 'suffixText',
            oLimits                           : 'overrideMinMaxLimits',
            vMax                              : 'maximumValue',
            vMin                              : 'minimumValue',
            mDec                              : 'decimalPlacesOverride',
            eDec                              : 'decimalPlacesShownOnFocus',
            scaleDecimal                      : 'decimalPlacesShownOnBlur',
            aStor                             : 'saveValueToSessionStorage',
            mRound                            : 'roundingMethod',
            aPad                              : 'allowDecimalPadding',
            nBracket                          : 'negativeBracketsTypeOnBlur',
            wEmpty                            : 'emptyInputBehavior',
            lZero                             : 'leadingZero',
            aForm                             : 'formatOnPageLoad',
            sNumber                           : 'selectNumberOnly',
            anDefault                         : 'defaultValueOverride',
            unSetOnSubmit                     : 'unformatOnSubmit',
            outputType                        : 'outputFormat',
            debug                             : 'showWarnings',

            // Current options :
            allowDecimalPadding               : true,
            alwaysAllowDecimalCharacter       : true,
            caretPositionOnFocus              : true,
            createLocalList                   : true,
            currencySymbol                    : true,
            currencySymbolPlacement           : true,
            decimalCharacter                  : true,
            decimalCharacterAlternative       : true,
            decimalPlaces                     : true,
            decimalPlacesRawValue             : true,
            decimalPlacesShownOnBlur          : true,
            decimalPlacesShownOnFocus         : true,
            defaultValueOverride              : true,
            digitalGroupSpacing               : true,
            digitGroupSeparator               : true,
            divisorWhenUnfocused              : true,
            emptyInputBehavior                : true,
            eventBubbles                      : true,
            eventIsCancelable                 : true,
            failOnUnknownOption               : true,
            formatOnPageLoad                  : true,
            formulaMode                       : true,
            historySize                       : true,
            isCancellable                     : true,
            leadingZero                       : true,
            maximumValue                      : true,
            minimumValue                      : true,
            modifyValueOnWheel                : true,
            negativeBracketsTypeOnBlur        : true,
            negativePositiveSignPlacement     : true,
            negativeSignCharacter             : true,
            noEventListeners                  : true,
            onInvalidPaste                    : true,
            outputFormat                      : true,
            overrideMinMaxLimits              : true,
            positiveSignCharacter             : true,
            rawValueDivisor                   : true,
            readOnly                          : true,
            roundingMethod                    : true,
            saveValueToSessionStorage         : true,
            selectNumberOnly                  : true,
            selectOnFocus                     : true,
            serializeSpaces                   : true,
            showOnlyNumbersOnFocus            : true,
            showPositiveSign                  : true,
            showWarnings                      : true,
            styleRules                        : true,
            suffixText                        : true,
            symbolWhenUnfocused               : true,
            unformatOnHover                   : true,
            unformatOnSubmit                  : true,
            valuesToStrings                   : true,
            watchExternalChanges              : true,
            wheelOn                           : true,
            wheelStep                         : true,

            // Additional information that are added to the `settings` object :
            //TODO Find a way to exclude those internal data from the settings object (ideally by using another object, or better yet, class attributes) -->
            allowedAutoStrip                  : true,
            formulaChars                      : true,
            isNegativeSignAllowed             : true,
            isPositiveSignAllowed             : true,
            mIntNeg                           : true,
            mIntPos                           : true,
            numRegAutoStrip                   : true,
            originalDecimalPlaces             : true,
            originalDecimalPlacesRawValue     : true,
            stripReg                          : true,
        };

        for (const option in options) {
            if (options.hasOwnProperty(option)) {
                if (oldOptionsConverter[option] === true) {
                    // If the option is a 'new' option, we continue looping
                    continue;
                }

                if (oldOptionsConverter.hasOwnProperty(option)) {
                    // Else we have an 'old' option name
                    AutoNumericHelper.warning(`You are using the deprecated option name '${option}'. Please use '${oldOptionsConverter[option]}' instead from now on. The old option name will be dropped very soon™.`, true);

                    // Then we modify the initial option object to use the new options instead of the old ones
                    options[oldOptionsConverter[option]] = options[option];
                    delete options[option];
                } else if (options.failOnUnknownOption) {
                    // ...or the option name is unknown. This means there is a problem with the options object, therefore we throw an error.
                    AutoNumericHelper.throwError(`Option name '${option}' is unknown. Please fix the options passed to autoNumeric`);
                }
            }
        }

        if ('mDec' in options) {
            AutoNumericHelper.warning('The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.', true);
        }
    }

    /**
     * Analyse the settings/options passed by the user, validate and clean them, then set them into `this.settings`.
     * Note: This sets the settings to `null` if somehow the settings objet is undefined or empty
     *       If only `decimalPlaces` is defined in the option, overwrite the other decimalPlaces* options, otherwise, use those options
     *
     * @param {object} options
     * @param {boolean} update - If set to `true`, then the settings already exists and this function only updates them instead of recreating them from scratch
     * @throws
     */
    _setSettings(options, update = false) {
        // If the user used old options, we convert them to new ones
        if (update || !AutoNumericHelper.isNull(options)) {
            this.constructor._convertOldOptionsToNewOnes(options);
        }

        if (update) {
            // The settings are updated
            // Update the original data, if it has changed
            const decimalPlacesRawValueInOptions = 'decimalPlacesRawValue' in options;
            if (decimalPlacesRawValueInOptions) {
                this.settings.originalDecimalPlacesRawValue = options.decimalPlacesRawValue;
            }

            const decimalPlacesInOptions = 'decimalPlaces' in options;
            if (decimalPlacesInOptions) {
                this.settings.originalDecimalPlaces = options.decimalPlaces;
            }

            // Then update all the `decimalPlaces*` options
            this.constructor._calculateDecimalPlacesOnUpdate(options, this.settings);

            // Finally generate the updated settings object to use
            this._mergeSettings(options); //TODO Check that the `styleRules` option is correctly cloned (due to depth cloning limitation)
        } else {
            // The settings are generated for the first time
            this.settings = {};
            // If we couldn't grab any settings, create them from the default ones and combine them with the options passed as a parameter as well as with the HTML5 `data-*` info (via `this.domElement.dataset`), if any.
            this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, options, { rawValue : this.defaultRawValue });
            this.caretFix = false;
            this.throwInput = true; // Throw input event
            this.allowedTagList = AutoNumericEnum.allowedTagList;
            this.runOnce = false;
            this.hoveredWithAlt = false; // Keep tracks if the current AutoNumeric element is hovered by the mouse cursor while `Alt` is pressed
        }

        // Modify the user settings to make them 'exploitable'
        this._transformOptionsValuesToDefaultTypes();

        // Immediately run the callbacks that could update the settings object
        this._runCallbacksFoundInTheSettingsObject();

        // Improve the `negativePositiveSignPlacement` option if needed
        this.constructor._correctNegativePositiveSignPlacementOption(this.settings);

        // Set the `caretPositionOnFocus` and `selectOnFocus` options so that they do not conflict, if one of those have been set manually by the user.
        // If order to check that, we take a look at the original options the user passed as an argument, not `this.settings` that have been merged with the default settings. //TODO Check the validity of that comment
        this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings);

        // Define if the negative or positive signs are allowed
        this.constructor._setNegativePositiveSignPermissions(this.settings);

        // Calculate the number of decimal places (during the element initialization)
        if (!update) {
            // Make sure the `originalDecimalPlaces` info is set
            if (AutoNumericHelper.isNull(options) || !options.decimalPlaces) {
                this.settings.originalDecimalPlaces = null;
            } else {
                this.settings.originalDecimalPlaces = options.decimalPlaces;
            }

            // Save the `originalDecimalPlacesRawValue` info
            this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue;

            // Then update all the `decimalPlaces*` options
            this.constructor._calculateDecimalPlacesOnInit(this.settings);
        }

        // Additional changes to the settings object
        this._calculateVMinAndVMaxIntegerSizes();
        this._setTrailingNegativeSignInfo();
        this.regex = {}; // Create the object that will store the regular expressions
        this.constructor._cachesUsualRegularExpressions(this.settings, this.regex);
        this.constructor._setBrackets(this.settings);
        this._calculateValuesToStringsKeys();

        // Validate the settings. Both tests throws if necessary.
        if (AutoNumericHelper.isEmptyObj(this.settings)) {
            AutoNumericHelper.throwError('Unable to set the settings, those are invalid ; an empty object was given.');
        }

        this.constructor.validate(this.settings, false, options);

        // Original settings saved for use when decimalPlacesShownOnFocus, divisorWhenUnfocused & showOnlyNumbersOnFocus options are being used
        this._keepAnOriginalSettingsCopy();
    }

    /**
     * Define if the negative or positive signs are allowed, and update the given settings object directly.
     *
     * @param {object} settings
     * @private
     */
    static _setNegativePositiveSignPermissions(settings) {
        settings.isNegativeSignAllowed = settings.minimumValue < 0;
        settings.isPositiveSignAllowed = settings.maximumValue >= 0;
    }

    /**
     * Convert the `value` parameter that can either be :
     * - a real number,
     * - a number represented in the scientific notation (ie. -123.4567e-6)
     * - a string representing a real number, or
     * - a string representing a localized number (with specific group separators and decimal character),
     * ...to a string representing a real 'javascript' number (ie. '1234' or '1234.567').
     *
     * This function returns `NaN` if such conversion fails.
     *
     * @param {int|float|string} value
     * @param {object} settings
     * @returns {string|NaN}
     */
    static _toNumericValue(value, settings) {
        //XXX Note; this function is static since we need to pass a `settings` object when calling the static `AutoNumeric.format()` method
        let result;
        if (AutoNumericHelper.isNumber(Number(value))) {
            // The value has either already been stripped, or a 'real' javascript number is passed as a parameter
            result = AutoNumericHelper.scientificToDecimal(value);
        } else {
            // Else if it's a string that `Number()` cannot typecast, then we try to convert the localized numeric string to a numeric one
            // Convert the value to a numeric string, stripping unnecessary characters in the process
            result = this._convertToNumericString(value.toString(), settings);

            // If the result is still not a numeric string, then we throw a warning
            if (!AutoNumericHelper.isNumber(Number(result))) {
                AutoNumericHelper.warning(`The given value "${value}" cannot be converted to a numeric one and therefore cannot be used appropriately.`, settings.showWarnings);
                result = NaN;
            }
        }

        return result;
    }

    /**
     * Return the pasted text that will be used, by stripping most non-numeric characters
     *
     * @param {string} text
     * @returns {string}
     */
    _preparePastedText(text) {
        return this.constructor._stripAllNonNumberCharacters(text, this.settings, true, this.isFocused);
    }

    /**
     * Return TRUE if the given value (a number as a string) is within the range set in the settings `minimumValue` and `maximumValue`, FALSE otherwise.
     *
     * @param {string} value
     * @param {object} parsedMinValue Parsed via the `parseStr()` function
     * @param {object} parsedMaxValue Parsed via the `parseStr()` function
     * @returns {boolean}
     */
    static _checkIfInRange(value, parsedMinValue, parsedMaxValue) {
        const parsedValue = AutoNumericHelper.parseStr(value);
        return AutoNumericHelper.testMinMax(parsedMinValue, parsedValue) > -1 && AutoNumericHelper.testMinMax(parsedMaxValue, parsedValue) < 1;
    }

    /**
     * Update the selection values as well as resets the internal state of the current AutoNumeric object.
     * This keeps tracks of the current selection and resets the 'processed' state.
     *
     * Note : This state can change between the keydown, keypress and keyup events, that's why
     *        this function is called on each event handler.
     *
     * @private
     */
    _updateInternalProperties() {
        this.selection = AutoNumericHelper.getElementSelection(this.domElement);
        this.processed = false;
    }

    /**
     * Update the `event.key` attribute that triggered the given event.
     *
     * `event.key` describes:
     * - the key name (if a non-printable character),
     * - or directly the character that result from the key press used to trigger the event.
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
     * The key list is described here:
     * @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
     *
     * @param {Event|KeyboardEvent} e
     * @private
     */
    _updateEventKeyInfo(e) {
        this.eventKey = AutoNumericHelper.character(e);
    }

    /**
     * Save the unformatted element value.
     * This is used in the 'cancellable' feature where the element value is saved on focus and input validation, to be used if the user wants to cancel his modifications by hitting the 'Escape' key.
     *
     * @private
     */
    _saveCancellableValue() {
        this.savedCancellableValue = this.rawValue;
    }

    /**
     * Set the text selection inside the input with the given start and end position.
     *
     * @param {int} start
     * @param {int} end
     * @private
     */
    _setSelection(start, end) {
        //TODO use this function to replace the direct calls to `setElementSelection()`, wherever possible
        start = Math.max(start, 0);
        end = Math.min(end, AutoNumericHelper.getElementValue(this.domElement).length);
        this.selection = {
            start,
            end,
            length: end - start,
        };

        AutoNumericHelper.setElementSelection(this.domElement, start, end);
    }

    /**
     * Set the caret position inside the input at the given position.
     *
     * @param {int} position
     * @private
     */
    _setCaretPosition(position) {
        this._setSelection(position, position);
    }

    /**
     * Return an array containing the string parts located on the left and right side of the caret or selection.
     * Those parts are left 'untouched', ie. formatted by autoNumeric.
     *
     * @returns {[string, string]} The parts on the left and right of the caret or selection
     * @private
     */
    _getLeftAndRightPartAroundTheSelection() {
        const value = AutoNumericHelper.getElementValue(this.domElement);
        const left = value.substring(0, this.selection.start);
        const right = value.substring(this.selection.end, value.length);

        return [left, right];
    }

    /**
     * Return an array containing the string parts located on the left and right side of the caret or selection.
     * Those parts are unformatted (stripped) of any non-numbers characters, and any trailing negative character is put back on the left hand side of the number.
     *
     * @returns {[string, string]} The parts on the left and right of the caret or selection, unformatted.
     * @private
     */
    _getUnformattedLeftAndRightPartAroundTheSelection() {
        let [left, right] = this._getLeftAndRightPartAroundTheSelection();
        if (left === '' && right === '') {
            return ['', ''];
        }

        // If changing the sign and `left` is equal to the number zero, prevent stripping the leading zero(s)
        let stripZeros = true;
        if ((this.eventKey === AutoNumericEnum.keyName.Hyphen || this.eventKey === AutoNumericEnum.keyName.Minus) && Number(left) === 0) {
            stripZeros = false;
        }

        //TODO DRY that with `_normalizeParts()` -->
        if (this.isTrailingNegative &&
            ((AutoNumericHelper.isNegative(right, this.settings.negativeSignCharacter) && // The caret is placed on the left of the negative sign
            !AutoNumericHelper.isNegative(left, this.settings.negativeSignCharacter)) ||
            (right === '' && // ..or the caret is placed on the far right of the input (Fix issue #481)
            AutoNumericHelper.isNegative(left, this.settings.negativeSignCharacter, true)))) {
            left = left.replace(this.settings.negativeSignCharacter, '');
            right = right.replace(this.settings.negativeSignCharacter, '');
            // This is done here because `_getUnformattedLeftAndRightPartAroundTheSelection()` is called multiple times during the same key event, and at one point the left/right value has been normalized already..
            left = left.replace('-', '');
            right = right.replace('-', '');

            // Then finally set back the normalized minus character at the right place
            left = `-${left}`;
        }

        left = AutoNumeric._stripAllNonNumberCharactersExceptCustomDecimalChar(left, this.settings, stripZeros, this.isFocused);
        right = AutoNumeric._stripAllNonNumberCharactersExceptCustomDecimalChar(right, this.settings, false, this.isFocused);

        return [left, right];
    }

    /**
     * Strip parts from excess characters and leading zeros.
     *
     * @param {string} left
     * @param {string} right
     * @returns {[*,*,*]}
     * @private
     */
    _normalizeParts(left, right) {
        //TODO Refactor with `_getUnformattedLeftAndRightPartAroundTheSelection` which share a lot of similar code
        // If changing the sign and left is equal to the number zero - prevents stripping the leading zeros
        let stripZeros = true;
        if ((this.eventKey === AutoNumericEnum.keyName.Hyphen || this.eventKey === AutoNumericEnum.keyName.Minus) && Number(left) === 0) {
            stripZeros = false;
        }

        if (this.isTrailingNegative &&
            AutoNumericHelper.isNegative(right, this.settings.negativeSignCharacter) &&
            !AutoNumericHelper.isNegative(left, this.settings.negativeSignCharacter)) {
            // Only set the negative sign if the value is negative
            left = `-${left}`;
            right = right.replace(this.settings.negativeSignCharacter, '');
        }

        left = AutoNumeric._stripAllNonNumberCharactersExceptCustomDecimalChar(left, this.settings, stripZeros, this.isFocused);
        right = AutoNumeric._stripAllNonNumberCharactersExceptCustomDecimalChar(right, this.settings, false, this.isFocused);

        // Prevents multiple leading zeros from being entered
        if (this.settings.leadingZero === AutoNumeric.options.leadingZero.deny &&
            (this.eventKey === AutoNumericEnum.keyName.num0 || this.eventKey === AutoNumericEnum.keyName.numpad0) &&
            Number(left) === 0 &&
            // If `right` is not empty and the first character is not `decimalCharacter`
            !AutoNumericHelper.contains(left, this.settings.decimalCharacter) && right !== '') {
            left = left.substring(0, left.length - 1);
        }

        // Insert zero there is a leading dot
        let newValue = left + right;
        if (this.settings.decimalCharacter) {
            const m = newValue.match(new RegExp(`^${this.regex.aNegRegAutoStrip}\\${this.settings.decimalCharacter}`));
            if (m) {
                left = left.replace(m[1], m[1] + '0');
                newValue = left + right;
            }
        }

        return [left, right, newValue];
    }

    /**
     * Set the formatted element value as well as the `rawValue`.
     * This returns `true` if the element and raw value have been modified, `false` otherwise.
     * This method also adjust the caret position according to the `leadingZero` option and the normalized value. //TODO What about the cursor *selection*?
     *
     * @param {string} left
     * @param {string} right
     * @param {boolean} isPaste
     * @returns {boolean}
     * @private
     */
    _setValueParts(left, right, isPaste = false) {
        const [normalizedLeft, normalizedRight, normalizedNewValue] = this._normalizeParts(left, right);
        const [minTest, maxTest] = AutoNumeric._checkIfInRangeWithOverrideOption(normalizedNewValue, this.settings);

        if (minTest && maxTest) {
            // First, set the raw value
            const roundedRawValue = AutoNumeric._truncateDecimalPlaces(normalizedNewValue, this.settings, isPaste, this.settings.decimalPlacesRawValue);
            const testValue = roundedRawValue.replace(this.settings.decimalCharacter, '.');

            if (testValue === '' || testValue === this.settings.negativeSignCharacter) {
                let valueToSetOnEmpty;
                switch (this.settings.emptyInputBehavior) {
                    case AutoNumeric.options.emptyInputBehavior.focus:
                    case AutoNumeric.options.emptyInputBehavior.press:
                    case AutoNumeric.options.emptyInputBehavior.always:
                        valueToSetOnEmpty = '';
                        break;
                    case AutoNumeric.options.emptyInputBehavior.min:
                        valueToSetOnEmpty = this.settings.minimumValue;
                        break;
                    case AutoNumeric.options.emptyInputBehavior.max:
                        valueToSetOnEmpty = this.settings.maximumValue;
                        break;
                    case AutoNumeric.options.emptyInputBehavior.zero:
                        valueToSetOnEmpty = '0';
                        break;
                    case AutoNumeric.options.emptyInputBehavior.null:
                        valueToSetOnEmpty = null;
                        break;
                    // When `emptyInputBehavior` is a number or a string representing a number
                    default:
                        valueToSetOnEmpty = this.settings.emptyInputBehavior;
                }

                this._setRawValue(valueToSetOnEmpty);
            } else {
                this._setRawValue(this._trimLeadingAndTrailingZeros(testValue));
            }

            // Then set the formatted value
            const roundedValueToShow = AutoNumeric._truncateDecimalPlaces(normalizedNewValue, this.settings, isPaste, this.settings.decimalPlacesShownOnFocus);
            let position = normalizedLeft.length;
            if (position > roundedValueToShow.length) {
                position = roundedValueToShow.length;
            }

            // Make sure when the user enter a '0' on the far left with a leading zero option set to 'deny', that the caret does not moves since the input is dropped (fix issue #283)
            if (position === 1 && normalizedLeft === '0' && this.settings.leadingZero === AutoNumeric.options.leadingZero.deny) {
                // If the user enter `0`, then the caret is put on the right side of it (Fix issue #299)
                if (normalizedRight === '' || normalizedLeft === '0' && normalizedRight !== '') {
                    position = 1;
                } else {
                    position = 0;
                }
            }

            this._setElementValue(roundedValueToShow, false);
            this._setCaretPosition(position);

            return true;
        }

        if (!minTest) {
            this._triggerEvent(AutoNumeric.events.minRangeExceeded, this.domElement);
        } else if (!maxTest) {
            this._triggerEvent(AutoNumeric.events.maxRangeExceeded, this.domElement);
        }

        return false;
    }

    /**
     * Helper function for `_expandSelectionOnSign()`.
     *
     * @returns {Array} Array containing [signPosition, currencySymbolPosition] of a formatted value
     * @private
     */
    _getSignPosition() {
        let result;
        if (this.settings.currencySymbol) {
            const currencySymbolLen = this.settings.currencySymbol.length;
            const value = AutoNumericHelper.getElementValue(this.domElement);
            if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
                const hasNeg = this.settings.negativeSignCharacter && value && value.charAt(0) === this.settings.negativeSignCharacter;
                if (hasNeg) {
                    result = [1, currencySymbolLen + 1];
                } else {
                    result = [0, currencySymbolLen];
                }
            } else {
                const valueLen = value.length;
                result = [valueLen - currencySymbolLen, valueLen];
            }
        } else {
            result = [1000, -1];
        }

        return result;
    }

    /**
     * Expands selection to cover whole sign
     * Prevents partial deletion/copying/overwriting of a sign
     * @private
     */
    _expandSelectionOnSign() {
        const [signPosition, currencySymbolPosition] = this._getSignPosition();
        const selection = this.selection;

        // If selection catches something except sign and catches only space from sign
        if (selection.start < currencySymbolPosition && selection.end > signPosition) {
            // Then select without empty space
            if ((selection.start < signPosition || selection.end > currencySymbolPosition) &&
                AutoNumericHelper.getElementValue(this.domElement).substring(Math.max(selection.start, signPosition), Math.min(selection.end, currencySymbolPosition))
                    .match(/^\s*$/)) {
                if (selection.start < signPosition) {
                    this._setSelection(selection.start, signPosition);
                } else {
                    this._setSelection(currencySymbolPosition, selection.end);
                }
            } else {
                // Else select with whole sign
                this._setSelection(Math.min(selection.start, signPosition), Math.max(selection.end, currencySymbolPosition));
            }
        }
    }

    /**
     * Try to strip pasted value to digits
     */
    _checkPaste() {
        // Do not process anything if the value has already been formatted
        if (this.formatted) {
            return;
        }

        if (!AutoNumericHelper.isUndefined(this.valuePartsBeforePaste)) {
            const oldParts = this.valuePartsBeforePaste;
            const [left, right] = this._getLeftAndRightPartAroundTheSelection();

            // Try to strip the pasted value first
            delete this.valuePartsBeforePaste;

            const modifiedLeftPart = left.substr(0, oldParts[0].length) + AutoNumeric._stripAllNonNumberCharactersExceptCustomDecimalChar(left.substr(oldParts[0].length), this.settings, true, this.isFocused);
            if (!this._setValueParts(modifiedLeftPart, right, true)) {
                this._setElementValue(oldParts.join(''), false);
                this._setCaretPosition(oldParts[0].length);
            }
        }
    }

    /**
     * Return `true` if the given key should be ignored or not.
     *
     * @param {string} eventKeyName
     * @returns {boolean}
     * @private
     */
    static _shouldSkipEventKey(eventKeyName) {
        const isFnKeys = AutoNumericHelper.isInArray(eventKeyName, AutoNumericEnum.keyName._allFnKeys);
        const isOSKeys = eventKeyName === AutoNumericEnum.keyName.OSLeft || eventKeyName === AutoNumericEnum.keyName.OSRight;
        const isContextMenu = eventKeyName === AutoNumericEnum.keyName.ContextMenu;
        const isSomeNonPrintableKeys = AutoNumericHelper.isInArray(eventKeyName, AutoNumericEnum.keyName._someNonPrintableKeys);
        const isOtherNonPrintableKeys = eventKeyName === AutoNumericEnum.keyName.NumLock ||
            eventKeyName === AutoNumericEnum.keyName.ScrollLock ||
            eventKeyName === AutoNumericEnum.keyName.Insert ||
            eventKeyName === AutoNumericEnum.keyName.Command;
        const isUnrecognizableKeys = eventKeyName === AutoNumericEnum.keyName.Unidentified;

        return isFnKeys || isOSKeys || isContextMenu || isSomeNonPrintableKeys || isUnrecognizableKeys || isOtherNonPrintableKeys;
    }

    /**
     * Process copying, cutting and pasting, as well as undo/redoing and cursor moving.
     * Return `true` if further processing should not be performed.
     *
     * @param {KeyboardEvent} e
     * @returns {boolean}
     * @private
     */
    _processNonPrintableKeysAndShortcuts(e) {
        // Catch the ctrl up on ctrl-v
        if (((e.ctrlKey || e.metaKey) && e.type === 'keyup' && !AutoNumericHelper.isUndefined(this.valuePartsBeforePaste)) || (e.shiftKey && this.eventKey === AutoNumericEnum.keyName.Insert)) {
            //TODO Move this test inside the `onKeyup` handler
            this._checkPaste();

            return false;
        }

        // Skip all function keys (F1-F12), Windows keys, tab and other special keys
        if (this.constructor._shouldSkipEventKey(this.eventKey)) {
            return true;
        }

        // If a "Select all" keyboard shortcut is detected (ctrl + a)
        if ((e.ctrlKey || e.metaKey) && this.eventKey === AutoNumericEnum.keyName.a) {
            if (this.settings.selectNumberOnly) {
                // `preventDefault()` is used here to prevent the browser to first select all the input text (including the currency sign), otherwise we would see that whole selection first in a flash, then the selection with only the number part without the currency sign.
                e.preventDefault();
                //TODO replace `selectNumber` by `select`?
                this.selectNumber();
            }

            return true;
        }

        // If a "Copy", "Paste" or "Cut" keyboard shortcut is detected (respectively 'ctrl + c', 'ctrl + v' or 'ctrl + x')
        if ((e.ctrlKey || e.metaKey) &&
            (this.eventKey === AutoNumericEnum.keyName.c ||
             this.eventKey === AutoNumericEnum.keyName.v ||
             this.eventKey === AutoNumericEnum.keyName.x)) {
            if (e.type === 'keydown') {
                this._expandSelectionOnSign();
            }

            // Try to prevent wrong paste
            if (this.eventKey === AutoNumericEnum.keyName.v || this.eventKey === AutoNumericEnum.keyName.Insert) {
                if (e.type === 'keydown' || e.type === 'keypress') {
                    if (AutoNumericHelper.isUndefined(this.valuePartsBeforePaste)) {
                        this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection();
                    }
                } else {
                    this._checkPaste();
                }
            }

            return e.type === 'keydown' || e.type === 'keypress' || this.eventKey === AutoNumericEnum.keyName.c;
        }


        // The undo shortcut
        if (e.ctrlKey || e.metaKey) {
            return !(this.eventKey === AutoNumericEnum.keyName.Z || this.eventKey === AutoNumericEnum.keyName.z);
        }

        // Jump over the thousand separator
        //TODO Move this test inside the `onKeydown` handler
        if (this.eventKey === AutoNumericEnum.keyName.LeftArrow || this.eventKey === AutoNumericEnum.keyName.RightArrow) {
            if (e.type === 'keydown' && !e.shiftKey) {
                const value = AutoNumericHelper.getElementValue(this.domElement);
                if (this.eventKey === AutoNumericEnum.keyName.LeftArrow &&
                    (value.charAt(this.selection.start - 2) === this.settings.digitGroupSeparator ||
                    value.charAt(this.selection.start - 2) === this.settings.decimalCharacter)) {
                    this._setCaretPosition(this.selection.start - 1);
                } else if (this.eventKey === AutoNumericEnum.keyName.RightArrow &&
                    (value.charAt(this.selection.start + 1) === this.settings.digitGroupSeparator ||
                    value.charAt(this.selection.start + 1) === this.settings.decimalCharacter)) {
                    this._setCaretPosition(this.selection.start + 1);
                }
            }

            return true;
        }

        return AutoNumericHelper.isInArray(this.eventKey, AutoNumericEnum.keyName._directionKeys);
    }

    /**
     * Process deletion of characters when the minus sign is to the right of the numeric characters.
     *
     * @param {string} left The part on the left of the caret or selection
     * @param {string} right The part on the right of the caret or selection
     * @returns {[string, string]}
     * @private
     */
    _processCharacterDeletionIfTrailingNegativeSign([left, right]) {
        const value = AutoNumericHelper.getElementValue(this.domElement);
        const isValNegative = AutoNumericHelper.isNegative(value, this.settings.negativeSignCharacter);

        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix) {
            if (this.eventKey === AutoNumericEnum.keyName.Backspace) {
                this.caretFix = (this.selection.start >= value.indexOf(this.settings.suffixText) && this.settings.suffixText !== '');
                if (value.charAt(this.selection.start - 1) === '-') {
                    left = left.substring(1);
                } else if (this.selection.start <= value.length - this.settings.suffixText.length) {
                    left = left.substring(0, left.length - 1);
                }
            } else {
                this.caretFix = (this.selection.start >= value.indexOf(this.settings.suffixText) && this.settings.suffixText !== '');
                if (this.selection.start >= value.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length) {
                    right = right.substring(1, right.length);
                }
                if (AutoNumericHelper.isNegative(left, this.settings.negativeSignCharacter) && value.charAt(this.selection.start) === '-') {
                    left = left.substring(1);
                }
            }
        }

        if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
            switch (this.settings.negativePositiveSignPlacement) {
                case AutoNumeric.options.negativePositiveSignPlacement.left:
                    this.caretFix = (this.selection.start >= value.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length);
                    if (this.eventKey === AutoNumericEnum.keyName.Backspace) {
                        if (this.selection.start === (value.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length) && isValNegative) {
                            left = left.substring(1);
                        } else if (left !== '-' && ((this.selection.start <= value.indexOf(this.settings.negativeSignCharacter)) || !isValNegative)) {
                            left = left.substring(0, left.length - 1);
                        }
                    } else {
                        if (left[0] === '-') {
                            right = right.substring(1);
                        }
                        if (this.selection.start === value.indexOf(this.settings.negativeSignCharacter) && isValNegative) {
                            left = left.substring(1);
                        }
                    }
                    break;
                case AutoNumeric.options.negativePositiveSignPlacement.right:
                    this.caretFix = (this.selection.start >= value.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length);
                    if (this.eventKey === AutoNumericEnum.keyName.Backspace) {
                        if (this.selection.start === (value.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length)) {
                            left = left.substring(1);
                        } else if (left !== '-' && this.selection.start <= (value.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length)) {
                            left = left.substring(0, left.length - 1);
                        } else if (left !== '' && !isValNegative) {
                            left = left.substring(0, left.length - 1);
                        }
                    } else {
                        this.caretFix = (this.selection.start >= value.indexOf(this.settings.currencySymbol) && this.settings.currencySymbol !== '');
                        if (this.selection.start === value.indexOf(this.settings.negativeSignCharacter)) {
                            left = left.substring(1);
                        }

                        right = right.substring(1);
                    }
                    break;
            }
        }

        return [left, right];
    }

    /**
     * Process the deletion of characters.
     */
    _processCharacterDeletion() {
        let left;
        let right;

        if (!this.selection.length) {
            [left, right] = this._getUnformattedLeftAndRightPartAroundTheSelection();
            if (left === '' && right === '') {
                this.throwInput = false;
            }

            if (this.isTrailingNegative && AutoNumericHelper.isNegative(AutoNumericHelper.getElementValue(this.domElement), this.settings.negativeSignCharacter)) {
                [left, right] = this._processCharacterDeletionIfTrailingNegativeSign([left, right]);
            } else {
                if (this.eventKey === AutoNumericEnum.keyName.Backspace) {
                    left = left.substring(0, left.length - 1);
                } else {
                    right = right.substring(1, right.length);
                }
            }
        } else {
            this._expandSelectionOnSign();
            [left, right] = this._getUnformattedLeftAndRightPartAroundTheSelection();
        }

        this._setValueParts(left, right);
    }

    /**
     * Return `true` if a decimal character is allowed to be typed.
     * If the number of decimal places shown on focus is zero, then the decimal character is not allowed.
     *
     * @returns {boolean}
     * @private
     */
    _isDecimalCharacterInsertionAllowed() {
        return String(this.settings.decimalPlacesShownOnFocus) !== String(AutoNumeric.options.decimalPlacesShownOnFocus.none) &&
            String(this.settings.decimalPlaces) !== String(AutoNumeric.options.decimalPlaces.none);
    }

    /**
     * Return `true` if the key is allowed.
     * This function decides if the key pressed should be dropped or accepted, and modify the value 'on-the-fly' accordingly.
     * //TODO This should use another function in order to separate the test and the modification
     *
     * @returns {boolean}
     */
    _processCharacterInsertion() {
        let [left, right] = this._getUnformattedLeftAndRightPartAroundTheSelection();
        if (this.eventKey !== AutoNumericEnum.keyName.AndroidDefault) {
            this.throwInput = true;
        }

        // Start rules when the decimal character key is pressed always use numeric pad dot to insert decimal separator
        // Do not allow decimal character if no decimal part allowed
        if (this.eventKey === this.settings.decimalCharacter ||
            (this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative)) {
            if (!this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter) {
                return false;
            }

            if (this.settings.alwaysAllowDecimalCharacter) {
                // Remove any previous decimal character
                left = left.replace(this.settings.decimalCharacter, '');
                right = right.replace(this.settings.decimalCharacter, '');
            } else {
                // Do not allow a decimal character if another decimal character is already present
                if (AutoNumericHelper.contains(left, this.settings.decimalCharacter)) {
                    return true;
                }

                // Prevent adding a decimal character at the far right of the number
                if (right.indexOf(this.settings.decimalCharacter) > 0) {
                    return true;
                }

                // Remove the decimal character is found on the far left of the right part
                if (right.indexOf(this.settings.decimalCharacter) === 0) {
                    right = right.substr(1);
                }
            }

            // If the user is trying to add a decimal character on the far left of the number, we allow it
            if (this.settings.negativeSignCharacter && AutoNumericHelper.contains(right, this.settings.negativeSignCharacter)) {
                // We need however to move the negative sign from the right to the left part
                left = `${this.settings.negativeSignCharacter}${left}`;
                right = right.replace(this.settings.negativeSignCharacter, '');
            }

            this._setValueParts(left + this.settings.decimalCharacter, right);

            return true;
        }

        // Prevent entering the minus sign if it's not allowed (Note: `this.settings.isNegativeSignAllowed` is only set to `true` if the minimumValue is lower than zero, allowing negative numbers to be entered)
        if ((this.eventKey === '-' || this.eventKey === '+') && this.settings.isNegativeSignAllowed) {
            // Here, the left and right parts have been normalized already, hence the minus sign usage
            if (left === '' && AutoNumericHelper.contains(right, '-')) {
                // The value is originally negative (with a trailing negative sign)
                right = right.replace('-', '');
            } else if (AutoNumericHelper.isNegativeStrict(left, '-')) {
                // The value is originally negative (with a leading negative sign)
                // Remove the negative sign, effectively converting the value to a positive one
                left = left.replace('-', ''); //TODO replace with '+' if `showPositiveSign` too?
            } else {
                // The value is originally positive, so we toggle the state to a negative one (unformatted, which means even with a trailing negative sign, we add the minus sign on the far left)
                left = `${this.settings.negativeSignCharacter}${left}`;
            }

            this._setValueParts(left, right);

            return true;
        }

        const eventNumber = Number(this.eventKey);
        if (eventNumber >= 0 && eventNumber <= 9) {
            // If the user tries to insert a digit
            if (this.settings.isNegativeSignAllowed && left === '' && AutoNumericHelper.contains(right, '-')) {
                // ...and that digit is before the minus sign
                left = '-';
                right = right.substring(1, right.length);
            }

            if (this.settings.maximumValue <= 0 &&
                this.settings.minimumValue < this.settings.maximumValue &&
                !AutoNumericHelper.contains(AutoNumericHelper.getElementValue(this.domElement), this.settings.negativeSignCharacter) &&
                this.eventKey !== '0') {
                left = `-${left}`;
            }

            this._setValueParts(`${left}${this.eventKey}`, right);

            return true;
        }

        // Prevent any other characters
        this.throwInput = false;

        return false;
    }

    /**
     * Formatting of just processed value while keeping the cursor position
     *
     * @param {Event} e
     * @private
     */
    _formatValue(e) {
        //TODO Break apart and simplify this really long function
        const elementValue = AutoNumericHelper.getElementValue(this.domElement);
        let [left] = this._getUnformattedLeftAndRightPartAroundTheSelection();

        // No grouping separator and no currency sign
        if ((this.settings.digitGroupSeparator  === '' || (this.settings.digitGroupSeparator !== ''  && !AutoNumericHelper.contains(elementValue, this.settings.digitGroupSeparator))) &&
            (this.settings.currencySymbol === '' || (this.settings.currencySymbol !== '' && !AutoNumericHelper.contains(elementValue, this.settings.currencySymbol)))) {
            let [subParts] = elementValue.split(this.settings.decimalCharacter);
            let negativeSign = '';
            if (AutoNumericHelper.isNegative(subParts, this.settings.negativeSignCharacter)) {
                negativeSign = this.settings.negativeSignCharacter;
                subParts = subParts.replace(this.settings.negativeSignCharacter, '');
                left = left.replace('-', ''); // Here we modify the unformatted value (with the 'normal' minus sign)
            }

            // Strip leading zero on positive value if needed
            if (negativeSign === '' && subParts.length > this.settings.mIntPos && left.charAt(0) === '0') {
                left = left.slice(1);
            }

            // Strip leading zero on negative value if needed
            if (negativeSign === this.settings.negativeSignCharacter && subParts.length > this.settings.mIntNeg && left.charAt(0) === '0') {
                left = left.slice(1);
            }

            if (!this.isTrailingNegative) { // Only add the minus sign if it's needed on that side of the numbers
                left = `${negativeSign}${left}`;
            }
        }

        const value = this.constructor._addGroupSeparators(elementValue, this.settings, this.isFocused, this.rawValue);
        let position = value.length;
        if (value) {
            // Prepare regexp which searches for cursor position from unformatted left part
            const leftAr = left.split('');

            // Fixes caret position with trailing minus sign
            if ((this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix ||
                (this.settings.negativePositiveSignPlacement !== AutoNumeric.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix)) &&
                leftAr[0] === this.settings.negativeSignCharacter && !this.settings.isNegativeSignAllowed) {
                leftAr.shift(); // Remove the negative sign character

                if ((this.eventKey === AutoNumericEnum.keyName.Backspace || this.eventKey === AutoNumericEnum.keyName.Delete) &&
                    this.caretFix) {
                    if ((this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.left) ||
                        (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.suffix)) {
                        leftAr.push(this.settings.negativeSignCharacter);
                        this.caretFix = e.type === 'keydown';
                    }

                    if (this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix &&
                        this.settings.negativePositiveSignPlacement === AutoNumeric.options.negativePositiveSignPlacement.right) {
                        const signParts = this.settings.currencySymbol.split('');
                        const escapeChr = ['\\', '^', '$', '.', '|', '?', '*', '+', '(', ')', '['];
                        const escapedParts = [];
                        signParts.forEach((i, miniParts) => {
                            miniParts = signParts[i];
                            if (AutoNumericHelper.isInArray(miniParts, escapeChr)) {
                                escapedParts.push('\\' + miniParts);
                            } else {
                                escapedParts.push(miniParts);
                            }
                        });

                        if (this.eventKey === AutoNumericEnum.keyName.Backspace && this.settings.negativeSignCharacter === '-') {
                            escapedParts.push('-');
                        }

                        // Pushing the escaped sign
                        leftAr.push(escapedParts.join(''));
                        this.caretFix = e.type === 'keydown';
                    }
                }
            }

            for (let i = 0; i < leftAr.length; i++) {
                if (!leftAr[i].match('\\d')) {
                    leftAr[i] = '\\' + leftAr[i];
                }
            }

            const leftReg = new RegExp('^.*?' + leftAr.join('.*?'));

            // Search cursor position in formatted value
            const newLeft = value.match(leftReg);
            if (newLeft) {
                position = newLeft[0].length;

                // If the positive sign is shown, calculate the caret position accordingly
                if (this.settings.showPositiveSign) {
                    if (position === 0 && newLeft.input.charAt(0) === this.settings.positiveSignCharacter) {
                        position = (newLeft.input.indexOf(this.settings.currencySymbol) === 1) ? this.settings.currencySymbol.length + 1 : 1;
                    }

                    if (position === 0 && newLeft.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter) {
                        position = this.settings.currencySymbol.length + 1;
                    }
                }

                // If we are just before the sign which is in prefix position
                if (((position === 0 && value.charAt(0) !== this.settings.negativeSignCharacter) || (position === 1 && value.charAt(0) === this.settings.negativeSignCharacter)) && this.settings.currencySymbol && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.prefix) {
                    // Place caret after prefix sign
                    //TODO Should the test be 'isNegative' instead of 'isNegativeStrict' in order to search for '-' everywhere in the string?
                    position = this.settings.currencySymbol.length + (AutoNumericHelper.isNegativeStrict(value, this.settings.negativeSignCharacter) ? 1 : 0);
                }
            } else {
                if (this.settings.currencySymbol && this.settings.currencySymbolPlacement === AutoNumeric.options.currencySymbolPlacement.suffix) {
                    // If we could not find a place for cursor and have a sign as a suffix
                    // Place caret before suffix currency sign
                    position -= this.settings.currencySymbol.length;
                }

                if (this.settings.suffixText) {
                    // If we could not find a place for cursor and have a suffix
                    // Place caret before suffix
                    position -= this.settings.suffixText.length;
                }
            }
        }

        // Only update the value if it has changed. This prevents modifying the selection, if any.
        if (value !== elementValue) {
            this._setElementValue(value, false);
            this._setCaretPosition(position);
        }

        this.formatted = true; //TODO Rename `this.formatted` to `this._formatExecuted`, since it's possible this function does not need to format anything (in the case where the keycode is dropped for instance)
    }

    /**
     * Serialize the form child <input> element values to a string, or an Array.
     * The output format is defined with the `formatType` argument.
     * This is loosely based upon http://stackoverflow.com/a/40705993/2834898.
     *
     * @param {HTMLFormElement} form
     * @param {boolean} intoAnArray If `true`, instead of generating a string, it generates an Array.
     * @param {string} formatType If `'unformatted'`, then the AutoNumeric elements values are unformatted, if `'localized'`, then the AutoNumeric elements values are localized, and if `'formatted'`, then the AutoNumeric elements values are kept formatted. In either way, this function does not modify the value of each DOM element, but only affect the value that is returned by that serialize function.
     * @param {string} serializedSpaceCharacter Can either be the '+' character, or the '%20' string.
     * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
     * @returns {string|Array}
     * @private
     */
    static _serialize(form, intoAnArray = false, formatType = 'unformatted', serializedSpaceCharacter = '+', forcedOutputFormat = null) {
        const result = [];

        if (typeof form === 'object' && form.nodeName.toLowerCase() === 'form') {
            Array.prototype.slice.call(form.elements).forEach(element => {
                if (element.name &&
                    !element.disabled &&
                    ['file', 'reset', 'submit', 'button'].indexOf(element.type) === -1) {
                    if (element.type === 'select-multiple') {
                        Array.prototype.slice.call(element.options).forEach(option => {
                            if (option.selected) {
                                //TODO Should we unformat/format/localize the selection option (which be default should be read-only)?
                                if (intoAnArray) {
                                    result.push({ name: element.name, value: option.value });
                                } else { // into a string
                                    result.push(`${encodeURIComponent(element.name)}=${encodeURIComponent(option.value)}`);
                                }
                            }
                        });
                    } else if (['checkbox', 'radio'].indexOf(element.type) === -1 || element.checked) {
                        let valueResult;
                        if (this.isManagedByAutoNumeric(element)) {
                            let anObject;
                            switch (formatType) {
                                case 'unformatted':
                                    anObject = this.getAutoNumericElement(element);
                                    if (!AutoNumericHelper.isNull(anObject)) {
                                        valueResult = this.unformat(element, anObject.getSettings());
                                    }

                                    break;
                                case 'localized':
                                    anObject = this.getAutoNumericElement(element);
                                    if (!AutoNumericHelper.isNull(anObject)) {
                                        // Here I need to clone the setting object, otherwise I would modify it when changing the `outputFormat` option value
                                        const currentSettings = AutoNumericHelper.cloneObject(anObject.getSettings());
                                        if (!AutoNumericHelper.isNull(forcedOutputFormat)) {
                                            currentSettings.outputFormat = forcedOutputFormat;
                                        }

                                        valueResult = this.localize(element, currentSettings);
                                    }

                                    break;
                                case 'formatted':
                                default:
                                    valueResult = element.value;
                            }
                        } else {
                            valueResult = element.value;
                        }

                        if (AutoNumericHelper.isUndefined(valueResult)) {
                            AutoNumericHelper.throwError('This error should never be hit. If it has, something really wrong happened!');
                        }

                        if (intoAnArray) {
                            result.push({ name: element.name, value: valueResult });
                        } else { // into a string
                            result.push(`${encodeURIComponent(element.name)}=${encodeURIComponent(valueResult)}`);
                        }
                    }
                }
            });
        }

        let finalResult;

        if (intoAnArray) {
            // Result as an Array
            // Note: `serializedSpaceCharacter` does not affect the array result since we do not change the space character for this one
            finalResult = result;
        } else {
            // Result as a string
            finalResult = result.join('&');

            if ('+' === serializedSpaceCharacter) {
                finalResult = finalResult.replace(/%20/g, '+');
            }
        }

        return finalResult;
    }

    /**
     * Serialize the form values to a string, outputting numeric strings for each AutoNumeric-managed element values.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @returns {string}
     */
    static _serializeNumericString(form, serializedSpaceCharacter = '+') {
        return this._serialize(form, false, 'unformatted', serializedSpaceCharacter);
    }

    /**
     * Serialize the form values to a string, outputting the formatted value as strings for each AutoNumeric-managed elements.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @returns {string}
     */
    static _serializeFormatted(form, serializedSpaceCharacter = '+') {
        return this._serialize(form, false, 'formatted', serializedSpaceCharacter);
    }

    /**
     * Serialize the form values to a string, outputting localized strings for each AutoNumeric-managed element values.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
     * @returns {string}
     */
    static _serializeLocalized(form, serializedSpaceCharacter = '+', forcedOutputFormat = null) {
        return this._serialize(form, false, 'localized', serializedSpaceCharacter, forcedOutputFormat);
    }

    /**
     * Generate an Array with the form values, outputting numeric strings for each AutoNumeric-managed element values.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @returns {Array}
     */
    static _serializeNumericStringArray(form, serializedSpaceCharacter = '+') {
        return this._serialize(form, true, 'unformatted', serializedSpaceCharacter);
    }

    /**
     * Generate an Array with the form values, outputting the formatted value as strings for each AutoNumeric-managed elements.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @returns {Array}
     */
    static _serializeFormattedArray(form, serializedSpaceCharacter = '+') {
        return this._serialize(form, true, 'formatted', serializedSpaceCharacter);
    }

    /**
     * Generate an Array with the form values, outputting localized strings for each AutoNumeric-managed element values.
     *
     * @param {HTMLFormElement} form
     * @param {string} serializedSpaceCharacter
     * @param {string|null} forcedOutputFormat If set, then this is the format that is used for the localization, instead of the default `outputFormat` option.
     * @returns {Array}
     */
    static _serializeLocalizedArray(form, serializedSpaceCharacter = '+', forcedOutputFormat = null) {
        return this._serialize(form, true, 'localized', serializedSpaceCharacter, forcedOutputFormat);
    }
}

/**
 * Initialize multiple DOM elements in one call (and possibly pass multiple values that will be mapped to each DOM element).
 *
 * @example
 * // Init multiple DOM elements in one call (and possibly pass multiple values that will be mapped to each DOM element)
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple([domElement1, domElement2, domElement3], { options });
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple([domElement1, domElement2, domElement3], [{ options }, 'euroPos']);
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple([domElement1, domElement2, domElement3], 12345.789, { options });
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple([domElement1, domElement2, domElement3], 12345.789, [{ options }, 'euroPos']);
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple.french([domElement1, domElement2, domElement3], [12345.789, 234.78, null], { options });
 * [anElement1, anElement2, anElement3] = AutoNumeric.multiple.french([domElement1, domElement2, domElement3], [12345.789, 234.78, null], [{ options }, 'euroPos']);
 *
 * // Special case, if a <form> element is passed (or any other 'parent' (or 'root') DOM element), then autoNumeric will initialize each child `<input>` elements recursively, ignoring those referenced in the `exclude` attribute
 * [anElement1, anElement2] = AutoNumeric.multiple({ rootElement: formElement }, { options });
 * [anElement1, anElement2] = AutoNumeric.multiple({ rootElement: formElement, exclude : [hiddenElement, tokenElement] }, { options });
 * [anElement1, anElement2] = AutoNumeric.multiple({ rootElement: formElement, exclude : [hiddenElement, tokenElement] }, [12345.789, null], { options });
 *
 * // If you want to select multiple elements via a css selector, then you must use the `multiple` function. Under the hood `QuerySelectorAll` is used.
 * [anElement1, anElement2] = AutoNumeric.multiple('.myCssClass > input', { options }); // This always return an Array, even if there is only one element selected
 * [anElement1, anElement2] = AutoNumeric.multiple('.myCssClass > input', [null, 12345.789], { options }); // Idem above, but with passing the initial values too
 *
 * @param {string|Array|{ rootElement: HTMLElement }|{ rootElement: HTMLElement, exclude: Array<HTMLInputElement>}} arg1
 * @param {number|Array|object|null} initialValue
 * @param {object|Array|null} options
 * @returns {Array}
 */
AutoNumeric.multiple = (arg1, initialValue = null, options = null) => {
    const result = [];

    // Analyze the arguments and transform them to make them exploitable
    if (AutoNumericHelper.isObject(initialValue)) {
        // If the user gave an option object as the second argument, instead of the initial values
        options = initialValue;
        initialValue = null;
    }

    if (AutoNumericHelper.isString(arg1)) {
        arg1 = [... document.querySelectorAll(arg1)]; // Convert a NodeList to an Array (cf. http://stackoverflow.com/a/37297292/2834898)
    } else if (AutoNumericHelper.isObject(arg1)) {
        if (!arg1.hasOwnProperty('rootElement')) {
            AutoNumericHelper.throwError(`The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found.`);
        }

        // Retrieve the DOM element list from the given <form> element
        const elements = [... arg1.rootElement.querySelectorAll('input')];
        if (arg1.hasOwnProperty('exclude')) {
            if (!Array.isArray(arg1.exclude)) {
                AutoNumericHelper.throwError(`The 'exclude' array passed to the 'multiple' function is invalid.`);
            }

            // Filter out the excluded elements
            arg1 = AutoNumericHelper.filterOut(elements, arg1.exclude);
        } else {
            arg1 = elements;
        }
    } else if (!AutoNumericHelper.isArray(arg1)) {
        AutoNumericHelper.throwError(`The given parameters to the 'multiple' function are invalid.`);
    }

    if (arg1.length === 0) {
        let showWarnings = true;
        if (!AutoNumericHelper.isNull(options) && AutoNumericHelper.isBoolean(options.showWarnings)) {
            showWarnings = options.showWarnings;
        }

        AutoNumericHelper.warning(`No valid DOM elements were given hence no AutoNumeric object were instantiated.`, showWarnings);

        return [];
    }

    // At this point, we know `arg1` is an array of DOM elements

    // This function can be initialized with two types of array, one for the initial values, and/or one for the options.
    // So we need to find out if an array is detected if the user passed an array of initial values, or an array of options
    // Therefore, we analyze the content of the arrays for the second and third arguments
    // ...for the second parameter :
    const isInitialValueArray = AutoNumericHelper.isArray(initialValue);
    const isInitialValueArrayAndNotEmpty = isInitialValueArray && initialValue.length >= 1;
    let secondArgumentIsInitialValueArray = false;
    let secondArgumentIsOptionArray = false;
    // Any of the arrays can be either an array of initial values, or an array of option object/pre-defined option names
    if (isInitialValueArrayAndNotEmpty) {
        const typeOfFirstArrayElement = typeof Number(initialValue[0]);
        // First we test the second argument
        secondArgumentIsInitialValueArray = typeOfFirstArrayElement === 'number' && !isNaN(Number(initialValue[0]));

        if (!secondArgumentIsInitialValueArray) {
            // If the second argument is an array, but not an array of values, check if it's instead an array of options/pre-defined option names
            if (typeOfFirstArrayElement === 'string' || isNaN(typeOfFirstArrayElement) || typeOfFirstArrayElement === 'object') {
                secondArgumentIsOptionArray = true;
            }
        }
    }

    // ...for the third parameter :
    const isOptionsArrayAndNotEmpty = AutoNumericHelper.isArray(options) && options.length >= 1;
    let thirdArgumentIsOptionArray = false;
    if (isOptionsArrayAndNotEmpty) {
        const typeOfFirstArrayElement = typeof options[0];
        if (typeOfFirstArrayElement === 'string' || typeOfFirstArrayElement === 'object') {
            // If the third argument is an array of options/pre-defined option names
            thirdArgumentIsOptionArray = true;
        }
    }

    // Depending of our findings, we generate the options variable to use `optionsToUse`, either directly, or merged
    let optionsToUse;
    if (secondArgumentIsOptionArray) {
        optionsToUse = AutoNumeric.mergeOptions(initialValue);
    } else if (thirdArgumentIsOptionArray) {
        optionsToUse = AutoNumeric.mergeOptions(options);
    } else {
        optionsToUse = options;
    }


    // Initialize the initial values
    const isInitialValueNumber = AutoNumericHelper.isNumber(initialValue);
    let initialValueArraySize;
    if (secondArgumentIsInitialValueArray) {
        initialValueArraySize = initialValue.length;
    }

    // Instantiate each AutoNumeric objects
    arg1.forEach((domElement, index) => {
        if (isInitialValueNumber) {
            // We set the same value for each elements
            result.push(new AutoNumeric(domElement, initialValue, optionsToUse));
        } else if (secondArgumentIsInitialValueArray && index <= initialValueArraySize) {
            result.push(new AutoNumeric(domElement, initialValue[index], optionsToUse));
        } else {
            result.push(new AutoNumeric(domElement, null, optionsToUse));
        }
    });

    return result;
};

/**
 * Polyfill for obsolete browsers like IE
 */
(function() {
// Polyfill for `Array.from()` (Fix issue #495)
if (!Array.from) {
    Array.from = object => [].slice.call(object);
}

// Polyfill for `CustomEvent` (cf. https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)
if (typeof window === 'undefined' || typeof window.CustomEvent === 'function') {
    return false;
}

function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: void(0) };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}

CustomEvent.prototype = window.Event.prototype;
window.CustomEvent = CustomEvent;
})();

/**
 * Options for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2017 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Event list managed by AutoNumeric
 *
 * @type {{initialized: string, invalidFormula: string, formatted: string, minRangeExceeded: string, maxRangeExceeded: string, native: {input: string, change: string}, validFormula: string}}
 */
AutoNumeric.events = {
    initialized     : 'autoNumeric:initialized',
    invalidFormula  : 'autoNumeric:invalidFormula',
    formatted       : 'autoNumeric:formatted',
    rawValueModified: 'autoNumeric:rawValueModified',
    minRangeExceeded: 'autoNumeric:minExceeded',
    maxRangeExceeded: 'autoNumeric:maxExceeded',
    native          : {
        input : 'input',
        change: 'change',
    },
    validFormula    : 'autoNumeric:validFormula',
};

Object.freeze(AutoNumeric.events.native);
Object.freeze(AutoNumeric.events);
Object.defineProperty(AutoNumeric, 'events', { configurable: false, writable: false });

/**
 * Options for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2016 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Options values enumeration
 */
AutoNumeric.options = {
    /* Defines if the decimal places should be padded with zeroes
     * `true`     : always pad decimals with zeros (ie. '12.3400')
     * `false`    : never pad with zeros (ie. '12.34')
     * `'floats'` : pad with zeroes only when there are decimals (ie. '12' and '12.3400')
     * Note: setting allowDecimalPadding to 'false' will override the 'decimalPlaces' setting.
     */
    allowDecimalPadding: {
        always: true,
        never : false,
        floats: 'floats',
    },

    /* Defines if the decimal character or decimal character alternative should be accepted when there is already a decimal character shown in the element.
     * If set to `true`, any decimal character input will be accepted and will subsequently modify the decimal character position, as well as the `rawValue`.
     * If set to `false`, the decimal character and its alternative key will be dropped as before. This is the default setting.
     */
    alwaysAllowDecimalCharacter: {
        alwaysAllow: true,
        doNotAllow: false,
    },

    /* Defines where should be positioned the caret on focus
     * null : Do not enforce any caret positioning on focus (this is needed when using `selectOnFocus`)
     * `'start'` : put the caret of the far left side of the value (excluding the positive/negative sign and currency symbol, if any)
     * `'end'` : put the caret of the far right side of the value (excluding the positive/negative sign and currency symbol, if any)
     * `'decimalLeft'` : put the caret of the left of the decimal character if any
     * `'decimalRight'` : put the caret of the right of the decimal character if any
     */
    caretPositionOnFocus: {
        start                 : 'start',
        end                   : 'end',
        decimalLeft           : 'decimalLeft',
        decimalRight          : 'decimalRight',
        doNoForceCaretPosition: null,
    },

    /* Defines if a local list of AutoNumeric objects should be kept when initializing this object.
     * This list is used by the `global.*` functions.
     */
    createLocalList: {
        createList     : true,
        doNotCreateList: false,
    },

    /* Defines the currency symbol string.
     * It can be a string of more than one character (allowing for instance to use a space on either side of it, example: '$ ' or ' $')
     * cf. https://en.wikipedia.org/wiki/Currency_symbol
     */
    currencySymbol: {
        none          : '',
        currencySign  : '¤',
        austral       : '₳', // ARA
        australCentavo: '¢',
        baht          : '฿', // THB
        cedi          : '₵', // GHS
        cent          : '¢',
        colon         : '₡', // CRC
        cruzeiro      : '₢', // BRB - Not used anymore since 1993
        dollar        : '$',
        dong          : '₫', // VND
        drachma       : '₯', // GRD (or 'Δρχ.' or 'Δρ.')
        dram          : '​֏', // AMD
        european      : '₠', // XEU (old currency before the Euro)
        euro          : '€', // EUR
        florin        : 'ƒ',
        franc         : '₣', // FRF
        guarani       : '₲', // PYG
        hryvnia       : '₴', // грн
        kip           : '₭', // LAK
        att           : 'ອັດ', // cents of the Kip
        lepton        : 'Λ.', // cents of the Drachma
        lira          : '₺', // TRY
        liraOld       : '₤',
        lari          : '₾', // GEL
        mark          : 'ℳ',
        mill          : '₥',
        naira         : '₦', // NGN
        peseta        : '₧',
        peso          : '₱', // PHP
        pfennig       : '₰', // cents of the Mark
        pound         : '£',
        real          : 'R$', // Brazilian real
        riel          : '៛', // KHR
        ruble         : '₽', // RUB
        rupee         : '₹', // INR
        rupeeOld      : '₨',
        shekel        : '₪',
        shekelAlt     : 'ש״ח‎‎',
        taka          : '৳', // BDT
        tenge         : '₸', // KZT
        togrog        : '₮', // MNT
        won           : '₩',
        yen           : '¥',
    },

    /* Defines where the currency symbol should be placed (before of after the numbers)
     * for prefix currencySymbolPlacement: "p" (default)
     * for suffix currencySymbolPlacement: "s"
     */
    currencySymbolPlacement: {
        prefix: 'p',
        suffix: 's',
    },

    /* Defines what decimal separator character is used
     */
    decimalCharacter: {
        comma                    : ',',
        dot                      : '.',
        middleDot                : '·',
        arabicDecimalSeparator   : '٫',
        decimalSeparatorKeySymbol: '⎖',
    },

    /* Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed.
     * This is used by countries that use a comma ',' as the decimal character and have keyboards with a numeric pads that have
     * a period 'full stop' as the decimal character (France or Spain for instance).
     */
    decimalCharacterAlternative: {
        none : null,
        comma: ',',
        dot  : '.',
    },

    /* Defines the default number of decimal places to show on the formatted value, and keep for the precision.
     * Incidentally, since we need to be able to show that many decimal places, this also defines the raw value precision by default.
     */
    decimalPlaces: {
        none : 0,
        one  : 1,
        two  : 2,
        three: 3,
        four : 4,
        five : 5,
        six  : 6,
    },

    /* Defines how many decimal places should be kept for the raw value (ie. This is the precision for float values).
     *
     * If this option is set to `null` (which is the default), then the value of `decimalPlaces` is used for `decimalPlacesRawValue` as well.
     * Note: Setting this to a lower number of decimal places than the one to be shown will lead to confusion for the users.
     */
    decimalPlacesRawValue: {
        useDefault: null,
        none      : 0,
        one       : 1,
        two       : 2,
        three     : 3,
        four      : 4,
        five      : 5,
        six       : 6,
    },

    /* Defines how many decimal places should be visible when the element is unfocused.
     * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.
     * This means this is optional ; if omitted the decimal places will be the same when the input has the focus.
     *
     * This option can be used in conjonction with the two other `scale*` options, which allows to display a different formatted value when the element is unfocused, while another formatted value is shown when focused.
     * For those `scale*` options to have any effect, `divisorWhenUnfocused` must not be `null`.
     */
    decimalPlacesShownOnBlur: {
        useDefault: null,
        none      : 0,
        one       : 1,
        two       : 2,
        three     : 3,
        four      : 4,
        five      : 5,
        six       : 6,
    },

    /* Defines how many decimal places should be visible when the element has the focus.
     * If this is set to `null`, then this option is ignored, and the `decimalPlaces` option value will be used instead.
     *
     * Example:
     * For instance if `decimalPlacesShownOnFocus` is set to `5` and the default number of decimal places is `2`, then on focus `1,000.12345` will be shown, while without focus `1,000.12` will be set back.
     * Note 1: the results depends on the rounding method used.
     * Note 2: the `getNumericString()` method returns the extended decimal places
     */
    decimalPlacesShownOnFocus: {
        useDefault: null,
        none      : 0,
        one       : 1,
        two       : 2,
        three     : 3,
        four      : 4,
        five      : 5,
        six       : 6,
    },

    /* Helper option for ASP.NET postback
     * This should be set as the value of the unformatted default value
     * examples:
     * no default value="" {defaultValueOverride: ""}
     * value=1234.56 {defaultValueOverride: '1234.56'}
     */
    defaultValueOverride: {
        doNotOverride: null,
    },

    /* Defines how many numbers should be grouped together (usually for the thousand separator)
     * - "2",  results in 99,99,99,999 India's lakhs
     * - "2s", results in 99,999,99,99,999 India's lakhs scaled
     * - "3",  results in 999,999,999 (default)
     * - "4",  results in 9999,9999,9999 used in some Asian countries
     * Note: This option does not accept other grouping choice.
     */
    digitalGroupSpacing: {
        two      : '2',
        twoScaled: '2s',
        three    : '3',
        four     : '4',
    },

    /* Defines the thousand grouping separator character
     * Example : If `'.'` is set, then you'll get `'1.234.567'`
     */
    digitGroupSeparator: {
        comma                   : ',',
        dot                     : '.',
        normalSpace             : ' ',
        thinSpace               : '\u2009',
        narrowNoBreakSpace      : '\u202f',
        noBreakSpace            : '\u00a0',
        noSeparator             : '',
        apostrophe              : `'`,
        arabicThousandsSeparator: '٬',
        dotAbove                : '˙',
        privateUseTwo           : '’', // \u0092
    },

    /* The `divisorWhenUnfocused` divide the element value on focus.
     * On blur, the element value is multiplied back.
     *
     * Example : Display percentages using { divisorWhenUnfocused: 100 } (or directly in the Html with `<input data-divisor-when-unfocused="100">`)
     * The divisor value does not need to be an integer, but please understand that Javascript has limited accuracy in math ; use with caution.
     * Note: The `getNumericString` method returns the full value, including the 'hidden' decimals.
     */
    divisorWhenUnfocused: {
        none      : null,
        percentage: 100,
        permille  : 1000,
        basisPoint: 10000,
    },

    /* Defines what should be displayed in the element if the raw value is an empty string ('').
     * - 'focus'  : The currency sign is displayed when the input receives focus (default)
     * - 'press'  : The currency sign is displayed whenever a key is being pressed
     * - 'always' : The currency sign is always displayed
     * - 'zero'   : A zero is displayed ('rounded' with or without a currency sign) if the input has no value on focus out
     * - 'min'    : The minimum value is displayed if the input has no value on focus out
     * - 'max'    : The maximum value is displayed if the input has no value on focus out
     * - 'null'   : When the element is empty, the `rawValue` and the element value/text is set to `null`. This also allows to set the value to `null` using `anElement.set(null)`.
     */
    emptyInputBehavior: {
        focus : 'focus',
        press : 'press',
        always: 'always',
        zero  : 'zero',
        min   : 'min',
        max   : 'max',
        null  : 'null',
    },

    /* Defines if the custom and native events triggered by AutoNumeric should bubble up or not.
     */
    eventBubbles: {
        bubbles: true,
        doesNotBubble: false,
    },

    /* Defines if the custom and native events triggered by AutoNumeric should be cancelable.
     */
    eventIsCancelable: {
        isCancelable: true,
        isNotCancelable: false,
    },

    /* This option is the 'strict mode' (aka 'debug' mode), which allows autoNumeric to strictly analyse the options passed, and fails if an unknown options is used in the settings object.
     * You should set that to `true` if you want to make sure you are only using 'pure' autoNumeric settings objects in your code.
     * If you see uncaught errors in the console and your code starts to fail, this means somehow those options gets polluted by another program (which usually happens when using frameworks).
     */
    failOnUnknownOption: {
        fail  : true,
        ignore: false,
    },

    /* Determine if the default value will be formatted on initialization.
     */
    formatOnPageLoad: {
        format     : true, // automatically formats the default value on initialization
        doNotFormat: false, // will not format the default value on initialization
    },

    /* Defines if the 'formula mode' can be activated by the user.
     * If set to `true`, then the user can enter the formula mode by entering the '=' character.
     * He will then be allowed to enter any simple math formula using numeric characters as well as the following operators +, -, *, /, ( and ).
     * The formula mode is closed when the user either validate their math expression using the `Enter` key, or when the element is blurred.
     * If the formula is invalid, the previous valid `rawValue` is set back, and the `autoNumeric:invalidFormula` event is sent.
     * When a valid formula is accepted, then its result is `set()`, and the `autoNumeric:validFormula` event is sent.
     *
     * By default, this mode is disabled.
     */
    formulaMode: {
        enabled : true,
        disabled: false,
    },

    /* Set the undo/redo history table size.
     * Each record keeps the raw value as well and the last known caret/selection positions.
     */
    historySize: {
        verySmall: 5,
        small    : 10,
        medium   : 20,
        large    : 50,
        veryLarge: 100,
        insane   : Number.MAX_SAFE_INTEGER,
    },

    /* Allow the user to 'cancel' and undo the changes he made to the given autonumeric-managed element, by pressing the 'Escape' key.
     * Whenever the user 'validate' the input (either by hitting 'Enter', or blurring the element), the new value is saved for subsequent 'cancellation'.
     *
     * The process :
     *   - save the input value on focus
     *   - if the user change the input value, and hit `Escape`, then the initial value saved on focus is set back
     *   - on the other hand if the user either have used `Enter` to validate (`Enter` throws a change event) his entries, or if the input value has been changed by another script in the mean time, then we save the new input value
     *   - on a successful 'cancel', select the whole value (while respecting the `selectNumberOnly` option)
     *   - bonus; if the value has not changed, hitting 'Esc' just select all the input value (while respecting the `selectNumberOnly` option)
     */
    isCancellable: {
        cancellable   : true,
        notCancellable: false,
    },

    /* Controls the leading zero behavior
     * - 'allow' : allows leading zeros to be entered. Zeros will be truncated when entering additional digits. On focusout zeros will be deleted
     * - 'deny'  : allows only one leading zero on values that are between 1 and -1
     * - 'keep'  : allows leading zeros to be entered. on focusout zeros will be retained
     */
    leadingZero: {
        allow: 'allow',
        deny : 'deny',
        keep : 'keep',
    },

    /* Defines the maximum possible value a user can enter.
     * Notes:
     * - this value must be a string and use the period for the decimal point
     * - this value needs to be larger than `minimumValue`
     */
    maximumValue: {
        tenTrillions          : '10000000000000', // 10000 billions
        oneBillion            : '1000000000',
        zero                  : '0',
    },

    /* Defines the minimum possible value a user can enter.
     * Notes:
     * - this value must be a string and use the period for the decimal point
     * - this value needs to be smaller than `maximumValue`
     * - if this is superior to 0, then you'll effectively prevent your user to entirely delete the content of your element
     */
    minimumValue: {
        tenTrillions          : '-10000000000000', // 10000 billions
        oneBillion            : '-1000000000',
        zero                  : '0',
    },

    /* Allows the user to increment or decrement the element value with the mouse wheel.
     * The wheel behavior can be modified by the `wheelStep` option.
     * This `wheelStep` option can be used in two ways, either by setting:
     * - a 'fixed' step value (`wheelStep : 1000`), or
     * - the 'progressive' string (`wheelStep : 'progressive'`), which will then activate a special mode where the step is automatically calculated based on the element value size.
     *
     * Note :
     * You can activate/deactivate the wheel event for each `wheelOn` option value by using the 'Shift' modifier key while using the mouse wheel.
     */
    modifyValueOnWheel: {
        modifyValue: true,
        doNothing  : false,
    },

    /* Adds brackets on negative values (ie. transforms '-$ 999.99' to '($999.99)')
     * Those brackets are visible only when the field does NOT have the focus.
     * The left and right symbols should be enclosed in quotes and separated by a comma.
     */
    negativeBracketsTypeOnBlur: {
        parentheses           : '(,)',
        brackets              : '[,]',
        chevrons              : '<,>',
        curlyBraces           : '{,}',
        angleBrackets         : '〈,〉',
        japaneseQuotationMarks: '｢,｣',
        halfBrackets          : '⸤,⸥',
        whiteSquareBrackets   : '⟦,⟧',
        quotationMarks        : '‹,›',
        guillemets            : '«,»',
        none                  : null, // This is the default value, which deactivate this feature
    },

    /* Placement of the negative/positive sign relative to the `currencySymbol` option.
     *
     * Example:
     * // Default values
     * -1,234.56  => default no options required
     * $-1,234.56 => {currencySymbol: "$", negativePositiveSignPlacement: "r"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty
     *
     * // Sign on the left hand side of the whole number
     * -$1,234.56 => {currencySymbol: "$"} or {currencySymbol: "$", negativePositiveSignPlacement: "l"}
     * -1,234.56$ => {currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "p"} // Default if negativePositiveSignPlacement is 'null' and currencySymbol is not empty
     *
     * // Sign on the right hand side of the whole number
     * 1,234.56-  => {negativePositiveSignPlacement: "s"}
     * $1,234.56- => {currencySymbol: "$", negativePositiveSignPlacement: "s"}
     * 1,234.56-$ => {currencySymbol: "$", currencySymbolPlacement: "s"}
     * 1,234.56$- => {currencySymbol: "$", currencySymbolPlacement: "s", negativePositiveSignPlacement: "r"}
     */
    negativePositiveSignPlacement: {
        prefix: 'p',
        suffix: 's',
        left  : 'l',
        right : 'r',
        none  : null,
    },

    /* Defines the negative sign symbol.
     * It can be a string of only one character.
     */
    negativeSignCharacter: {
        hyphen         : '-',
        minus          : '−',
        heavyMinus     : '➖',
        fullWidthHyphen: '－',
        circledMinus   : '⊖',
        squaredMinus   : '⊟',
        triangleMinus  : '⨺',
        plusMinus      : '±',
        minusPlus      : '∓',
        dotMinus       : '∸',
        minusTilde     : '≂',
        not            : '¬',
    },

    /* Defines if the element should have event listeners activated on it.
     * By default, those event listeners are only added to <input> elements and html element with the `contenteditable` attribute set to `true`, but not on the other html tags.
     * This allows to initialize elements without any event listeners.
     * Warning: Since AutoNumeric will not check the input content after its initialization, using some autoNumeric methods afterwards *will* probably leads to formatting problems.
     */
    noEventListeners: {
        noEvents : true,
        addEvents: false,
    },

    /* Manage how autoNumeric react when the user tries to paste an invalid number.
     * - 'error'    : (This is the default behavior) The input value is not changed and an error is output in the console.
     * - 'ignore'   : idem than 'error', but fail silently without outputting any error/warning in the console.
     * - 'clamp'    : if the pasted value is either too small or too big regarding the minimumValue and maximumValue range, then the result is clamped to those limits.
     * - 'truncate' : autoNumeric will insert as many pasted numbers it can at the initial caret/selection, until everything is pasted, or the range limit is hit.
     *                The non-pasted numbers are dropped and therefore not used at all.
     * - 'replace'  : autoNumeric will first insert as many pasted numbers it can at the initial caret/selection, then if the range limit is hit, it will try
     *                to replace one by one the remaining initial numbers (on the right side of the caret) with the rest of the pasted numbers.
     *
     * Note 1 : A paste content starting with a negative sign '-' will be accepted anywhere in the input, and will set the resulting value as a negative number
     * Note 2 : A paste content starting with a number will be accepted, even if the rest is gibberish (ie. '123foobar456').
     *          Only the first number will be used (here '123').
     * Note 3 : The paste event works with the `decimalPlacesShownOnFocus` option too.
     */
    onInvalidPaste: {
        error   : 'error',
        ignore  : 'ignore',
        clamp   : 'clamp',
        truncate: 'truncate',
        replace : 'replace',
    },

    /* Defines how the value should be formatted when wanting a 'localized' version of it.
     * - null or 'string' => 'nnnn.nn' or '-nnnn.nn' as text type. This is the default behavior.
     * - 'number'         => nnnn.nn or -nnnn.nn as a Number (Warning: this works only for integers inferior to Number.MAX_SAFE_INTEGER)
     * - ',' or '-,'      => 'nnnn,nn' or '-nnnn,nn'
     * - '.-'             => 'nnnn.nn' or 'nnnn.nn-'
     * - ',-'             => 'nnnn,nn' or 'nnnn,nn-'
     *
     * Note: The hyphen '-' is translated to the custom negative sign defined in `negativeSignCharacter`
     */
    outputFormat: {
        string       : 'string',
        number       : 'number',
        dot          : '.',
        negativeDot  : '-.',
        comma        : ',',
        negativeComma: '-,',
        dotNegative  : '.-',
        commaNegative: ',-',
        none         : null,
    },

    /* Override the minimum and maximum limits
     * overrideMinMaxLimits: "ceiling" adheres to maximumValue and ignores minimumValue settings
     * overrideMinMaxLimits: "floor" adheres to minimumValue and ignores maximumValue settings
     * overrideMinMaxLimits: "ignore" ignores both minimumValue & maximumValue
     */
    overrideMinMaxLimits: {
        ceiling      : 'ceiling',
        floor        : 'floor',
        ignore       : 'ignore',
        doNotOverride: null,
    },

    /* Defines the positive sign symbol.
     * It can be a string of only one character.
     * This is shown only if `showPositiveSign` is set to `true`.
     */
    positiveSignCharacter: {
        plus              : '+',
        fullWidthPlus     : '＋',
        heavyPlus         : '➕',
        doublePlus        : '⧺',
        triplePlus        : '⧻',
        circledPlus       : '⊕',
        squaredPlus       : '⊞',
        trianglePlus      : '⨹',
        plusMinus         : '±',
        minusPlus         : '∓',
        dotPlus           : '∔',
        altHebrewPlus     : '﬩',
        normalSpace       : ' ',
        thinSpace         : '\u2009',
        narrowNoBreakSpace: '\u202f',
        noBreakSpace      : '\u00a0',
    },

    /* The `rawValueDivisor` divides the formatted value shown in the AutoNumeric element and store the result in `rawValue`.
     * @example { rawValueDivisor: '100' } or <input data-raw-value-divisor="100">
     * Given the `0.01234` raw value, the formatted value will be displayed as `'1.234'`.
     * This is useful when displaying percentage for instance, and avoid the need to divide/multiply by 100 between the number shown and the raw value.
     */
    rawValueDivisor: {
        none      : null,
        percentage: 100,
        permille  : 1000,
        basisPoint: 10000,
    },

    /* Defines if the element (`<input>` or another allowed html tag) should be set as read-only on initialization.
     * When set to `true`, then:
     * - the `readonly` html property is added to the <input> element on initialization, or
     * - the `contenteditable` attribute is set to `false` on non-input elements.
     */
    readOnly: {
        readOnly : true,
        readWrite: false,
    },

    /* Defines the rounding method to use.
     * roundingMethod: "S", Round-Half-Up Symmetric (default)
     * roundingMethod: "A", Round-Half-Up Asymmetric
     * roundingMethod: "s", Round-Half-Down Symmetric (lower case s)
     * roundingMethod: "a", Round-Half-Down Asymmetric (lower case a)
     * roundingMethod: "B", Round-Half-Even "Bankers Rounding"
     * roundingMethod: "U", Round Up "Round-Away-From-Zero"
     * roundingMethod: "D", Round Down "Round-Toward-Zero" - same as truncate
     * roundingMethod: "C", Round to Ceiling "Toward Positive Infinity"
     * roundingMethod: "F", Round to Floor "Toward Negative Infinity"
     * roundingMethod: "N05" Rounds to the nearest .05 => same as "CHF" used in 1.9X and still valid
     * roundingMethod: "U05" Rounds up to next .05
     * roundingMethod: "D05" Rounds down to next .05
     */
    roundingMethod: {
        halfUpSymmetric                : 'S',
        halfUpAsymmetric               : 'A',
        halfDownSymmetric              : 's',
        halfDownAsymmetric             : 'a',
        halfEvenBankersRounding        : 'B',
        upRoundAwayFromZero            : 'U',
        downRoundTowardZero            : 'D',
        toCeilingTowardPositiveInfinity: 'C',
        toFloorTowardNegativeInfinity  : 'F',
        toNearest05                    : 'N05',
        toNearest05Alt                 : 'CHF',
        upToNext05                     : 'U05',
        downToNext05                   : 'D05',
    },

    /* Set to `true` to allow the `decimalPlacesShownOnFocus` value to be saved with sessionStorage
     * If IE 6 or 7 is detected, the value will be saved as a session cookie.
     */
    saveValueToSessionStorage: {
        save     : true,
        doNotSave: false,
    },

    /* Determine if the select all keyboard command will select the complete input text, or only the input numeric value
     * Note : If the currency symbol is between the numeric value and the negative sign, only the numeric value will be selected
     */
    selectNumberOnly: {
        selectNumbersOnly: true,
        selectAll        : false,
    },

    /* Defines if the element value should be selected on focus.
     * Note: The selection is done using the `selectNumberOnly` option.
     */
    selectOnFocus: {
        select     : true,
        doNotSelect: false,
    },

    /* Defines how the serialize functions should treat the spaces.
     * Those spaces ' ' can either be converted to the plus sign '+', which is the default, or to '%20'.
     * Both values being valid per the spec (http://www.w3.org/Addressing/URL/uri-spec.html).
     * Also see the summed up answer on http://stackoverflow.com/a/33939287.
     *
     * tl;dr : Spaces should be converted to '%20' before the '?' sign, then converted to '+' after.
     * In our case since we serialize the query, we use '+' as the default (but allow the user to get back the old *wrong* behavior).
     */
    serializeSpaces: {
        plus   : '+',
        percent: '%20',
    },

    /* Defines if the element value should be converted to the raw value on focus (and back to the formatted on blur).
     * If set to `true`, then autoNumeric remove the thousand separator, currency symbol and suffix on focus.
     * Example:
     * If the input value is '$ 1,999.88 suffix', on focus it becomes '1999.88' and back to '$ 1,999.88 suffix' on blur.
     */
    showOnlyNumbersOnFocus: {
        onlyNumbers: true,
        showAll    : false,
    },

    /* Allow the positive sign symbol `+` to be displayed for positive numbers.
     * By default, this positive sign is not shown.
     * The sign placement is controlled by the 'negativePositiveSignPlacement' option, mimicking the negative sign placement rules.
     */
    showPositiveSign: {
        show: true,
        hide: false,
    },

    /* Defines if warnings should be shown in the console.
     * Those warnings can be ignored, but are usually printed when something could be improved by the user (ie. option conflicts).
     */
    showWarnings: {
        show: true, // All warning are shown
        hide: false, // No warnings are shown, only the thrown errors
    },

    /* Defines the rules that calculate the CSS class(es) to apply on the element, based on the raw unformatted value.
     * This can also be used to call callbacks whenever the `rawValue` is updated.
     * Important: all callbacks must return `null` if no ranges/userDefined classes are selected
     * @example
     * {
     *     positive   : 'autoNumeric-positive', // Or `null` to not use it
     *     negative   : 'autoNumeric-negative',
     *     ranges     : [
     *         { min: 0, max: 25, class: 'autoNumeric-red' },
     *         { min: 25, max: 50, class: 'autoNumeric-orange' },
     *         { min: 50, max: 75, class: 'autoNumeric-yellow' },
     *         { min: 75, max: Number.MAX_SAFE_INTEGER, class: 'autoNumeric-green' },
     *     ],
     *     userDefined: [
     *         // If 'classes' is a string, set it if `true`, remove it if `false`
     *         { callback: rawValue => { return true; }, classes: 'thisIsTrue' },
     *         // If 'classes' is an array with only 2 elements, set the first class if `true`, the second if `false`
     *         { callback: rawValue => rawValue % 2 === 0, classes: ['autoNumeric-even', 'autoNumeric-odd'] },
     *         // Return only one index to use on the `classes` array (here, 'class3')
     *         { callback: rawValue => { return 2; }, classes: ['class1', 'class2', 'class3'] },
     *         // Return an array of indexes to use on the `classes` array (here, 'class1' and 'class3')
     *         { callback: rawValue => { return [0, 2]; }, classes: ['class1', 'class2', 'class3'] },
     *         // If 'classes' is `undefined` or `null`, then the callback is called with the AutoNumeric object passed as a parameter
     *         { callback: anElement => { return anElement.getFormatted(); } },
     *     ],
     * }
     */
    styleRules: {
        none                 : null,
        positiveNegative     : {
            positive: 'autoNumeric-positive',
            negative: 'autoNumeric-negative',
        },
        range0To100With4Steps: {
            ranges: [
                { min: 0, max: 25, class: 'autoNumeric-red' },
                { min: 25, max: 50, class: 'autoNumeric-orange' },
                { min: 50, max: 75, class: 'autoNumeric-yellow' },
                { min: 75, max: 100, class: 'autoNumeric-green' },
            ],
        },
        evenOdd              : {
            userDefined: [
                { callback: rawValue => rawValue % 2 === 0, classes: ['autoNumeric-even', 'autoNumeric-odd'] },
            ],
        },
        rangeSmallAndZero    : {
            userDefined: [
                {
                    callback  : rawValue => {
                        if (rawValue >= -1 && rawValue < 0) {
                            return 0;
                        }
                        if (Number(rawValue) === 0) {
                            return 1;
                        }
                        if (rawValue > 0 && rawValue <= 1) {
                            return 2;
                        }

                        return null;  // In case the rawValue is outside those ranges
                    },
                    classes: [
                        'autoNumeric-small-negative',
                        'autoNumeric-zero',
                        'autoNumeric-small-positive',
                    ],
                },
            ],
        },
    },

    /* Add a text on the right hand side of the element value.
     * This suffix text can have any characters in its string, except numeric characters and the negative/positive sign.
     * Example: ' dollars'
     */
    suffixText: {
        none      : '',
        percentage: '%',
        permille  : '‰',
        basisPoint: '‱',
    },

    /* The three options (divisorWhenUnfocused, decimalPlacesShownOnBlur & symbolWhenUnfocused) handle scaling of the input when the input does not have focus
     * Please note that the non-scaled value is held in data and it is advised that you use the `saveValueToSessionStorage` option to ensure retaining the value
     * ["divisor", "decimal places", "symbol"]
     * Example: with the following options set {divisorWhenUnfocused: '1000', decimalPlacesShownOnBlur: '1', symbolWhenUnfocused: ' K'}
     * Example: focusin value "1,111.11" focusout value "1.1 K"
     */

    /* The `symbolWhenUnfocused` option is a symbol placed as a suffix when not in focus.
     * This is optional too.
     */
    symbolWhenUnfocused: {
        none      : null,
        percentage: '%',
        permille  : '‰',
        basisPoint: '‱',
    },

    /* Defines if the element value should be unformatted when the user hover his mouse over it while holding the `Alt` key.
     * Unformatting there means that this removes any non-number characters and displays the *raw* value, as understood by Javascript (ie. `12.34` is a valid number, while `12,34` is not).
     *
     * We reformat back before anything else if :
     * - the user focus on the element by tabbing or clicking into it,
     * - the user releases the `Alt` key, and
     * - if we detect a mouseleave event.
     *
     * We unformat again if :
     * - while the mouse is over the element, the user hit `Alt` again
     */
    unformatOnHover: {
        unformat     : true,
        doNotUnformat: false, //TODO Rename to `keepFormat`
    },

    /* Removes the formatting and use the raw value in each autoNumeric elements of the parent form element, on the form `submit` event.
     * The output format is a numeric string (nnnn.nn or -nnnn.nn).
     */
    unformatOnSubmit: {
        unformat        : true,
        keepCurrentValue: false,
    },

    /* Provides a way for automatically replacing the formatted value with a pre-defined string, when the raw value is equal to a specific value
     * Here you can specify as many 'conversion' as needed.
     */
    valuesToStrings: {
        none         : null,
        zeroDash     : {
            0: '-',
        },
        oneAroundZero: {
            '-1': 'Min',
            1   : 'Max',
        },
    },

    /* Defines if the AutoNumeric element should watch external changes made without using `.set()`, but by using the basic `aNElement.node().value = 42` notation.
     * If set to `watch`, then AutoNumeric will format the new value using `.set()` internally.
     * Otherwise it will neither format it, nor save it in the history.
     */
    watchExternalChanges: {
        watch     : true,
        doNotWatch: false,
    },

    /* Defines when the wheel event will increment or decrement the element value.
     * When set to `'focus'`, the AutoNumeric-managed element needs to be focused for the wheel event to change the value.
     * When set to `'hover'`, using the wheel event while the mouse is hovering the element is sufficient (no focus needed).
     *
     * Note :
     * When `wheelOn` is set to `'focus'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily activate the increment/decrement feature even if the element is not focused.
     * When `wheelOn` is set to `'hover'`, you can use the 'Shift' modifier key while using the mouse wheel in order to temporarily disable the increment/decrement feature even if the element is not hovered.
     */
    wheelOn: {
        focus: 'focus',
        hover: 'hover',
    },

    /* That option is linked to the `modifyValueOnWheel` one and will only be used if the latter is set to `true`.
     * This option will modify the wheel behavior and can be used in two ways, either by setting :
     * - a 'fixed' step value (a positive float or integer number `1000`), or
     * - the `'progressive'` string.
     *
     * The 'fixed' mode always increment/decrement the element value by that amount, while respecting the `minimumValue` and `maximumValue` settings.
     * The 'progressive' mode will increment/decrement the element value based on its current value. The bigger the number, the bigger the step, and vice versa.
     */
    wheelStep: {
        progressive: 'progressive',
    },
};

/**
 * Simple function that will semi-deep freeze the `AutoNumeric.options` object.
 * By 'semi' it means the nested objects in the `styleRules` option are not frozen.
 * The ones in the `valuesToStrings` are though, since they are much more simple.
 *
 * @param {object} options
 * @returns {ReadonlyArray<any>}
 */
function freezeOptions(options) {
    // Freeze each property objects
    Object.getOwnPropertyNames(options).forEach(optionName => {
        if (optionName === 'valuesToStrings') {
            const vsProps = Object.getOwnPropertyNames(options.valuesToStrings);
            vsProps.forEach(valuesToStringObjectName => {
                if (!AutoNumericHelper.isIE11() && options.valuesToStrings[valuesToStringObjectName] !== null) {
                    Object.freeze(options.valuesToStrings[valuesToStringObjectName]);
                }
            });
        } else if (optionName !== 'styleRules') {
            if (!AutoNumericHelper.isIE11() && options[optionName] !== null) {
                Object.freeze(options[optionName]);
            }
        }
    });

    // Then freeze the options object globally
    return Object.freeze(options);
}

freezeOptions(AutoNumeric.options);
Object.defineProperty(AutoNumeric, 'options', { configurable: false, writable: false });

/**
 * Default settings for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2016 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint no-unused-vars: 0 */

/**
 * The defaults options.
 * These can be overridden by the following methods:
 * - HTML5 data attributes (ie. `<input type="text" data-currency-symbol=" €">`)
 * - Options passed to the `update` method (ie. `anElement.update({ currencySymbol: ' €' });`), or simply during the initialization (ie. `new AutoNumeric(domElement, { options });`)
 */
AutoNumeric.defaultSettings = {
    allowDecimalPadding          : AutoNumeric.options.allowDecimalPadding.always,
    alwaysAllowDecimalCharacter  : AutoNumeric.options.alwaysAllowDecimalCharacter.doNotAllow,
    caretPositionOnFocus         : AutoNumeric.options.caretPositionOnFocus.doNoForceCaretPosition,
    createLocalList              : AutoNumeric.options.createLocalList.createList,
    currencySymbol               : AutoNumeric.options.currencySymbol.none,
    currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.prefix,
    decimalCharacter             : AutoNumeric.options.decimalCharacter.dot,
    decimalCharacterAlternative  : AutoNumeric.options.decimalCharacterAlternative.none,
    decimalPlaces                : AutoNumeric.options.decimalPlaces.two,
    decimalPlacesRawValue        : AutoNumeric.options.decimalPlacesRawValue.useDefault,
    decimalPlacesShownOnBlur     : AutoNumeric.options.decimalPlacesShownOnBlur.useDefault,
    decimalPlacesShownOnFocus    : AutoNumeric.options.decimalPlacesShownOnFocus.useDefault,
    defaultValueOverride         : AutoNumeric.options.defaultValueOverride.doNotOverride,
    digitalGroupSpacing          : AutoNumeric.options.digitalGroupSpacing.three,
    digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.comma,
    divisorWhenUnfocused         : AutoNumeric.options.divisorWhenUnfocused.none,
    emptyInputBehavior           : AutoNumeric.options.emptyInputBehavior.focus,
    eventBubbles                 : AutoNumeric.options.eventBubbles.bubbles,
    eventIsCancelable            : AutoNumeric.options.eventIsCancelable.isCancelable,
    failOnUnknownOption          : AutoNumeric.options.failOnUnknownOption.ignore,
    formatOnPageLoad             : AutoNumeric.options.formatOnPageLoad.format,
    formulaMode                  : AutoNumeric.options.formulaMode.disabled,
    historySize                  : AutoNumeric.options.historySize.medium,
    isCancellable                : AutoNumeric.options.isCancellable.cancellable,
    leadingZero                  : AutoNumeric.options.leadingZero.deny,
    maximumValue                 : AutoNumeric.options.maximumValue.tenTrillions,
    minimumValue                 : AutoNumeric.options.minimumValue.tenTrillions,
    modifyValueOnWheel           : AutoNumeric.options.modifyValueOnWheel.modifyValue,
    negativeBracketsTypeOnBlur   : AutoNumeric.options.negativeBracketsTypeOnBlur.none,
    negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.none,
    negativeSignCharacter        : AutoNumeric.options.negativeSignCharacter.hyphen,
    noEventListeners             : AutoNumeric.options.noEventListeners.addEvents,
    //TODO Shouldn't we use `truncate` as the default value?
    onInvalidPaste               : AutoNumeric.options.onInvalidPaste.error,
    outputFormat                 : AutoNumeric.options.outputFormat.none,
    overrideMinMaxLimits         : AutoNumeric.options.overrideMinMaxLimits.doNotOverride,
    positiveSignCharacter        : AutoNumeric.options.positiveSignCharacter.plus,
    rawValueDivisor              : AutoNumeric.options.rawValueDivisor.none,
    readOnly                     : AutoNumeric.options.readOnly.readWrite,
    roundingMethod               : AutoNumeric.options.roundingMethod.halfUpSymmetric,
    saveValueToSessionStorage    : AutoNumeric.options.saveValueToSessionStorage.doNotSave,
    selectNumberOnly             : AutoNumeric.options.selectNumberOnly.selectNumbersOnly,
    selectOnFocus                : AutoNumeric.options.selectOnFocus.select,
    serializeSpaces              : AutoNumeric.options.serializeSpaces.plus,
    showOnlyNumbersOnFocus       : AutoNumeric.options.showOnlyNumbersOnFocus.showAll,
    showPositiveSign             : AutoNumeric.options.showPositiveSign.hide,
    showWarnings                 : AutoNumeric.options.showWarnings.show,
    styleRules                   : AutoNumeric.options.styleRules.none,
    suffixText                   : AutoNumeric.options.suffixText.none,
    symbolWhenUnfocused          : AutoNumeric.options.symbolWhenUnfocused.none,
    unformatOnHover              : AutoNumeric.options.unformatOnHover.unformat,
    unformatOnSubmit             : AutoNumeric.options.unformatOnSubmit.keepCurrentValue,
    valuesToStrings              : AutoNumeric.options.valuesToStrings.none,
    watchExternalChanges         : AutoNumeric.options.watchExternalChanges.doNotWatch,
    wheelOn                      : AutoNumeric.options.wheelOn.focus,
    wheelStep                    : AutoNumeric.options.wheelStep.progressive,
};

Object.freeze(AutoNumeric.defaultSettings);
Object.defineProperty(AutoNumeric, 'defaultSettings', { configurable: false, writable: false });

/**
 * Pre-defined options for autoNumeric.js
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2016 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

const euro = { // Français
    digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.dot, // or '\u202f'
    decimalCharacter             : AutoNumeric.options.decimalCharacter.comma,
    decimalCharacterAlternative  : AutoNumeric.options.decimalCharacterAlternative.dot,
    currencySymbol               : '\u202f€',
    currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.suffix,
    negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.prefix,
};

const dollar = {
    digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.comma,
    decimalCharacter             : AutoNumeric.options.decimalCharacter.dot,
    currencySymbol               : AutoNumeric.options.currencySymbol.dollar,
    currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.prefix,
    negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.right,
};

const japanese = { // 日本語
    digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.comma,
    decimalCharacter             : AutoNumeric.options.decimalCharacter.dot,
    currencySymbol               : AutoNumeric.options.currencySymbol.yen,
    currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.prefix,
    negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.right,
};


// Here we need to clone the initial objects in order to be able to edit the clones without affecting the originals
const euroF                           = AutoNumericHelper.cloneObject(euro);
euroF.formulaMode                     = AutoNumeric.options.formulaMode.enabled;
const euroPos                         = AutoNumericHelper.cloneObject(euro);
euroPos.minimumValue                  = 0;
const euroNeg                         = AutoNumericHelper.cloneObject(euro);
euroNeg.maximumValue                  = 0;
euroNeg.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.prefix;

const euroSpace                            = AutoNumericHelper.cloneObject(euro);
euroSpace.digitGroupSeparator              = AutoNumeric.options.digitGroupSeparator.normalSpace;
const euroSpacePos                         = AutoNumericHelper.cloneObject(euroSpace);
euroSpacePos.minimumValue                  = 0;
const euroSpaceNeg                         = AutoNumericHelper.cloneObject(euroSpace);
euroSpaceNeg.maximumValue                  = 0;
euroSpaceNeg.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.prefix;

const percentageEU2dec                            = AutoNumericHelper.cloneObject(euro);
percentageEU2dec.currencySymbol                   = AutoNumeric.options.currencySymbol.none;
percentageEU2dec.suffixText                       = `\u202f${AutoNumeric.options.suffixText.percentage}`;
percentageEU2dec.wheelStep                        = 0.0001; // This targets the `rawValue`, not the formatted one
percentageEU2dec.rawValueDivisor                  = AutoNumeric.options.rawValueDivisor.percentage;
const percentageEU2decPos                         = AutoNumericHelper.cloneObject(percentageEU2dec);
percentageEU2decPos.minimumValue                  = 0;
const percentageEU2decNeg                         = AutoNumericHelper.cloneObject(percentageEU2dec);
percentageEU2decNeg.maximumValue                  = 0;
percentageEU2decNeg.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.prefix;

const percentageEU3dec            = AutoNumericHelper.cloneObject(percentageEU2dec);
percentageEU3dec.decimalPlaces    = 3;
const percentageEU3decPos         = AutoNumericHelper.cloneObject(percentageEU2decPos);
percentageEU3decPos.decimalPlaces = 3;
const percentageEU3decNeg         = AutoNumericHelper.cloneObject(percentageEU2decNeg);
percentageEU3decNeg.decimalPlaces = 3;

const dollarF                                = AutoNumericHelper.cloneObject(dollar);
dollarF.formulaMode                          = AutoNumeric.options.formulaMode.enabled;
const dollarPos                              = AutoNumericHelper.cloneObject(dollar);
dollarPos.minimumValue                       = 0;
const dollarNeg                              = AutoNumericHelper.cloneObject(dollar);
dollarNeg.maximumValue                       = 0;
dollarNeg.negativePositiveSignPlacement      = AutoNumeric.options.negativePositiveSignPlacement.prefix;
const dollarNegBrackets                      = AutoNumericHelper.cloneObject(dollarNeg);
dollarNegBrackets.negativeBracketsTypeOnBlur = AutoNumeric.options.negativeBracketsTypeOnBlur.parentheses;

const percentageUS2dec                            = AutoNumericHelper.cloneObject(dollar);
percentageUS2dec.currencySymbol                   = AutoNumeric.options.currencySymbol.none;
percentageUS2dec.suffixText                       = AutoNumeric.options.suffixText.percentage;
percentageUS2dec.wheelStep                        = 0.0001;
percentageUS2dec.rawValueDivisor                  = AutoNumeric.options.rawValueDivisor.percentage;
const percentageUS2decPos                         = AutoNumericHelper.cloneObject(percentageUS2dec);
percentageUS2decPos.minimumValue                  = 0;
const percentageUS2decNeg                         = AutoNumericHelper.cloneObject(percentageUS2dec);
percentageUS2decNeg.maximumValue                  = 0;
percentageUS2decNeg.negativePositiveSignPlacement = AutoNumeric.options.negativePositiveSignPlacement.prefix;

const percentageUS3dec            = AutoNumericHelper.cloneObject(percentageUS2dec);
percentageUS3dec.decimalPlaces    = 3;
const percentageUS3decPos         = AutoNumericHelper.cloneObject(percentageUS2decPos);
percentageUS3decPos.decimalPlaces = 3;
const percentageUS3decNeg         = AutoNumericHelper.cloneObject(percentageUS2decNeg);
percentageUS3decNeg.decimalPlaces = 3;

const turkish = AutoNumericHelper.cloneObject(euro);
turkish.currencySymbol = AutoNumeric.options.currencySymbol.lira;

/**
 * Predefined options for the most common languages
 */
AutoNumeric.predefinedOptions = {
    euro,
    euroPos,
    euroNeg,
    euroSpace,
    euroSpacePos,
    euroSpaceNeg,
    percentageEU2dec,
    percentageEU2decPos,
    percentageEU2decNeg,
    percentageEU3dec,
    percentageEU3decPos,
    percentageEU3decNeg,
    dollar,
    dollarPos,
    dollarNeg,
    dollarNegBrackets,
    percentageUS2dec,
    percentageUS2decPos,
    percentageUS2decNeg,
    percentageUS3dec,
    percentageUS3decPos,
    percentageUS3decNeg,
    French                      : euro, // Français
    Spanish                     : euro, // Español
    NorthAmerican               : dollar,
    British                     : {
        digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.comma,
        decimalCharacter             : AutoNumeric.options.decimalCharacter.dot,
        currencySymbol               : AutoNumeric.options.currencySymbol.pound,
        currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.prefix,
        negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.right,
    },
    Swiss                       : { // Suisse
        digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.apostrophe,
        decimalCharacter             : AutoNumeric.options.decimalCharacter.dot,
        currencySymbol               : '\u202fCHF',
        currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.suffix,
        negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.prefix,
    },
    Japanese                    : japanese, // 日本語
    Chinese                     : japanese, // 中国語 (Chinese)
    Brazilian                   : {
        digitGroupSeparator          : AutoNumeric.options.digitGroupSeparator.dot,
        decimalCharacter             : AutoNumeric.options.decimalCharacter.comma,
        currencySymbol               : AutoNumeric.options.currencySymbol.real,
        currencySymbolPlacement      : AutoNumeric.options.currencySymbolPlacement.prefix,
        negativePositiveSignPlacement: AutoNumeric.options.negativePositiveSignPlacement.right,
    },
    Turkish                     : turkish,
    dotDecimalCharCommaSeparator: {
        digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.comma,
        decimalCharacter   : AutoNumeric.options.decimalCharacter.dot,
    },
    commaDecimalCharDotSeparator: {
        digitGroupSeparator        : AutoNumeric.options.digitGroupSeparator.dot,
        decimalCharacter           : AutoNumeric.options.decimalCharacter.comma,
        decimalCharacterAlternative: AutoNumeric.options.decimalCharacterAlternative.dot,
    },
    integer                     : {
        decimalPlaces: 0,
    },
    integerPos                  : {
        minimumValue : AutoNumeric.options.minimumValue.zero,
        decimalPlaces: 0,
    },
    integerNeg                  : {
        maximumValue : AutoNumeric.options.maximumValue.zero,
        decimalPlaces: 0,
    },
    float                       : {
        allowDecimalPadding: AutoNumeric.options.allowDecimalPadding.never,
    },
    floatPos                    : {
        allowDecimalPadding: AutoNumeric.options.allowDecimalPadding.never,
        minimumValue       : AutoNumeric.options.minimumValue.zero,
        maximumValue       : AutoNumeric.options.maximumValue.tenTrillions,
    },
    floatNeg                    : {
        allowDecimalPadding: AutoNumeric.options.allowDecimalPadding.never,
        minimumValue       : AutoNumeric.options.minimumValue.tenTrillions,
        maximumValue       : AutoNumeric.options.maximumValue.zero,
    },
    numeric                     : {
        digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.noSeparator,
        decimalCharacter   : AutoNumeric.options.decimalCharacter.dot,
        currencySymbol     : AutoNumeric.options.currencySymbol.none,
    },
    numericPos                  : {
        digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.noSeparator,
        decimalCharacter   : AutoNumeric.options.decimalCharacter.dot,
        currencySymbol     : AutoNumeric.options.currencySymbol.none,
        minimumValue       : AutoNumeric.options.minimumValue.zero,
        maximumValue       : AutoNumeric.options.maximumValue.tenTrillions,
    },
    numericNeg                  : {
        digitGroupSeparator: AutoNumeric.options.digitGroupSeparator.noSeparator,
        decimalCharacter   : AutoNumeric.options.decimalCharacter.dot,
        currencySymbol     : AutoNumeric.options.currencySymbol.none,
        minimumValue       : AutoNumeric.options.minimumValue.tenTrillions,
        maximumValue       : AutoNumeric.options.maximumValue.zero,
    },
};

Object.getOwnPropertyNames(AutoNumeric.predefinedOptions).forEach(optionName => {
    Object.freeze(AutoNumeric.predefinedOptions[optionName]);
});
Object.freeze(AutoNumeric.predefinedOptions);
Object.defineProperty(AutoNumeric, 'predefinedOptions', { configurable: false, writable: false });

/**
 * Babel + Webpack workaround for autoNumeric
 *
 * @author Alexandre Bonneau <alexandre.bonneau@linuxfr.eu>
 * @copyright © 2017 Alexandre Bonneau
 *
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sub license, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === 'production') {
    return function () {
      return null;
    };
  }

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
}
function deepmerge(target, source) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    clone: true
  };
  var output = options.clone ? _extends({}, target) : target;

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isObject(source[key]) && key in target) {
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }

  return _extends({}, propTypes, _defineProperty({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});
var reactIs_1 = reactIs.isElement;
var reactIs_2 = reactIs.isValidElementType;
var reactIs_3 = reactIs.ForwardRef;

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (_typeof(Component) === 'object') {
    switch (Component.$$typeof) {
      case reactIs_3:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      default:
        return undefined;
    }
  }

  return undefined;
}

var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously definied styles as well as
 * being untouched by simple user overrides.
 */

var pseudoClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$disableGloba = options.disableGlobal,
      disableGlobal = _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
  var seedPrefix = seed === '' ? '' : "".concat(seed, "-");
  var ruleCounter = 0;
  return function (rule, styleSheet) {
    ruleCounter += 1;

    if (process.env.NODE_ENV !== 'production') {
      if (ruleCounter >= 1e10) {
        console.warn(['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join(''));
      }
    }

    var name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (pseudoClasses.indexOf(rule.key) !== -1) {
        return "Mui-".concat(rule.key);
      }

      var prefix = "".concat(seedPrefix).concat(name, "-").concat(rule.key);

      if (!styleSheet.options.theme[nested] || seed !== '') {
        return prefix;
      }

      return "".concat(prefix, "-").concat(ruleCounter);
    }

    if (process.env.NODE_ENV === 'production') {
      return "".concat(seedPrefix).concat(productionPrefix).concat(ruleCounter);
    }

    var suffix = "".concat(rule.key, "-").concat(ruleCounter); // Help with debuggability.

    if (styleSheet.options.classNamePrefix) {
      return "".concat(seedPrefix).concat(styleSheet.options.classNamePrefix, "-").concat(suffix);
    }

    return "".concat(seedPrefix).concat(suffix);
  };
}

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  var theme = params.theme,
      name = params.name,
      props = params.props;

  if (!theme || !theme.props || !theme.props[name]) {
    return props;
  } // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  var defaultProps = theme.props[name];
  var propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;

var isProduction = process.env.NODE_ENV === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown rule " + name) : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
      process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Bad keyframes name " + key) : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : void 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.key, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.key, this.style, options);
  };

  return FontFaceRule;
}();
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@font-face' ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins$$1 = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins$$1.onProcessRule, plugins$$1);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins$$1 = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins$$1.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins$$1.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
          process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Unknown hook \"" + name + "\".") : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : void 0;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : void 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else process.env.NODE_ENV !== "production" ? warning(false, '[JSS] Insertion point is not in the DOM.') : void 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
    process.env.NODE_ENV !== "production" ? warning(false, "[JSS] " + err.message) : void 0;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.0.3";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins$$1 = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins$$1[_key] = arguments[_key];
    }

    plugins$$1.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var prop in fnValues) {
          styleRule.prop(prop, fnValues[prop](data), options);
        }
      }
    }
  };
}

var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

var separatorRegExp$1 = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp$1 = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

      process.env.NODE_ENV !== "production" ? warning(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : void 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp$1);
    var nestedSelectors = nestedProp.split(separatorRegExp$1);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp$1, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    if (options[prop]) {
      return "" + value + options[prop];
    }

    if (units[prop]) {
      return typeof units[prop] === 'function' ? units[prop](value).toString() : "" + value + units[prop];
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (isBrowser) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins$1 = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins$1.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins$1.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

var el;
var cache$1 = {};

if (isBrowser) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache$1[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache$1[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if (process.env.NODE_ENV !== 'benchmark' && cache$1[prop] != null) {
    return cache$1[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache$1[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache$1[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache$1[prop];
}

var cache$1$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (isBrowser) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if (process.env.NODE_ENV !== 'benchmark' && cache$1$1[cacheKey] != null) {
    return cache$1$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1$1[cacheKey] = prefixedValue;
  return cache$1$1[cacheKey];
}

/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$$1 && supportedValue$$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

function jssPreset() {
  return {
    plugins: [functionPlugin(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
  };
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component;

  if (!newClasses) {
    return baseClasses;
  }

  var nextClasses = _extends({}, baseClasses);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof newClasses === 'string') {
      console.error(["Material-UI: the value `".concat(newClasses, "` ") + "provided to the classes prop of ".concat(getDisplayName(Component), " is incorrect."), 'You might want to use the className prop instead.'].join('\n'));
      return baseClasses;
    }
  }

  Object.keys(newClasses).forEach(function (key) {
    if (process.env.NODE_ENV !== 'production') {
      if (!baseClasses[key] && newClasses[key]) {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not implemented in ".concat(getDisplayName(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','), ".")].join('\n'));
      }

      if (newClasses[key] && typeof newClasses[key] !== 'string') {
        console.error(["Material-UI: the key `".concat(key, "` ") + "provided to the classes prop is not valid for ".concat(getDisplayName(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n'));
      }
    }

    if (newClasses[key]) {
      nextClasses[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }
  });
  return nextClasses;
}

// Used https://github.com/thinkloop/multi-key-cache as inspiration
var multiKeyStore = {
  set: function set(cache, key1, key2, value) {
    var subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: function get(cache, key1, key2) {
    var subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: function _delete(cache, key1, key2) {
    var subCache = cache.get(key1);
    subCache.delete(key2);
  }
};

var ThemeContext = React.createContext(null);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme() {
  return React.useContext(ThemeContext);
}

var jss = create(jssPreset()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

var generateClassName = createGenerateClassName(); // Exported for test purposes

var sheetsManager = new Map();
var defaultOptions = {
  disableGeneration: false,
  generateClassName: generateClassName,
  jss: jss,
  sheetsCache: null,
  sheetsManager: sheetsManager,
  sheetsRegistry: null
};
var StylesContext = React.createContext(defaultOptions);

if (process.env.NODE_ENV !== 'production') {
  StylesContext.displayName = 'StylesContext';
}

var injectFirstNode;

function StylesProvider(props) {
  var children = props.children,
      _props$injectFirst = props.injectFirst,
      injectFirst = _props$injectFirst === void 0 ? false : _props$injectFirst,
      _props$disableGenerat = props.disableGeneration,
      disableGeneration = _props$disableGenerat === void 0 ? false : _props$disableGenerat,
      localOptions = _objectWithoutProperties(props, ["children", "injectFirst", "disableGeneration"]);

  var outerOptions = React.useContext(StylesContext);

  var context = _extends({}, outerOptions, {
    disableGeneration: disableGeneration
  }, localOptions);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof window === 'undefined' && !context.sheetsManager) {
      console.error('Material-UI: you need to use the ServerStyleSheets API when rendering on the server.');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (context.jss.options.insertionPoint && injectFirst) {
      console.error('Material-UI: you cannot use a custom insertionPoint and <StylesContext injectFirst> at the same time.');
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    if (injectFirst && localOptions.jss) {
      console.error('Material-UI: you cannot use the jss and injectFirst props at the same time.');
    }
  }

  if (!context.jss.options.insertionPoint && injectFirst && typeof window !== 'undefined') {
    if (!injectFirstNode) {
      var head = document.head;
      injectFirstNode = document.createComment('mui-inject-first');
      head.insertBefore(injectFirstNode, head.firstChild);
    }

    context.jss = create({
      plugins: jssPreset().plugins,
      insertionPoint: injectFirstNode
    });
  }

  return React.createElement(StylesContext.Provider, {
    value: context
  }, children);
}

process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes__default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
   */
  disableGeneration: PropTypes__default.bool,

  /**
   * JSS's class name generator.
   */
  generateClassName: PropTypes__default.func,

  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override Material-UI's styles, set this prop.
   */
  injectFirst: PropTypes__default.bool,

  /**
   * JSS's instance.
   */
  jss: PropTypes__default.object,

  /**
   * @ignore
   */
  serverGenerateClassName: PropTypes__default.func,

  /**
   * @ignore
   *
   * Beta feature.
   *
   * Cache for the sheets.
   */
  sheetsCache: PropTypes__default.object,

  /**
   * @ignore
   *
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: PropTypes__default.object,

  /**
   * @ignore
   *
   * Collect the sheets.
   */
  sheetsRegistry: PropTypes__default.object
} : void 0;

if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? StylesProvider.propTypes = exactProp(StylesProvider.propTypes) : void 0;
}

/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
var indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  if (process.env.NODE_ENV !== 'production') {
    if (indexCounter >= 0) {
      console.warn(['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join('\n'));
    }
  }

  return indexCounter;
}

// We use the same empty object to ref count the styles that don't need a theme object.
var noopTheme = {};

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  if (process.env.NODE_ENV !== 'production') {
    if (_typeof(stylesOrCreator) !== 'object' && !themingEnabled) {
      console.error(['Material-UI: the `styles` argument provided is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n'));
    }
  }

  return {
    create: function create(theme, name) {
      var styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          if (themingEnabled === true && theme === noopTheme) {
            // TODO: prepend error message/name instead
            console.error(['Material-UI: the `styles` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
          }
        }

        throw err;
      }

      if (!name || !theme.overrides || !theme.overrides[name]) {
        return styles;
      }

      var overrides = theme.overrides[name];

      var stylesWithOverrides = _extends({}, styles);

      Object.keys(overrides).forEach(function (key) {
        if (process.env.NODE_ENV !== 'production') {
          if (!stylesWithOverrides[key]) {
            console.warn(['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n'));
          }
        }

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key], overrides[key]);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

function getClasses(_ref, classes, Component) {
  var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  var generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component: Component
    });
  }

  return state.cacheClasses.value;
}

function attach(_ref2, props) {
  var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  var options = _extends({}, stylesCreator.options, {}, stylesOptions, {
    theme: theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    var staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    var styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }

  if (sheetManager.dynamicStyles) {
    var dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update(_ref3, props) {
  var state = _ref3.state;

  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach(_ref4) {
  var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

  if (stylesOptions.disableGeneration) {
    return;
  }

  var sheetManager = multiKeyStore.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  var sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  var key = React.useRef([]);
  var output; // Store "generation" key. Just returns a new object every time

  var currentKey = React.useMemo(function () {
    return {};
  }, values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  React.useEffect(function () {
    return function () {
      if (output) {
        output();
      }
    };
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme = _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
      stylesOptions2 = _objectWithoutProperties(options, ["name", "classNamePrefix", "Component", "defaultTheme"]);

  var stylesCreator = getStylesCreator(stylesOrCreator);
  var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name: name,
    meta: classNamePrefix,
    classNamePrefix: classNamePrefix
  };
  return function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var theme = useTheme() || defaultTheme;

    var stylesOptions = _extends({}, React.useContext(StylesContext), {}, stylesOptions2);

    var instance = React.useRef();
    var shouldUpdate = React.useRef();
    useSynchronousEffect(function () {
      var current = {
        name: name,
        state: {},
        stylesCreator: stylesCreator,
        stylesOptions: stylesOptions,
        theme: theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return function () {
        detach(current);
      };
    }, [theme, stylesCreator]);
    React.useEffect(function () {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    return getClasses(instance.current, props.classes, Component);
  };
}

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = _objectWithoutProperties(options, ["defaultTheme", "withTheme", "name"]);

    if (process.env.NODE_ENV !== 'production') {
      if (Component === undefined) {
        throw new Error(['You are calling withStyles(styles)(Component) with an undefined component.', 'You may have forgotten to import it.'].join('\n'));
      }
    }

    var classNamePrefix = name;

    if (process.env.NODE_ENV !== 'production') {
      if (!name) {
        // Provide a better DX outside production.
        var displayName = getDisplayName(Component);

        if (displayName !== undefined) {
          classNamePrefix = displayName;
        }
      }
    }

    var useStyles = makeStyles(stylesOrCreator, _extends({
      defaultTheme: defaultTheme,
      Component: Component,
      name: name || Component.displayName,
      classNamePrefix: classNamePrefix
    }, stylesOptions));
    var WithStyles = React.forwardRef(function WithStyles(props, ref) {
      var classesProp = props.classes,
          innerRef = props.innerRef,
          other = _objectWithoutProperties(props, ["classes", "innerRef"]);

      var classes = useStyles(props);
      var theme;
      var more = other;

      if (typeof name === 'string' || withTheme) {
        // name and withTheme are invariant in the outer scope
        // eslint-disable-next-line react-hooks/rules-of-hooks
        theme = useTheme() || defaultTheme;

        if (name) {
          more = getThemeProps({
            theme: theme,
            name: name,
            props: other
          });
        } // Provide the theme to the wrapped component.
        // So we don't have to use the `withTheme()` Higher-order Component.


        if (withTheme && !more.theme) {
          more.theme = theme;
        }
      }

      return React.createElement(Component, _extends({
        ref: innerRef || ref,
        classes: classes
      }, more));
    });
    process.env.NODE_ENV !== "production" ? WithStyles.propTypes = {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: PropTypes__default.object,

      /**
       * Use that prop to pass a ref to the decorated component.
       * @deprecated
       */
      innerRef: chainPropTypes(PropTypes__default.oneOfType([PropTypes__default.func, PropTypes__default.object]), function (props) {
        if (props.innerRef == null) {
          return null;
        }

        return null; // return new Error(
        //   'Material-UI: the `innerRef` prop is deprecated and will be removed in v5. ' +
        //     'Refs are now automatically forwarded to the inner component.',
        // );
      })
    } : void 0; // The wrapper receives only user supplied props, which could be a subset of
    // the actual props Component might receive due to merging with defaultProps.
    // So copying it here would give us the same result in the wrapper as well.

    WithStyles.defaultProps = Component.defaultProps;

    if (process.env.NODE_ENV !== 'production') {
      WithStyles.displayName = "WithStyles(".concat(getDisplayName(Component), ")");
    }

    hoistNonReactStatics_cjs(WithStyles, Component);

    if (process.env.NODE_ENV !== 'production') {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
      WithStyles.useStyles = useStyles;
    }

    return WithStyles;
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var styles = function styles(theme) {
  return {
    textField: function textField(props) {
      return {
        textAlign: props.textAlign || "right"
      };
    }
  };
};

/**
 * CurrencyTextField is a [react](https://reactjs.org/) component with automated currency and number format, and with [Material-ui](https://material-ui.com/) look and feel.
 *
 * CurrencyTextField is a wrapper component for <a href="https://github.com/autoNumeric/autoNumeric">autonumeric</a> and based on <a href="https://github.com/mkg0/react-numeric">react-numeric</a>.
 *
 * Main features:
 * * Adds thousands separator automatically.
 * * Adds automatically the decimals on blur.
 * * Smart input. User can only type the accepted characters depending on the current value.
 * * Lots of config options...
 * * It accepts all the `props` and `classes` of Material-Ui <a href="https://material-ui.com/api/text-field/#textfield-api">TextField API</a> (Ex: classes, label, helperText, variant).
 * * And also all the `options` from <a href="http://autonumeric.org/guide">AutoNumeric</a>
 */

var CurrencyTextField = function (_React$Component) {
  inherits(CurrencyTextField, _React$Component);

  function CurrencyTextField(props) {
    classCallCheck(this, CurrencyTextField);

    var _this = possibleConstructorReturn(this, (CurrencyTextField.__proto__ || Object.getPrototypeOf(CurrencyTextField)).call(this, props));

    _this.getValue = _this.getValue.bind(_this);
    _this.callEventHandler = _this.callEventHandler.bind(_this);
    return _this;
  }

  createClass(CurrencyTextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          currencySymbol = _props.currencySymbol,
          others = objectWithoutProperties(_props, ["currencySymbol"]);

      this.autonumeric = new AutoNumeric(this.input, this.props.value, _extends$1({}, this.props.preDefined, others, {
        onChange: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onKeyPress: undefined,
        onKeyUp: undefined,
        onKeyDown: undefined,
        watchExternalChanges: false
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.autonumeric.remove();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var isOptionsChanged = JSON.stringify(_extends$1({}, this.props, { value: undefined })) !== JSON.stringify(_extends$1({}, newProps, { value: undefined }));
      var isValueChanged = this.props.value !== newProps.value && this.getValue() !== newProps.value;
      if (isValueChanged) {
        this.autonumeric.set(newProps.value);
      }
      if (isOptionsChanged) {
        this.autonumeric.update(_extends$1({}, newProps.preDefined, newProps, {
          onChange: undefined,
          onFocus: undefined,
          onBlur: undefined,
          onKeyPress: undefined,
          onKeyUp: undefined,
          onKeyDown: undefined,
          watchExternalChanges: false
        }));
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (!this.autonumeric) return;
      var valueMapper = {
        string: function string(numeric) {
          return numeric.getNumericString();
        },
        number: function number(numeric) {
          return numeric.getNumber();
        }
      };
      return valueMapper[this.props.outputFormat](this.autonumeric);
    }
  }, {
    key: "callEventHandler",
    value: function callEventHandler(event, eventName) {
      if (!this.props[eventName]) return;
      this.props[eventName](event, this.getValue());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          classes = _props2.classes,
          currencySymbol = _props2.currencySymbol,
          inputProps = _props2.inputProps,
          InputProps = _props2.InputProps,
          others = objectWithoutProperties(_props2, ["classes", "currencySymbol", "inputProps", "InputProps"]);


      var otherProps = {};["id", "value", "label", "className", "autoFocus", "variant", "style", "error", "disabled", "type", "name", "defaultValue", "tabIndex", "fullWidth", "rows", "rowsMax", "select", "required", "helperText", "unselectable", "margin", "SelectProps", "multiline", "size", "FormHelperTextProps", "placeholder"].forEach(function (prop) {
        return otherProps[prop] = _this2.props[prop];
      });

      return React.createElement(core.TextField, _extends$1({
        inputRef: function inputRef(ref) {
          return _this2.input = ref;
        },
        onChange: function onChange(e) {
          return _this2.callEventHandler(e, "onChange");
        },
        onFocus: function onFocus(e) {
          return _this2.callEventHandler(e, "onFocus");
        },
        onBlur: function onBlur(e) {
          return _this2.callEventHandler(e, "onBlur");
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.callEventHandler(e, "onKeyPress");
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.callEventHandler(e, "onKeyUp");
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.callEventHandler(e, "onKeyDown");
        },
        InputProps: _extends$1({
          startAdornment: React.createElement(
            core.InputAdornment,
            { position: "start" },
            currencySymbol
          )
        }, InputProps),
        inputProps: _extends$1({
          className: classes.textField
        }, inputProps)
      }, otherProps));
    }
  }]);
  return CurrencyTextField;
}(React.Component);

CurrencyTextField.propTypes = {
  type: PropTypes__default.oneOf(["text", "tel", "hidden"]),
  /** The variant to use. */
  variant: PropTypes__default.string,
  id: PropTypes__default.string,
  /** The CSS class name of the wrapper element. */
  className: PropTypes__default.string,
  /** Inline styling for element */
  style: PropTypes__default.object,
  /** If true, the input element will be disabled. */
  disabled: PropTypes__default.bool,
  /** The label content. */
  label: PropTypes__default.string,
  /** Align the numbers in the textField.
   * If you pass the `inputProps` from TextFieldAPI text align won't work.
   * then, you have handle it by className with your own class inside inputProps.
   */
  textAlign: PropTypes__default.oneOf(["right", "left", "center"]),
  /** Tab index for the element */
  tabIndex: PropTypes__default.number,
  /** If true, the input element will be focused during the first mount. */
  autoFocus: PropTypes__default.bool,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: PropTypes__default.string,
  /** value to be enter and display in input */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  /** Callback fired when the value is changed. */
  onChange: PropTypes__default.func,
  /** Callback fired when focused on element. */
  onFocus: PropTypes__default.func,
  /** Callback fired on blur. */
  onBlur: PropTypes__default.func,
  /** Callback fired on key press. */
  onKeyPress: PropTypes__default.func,
  /** Callback fired on key press. */
  onKeyUp: PropTypes__default.func,
  /** Callback fired on key press. */
  onKeyDown: PropTypes__default.func,
  /** Defines the currency symbol string. */
  currencySymbol: PropTypes__default.string,
  /** Defines what decimal separator character is used. */
  decimalCharacter: PropTypes__default.string,
  /** Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed. */
  decimalCharacterAlternative: PropTypes__default.string,
  /** Defines the default number of decimal places to show on the formatted value. */
  decimalPlaces: PropTypes__default.number,
  /** Defines how many decimal places should be visible when the element is unfocused null. */
  decimalPlacesShownOnBlur: PropTypes__default.number,
  /** Defines how many decimal places should be visible when the element has the focus. */
  decimalPlacesShownOnFocus: PropTypes__default.number,
  /** Defines the thousand grouping separator character */
  digitGroupSeparator: PropTypes__default.string,
  /** Controls the leading zero behavior   */
  leadingZero: PropTypes__default.oneOf(["allow", "deny", "keep"]),
  /** maximum value that can be enter */
  maximumValue: PropTypes__default.string,
  /** minimum value that can be enter */
  minimumValue: PropTypes__default.string,
  /** placement of the negitive and possitive sign symbols */
  negativePositiveSignPlacement: PropTypes__default.oneOf(["l", "r", "p", "s"]),
  /** Defines the negative sign symbol to use   */
  negativeSignCharacter: PropTypes__default.string,
  /** how the value should be formatted,before storing it */
  outputFormat: PropTypes__default.oneOf(["string", "number"]),
  /** Defines if the element value should be selected on focus. */
  selectOnFocus: PropTypes__default.bool,
  /** Defines the positive sign symbol to use. */
  positiveSignCharacter: PropTypes__default.string,
  /** Defines if the element should be set as read only on initialization. */
  readOnly: PropTypes__default.bool,
  /** predefined objects are available in <a href="https://www.nodenpm.com/autonumeric/4.5.1/detail.html#predefined-options">AutoNumeric</a>*/
  preDefined: PropTypes__default.object
};

CurrencyTextField.defaultProps = {
  type: "text",
  variant: "standard",
  currencySymbol: "$",
  outputFormat: "number",
  textAlign: "right",
  maximumValue: "10000000000000",
  minimumValue: "-10000000000000"
};
var CurrencyTextField$1 = withStyles(styles)(CurrencyTextField);

var predefinedOptions = AutoNumeric.getPredefinedOptions();

exports.CurrencyTextField = CurrencyTextField$1;
exports.predefinedOptions = predefinedOptions;
