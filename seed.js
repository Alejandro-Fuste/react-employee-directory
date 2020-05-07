const axios = require('axios');
const fs = require('fs');

axios
	.get('urlhttps://randomuser.me/api/?results=20')
	.then((res) => {
		const list = { employees: res.data.results };

		fs.writeFile('./employees.json', JSON.stringify(list.employees, null, 3), (err, data) => {
			if (err) throw err;
			console.log('Wrote File!');
		});
	})
	.catch((err) => console.log(err));
