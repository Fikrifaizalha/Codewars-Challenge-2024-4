// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// Sederhana, dengan serangkaian kata, kembalikan panjang kata terpendek.
// String tidak akan pernah kosong dan Anda tidak perlu memperhitungkan tipe data yang berbeda.

function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
console.log(findShort("Let's travel abroad shall we"));
