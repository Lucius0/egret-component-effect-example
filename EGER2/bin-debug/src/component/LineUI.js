var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LineUI = (function (_super) {
    __extends(LineUI, _super);
    function LineUI(w, h, descStr, skinStr) {
        _super.call(this);
        this.imgs = RES.getRes("asserts");
        this.lineImg = new egret.Bitmap();
        this.descTF = new egret.TextField();
        this.w = 0;
        this.h = 0;
        this.w = w;
        this.h = h;
        this.descStr = descStr;
        this.skinStr = skinStr;
        this.createView();
    }
    LineUI.prototype.createView = function () {
        this.lineImg.texture = this.imgs.getTexture(this.skinStr);
        this.addChild(this.lineImg);

        var scale9Grid = new egret.Rectangle(25, 25, 20, 20);
        this.lineImg.scale9Grid = scale9Grid;
        this.lineImg.width = this.w;
        this.lineImg.height = this.h;

        if (this.descStr != "") {
            this.descTF.size = 24;
            this.descTF.width = 300;

            // this.descTF.height = 200;
            // this.descTF.x = this.lineImg.width/2 - this.descTF.width/2;
            this.descTF.y = 20;
            this.descTF.text = this.descStr;
            this.descTF.strokeColor = 0x000000;
            this.descTF.stroke = 2;
            this.descTF.bold = true;
            this.descTF.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.descTF);
        }
    };

    LineUI.prototype.getW = function () {
        return this.w;
    };

    LineUI.prototype.getH = function () {
        return this.h;
    };
    return LineUI;
})(egret.Sprite);
LineUI.prototype.__class__ = "LineUI";
