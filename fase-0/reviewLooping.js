// LOOPING: for while
// do while jarang di pake di Js

/**
 * Study Case 1
 *
 * Ubah string berikut : "starbucks" menjadi "StArBuCkS"
 *
 */

// let str; // declaration
// str = "starbucks"; // initialization / assign
// let temp = "";
//
// for (let i = 0; i < str.length; i += 1) {
//   if (i % 2 === 0) {
//     //  console.log(str[i].toUpperCase());
//     temp += str[i].toUpperCase();
//   } else {
//     //  console.log(str[i]);
//     temp += str[i];
//   }
// }
// console.log(temp);
// console.log(str.toUpperCase());

// 1 == '1' (hanya cek value)
// 1 === '1' (cek value dan tipe data)

// a = a + c;

/**
 * Study Case 2
 *
 * Hitung jumlah x dan o, dan cek apakah jumlah sama atau tidak.
 *
 * Contoh:
 * let xo1 = "xoxox" // false
 * let xo2 = "" // Tidak ada x dan o
 * let xo3 = "xo" // true
 */

function checkXO(str) {
  if (str === undefined || str === "") {
    console.log("Tidak ada x dan o");
  } else {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "x") {
        countX++;
      } else if (str[i] === "o") {
        countO++;
      }
    }
    if (countX === countO) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

let str = "xo";
console.log(checkXO(str));

// checkXO("xoxox");

/**
 * Study Case 3
 *
 * Hitung jumlah huruf vokal dalam sebuah kalimat.
 *
 * let sentence = "hari ini aku makan tongseng ya."
 * Hasil:
 * {
 *    a: 5,
 *    i: 3,
 *    u: 1,
 *    e: 1,
 *    o: 1
 * }
 */
