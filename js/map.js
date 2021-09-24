function initMap(){
	var opt={
		center: {lat: 49.2396074, lng:28.5098205},
			zoom: 15
		}
	var map = new google.maps.Map(document.getElementById("map"), opt);

	const image = {
		href: "../img/Vector.svg",
		// Цей маркер має ширину 20 пікселів і висоту 32 пікселі.
		size: new google.maps.Size(20, 32),
		// Початком цього зображення є (0, 0).
		origin: new google.maps.Point(0, 0),
		// Якіром для цього зображення є основа флагштока на (0, 32).
		anchor: new google.maps.Point(0, 32),
	};

	var marker = new google.maps.Marker({
		position: {lat: 49.2396074, lng:28.5098205},
		map: map,
		title: "Новый берег",
		icon: image,
	})
}