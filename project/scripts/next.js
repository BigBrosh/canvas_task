nextBtn.onclick = () => {
	if(setCounter != currentImgSet.length - 1) {
		setCounter += 1;
		element.putImageData(currentImgSet[setCounter], 0, 0);
	}
}