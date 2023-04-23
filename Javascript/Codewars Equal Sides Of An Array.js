function findEvenIndex(arr)
{
  let runsum = 0;
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  for(i = 0; i < arr.length; i++) {
    if(runsum * 2 == sum - arr[i]){
      return i;
    }
    runsum+=arr[i];
  }
  return -1;
}
