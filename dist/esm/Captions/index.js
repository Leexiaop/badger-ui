function _typeof(obj) {
	'@babel/helpers - typeof';
	return (
		(_typeof =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (obj) {
						return typeof obj;
				  }
				: function (obj) {
						return obj &&
							'function' == typeof Symbol &&
							obj.constructor === Symbol &&
							obj !== Symbol.prototype
							? 'symbol'
							: typeof obj;
				  }),
		_typeof(obj)
	);
}
function ownKeys(object, enumerableOnly) {
	var keys = Object.keys(object);
	if (Object.getOwnPropertySymbols) {
		var symbols = Object.getOwnPropertySymbols(object);
		enumerableOnly &&
			(symbols = symbols.filter(function (sym) {
				return Object.getOwnPropertyDescriptor(object, sym).enumerable;
			})),
			keys.push.apply(keys, symbols);
	}
	return keys;
}
function _objectSpread(target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = null != arguments[i] ? arguments[i] : {};
		i % 2
			? ownKeys(Object(source), !0).forEach(function (key) {
					_defineProperty(target, key, source[key]);
			  })
			: Object.getOwnPropertyDescriptors
			? Object.defineProperties(
					target,
					Object.getOwnPropertyDescriptors(source)
			  )
			: ownKeys(Object(source)).forEach(function (key) {
					Object.defineProperty(
						target,
						key,
						Object.getOwnPropertyDescriptor(source, key)
					);
			  });
	}
	return target;
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true,
		});
	} else {
		obj[key] = value;
	}
	return obj;
}
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, 'string');
	return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
	if (_typeof(input) !== 'object' || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== undefined) {
		var res = prim.call(input, hint || 'default');
		if (_typeof(res) !== 'object') return res;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (hint === 'string' ? String : Number)(input);
}
function _slicedToArray(arr, i) {
	return (
		_arrayWithHoles(arr) ||
		_iterableToArrayLimit(arr, i) ||
		_unsupportedIterableToArray(arr, i) ||
		_nonIterableRest()
	);
}
function _nonIterableRest() {
	throw new TypeError(
		'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
	);
}
function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === 'Object' && o.constructor) n = o.constructor.name;
	if (n === 'Map' || n === 'Set') return Array.from(o);
	if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
		return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	return arr2;
}
function _iterableToArrayLimit(arr, i) {
	var _i =
		null == arr
			? null
			: ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
			  arr['@@iterator'];
	if (null != _i) {
		var _s,
			_e,
			_x,
			_r,
			_arr = [],
			_n = !0,
			_d = !1;
		try {
			if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
				if (Object(_i) !== _i) return;
				_n = !1;
			} else
				for (
					;
					!(_n = (_s = _x.call(_i)).done) &&
					(_arr.push(_s.value), _arr.length !== i);
					_n = !0
				);
		} catch (err) {
			(_d = !0), (_e = err);
		} finally {
			try {
				if (
					!_n &&
					null != _i.return &&
					((_r = _i.return()), Object(_r) !== _r)
				)
					return;
			} finally {
				if (_d) throw _e;
			}
		}
		return _arr;
	}
}
function _arrayWithHoles(arr) {
	if (Array.isArray(arr)) return arr;
}
import React, { useState, useRef, useEffect } from 'react';
var requestId = null;
export default (function (_ref) {
	var _ref$list = _ref.list,
		list = _ref$list === void 0 ? [] : _ref$list,
		_ref$speed = _ref.speed,
		speed = _ref$speed === void 0 ? 2 : _ref$speed,
		_ref$color = _ref.color,
		color = _ref$color === void 0 ? '#1a88e7' : _ref$color,
		_ref$textStyle = _ref.textStyle,
		textStyle = _ref$textStyle === void 0 ? {} : _ref$textStyle,
		_ref$isStop = _ref.isStop,
		isStop = _ref$isStop === void 0 ? true : _ref$isStop,
		onMouseLeave = _ref.onMouseLeave,
		onMouseOver = _ref.onMouseOver,
		onClick = _ref.onClick,
		children = _ref.children;
	var _useState = useState(0),
		_useState2 = _slicedToArray(_useState, 2),
		key = _useState2[0],
		setKey = _useState2[1];
	var containerRef = useRef(null);
	var textRef = useRef(null);
	useEffect(function () {
		var _containerRef$current;
		var container =
			containerRef === null || containerRef === void 0
				? void 0
				: (_containerRef$current = containerRef.current) === null ||
				  _containerRef$current === void 0
				? void 0
				: _containerRef$current.clientWidth;
		textRef.current.style.left = container + 'px';
		onAnimation();
		return function () {
			cancelAnimationFrame(requestId);
		};
	}, []);
	var onAnimation = function onAnimation() {
		var _textRef$current, _textRef$current2, _textRef$current2$sty;
		var textWidth =
			(_textRef$current = textRef.current) === null ||
			_textRef$current === void 0
				? void 0
				: _textRef$current.clientWidth; // 文字宽度
		var textLeft = parseInt(
			(_textRef$current2 = textRef.current) === null ||
				_textRef$current2 === void 0
				? void 0
				: (_textRef$current2$sty = _textRef$current2.style) === null ||
				  _textRef$current2$sty === void 0
				? void 0
				: _textRef$current2$sty.left,
			10
		); // 相对父元素偏移距离
		if (textLeft > -textWidth) {
			var _textRef$current3;
			if (
				textRef !== null &&
				textRef !== void 0 &&
				(_textRef$current3 = textRef.current) !== null &&
				_textRef$current3 !== void 0 &&
				_textRef$current3.style
			) {
				textRef.current.style.left = textLeft - speed + 'px';
			}
		} else {
			var _textRef$current4, _textRef$current5;
			var nextIndex = key !== list.length - 1 ? key + 1 : 0;
			setKey(nextIndex);
			if (
				textRef !== null &&
				textRef !== void 0 &&
				(_textRef$current4 = textRef.current) !== null &&
				_textRef$current4 !== void 0 &&
				_textRef$current4.style
			) {
				var _containerRef$current2;
				textRef.current.style.left =
					(containerRef === null || containerRef === void 0
						? void 0
						: (_containerRef$current2 = containerRef.current) ===
								null || _containerRef$current2 === void 0
						? void 0
						: _containerRef$current2.clientWidth) + 'px';
			}
			textWidth =
				textRef === null || textRef === void 0
					? void 0
					: (_textRef$current5 = textRef.current) === null ||
					  _textRef$current5 === void 0
					? void 0
					: _textRef$current5.clientWidth;
		}
		requestId = requestAnimationFrame(onAnimation);
	};
	var onTextMouseOver = function onTextMouseOver(index) {
		if (isStop) {
			cancelAnimationFrame(requestId);
		}
		onMouseOver && onMouseOver(index);
	};
	var onTextMouseLeave = function onTextMouseLeave(index) {
		if (isStop) {
			onAnimation();
		}
		onMouseLeave && onMouseLeave(index);
	};
	var onTextClick = function onTextClick(index) {
		onClick && onClick(index);
	};
	return /*#__PURE__*/ React.createElement(
		React.Fragment,
		null,
		/*#__PURE__*/ React.createElement(
			'div',
			{
				ref: containerRef,
				style: {
					position: 'relative',
					width: '100%',
					margin: '0 auto',
					padding: '0 10px',
					overflow: 'hidden',
					fontSize: '16px',
				},
			},
			/*#__PURE__*/ React.createElement(
				'span',
				{
					ref: textRef,
					style: _objectSpread(
						{
							position: 'relative',
							display: 'inline-block',
							whiteSpace: 'nowrap',
							cursor: 'pointer',
							color: color,
						},
						textStyle
					),
					onClick: function onClick() {
						return onTextClick(key);
					},
					onMouseOver: function onMouseOver() {
						return onTextMouseOver(key);
					},
					onMouseLeave: function onMouseLeave() {
						return onTextMouseLeave(key);
					},
				},
				list.length ? list[key] : children
			)
		)
	);
});
