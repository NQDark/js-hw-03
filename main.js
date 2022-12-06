// task 1
// const user = {
//    name: 'Mango',
//    age: 20,
//    hobby: 'html',
//    premium: true,
//  };

//  user.mod = 'happy';
//  user.hobby = 'skydiving';
//  user.premium = false;
//  const keys = Object.keys(user);
//  for (const key of keys) {
//    console.log(key);
//    console.log(user[key]);
//  }
//  console.log(user)

// task 2
// const countProps = function (obj) {
//    let propCount = 0;
//    for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//          propCount += 1;
//       }
//    }
//    return propCount
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// task 3
// const findBestEmployee = function (employees) {
//    let maxValue = 0;
//    for (const key in employees) {
//       if (employees[key] > maxValue) {
//          maxValue = employees[key];
//       } 
//     }
//     for (const key in employees) {
//     if (maxValue === employees[key]) {
//       return key
//     }
//    }
// console.log(maxValue)
// };

// console.log(
//    findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//    }),
// ); // lorence

// console.log(
//    findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//    }),
// ); // mango

// console.log(
//    findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//    }),
// ); // lux

// task 4
const countTotalSalary = function(employees) {
    // твой код
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(countTotalSalary({})); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); // 330
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); // 400