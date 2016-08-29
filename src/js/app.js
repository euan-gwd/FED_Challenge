(function() {
	'use strict';

	$(function() {
		getWeather();
	});

	function getWeather() {
		const weatherAPIUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
		// const weatherAPI = 'js/yql.json';
		// $.get(weatherAPI, successFn);
		$.get(weatherAPIUrl, successFn);
	}

	function successFn(data) {
		const forecasts = data.query.results.channel.item.forecast;
		const location = data.query.results.channel.item.title;
		$('.weather-app').before(`<h3>${location}</h3>`);

		$.each(forecasts, function(i, forecast) {
			$('.weather-app').append(`<ul class="forecast">
																													<li>Date:\t${forecast.date}</li>
																													<li>High:\t${forecast.high}</li>
																													<li>Low:\t${forecast.low}</li>
																													<li>${forecast.text}</li>
																													</ul>`);
		});
	}

})();
