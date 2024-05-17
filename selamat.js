var waktu = new Date();
var jam = waktu.getHours(); 
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

if (jam<9) {
document.write("Halo, Selamat Pagi!");
} else if (jam<15) {
document.write("Halo, Selamat Siang!");
} else if (jam <18) {
document.write("Halo, Selamat Sore!");
} else {
document.write("Halo, Selamat Malam!");
}