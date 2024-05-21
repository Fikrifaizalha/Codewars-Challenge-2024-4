// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// Diberikan bilangan acak non-negatif, Anda harus mengembalikan digit bilangan ini
// dalam larik dengan urutan terbalik.

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

console.log(digitize(35231));
