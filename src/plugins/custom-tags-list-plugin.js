
module.exports = function blogInterceptor(...pluginArgs) {
  return {
      name:"custom-blog-plugin-tags",
      async contentLoaded({ content, allContent, actions }) {
          
        console.log("content",content)
          const { addRoute, createData } = actions;
          const { setGlobalData } = actions;
          const blogContents = allContent["docusaurus-plugin-content-blog"]["default"];
          
          const blogTags = blogContents.blogTags;
          
          var blogPosts = blogContents.blogPosts;
          blogPosts = blogPosts.slice(0,3) //get 3 recent topics
          setGlobalData({blogTags,blogPosts})
      },
  };
}

