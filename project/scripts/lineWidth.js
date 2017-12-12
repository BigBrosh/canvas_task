// line width through range
lineWidthI.value = lineWidthR.value;

lineWidthR.oninput = () => {
  lineWidthI.value = lineWidthR.value;
}


// line width through input
lineWidthI.oninput = () => {
  lineWidthR.value = lineWidthI.value;
}