var Lens = require("lens");

var LensNext = function(config) {
  Lens.call(this, config);
};

Lens.ResourcePanelViewFactory.enableZoom = true;

var panelSpecs = require('lens').defaultPanelSpecification;
panelSpecs.panels.related_articles = require('./related_articles/related_articles_panel');
panelSpecs.panels.citations = require('./key_references/key_references_panel');
panelSpecs.panelOrder = ["toc", "figures", "citations", "definitions", "related_articles", "info"];

LensNext.Prototype = function() {
  this.getPanelFactory = function() {
    return new Lens.Reader.PanelFactory(panelSpecs);
  };
};

LensNext.Prototype.prototype = Lens.prototype;
LensNext.prototype = new LensNext.Prototype();
LensNext.prototype.constructor = LensNext;

module.exports = LensNext;
