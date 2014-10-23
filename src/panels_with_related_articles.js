var articleDataService = require('./article_data_service').newInstance();
var RelatedArticlesView = require('./related_articles_view');
var LensArticle = require('lens-article');
var panelSpec = require('lens').defaultPanelSpecification;
var ReferencesRenderer = require("./references_renderer");

// add a panel for related articles
panelSpec.related_articles = {
  type: 'resource',
  label: 'Related',
  title: 'Related',
  icon: 'icon-external-link',
  createPanelView: function(doc) {
    return new RelatedArticlesView(doc, panelSpec.related_articles, LensArticle.Renderer, articleDataService);
  }
};

// Use custom renderer for references (key reference support)
panelSpec.citations = {
  type: 'resource',
  container: 'citations',
  label: 'References',
  title: 'References',
  icon: 'icon-link',
  references: ['citation_reference'],
  createRenderer: function(docCtrl) {
    return new ReferencesRenderer(docCtrl, articleDataService);
  }
};

module.exports = panelSpec;
