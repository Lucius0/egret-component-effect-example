  /**
    * 图片button类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * 可以有图片，文字，动画
    * todo:九宫格、多动画、图字等
    */

class ImgButton extends egret.DisplayObjectContainer{

    private textField:egret.TextField;
    private assets:egret.SpriteSheet = RES.getRes("assets");//名称不一样的话需要修改
    private btnImg:egret.Bitmap;
    private backFun:Function;
    private isPlayCartoon:Boolean = false;
    private cartoonType:number = 1;
    public isSelected:Boolean = false;
    /**
    * imgName       图片
    * backFun       点击方法 如果需要在backFun中使用this的，小心使用这个
    * descStr       按钮描述
    * fontSize      字体大小
    * cartoonType   动画类型 1:【可爱】按下变小，放开弹大 2:按下变小，放开轻微弹大 3：按下变小，放开变大
    * 注意：如果有动画的话，只有动画结束才会触发click事件
    */
    public constructor(imgName:string,backFun:Function = null,descStr:string = "",fontSize:number = 30,cartoonType:number = 1){
        super();
        this.init(imgName,backFun,descStr,fontSize,cartoonType);
    }

    private init(imgName:string,backFun:Function = null,descStr:string = "",fontSize:number = 30,cartoonType:number = 1):void {
        this.cartoonType = cartoonType;
        this.backFun = backFun;
        this.btnImg = new egret.Bitmap();
        this.btnImg.texture = this.assets.getTexture(imgName);
        this.addChild(this.btnImg);   
        this.isSelected = false;

        if(descStr != ""){
            this.textField = new egret.TextField();
            this.addChild(this.textField);
            this.textField.size = fontSize;
            this.textField.textAlign = "center";
            this.textField.stroke = 1;
            this.textField.strokeColor = 0x000000;
            this.textField.text = descStr;
            this.textField.width = this.btnImg.width;
            this.textField.x = this.btnImg.width/2 - this.textField.width/2;
            this.textField.y = this.btnImg.height/2 - this.textField.height/2;
        }
        this.touchEnabled = true;

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onbuttonTouchTap, this);
    }

    private onbuttonTouchTap(e):void {
        if(this.isPlayCartoon){
            return;
        }
        this.isPlayCartoon = true;
        var onComplete2:Function = function(){
            this.isPlayCartoon = false;
        }; 
        var onComplete1:Function = function(){
            if(this.cartoonType == 1){
                egret.Tween.get(this).to({scaleX:1,scaleY:1,x:this.x - this.btnImg.width/4,y:this.y - this.btnImg.height/4},500,egret.Ease.elasticOut).call(onComplete2,this); 
            }else if(this.cartoonType == 2){
                egret.Tween.get(this).to({scaleX:1,scaleY:1,x:this.x - this.btnImg.width/4,y:this.y - this.btnImg.height/4},500,egret.Ease.backOut).call(onComplete2,this); 
            }else if(this.cartoonType == 3){
                egret.Tween.get(this).to({scaleX:1,scaleY:1,x:this.x - this.btnImg.width/4,y:this.y - this.btnImg.height/4},100).call(onComplete2,this); 
            }
        };   
        egret.Tween.get(this).to({scaleX:0.5,scaleY:0.5,x:this.x + this.btnImg.width/4,y:this.y + this.btnImg.height/4},100,egret.Ease.sineIn).call(onComplete1,this);            

        egret.setTimeout(function () {
            if(this.backFun != null){
                this.backFun();
            } 
        }, this, 300); 
    }

    //设置选中
    public setSelect(selected:Boolean = false):void{
        if(this.isPlayCartoon){
            return;
        }
        this.isPlayCartoon = true;
        this.isSelected = selected;
        // if(selected){
        //     egret.Tween.get(this).to({scaleX:0.5,scaleY:0.5,x:this.x + this.btnImg.width/4,y:this.y + this.btnImg.height/4},100,egret.Ease.sineIn);            
        // }else{
        //     egret.Tween.get(this).to({scaleX:1,scaleY:1,x:this.x - this.btnImg.width/4,y:this.y - this.btnImg.height/4},100,egret.Ease.sineIn);            
        // }
        egret.setTimeout(function () {
            this.isPlayCartoon = false;
        }, this, 100);         
    }

    //设置文本
    public setText(str:string = ""):void{
        this.textField.text = str;
    }

    public getBitmap():egret.Bitmap{
        return this.btnImg;
    }
}
