
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Animation=laya.display.Animation,Animator=laya.d3.component.Animator,BoundBox=laya.d3.math.BoundBox;
	var Box=laya.ui.Box,Browser=laya.utils.Browser,Button=laya.ui.Button,Camera=laya.d3.core.Camera,Clip=laya.ui.Clip;
	var Component=laya.ui.Component,ComponentNode=laya.d3.core.ComponentNode,Dialog=laya.ui.Dialog,Event=laya.events.Event;
	var EventDispatcher=laya.events.EventDispatcher,Handler=laya.utils.Handler,Image=laya.ui.Image,Label=laya.ui.Label;
	var Laya3D=Laya.Laya3D,Loader=laya.net.Loader,LocalStorage=laya.net.LocalStorage,Mesh=laya.d3.resource.models.Mesh;
	var MeshSprite3D=laya.d3.core.MeshSprite3D,MouseManager=laya.events.MouseManager,Pool=laya.utils.Pool,Quaternion=laya.d3.math.Quaternion;
	var RenderState=laya.d3.core.render.RenderState,ResourceVersion=laya.net.ResourceVersion,Scene=laya.d3.core.scene.Scene;
	var Script=laya.d3.component.Script,SoundManager=laya.media.SoundManager,Sprite=laya.display.Sprite,Sprite3D=laya.d3.core.Sprite3D;
	var Stage=laya.display.Stage,StandardMaterial=laya.d3.core.material.StandardMaterial,StaticBatchManager=laya.d3.graphics.StaticBatchManager;
	var Transform3D=laya.d3.core.Transform3D,Tween=laya.utils.Tween,Vector3=laya.d3.math.Vector3,View=laya.ui.View;
Laya.interface('com.bdoggame.interfaces.IText');
Laya.interface('com.bdoggame.interfaces.IScene');
/**
*http://www.baddog-game.com/custom
*@author Jayden
*/
//class com.bdoggame.GameSDK
var GameSDK=(function(){
	function GameSDK(){
		this.mVideoReady=false;
		EventCenter.instance.on("COIN_VIDEO",this,GameSDK.onCoinVideo);
		EventCenter.instance.on("REVIVE_VIDEO",this,GameSDK.onReviveVideo);
		EventCenter.instance.on("BANNER_HIDE",this,GameSDK.onHideBanner);
		EventCenter.instance.on("BANNER_SHOW",this,GameSDK.onShowBanner);
		EventCenter.instance.on("ON_RANK",this,GameSDK.onRank);
	}

	__class(GameSDK,'com.bdoggame.GameSDK');
	GameSDK.init=function(){
		Browser.window.GameSDK=GameSDK;
	}

	GameSDK.addGameOver=function(func){
		EventCenter.instance.on("gameover",this,func);
	}

	GameSDK.removeGameOver=function(func){
		EventCenter.instance.on("gameover",this,func);
	}

	GameSDK.event=function(type,data){
		EventCenter.instance.event(type,data);
	}

	GameSDK.revive=function(){
		EventCenter.instance.event("revive");
	}

	GameSDK.start=function(){
		EventCenter.instance.event("start");
	}

	GameSDK.pause=function(){
		EventCenter.instance.event("pause");
	}

	GameSDK.resume=function(){
		EventCenter.instance.event("resume");
	}

	GameSDK.onCoinVideo=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onCoinVideo");
			console.log("ricardo onCoinVideo android");
			}else{
			console.log("ricardo onCoinVideo else");
		}
	}

	GameSDK.onRank=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onRank");
			console.log("ricardo onRank android");
			}else{
			console.log("ricardo onRank else");
		}
	}

	GameSDK.updateScore=function(score){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("updateScore",score);
			console.log("ricardo updateScore android");
			}else{
			console.log("ricardo updateScore else");
		}
	}

	GameSDK.onReviveVideo=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("onReviveVideo");
			console.log("ricardo onReviveVideo android");
			}else{
			console.log("ricardo onReviveVideo else");
		}
	}

	GameSDK.onShowBanner=function(){
		if (Browser.onAndroid){
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("showBannerAd");
			console.log("ricardo onShowBanner android");
			}else{
			console.log("ricardo onShowBanner else");
		}
	}

	GameSDK.onHideBanner=function(){
		if (Browser.onAndroid){
			console.log("ricardo onHideBanner android");
			var func=Laya.PlatformClass.createClass("demo.MainActivity");
			func.call("hideBannerAd");
			}else{
			console.log("ricardo onHideBanner else");
		}
	}

	GameSDK.eventCoinVideo=function(result){
		console.log("ricardo eventCoinVideo "+result);
		if (result==1){
			EventCenter.instance.event("COIN_VIDEO_BACK");
		}
	}

	GameSDK.eventReviveVideo=function(result){
		console.log("ricardo eventReviveVideo "+result);
		if (result==1){
			EventCenter.instance.event("REVIVE_VIDEO_BACK");
			}else if (result==0){
			EventCenter.instance.event("REVIVE_VIDEO_BACK_FAIL");
		}
	}

	GameSDK.eventVideoReady=function(result){
		this.mVideoReady=result;
		EventCenter.instance.event("VIDEO_READY",result);
	}

	GameSDK.getVideoReady=function(){
		return this.mVideoReady;
	}

	GameSDK.REVIVE="revive";
	GameSDK.START="start";
	GameSDK.GAME_OVER="gameover";
	GameSDK.mHomeShowed=false;
	GameSDK.ON_COIN_VIDEO="COIN_VIDEO";
	GameSDK.ON_RANK="ON_RANK";
	GameSDK.ON_REVIVE_VIDEO="REVIVE_VIDEO";
	GameSDK.EVENT_COIN_VIDEO="COIN_VIDEO_BACK";
	GameSDK.EVENT_REVIVE_VIDEO="REVIVE_VIDEO_BACK";
	GameSDK.EVENT_REVIVE_VIDEO_FAIL="REVIVE_VIDEO_BACK_FAIL";
	GameSDK.BANNER_SHOW="BANNER_SHOW";
	GameSDK.BANNER_HIDE="BANNER_HIDE";
	GameSDK.VIDEO_READY="VIDEO_READY";
	GameSDK.PAUSE="pause";
	GameSDK.RESUME="resume";
	return GameSDK;
})()


/**
*http://www.baddog-game.com/custom
*@author
*/
//class com.bdoggame.Global
var Global=(function(){
	function Global(){}
	__class(Global,'com.bdoggame.Global');
	Global.STAGE_WIDTH=750;
	Global.STAGE_HEIGHT=1334;
	Global.param=null;
	return Global;
})()


