canvasWidth.value = wrap.width;

widthBtn.onclick = () => {
  wrap.width = canvasWidth.value;
  element.putImageData(currentImgSet[setCounter], 0, 0);
}