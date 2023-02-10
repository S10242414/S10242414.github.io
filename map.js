var stores = [  {    name: "MacRitchie Nature Trail: Store 1",    lat: 1.3521,    lng: 103.8198  },  {    name: "Saint Andrew's Road: Store 2",    lat: 1.2904,    lng: 103.8520  }];

var map = L.map("map").setView([1.3521, 103.8198], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
}).addTo(map);

for (var i = 0; i < stores.length; i++) {
  var store = stores[i];
  L.marker([store.lat, store.lng]).addTo(map)
    .bindPopup(store.name)
    .openPopup();
}
