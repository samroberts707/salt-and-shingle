<template>
    <div class="patron">
        <router-link class="card" :to="this.$props.character.name">
            <div class="canvas-wrapper" :id="character.name + '_canvas_wrapper'"></div>
            <h2>{{ character.name }}</h2>
            <div class="character-information">
                <img class="race" :alt="character.race" />
                <img class="class" :alt="character.class" :src="'./assets/imgs/classes/' + character.class + '.jpeg'" />
            </div>
        </router-link>
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

        var light = new THREE.PointLight(0xffffff, 1, 5000);
        light.position.set( 500, 500, 500 );
        scene.add( light );

        loader.load(
            'https://raw.githubusercontent.com/samroberts707/salt-and-shingle/dev/src/assets/character-objs/' + this.$props.character.obj,
            function( object ) {
                object.castShadow = true;
                object.acceptShadow = true;
                object.scale.set(10,10,10);
                scene.add(object)
            },
            function( xhr ) {
                // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
            },
            function ( error ) {
                // console.log( error );
            }
        );

        camera.position.set( 0, 200, 400 );

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
        .card {
            display: block;
            position: relative;
            background-image: url('../assets/imgs/card.png');
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            width: 270px;
            height: 400px;
            margin-left: auto;
            margin-right: auto;
            text-decoration: none;
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
                margin-bottom: 25px;
            }
            div.character-information {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 30px;
                padding: 2px 45px;
                img {
                    display: block;
                    width: 100%;
                    height: auto;
                    position: relative;
                    transition: transform 0.3s ease-in-out;
                    &.class {
                        border-radius: 20px;
                    }
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
</style>
