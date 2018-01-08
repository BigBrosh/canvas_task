import {LineColor} from './UIController';

var colorInput = document.getElementById('colorChange');

colorInput.oninput = () => {
  LineColor._property = colorInput.value;
}