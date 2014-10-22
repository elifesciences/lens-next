var Controller = require("substance-application").Controller;
var articleDataService = require('./article_data_service').newInstance();
var RelatedArticlesView = require('./related_articles_view');
var LensArticle = require('lens-article');
var panelSpec = require('lens').defaultPanelSpecification;
var ReferencesRenderer = require("./references_renderer");

// add a panel for related articles
panelSpec.panels.related_articles = {
  type: 'resource',
  label: 'Related',
  title: 'Related',
  icon: 'icon-external-link',
  shouldBeVisible: function() { 
    return true;
  },
  createPanelController: function() {
    // just a stub controller
    return new Controller();
  },
  createPanelView: function(docCtrl) {
    return new RelatedArticlesView(docCtrl.getDocument(), LensArticle.Renderer, articleDataService);
  }
};

// Use custom renderer for references (key reference support)
panelSpec.panels.citations = {
  type: 'resource',
  label: 'References',
  title: 'References',
  icon: 'icon-link',
  references: ['citation_reference'],
  createRenderer: function(name, docCtrl) {
    return new ReferencesRenderer(docCtrl, articleDataService);
  }
};

panelSpec.panelOrder = ["toc", "figures", "citations", "definitions", "related_articles", "info"];

module.exports = panelSpec;