/**
*...
*@author http://www.baddog-game.com/custom
*/
//class com.bdoggame.Player
var Player=(function(){
	function Player(s){
		this.sprite=null;
		this.ani=null;
		this.downAni=null;
		this.downAniSprite=null;
		this.velocityY=0;
		this.power=false;
		var _$this=this;
		this.sprite=s;
		this.sprite.transform.localScale=new Vector3(0.8,0.8,0.8);
		this.ani=(this.sprite.getChildByName("Role")).getComponentByType(Animator);
		this.downAniSprite=(this.sprite.getChildByName("Goingdown"));
		this.ani.on("complete",this,function(){
			_$this.ani.stop();
		});
		this.stopFire();
	}

	__class(Player,'com.bdoggame.Player');
	var __proto=Player.prototype;
	__proto.jump=function(){
		if (this.ani._actionName=="Jump")return;
		this.ani._actionName="Jump";
		this.ani.play("Jump");
	}

	__proto.angry=function(){
		if (this.ani._actionName=="Angry")return;
		this.ani._actionName="Angry";
		this.ani.play("Angry");
	}

	__proto.down=function(){
		if (this.ani._actionName=="Down")return;
		this.ani._actionName="Down";
		this.ani.play("Down");
	}

	__proto.stopFire=function(){
		this.downAniSprite.active=false;
		this.power=false;
	}

	__proto.fire=function(){
		if (this.power)return;
		this.power=true;
		this.angry();
		this.downAniSprite.active=true;
	}

	//});
	__proto.die=function(){
		if (this.ani._actionName=="Death")return;
		this.ani._actionName="Death";
		this.ani.play("Death");
	}

	return Player;
})()


//class LayaAir3D
var LayaAir3D=(function(){
	function LayaAir3D(){
		Laya3D.init(750,1334,true);
		Laya.stage.bgColor="#484B58";
		GameSDK.init();
		if(Browser.onMobile)Laya.stage.screenMode="vertical";
		Laya.stage.scaleMode="fixedwidth";
		Laya.stage.addChild(LayerManager.instance);
		LayerManager.instance.sceneLayer.addChild(SceneManager.instance);
		Laya.stage.on("resize",this,this.onResize);
		ResourceVersion.enable("version.json",Handler.create(this,this.beginLoad),2);
		MouseManager.multiTouchEnabled=false;
	}

	__class(LayaAir3D,'LayaAir3D');
	var __proto=LayaAir3D.prototype;
	__proto.beginLoad=function(){
		console.log("ricardo beginload "+new Date().getMilliseconds());
		Laya.loader.create([
		{url:"LayaScene_JumpDown/JumpDown.ls","type":Scene}
		,{url:"LayaScene_Role/Role.lh"}
		,{url:"res/atlas/home.atlas","type":"atlas"}
		,{url:"res/atlas/settle.atlas","type":"atlas"}
		,{url:"LayaScene_JumpCircle/JumpCircle.lh"}
		,{url:"LayaScene_JumpCircleBig/JumpCircleBig.lh"}]
		,Handler.create(this,this.onCreateComplete));
	}

	__proto.onResize=function(){
		if (Laya.stage.canvasRotation)return;
		LayerManager.instance.resize();
		SceneManager.instance.centerX=0;
		SceneManager.instance.width=750;
		LayerManager.instance.tipDialogLayer.centerX=0;
		LayerManager.instance.tipDialogLayer.width=750;
	}

	__proto.onCreateComplete=function(){
		console.log("ricardo onCreateComplete "+new Date().getMilliseconds());
		Laya.loader.load([
		{url:"res/atlas/game.atlas",type:"atlas"}
		,{url:"game/BG.png",type:"image"}]
		,Handler.create(this,this.onLoadComplete));
	}

	__proto.onLoadComplete=function(){
		console.log("ricardo onLoadComplete "+new Date().getMilliseconds());
		var homeView=HomeView.instance();
		homeView.setCoin();
		SceneManager.instance.replaceScene(homeView);
	}

	return LayaAir3D;
})()


/**
*...
*@author Youqi
*/
//class com.bdoggame.EventCenter extends laya.events.EventDispatcher
var EventCenter=(function(_super){
	function EventCenter(){
		EventCenter.__super.call(this);
	}

	__class(EventCenter,'com.bdoggame.EventCenter',_super);
	__getset(1,EventCenter,'instance',function(){
		if (EventCenter._instance==null)EventCenter._instance=new EventCenter();
		return EventCenter._instance;
	},laya.events.EventDispatcher._$SET_instance);

	EventCenter._instance=null;
	return EventCenter;
})(EventDispatcher)


/**
*...
*@author http://www.baddog-game.com/custom
*/
//class com.bdoggame.DropCircle extends laya.d3.component.Script
var DropCircle=(function(_super){
	function DropCircle(){
		this.trans=null;
		this.life=0;
		this.initialAngle=0;
		this.dir=new Vector3();
		DropCircle.__super.call(this);
	}

	__class(DropCircle,'com.bdoggame.DropCircle',_super);
	var __proto=DropCircle.prototype;
	__proto._load=function(owner){
		laya.d3.component.Component3D.prototype._load.call(this,owner);
		this.trans=(owner).transform;
	}

	__proto.start=function(){
		this.life=800;
		var a=this.initialAngle+this.trans.localRotationEuler.y-90;
		this.dir.x=Math.cos(a / 180 *Math.PI)*2;
		this.dir.y=-4;
		this.dir.z=-Math.sin(a / 180 *Math.PI)*2;
	}

	__proto._update=function(state){
		var _$this=this;
		laya.d3.component.Component3D.prototype._update.call(this,state);
		if (this.life <=0)return;
		this.life-=Laya.timer.delta;
		this.trans.translate(this.dir,false);
		this.trans.rotate(DropCircle.rotate);
		if (this.life <=0)Laya.timer.frameOnce(1,this,function(){
			_$this.owner.destroy();
		});
	}

	__proto.dis=function(){
		this.owner.destroy();
	}

	__static(DropCircle,
	['rotate',function(){return this.rotate=new Vector3(0.01,0,0);}
	]);
	return DropCircle;
})(Script)


/**
*...
*@author http://www.baddog-game.com/custom
*/
//class com.bdoggame.PlayCompleteAndRemove extends laya.d3.component.Script
var PlayCompleteAndRemove=(function(_super){
	function PlayCompleteAndRemove(){
		this.aniName=null;
		this.ani=null;
		PlayCompleteAndRemove.__super.call(this);
	}

	__class(PlayCompleteAndRemove,'com.bdoggame.PlayCompleteAndRemove',_super);
	var __proto=PlayCompleteAndRemove.prototype;
	//}
	__proto._load=function(owner){
		laya.d3.component.Component3D.prototype._load.call(this,owner);
		this.ani=(owner.getChildAt(0)).getComponentByType(Animator);
		this.ani.on("complete",this,function(){
			(owner).active=false;
		});
	}

	__proto.play=function(){
		this.ani.play(this.aniName);
		(this.owner).active=true;
	}

	return PlayCompleteAndRemove;
})(Script)


