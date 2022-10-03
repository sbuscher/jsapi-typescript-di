import "reflect-metadata";
import { injectable } from "tsyringe";
import MapView from "@arcgis/core/views/MapView";
import { MapService } from "./MapService";
import { MapOptions } from "./interfaces";


@injectable()
export class Map {
  _mapService: MapService;
  _mapView?: MapView;

  constructor(mapService: MapService) {
    this._mapService = mapService;
  }

  build = async (options: MapOptions) => {
    if (this._mapView) {
      return;
    }
    console.log("request mapview", options);
    this._mapView = await this._mapService.buildMap(options);
  }
}
