import * as THREE from 'three';
import { gsap, CSSPlugin } from 'gsap/all';
import vertexShader from './vertexShader.glsl';
import fragmentShader from './fragmentShader.glsl';
gsap.registerPlugin(CSSPlugin);

export default class Figure {
  constructor(scene, image, cb) {
    this.$image = image;
    this.scene = scene;
    this.callback = cb;

    this.loader = new THREE.TextureLoader();

    this.image = this.loader.load(this.$image.src, () => {
      this.start();
    });
    this.hover = this.loader.load(this.$image.dataset.hover);
    // this.$image.style.opacity = 0;
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);

    this.mouse = new THREE.Vector2(0, 0);
    this.$image.addEventListener('mousemove', (ev) => {
      this.onMouseMove(ev);
    });
  }

  start() {
    this.getSizes();

    this.createMesh();

    this.callback();
  }

  getSizes() {
    let normalize = 0;
    // if (window.matchMedia('(min-width: 1900px)').matches) {
    //   normalize = 140;
    // } else
    if (window.matchMedia('(min-width: 1400px)').matches) {
      // normalize = 187;
      normalize = 140;
    }
    this.sizes.set(window.screen.width, window.screen.height - normalize);
    this.offset.set(0, 0);
  }

  createMesh() {
    this.uniforms = {
      u_image: { type: 't', value: this.image },
      u_imagehover: { type: 't', value: this.hover },
      u_mouse: { value: this.mouse },
      u_time: { value: 0 },
      u_res: {
        value: new THREE.Vector2(window.screen.width / 4, window.screen.height / 4)
      }
    };

    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      defines: {
        PR: window.devicePixelRatio.toFixed(1)
      }
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);

    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);

    this.scene.add(this.mesh);
  }

  onMouseMove(event) {
    const { width, height } = this.$image.getBoundingClientRect();
    gsap.to(this.mouse, 1, {
      x: (event.offsetX / width) * 1.2 - 1,
      y: -(event.offsetY / height) * 1.8 + 1
    });
  }

  update() {
    this.uniforms.u_time.value += 0.01;
  }
}
