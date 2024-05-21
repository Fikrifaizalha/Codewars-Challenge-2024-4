// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/57f780909f7e8e3183000078

// Diberikan array bilangan bulat yang tidak kosong,
// kembalikan hasil perkalian nilai secara berurutan.

function grow(x) {
  return x.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
