//window.onload=function(){};页面加载完成触发一些事件
window.onload = function () {
    var li = document.querySelectorAll("#nav li");
    var on = true;
    //length-1长度减一
    li[li.length - 1].onclick = function () {
        for (var i = 0; i < li.length; i++) {
            var n = i - li.length / 2;
            /*或者var n= i-6;*/
            if (on) {
                n = n * 15;
            } else {
                n = 360
            }

            li[i].style.transform = "rotateZ(" + n + "deg)";
        }
        on = !on;
    };

    for (var i = 0; i < li.length - 1; i++) {
        li[i].index = i;
        li[i].onclick = function () {
            //当前点击的导航;旋转至0度;
            this.style.transform = "rotate(0deg)";


            //当前点击的导航的左边的导航；依次旋转；
            console.log(this.index);
            //当前点击的左边的旋转度数；
            var leftdeg = 0;
            for (var i = this.index - 1; i >= 0; i--) {
                var leftdeg = leftdeg - 15;
                li[i].style.transform = "rotate(" + leftdeg + "deg)";
            }

            //当前点击的右边元素;
            var rightdeg = 15;
            for (var i = this.index + 1; i < li.length; i++) {
                var rightdeg = rightdeg + 15;
                li[i].style.transform = "rotate(" + rightdeg + "deg)";
            }

        }
    }


};
