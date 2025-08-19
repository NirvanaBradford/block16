/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.

function randomly() {
  // creates a random generated name
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];

  // creates a random generated occupation
  const randomOccupations =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];

  // creates a random generated rate
  //***used google ai mode to help me with this part of the logic***
  const randomRate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  // create and return the freelancer object
  return {
    name: randomName,
    occupation: randomOccupations,
    rate: randomRate,
  };
}
console.log(randomly());

// Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const freelancers = Array.from({ length: NUM_FREELANCERS }, randomly);

//  Write a function that returns the average rate of all freelancers in state.
function getAverageRate(freeArr) {
  const totalRate = freeArr.reduce((acc, currV) => acc + currV.rate, 0);

  // return totalRate divded by freelancers
  return totalRate / freeArr.length;
}

// Use that function to initialize a state variable which will store the average rate of all freelancers.
const averageRate = getAverageRate(freelancers);
console.log(averageRate);

//  Write a component function to represent a single freelancer.
function comFreelancer(freelancer) {
  // create a li html tag
  const $li = document.createElement("li");
  const $lineBreak = document.createElement("br"); //create line break
  // adds text to the li tag
  $li.textContent = `Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Price: ${freelancer.rate}`;

  $li.style.margin = "1px";
  $li.style.padding = "15px";
  $li.style.width = "100%";

  // return the result
  return $li;
}

// Write a component function to represent an array of freelancers.
function freelancrList(freelancersArray) {
  // create a ul element
  const $ul = document.createElement("ul");

  // creating a freelancer table
  //*used google ai for this line of code aswell */
  freelancersArray.forEach((freelancer) => {
    $ul.appendChild(comFreelancer(freelancer));

    $ul.style.display = "flex";
    $ul.style.flexDirection = "row";
    $ul.style.flexWrap = "wrap";
    $ul.style.listStyle = "none";
    $ul.style.alignContent = "center";
    $ul.style.border = "solid, 10px, black";
    $ul.style.padding = "0px";
  });

  // return $ul
  return $ul;
}

// Write a component function to represent the average rate of all freelancers.
// create a h2 element

function heading() {
  const $h2 = document.createElement("h2");

  // added averageRate() to $h2
  $h2.textContent = `the averge rate is ${averageRate}`;

  $h2.style.marginLeft = "55px";

  // return $h2
  return $h2;
}

// Write and call a render function that will mount the application onto the document.

function render() {
  //select the app id element
  const $app = document.querySelector("#app");

  $app.innerHTML = `
         <h1>Freelancers</h1>
           <Heading></Heading>
            <section>
               <ul>
                 <li>Name</li>
                 <li>Occupation</li>
                 <li>Price</li>
               </ul>
            </section>
`;

  $app.querySelector("Heading").replaceWith(heading());
  $app.querySelector("ul").replaceWith(freelancrList(freelancers));
  $app.querySelector("li").replaceWith(comFreelancer(randomly()));
}

render();
