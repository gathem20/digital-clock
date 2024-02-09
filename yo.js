document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontsize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "arial";
console.log(
  "%cyousef %cgathem %cmahmoud",
  "color: red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold;",
  "background-color:blue; font-size:40px;"
);
console.group("group 1");
console.log("message 1");
console.log("message 2");
console.group("group child");
console.log("message 1");
console.log("message 2");
console.group("group grand child");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("message 1");
console.log("message 2");
console.groupEnd();
console.table(["yousef", "saher", "sallam", "ramzey", "abdallah"]);
//console.log("Iam In Console");
/*
document.write("Iam In Page");
*/
let numone = 10;
let numtwo = 20;
// Add Variables Here

// Ouput
console.log(numone + "" + numtwo); // Normal Concatenate => 1020
console.log(typeof (numone + "" + numtwo)); // Normal Concatenate => String
console.log(`${numone}${numtwo}`); // Template Literals Way => 1020
console.log(typeof `${numone}${numtwo}`); // Template Literals Way => String

console.log(numtwo + "\n" + numone);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numtwo}\n${numone}`);
/*
  Template Literals Way
  20
  10
*/
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(`\`I'm In \n\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\`\``);
let a = 21;
let b = 20;
console.log(`_${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

// Replace ? With Arithmetic Operators
console.log(((((10 * 20 * 15) % 3) / 190) % 10) / 400);

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num ** (true + true) - num); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log((num += true + true + true)); // 6

// Solution Five
console.log(num++); // 6

// Solution Six
console.log(num - true); // 6

let num2 = "10";

// Solution One
console.log(Number(num2 * 2)); // 20

// Solution Two
console.log(++num2 + num2 - 2); // 20

// Solution Three
console.log((num2 += 9)); // 20

// Solution Four
console.log(num2); // 20

let points = 10;

// Write Your Code Here

console.log((points += 3)); // 13

// Write Your Code Here

console.log((points -= 5)); // 8;

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 16

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

let num3 = 10;

console.log(Number.isInteger((num3 = 2))); // 2

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+flt.toFixed(0)); // 10

console.log(parseInt(Math.random() * 5));
console.log(`${Number.MAX_SAFE_INTEGER}`.length);
function youseff() {
  let games = ["rock", "scissors", "paper"];
  let computer = games[Math.floor(Math.random() * games.length)];
  let user = prompt("make your choice: rock or scissors or paper").trim();
  switch (user) {
    case "rock":
      if (computer === "paper") {
        alert(`Computer: ${computer}\nI'm sorry, my friend, you lose.`);
      } else if (computer === "scissors") {
        alert(`Computer: ${computer}\nWinner winner chicken dinner!`);
      } else {
        alert(`Computer: ${computer}\nIt's a draw!`);
      }
      break;
    case "paper":
      if (computer === "scissors") {
        alert(`Computer: ${computer}\nI'm sorry, my friend, you lose.`);
      } else if (computer === "rock") {
        alert(`Computer: ${computer}\nWinner winner chicken dinner!`);
      } else {
        alert(`Computer: ${computer}\nIt's a draw!`);
      }
      break;
    case "scissors":
      if (computer === "rock") {
        alert(`Computer: ${computer}\nI'm sorry, my friend, you lose.`);
      } else if (computer === "paper") {
        alert(`Computer: ${computer}\nWinner winner chicken dinner!`);
      } else {
        alert(`Computer: ${computer}\nIt's a draw!`);
      }
      break;
    default:
      alert("Try again.");
      break;
  }
}
let btnn = document.querySelector(".q");
btnn.addEventListener("click", youseff);
function yousef() {
  try {
    let email = prompt("please enter your email");
    if (!email.includes("@")) {
      throw new Error('Your email should include "@"');
    }
    if (!email.includes(".com")) {
      throw new Error('Your email should include ".com"');
    }
    let password = prompt("please enter your password");
    if (password.length < 8) {
      throw new Error("Your password must be at least 8 characters long");
    }
    console.log("email", email);
    console.log("password", password);
    let msg = "welcome to website";
    alert(msg);
  } catch (error) {
    alert(error.message);
    yousef();
  } finally {
  }
}
let btn = document.querySelector(".bt");
btn.addEventListener("click", yousef);

function createTodoItem(text) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let deleteBtn = document.createElement("button");
  let checkBtn = document.createElement("button");

  span.textContent = text;
  deleteBtn.textContent = "Delete";
  checkBtn.textContent = "Check";

  deleteBtn.addEventListener("click", function (event) {
    let li = event.currentTarget.parentNode;
    li.parentNode.removeChild(li);
  });

  checkBtn.addEventListener("click", function (event) {
    let li = event.currentTarget.parentNode;
    li.classList.toggle("checked");
  });
  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(checkBtn);
  return li;
}
let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  let todoText = todoInput.value;
  if (todoText.trim() !== "") {
    let todoItem = createTodoItem(todoText);
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});
function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("cannot found!"));
    image.src = url;
  });
}
let form = document.getElementById("imageForm");
let imagec = document.getElementById("imagec");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let imageurl = document.getElementById("imageUrl").value.trim();
  if (!imageurl) {
    alert("enter your link please");
    return;
  }
  try {
    let image = await loadImage(imageurl);
    if (imagec.firstChild) {
      imagec.removeChild(imagec.firstChild);
    }
    image.width = 500;
    imagec.appendChild(image);
  } catch (error) {
    alert(error.message);
  }
});
