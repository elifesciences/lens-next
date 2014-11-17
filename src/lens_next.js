var Lens = require("lens");

var LensNext = function(config) {
  Lens.call(this, config);
};

Lens.ResourcePanelViewFactory.enableZoom = true;

var panels = Lens.getDefaultPanels();
var relatedArticlesPanel = require('./related_articles/related_articles_panel');
var extendedReferencesPanel = require('./key_references/key_references_panel');

// replace the references/citations panel
for (var i = 0; i < panels.length; i++) {
  if (panels[i].getName() === "citations") {
    panels.splice(i, 1, extendedReferencesPanel);
    break;
  }
}
// add related articles panel
panels.splice(-1, 0, relatedArticlesPanel);

LensNext.Prototype = function() {

  this.getPanels = function() {
    return panels.slice(0);
  };

};

LensNext.Prototype.prototype = Lens.prototype;
LensNext.prototype = new LensNext.Prototype();
LensNext.prototype.constructor = LensNext;

module.exports = LensNext;
