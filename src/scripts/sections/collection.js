/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
 * @namespace collection
 */

/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'fr_products',
  searchClient: algoliasearch('R1H96X79PY', '0c578e8c8229a4fa3de8ae8a04d3c088'),
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
);

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'tags',
    templates: {
      item: `
      <div class="w-full block font-lato text-sm py-2">
          <label class="checkbox-wrapper flex flex-no-wrap text-gray-500 text-sm">
              {{title}}
              <input class="mr-2 leading-tight" type="checkbox">
              <span class="checkbox-checkmark"></span>
          </label>
      </div>
      `,
    },
  }),
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
      <div class="w-full md:w-1/2 lg:w-1/3 px-4 py-4">
          <a href="https://fashion-rodzainna.myshopify.com/products/{{copy-of-short-sleeve-t-shirt}}">
              <div class="flex flex-col items-center text-center">
                  <img class="object-cover max-w-full w-full h-80 md:h-56 lg:h-product"
                  src="{{ image }}" alt="{{title}}">
                  <span class="font-unna text-xl py-2">{{title}}</span>
                  <span class="font-lato font-bold text-gray-400 text-xs">
                    {{price}}
                  </span>
              </div>
          </a>
      </div>
      `,
    },
  }),
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
);

search.start();
