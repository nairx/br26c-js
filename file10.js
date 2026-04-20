// const marks = [45, 90, 35, 50, 25];
// const [maths,science,english,social,hindi] = marks
// console.log(english)

// const marks = [45, 90, 35, 50, 25];
// const [maths,,english,,] = marks
// console.log(english)

const marks = [45, 90, 35, 50, 25];
const [maths,...rest] = marks
console.log(maths)
console.log(rest)