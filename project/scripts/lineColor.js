var colorInput = document.getElementById('colorChange'),
	clColor = 'black';

colorInput.oninput = () => {
  clColor = colorInput.value;
}