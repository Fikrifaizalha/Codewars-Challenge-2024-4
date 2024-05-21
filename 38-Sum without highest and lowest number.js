// Fikri Faizal Hamzah Alfa'iz //

// Codewars Challenge 2024 //

// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// Jumlahkan semua angka dari array tertentu ( cq.list ),
// kecuali elemen tertinggi dan terendah ( berdasarkan nilai,
//  bukan berdasarkan indeks! ).

// Elemen tertinggi atau terendah masing-masing adalah satu elemen pada setiap sisi,
//  meskipun terdapat lebih dari satu elemen dengan nilai yang sama.

// CARA KE 1:

// function sumArray(array) {
//   if (array == null || array.length < 3) {
//     return 0;
//   }

//   const max = Math.max(...array);
//   const min = Math.min(...array);
//   let maxCount = 0;
//   let minCount = 0;

//   return array
//     .filter((x) => {
//       if (x === max && maxCount < 1) {
//         maxCount++;
//         return false;
//       }
//       if (x === min && minCount < 1) {
//         minCount++;
//         return false;
//       }
//       return true;
//     })
//     .reduce((a, b) => a + b, 0);
// }

// CARA KE 2:

function sumArray(array) {
  if (array == null || array.length < 3) return 0;

  const max = Math.max(...array);
  const min = Math.min(...array);
  let maxRemoved = false;
  let minRemoved = false;

  return array.reduce((sum, x) => {
    if (x === max && !maxRemoved) {
      maxRemoved = true;
      return sum;
    }
    if (x === min && !minRemoved) {
      minRemoved = true;
      return sum;
    }
    return sum + x;
  }, 0);
}

console.log(sumArray([0, 1, 6, 10, 10]));
