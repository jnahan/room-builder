var S=Object.defineProperty;var D=(e,t,o)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var r=(e,t,o)=>(D(e,typeof t!="symbol"?t+"":t,o),o);import{C as H,S as O,O as j,G as k,T as E,a as F,A as G,P as T,b as I,M as V,c as P,d as Y,R as _,e as B,f as N,g as U,W as X,h as q,V as p,i as K}from"./vendor.c99ab8ff.js";const $=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))b(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const w of a.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&b(w)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function b(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};$();class M{constructor(t){r(this,"model");this.model=t}update(t){}}class C extends M{constructor(t,o){super(t);r(this,"scene");this.scene=new H,o.stage.addChild(this.scene)}update(){}}const L=window.innerWidth/window.innerHeight;class W extends M{constructor(t,o){super(t);r(this,"scene");r(this,"camera");r(this,"renderer");this.scene=new O,this.renderer=o,this.camera=new j(-this.model.d*L,this.model.d*L,this.model.d,-this.model.d,1,2e3),this.camera.position.set(10,10,10),this.scene.add(this.camera)}update(t){}onWindowResize(){this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setSize(window.innerWidth,window.innerHeight)}}class J extends W{constructor(t,o){super(t,o);r(this,"group");r(this,"exampleModel");r(this,"exampleTexture");r(this,"lightAmbient");r(this,"lightPoint");this.exampleModel=new k,this.exampleTexture=new E,this.group=new k,this.scene.add(this.group),this.scene.background=new F(14603982),this.camera.lookAt(this.scene.position),this.lightAmbient=new G(15263976),this.lightAmbient.intensity=.85,this.scene.add(this.lightAmbient),this.lightPoint=new T(16777215),this.lightPoint.position.set(4,3,1),this.lightPoint.castShadow=!0,this.lightPoint.intensity=.4,this.scene.add(this.lightPoint),new I().setPath("../resources/models/").load("room.gltf",s=>{this.exampleModel=s.scene,this.exampleModel.position.set(0,-.5,0),this.exampleModel.scale.set(1,1,1);const a=new V({color:11262904});this.exampleModel.traverse(w=>{w.type=="mesh"&&(w.material=a)}),this.group.add(this.exampleModel)})}update(t){this.group.scale.set(this.model.zoom,this.model.zoom,this.model.zoom)}}class Q extends C{constructor(t,o){super(t,o);r(this,"graphics");r(this,"background");r(this,"text");this.background=P.from("./resources/graphics/background.png"),this.background.anchor.x=this.background.width/2,this.background.anchor.y=this.background.height/2,this.background.position.x=window.innerWidth/2,this.background.position.y=window.innerHeight/2,this.background.width=window.innerWidth,this.background.height=window.innerHeight,this.graphics=new Y,this.graphics.beginFill(0),this.graphics.alpha=.4,this.graphics.drawRect(0,0,window.innerWidth,window.innerHeight),this.text=P.from("./resources/graphics/text.png"),this.text.anchor.x=this.text.width/2,this.text.anchor.y=this.text.height/2,this.text.position.x=window.innerWidth/2+250,this.text.position.y=window.innerHeight/2+50,this.text.scale.x=.75,this.text.scale.y=.75,o.stage.addChild(this.background),o.stage.addChild(this.graphics),o.stage.addChild(this.text)}update(){}}let i={mode:0,color:16777215,d:2,zoom:1,activeView:1,pointerPosition:new p(0,0)},g=new _,x=new p,y=new p,n,c,z=new K,A,m,v,d=[],u,l=new B;function Z(){ne(),ee(),te(),ae()}function ee(){A=new N,document.body.appendChild(A.dom)}function te(){u=new U,f()}function f(){switch(u.__folders.group&&u.removeFolder(u.__folders.group),i.activeView){case 0:const e=u.addFolder("group");e.open(),e.add(i,"mode",{build:0,color:1}).onChange(f),e.add(i,"zoom",.5,3,.5),i.mode==1&&e.addColor(i,"color").onChange(ie);break}}function ie(){const e=new V({color:i.color});n.material=e}function ne(){c=new X,c.shadowMap.enabled=!0,c.shadowMap.type=q,c.setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),l.renderer.view.style.position="absolute",l.renderer.view.style.display="none",l.renderer.backgroundColor=10917253,l.renderer.resize(window.innerWidth,window.innerHeight),document.body.appendChild(c.domElement),document.body.appendChild(l.view),m=new J(i,c),d.push(m),v=new Q(i,l),d.push(v),i.pointerPosition=new p(0,0),R()}let h;function oe(){if(n!=null&&(h=n.userData.name,h!="planks"&&h!="walls"&&h!="wallsTop"&&h!="windows"&&h!="view"&&h!="floor")){g.setFromCamera(y,d[i.activeView].camera);const e=g.intersectObject(d[i.activeView].scene);if(e.length>0)for(let t of e)n.position.x=t.point.x,n.position.z=t.point.z}}function se(){n!=null&&n.userData.name!="planks"&&n.userData.name!="walls"&&n.userData.name!="windows"&&n.userData.name!="floor"&&n.rotateY(-Math.PI/2)}function re(){n!=null&&n.rotateY(Math.PI/2)}function ae(){window.addEventListener("resize",de,!1),window.addEventListener("pointermove",ce),window.addEventListener("click",e=>{if(n){i.mode==0&&(n=null,console.log("dropped draggable"+n.userData.name));return}x.x=e.clientX/window.innerWidth*2-1,x.y=-(e.clientY/window.innerHeight)*2+1,g.setFromCamera(x,d[i.activeView].camera);const t=g.intersectObject(d[i.activeView].scene);t.length>0&&(n=t[0].object,console.log("found draggale "+n.userData.name))}),window.addEventListener("mousemove",e=>{y.x=e.clientX/window.innerWidth*2-1,y.y=-(e.clientY/window.innerHeight)*2+1}),window.addEventListener("keydown",e=>{const{key:t}=e;switch(t){case",":i.mode==0&&se();break;case".":i.mode==0&&re();break;case"ArrowRight":i.activeView=(i.activeView+1)%d.length,f();break;case"ArrowLeft":i.activeView=i.activeView-1,i.activeView<0&&(i.activeView=d.length-1),f();break;case" ":n=null,console.log("dropped draggable"+n.userData.name);break}})}function de(){m.onWindowResize()}function ce(e){i.pointerPosition.x=e.clientX/window.innerWidth*2-1,i.pointerPosition.y=-(e.clientY/window.innerHeight)*2+1}function R(){switch(requestAnimationFrame(()=>{R(),i.mode==0&&oe()}),z.getDelta(),i.activeView){case 0:m.update(z);break;case 1:v.update();break}d[i.activeView]instanceof W&&(c.domElement.style.display="block",l.renderer.view.style.display="none",c.render(d[i.activeView].scene,d[i.activeView].camera)),d[i.activeView]instanceof C&&(c.domElement.style.display="none",l.renderer.view.style.display="block")}Z();
