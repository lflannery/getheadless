const teamHandler = {
    pattern: "/about/team",
    func: async ({ route, params, state, libraries }) => {
      const response = await libraries.source.api.get({
        endpoint: "/wp/v2/team",
        params: {
            per_page: 50,
            order_by: 'post_title',
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

  export default teamHandler;