var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GridCon = (function (_super) {
    __extends(GridCon, _super);
    function GridCon(stageW, stageH) {
        _super.call(this);
        this.imgs = RES.getRes("asserts");
        this.w = 0;
        this.h = 0;
        this.spr = new egret.Sprite();
        this.maxNum = 0;
        this.curNum = 1;
        this.gridLineArr = [];
        this.w = stageW;
        this.h = stageH;
        // this.createView();
    }
    GridCon.prototype.initData = function () {
        // this.removeChildren();
        //绘制一个透明度为1的绿色矩形，宽高为100*80
        this.spr.graphics.beginFill(0xffffff, 0);
        this.spr.graphics.drawRect(0, 0, this.w, this.h);
        this.spr.graphics.endFill();
        this.spr.width = this.w;
        this.spr.height = this.h;
        this.addChild(this.spr);
        this.spr.visible = false;

        for (var i = 1; i <= 8; i++) {
            var lineGrid = new LineGrid(this.w, this.h);
            lineGrid.initData(i);
            this.addChild(lineGrid);
            lineGrid.y = -lineGrid.height * i;
            lineGrid.touchEnabled = true;
            lineGrid.touchChildren = true;
            lineGrid.addEventListener("nextGrid", this.onStarGame, this);
            this.gridLineArr.push(lineGrid);
        }
        this.maxNum = 8;
    };

    GridCon.prototype.onStarGame = function (e) {
        var lineGrid = e.currentTarget;
        this.dispatchEvent(new egret.Event("nextGrid"));
        egret.setTimeout(function () {
            this.updateGrid(lineGrid);
        }, this, 100);
    };
    GridCon.prototype.updateGrid = function (lineGrid) {
        this.maxNum++;
        this.curNum++;
        lineGrid.y = -lineGrid.height * this.maxNum;

        // lineGrid.initData(this.curNum);
        lineGrid.updateGrid(this.maxNum);

        for (var i = 1; i <= 8; i++) {
            var gridLine = this.gridLineArr[i - 1];
            gridLine.updateCurNum(this.curNum);
        }
    };

    GridCon.prototype.getWidth = function () {
        return this.spr.width;
    };

    GridCon.prototype.getHeight = function () {
        return this.spr.height;
    };
    return GridCon;
})(egret.Sprite);
