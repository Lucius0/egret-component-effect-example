var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid(typeStr, num) {
        _super.call(this);
        this.imgs = RES.getRes("asserts");
        this.lineImg = new egret.Bitmap();
        this.num = 0;
        this.typeStr = "";
        this.spr = new egret.Sprite();
        this.grid = new egret.Shape();
        this.bg = new egret.Bitmap();
        this.img = new egret.Bitmap();
        this.curNum = 0;
        this.typeStr = typeStr;
        this.num = num;
        this.createView(typeStr, num);
    }
    Grid.prototype.createView = function (typeStr, num) {
        this.img.texture = this.imgs.getTexture(typeStr + num);
        this.addChild(this.img);

        // img.x = this.spr1.width/2 - img.width/2;
        // this.lineImg.texture = this.imgs.getTexture("sp_"+num);
        // this.addChild(this.lineImg);
        // if(num == 1){
        //     this.grid.graphics.beginFill(0x000000, 1);
        // }else{
        //     this.grid.graphics.beginFill(0xFFFFFF, 1);
        // }
        // this.grid.graphics.drawRect(0, 0, 116, 200);
        // this.grid.graphics.endFill();
        // this.grid.width = 116;
        // this.grid.height = 200;
        // this.addChild( this.grid );
        // // this.lineImg.touchEnabled = true;
        //绘制一个透明度为1的绿色矩形，宽高为100*80
        this.spr.graphics.beginFill(0xff0000, 0);
        this.spr.graphics.drawRect(0, 0, 116, 200);
        this.spr.graphics.endFill();
        this.spr.width = 116;
        this.spr.height = 200;
        this.addChild(this.spr);

        // this.spr.visible = false;
        this.spr.touchEnabled = true;

        this.spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChange, this);
    };

    Grid.prototype.onChange = function () {
        if (this.num == 4) {
            this.num = 1;
        } else {
            this.num = this.num + 1;
        }
        this.img.texture = this.imgs.getTexture(this.typeStr + this.num);
        this.dispatchEvent(new egret.Event("step"));
    };
    Grid.prototype.setNum = function (num) {
        this.img.texture = this.imgs.getTexture(this.typeStr + num);
    };
    Grid.prototype.getNum = function () {
        return this.num;
    };

    Grid.prototype.setCurNum = function (num) {
        this.curNum = num;
    };

    Grid.prototype.getCurNum = function () {
        return this.curNum;
    };

    Grid.prototype.updateDateNum = function (num) {
        // this.lineImg.texture = this.imgs.getTexture("sp_"+num);
        this.grid.graphics.clear();
        if (num == 1) {
            this.grid.graphics.beginFill(0x000000, 1);
        } else {
            this.grid.graphics.beginFill(0xFFFFFF, 1);
        }
        this.grid.graphics.drawRect(0, 0, 116, 200);
        this.grid.graphics.endFill();
        this.grid.width = 116;
        this.grid.height = 200;

        this.num = num;
    };

    Grid.prototype.warning = function () {
        this.spr.visible = true;
        egret.setTimeout(function () {
            this.spr.visible = false;
        }, this, 100);
        egret.setTimeout(function () {
            this.spr.visible = true;
        }, this, 200);
        egret.setTimeout(function () {
            this.spr.visible = false;
        }, this, 300);
        egret.setTimeout(function () {
            this.spr.visible = true;
        }, this, 400);
        egret.setTimeout(function () {
            this.spr.visible = false;
        }, this, 500);
        // egret.setTimeout(function () {
        //     this.spr.visible = true;
        // }, this, 600);
    };

    Grid.prototype.reset = function () {
        this.spr.visible = false;
    };
    return Grid;
})(egret.Sprite);
Grid.prototype.__class__ = "Grid";
