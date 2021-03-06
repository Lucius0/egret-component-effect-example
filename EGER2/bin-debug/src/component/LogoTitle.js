var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LogoTitle = (function (_super) {
    __extends(LogoTitle, _super);
    function LogoTitle(stageW, stageH) {
        _super.call(this);
        this.imgs = RES.getRes("asserts");
        this.imgBg = new egret.Bitmap();
        this.w = 0;
        this.h = 0;
        this.w = stageW;
        this.h = stageH;
        this.createView();
    }
    // private nameTF = new egret.TextField();
    // private descTF = new egret.TextField();
    LogoTitle.prototype.createView = function () {
        this.imgBg.texture = this.imgs.getTexture("logo2");
        this.addChild(this.imgBg);
        // this.nameTF.size = 40;
        // this.nameTF.width = 300;
        // this.nameTF.height = 200;
        // this.nameTF.x = this.imgBg.width/2 - this.nameTF.width/2;
        // this.nameTF.y = 92;
        // this.nameTF.text = "疯狂挑冰棍";
        // this.nameTF.strokeColor = 0x000000;
        // this.nameTF.stroke  = 2;
        // this.nameTF.bold = true;
        // this.nameTF.textAlign = egret.HorizontalAlign.CENTER;
        // this.addChild( this.nameTF );
        // this.descTF.size = 24;
        // this.descTF.width = 200;
        // this.descTF.height = 200;
        // this.descTF.x = this.imgBg.width/2 - this.descTF.width/2;
        // this.descTF.y = 160;
        // this.descTF.text = "重温儿时时光";
        // this.descTF.strokeColor = 0x000000;
        // this.descTF.stroke  = 2;
        // this.descTF.bold = true;
        // this.descTF.textAlign = egret.HorizontalAlign.CENTER;
        // this.addChild( this.descTF );
    };
    return LogoTitle;
})(egret.Sprite);
LogoTitle.prototype.__class__ = "LogoTitle";
