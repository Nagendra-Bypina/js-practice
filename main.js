// function logItems(n){
//     for(let i=0; i<n; i++){
//         console.log(i);
//         let div = document.getElementById('mydiv');
//         div.innerHTML += `<p> ${i} from i</p>`;
//         for(let j=0;j<i;j++){
//             console.log(j);
//             let div = document.getElementById('mydiv');
//             div.innerHTML += `<p> ${j} from j</p>`;
//         }

//     }
// }

// logItems(10);

// function addNumbers(num){
//     let strArr =  num.toString().split("");
//     let numArr = strArr.map(el=>{
//         return parseInt(el)
//     })
//     let sum = numArr.reduce((a,b)=> a + b);
//     console.log(sum);
//     if(sum>10) addNumbers(sum)
//     else console.log(sum)

// }

// console.log(addNumbers(12345));

// let string1 = 12345;
// let splittedstr = string1.split("");
// console.log(splittedstr);

// function checkPalindrome(str) {
//     let reversedStr = str.split("").reverse().join("");
//     if(str === reversedStr){
//         console.log("given string is palindrome")
//     }
//     else console.log("not a palindrome")
//     console.log(reversedStr);
// }

// checkPalindrome("dad");

//curry function
//  const sumCurry = (a) => {
//     return (b) => {
//         return a + b;
//     }
//  }
// console.log(sumCurry(10)(20));
// console.log(sortedArr);
// let arr = [9,7,8,5,3,2,1];
// var sortedArr = arr.sort();
// console.log(sortedArr);

// function secondSmallest(sortedArr){
//     return sortedArr[1];
// }

// console.log(secondSmallest(sortedArr));

// function factoroial(num){
//     if(num === 0 || num === 1){
//         return 1;
//     }
//     else{
//         return num * factoroial(num-1);
//     }
// }

// console.log(factoroial(5));
// const users = [
//   {
//     name: "nagendra",
//     city: "hyderabad",
//     skills: ["html", "css", "js", "react", "angular"],
//   },
//   {
//     name: "amit",
//     city: "noida",
//     skills: ["html", "css", "js", "react", "angular", "vuejs"],
//   },
//   {
//     name: "abdul",
//     city: "chennai",
//     skills: ["html", "css", "js", "react", "angular", "vuejs", "react native"],
//   },
// ];
// console.log(users);
// // console.log(Object.entries(users)[0].map(user => {return `He is ${user.name} and his city is ${user.city} and his skills are ${user.skills}`}));

// const newusers = [...users];
// console.log(
//   newusers.map((userObj) => {
//     return userObj.name;
//   })
// );

// const arr = [1, 2, 3, 4, 5];

// const result = arr.filter(checkNumber);

// function checkNumber(val) {
//   return val > 1;
// }

// console.log(result);

// let fruits = ["banana", "apple", "mango"];

// let list = fruits.entries();
// let text = "";
// for (let x of list) {
//   text += x + "</br>";
// }
// console.log(text);

// document.getElementById("mydiv").innerHTML = text;
// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((acc, current) => {
//   return acc + current;
// });

// console.log(sum);

// let filteredItem = arr.filter((item, index) => {
//   if (item > 2) {
//     return item;
//   }
// });

// console.log(filteredItem);

// let newArray = arr.map((item) => {
//   return item + "hello";
// });

// console.log(newArray);

let parentEl = document.getElementById("parent");
console.log(parentEl);
parentEl.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("clicked", event.target.textContent);
  }
});
