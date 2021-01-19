function middlePermutation(s) {
  return (s=s.split([]).sort()).concat(s.splice((l=s.length)/2-1,l%2+1)).reverse().join([]);
}