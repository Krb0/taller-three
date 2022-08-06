import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default class Loader {
  constructor() {
    this.loader = new GLTFLoader();
    this.path = 'models/';
    this.models = [];
  }
  loadModel(scene, { path, scale }) {
    this.loader.setPath(this.path + path);
    this.loader.load('scene.gltf', (model) => {
      this.models = [...this.models, model.scene];
      model.scene.scale.set(...scale);
      scene.add(model.scene);
    });
  }
}
