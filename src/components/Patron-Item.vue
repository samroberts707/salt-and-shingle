<template>
    <div class="patron">
        <div class="card">
            <div class="canvas-wrapper" :id="character.name + '_canvas_wrapper'"></div>
            <h2>{{ character.name }}</h2>
        </div>
    </div>
</template>
<script>
var THREE = require('three');
var OBJLoader = require('three-obj-loader');
export default {
    props: ['character'],
    mounted() {
        OBJLoader(THREE);
        var wrapper = document.getElementById(this.$props.character.name + '_canvas_wrapper');
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, 190/185, 0.1, 1000 );
        var loader = new THREE.OBJLoader();

        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( 190, 185 );
        renderer.antialias = true;
        wrapper.appendChild(renderer.domElement);

        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

        var light = new THREE.PointLight(0xffffff, 1, 1000);
        light.position.set( 50, 50, 50 );
        scene.add( light );

        loader.load(
            'https://raw.githubusercontent.com/samroberts707/salt-and-shingle/dev/src/assets/character-objs/ellie.obj',
            function( object ) {
                object.castShadow = true;
                object.acceptShadow = true;
                object.rotation.y = 200;
                scene.add(object)
            },
            function( xhr ) {
                // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ) {
                // console.log( error );
            }
        );

        camera.position.set( 0, 15, 40 );

        var animate = function () {
            requestAnimationFrame(animate)

            scene.children[1].rotation.y += 0.01;

            renderer.render(scene, camera)
        }
        animate()
    }
}
</script>
<style lang="scss" scoped>
    .patron {
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
                height: 185px;
                margin-left: auto;
                margin-right: auto;
                padding-top: 30px;
                margin-bottom: 10px;
            }
            h2 {
                display: block;
                text-align: center;
                text-decoration: none;
                color: #000;
                font-size: 29px;
            }
        }
    }
</style>
