import "reflect-metadata";
import { injectable } from "tsyringe";
import MapView from "@arcgis/core/views/MapView"
import { MapService, MapOptions } from "./mapService"


@injectable()
export class Map {
  _mapService: MapService;
  _mapView?: MapView;

  constructor(mapService: MapService) {
    this._mapService = mapService;
  }

  createMap = async (options: MapOptions) => {
    this._mapView = await this._mapService.create(options)
  }
}
