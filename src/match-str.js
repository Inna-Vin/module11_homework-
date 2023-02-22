//Напишите функцию match, которая принимает 2 строки и возвращает true, если эти 
//строки равны без учета регистра. Например, match('hEllO', 'HELLo') должен вернуть true.
export function matchStr (string1, string2) {
    if (string1.toUpperCase() === string2.toUpperCase()) {
      return true
    } else
      return false
  } 
  //console.log(matchStr ('hEllO', 'HELLo'))