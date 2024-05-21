// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// Buat fungsi yang memberikan salam yang dipersonalisasi.
//  Fungsi ini mengambil dua parameter: name dan owner.

// Gunakan kondisional untuk mengembalikan pesan yang tepat:

function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));

// CARA KE 2:
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
