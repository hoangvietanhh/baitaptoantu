let inputdiemvatly;
let inputdiemhoahoc;
let inputdiemsinhhoc;

inputdiemvatly = prompt('Nhập điểm Vật lý');
inputdiemhoahoc = prompt('Nhập điểm Hóa học');
inputdiemsinhhoc = prompt('Nhập điểm Sinh học');

let diemvatly = parseFloat(inputdiemvatly);
let diemhoahoc = parseFloat(inputdiemhoahoc);
let diemsinhhoc = parseFloat(inputdiemsinhhoc);

let diemtong = (diemsinhhoc+diemvatly+diemhoahoc);
document.write('Điểm tổng là: '+ diemtong .toFixed(2));
document.write('<br/>')

let diemtrungbinh = (diemhoahoc + diemvatly + diemsinhhoc)/3;
document.write('Điểm trung bình là: ' + diemtrungbinh .toFixed(2));

