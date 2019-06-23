function changeToRoman(num) {
  var result = ""
  
  while(num > 0) {
    if(num === 5000) { return "v" }
    if(num <= 0 || num > 5000) { return "ERROR" }

    while(num >= 1000) {
      if(num >= 4000) {
        result += "Mv"
        num -= 4000
      } else {
        result += "M"
        num -= 1000
      }
    }
    while(num >= 500) {
      if(num >= 900) {
        result += "CM"
        num -= 900
      } else {
        result += "D"
        num -= 500
      }
    }
    while(num >= 100) {
      if(num >= 400) {
        result += "CD"
        num -= 400
      } else {
        result += "C"
        num -= 100
      }
    }
    while(num >= 50) {
      if(num >= 90) {
        result += "XC"
        num -= 90
      } else {
        result += "L"
        num -= 50
      }
    }
    while(num >= 10) {
      if(num >= 40) {
        result += "XL"
        num -= 40
      } else {
        result += "X"
        num -= 10
      }
    } 
    while(num >= 5) {
      if(num >= 9) {
        result += "IX"
        num -= 9
      } else {
        result += "V"
        num -= 5
      }
    }
    while(num >= 1) {   
      if(num >= 4) {
        result += "IV"
        num -= 4
      } else {
        result += "I"
        num -= 1
      }
    }
  }
  if(result === "") { result = "ERROR" }
  return result
}
