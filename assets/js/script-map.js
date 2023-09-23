

var mymap = L.map('maCarte').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mymap);

L.marker([51.5, -0.09]).addTo(mymap)
    .bindPopup('Alexandre Gbamele Service')
    .openPopup();