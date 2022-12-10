<template>
  <div id="three-root"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  name: "Three_cube_me",
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setClearColor( 0x000000, 0 );
      this.renderer.setSize(500, 500);
      document.getElementById('three-root').appendChild(this.renderer.domElement);

      let geometry = new THREE.BoxGeometry(2, 1, 2);
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load('/Photo.jpg');
      let material = new THREE.MeshBasicMaterial({ map: texture });
      this.cube = new THREE.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.camera.position.z = 2;
      this.animate()

    },

    animate() {
      this.cube.rotation.y += 0.0025;
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.animate);
    }
  }
}
</script>

<style scoped>

</style>