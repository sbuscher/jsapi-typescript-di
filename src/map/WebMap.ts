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

  build = async (webMapOptions: WebMapOptions) => {
    if (this._mapView) {
      return;
    }

    if (webMapOptions.portalUrl) {
      esriConfig.portalUrl = webMapOptions.portalUrl
    }

    // webMapOptions.map = this._createWebMap(webMapOptions.portalItemId);
    // console.log("WebMap map", webMapOptions);
    // this._mapView = await this._mapService.buildMap(webMapOptions);
    // console.log("WebMap", this._mapView);

    // return this._mapView;
  }

  _createWebMap = (portalItemId: string) => {
    return new ArcGISWebMap({
      portalItem: {
        id: portalItemId
      } 
    });
  }
}