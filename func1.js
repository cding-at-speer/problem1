const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');


function sumValue() {
	var totalValue = 0;
	fs
		.createReadStream(path.resolve(__dirname, 'text1'))
		.pipe(csv.parse({ headers: true }))
		.on('error', (error) => console.error(error))
		.on('data', (row) => {
			totalValue += Number(row.value.trim());
		})
		.on('end', () => console.log('total value: ' + totalValue));
}

sumValue();
