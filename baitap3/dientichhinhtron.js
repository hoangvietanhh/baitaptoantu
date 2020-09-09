let inputbankinh;

inputbankinh = prompt('Nhập bán kính');

let bankinh = parseFloat(inputbankinh);

let dientich = Math.PI * bankinh * bankinh;
document.write('Diện tích= ' + dientich .toFixed(3));