import World from './components/World';
import './style.css';

console.log('test');
const canvas = document.getElementById('canvas');

const world = new World(canvas);

const animate = () => {
  world.run();
  requestAnimationFrame(animate);
};

animate();
