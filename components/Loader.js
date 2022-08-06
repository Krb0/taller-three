import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export default class Loader {
  constructor(scene) {
    this.loader = new GLTFLoader();
    this.scene = scene;
    this.model = null;
  }
  loadModel(model) {
    this.loader.load('models/' + model, (model) => {
      this.model = model.scene;
      this.scene.add(this.model);
    });
  }
}
