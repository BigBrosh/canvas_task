prevBtn.onclick = () => {
	if (setCounter <= 0) {
		element.clearRect(0, 0, wrap.width, wrap.height);
		setCounter = -1;
	}

	else {
		setCounter -= 1;
		element.putImageData(currentImgSet[setCounter], 0, 0);
	}
}