module.exports = {
    title: '风之博客',
    description: '做一个内外兼修的程序员',
    base: '/blog/',
    themeConfig: {
      // logo: '/public/img/logo.png',
      nav: [
        { text: '主页', link: '/' },
        { text: '总结', link: '/bugfree/' },
        { text: '读书', link: '/book/' },
        { text: '刷题', link: '/leetcode/' },
        
      ],
      sidebar: 'auto'
      // sidebar: {
      //   '/home/book': [
      //     '',     /* /foo/ */
      //     'three'
      //   ],
      //   '/bugfree/': [
      //     '',     /* /foo/ */
      //     'one',  /* /foo/one.html */
      //     'two'   /* /foo/two.html */
      //   ],
  
      //   '/book/': [
      //     '',      /* /bar/ */
      //     'three', /* /bar/three.html */
      //   ]
      // }

      // sidebar:[
      //  {
      //     title: '总结->bugfree',   // 必要的
      //     path: '/bugfree/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       '',
      //       'one.md',
      //       'two.md'
      //     ]
      //   },
      //   {
      //     title: '读书->内外兼修',
      //     path: '/book/', 
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       '/'
      //     ]
      //   },
      //   {
      //     title: '刷题->保持思考',
      //     path:'/leetcode/',
      //     collapsable: false, // 可选的, 默认值是 true,
      //     sidebarDepth: 1,    // 可选的, 默认值是 1
      //     children: [
      //       '/'
      //     ]
      //   }
      // ]
    },
    
    
  }