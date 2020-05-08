"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.predefinedOptions = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _autonumeric = _interopRequireDefault(require("autonumeric"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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


var CurrencyTextField =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CurrencyTextField, _React$Component);

  function CurrencyTextField(props) {
    var _this;

    _classCallCheck(this, CurrencyTextField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CurrencyTextField).call(this, props));
    _this.getValue = _this.getValue.bind(_assertThisInitialized(_this));
    _this.callEventHandler = _this.callEventHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CurrencyTextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          currencySymbol = _this$props.currencySymbol,
          others = _objectWithoutProperties(_this$props, ["currencySymbol"]);

      this.autonumeric = new _autonumeric["default"](this.input, this.props.value, _objectSpread({}, this.props.preDefined, {}, others, {
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
      var isOptionsChanged = JSON.stringify(_objectSpread({}, this.props, {
        value: undefined
      })) !== JSON.stringify(_objectSpread({}, newProps, {
        value: undefined
      }));
      var isValueChanged = this.props.value !== newProps.value && this.getValue() !== newProps.value;

      if (isValueChanged) {
        this.autonumeric.set(newProps.value);
      }

      if (isOptionsChanged) {
        this.autonumeric.update(_objectSpread({}, newProps.preDefined, {}, newProps, {
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

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          currencySymbol = _this$props2.currencySymbol,
          inputProps = _this$props2.inputProps,
          InputProps = _this$props2.InputProps,
          others = _objectWithoutProperties(_this$props2, ["classes", "currencySymbol", "inputProps", "InputProps"]);

      var otherProps = {};
      ["id", "value", "label", "className", "autoFocus", "variant", "style", "error", "disabled", "type", "name", "defaultValue", "tabIndex", "fullWidth", "rows", "rowsMax", "select", "required", "helperText", "unselectable", "margin", "SelectProps", "multiline", "size", "FormHelperTextProps", "placeholder"].forEach(function (prop) {
        return otherProps[prop] = _this2.props[prop];
      });
      return _react["default"].createElement(_core.TextField, _extends({
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
        InputProps: _objectSpread({
          startAdornment: _react["default"].createElement(_core.InputAdornment, {
            position: "start"
          }, currencySymbol)
        }, InputProps),
        inputProps: _objectSpread({
          className: classes.textField
        }, inputProps)
      }, otherProps));
    }
  }]);

  return CurrencyTextField;
}(_react["default"].Component);

CurrencyTextField.propTypes = {
  type: _propTypes["default"].oneOf(["text", "tel", "hidden"]),

  /** The variant to use. */
  variant: _propTypes["default"].string,
  id: _propTypes["default"].string,

  /** The CSS class name of the wrapper element. */
  className: _propTypes["default"].string,

  /** Inline styling for element */
  style: _propTypes["default"].object,

  /** If true, the input element will be disabled. */
  disabled: _propTypes["default"].bool,

  /** The label content. */
  label: _propTypes["default"].string,

  /** Align the numbers in the textField.
   * If you pass the `inputProps` from TextFieldAPI text align won't work.
   * then, you have handle it by className with your own class inside inputProps.
   */
  textAlign: _propTypes["default"].oneOf(["right", "left", "center"]),

  /** Tab index for the element */
  tabIndex: _propTypes["default"].number,

  /** If true, the input element will be focused during the first mount. */
  autoFocus: _propTypes["default"].bool,

  /** The short hint displayed in the input before the user enters a value. */
  placeholder: _propTypes["default"].string,

  /** value to be enter and display in input */
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /** Callback fired when the value is changed. */
  onChange: _propTypes["default"].func,

  /** Callback fired when focused on element. */
  onFocus: _propTypes["default"].func,

  /** Callback fired on blur. */
  onBlur: _propTypes["default"].func,

  /** Callback fired on key press. */
  onKeyPress: _propTypes["default"].func,

  /** Callback fired on key press. */
  onKeyUp: _propTypes["default"].func,

  /** Callback fired on key press. */
  onKeyDown: _propTypes["default"].func,

  /** Defines the currency symbol string. */
  currencySymbol: _propTypes["default"].string,

  /** Defines what decimal separator character is used. */
  decimalCharacter: _propTypes["default"].string,

  /** Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed. */
  decimalCharacterAlternative: _propTypes["default"].string,

  /** Defines the default number of decimal places to show on the formatted value. */
  decimalPlaces: _propTypes["default"].number,

  /** Defines how many decimal places should be visible when the element is unfocused null. */
  decimalPlacesShownOnBlur: _propTypes["default"].number,

  /** Defines how many decimal places should be visible when the element has the focus. */
  decimalPlacesShownOnFocus: _propTypes["default"].number,

  /** Defines the thousand grouping separator character */
  digitGroupSeparator: _propTypes["default"].string,

  /** Controls the leading zero behavior   */
  leadingZero: _propTypes["default"].oneOf(["allow", "deny", "keep"]),

  /** maximum value that can be enter */
  maximumValue: _propTypes["default"].string,

  /** minimum value that can be enter */
  minimumValue: _propTypes["default"].string,

  /** placement of the negitive and possitive sign symbols */
  negativePositiveSignPlacement: _propTypes["default"].oneOf(["l", "r", "p", "s"]),

  /** Defines the negative sign symbol to use   */
  negativeSignCharacter: _propTypes["default"].string,

  /** how the value should be formatted,before storing it */
  outputFormat: _propTypes["default"].oneOf(["string", "number"]),

  /** Defines if the element value should be selected on focus. */
  selectOnFocus: _propTypes["default"].bool,

  /** Defines the positive sign symbol to use. */
  positiveSignCharacter: _propTypes["default"].string,

  /** Defines if the element should be set as read only on initialization. */
  readOnly: _propTypes["default"].bool,

  /** predefined objects are available in <a href="https://www.nodenpm.com/autonumeric/4.5.1/detail.html#predefined-options">AutoNumeric</a>*/
  preDefined: _propTypes["default"].object
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

var _default = (0, _styles.withStyles)(styles)(CurrencyTextField);

exports["default"] = _default;

var predefinedOptions = _autonumeric["default"].getPredefinedOptions();

exports.predefinedOptions = predefinedOptions;