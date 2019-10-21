<template>
    <router-link to="/">
        <div class="canvas-wrapper" :id="character.name + '_canvas_wrapper'"></div>
    </router-link>
</template>
<script>
var THREE = require('three');
export default {
    props: ['character'],
    mounted() {
        var wrapper = document.getElementById(this.$props.character.name + '_canvas_wrapper');
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, wrapper.offsetWidth/wrapper.offsetWidth, 0.1, 1000 );

        
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( wrapper.offsetWidth, wrapper.offsetWidth );
        renderer.antialias = true;
        wrapper.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }
}
</script>
<style lang="scss" scoped>
    div.canvas-wrapper {
        width: 100%;
        height: 100%;
    }
</style>