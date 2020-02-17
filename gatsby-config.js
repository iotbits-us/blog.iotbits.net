module.exports = {
  siteMetadata: {
    siteTitle: 'IOTBITS Blog',
    siteDescription: 'IOTBITS articles, notes, videos and links',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://blog.iotbits.net/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'IOTBITS', // for example - 'Ivan Ganev'
    authorDescription: 'Development Team', // short text about the author
    avatar: '/avatar.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `youtube`,
        url: `https://www.youtube.com/channel/UCWUi3F8CQTt2Cm-EEviW8mQ`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/`
      },
      {
        icon: `github`,
        url: `https://github.com/iotbits-us`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/org/iotbits`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-158635021-1'
      }
    }
  ]
};
