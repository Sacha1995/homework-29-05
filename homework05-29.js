// 1.	Create a function that accepts two numbers, adds them and returns the result.

function add(x, y) {
  return x + y;
}

console.log(add(2, 3));

// 2.	Write a function with the following behavior
//      -    takes an array as a parameter
//      -    reverses the order of the array
//      -    returns the reversed array

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverse(array) {
  return array.reverse();
}

console.log(reverse(arr));

//  4. Create an array with 10 items
let animals = [
  { type: "dog", name: "Bruno", legs: 4, sound: "woof", isMammal: true },
  { type: "cat", name: "Cleo", legs: 4, sound: "miauw", isMammal: true },
  { type: "fish", name: "Goldie", legs: 0, sound: "blub", isMammal: false },
  { type: "horse", name: "Betsy", legs: 4, sound: "neigh", isMammal: true },
  {
    type: "chicken",
    name: "Henrietta",
    legs: 2,
    sound: "tok",
    isMammal: false,
  },
  { type: "cow", name: "Greta", legs: 4, sound: "moo", isMammal: true },
  { type: "snake", name: "Simon", legs: 0, sound: "ssss", isMammal: false },
  {
    type: "spider",
    name: "Tarantula",
    legs: 8,
    sound: "none",
    isMammal: false,
  },
  { type: "bee", name: "Ben", legs: 6, sound: "bzzz", isMammal: false },
  {
    type: "hamster",
    name: "Hamtaro",
    legs: 4,
    sound: "squeak",
    isMammal: true,
  },
];

//  5. Update one of the items
animals[0].name = "Vicky";

console.log(animals[0]);

//  6. Delete half of the array
animals.splice(4, 5);

console.log(animals);

//  7. Write out each of the array methods so you become familiar with the syntax (use the array you made earlier)
let pets = [
  { type: "dog", name: "Bruno", legs: 4, sound: "woof", isMammal: true },
  { type: "cat", name: "Cleo", legs: 4, sound: "miauw", isMammal: true },
  { type: "fish", name: "Goldie", legs: 0, sound: "blub", isMammal: false },
  { type: "horse", name: "Betsy", legs: 4, sound: "neigh", isMammal: true },
  {
    type: "chicken",
    name: "Henrietta",
    legs: 2,
    sound: "tok",
    isMammal: false,
  },
  { type: "cow", name: "Greta", legs: 4, sound: "moo", isMammal: true },
  { type: "snake", name: "Simon", legs: 0, sound: "ssss", isMammal: false },
  {
    type: "spider",
    name: "Tarantula",
    legs: 8,
    sound: "nothing",
    isMammal: false,
  },
  { type: "bee", name: "Ben", legs: 6, sound: "bzzz", isMammal: false },
  {
    type: "hamster",
    name: "Hamtaro",
    legs: 4,
    sound: "squeak",
    isMammal: true,
  },
];
//    Pop
let hamster = pets.pop();
console.log(hamster);

//    Push
pets.push(hamster);
console.log(pets);

//    Shift
let dog = pets.shift();
console.log(dog);

//    Unshift
pets.unshift(dog);
console.log(pets);

//    Concatenating
let zoo = [
  { type: "lion", name: "Lenny", legs: 4, sound: "roar", isMammal: true },
  { type: "penguin", name: "Penny", legs: 2, sound: "bray", isMammal: false },
  { type: "elephant", name: "Ellie", legs: 4, sound: "rumble", isMammal: true },
];

pets = pets.concat(zoo);

console.log(pets);

//    Splicing
pets.splice(10, 3, {
  type: "bunny",
  name: "Beatrice",
  legs: 4,
  sound: "nothing",
  isMammal: true,
});
console.log(pets);

//    Slicing
let creepy = pets.slice(6, 8); //copies spider and snake
console.log(creepy);

//    Reverse
console.log(pets.reverse());

//    Join
let names = [];

for (var i = 0; i < 10; i++) {
  names.push(pets[i].name);
}

console.log(names);
console.log(names.join(" - "));

//    forEach
names.forEach(function (item, index) {
  console.log(index + " name is " + item);
});

//    Includes
console.log(names.includes("Betsy"));

//    indexOf
console.log(names.indexOf("Betsy"));

//    Every
let areAllMammals = pets.every(function (item, index) {
  return pets[index].isMammal === true;
});

console.log(areAllMammals);

//    Some
let areSomeMammals = pets.some(function (item, index) {
  return pets[index].isMammal === true;
});

console.log(areSomeMammals);
//    Filter
let fourLegs = pets.filter(function (item, index) {
  return pets[index].legs === 4;
});

console.log(fourLegs);

//    Find
let spider = pets.find(function (item, index) {
  return pets[index].type === "spider";
});

console.log(spider);

//    findIndex
let spiderIndex = pets.findIndex(function (item, index) {
  return pets[index].type === "spider";
});

console.log(spiderIndex);

//    Sort
let petsSortedNumberOfLegs = pets.sort(function (item1, item2) {
  if (item1.legs > item2.legs) {
    return 1;
  }
  if (item1.legs < item2.legs) {
    return -1;
  }
});

console.log(petsSortedNumberOfLegs);

//    Map
let html = pets
  .map(function (pet, index) {
    return `<div>
          <h1>${pet.name}</h1>
          <p>I am a ${pet.type}<p/>
          <p>I have ${pet.legs} legs<p/>
          <p>I say: "${pet.sound}"<p/>
          </div>`;
  })
  .join("");

console.log(html);

// I have figured out now that I could've done the same with pet on the find, filter and findIndex instead of the index.
