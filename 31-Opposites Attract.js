// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/555086d53eac039a2a000083

// fungsi yang akan mengambil jumlah kelopak setiap bunga dan mengembalikan nilai true jika keduanya
//jatuh cinta dan false jika tidak jatuh cinta
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefunc(1, 4));
