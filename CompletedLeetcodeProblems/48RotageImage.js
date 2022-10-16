
/* 
https://leetcode.com/problems/rotate-image/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000 */


// matrix = [[1,2,3],[4,5,6],[7,8,9]]
// matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
matrix = [[1, 2, 3, 4, -1], [5, 6, 7, 8, -2], [9, 10, 11, 12, -3], [13, 14, 15, 16, -4], [17, 18, 19, 20, -5]]
// matrix = [[1, 2, 3, 4, -1, -11], [5, 6, 7, 8, -2, -22], [9, 10, 11, 12, -3, -33], [13, 14, 15, 16, -4, -44], [17, 18, 19, 20, -5, -55], [21, 22, 23, 24, -6, -66]]
// matrix = [[1]]
// matrix = [[1,2],[3,4]]


function move_pixel(matrix, start_row, start_col, n){

    let counter = 0 
    let num_of_sides = 4

    a = matrix[start_row][start_col]

    while(counter <= num_of_sides){  
    
        b = matrix[start_col][n - 1 - start_row] 
        matrix[start_col][n - 1 - start_row] = a
        i = start_row 
        start_row = start_col
        start_col = n - 1 - i
        
        a = b
        
        counter++
    }

}




function rotate(matrix){

    let n = matrix.length

    for(i = 0; i < Math.ceil(matrix.length/2); i++){

        for(j = i; j < n - 1 - i; j++) {

            let start_row = i
            let start_col = j

            move_pixel(matrix, start_row, start_col, n)

        }

    }

    console.log(matrix)
    return(matrix)
}


rotate(matrix)
