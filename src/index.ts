import "reflect-metadata";
import { container } from 'tsyringe';
import { Map } from "./map/mapComponent";

const map = container.resolve(Map);

map.createMap({
  basemap: "streets-vector",
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12
});