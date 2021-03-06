
class GameApp extends egret.DisplayObjectContainer{
    /**
     * 加载进度界面
     */
    private loadingView:LoadingUI;
    private loadingPanel:LoadingPanel;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }

    private onAddToStage(event:egret.Event){
        egret.Injector.mapClass(RES.AnalyzerBase,RES.PropertiesAnalyzer,RES.PropertiesAnalyzer.TYPE);
        
        this.stage.addChild(GameConfig.gameScene());
        //设置加载进度界面
        this.loadingView  = new LoadingUI();
        PopUpManager.addPopUp(this.loadingView);

        //初始化Resource资源加载库
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/resource.json","resource/");
    }
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete(event:RES.ResourceEvent):void{
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
        RES.loadGroup("loading");
    }
    /**
     * preload资源组加载完成
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if(event.groupName=="preload"){
            PopUpManager.removePopUp(this.loadingPanel);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceProgress,this);
            this.createGameScene();
        }else if(event.groupName=="loading"){
            PopUpManager.removePopUp(this.loadingView);
            this.loadingPanel = new LoadingPanel();
            PopUpManager.addPopUp(this.loadingPanel);
            RES.loadGroup("preload");
        }
    }
    /**
     * preload资源组加载进度
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if(event.groupName=="preload"){
            this.loadingPanel.setProgress(event.itemsLoaded,event.itemsTotal);
        }else if(event.groupName=="loading"){
            this.loadingView.setProgress(event.itemsLoaded,event.itemsTotal);
        }
    }

    /**
     * 创建游戏场景
     */
    private createGameScene():void{

        if(GameConfig.isDebug){
            egret.Profiler.getInstance().run();
        }
        GlobalData.isEngineer = (egret.localStorage.getItem("isEngineer") == "true");

        PanelManager.initPanel();
        Global.dispatchEvent(MainNotify.openStartPanelNotify,null,false);

        Global.shareToWeiXin("EGER特效演示","EGER在手！老板再也不用担心我写不好特效啦！","http://wx.9ria.com/games/eger2","http://wx.9ria.com/games/eger2/resource/assets/icon.png");
    }

}


