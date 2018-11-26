//without currying
let dragon = (name, size, element) =>
	name + ' is a ' +
	size + 'dragon that breathes ' +
	element + '!'

console.log(dragon('Fluffikins', 'tiny', 'fire'))

//curried version

let curryDragon =
//each function will return a function
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + 'dragon that breathes ' +
				element + '!'
//we subsequently can call them all-together 
console.log('Curried ', curryDragon('Fluffikins')('tiny')('fire'))
//or we can call them at different parts of the code loke this

let fluffikinsDragon = curryDragon('fluffikins')
let tinyDragon = fluffikinsDragon('tiny')


console.log('Split and curried : ', tinyDragon('lightning'))

