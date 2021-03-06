var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Board = (function (_super) {
    __extends(Board, _super);
    function Board(stageW, stageH) {
        _super.call(this);
        this.imgs = RES.getRes("asserts");
        this.w = 0;
        this.h = 0;
        this.spr = new egret.Sprite();
        this.bestCoreDescTF = new egret.TextField();
        this.bestCoreTF = new egret.TextField();
        this.cureScoreDescTF = new egret.TextField();
        this.cureScoreTF = new egret.TextField();
        this.noticeTF = new egret.TextField();
        this.w = stageW;
        this.h = stageH;
        this.createView();
    }
    Board.prototype.createView = function () {
        this.removeChildren();

        //绘制一个透明度为1的绿色矩形，宽高为100*80
        this.spr.graphics.beginFill(0xffbf00, 1);
        this.spr.graphics.drawRect(0, 0, this.w, this.h);
        this.spr.graphics.endFill();
        this.spr.width = this.w;
        this.spr.height = this.h;
        this.addChild(this.spr);

        // this.spr.alpha = 0;
        var tfSize = 24;

        this.bestCoreDescTF.size = tfSize;
        this.bestCoreDescTF.x = 125;
        this.bestCoreDescTF.y = 0;
        this.bestCoreDescTF.textColor = 0x000000;
        this.bestCoreDescTF.text = "最高分数：";

        // this.bestCoreDescTF.strokeColor = 0x000000;
        // this.bestCoreDescTF.stroke  = 1;
        this.bestCoreDescTF.bold = true;
        this.bestCoreDescTF.textAlign = egret.HorizontalAlign.CENTER;
        this.bestCoreDescTF.y = 40;
        this.addChild(this.bestCoreDescTF);

        this.bestCoreTF.size = tfSize;
        this.bestCoreTF.x = 240;
        this.bestCoreTF.y = 40;

        // this.bestCoreTF.textColor = 0x000000;
        this.bestCoreTF.strokeColor = 0x000000;
        this.bestCoreTF.stroke = 2;
        this.bestCoreTF.bold = true;
        this.bestCoreTF.text = "0";
        this.bestCoreTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.bestCoreTF);

        this.cureScoreDescTF.size = tfSize;
        this.cureScoreDescTF.x = 125;
        this.cureScoreDescTF.y = 80;
        this.cureScoreDescTF.textColor = 0x000000;
        this.cureScoreDescTF.text = "用时：";

        // this.cureScoreDescTF.strokeColor = 0x000000;
        // this.cureScoreDescTF.stroke  = 1;
        this.cureScoreDescTF.bold = true;
        this.cureScoreDescTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.cureScoreDescTF);

        this.cureScoreTF.size = tfSize;
        this.cureScoreTF.x = 240;
        this.cureScoreTF.y = 80;

        // this.cureScoreTF.textColor = 0x000000;
        this.cureScoreTF.text = "0";
        this.cureScoreTF.strokeColor = 0x000000;
        this.cureScoreTF.stroke = 2;
        this.cureScoreTF.bold = true;
        this.cureScoreTF.textAlign = egret.HorizontalAlign.CENTER;
        this.addChild(this.cureScoreTF);

        this.noticeTF.size = tfSize;
        this.noticeTF.x = 125;
        this.noticeTF.y = 118;
        this.noticeTF.textColor = 0x000000;
        this.noticeTF.lineSpacing = 17;

        // this.noticeTF.strokeColor = 0x000000;
        // this.noticeTF.stroke  = 1;
        this.noticeTF.bold = true;
        this.noticeTF.text = "全国排名xxx位\n击败了全国88%的网友\n获得称号：灵敏手指";
        this.noticeTF.textAlign = egret.HorizontalAlign.LEFT;
        this.addChild(this.noticeTF);

        this.shareBtn = new LineUI(300, 72, "叫上基友一块玩", "gun02_2");
        this.shareBtn.x = this.spr.width / 2 - this.shareBtn.width / 2 + 8 + 25;
        this.shareBtn.y = 260;
        this.addChild(this.shareBtn);
        this.shareBtn.touchEnabled = true;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareBtnTouchTap, this);

        this.retryBtn = new LineUI(300, 72, "再耍一次", "gun02_2");
        this.retryBtn.x = this.spr.width / 2 - this.retryBtn.width / 2 + 8 + 25;
        this.retryBtn.y = 340;
        this.addChild(this.retryBtn);
        this.retryBtn.touchEnabled = true;
        this.retryBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRetryBtnTouchTap, this);
    };
    Board.prototype.onShareBtnTouchTap = function (e) {
        this.dispatchEvent(new egret.Event("onShare"));
    };
    Board.prototype.onRetryBtnTouchTap = function (e) {
        this.dispatchEvent(new egret.Event("onRetry"));
    };
    Board.prototype.setScore = function (score) {
        this.cureScoreTF.text = "" + score + "";
    };
    Board.prototype.setMaxScore = function (score) {
        this.bestCoreTF.text = "" + score + "";
    };
    Board.prototype.setNotice = function (str) {
        this.noticeTF.text = str;
    };

    Board.prototype.showCratoon = function () {
        this.bestCoreDescTF.x = 500;
        this.bestCoreTF.x = 500;
        this.cureScoreDescTF.x = 500;
        this.cureScoreTF.x = 500;
        this.noticeTF.x = 500;
        this.shareBtn.x = 500;
        this.retryBtn.x = 500;

        egret.Tween.get(this.bestCoreDescTF).to({ x: 100 }, 200, egret.Ease.backInOut);
        egret.Tween.get(this.bestCoreTF).to({ x: 215 }, 300, egret.Ease.backInOut);
        egret.Tween.get(this.cureScoreDescTF).to({ x: 100 }, 400, egret.Ease.backInOut);
        egret.Tween.get(this.cureScoreTF).to({ x: 215 }, 500, egret.Ease.backInOut);
        egret.Tween.get(this.noticeTF).to({ x: 100 }, 600, egret.Ease.backInOut);
        egret.Tween.get(this.shareBtn).to({ x: this.spr.width / 2 - this.shareBtn.width / 2 + 8 }, 700, egret.Ease.backInOut);
        egret.Tween.get(this.retryBtn).to({ x: this.spr.width / 2 - this.retryBtn.width / 2 + 8 }, 800, egret.Ease.backInOut);
    };

    Board.prototype.hideCratoon = function () {
        egret.Tween.get(this.bestCoreDescTF).to({ x: -500 }, 200, egret.Ease.backInOut);
        egret.Tween.get(this.bestCoreTF).to({ x: -500 }, 300, egret.Ease.backInOut);
        egret.Tween.get(this.cureScoreDescTF).to({ x: -500 }, 400, egret.Ease.backInOut);
        egret.Tween.get(this.cureScoreTF).to({ x: -500 }, 500, egret.Ease.backInOut);
        egret.Tween.get(this.noticeTF).to({ x: -500 }, 600, egret.Ease.backInOut);
        egret.Tween.get(this.shareBtn).to({ x: -500 }, 700, egret.Ease.backInOut);
        egret.Tween.get(this.retryBtn).to({ x: -500 }, 800, egret.Ease.backInOut);
    };
    return Board;
})(egret.Sprite);
Board.prototype.__class__ = "Board";
