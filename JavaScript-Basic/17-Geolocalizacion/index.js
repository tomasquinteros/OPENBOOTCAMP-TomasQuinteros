let markers, map

function initMap() {
	const posicion = {
		lat: -32.891454,
		lng: -68.869560,
	}

	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: posicion,
	})

	markers.push(
		new google.maps.Marker({
			position: {
				lat: -31.383464,
				lng: -64.180315,
			},
			map,
			title: 'Estadio el Monumental',
		})
	)
	markers.push(
		new google.maps.Marker({
			position: {
				lat: -31.474971217605614,
				lng: -64.59496518109731,
			},
			map,
			title: 'Playa de los Hipies',
		})
	)
	markers.push(
		new google.maps.Marker({
			position: {
				lat: -30.914568398909235,
				lng: -62.65536870324675,
			},
			map,
			title: 'New York',
		})
	)
}
