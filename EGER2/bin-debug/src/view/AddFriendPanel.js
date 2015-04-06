var AddFriendPanel = (function (_super) {
    __extends(AddFriendPanel, _super);
    function AddFriendPanel() {
        _super.call(this);
    }
    var __egretProto__ = AddFriendPanel.prototype;
    // 初始化面板
    __egretProto__.initPanel = function () {
        this.bg = new egret.Bitmap();
        this.bg.texture = this.assets.getTexture("addBg");
        this.addChild(this.bg);
        this.bg.touchEnabled = true;
        this.cancelBtn = new ImgButton("cancelBtn", this.onCancelBtnTouchTap);
        this.cancelBtn.x = this.getWidth() - this.cancelBtn.width - 10;
        this.cancelBtn.y = 10;
        this.addChild(this.cancelBtn);
    };
    __egretProto__.onCancelBtnTouchTap = function (e) {
        Global.dispatchEvent(MainNotify.closeAddFriendPanelNotify, 1, false);
    };
    return AddFriendPanel;
})(BasePanel);
AddFriendPanel.prototype.__class__ = "AddFriendPanel";
