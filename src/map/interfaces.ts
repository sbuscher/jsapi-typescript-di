export interface MapOptions {
  basemap?: string,
  container: string,
  center?: number[],
  zoom?: number
}

export interface WebMapOptions extends MapOptions {
  portalItemId: string
  portalUrl?: string,
}
