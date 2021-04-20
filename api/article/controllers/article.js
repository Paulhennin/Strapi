'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  findByCategory: async ctx => {
    const { name } = ctx.params;
    return await strapi.query('article').find({ "categories.name_contains": name });
  },
  findOneWithSuggest: async ctx => {
    //On récupère les paramètres de route
    const { id } = ctx.params;

    //On récupère l'article correspondant à l'id
    const article = await strapi.query('article').findOne({id});

    //On stocke les ids de catégories de l'article dans un nouveau tableau
    const category_ids = article.categories.map(category => category.id);

    //On récupère les articles (hors celui récupéré) correspondants aux catégories de l'article précédemment récupéré que l'on limite à 2 articles
    article.suggest = await strapi.query('article').find({"id_ne": article.id, "categories.id_in": category_ids, _limit: 2 })
    return article;
  }
};
