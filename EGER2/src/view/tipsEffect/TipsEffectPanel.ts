
class TipsEffectPanel extends BasePanel{

    public constructor(){
        super();
    }

    private bg:egret.Bitmap;
    private menuBtn:ImgButton;
    private setBtn:ImgButton; 
    private btn1:ImgButton;    
    private btn2:ImgButton;    
    private btn3:ImgButton;    
    private btn4:ImgButton;    
    private btn5:ImgButton;    
    private btn6:ImgButton;    
    private btn7:ImgButton;    
    private btn8:ImgButton;    
    private btn9:ImgButton;    
    private btn10:ImgButton;    
    private bottomCopyRight:egret.Bitmap;
    // 初始化提示
    public initPanel():void{
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);   
        this.bg.touchEnabled = true;   

        this.menuBtn = new ImgButton("menueBtn",this.onMenuBtnTouchTap,"",30,1);
        this.menuBtn.x = 20;
        this.menuBtn.y = 20;
        this.addChild(this.menuBtn); 
        this.menuBtn.alpha = 0;

        this.setBtn = new ImgButton("setBtn",this.onSetBtnTouchTap);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = 20;    
        this.addChild(this.setBtn);
        this.setBtn.alpha = 0;

        this.btn1 = new ImgButton("bigYellowBtn",this.onbtn1TouchTap,"提示特效1",30);
        this.btn1.x = -300;
        this.btn1.y = 40;        
        this.addChild(this.btn1);

        this.btn2 = new ImgButton("bigYellowBtn",this.onbtn2TouchTap,"提示特效2",30);
        this.btn2.x = -300;
        this.btn2.y = this.btn1.y + 90;        
        this.addChild(this.btn2);

        this.btn3 = new ImgButton("bigYellowBtn",this.onbtn3TouchTap,"提示特效3",30);
        this.btn3.x = -300;
        this.btn3.y = this.btn2.y + 90;         
        this.addChild(this.btn3);

        this.btn4 = new ImgButton("bigYellowBtn",this.onbtn4TouchTap,"提示特效4",30);
        this.btn4.x = -300;
        this.btn4.y = this.btn3.y + 90;           
        this.addChild(this.btn4);

        this.btn5 = new ImgButton("bigYellowBtn",this.onbtn5TouchTap,"待续",30);
        this.btn5.x = -300;
        this.btn5.y = this.h/2 - this.btn5.height/2;   
        this.btn5.y = this.btn4.y + 90;          
        this.addChild(this.btn5);

        this.btn6 = new ImgButton("bigYellowBtn",this.onbtn6TouchTap,"待续",30);
        this.btn6.x = -300;
        this.btn6.y = this.h/2 - this.btn6.height/2;   
        this.btn6.y = this.btn5.y + 90;          
        this.addChild(this.btn6);

        this.btn7 = new ImgButton("bigYellowBtn",this.onbtn7TouchTap,"待续",30);
        this.btn7.x = -300;
        this.btn7.y = this.h/2 - this.btn7.height/2;   
        this.btn7.y = this.btn6.y + 90;          
        this.addChild(this.btn7);

        this.btn8 = new ImgButton("bigYellowBtn",this.onbtn8TouchTap,"待续",30);
        this.btn8.x = -300;
        this.btn8.y = this.h/2 - this.btn8.height/2;   
        this.btn8.y = this.btn7.y + 90;          
        this.addChild(this.btn8);

        this.btn9 = new ImgButton("bigYellowBtn",this.onbtn9TouchTap,"待续",30);
        this.btn9.x = -300;
        this.btn9.y = this.h/2 - this.btn9.height/2;   
        this.btn9.y = this.btn8.y + 90;          
        this.addChild(this.btn9);

        this.btn10 = new ImgButton("bigYellowBtn",this.onbtn10TouchTap,"待续",30);
        this.btn10.x = -300;
        this.btn10.y = this.h/2 - this.btn10.height/2;   
        this.btn10.y = this.btn9.y + 90;          
        this.addChild(this.btn10);

        TipsManager.addTips(this.btn1,"没有动画tips！",0);        
        TipsManager.addTips(this.btn2,"从下到上渐现",1);        
        TipsManager.addTips(this.btn3,"从左向右",2);        
        TipsManager.addTips(this.btn4,"从右向左",3);        

