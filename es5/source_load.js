/**
 * Created by Administrator on 2016/8/23 0023.
 * 加载所有资源，再执行回调函数
 */
function  load (source, callback ){
    var imgEls={};
    var imgCount=source.length;
    for (var i = 0; i < imgCount; i++) {
        var name =  source[i].name;
        var newImg = new Image ();
        newImg.src = source[i].src;
        imgEls[name] = newImg;
        imgEls[name].addEventListener("load",function(){
                imgCount--;
                // 这里的意思是直到所有的资源加载完成后才执行回调函数
                // 这里就可以使用ES6中的promise.all()
                if(imgCount==0){
                callback(imgEls);
            }
        })
    }
}

