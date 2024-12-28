const name = "Narayan"

const repoCount = 50

//console.log(name + repoCount +" value ");



console.log(`hello my name is ${name} and my repo count is ${repoCount}.`);

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Narayan-mahi-com")

console.log(gameName[0]);
//console.log(gameName__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(2,4)
console.log(anotherString);

const newStringone ="   Narayan    "
console.log(newStringone.trim());

const url = "https://narayan.com/narayan%20mahi"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));