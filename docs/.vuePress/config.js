module.exports = {
  "title": "Maple",
  "description": "欢迎讨论，不喜勿喷",
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
    "themePicker": false,
    "author": "Maple",
    "startYear": "2019",
    "record": '粤ICP备19046597号',
    "valineConfig": {
      "appId": '20zdtmWhgFMvmSpDa0jdWnLM-gzGzoHsz',// your appId
      "appKey": 'ze3QpuCF431T1gpRTgO9r7Fd', // your appKey
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    ["@vuepress-reco/vuepress-plugin-screenfull", false], // disabled.
    ["@vuepress-reco/vuepress-plugin-loading-page", false] // disabled.
  ]
}