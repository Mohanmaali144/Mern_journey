
var arr = [1, 2, -2, -5, 4, -3, 5, 4, -9];

//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr.push(arr[i]);
//       arr.splice(i, 1);
//     }
//   }

for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        if (arr[j] < 0) {
            arr.push(arr[j]);
            arr.splice(j, 1);
        }
    }
}
console.log(arr);
console.log("abc")

