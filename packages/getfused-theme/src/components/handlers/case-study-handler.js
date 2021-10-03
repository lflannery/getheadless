const caseStudyHandler = {
    pattern: "/work",
    func: async ({ route, params, state, libraries }) => {
      const response = await libraries.source.api.get({
        endpoint: "/wp/v2/case-study",
        params: {
            per_page: 50,
            order_by: "date",
            order: "asc"
          }
      });
  

      const items = await libraries.source.populate({ response, state });

      Object.assign(state.source.data[route], {
        isPortfolioType: true,
        items: items.items,
        items
      });
      
    }
  };

  export default caseStudyHandler;