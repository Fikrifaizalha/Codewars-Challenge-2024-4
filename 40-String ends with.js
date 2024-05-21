// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

// Selesaikan solusi sehingga mengembalikan nilai true jika argumen pertama (string)
//  yang diteruskan diakhiri dengan argumen ke-2 (juga string).

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
