function SeriesSum(n)
{
  if(n==0){return Number(n).toFixed(2)}
    var start = 4;
    var sum = 1;
    for(var i=1; i<n; i++){
        sum += 1/start
        start +=3
    }
  return Number(sum).toFixed(2)
}