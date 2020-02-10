// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

 /*
 1. create empty array 'results'
 2. create counter variable, start at 1
 3. as long as start_col <= end_col AND start_row <= end_row
    a. loop from start_col to end_col 
    b. results[start_row][i] and assign counter var
    c. increm counter
 4. increm start_row
 5. loop from start_row to end_row 
    a. results[i][end_col] = counter
    b. increm counter 
 6. decrem end_row 
    ...repeat

 */


function matrix(n) {
    let results = []


    for (let i = 0; i < n; i++) {
        results.push([]);
    }


   let counter = 1
   let startCol = 0;
   let endCol = n - 1
   let startRow = 0
   let endRow = n -1 

   while(startCol <= endCol && startRow <= endRow)
   {
   for(let i = startCol; i <= endCol; i++)
   {
       results[startRow][i] = counter++
   }

   startRow++
   for(let i = startRow; i <= endRow; i++)
   {
       results[i][endCol] = counter++
   }

    endCol--
   for(let i = endCol; i >= startCol; i--)
   {
       results[endRow][i] = counter++
   }
   
   endRow--
   for(let i = endRow; i >= startRow; i--)
   {
       results[i][startCol] = counter++
   }
   
   startCol++

/*     console.log("start row", startRow)
    console.log("end row", endRow)
    console.log("start col", startCol)
    console.log("end col", endRow) */
   }
   console.log(results)

   return results
}

matrix(4)
module.exports = matrix;
