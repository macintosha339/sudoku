module.exports = function solveSudoku(matrix) {
  // your solution
  function newMatrix(matrix) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return [9, 9];
}



function checkR(matrix, row, num) {
    for (let i = 0; i < 9; i++) {
        if (matrix[row][i] === num) {
            return false;
        }
    }
    return true;
}



function checkC(matrix, col, num) {
    for (let i = 0; i < 9; i++) {
        if (matrix[i][col] === num) {
            return false;
        }
    }
    return true;
}


// Check 3 x 3 box


function checkB(matrix, row, col, num) {
    const r = row - row % 3;
    const c = col - col % 3;
    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            if (matrix[i][j] === num) {
                return false;
            }
        }
    }
    return true;
}
function similarCheckNumber(matrix, row, col, num) {
    return (checkR(matrix, row, num) && checkC(matrix, col, num) && checkB(matrix, row, col, num));
}

function backtracking(matrix) {
    const elem = newMatrix(matrix);
    const row = elem[0];
    const col = elem[1];
    if (row === 9) {
        return true;
    }

    
    for (let num = 1; num <= 9; num++) {
        if (similarCheckNumber(matrix, row, col, num)) {
            matrix[row][col] = num;
            if (backtracking(matrix)) {
                return true;
            } else {
                matrix[row][col] = 0;
            }
        }
    }
}
backtracking(matrix);
return matrix;
}
