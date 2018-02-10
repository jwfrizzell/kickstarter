"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joefrizzell/Documents/solidity/kickstart/components/ContributeForm.js";


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: "",
			loading: false,
			errorMessage: ""
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();
								_this.setState({ loading: true, errorMessage: "" });
								campaign = (0, _campaign2.default)(_this.props.address);
								_context.prev = 3;
								_context.next = 6;
								return _web2.default.eth.getAccounts();

							case 6:
								accounts = _context.sent;
								_context.next = 9;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, "ether")
								});

							case 9:
								_context.next = 14;
								break;

							case 11:
								_context.prev = 11;
								_context.t0 = _context["catch"](3);

								_this.setState({ errorMessage: _context.t0.message });

							case 14:
								_this.setState({ loading: false });
								_routes.Router.replaceRoute("/campaigns/" + _this.props.address);

							case 16:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, _this2, [[3, 11]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: "render",
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement("label", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, "Amount to Contribute"), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value });
				},
				label: "ether",
				labelPosition: "right",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}), _react2.default.createElement(_semanticUiReact.Message, {
				error: true,
				compact: true,
				header: "Something went wrong",
				content: this.state.errorMessage,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}), _react2.default.createElement(_semanticUiReact.Button, {
				primary: true,
				loading: this.state.loading,
				style: { marginTop: "10px" },
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, "Contribute")));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJtZXNzYWdlIiwicmVwbGFjZVJvdXRlIiwidGFyZ2V0IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7Ozs7O0ksQUFFRjs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ3BCO1VBQVEsQUFDQSxBQUNQO1lBRk8sQUFFRSxBQUNUO2lCQUhPLEEsQUFHTztBQUhQLEFBQ1AsVyxBQUtEO3dGQUFXLGlCQUFBLEFBQU0sT0FBTjtrQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBQ047Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBQ3ZDO0FBSEksbUJBR08sd0JBQVMsTUFBQSxBQUFLLE1BSHJCLEFBR08sQUFBb0I7d0JBSDNCO3dCQUFBO2VBS2MsY0FBQSxBQUFLLElBTG5CLEFBS2MsQUFBUzs7WUFBMUI7QUFMRyw0QkFBQTt3QkFBQTt3QkFPSCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7ZUFDN0IsU0FEa0MsQUFDbEMsQUFBUyxBQUNmO2dCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FUM0IsQUFPSCxBQUFtQyxBQUVqQyxBQUFtQztBQUZGLEFBQ3hDLFNBREs7O1lBUEc7d0JBQUE7QUFBQTs7WUFBQTt3QkFBQTt3Q0FZVDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBWnJCLEFBWVQsQUFBYyxBQUFvQjs7WUFFbkM7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFoQixBQUFjLEFBQVcsQUFDekI7dUJBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BZjdCLEFBZVYsQUFBNkM7O1lBZm5DO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFrQkY7Z0JBQ1I7OzBCQUNDLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EseUNBQUEsQUFBQztXQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2xCO2NBQVUseUJBQUE7WUFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ4RCxBQUdDO1dBSEQsQUFHTyxBQUNOO21CQUpELEFBSWU7O2VBSmY7aUJBRkQsQUFFQyxBQU1BO0FBTkE7QUFDQyx1QkFLRCxBQUFDO1dBQUQsQUFFQzthQUZELEFBR0M7WUFIRCxBQUdRLEFBQ1A7YUFBUyxLQUFBLEFBQUssTUFKZixBQUlxQjs7ZUFKckI7aUJBUkQsQUFRQyxBQU1BO0FBTkE7QUFDQyx1QkFLRCxBQUFDO2FBQUQsQUFFQzthQUFTLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ3BCO1dBQU8sRUFBRSxXQUhWLEFBR1EsQUFBYTs7ZUFIckI7aUJBQUE7QUFBQTtBQUNDLE1BakJKLEFBQ0MsQUFDQyxBQWNDLEFBVUg7Ozs7O0FBcEQwQyxBOztrQkFBdkIsQSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9lZnJpenplbGwvRG9jdW1lbnRzL3NvbGlkaXR5L2tpY2tzdGFydCJ9