        this.bottomCopyRight = new egret.Bitmap();
        this.bottomCopyRight.texture = this.assets.getTexture("bottomCopyRight");
        this.bottomCopyRight.x = this.w/2 - this.bottomCopyRight.width/2;
        this.bottomCopyRight.y = this.h - this.bottomCopyRight.height;
        this.addChild(this.bottomCopyRight);  
        this.bottomCopyRight.alpha = 0;

        this.initEffect();
    }

    private initEffect():void{
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn1).to({x:this.w/2 - this.btn1.width/2},600,egret.Ease.backOut); 
        }, this, 150*1);         
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn2).to({x:this.w/2 - this.btn2.width/2},600,egret.Ease.backOut); 
        }, this, 150*2);   
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn3).to({x:this.w/2 - this.btn3.width/2},600,egret.Ease.backOut); 
        }, this, 150*3);   
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn4).to({x:this.w/2 - this.btn4.width/2},600,egret.Ease.backOut); 
        }, this, 150*4);   
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn5).to({x:this.w/2 - this.btn5.width/2},600,egret.Ease.backOut); 
        }, this, 150*5);   
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn6).to({x:this.w/2 - this.btn6.width/2},600,egret.Ease.backOut); 
        }, this, 150*6);     
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn7).to({x:this.w/2 - this.btn7.width/2},600,egret.Ease.backOut); 
        }, this, 150*7);     
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn8).to({x:this.w/2 - this.btn8.width/2},600,egret.Ease.backOut); 
        }, this, 150*8);     
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn9).to({x:this.w/2 - this.btn9.width/2},600,egret.Ease.backOut); 
        }, this, 150*9);     
        egret.setTimeout(function () {              
            egret.Tween.get(this.btn10).to({x:this.w/2 - this.btn10.width/2},600,egret.Ease.backOut); 
        }, this, 150*10);   
        egret.setTimeout(function () {              
            egret.Tween.get(this.bottomCopyRight).to({alpha:1},600); 
            egret.Tween.get(this.menuBtn).to({alpha:1},600); 
            egret.Tween.get(this.setBtn).to({alpha:1},600);
        }, this, 150*11);           
        
    }

    public onbtn1TouchTap(e:egret.TouchEvent):void{
        if(GlobalData.isEngineer){
            Global.alert("用法",'TipsManager.addTips(this.btn1,"没有动画tips！",0); ',null,1);
        }  
    }

    public onbtn2TouchTap(e:egret.TouchEvent):void{
        if(GlobalData.isEngineer){
            Global.alert("用法",'TipsManager.addTips(this.btn2,"从下到上渐现",1);',null,1);
        }  
    }

    public onbtn3TouchTap(e:egret.TouchEvent):void{
        if(GlobalData.isEngineer){
            Global.alert("用法",'TipsManager.addTips(this.btn3,"从左向右",2); ',null,1);
        }  
    }

    public onbtn4TouchTap(e:egret.TouchEvent):void{
        if(GlobalData.isEngineer){
            Global.alert("用法",'TipsManager.addTips(this.btn4,"从右向左",3); ',null,1);
        }  
    }

    public onbtn5TouchTap(e:egret.TouchEvent):void{
        
    }

    public onbtn6TouchTap(e:egret.TouchEvent):void{
        
    }

    public onbtn7TouchTap(e:egret.TouchEvent):void{
        // Global.alert("提示","我是一个提示栗子，哈哈",null,6);
    }

    public onbtn8TouchTap(e:egret.TouchEvent):void{
        // Global.alert("提示","我是一个提示栗子，哈哈",null,6);
    }

    public onbtn9TouchTap(e:egret.TouchEvent):void{
        // Global.alert("提示","我是一个提示栗子，哈哈",null,6);
    }

    public onbtn10TouchTap(e:egret.TouchEvent):void{
        // Global.alert("提示","我是一个提示栗子，哈哈",null,6);
    }

    private onMenuBtnTouchTap():void{
        Global.dispatchEvent(MainNotify.openStartPanelNotify,null,false);
        Global.dispatchEvent(MainNotify.closePanelPanelNotify,null,false);            
    }

    public onSetBtnTouchTap(e:egret.TouchEvent):void{
        Global.dispatchEvent(MainNotify.openSetPanelNotify,2,false);
    }
}