/**
*...
*@author Youqi
*/
//class com.bdoggame.mananger.LayerManager extends laya.ui.Component
var LayerManager=(function(_super){
	function LayerManager(){
		this.sceneLayer=null;
		this.menuLayer=null;
		this.windowLayer=null;
		this.tipsLayer=null;
		this.guideLayer=null;
		this.loadingProgress=null;
		this.tipDialogLayer=null;
		this.popupviewLayer=null;
		LayerManager.__super.call(this);
		this.sceneLayer=new Component();
		this.menuLayer=new Component();
		this.windowLayer=new Component();
		this.tipsLayer=new Component();
		this.guideLayer=new Component();
		this.loadingProgress=new Component();
		this.tipDialogLayer=new Component();
		this.popupviewLayer=new Component();
		this.sceneLayer.mouseThrough=true;
		this.menuLayer.mouseThrough=true;
		this.windowLayer.mouseThrough=true;
		this.tipsLayer.mouseThrough=true;
		this.guideLayer.mouseThrough=true;
		this.loadingProgress.mouseThrough=true;
		this.tipDialogLayer.mouseThrough=true;
		this.popupviewLayer.mouseThrough=true;
		this.full(this);
		this.full(this.sceneLayer);
		this.full(this.menuLayer);
		this.full(this.windowLayer);
		this.full(this.tipsLayer);
		this.full(this.guideLayer);
		this.full(this.loadingProgress);
		this.full(this.tipDialogLayer);
		this.full(this.popupviewLayer);
		this.addChild(this.sceneLayer);
		this.addChild(this.menuLayer);
		this.addChild(this.windowLayer);
		this.addChild(this.popupviewLayer);
		this.addChild(this.tipsLayer);
		this.addChild(this.guideLayer);
		this.addChild(this.loadingProgress);
		this.addChild(this.tipDialogLayer);
	}

	__class(LayerManager,'com.bdoggame.mananger.LayerManager',_super);
	var __proto=LayerManager.prototype;
	//sceneLayer.optimizeFloat=true;
	__proto.resize=function(){
		this.full(this);
		this.full(this.sceneLayer);
		this.full(this.menuLayer);
		this.full(this.windowLayer);
		this.full(this.tipsLayer);
		this.full(this.guideLayer);
		this.full(this.loadingProgress);
		this.full(this.tipDialogLayer);
		this.full(this.popupviewLayer);
	}

	__proto.full=function(box){
		box.bottom=box.top=box.right=box.left=0;
	}

	__getset(1,LayerManager,'instance',function(){
		if (LayerManager._instance==null)LayerManager._instance=new LayerManager();
		return LayerManager._instance;
	},laya.ui.Component._$SET_instance);

	LayerManager._instance=null;
	return LayerManager;
})(Component)


/**
*@author Jayden
*@time 2013-12-30 下午9:22:11
*
*/
//class laya.customUI.JMornText extends laya.ui.Component
var JMornText=(function(_super){
	function JMornText(clipSkin,offset,clipNum,registerMap,offestMap){
		this._alignWidth=NaN;
		this._clips=null;
		this._clipSkin=null;
		//皮肤
		this._clipNum=0;
		this._registerString=null;
		this._baseRegister=null;
		//内置注册
		this._registerMap=null;
		//外置注册表
		this._text=null;
		this._offset=0;
		this._offestMap=null;
		this._container=null;
		this._align="left";
		(clipSkin===void 0)&& (clipSkin="");
		(offset===void 0)&& (offset=0);
		(clipNum===void 0)&& (clipNum=10);
		JMornText.__super.call(this);
		this._clipSkin=clipSkin;
		this._clipNum=clipNum;
		this.mouseEnabled=false;
		this._container=new Component();
		this.addChild(this._container);
		this.text="";
		this._clips=[];
		this._baseRegister={};
		this._offset=offset;
		this._registerMap=registerMap ? registerMap :{};
		if(offestMap){
			this._offestMap={};
			for (var i in offestMap){
				this._offestMap[this.getIndex(i)]=offestMap[i];
			}
		}
	}

	__class(JMornText,'laya.customUI.JMornText',_super);
	var __proto=JMornText.prototype;
	Laya.imps(__proto,{"com.bdoggame.interfaces.IText":true})
	__proto.changePos=function(){
		var tempX=0;
		var offset=0;
		var preOffsetHalf=0
		for (var i=0;i < this._clips.length;i++){
			offset=this.getOffest(this._clips[i].index);
			this._clips[i].x=tempX+offset / 2;
			tempX+=this._clips[i].width+offset;
		}
		if(this._alignWidth){
			switch(this._align){
				case "center":
					this._container.x=(this._alignWidth-this._container.width)/ 2;
					break ;
				case "right":
					this._container.x=this._alignWidth-this._container.width;
					break ;
				default :
					this._container.x=0;
					break ;
				}
		}
	}

	__proto.getOffest=function(index){
		if(this._offestMap && this._offestMap[index]){
			return this._offestMap[index];
		}
		return this._offset;
	}

	__proto.update=function(){
		this.setClipNum(this._text.length);
		var str;
		for (var i=0;i < this._text.length;i++){
			this._clips[i].index=this.getIndex(this._text.substr(i,1));
		}
		if(this._offestMap){
			this.callLater(this.changePos);
		}
		else{
			if(this._alignWidth){
				switch(this._align){
					case "center":
						this._container.x=(this._alignWidth-this._container.width)/ 2;
						break ;
					case "right":
						this._container.x=this._alignWidth-this._container.width;
						break ;
					default :
						this._container.x=0;
						break ;
					}
			}
		}
	}

	__proto.setClipNum=function(length){
		var num=length-this._clips.length;
		for (var i=0;i < this._clips.length;i++){
			this._container.addChild(this._clips[i]);
		}
		if(num==0)return;
		if(num > 0){
			for (i=0;i < num;i++){
				var clip=new Clip();
				clip.skin=this._clipSkin;
				clip.clipX=this._clipNum
				this._clips.push(clip);
				this._container.addChild(clip);
			}
			this.callLater(this.changePos);
		}
		else{
			for (var j=this._clips.length+num;j < this._clips.length;j++){
				this._clips[j].removeSelf();
			}
		}
	}

	__proto.skinChange=function(){
		var tempX=0;
		for (var i=0;i < this._clips.length;i++){
			this._clips[i].skin=this._clipSkin;
			this._clips[i].clipX=this._clipNum;
		}
		this.changePos();
	}

	//获取在clip的第几帧
	__proto.getIndex=function(str){
		var index=this._baseRegister[str];
		if(this._registerMap[str] !=undefined)index=this._registerMap[str];
		return index;
	}

	__proto.dispose=function(){
		var clip;
		while(this._clips.length){
			clip=this._clips.shift();
			clip.destroy();
		}
	}

	__getset(0,__proto,'text',function(){
		return this._text;
		},function(value){
		if(this._text==value)return;
		if(!this._clipSkin)return;
		this._text=value;
		this.callLater(this.update);
	});

	__getset(0,__proto,'align',function(){
		return this._align;
		},function(value){
		if(this._align==value)return;
		this._align=value;
		this.callLater(this.changePos);
	});

	// }
	__getset(0,__proto,'clipSkin',function(){
		return this._clipSkin;
		},function(value){
		if(this._clipSkin==value)return;
		this._clipSkin=value;
		this.callLater(this.skinChange);
	});

	__getset(0,__proto,'offset',function(){
		return this._offset;
		},function(value){
		if(this._offset==value)return;
		this._offset=value;
		this.callLater(this.changePos);
	});

	__getset(0,__proto,'skin',function(){
		return this.clipSkin;
		},function(value){
		this.clipSkin=value;
	});

	__getset(0,__proto,'incText',function(){
		return this.text;
		},function(value){
		this.text=value;
	});

	__getset(0,__proto,'width',_super.prototype._$get_width,function(value){
		Laya.superSet(Component,this,'width',value);
		this._alignWidth=value;
	});

	__getset(0,__proto,'clipNum',function(){
		return this._clipNum;
		},function(value){
		this._clipNum=value;
		this.callLater(this.skinChange);
	});

	__getset(0,__proto,'registerString',function(){
		return this._registerString;
		},function(value){
		this._registerString=value;
		if (this._registerString==null || this._registerString=="")return;
		for (var i=0;i < this._registerString.length;i++){
			this._registerMap[this._registerString.charAt(i)+""]=i;
		}
		this.callLater(this.update);
	});

	JMornText.CENTER="center";
	JMornText.LEFT="left";
	JMornText.RIGHT="right";
	return JMornText;
})(Component)


