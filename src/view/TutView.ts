import * as PIXI from 'pixi.js'
import { Graphics } from 'pixi.js';
import { Texture } from 'pixi.js';
import { Sprite } from 'three';
import { BaseView2D } from "./BaseView2D";

export class TutView extends BaseView2D {

	graphics: PIXI.Graphics;
	background: PIXI.Sprite;
	text: PIXI.Sprite;

	constructor(model: any, app: PIXI.Application) {
		super(model, app)

		this.background = PIXI.Sprite.from('./resources/graphics/background.png');
		this.background.anchor.x = this.background.width/2;
		this.background.anchor.y = this.background.height/2;
		this.background.position.x = window.innerWidth/2;
		this.background.position.y = window.innerHeight/2;;
		this.background.width = window.innerWidth;
		this.background.height = window.innerHeight;

		this.graphics = new Graphics()
		this.graphics.beginFill(0x000000)
		this.graphics.alpha = 0.4;
		this.graphics.drawRect(0,0,window.innerWidth,window.innerHeight)

		this.text = PIXI.Sprite.from('./resources/graphics/text.png');
		this.text.anchor.x = this.text.width/2;
		this.text.anchor.y = this.text.height/2;
		this.text.position.x = window.innerWidth/2 + 250;
		this.text.position.y = window.innerHeight/2 + 50;
		this.text.scale.x = 0.75;
		this.text.scale.y = 0.75;

		app.stage.addChild(this.background)
		app.stage.addChild(this.graphics)
		app.stage.addChild(this.text)
	}

	update(): void {
	}
}