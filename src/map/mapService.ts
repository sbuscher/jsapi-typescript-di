import MapView from "@arcgis/core/views/MapView"
import Map from "@arcgis/core/Map";


export interface MapOptions {
  basemap: string,
  container: string,
  center: number[],
  zoom: number
}

export interface MapServiceUtils {
  create: (options: MapOptions) =>  Promise<MapView>;
}

export class MapService implements MapServiceUtils {
  constructor() {
  }

  create = async (options: MapOptions) => { 
    const map = new Map({
      basemap: options.basemap 
    });

    const view = new MapView({
      map: map,
      container: options.container,
      center: options.center,
      zoom: options.zoom
    });

    view.when(() => { console.log("Map is loaded"); });

    return new MapView(); 
  }
}