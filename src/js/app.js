(function() {
	'use strict';

	$(function() {
		getWeather();
		$('.btn-draw').on('click', function() {
			randomize();
		});
		challenge3();
	});

	function getWeather() {
		const weatherAPIUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
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
	} /*end getWeather*/

	function randomize() {
		const drawItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

		for (let counter = 0; counter < 7; counter++) {
			let winner = Math.floor(Math.random() * counter);
			let shuffle = drawItems[counter];
			drawItems[counter] = drawItems[winner];
			drawItems[winner] = shuffle;
		}
		$('.random-number-app').empty();
		$.each(drawItems, function(i, drawItem) {
			$('.random-number-app').append(`<p class="prize">${drawItem}</p>`);
		});
		$('.random-number-app p:nth-last-child(-n+3)').remove();

	} /*end randomize*/

	function challenge3() {
		let swapper = {
			title: 'this is a sample string',
			onSwap() {
				var string = this.title;
				return string.split('').reverse().join('');
			}
		};
		$('.reverse-string-app').append(`<p>${swapper.title}</p>`);
		$('.reverse-string-app').append(`<p>${swapper.onSwap()}</p>`);
	} /*end challenge3*/

})();
