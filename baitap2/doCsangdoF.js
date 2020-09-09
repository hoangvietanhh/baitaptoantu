let inputdoC;

inputdoC = prompt('Nhập độ C: ');

let doC = parseFloat(inputdoC);

let dof = (doC/5) * 9 +32;
document.write('Độ F là: ' + dof .toFixed(2))