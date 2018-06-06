// romanNumerals
// Converting to and back from Roman numerals.
// TODO: Consider a way to do numbers beyond 1000. Traditional Roman numerals start modifying, 
// like L witha line over it for 5000. What can I do instead?

function changeToDecimal(num) {
  var numArr = num.split("")
  var len = numArr.length
  var result = 0
  var roman = { 
     I:1
    ,V:5
    ,X:10
    ,L:50
    ,C:100
    ,D:500
    ,M:1000
  }
  if(len>1) {
    for(var i=0; i<len; i++) {
      if(i+1 < len && roman[numArr[i+1]] > roman[numArr[i]]) {
        result += -1*(roman[numArr[i]])
      } else {
        result += roman[numArr[i]]
      }
    }
  } else {
    return roman[numArr[0]]
  }
  return result
}

console.log(changeToDecimal("XXII") + " is 22")
console.log(changeToDecimal("XXIX") + " is 29")
console.log(changeToDecimal("XL") + " is 40")
console.log(changeToDecimal("LVIII") + " is 58")
console.log(changeToDecimal("XCIV") + " is 94")
console.log(changeToDecimal("CCCLXXIII") + " is 373")
console.log(changeToDecimal("MMXIX") + " is 2019")
