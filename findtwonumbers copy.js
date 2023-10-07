matrix = [[2, 2, 4],[4, 6, 6],[8, 9, 1,0]]
arr1 = [14,14,19]
arr2 = [19,19,12,11]


var diagonalSum = function (mat) {
    let lsum = 0,
      rsum = 0,
      matLen = mat[0].length - 1;
  
    if (mat[0].length === 1) {
      return mat[0][0];
    }
    for (i = 0; i < mat.length; i++) {
      lsum += mat[i][i];
    }
    for (i = 0; i < mat[0].length; i++) {
      if (i === matLen) {
        matLen--;
      } else {
        rsum += mat[i][matLen];
        matLen--;
      }
    }
    return rsum + lsum;
  };
