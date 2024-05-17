var waktu = new Date();
var jam = waktu.getHours(); 
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = ["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","Desember"];
var hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];

document.write(hari[hr]+", "+tgl+" "+bulan[bln]+" "+thn+"<br>"); 