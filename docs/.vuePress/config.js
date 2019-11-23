module.exports = {
  "title": "Maple",
  "description": "咸鱼划水",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "历史",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "Maple",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Map1es",
            "icon": "reco-github"
          },
          {
            "text": "掘金",
            "link": "https://juejin.im/user/5b21273de51d4506847351e8",
            "icon": "reco-juejin"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "ywj",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}