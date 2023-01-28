import React, { useState, useRef, useEffect } from 'react';
import './index.less';

export default () => {
	useEffect(() => {}, []);

	return (
		<>
			{/* 图形校验区域 */}
			<div className="check">
				{/* 被校验区域 */}
				<div className="check-child"></div>
			</div>
			{/* 拖动条 */}
			<div className="drag">
				{/* 操作说明 */}
				<div className="drag-tips">
					<span>按住左边按钮向右拖动完成上方图像验证</span>
				</div>
				{/* 可拖动的盒子 */}
				<div className="drag-child"></div>
			</div>
		</>
	);
};
