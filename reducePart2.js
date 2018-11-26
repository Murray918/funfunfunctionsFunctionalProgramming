const fs = require('fs')

//this section is reduce part two
const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.trim().split('  '))
    .reduce((customers, line) => {
        // console.log(line)
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})
console.log(JSON.stringify(output, null, 2))
