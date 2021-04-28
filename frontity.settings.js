const settings = {
  "name": "fronthammer",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
{
  name: "bulmatheme"
},
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://aoifeocallaghan.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
