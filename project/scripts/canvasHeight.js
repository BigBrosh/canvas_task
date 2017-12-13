canvasHeight.value = wrap.height;

heightBtn.onclick = () => {
  wrap.height = canvasHeight.value;
  element.putImageData(currentImgSet[setCounter], 0, 0);
}