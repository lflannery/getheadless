const settings = {
  "name": "getfused-frontity",
  "state": {
    "frontity": {
      "url": "https://comparisonsite.wpengine.com/",
      "title": "Test Frontity Site",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "getfused-theme",
      "state": {
        "theme": {}
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://comparisonsite.wpengine.com/",
          "params": {
            "per_page": 16,
            "order_by": "date",
            "order": "desc",
            "type": ["post"],
          },
          "homepage": "/home",
          "postsPage": "/blog",
          "postTypes": [
              {
                  "type": "case-study",
                  "endpoint": "case-study",
                  "archive": "/work"
              },
              {
                "type": "team",
                "endpoint": "team",
                "archive": "/about/team"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
