
var PanelView = require('lens').PanelView;
var ArticleRelationship = require('lens-article').nodeTypes['article_relationship'];

var RelatedArticlesView = function(document, config, viewFactory, articleDataService) {
  PanelView.call(this, document, config);

  this.document = document;
  this.viewFactory = viewFactory;
  this.articleDataService = articleDataService;

  this.$content = $('<div>').addClass('nodes');
  // TODO: this should not have class 'surface'
  this.$el.addClass('surface related_articles');

  // Hide toggle on contruction, it will be displayed once data has arrived
  this.hideToggle();
  this.$el.append(this.$content);
};

RelatedArticlesView.Prototype = function() {

  this.render = function() {
    this.$content.empty();
    var doi = this.document.get('publication_info').doi;

    var self = this;
    this.articleDataService.getRelatedArticles(doi, function(err, rels) {
      if (err) {
        console.error("Could not retrieve related articles:", err);
        return;
      }
      if (rels && rels.length > 0) self.renderRelatedArticles(rels);
    });
    return this;
  };

  this.renderRelatedArticles = function(rels) {
    this.showToggle();
    for (var i = 0; i < rels.length; i++) {
      var rel = new ArticleRelationship.Model(rels[i], this.document);
      var view = new ArticleRelationship.View(rel, this.viewFactory);
      view.render();
      this.$content[0].appendChild(view.el);
    }
  };

};

RelatedArticlesView.Prototype.prototype = PanelView.prototype;
RelatedArticlesView.prototype = new RelatedArticlesView.Prototype();
RelatedArticlesView.prototype.constructor = RelatedArticlesView;

module.exports = RelatedArticlesView;
