
var util = require("substance-util");
var articleMetaData = require("../data/article_meta_data");

var RelationshipsService = function() {
  this.data = require('../data/relationships_data');
};

RelationshipsService.Prototype = function() {

  this.getRelationShip = function(type, source, target, cb) {
    var _callback = function(result) {
      window.setTimeout(function() {
        cb(null, result);
      }, 1000);
    };

    for (var i = 0; i < this.data.length; i++) {
      var d = this.data[i];
      if (d.type === type && source === d.source && d.target === target) {
        return _callback(d);
      }
    }
    cb();
  };

  // Get all incoming relationships for a particular DOI
  // ---------------
  // 
  // Example: For research article http://dx.doi.org/10.7554/eLife.03665 give me related articles:
  // Result: ["http://dx.doi.org/10.7554/eLife.00461"]

  this.getRelationshipsForDOI = function(doi, cb) {
    var rels = [];
    var target = articleMetaData[doi];
    var source;

    if (!target) return cb();

    for (var i = 0; i < this.data.length; i++) {
      var d = this.data[i];
      if (d.target !== doi) continue;
      source = articleMetaData[d.source];
      if (!source) throw new Error("No meta data found for " + d.source);
      rels.push({
        type: 'article_relationship',
        id: util.uuid(),
        relationship_type: d.type,
        source: source,
        target: target,
        description: d.description,
        creator: d.creator
      });
    }
    window.setTimeout(function() {
      cb(null, rels);
    }, 1000);
  };
};
RelationshipsService.prototype = new RelationshipsService.Prototype();

RelationshipsService.newInstance = function() {
  return new RelationshipsService();
};

module.exports = RelationshipsService;
