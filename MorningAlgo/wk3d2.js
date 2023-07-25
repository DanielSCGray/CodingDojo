/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item
  
  No built-in array methods except pop().
*/

var arr1 = ["a", "b", "c", "d", "e"];
var removeIdx1 = 1;
var expected1 = "b";
// after function call, arr1 should be:
var arr1Expected = ["a", "c", "d", "e"];

var arr2 = ["a", "b", "c"];
var removeIdx2 = 3;
var expected2 = null;
var arr2Expected = ["a", "b", "c"];

var arr3 = ["a", "b", "c"];
var removeIdx3 = -3;
var expected3 = null;
var arr3Expected = ["a", "b", "c"];

/**
 * Removes and returns the item at the given idx from the given array and
 * shifts the remaining items to fill the empty space created by the item
 * being removed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @param {number} idx Index of the item to be removed.
 * @returns {any} The removed item.
 */


function removeAt(items, idx) {
    if (items[idx]){
        var value = items[idx]
        for (var i = idx; i < items.length -1; i++){
            items[i] = items[i+1]
        }
        items.pop();
        return value
    }
    else {
        return null
    }
}


// Tests
var result1 = removeAt(arr1, removeIdx1);
console.log(result1, "should equal", expected1);
console.log(arr1, "should equal", arr1Expected);

var result2 = removeAt(arr2, removeIdx2);
console.log(result2, "should equal", expected2);
console.log(arr2, "should equal", arr2Expected);

var result3 = removeAt(arr3, removeIdx3);
console.log(result3, "should equal", expected3);
console.log(arr3, "should equal", arr3Expected);
