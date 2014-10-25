var articleDataService = require('../article_data_service').instance();
var RelatedArticlesView = require('./related_articles_view');

var panelSpec = {
  type: 'resource',
  label: 'Related',
  title: 'Related',
  icon: 'icon-external-link',
  createPanelView: function(doc) {
    return new RelatedArticlesView(doc, panelSpec, articleDataService);
  }
};

module.exports = panelSpec;
