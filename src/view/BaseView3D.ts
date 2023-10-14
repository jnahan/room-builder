import { Clock, Color, OrthographicCamera, PerspectiveCamera, Renderer, Scene, WebGLRenderer } from "three"
import { BaseView } from "./BaseView";

const aspect = window.innerWidth / window.innerHeight

export class BaseView3D extends BaseView {

	scene: Scene;
	camera: OrthographicCamera;
	renderer: WebGLRenderer;

	constructor(model: any, renderer: WebGLRenderer) {
		super(model)
		this.scene = new Scene();
		this.renderer = renderer;

		const d = 2;
		this.camera = new OrthographicCamera(-this.model.d * aspect, this.model.d * aspect, this.model.d, -this.model.d, 1, 2000)
		this.camera.position.set(10, 10, 10)
		this.scene.add(this.camera)
	}

	update(clock: Clock): void {
	}

	onWindowResize() {
		this.camera.updateProjectionMatrix();
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

}