/* Given an image represented by N x N matrix, where each pixel in the image is represented by an integer, write a methodto rotate the image by 90 degrees. Can you do this in place?

I: nxn matrix
O: rotated matrix - 90 deg, clockwise
C: rotate matrix in place, optimize
E: empty matrix, even and odd values for n

*/

function rotateMatrix(m) {
  if (m.length === 0 || m.length !== m[0].length) return false;

  let n = m.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = m[first][i]; // save top

      // left -> top
      m[first][i] = m[last - offset][first]

      // bottom -> left
      m[last - offset][first] = m[last][last - offset];

      // right -> bottom
      m[last][last - offset] = m[i][last]

      // top -> right
      m[i][last] = top; // right <- saved top
    }
  }
  return m
}

// function rotateMatrix(m) {
//   let n = m.length;

//   for (let i = 0; i < Math.floor(n / 2); i++) {
//     for (let j = 0; j < n - 2 * i - 1; j++) {
//       let t = m[i + j][n - 1 - i];
//       m[i + j][n - 1 - i] = m[i][i + j];
//       m[i][i + j] = t;

//       t = m[n - 1 - i][n - 1 - i - j];
//       m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
//       m[i][i + j] = t;

//       t = m[n - 1 - i - j][i];
//       m[n - 1 - i - j][i] = m[i][i + j];
//       m[i][i + j] = t;
//     }
//   }
//   return m;
// }

/*
I: 2 matrices, array of arrays nested any level deep
O: boolean
C: optimize
E: empty array, array of arrays nested several levels deep

time complexity: O(n)
space complexity: O(n)

*/

function compareMatrix(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    return a === b;
  } else {
    let output = true;
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if (output) {
        output = compareMatrix(a[i], b[i]);
      } else {
        return false;
      }
    }
    return output;
  }
}

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
