import "reflect-metadata";
import { injectable } from "tsyringe";
import esriConfig from "@arcgis/core/config";
import ArcGISWebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import { MapOptions, WebMapOptions } from "./interfaces";
import { MapService } from "./MapService";

@injectable()
export class WebMap {
  _mapService: MapService;
  _mapView?: MapView;

  constructor(mapService: MapService) {
    this._mapService = mapService;
  }

  build = async (options: WebMapOptions) => {
    if (this._mapView) {
      return;
    }

    if (options.portalUrl) {
      esriConfig.portalUrl = options.portalUrl
    }

    const webmap = this._createWebMap(options.portalItemId); 

    const { basemap, container, center, zoom } = options;
    const viewOptions = {basemap: basemap, container: container, center: center, zoom: zoom}

    this._mapView = await this._mapService.buildMapView(webmap, viewOptions);
  }

  _createWebMap = (portalItemId: string) => {
    return new ArcGISWebMap({
      portalItem: {
        id: portalItemId
      } 
    });
  }
}