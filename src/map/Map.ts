import "reflect-metadata";
import { injectable } from "tsyringe";
import ArcGISMap from "@arcgis/core/Map";
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

    let map: ArcGISMap;

    map = options.basemap ?
      new ArcGISMap({ basemap: options.basemap }) :
      new ArcGISMap()

    this._mapView = await this._mapService.buildMapView(map, options);
  }
}
