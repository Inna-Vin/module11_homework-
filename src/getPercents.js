//Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
export function getPercents(percent, number) {
    let result = number / 100 * percent;
    return result;
  }