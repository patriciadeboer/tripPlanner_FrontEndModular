console.log("Hello from JavaScript index.js file");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoicGRlYm9lciIsImEiOiJjanYyajZmdHIyNTFsNDRzZDM4OHdmbTl5In0.c-CIGwdq2Kq9p1ZhZTO0Zw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(markerDomEl).setLngLat([-87.641, 41.895]).addTo(map); // [-87.641, 41.895] for Chicago
