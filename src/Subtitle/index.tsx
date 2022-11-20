import React, { useState, useRef, useEffect } from 'react';

let requestId: any = null;

export default ({
	list,
	isAnimation = false,
	direction = 'inline',
	speed = 2,
	mode = 'normal',
	color = '#1a88e7',
	textStyle = {},
}: {
	list: Array<String>;
	isAnimation?: Boolean;
	direction?: String;
	speed?: any;
	mode?: String;
	color?: String;
	textStyle: Object;
}) => {
	const [key, setKey] = useState<number>(0);
	const containerRef = useRef<any>(null);
	const textRef = useRef<any>(null);

	useEffect(() => {
		let container = containerRef?.current?.clientWidth;
		textRef.current.style.left = container + 'px';
		const timer = setInterval(() => {
			if (list && list.length) {
				showSubTitle();
			} else {
				clearInterval(timer);
			}
		}, 1000);
		return () => {
			clearInterval(timer);
			cancelAnimationFrame(requestId);
		};
	}, []);

	const showSubTitle = () => {
		let textWidth = textRef.current?.clientWidth; // 文字宽度
		let textLeft = parseInt(textRef.current?.style?.left, 10); // 相对父元素偏移距离
		if (textLeft > -textWidth) {
			if (textRef?.current?.style) {
				textRef.current.style.left = textLeft - speed + 'px';
			}
			requestId = requestAnimationFrame(showSubTitle);
		} else {
			let nextIndex = key !== list.length - 1 ? key + 1 : 0;
			setKey(nextIndex);
			if (textRef?.current?.style) {
				textRef.current.style.left =
					containerRef?.current?.clientWidth + 'px';
			}
			textWidth = textRef?.current?.clientWidth;
			cancelAnimationFrame(requestId);
		}
	};

	return (
		<>
			<div
				ref={containerRef}
				style={{
					position: 'relative',
					width: '100%',
					margin: '0 auto',
					padding: '0 10px',
					overflow: 'hidden',
					fontSize: '16px',
				}}
			>
				<span
					ref={textRef}
					style={{
						position: 'relative',
						display: 'inline-block',
						whiteSpace: 'nowrap',
						cursor: 'pointer',
						...textStyle,
					}}
					// onMouseOver={this.onMouseOver}
					// onMouseLeave={this.onMouseLeave}
				>
					{list[key]}
				</span>
			</div>
		</>
	);
};