/**
*...
*@author Youqi
*/
//class com.bdoggame.mananger.SceneManager extends laya.ui.Box
var SceneManager=(function(_super){
	function SceneManager(){
		this._currentScene=null;
		this._sceneList=null;
		this._bg=null;
		this._img=null;
		SceneManager.__super.call(this);
		this._sceneList=[];
		this.bottom=this.top=0;
		this._img=new Image();
		this._img.width=750;
		this._img.height=1334;
		this.addChild(this._img);
	}

	__class(SceneManager,'com.bdoggame.mananger.SceneManager',_super);
	var __proto=SceneManager.prototype;
	//}
	__proto.replaceScene=function(scene){
		this._sceneList.length=0;
		this._replaceScene(scene);
	}

	__proto.pushScene=function(scene){
		if(this._currentScene==scene)return;
		if(this._currentScene){
			this._sceneList.push(this._currentScene);
		}
		return this._replaceScene(scene);
	}

	__proto.popScene=function(){
		if(this._sceneList.length <=0)return;
		var s=this._sceneList.pop();
		this._replaceScene(s);
	}

	__proto.checkCurrentScene=function(cla){
		return Laya.__typeof(this._currentScene,cla);
	}

	__proto._replaceScene=function(scene){
		Dialog.manager.closeAll();
		if (this._currentScene){
			if (Laya.__typeof(this._currentScene,'com.bdoggame.interfaces.IScene'))(this._currentScene).exit();
			this.removeChild(this._currentScene);
		}
		scene.top=scene.bottom=0;
		this.addChild(scene);
		this._currentScene=scene;
		if (Laya.__typeof(scene,'com.bdoggame.interfaces.IScene'))(scene).enter();
	}

	__proto.showScene=function(visi){
		if (this._currentScene)this._currentScene.visible=visi;
		this._img.visible=!visi;
	}

	__getset(0,__proto,'currentScene',function(){
		return this._currentScene;
	});

	__getset(0,__proto,'bg',function(){
		return this._bg;
		},function(value){
		if (this._bg==value)return;
		this._bg=value;
		this._img.skin=this._bg;
	});

	__getset(1,SceneManager,'instance',function(){
		if (SceneManager._instance==null)SceneManager._instance=new SceneManager();
		return SceneManager._instance;
	},laya.ui.Box._$SET_instance);

	SceneManager._instance=null;
	return SceneManager;
})(Box)


//class ui.GameViewUI extends laya.ui.View
var GameViewUI=(function(_super){
	function GameViewUI(){
		this.labelScore=null;
		this.imgWarning=null;
		GameViewUI.__super.call(this);
	}

	__class(GameViewUI,'ui.GameViewUI',_super);
	var __proto=GameViewUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(GameViewUI.uiView);
	}

	GameViewUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"top":0,"skin":"game/BG.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":128,"skin":"game/Mask.png","scaleY":-1,"right":0,"left":0}},{"type":"Image","props":{"skin":"game/Mask.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"y":120,"x":0,"top":120,"skin":"game/Mask.png","scaleY":-1,"right":0,"left":0}},{"type":"Image","props":{"y":-2,"skin":"game/Point_BG.png","centerX":0}},{"type":"Label","props":{"y":60,"x":329,"width":92,"var":"labelScore","text":"label","height":30,"fontSize":30,"font":"黑体","color":"#ffffff","align":"center"}},{"type":"Image","props":{"y":1214,"x":0,"skin":"game/Mask.png","right":0,"left":0,"bottom":0}},{"type":"Image","props":{"var":"imgWarning","top":0,"skin":"game/JumpDown_Screen.png","right":0,"left":0,"bottom":0}}]};
	return GameViewUI;
})(View)


//class ui.HomeViewUI extends laya.ui.View
var HomeViewUI=(function(_super){
	function HomeViewUI(){
		this.btnStart=null;
		this.btnWelfare=null;
		this.labCoins=null;
		this.btnRank=null;
		HomeViewUI.__super.call(this);
	}

	__class(HomeViewUI,'ui.HomeViewUI',_super);
	var __proto=HomeViewUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeViewUI.uiView);
	}

	HomeViewUI.uiView={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"x":0,"skin":"home/homebg.png","bottom":0}},{"type":"Button","props":{"x":180,"var":"btnStart","skin":"home/btnstart.png","bottom":480}},{"type":"Button","props":{"x":180,"visible":false,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":300}},{"type":"Image","props":{"width":200,"visible":false,"top":50,"skin":"home/toolsbg.png","left":20},"child":[{"type":"Image","props":{"y":3,"x":17,"skin":"home/revivecoins.png","scaleY":0.5,"scaleX":0.5}},{"type":"Label","props":{"y":27,"x":137,"var":"labCoins","text":"0/5","fontSize":40,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"x":95,"top":197,"skin":"home/logo.png"}},{"type":"Image","props":{"x":1,"width":750,"skin":"settle/bg_revive.png","bottom":0}},{"type":"Button","props":{"y":1221,"x":323,"var":"btnRank","skin":"home/imgrank.png","bottom":10}}]};
	return HomeViewUI;
})(View)


//class ui.PlayerUI extends laya.ui.View
var PlayerUI=(function(_super){
	function PlayerUI(){
		this.ani=null;
		PlayerUI.__super.call(this);
	}

	__class(PlayerUI,'ui.PlayerUI',_super);
	var __proto=PlayerUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(PlayerUI.uiView);
	}

	PlayerUI.uiView={"type":"View","props":{"width":67,"height":67},"child":[{"type":"Animation","props":{"y":0,"x":0,"var":"ani","source":"Role.ani"}}]};
	return PlayerUI;
})(View)


