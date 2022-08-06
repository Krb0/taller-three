import { Vector2, Raycaster } from 'three';

class Interaction {
  constructor(scene, camera) {
    this.scene = scene;
    this.mousePosition = new Vector2();
    this.camera = camera;
    this.raycaster = new Raycaster();
    this.intersectedObjects = [];
    window.addEventListener('pointermove', (e) => this.onPointerMove(e));
    window.addEventListener('click', (e) => {
      console.log(this.intersectedObjects);
    });
  }
  onPointerMove(event) {
    this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.update();
  }
  update() {
    this.raycaster.setFromCamera(this.mousePosition, this.camera);
    this.intersectedObjects = this.raycaster.intersectObjects(
      this.scene.children
    );
  }
}
export default Interaction;
