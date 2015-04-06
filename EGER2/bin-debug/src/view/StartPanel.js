var StartPanel = (function (_super) {
    __extends(StartPanel, _super);
    function StartPanel() {
        _super.call(this);
    }
    var __egretProto__ = StartPanel.prototype;
    // 初始化面板
    __egretProto__.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("bg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.logoImg = new egret.Bitmap();
        this.logoImg.texture = this.assets.getTexture("logoImg");
        this.logoImg.anchorX = 0.5;
        this.logoImg.anchorY = 1;
        this.logoImg.x = this.w / 2;
        this.logoImg.y = -350;
        ;
        this.addChild(this.logoImg);
        this.buttonBtn = new ImgButton("bigYellowBtn", this.onButtonBtnTouchTap, "按钮特效", 30);
        this.buttonBtn.x = -300;
        this.buttonBtn.y = 230;
        this.addChild(this.buttonBtn);
        this.imgBtn = new ImgButton("bigYellowBtn", this.onImgBtnTouchTap, "图片特效", 30);
        this.imgBtn.x = -300;
        this.imgBtn.y = this.buttonBtn.y + 90;
        this.addChild(this.imgBtn);
        this.panelBtn = new ImgButton("bigYellowBtn", this.onPanelBtnTouchTap, "面板特效", 30);
        this.panelBtn.x = -300;
        this.panelBtn.y = this.imgBtn.y + 90;
        this.addChild(this.panelBtn);
        this.sceneBtn = new ImgButton("bigYellowBtn", this.onSceneBtnTouchTap, "场景特效", 30);
        this.sceneBtn.x = -300;
        this.sceneBtn.y = this.panelBtn.y + 90;
        this.addChild(this.sceneBtn);
        this.tipsBtn = new ImgButton("bigYellowBtn", this.onTipsBtnTouchTap, "提示特效", 30);
        this.tipsBtn.x = -300;
        this.tipsBtn.y = this.sceneBtn.y + 90;
        this.addChild(this.tipsBtn);
        this.showTipsBtn = new ImgButton("bigYellowBtn", this.onShowTipsBtnTouchTap, "飘字特效", 30);
        this.showTipsBtn.x = -300;
        this.showTipsBtn.y = this.tipsBtn.y + 90;
        this.addChild(this.showTipsBtn);
        this.addFriendBtn = new ImgButton("addFriend", this.onAddFriendBtnTouchTap);
        this.addFriendBtn.x = 20;
        this.addFriendBtn.y = this.h - this.addFriendBtn.height - 60;
        this.addChild(this.addFriendBtn);
        this.addFriendBtn.alpha = 0;
        this.setBtn = new ImgButton("setBtn", this.onSetBtnTouchTap);
        this.setBtn.x = this.w - this.setBtn.width - 20;
        this.setBtn.y = this.h - this.setBtn.height - 60;
        this.addChild(this.setBtn);
        this.setBtn.alpha = 0;
        this.bottomCopyRight = new egret.Bitmap();
        this.bottomCopyRight.texture = this.assets.getTexture("bottomCopyRight");
        this.bottomCopyRight.x = this.w / 2 - this.bottomCopyRight.width / 2;
        this.bottomCopyRight.y = this.h - this.bottomCopyRight.height;
        this.addChild(this.bottomCopyRight);
        this.bottomCopyRight.alpha = 0;
        this.initEffect();
    };
    __egretProto__.initEffect = function () {
        egret.Tween.get(this.logoImg).to({ y: 60 + this.logoImg.height }, 600, egret.Ease.backOut);
        egret.setTimeout(function () {
            egret.Tween.get(this.buttonBtn).to({ x: this.w / 2 - this.buttonBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 1);
        egret.setTimeout(function () {
            egret.Tween.get(this.imgBtn).to({ x: this.w / 2 - this.imgBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 2);
        egret.setTimeout(function () {
            egret.Tween.get(this.panelBtn).to({ x: this.w / 2 - this.panelBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 3);
        egret.setTimeout(function () {
            egret.Tween.get(this.sceneBtn).to({ x: this.w / 2 - this.sceneBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 4);
        egret.setTimeout(function () {
            egret.Tween.get(this.tipsBtn).to({ x: this.w / 2 - this.tipsBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 5);
        egret.setTimeout(function () {
            egret.Tween.get(this.showTipsBtn).to({ x: this.w / 2 - this.showTipsBtn.width / 2 }, 600, egret.Ease.backOut);
        }, this, 150 * 6);
        egret.setTimeout(function () {
            egret.Tween.get(this.bottomCopyRight).to({ alpha: 1 }, 600);
            egret.Tween.get(this.addFriendBtn).to({ alpha: 1 }, 600);
            egret.Tween.get(this.setBtn).to({ alpha: 1 }, 600);
        }, this, 150 * 7);
    };
    __egretProto__.onButtonBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openButtonPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onImgBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openImgPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onPanelBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openPanelPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onSceneBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openScenePanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onTipsBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openTipsPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onShowTipsBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openShowTipsPanelNotify, null, false);
        Global.dispatchEvent(MainNotify.closeStartPanelNotify, null, false);
    };
    __egretProto__.onAddFriendBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openAddFriendPanelNotify, 2, false);
    };
    __egretProto__.onSetBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.openSetPanelNotify, 2, false);
    };
    return StartPanel;
})(BasePanel);
StartPanel.prototype.__class__ = "StartPanel";
