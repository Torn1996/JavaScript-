# JavaScript-
参考大佬敲的一些动画特效，纯属娱乐

框框抖动实现思路：

  1.创建一个button和div，然后给div设置css，可以试一试把position分别设置为absolute和relative，看一看效果
  
  2.然后给button设置点击事件
  
  3.设置一个定时器，动态的改变div距离top、left的距离
  
  4.设置一个清除定时器额条件
  
雪花实现思路：

  1.创建一个雪花的构造函数，其属性分别有x,y坐标，xspped,yspeed为x,y轴下降的速度，size为雪花的大小
  
  2.添加雪花的create函数并给其设置innerHTML为*,创建雪花的move函数，根据xspeed和yspeed来改边x,y坐标
  
  3.创建一个定时器，动态的执行create函数,并将创建的雪花加入到雪花数组中
  
  3.创建一个定时器，动态的执行move函数来改变雪花数组中每个雪花的x,y坐标，并根据屏幕的长，宽，将超出边界的雪花从数组以及父元素中移除
  
