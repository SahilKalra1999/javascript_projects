// let obj={a:1, b:2, c:3};
// for(let prop in obj)
// {
//     console.log(`obj.${prop}=${obj[prop]}`);
// }
// let city={'P':"Pune", 'D':"Delhi", 'G':"Gurgaon"};
// for(let cityName in city)
// {
//     console.log(`city.${cityName}=${city[cityName]}`);

// let arr=["A", 'B', null, NaN, 1,2,3,4];
// for(let array of arr)
// {
//     console.log(array)
// }
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);
// let sum=(a, b) => a+b;
// alert(sum(3,4));
// let power=n=> n*2;
// console.log(power(3));
let age=18;
let welcome=(age<18)?
() => alert("Hello"):
() => alert("Greeting");
welcome();

