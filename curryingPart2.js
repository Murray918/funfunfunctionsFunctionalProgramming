const _ = require('lodash')

let dragons = [
	{ name: 'fluffikins', element: 'lightning' },
	{ name: 'noomi', element: 'lightning' },
	{ name: 'karo', element: 'fire' },
	{ name: 'doomer', element: 'timewarp' }
]
//un-curried
let hasElementUn =
	(element, obj) => obj.element === element

let lightningDragonsUn =
	dragons.filter(x => hasElementUn('lightning', x))



console.log('this example is uncurried : ', lightningDragonsUn)

let hasElement =
	_.curry((element, obj) => obj.element === element)

let lightningDragons =
	dragons.filter(hasElement('lightning'))

console.log('this example is curried with lodash :', lightningDragons)