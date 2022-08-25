function riverSizes(matrix) {
    let sizes = [];
    let passingMatrix = matrix.map(row => row.map(col => false));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let currentSize = {size: 0};
            pass(matrix, row, col, passingMatrix, currentSize);
            if (currentSize.size > 0) sizes.push(currentSize.size);
        }
    }

    return sizes;

}

function pass(matrix, row, col, passingMatrix, currentSize) {
    if (passingMatrix[row][col]) return;
    passingMatrix[row][col] = true;
    if (matrix[row][col] === 0) return;

    currentSize.size++;
    let neighbours = getNeighbours(matrix, row, col);
    for (let [neighbourRow, neighbourCol] of neighbours) {
        pass(matrix, neighbourRow, neighbourCol, passingMatrix, currentSize);
    }
}

function getNeighbours(matrix, row, col) {
    let neighbours = [];
    if (row !== 0) neighbours.push([row - 1, col]);
    if (col !== 0) neighbours.push([row, col - 1]);
    if (row !== matrix.length - 1) neighbours.push([row + 1, col]);
    if (col !== matrix[0].length - 1) neighbours.push([row, col + 1]);

    return neighbours;
}

exports.riverSizes = riverSizes;