/**
*...
*@author http://www.baddog-game.com/custom
*/
//class com.bdoggame.GameView extends ui.GameViewUI
var GameView=(function(_super){
	function GameView(){
		this.scene=null;
		this.mainCamera=null;
		this.material=null;
		this.downX=NaN;
		this.pillarBound=null;
		this.container=null;
		this.jumpCircle=null;
		this.jumpCircleBig=null;
		this.container2d=null;
		this.material_pillar=null;
		this.material_pillars=null;
		this.mesh_pillar=null;
		this.mesh_wall=null;
		this.mesh_h=NaN;
		this.mesh_r=NaN;
		this.mesh_cube=null;
		this.mesh_cubetrap=null;
		this.player=null;
		this.minY=0;
		this.playerPrevY=0;
		this.jumpSpeed=4;
		this.gravity=0.15;
		this.maxSpeed=8;
		this.circleList=[];
		this.wallList=[];
		this.pillarsList=[];
		this.curH=NaN;
		this.combo=0;
		this.material_pillar2=null;
		this.wallHeight=NaN;
		this.prevR=0;
		this._score=0;
		this.circles=0;
		this.isPause=false;
		this.debug=false;
		this.mesh_pillar_h=0;
		this.mRevived=false;
		this.mHighScore=0;
		GameView.__super.call(this);
		this.on("display",this,this.onAdd);
		EventCenter.instance.on("revive",this,this.gameStart,[true]);
		this.mHighScore=LocalStorage.getItem("HIGH_SCORE")==null?0:LocalStorage.getItem("HIGH_SCORE");
	}

	__class(GameView,'com.bdoggame.GameView',_super);
	var __proto=GameView.prototype;
	__proto.onAdd=function(){
		var _$this=this;
		this.container2d=this.container2d|| new Box();
		this.addChildAt(this.container2d,3);
		this.scene=Laya.loader.getRes("LayaScene_JumpDown/JumpDown.ls");
		this.container2d.addChild(this.scene);this.player=this.player|| new Player(Laya.loader.getRes("LayaScene_Role/Role.lh"));
		this.scene.addChild(this.player.sprite);
		var p=com.utils.JSUtils.getRequestParameter();
		if (p["debug"] !=null)this.debug=p["debug"]==="true";
		this.jumpCircle=Laya.loader.getRes("LayaScene_JumpCircle/JumpCircle.lh").addComponent(PlayCompleteAndRemove);
		this.jumpCircle.aniName="JumpCircleSmall";
		this.jumpCircleBig=Laya.loader.getRes("LayaScene_JumpCircleBig/JumpCircleBig.lh").addComponent(PlayCompleteAndRemove);
		this.jumpCircleBig.aniName="JumpCircleBig";
		for (var i=this.scene.numChildren-1;i >=0;i--){
			if (((this.scene.getChildAt(i))instanceof laya.d3.core.MeshSprite3D )){
				this.scene.removeChildAt(i);
			}
		}this.container=this.container|| new Sprite3D();
		this.scene.addChild(this.container);
		this.mainCamera=this.scene.getChildByName("Main Camera");
		this.on("mousedown",this,this.onDown);
		this.material_pillar=StandardMaterial.load("LayaScene_JumpDown/Assets/Materials/Scene_Mid.lmat");
		this.material_pillar2=StandardMaterial.load("LayaScene_JumpDown/Assets/Materials/Burning.lmat");
		this.mesh_pillar=Laya.loader.getRes("LayaScene_JumpDown/Assets/model/SceneStatic-SceneObject01.lm");
		this.mesh_wall=Laya.loader.getRes("LayaScene_JumpDown/Assets/model/DamageCube2-DamageCube2.lm");
		this.material_pillars=[];
		this.material_pillars.push(this.material_pillar);
		this.mesh_cube=Laya.loader.getRes("LayaScene_JumpDown/Assets/model/NormalCube-NormalCube.lm");
		this.mesh_cubetrap=Laya.loader.getRes("LayaScene_JumpDown/Assets/model/DamageCube1-DamageCube1.lm");
		this.pillarBound=this.mesh_pillar.boundingBox;
		this.mesh_pillar_h=this.pillarBound.min.y-this.pillarBound.max.y;
		this.mesh_h=this.pillarBound.min.y-this.pillarBound.max.y / 4;
		this.mesh_r=this.pillarBound.min.x-this.pillarBound.max.x;
		this.wallHeight=Math.abs(this.mesh_wall.boundingBox.min.y-this.mesh_wall.boundingBox.max.y)+20;
		this.gameStart();
		if (!this.debug){
			this.isPause=true;
			this.mouseEnabled=false;
		}
		this.on("resize",this,this.onResize);
		EventCenter.instance.on("pause",this,function(){_$this.isPause=true,this.mouseEnabled=false,Laya.timer.scale=0;});
		EventCenter.instance.on("resume",this,function(){_$this.isPause=false,this.mouseEnabled=true,Laya.timer.scale=1;});
		EventCenter.instance.on("start",this,function(){_$this.gameStart();_$this.isPause=false,this.mouseEnabled=true;});
		GameSDK.start();
	}

	__proto.onResize=function(){}
	//player.scale(mainCamera.viewport.height / Global.STAGE_HEIGHT,mainCamera.viewport.height / Global.STAGE_HEIGHT);
	__proto.gameStart=function(revive){
		(revive===void 0)&& (revive=false);
		if(!revive){
			this.mRevived=false;
		}
		this.imgWarning.alpha=0;
		if (!revive){
			this.score=0;
			this.circles=0;
		}
		this.wallList.length=0;
		this.pillarsList.length=0;
		this.prevR=0;
		this.player.sprite.transform.position=new Vector3(0,-this.mesh_h / 2,50);
		this.playerPrevY=this.player.sprite.transform.position.y;
		this.minY=this.playerPrevY;
		var p=this.mainCamera.transform.position;
		p.y=this.minY+120;
		this.mainCamera.transform.position=p;
		for (var i=0;i < this.circleList.length;i++){
			this.destroyCircle(this.circleList[i],false,true);
		}
		this.circleList.length=0;
		this.container.removeChildren();
		this.container.transform.rotationEuler=new Vector3(0,0,0);
		this.player.down();
		this.createPillar(0);
		this.createPillar(this.mesh_pillar_h);
		this.createPillar(this.mesh_pillar_h *2);
		this.createCircle(0);
		this.createCircle(this.mesh_h);
		this.createCircle(this.mesh_h *2);
		this.createCircle(this.mesh_h *3);
		this.createCircle(this.mesh_h *4);
		this.curH=this.mesh_h *4;
		this.mouseEnabled=true;
		this.combo=0;
		Laya.timer.frameLoop(1,this,this.onFrame);
	}

	__proto.onFrame=function(){
		if (this.isPause)return;
		this.player.velocityY-=this.gravity;
		if (this.player.velocityY <-this.maxSpeed)this.player.velocityY=-this.maxSpeed;
		this.player.sprite.transform.translate(new Vector3(0,this.player.velocityY));
		var cc=this.checkCollision();
		var firstObj=this.circleList[0];
		if (firstObj.y > this.playerPrevY){
			SoundManager.playSound("sound/BreakStone.wav");
			this.circleList.shift();
			this.curH+=this.mesh_h;
			this.createCircle(this.curH);
			this.destroyCircle(firstObj,false);
			this.combo++;
			this.score+=this.combo;
			if (this.combo >=3)this.player.fire();
		};
		var s=this.pillarsList[0];
		if (this.mainCamera.transform.position.y-s.transform.position.y < 0){
			s.transform.position=new Vector3(0,this.pillarsList[this.pillarsList.length-1].transform.position.y+this.mesh_pillar_h);
			this.pillarsList.shift();
			this.pillarsList.push(s);
		}
		if (cc !=0){
			SoundManager.playSound("sound/jumpA.wav");
			this.player.velocityY=this.jumpSpeed;
			this.player.jump();
			if (this.combo >=2){
				this.scene.addChild(this.jumpCircleBig.owner);
				this.jumpCircleBig.play();
				this.jumpCircleBig.owner.transform.position=this.player.sprite.transform.position;
				this.jumpCircleBig.owner.transform.translate(new Vector3(0,-2));
			}
			else{
				this.scene.addChild(this.jumpCircle.owner);
				this.jumpCircle.play();
				this.jumpCircle.owner.transform.position=this.player.sprite.transform.position;
				this.jumpCircle.owner.transform.translate(new Vector3(0,-2));
			}
			if (this.player.power){
				var firstObj=this.circleList.shift();
				this.curH+=this.mesh_h;
				this.createCircle(this.curH);
				this.destroyCircle(firstObj,true);
			}
			else{
				if (cc==-1){
					this.die();
					return;
				}
			}
			this.combo=0;
			this.player.stopFire();
		}
		else if(this.playerPrevY > this.player.sprite.transform.position.y && !this.player.power){
			this.player.down();
		}
		this.playerPrevY=this.player.sprite.transform.position.y;
		this.minY=Math.min(this.minY,this.playerPrevY);
		var p=this.mainCamera.transform.position;
		p.y=com.utils.MathUtils.MoveTowards(p.y,this.minY+120,5);
		this.mainCamera.transform.position=p;
	}

	__proto.moveCloud=function(c,s){
		c.x-=s;
		if (c.x <-c.width)c.x=this.width+100;
	}

	__proto.die=function(){
		var _$this=this;
		SoundManager.playSound("sound/RoleHit.wav");
		Tween.to(this.imgWarning,{alpha :1},300,null,Handler.create(this,function(){
			Tween.to(_$this.imgWarning,{alpha :0},600,null);
		}));
		this.player.die();
		Laya.timer.clear(this,this.onFrame);
		this.onUp();
		this.mouseEnabled=false;
		if (this._score >=this.mHighScore){
			this.mHighScore=this._score;
			LocalStorage.setItem("HIGH_SCORE",this.mHighScore);
		}
		if (this.mRevived || !GameSDK.getVideoReady()){
			var settleDialog=SettleDialog.instance();
			settleDialog.popup();
			settleDialog.updateScore(this._score,this.mHighScore);
			}else{
			var reviveDialog=ReviveDialog.instance();
			reviveDialog.popup();
			reviveDialog.updateScore(this._score,this.mHighScore);
			this.mRevived=true;
		}
	}

	//}
	__proto.destroyCircle=function(firstObj,power,force){
		(force===void 0)&& (force=false);
		var r;
		var s;
		for(var $each_s in firstObj.sprites){
			s=firstObj.sprites[$each_s];
			r=s.transform.rotation;
			this.scene.addChild(s);
			s.transform.rotation=r;
			if (power){
				var sub;
				for(var $each_sub in s._childs){
					sub=s._childs[$each_sub];
					sub.meshRender.material=this.material_pillar2;
				}
			}
			if (force)(s.getComponentByType(DropCircle)).dis();
			else (s.getComponentByType(DropCircle)).start();
		}
		if (firstObj.wall){
			com.utils.CommonUtils.spleceToList(this.wallList,firstObj.wall);
			r=firstObj.wall.transform.rotation;
			this.scene.addChild(firstObj.wall);
			firstObj.wall.transform.rotation=r;
			if (force)(firstObj.wall.getComponentByType(DropCircle)).dis();
			else (firstObj.wall.getComponentByType(DropCircle)).start();
		}
	}

	/**
	*
	*@return 1,0,-1
	*/
	__proto.checkCollision=function(){
		var py=this.player.sprite.transform.position.y;
		var obj;
		var curIndex=Math.floor(((this.container.transform.localRotationEuler.y *-1+360+7.5)% 360)/ 15);
		if (this.wallList.length){
			var wall=this.wallList[0];
			if (wall.wall==curIndex && py >=wall.transform.position.y && py <=wall.transform.position.y+this.wallHeight){
				return-1;
			}
		}
		for (var i=0;i < this.circleList.length;i++){
			obj=this.circleList[i];
			if (obj.y < py){
				if (Math.abs(obj.y-py)< 20){
					if (obj.list[curIndex] !=0){
						this.player.sprite.transform.position.y=obj.y+20;
						this.player.sprite.transform.position=this.player.sprite.transform.position;
						return obj.list[curIndex];
					}
				}
				return 0;
			}
		}
	}

	__proto.createPillar=function(ty){
		var meshSprite3D=new MeshSprite3D(this.mesh_pillar);
		meshSprite3D.meshRender.sharedMaterials=this.material_pillars;
		meshSprite3D.transform.translate(new Vector3(0,ty));
		meshSprite3D.transform.rotate(new Vector3(0,com.utils.CommonUtils.rangeInt(0,24)*Math.PI / 12,0));
		this.pillarsList.push(meshSprite3D);
		this.container.addChild(meshSprite3D);
	}

	__proto.createCircle=function(ty){
		this.circles++;
		var start=com.utils.CommonUtils.rangeInt(0,24);
		var type=com.utils.CommonUtils.rangeInt(0,3);
		if (this.circleList.length==0 || ty==0){
			type=0;
			start=7;
		};
		var arr=[];
		for (var i=0;i < 24;i++){
			arr[i]=1;
		};
		var g=(type==0 && 0)|| (type==1 && 12)|| 8;
		var m=(type==0 && 7)|| (type==1 && 6)|| 5;
		var allTrap=this.circles > 10 && Math.random()< 0.4 && ty !=0;
		var num=0;
		var startSub=0;
		for (var i=0;i <=type;i++){
			num=allTrap && i > 0 ? 0 :com.utils.CommonUtils.rangeInt(2,m);
			startSub=start+i *g;
			for (var j=0;j < num;j++){
				arr[startSub % 24]=0;
				startSub++;
			}
			if (this.circles > 10 && ty !=0){
				num=allTrap && i > com.utils.CommonUtils.rangeInt(2,m-num)? m-num :com.utils.CommonUtils.rangeInt(0,m-num);
				for (var j=0;j < num;j++){
					arr[startSub % 24]=-1;
					startSub++;
				}
			}
		};
		var b;
		var bList=[];
		var dc;
		var starti=0;
		for (var i=start;i < start+arr.length;i++){
			if (arr[i % 24] !=0){
				if (i==start || arr[i % 24] !=arr[(i-1)% 24]){
					if (b){
						StaticBatchManager.combine(b);
						dc.initialAngle=(((starti+i)/ 2)% 24)*360 / 24;
					}
					starti=i;
					b=new Sprite3D();
					b.addComponent(DropCircle);
					dc=(b.getComponentByType(DropCircle));
					b.transform.translate(new Vector3(0,ty));
					this.container.addChild(b);
					bList.push(b);
				}
				b.addChild(this.createCube(arr[i % 24]==-1,i % 24));
			}
		}
		if (b){
			StaticBatchManager.combine(b);
			dc.initialAngle=(((starti+i)/ 2)% 24)*360 / 24;
		};
		var wall;
		if (this.circleList.length && Math.random()< this.getRate()){
			var fbList=this.circleList[this.circleList.length-1].list;
			var indexList=[];
			com.utils.CommonUtils.fillArrayInt(indexList,24,0);
			var wallIndex=0;
			while (indexList.length){
				wallIndex=indexList.splice(com.utils.CommonUtils.rangeInt(0,indexList.length),1)[0];
				if (fbList[wallIndex] !=0 && arr[wallIndex] !=0){
					wall=this.createWall(wallIndex,ty);
					wall.addComponent(DropCircle);
					dc=(wall.getComponentByType(DropCircle));
					dc.initialAngle=0;
					this.wallList.push(wall);
					this.container.addChild(wall);
					break ;
				}
			}
		}
		this.circleList.push({y:ty,list:arr,sprites:bList,wall:wall});
	}

	__proto.getRate=function(){
		if (this.circles < 11)return 0;
		else if (this.circles < 51)return 0.2;
		else return 0.5;
	}

	__proto.createCube=function(isTrap,circleIndex){
		(isTrap===void 0)&& (isTrap=false);
		(circleIndex===void 0)&& (circleIndex=0);
		var meshSprite3D=new MeshSprite3D(isTrap ? this.mesh_cubetrap :this.mesh_cube);
		meshSprite3D.meshRender.material=this.material_pillar;
		meshSprite3D.transform.rotate(new Vector3(0,circleIndex *Math.PI / 12,0));
		return meshSprite3D;;
	}

	//container.addChild(meshSprite3D);
	__proto.createWall=function(r,ty){
		var meshSprite3D=new MeshSprite3D(this.mesh_wall);
		meshSprite3D.meshRender.material=this.material_pillar;
		meshSprite3D.transform.rotate(new Vector3(0,r *Math.PI / 12,0));
		meshSprite3D.transform.translate(new Vector3(0,ty));
		meshSprite3D.wall=r;
		return meshSprite3D;
	}

	__proto.onDown=function(){
		this.downX=Laya.stage.mouseX;
		this.on("mouseup",this,this.onUp);
		this.on("mousemove",this,this.onMove);
	}

	__proto.onMove=function(){
		this.container.transform.rotate(new Vector3(0,(Laya.stage.mouseX-this.downX)/ 500 *Math.PI *2,0));
		this.downX=Laya.stage.mouseX;
	}

	__proto.onUp=function(){
		this.off("mouseup",this,this.onUp);
		this.off("mousemove",this,this.onMove);
	}

	__getset(0,__proto,'score',function(){
		return this._score;
		},function(value){
		if (value > this.score){
			var a=Pool.getItemByClass("num",JMornText);
			a.registerString="1234567890+";
			a.clipNum=11;
			a.width=400;
			a.offset=-5;
			a.align="center";
			a.skin="game/JumpDown_Num.png";
			a.text="+"+(value-this.score);
			Laya.stage.addChild(a);
			a.centerX=0;
			a.y=200;
			Tween.to(a,{y:a.y-80},400,null,Handler.create(this,function(){
				a.removeSelf();
				Pool.recover("num",a);
			}),0);
		}
		this._score=value;
		this.labelScore.text=this._score+"";
	});

	GameView.instance=function(){
		if (GameView._instance==null){
			GameView._instance=new GameView();
		}
		return GameView._instance;
	}

	GameView.NUM=24;
	GameView._instance=null;
	return GameView;
})(GameViewUI)


