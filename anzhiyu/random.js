var posts=["2024/04/23/bug的修改/","2024/04/19/网站访问量40啦！/","2024/03/31/接入了valine评论系统/","2024/04/22/静态网页与动态网页/","2024/04/19/更新/","2024/03/27/第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };