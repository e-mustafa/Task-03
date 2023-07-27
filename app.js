const geocode = require("./data/geocode");
const forecast = require("./data/forecast");

const location = process.argv[2]


geocode(location, (error, data) => {
	console.error("Error: ", error);
	console.log("data: ", data);

	if (data) {
		forecast(data.latitude, data.longitude, (error, data) => {
			console.error("Error: ", error);
			console.log("Data: ", data);
		});
	} else {
		console.error("Unable to find data for Location");
	}
});