//class ui.HomeDialogUI extends laya.ui.Dialog
var HomeDialogUI=(function(_super){
	function HomeDialogUI(){
		this.btnStart=null;
		this.btnWelfare=null;
		this.labCoins=null;
		this.btnRank=null;
		HomeDialogUI.__super.call(this);
	}

	__class(HomeDialogUI,'ui.HomeDialogUI',_super);
	var __proto=HomeDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(HomeDialogUI.uiView);
	}

	HomeDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"home/homebg.png"}},{"type":"Button","props":{"x":192,"var":"btnStart","skin":"home/btnstart.png","bottom":480}},{"type":"Button","props":{"x":192,"var":"btnWelfare","skin":"home/btnwelfare.png","bottom":300}},{"type":"Image","props":{"y":241,"width":200,"skin":"home/toolsbg.png","left":71},"child":[{"type":"Image","props":{"y":3,"x":17,"skin":"home/revivecoins.png","scaleY":0.5,"scaleX":0.5}},{"type":"Label","props":{"y":27,"x":137,"var":"labCoins","text":"0/5","fontSize":40,"font":"Arial","color":"#ffffff","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"skin":"settle/bg_revive.png","bottom":0}},{"type":"Button","props":{"x":330,"var":"btnRank","skin":"home/imgrank.png","bottom":10}}]};
	return HomeDialogUI;
})(Dialog)


/**
*...
*@author ...
*/
//class com.bdoggame.HomeView extends ui.HomeViewUI
var HomeView=(function(_super){
	function HomeView(){
		HomeView.__super.call(this);
		this.btnStart.on("click",this,this.onStartClick);
		this.btnWelfare.on("click",this,this.onWelfareClick);
		this.btnRank.on("click",this,this.onRankClick);
		EventCenter.instance.on("COIN_VIDEO_BACK",this,this.updateCoin);
		EventCenter.instance.on("VIDEO_READY",this,this.updateVideoReady);
		this.setCoin();
	}

	__class(HomeView,'com.bdoggame.HomeView',_super);
	var __proto=HomeView.prototype;
	__proto.onStartClick=function(){
		var gameView=GameView.instance();
		SceneManager.instance.replaceScene(gameView);
	}

	//}
	__proto.onWelfareClick=function(){
		GameSDK.onCoinVideo();
	}

	__proto.onRankClick=function(){
		GameSDK.onRank();
	}

	__proto.updateWelfareStatus=function(coin){
		if(GameSDK.getVideoReady()){
			this.btnWelfare.visible=coin < 5;
			}else{
			this.btnWelfare.visible=false;
		}
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		this.labCoins.text=coin+"/5";
	}

	//updateWelfareStatus(coin);
	__proto.updateCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		if (coin < 5){
			coin++;
			LocalStorage.setItem("COIN_NUM",coin);
		}
		this.labCoins.text=coin+"/5";
	}

	//updateWelfareStatus(coin);
	__proto.updateVideoReady=function(result){
		console.log("ricardo updateVideoReady "+result);
	}

	HomeView.instance=function(){
		if (HomeView._instance==null){
			HomeView._instance=new HomeView();
		}
		return HomeView._instance;
	}

	HomeView._instance=null;
	return HomeView;
})(HomeViewUI)


//class ui.ReviveDialogUI extends laya.ui.Dialog
var ReviveDialogUI=(function(_super){
	function ReviveDialogUI(){
		this.labCurScore=null;
		this.labHighScore=null;
		this.btnCoin=null;
		this.labCoin=null;
		this.btnVideo=null;
		this.btnEnd=null;
		ReviveDialogUI.__super.call(this);
	}

	__class(ReviveDialogUI,'ui.ReviveDialogUI',_super);
	var __proto=ReviveDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(ReviveDialogUI.uiView);
	}

	ReviveDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"width":750,"skin":"settle/bg_revive.png","height":1334}},{"type":"Label","props":{"y":307,"x":375,"var":"labCurScore","text":"60","fontSize":80,"color":"#FF9115","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":673,"x":468,"visible":false,"var":"labHighScore","text":"60","fontSize":40,"color":"#a8a8a8"}},{"type":"Label","props":{"y":152,"x":296,"text":"Score","fontSize":60,"color":"#ffffff"}},{"type":"Label","props":{"y":673,"x":233,"visible":false,"text":"High score","fontSize":40,"color":"#a8a8a8"}},{"type":"Button","props":{"y":538,"x":421,"visible":false,"var":"btnCoin","stateNum":1,"skin":"home/coinrevive.png"},"child":[{"type":"Label","props":{"y":102,"x":162,"var":"labCoin","text":"1","fontSize":50,"font":"Arial","color":"#7D5345","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":538,"x":246,"var":"btnVideo","stateNum":1,"skin":"home/videorevive.png"}},{"type":"Image","props":{"y":447,"x":275,"visible":false,"skin":"home/bgcoinnum.png"},"child":[{"type":"Image","props":{"y":2,"x":14,"skin":"home/revivecoins.png","scaleY":0.6,"scaleX":0.6}}]},{"type":"Button","props":{"y":927,"x":283,"var":"btnEnd","skin":"settle/btnEnd.png"}}]};
	return ReviveDialogUI;
})(Dialog)


