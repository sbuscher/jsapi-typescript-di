import MapView from "@arcgis/core/views/MapView";
import { singleton } from "tsyringe";
import ArcGISMap from "@arcgis/core/Map"
import { MapOptions } from "./interfaces";


@singleton()
export class MapService {
  constructor() {
  }

  _mapView?: MapView;

  buildMapView = async (map: ArcGISMap, options: MapOptions) => {
    this._mapView = new MapView({ map, ...options });
    await this._mapView.when();

    return this._mapView;
  } 
}