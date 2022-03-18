let layer = function (map, id) {
  this.map = map;
  this.layer = null;
  this.createLayer(id);
};

layer.prototype = {
  createLayer(id) {
    let layer = new window.esri.layers.GraphicsLayer({ id });
    this.layer = layer;
    this.map.addLayer(layer);
    layer.on("mouse-over", (e) => {
      if (e.graphic) {
        this.map.setMapCursor("pointer");
      }
    });
    layer.on("mouse-out", (e) => {
      if (e.graphic) this.map.setMapCursor("default");
    });
  },

  createPoint(item, icon) {
    let point = new window.esri.geometry.Point(
      [Number(item.longitude), Number(item.latitude)],
      this.map.spatialReference
    );
    var symbol = new window.esri.symbol.PictureMarkerSymbol(
      icon.url,
      icon.width,
      icon.height
    );
    let graphic = new window.esri.Graphic(point, symbol, item);
    this.layer.add(graphic);
    return graphic;
  },

  createPolygon(item) {
    let polygon = new window.esri.geometry.Polygon({
      rings: item.ring,
      spatialReference: this.map.spatialReference,
    });
    let lineSymbol = new window.esri.symbol.SimpleLineSymbol(
      window.esri.symbol.SimpleLineSymbol.STYLE_SOLID,
      new window.esri.Color(item.color),
      3
    );
    let color = new window.esri.Color("transparent");
    let fillSymbol = new window.esri.symbol.SimpleFillSymbol(
      window.esri.symbol.SimpleFillSymbol.STYLE_SOLID,
      lineSymbol,
      color
    );
    let graphic = new window.esri.Graphic(polygon, fillSymbol, item);
    this.layer.add(graphic);
    return graphic;
  },

  clear(layer) {
    layer.clear();
    this.map.removeLayer(layer);
  },
  clearLayer() {
    this.clear(this.layer);
  },
};

export default layer;
