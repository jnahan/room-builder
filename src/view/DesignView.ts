import {
	MaterialLoader,
	Mesh,
	Renderer,
	BoxGeometry,
	MeshPhongMaterial,
	AmbientLight,
	PointLight,
	Group,
	Material,
	TextureLoader,
	RepeatWrapping,
	Texture,
	MeshBasicMaterial,
	WebGLRenderer,
	PlaneBufferGeometry,
	DoubleSide,
	Clock,
	Color
} from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { BaseView3D } from "./BaseView3D";

const aspect = window.innerWidth / window.innerHeight

export class DesignView extends BaseView3D{

	group: Group;
	exampleModel: Group;
	exampleTexture: Texture;
	lightAmbient: AmbientLight;
	lightPoint: PointLight;

	constructor(model: any, renderer: WebGLRenderer){
		super(model, renderer);

		this.exampleModel = new Group();
		this.exampleTexture = new Texture();
		this.group = new Group();
		this.scene.add(this.group);
	
		this.scene.background = new Color(0xded6ce);

		this.camera.lookAt(this.scene.position);

		this.lightAmbient = new AmbientLight(0xe8e8e8);
		this.lightAmbient.intensity = 0.85;
		this.scene.add(this.lightAmbient);

		this.lightPoint = new PointLight(0xffffff);
		this.lightPoint.position.set(4, 3, 1);
		this.lightPoint.castShadow = true;
		this.lightPoint.intensity = 0.4;
		this.scene.add(this.lightPoint);
		
		const modelLoader = new GLTFLoader().setPath('../resources/models/');
		modelLoader.load('room.gltf', (gltf) => {
			
			this.exampleModel = gltf.scene;
			this.exampleModel.position.set(0,-0.5,0);
			this.exampleModel.scale.set(1, 1, 1);

			const newMat = new MeshPhongMaterial({color : 0xabdbb8})
			
			this.exampleModel.traverse((child: THREE.Object3D<THREE.Event>) => {
				if (child.type == 'mesh'){
						(child as gltfMesh).material = newMat;
				}
			});
			this.group.add(this.exampleModel);
		});
	}
	update(clock: Clock): void {
		this.group.scale.set(this.model.zoom, this.model.zoom, this.model.zoom);
	}
}
interface gltfMesh extends THREE.Object3D<THREE.Event> {
	material: THREE.Material;
}