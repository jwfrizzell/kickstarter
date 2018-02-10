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

var _routes = require("../routes");

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joefrizzell/Documents/solidity/kickstart/components/RequestRow.js";


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loadingApprove: false,
			finalizeApprove: false,
			errorMessage: ""
		}, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context.sent;

							_this.setState({ loadingApprove: true, errorMessage: "" });

							_context.prev = 5;
							_context.next = 8;
							return campaign.methods.approveRequest(_this.props.id).send({ from: accounts[0] });

						case 8:
							_routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
							_context.next = 15;
							break;

						case 11:
							_context.prev = 11;
							_context.t0 = _context["catch"](5);

							_this.setState({ errorMessage: _context.t0.message });
							console.log(_context.t0.message);

						case 15:
							_this.setState({ loadingApprove: false });

						case 16:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, _this2, [[5, 11]]);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							campaign = (0, _campaign2.default)(_this.props.address);
							_context2.next = 3;
							return _web2.default.eth.getAccounts();

						case 3:
							accounts = _context2.sent;

							_this.setState({ finalizeApprove: true, errorMessage: "" });

							_context2.prev = 5;
							_context2.next = 8;
							return campaign.methods.finalizeRequest(_this.props.id).send({ from: accounts[0] });

						case 8:
							_routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
							_context2.next = 15;
							break;

						case 11:
							_context2.prev = 11;
							_context2.t0 = _context2["catch"](5);

							_this.setState({ errorMessage: _context2.t0.message });
							console.log(_context2.t0.message);

						case 15:
							_this.setState({ finalizeApprove: false });

						case 16:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, _this2, [[5, 11]]);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: "render",
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;

			return _react2.default.createElement(Row, {
				disabled: request.complete,
				positive: readyToFinalize && !request.complete,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, id + 1), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, request.approvalCount, " / ", approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
				loading: this.state.loadingApprove,
				color: "green",
				basic: true,
				onClick: this.onApprove,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, "Approve")), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, {
				loading: this.state.finalizeApprove,
				color: "teal",
				basic: true,
				onClick: this.onFinalize,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, "Finalize")));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxpbmsiLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSb3V0ZXIiLCJSZXF1ZXN0Um93Iiwic3RhdGUiLCJsb2FkaW5nQXBwcm92ZSIsImZpbmFsaXplQXBwcm92ZSIsImVycm9yTWVzc2FnZSIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldFN0YXRlIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFROztBQUN4QixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWMsQUFDckIsQUFBUyxBQUFjOzs7Ozs7Ozs7SSxBQUVGOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFDcEI7bUJBQVEsQUFDUyxBQUNoQjtvQkFGTyxBQUVVLEFBQ2pCO2lCQUhPLEEsQUFHTztBQUhQLEFBQ1AsV0FLRCxBLHFGQUFZLG1CQUFBO2lCQUFBO2lFQUFBO2NBQUE7c0NBQUE7V0FDTDtBQURLLGtCQUNNLHdCQUFTLE1BQUEsQUFBSyxNQURwQixBQUNNLEFBQW9CO3VCQUQxQjtjQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O1dBQTFCO0FBRkssMkJBSVg7O2FBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBQUYsQUFBa0IsTUFBTSxjQUozQixBQUlYLEFBQWMsQUFBc0M7O3VCQUp6Qzt1QkFBQTtjQU9KLFNBQUEsQUFBUyxRQUFULEFBQ0osZUFBZSxNQUFBLEFBQUssTUFEaEIsQUFDc0IsSUFEdEIsQUFFSixLQUFLLEVBQUUsTUFBTSxTQVRMLEFBT0osQUFFQyxBQUFRLEFBQVM7O1dBQ3hCO3NCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVZoQzt1QkFBQTtBQUFBOztXQUFBO3VCQUFBO3VDQVlWOzthQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBOUIsQUFBYyxBQUFvQixBQUNsQztlQUFBLEFBQVEsSUFBSSxZQWJGLEFBYVYsQUFBZ0I7O1dBRWpCO2FBQUEsQUFBSyxTQUFTLEVBQUUsZ0JBZkwsQUFlWCxBQUFjLEFBQWtCOztXQWZyQjtXQUFBO3VCQUFBOztBQUFBOzRCQUFBO0EsYUFrQlosQSxzRkFBYSxvQkFBQTtpQkFBQTttRUFBQTtjQUFBO3dDQUFBO1dBQ047QUFETSxrQkFDSyx3QkFBUyxNQUFBLEFBQUssTUFEbkIsQUFDSyxBQUFvQjt3QkFEekI7Y0FFVyxjQUFBLEFBQUssSUFGaEIsQUFFVyxBQUFTOztXQUExQjtBQUZNLDRCQUlaOzthQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFGLEFBQW1CLE1BQU0sY0FKM0IsQUFJWixBQUFjLEFBQXVDOzt3QkFKekM7d0JBQUE7Y0FPTCxTQUFBLEFBQVMsUUFBVCxBQUNKLGdCQUFnQixNQUFBLEFBQUssTUFEakIsQUFDdUIsSUFEdkIsQUFFSixLQUFLLEVBQUUsTUFBTSxTQVRKLEFBT0wsQUFFQyxBQUFRLEFBQVM7O1dBQ3hCO3NCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVYvQjt3QkFBQTtBQUFBOztXQUFBO3dCQUFBO3lDQVlYOzthQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsYUFBOUIsQUFBYyxBQUFvQixBQUNsQztlQUFBLEFBQVEsSUFBSSxhQWJELEFBYVgsQUFBZ0I7O1dBRWpCO2FBQUEsQUFBSyxTQUFTLEVBQUUsaUJBZkosQUFlWixBQUFjLEFBQW1COztXQWZyQjtXQUFBO3dCQUFBOztBQUFBOzZCQUFBO0E7Ozs7OzJCQWtCSjtPQUFBLEFBQ0EsTUFEQSxBQUNjLHVCQURkLEFBQ0E7T0FEQSxBQUNLLE9BREwsQUFDYyx1QkFEZCxBQUNLO2dCQUMyQixLQUZoQyxBQUVxQztPQUZyQyxBQUVBLFlBRkEsQUFFQTtPQUZBLEFBRUksaUJBRkosQUFFSTtPQUZKLEFBRWEsd0JBRmIsQUFFYSxBQUNyQjs7T0FBTSxrQkFBa0IsUUFBQSxBQUFRLGdCQUFnQixpQkFBaEQsQUFBaUUsQUFFakU7OzBCQUNFLGNBQUQ7Y0FDVyxRQURYLEFBQ21CLEFBQ2xCO2NBQVUsbUJBQW1CLENBQUMsUUFGL0IsQUFFdUM7O2VBRnZDO2lCQUFBLEFBSUM7QUFKRDtBQUNDLElBREQsa0JBSUUsY0FBRDs7ZUFBQTtpQkFBQSxBQUFPO0FBQVA7QUFBQSxXQUpELEFBSUMsQUFBWSxBQUNaLG9CQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FMRCxBQUtDLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLG9CQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FObkMsQUFNQyxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FQRCxBQU9DLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQ0U7QUFERjtBQUFBLGNBQUEsQUFDVSxlQUFrQixPQVQ3QixBQVFDLEFBR0EsaUNBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxjQUNFLEFBQVEsV0FBUixBQUFtQix1QkFDbkIsQUFBQzthQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ3BCO1dBRkQsQUFFTyxBQUNOO1dBSEQsQUFJQzthQUFTLEtBSlYsQUFJZTs7ZUFKZjtpQkFBQTtBQUFBO0FBQ0MsSUFERCxFQWJILEFBV0MsQUFFRSxBQVVGLDZCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsY0FDRSxBQUFRLFdBQVIsQUFBbUIsdUJBQ25CLEFBQUM7YUFDUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNwQjtXQUZELEFBRU8sQUFDTjtXQUhELEFBSUM7YUFBUyxLQUpWLEFBSWU7O2VBSmY7aUJBQUE7QUFBQTtBQUNDLElBREQsRUExQkosQUFDQyxBQXVCQyxBQUVFLEFBWUo7Ozs7O0FBdEZzQyxBOztrQkFBbkIsQSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qb2Vmcml6emVsbC9Eb2N1bWVudHMvc29saWRpdHkva2lja3N0YXJ0In0=