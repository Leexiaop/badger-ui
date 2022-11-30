import React, { useState, useRef, useEffect } from 'react';

let requestId: any = null;

export default ({
	list = [],
	speed = 2,
	color = '#1a88e7',
	textStyle = {},
	isStop = true,
	onMouseLeave,
	onMouseOver,
	onClick,
	children,
}: {
	list?: Array<String>;
	speed?: number;
	color?: string;
	textStyle: Object;
	isStop?: Boolean;
	onMouseLeave: Function;
	onMouseOver: Function;
	onClick: Function;
	children?: any;
}) => {
	const [key, setKey] = useState<number>(0);
	const containerRef = useRef<any>(null);
	const textRef = useRef<any>(null);

	useEffect(() => {
		let container = containerRef?.current?.clientWidth;
		textRef.current.style.left = container + 'px';
		onAnimation();
		return () => {
			cancelAnimationFrame(requestId);
		};
	}, []);

	const onAnimation: any = (): void => {
		let textWidth = textRef.current?.clientWidth; // 文字宽度
		let textLeft = parseInt(textRef.current?.style?.left, 10); // 相对父元素偏移距离
		if (textLeft > -textWidth) {
			if (textRef?.current?.style) {
				textRef.current.style.left = textLeft - speed + 'px';
			}
		} else {
			let nextIndex = key !== list.length - 1 ? key + 1 : 0;
			setKey(nextIndex);
			if (textRef?.current?.style) {
				textRef.current.style.left =
					containerRef?.current?.clientWidth + 'px';
			}
			textWidth = textRef?.current?.clientWidth;
		}
		requestId = requestAnimationFrame(onAnimation);
	};

	const onTextMouseOver: any = (index: number): void => {
		if (isStop) {
			cancelAnimationFrame(requestId);
		}
		onMouseOver && onMouseOver(index);
	};
	const onTextMouseLeave: any = (index: number): void => {
		if (isStop) {
			onAnimation();
		}
		onMouseLeave && onMouseLeave(index);
	};

	const onTextClick = (index: number) => {
		onClick && onClick(index);
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
						color: color,
						...textStyle,
					}}
					onClick={() => onTextClick(key)}
					onMouseOver={() => onTextMouseOver(key)}
					onMouseLeave={() => onTextMouseLeave(key)}
				>
					{list.length ? list[key] : children}
				</span>
			</div>
		</>
	);
};
