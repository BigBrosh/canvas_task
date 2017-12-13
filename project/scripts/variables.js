// canvas
window.wrap = document.getElementById('canvas_wrap');
window.element = wrap.getContext('2d');

// line
window.lineWidthR = document.getElementById('lineWidthR');
window.lineWidthI = document.getElementById('lineWidthI');

// canvas size
window.canvasWidth = document.getElementById('canvasWidth');
window.canvasHeight = document.getElementById('canvasHeight');
window.widthBtn = document.getElementById('applyWidth');
window.heightBtn = document.getElementById('applyHeight');

// clear button
window.clearBtn = document.getElementById('clear');

// color
window.colorInput = document.getElementById('colorChange');
window.clColor = 'black';

// undo/redo
window.prevBtn = document.getElementById('prevBtn');
window.nextBtn = document.getElementById('nextBtn');
window.setCounter = -1;
window.currentImgSet = [];