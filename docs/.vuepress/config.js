module.exports = {
    title: '米国株ガイド',
    description: '米国株高配当銘柄研究ブログ',
    plugins: {
      'sitemap': {
        hostname: 'https://kabu-guide.com/'},
      '@vuepress/google-analytics':{
          'ga': 'UA-146579530-1'
        }
    },
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
    ['meta', {
      name: "keywords",
      content: "アメリカ株, 米国株 , 初心者, 株,高配当"
    }],
    ['meta', {
      name: "og:title",
      content: "CodeRecipe"
    }],
    ['meta', {
      name: "og:description",
      content: "Pythonの初心者向けサイト"
    }],
    ['meta', {
      name: "og:type",
      content: "website"
    }],
    ['meta', {
      name: "og:url",
      content: "https://kabu-guide.com/"
    }],
    ['meta', {
      name: "og:image",
      content: "/assets/img/ogimage.png"
    }],
    ['meta', {
      name: "twitter:card",
      content: "summary"
    }],
    ['meta', {
      name: "twitter:site",
      content: "@1042limit"
    }],
    ['meta', {
      name: "twitter:url",
      content: "https://kabu-guide.com/"
    }],
    ['meta', {
      name: "og:site_name",
      content: "CodeRecipe"
    }],
    ['meta', {
      name: "twitter:image",
      content: "https://kabu-guide.com/assets/img/ogimage.png"
    }],
    ['meta', {
      name: "author",
      content: "コリ"
    }],
    ['script', {
      src: `//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`
    }]
  ],
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/blog/' }
      ]
    }
  }