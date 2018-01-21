import {StateHandler} from './StateHandler';
import {UIController} from './UIController';
import {Canvas} from './Canvas';

Canvas._wrap.onmousedown = (e) => {
	var xBegin = e.offsetX,
		yBegin = e.offsetY;
  
	Canvas._element.beginPath();
	Canvas._element.moveTo(xBegin, yBegin);

	Canvas._wrap.onmouseup = (e) => {
	var xEnd = e.offsetX,
		yEnd = e.offsetY;
	
	Canvas._element.lineTo(xEnd, yEnd);
	Canvas._element.closePath();
	Canvas._element.fill();
	Canvas._element.strokeStyle = UIController._lineColor;
	Canvas._element.lineWidth = UIController._lineWidth;
	Canvas._element.stroke();

	while(StateHandler._setCounter != StateHandler._currentImgSet.length - 1){
		StateHandler._currentImgSet.pop();
	}

	StateHandler.increaseSetCounter();
    StateHandler._currentImgSet.push(Canvas._element.getImageData(0, 0, Canvas._wrap.width, Canvas._wrap.height));
  }
}