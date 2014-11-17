"use strict";

var ReferencesRenderer = require("./references_renderer");
var articleDataService = require('../article_data_service').instance();
var ContainerPanel = require('lens').ContainerPanel;

var panel = new ContainerPanel({
  type: 'resource',
  container: 'citations',
  label: 'References',
  title: 'References',
  icon: 'icon-link',
  references: ['citation_reference'],
  createViewFactory: function(doc) {
    return new ReferencesRenderer(doc, articleDataService);
  }
});

module.exports = panel;
