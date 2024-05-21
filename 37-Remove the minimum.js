// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Diberikan array bilangan bulat, hapus nilai terkecil. Jangan mengubah array/daftar asli.
// Jika ada beberapa elemen dengan nilai yang sama, hapus elemen dengan indeks terendah.
// Jika Anda mendapatkan array/daftar kosong, kembalikan array/daftar kosong.
// Jangan mengubah urutan elemen yang tersisa.

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  let min = Math.min(...numbers);
  let index = numbers.indexOf(min);

  // Create a new array excluding the element at the found index
  return numbers.filter((_, i) => i !== index);
}
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([161, 295, 130, 358, 273, 65]));

//  Versi ini digunakan Array.prototype.filteruntuk membuat array baru yang mengecualikan elemen terkecil,
// memastikan bahwa array asli tetap tidak berubah.
