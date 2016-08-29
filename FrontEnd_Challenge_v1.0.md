# Front-end Interview Challenge

Complete the following **4** challenges. Feel free to approach and present the solutions in any way you like.

Please do not hesitate to let us know if anything is unclear.

#### 1. DOM & AJAX
Use JavaScript, jQuery, HTML, CSS and the free weather API endpoint below to get the API data and iterate through the 'query.results.channel.forecast' array. Stamp each object’s ‘date’, ‘high’, ‘low’ and ‘text’ properties into the DOM.

```URL
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
```

### 2. Number generator
Using JavaScript, make a function that will create 7 random unique numbers between 0 and 9. 

#### 3. Object extension
Extend the JavaScript String object with an additional method that return the reverse of a string.

#### 4. DOM Positioning
Centre the text string “I’m Centered” in a DIV element that is 100px by 100px.