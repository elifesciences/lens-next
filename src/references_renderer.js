var ResourceRenderer = require('lens').ResourceRenderer;
var KeyReferenceExtension = require('./key_reference_extension');

var ReferencesRenderer = function(docCtrl, articleDataService) {
  ResourceRenderer.call(this, docCtrl);
	this.articleDataService = articleDataService;
};

ReferencesRenderer.Prototype = function() {

  this.renderNodeView = function(node) {
  	var nodeView = ResourceRenderer.prototype.renderNodeView.call(this, node);
    var pubInfo = this.docCtrl.get('publication_info');
    var referenceDOI = node.doi;
    var articleDOI = pubInfo.doi;

    // check if there are key references
    this.articleDataService.getKeyReferences(articleDOI, referenceDOI, function(err, keyRefRel) {
    	if (err) {
    		console.error(err);
    		return;
    	} else if (keyRefRel) {
        var keyRefExt = new KeyReferenceExtension(nodeView, keyRefRel);
        keyRefExt.render();
      }
    });
    return nodeView;
  };
};

ReferencesRenderer.Prototype.prototype = ResourceRenderer.prototype;
ReferencesRenderer.prototype = new ReferencesRenderer.Prototype();

module.exports = ReferencesRenderer;