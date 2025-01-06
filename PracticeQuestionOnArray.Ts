const array: number[] = [-45, -34, -2, -34, -7, -5];

function fnFindLargestEle(arr: number[]): number {
  let maxArrEle = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxArrEle) {
      maxArrEle = arr[i];
    }
  }

  return maxArrEle;
}

const LargestNUM: number = fnFindLargestEle(array);

console.log(LargestNUM);

const SecLargArray: number[] = [2, 9, 6, 35, 30, 12, 11, 32];

function fnFindSecLargestEle(arr: number[]): number {
  let maxArrEle = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > maxArrEle) {
      maxArrEle = arr[i];
    }
  }

  return maxArrEle;
}

const SecLargestNUM: number = fnFindSecLargestEle(SecLargArray);

console.log(SecLargestNUM);
