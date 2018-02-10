import {StateHandler} from './StateHandler';
import {UIController} from './UIController';

export var Drawing = new class {
	beginDraw(e, element, wrap) {
		var xBegin = e.offsetX,
			yBegin = e.offsetY;
	  
		element.beginPath();
		element.moveTo(xBegin, yBegin);	
	}

	endDraw(e, element, wrap) {
		var xEnd = e.offsetX,
			yEnd = e.offsetY;
	
		element.lineTo(xEnd, yEnd);
		element.closePath();
		element.fill();
		element.strokeStyle = UIController._lineColor;
		element.lineWidth = UIController._lineWidth;
		element.stroke();

		while(StateHandler._setCounter != StateHandler._currentImgSet.length - 1){
			StateHandler._currentImgSet.pop();
		}

		StateHandler.increaseSetCounter();
		StateHandler._currentImgSet.push(element.getImageData(0, 0, wrap.width, wrap.height));
		}
	}
}