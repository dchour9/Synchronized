var data = require("../newEventData.json");

exports.addEvent = function(req, res){
    console.log(data);
    res.render('createNewEvent', data);

    if (req.query.name && req.query.date) {
    	var newEvent = {"name" : req.query.name,
						"date" : req.query.date,
						"image": req.query.image,
						"id": "",
						"setIMG": "settings.png"
						}
	data["projects"].push(newEvent);
	}
	else {

	}
}