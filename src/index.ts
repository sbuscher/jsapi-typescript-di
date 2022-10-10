import "reflect-metadata";
import { container } from 'tsyringe';
import { Map } from "./map/Map";
import { WebMap } from "./map/WebMap";

// const map = container.resolve(Map);

// map.build({
//   basemap: "streets-vector",
//   container: "viewDiv",
//   center: [-118.244, 34.052],
//   zoom: 12
// });

const webmap = container.resolve(WebMap);

const webMapOptions = {
  container: "viewDiv",
  portalItemId: "e691172598f04ea8881cd2a4adaa45ba",
  center: [-118.244, 34.052],
  zoom: 12
}

webmap.build(webMapOptions);
console.log(webmap.map?.portalItem);