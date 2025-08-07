// Initialize default Leaflet map (Web Mercator)
const map = L.map('map').setView([45.4642, 9.19], 17);

// Add OpenStreetMap base layer (optional)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>',
}).addTo(map);

// Add cadastral WMS overlay — note: no 'crs' param needed!
const cadastralLayer = L.tileLayer.wms('https://wms.cartografia.agenziaentrate.gov.it/inspire/wms/ows01.php', {
  layers: 'province,CP.CadastralZoning,CP.CadastralParcel,fabbricati,strade,acque,vestizioni',
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  opacity: 0.7,
  crs: L.CRS.EPSG4326
}).addTo(map);
