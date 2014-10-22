var util = require("substance-util");

var ArticleDataService = function() {
  this.relationships = require('../data/relationships');
  this.keyReferences = require('../data/key_references');
};

ArticleDataService.Prototype = function() {

  // Get all key references for a particular article
  // ---------------
  // 

  this.getKeyReferences = function(articleDOI, refDOI, cb) {
    var keyRefs = this.keyReferences[articleDOI][refDOI];
    console.log(keyRefs);
    window.setTimeout(function() {
      cb(null, keyRefs);
    }, 1000);
  };

  // Get all article relationships for a particular DOI
  // ---------------
  // 

  this.getRelatedArticles = function(doi, cb) {
    var rels = this.relationships[doi];

    window.setTimeout(function() {
      cb(null, rels);
    }, 1000);
  };
};

ArticleDataService.prototype = new ArticleDataService.Prototype();

ArticleDataService.newInstance = function() {
  return new ArticleDataService();
};

module.exports = ArticleDataService;
