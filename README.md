# Carousel
图片是js插入的，可以不下载图片直接复制代码，图片名称改为1-5.jpg就行

###时间匆忙鼠标移入移出未做，思路是在轮播器标签上.slider-item:hover暂停播放动画

####css
```
.slider-item:hover{
  animation-play-state:paused;
} 
```

####js中定时器函数提取出来 再加入监听鼠标移入清除定时器 鼠标移出重新加入
```
var times = setInterval(fn,3000)
slider_box.addEventListener('mouseover',e=>{
        clearInterval(times)
})

slider_box.addEventListener('mouseout',e=>{
        times = setInterval(fn,3000)
})
```
这是可以达到的，但是因为css中的动画是暂停，定时器是重新开始会造成两者时间不相等动画不同步，暂时想到是在mouseout事件中重新赋值动画。
