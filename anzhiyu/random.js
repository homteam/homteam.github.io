var posts=["2025/02/16/DIY蓝牙音响/","2024/04/23/bug的修改/","2024/06/10/从0创建一个免费图床/","2024/06/09/如何用hexo创建博客/","2024/03/31/接入了valine评论系统/","2024/04/19/更新/","2024/03/27/第一篇文章/","2024/04/19/网站访问量40啦！/","2024/04/22/静态网页与动态网页/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };