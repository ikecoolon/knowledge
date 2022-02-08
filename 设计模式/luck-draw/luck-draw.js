//假设旋转效果是后台提供的

(function () {
    let turnplate = {
        restaraunts: [],               //大转盘奖品名称
        colors: [],                    //大转盘奖品区块对应背景颜色
        outsideRadius: 193,            //大转盘外圆的半径 192
        textRadius: 155,               //大转盘奖品位置距离圆心的距离
        insideRadius: 68,          //大转盘内圆的半径
        startAngle: 0,             //开始角度
        bRotate: false             //false:停止;ture:旋转
    };

    function LuckDraw(options, dom) {

        if (!(this instanceof LuckDraw)) {
            console.error('请使用 new 构建 LuckDraw');
            return;
        }
        this.options = options ? Object.assign(turnplate, options) : options;
        this.dom = dom;
        //渲染转盘
        this.drawWheel();
        return this;

    }

    LuckDraw.prototype = {
        drawWheel: function () {
            let canvas = this.dom;
            if (canvas.getContext) {

                let ctx = canvas.getContext('2d');
                let canvasW = canvas.width;
                let canvasH = canvas.height;
                let baseAngle=turnplate.startAngle;
                //每个奖项所占角度数
                let arc = Math.PI * 2 / turnplate.restaraunts.length;
                //清楚默认背景
                ctx.clearRect(0, 0, canvasW, canvasH);
                //设置线颜色
                ctx.strokeStyle = '#FFBE04';
                //设置字体字号
                ctx.font = '16px Microsoft YaHei';
                for (let i = 0; i < turnplate.restaraunts.length; i++) {

                    let angle = turnplate.startAngle * i;
                    ctx.fillStyle = turnplate.colors[i];//设置每个扇形颜色
                    ctx.beginPath();//开始绘制
                    //arc(x,y,r起始角，结束角，绘制方向)
                    ctx.arc(canvasW * 0.5, canvasH * 0.5, turnplate.outsideRadius, angle, angle + turnplate.startAngle, false);//绘制外圈
                    ctx.arc(canvasW * 0.5, canvasH * 0.5, turnplate.insideRadius, angle + turnplate.startAngle, angle, true);//绘制外圈
                    ctx.stroke();
                    ctx.fill();
                    //锁画布
                    ctx.save();

                    //----绘制奖品-----
                    ctx.fillStyle = "#FFF";//奖品文字颜色
                    let text = turnplate.restaraunts[i];
                    let line_height = 17;
                    // translate方法重新映射画布上的 (0,0) 位置
                    let translateX = canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * turnplate.textRadius;
                    let translateY = canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * turnplate.textRadius;
                    ctx.translate(translateX, translateY);
                    // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
                    // angle，当前扇形自身旋转的角度 +  baseAngle / 2 中心线多旋转的角度  + 垂直的角度90°
                    ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);
                    //设置文本位置，居中显示
                    ctx.fillText(text, -ctx.measureText(text).width / 2, 100);
                    //添加对应图标
                    // if(index == 0){
                    //     ctx.drawImage(imgUrl1,-35,0,60,60);
                    // }else if(index == 1){
                    //     ctx.drawImage(imgUrl2,-35,0,60,60);
                    // }else if(index == 2){
                    //     ctx.drawImage(imgUrl3,-35,0,60,60);
                    // }else if(index == 3){
                    //     ctx.drawImage(imgUrl4,-35,0,60,60);
                    // }else if(index == 4){
                    //     ctx.drawImage(imgUrl5,-35,0,60,60);
                    // }else{
                    //     ctx.drawImage(imgUrl6,-35,0,60,60);
                    // }

                    //把当前画布返回（调整）到上一个save()状态之前
                    ctx.restore();
                    //----绘制奖品结束----
                }
            }

        },
        run: function () {


            // let angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length * 2));
            // if (angles < 270) {
            //     angles = 270 - angles;
            // } else {
            //     angles = 360 - angles + 270;
            // }
            //开始转动
            this.options.bRotate = true;
            if (this.options.bRotate) {
                this.dom.style.transform = 'rotate(0deg)';
            }


        },
        stop: function () {

        },
        timout: function () {

        },
        speedup: function () {

        },

        slowdown: function () {

        },
        uniform: function () {

        }

    };

    window.LuckDraw = LuckDraw;
})();



