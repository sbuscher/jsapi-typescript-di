import ArcGISMapView from "@arcgis/core/views/MapView";
import { singleton } from "tsyringe";
import ArcGISMap from "@arcgis/core/Map"
import { MapOptions, WebMapOptions } from "./interfaces";
import MapView from "esri/views/MapView";


@singleton()
export class MapService {
  constructor() {
  }

  buildMap = async (options: MapOptions) => { 
    let map: ArcGISMap;

    map = options.basemap ?
      new ArcGISMap({ basemap: options.basemap }) :
      new ArcGISMap()

    const view = new ArcGISMapView({ 
      map: map,
      ...options
    });

    console.log("creating mapview", view);

    await view.when(() => { console.log("Map is loaded"); });

    return view;
  }
}