//class ui.SettleDialogUI extends laya.ui.Dialog
var SettleDialogUI=(function(_super){
	function SettleDialogUI(){
		this.labCurScore=null;
		this.labHighScore=null;
		this.btnHome=null;
		this.btnAgain=null;
		SettleDialogUI.__super.call(this);
	}

	__class(SettleDialogUI,'ui.SettleDialogUI',_super);
	var __proto=SettleDialogUI.prototype;
	__proto.createChildren=function(){
		laya.ui.Component.prototype.createChildren.call(this);
		this.createView(SettleDialogUI.uiView);
	}

	SettleDialogUI.uiView={"type":"Dialog","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":342,"x":39,"skin":"settle/bgSettle.png"}},{"type":"Label","props":{"y":714,"x":375,"var":"labCurScore","text":"123","fontSize":80,"color":"#FF9115","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":804,"x":465,"var":"labHighScore","text":"60","fontSize":40,"color":"#7B432F"}},{"type":"Label","props":{"y":802,"x":223,"text":"Best score","fontSize":40,"color":"#7B432F"}},{"type":"Button","props":{"y":884,"x":454,"var":"btnHome","skin":"settle/btnHome.png"}},{"type":"Button","props":{"y":877,"x":215,"var":"btnAgain","skin":"settle/btnAgain.png"}}]};
	return SettleDialogUI;
})(Dialog)


