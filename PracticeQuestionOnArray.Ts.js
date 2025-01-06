var array = [-45, -34, -2, -34, -7, -5];
function fnFindLargestEle(arr) {
    var maxArrEle = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > maxArrEle) {
            maxArrEle = arr[i];
        }
    }
    return maxArrEle;
}
var LargestNUM = fnFindLargestEle(array);
console.log(LargestNUM);
var SecLargArray = [2, 9, 6, 35, 30, 12, 11, 32];
function fnFindSecLargestEle(arr) {
    var maxArrEle = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] > maxArrEle) {
            maxArrEle = arr[i];
        }
    }
    return maxArrEle;
}
var SecLargestNUM = fnFindSecLargestEle(SecLargArray);
console.log(SecLargestNUM);
