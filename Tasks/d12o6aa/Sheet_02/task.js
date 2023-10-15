
// task 1
var Number_One = 10;
var numberTwo = 20;

console.log(Number_One +''+ numberTwo);

console.log(typeof(Number_One +''+ numberTwo));

console.log(`${Number_One}${numberTwo}`);

console.log(typeof `${Number_One}${numberTwo}`);

console.log(Number_One +'\n'+ numberTwo);

console.log(`${Number_One}
${numberTwo}`);

//////////////////////////////////////////////////

// task 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//////////////////////////////////////////////////

// task 3

console.log("`I'm In\n\\\\\nLove \\\\ \"\"\" '''\n\
++ With ++\n\\\"\"\"\\\"\"\"\n\
\"\"JavaScript\"\"``")

/////////////////////////////////////////////////

//task 4

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

////////////////////////////////////////////////

var theTitle = "Elzero", theDesctiption = "Elzero Web School", theDate = "25/10";

let challenge = `
    <div class="card">
        <h3>${theTitle}</h3>
        <p>${theDesctiption}</p>
        <span>${theDate}</span>
    </div>
`;
let re = challenge.repeat(4);

document.write(re);