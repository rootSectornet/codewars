function encodeRailFenceCipher(string, numberRails) {
  // code
  var x = string.split("");
  var t = []
  for (let i = 0; i < numberRails; i++) t.push([])
  var j = 0;
  var state = "plus";
  for(var i=0;i<x.length;i++){
    t[j].push(x[i]);
    j = state == "plus" ? j+=1 : j-=1;
    if(j==(numberRails-1)){
      state = "minus"
    }
    if(j==0){
      state = "plus"
    }
  }
  t = t.map((c)=>c.join(""))
  return t.join("")
}


function decodeRailFenceCipher(string, rows) {
   	rows = rows || 3
    let fence = [];
    for (let i = 0; i < rows; i++) fence.push([])
    let rail = 0;
    let change = 1;

    string.split("").forEach(char => {
        fence[rail].push(char)
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    })

    const rFence = [];
    for (let i = 0; i < rows; i++) rFence.push([])

    i = 0
    let s = string.split("")
    for (r of fence) {
        for (let j = 0; j < r.length; j++) rFence[i].push(s.shift())
        i++
    }

    rail = 0
    change = 1
    var r = ""
    for (var i = 0; i < string.length; i++) {
        r += rFence[rail].shift()
        rail += change

        if (rail === rows - 1 || rail === 0) change = -change
    }
    return r
}
