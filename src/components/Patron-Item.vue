<template>
    <router-link :to="character.name" class="patron">
        <div class="card">
            <div class="canvas-wrapper" :id="character.name + '_canvas_wrapper'"></div>
            <h2>{{ character.name }}</h2>
        </div>
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
        var loader = new THREE.ObjectLoader();

        
        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( wrapper.offsetWidth, wrapper.offsetWidth );
        renderer.antialias = true;
        wrapper.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        // loader.load(
        //     // this.$props.character.stl,
        //     'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/models/obj/male02/male02.obj',
        //     function( object ) {
        //         scene.add(object)
        //     },
        //     function( xhr ) {
        //         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        //     },
        //     function ( error ) {
        //         console.log( 'An error happened' );
        //     }
        // );

        camera.position.z = 5;
        // camera.position.y = 1;

        var animate = function () {
            requestAnimationFrame( animate );

            // cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render( scene, camera );
        };

        animate();
    }
}
</script>
<style lang="scss" scoped>
    a.patron {
        display: block;
        
        text-decoration: none;
        div.card {
            background-image: url('../assets/imgs/card.png');
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            width: 270px;
            height: 400px;
            margin-left: auto;
            margin-right: auto;
            div.canvas-wrapper {
                width: 190px;
                height: 200px;
                margin-left: auto;
                margin-right: auto;
                padding-top: 30px;
                margin-bottom: 15px;
            }
            h2 {
                display: block;
                text-align: center;
                text-decoration: none;
                color: #000;
                font-size: 2vw;
                @media screen and (max-width: 768px) {
                    font-size: 5vw;
                }
            }
        }
        
    }
    
</style>