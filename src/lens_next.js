var Lens = require("lens");

var LensNext = function(config) {
  Lens.call(this, config);
};

LensNext.Prototype = function() {
  this.getPanelFactory = function() {
    var panelSpecs = require('./panels_with_related_articles');
    return new Lens.Reader.PanelFactory(panelSpecs);
  };
};

LensNext.Prototype.prototype = Lens.prototype;
LensNext.prototype = new LensNext.Prototype();
LensNext.prototype.constructor = LensNext;

module.exports = LensNext;