/**
*...
*@author ...
*/
//class com.bdoggame.HomeDialog extends ui.HomeDialogUI
var HomeDialog=(function(_super){
	function HomeDialog(){
		HomeDialog.__super.call(this);
		this.btnStart.on("click",this,this.onStartClick);
		this.btnWelfare.on("click",this,this.onWelfareClick);
		this.btnRank.on("click",this,this.onRankClick);
		EventCenter.instance.on("COIN_VIDEO_BACK",this,this.updateCoin);
		this.setCoin();
	}

	__class(HomeDialog,'com.bdoggame.HomeDialog',_super);
	var __proto=HomeDialog.prototype;
	__proto.onStartClick=function(){
		if (GameSDK.mHomeShowed){
			this.close();
			GameSDK.start();
			}else{
			SceneManager.instance.replaceScene(new GameView());
			GameSDK.mHomeShowed=true;
		}
	}

	__proto.onWelfareClick=function(){
		GameSDK.onCoinVideo();
	}

	__proto.onRankClick=function(){
		GameSDK.onRank();
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		this.labCoins.text=coin+"/5";
	}

	__proto.updateCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		if (coin < 5){
			coin++;
			LocalStorage.setItem("COIN_NUM",coin);
		}
		this.labCoins.text=coin+"/5";
	}

	HomeDialog.instance=function(){
		if (HomeDialog._instance==null){
			HomeDialog._instance=new HomeDialog();
		}
		return HomeDialog._instance;
	}

	HomeDialog._instance=null;
	return HomeDialog;
})(HomeDialogUI)


/**
*...
*@author ...
*/
//class com.bdoggame.ReviveDialog extends ui.ReviveDialogUI
var ReviveDialog=(function(_super){
	function ReviveDialog(){
		this.mCurScore=0;
		this.mHighScore=0;
		ReviveDialog.__super.call(this);
		this.btnCoin.on("click",this,this.onCoinClick);
		this.btnEnd.on("click",this,this.onEndClick);
		this.btnVideo.on("click",this,this.onVideoClick);
		this.btnEnd.visible=false;
		Laya.timer.once(1000,this,this.showEndBtn);
		EventCenter.instance.on("REVIVE_VIDEO_BACK",this,this.eventReviveSucceed);
		EventCenter.instance.on("REVIVE_VIDEO_BACK_FAIL",this,this.eventReviveFailed);
	}

	__class(ReviveDialog,'com.bdoggame.ReviveDialog',_super);
	var __proto=ReviveDialog.prototype;
	__proto.eventReviveSucceed=function(){
		this.close();
		GameSDK.revive();
		GameSDK.onHideBanner();
	}

	__proto.eventReviveFailed=function(){
		this.onEndClick();
	}

	__proto.showEndBtn=function(){
		this.btnEnd.visible=true;
	}

	__proto.onEndClick=function(){
		this.close();
		var settleDialog=SettleDialog.instance();
		settleDialog.popup();
		settleDialog.updateScore(this.mCurScore,this.mHighScore);
	}

	//GameSDK.onHideBanner();
	__proto.onVideoClick=function(){
		var _$this=this;
		this.btnVideo.disabled=true;
		Laya.timer.once(1500,this,function(){
			_$this.btnVideo.disabled=false;
		});
		GameSDK.onReviveVideo();
	}

	__proto.onCoinClick=function(){
		GameSDK.revive();
		this.close();
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		if(coin > 0){
			coin--;
		}
		LocalStorage.setItem("COIN_NUM",coin);
		GameSDK.onHideBanner();
	}

	__proto.updateScore=function(curScore,highScore){
		this.labCurScore.text=curScore+"";
		this.labHighScore.text=highScore+"";
		this.mCurScore=curScore;
		this.mHighScore=highScore;
		GameSDK.onShowBanner();
		this.setCoin();
	}

	__proto.setCoin=function(){
		var coin=LocalStorage.getItem("COIN_NUM")==null ? 0:LocalStorage.getItem("COIN_NUM");
		this.btnCoin.disabled=coin <=0;
		this.labCoin.text=coin+"";
		if (GameSDK.getVideoReady()){
			this.btnVideo.visible=true;
			this.btnCoin.x=421;
			}else{
			this.btnVideo.visible=false;
			this.btnCoin.x=246;
		}
	}

	ReviveDialog.instance=function(){
		if (ReviveDialog._instance==null){
			ReviveDialog._instance=new ReviveDialog();
		}
		return ReviveDialog._instance;
	}

	ReviveDialog._instance=null;
	return ReviveDialog;
})(ReviveDialogUI)


/**
*...
*@author ...
*/
//class com.bdoggame.SettleDialog extends ui.SettleDialogUI
var SettleDialog=(function(_super){
	function SettleDialog(){
		SettleDialog.__super.call(this);
		this.btnAgain.on("click",this,this.onAgainClick);
		this.btnHome.on("click",this,this.onHomeClick);
	}

	__class(SettleDialog,'com.bdoggame.SettleDialog',_super);
	var __proto=SettleDialog.prototype;
	__proto.onAgainClick=function(){
		this.close();
		GameSDK.start();
		GameSDK.onHideBanner();
	}

	__proto.onHomeClick=function(){
		this.close();
		var homeView=HomeView.instance();
		SceneManager.instance.replaceScene(homeView);
		homeView.setCoin();
		GameSDK.onHideBanner();
	}

	__proto.updateScore=function(curScore,highScore){
		this.labCurScore.text=curScore+"";
		this.labHighScore.text=highScore+"";
		GameSDK.updateScore(highScore);
		GameSDK.onShowBanner();
	}

	SettleDialog.instance=function(){
		if (SettleDialog._instance==null){
			SettleDialog._instance=new SettleDialog();
		}
		return SettleDialog._instance;
	}

	SettleDialog._instance=null;
	return SettleDialog;
})(SettleDialogUI)



	/**LayaGameStart**/
	new LayaAir3D();

})(window,document,Laya);

if (typeof define === 'function' && define.amd){
	define('laya.core', ['require', "exports"], function(require, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        for (var i in Laya) {
			var o = Laya[i];
            o && o.__isclass && (exports[i] = o);
        }
    });
}