function FakeControl() { }

/* Old Control API */
FakeControl.prototype.addTo = function() {}
/* New Control API */
FakeControl.prototype.onAdd = function() {}
FakeControl.prototype.onRemove = function() {}

module.exports = Object.assign({}, require('mapbox-gl'), {
  Map: require('./classes/map'),
  NavigationControl: FakeControl,
  ScaleControl: FakeControl,
  AttributionControl: FakeControl,
  GeolocateControl: FakeControl
});
