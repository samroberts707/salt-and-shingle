<template>
    <div class="patron">
        <div class="header">
            <div id="canvas_wrapper"></div>
            <h1 class="name">{{ patron.name }}</h1>
        </div>
        <div class="details">
          <div class="base-stats">
            <div class="stat-wrapper" v-for='(stat, key) in this.patron.base' v-bind:key='key'>
              <h4 class="stat-name">{{ key }}</h4>
              <h2 class="stat">{{ stat }}</h2>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
var THREE = require('three')
var OBJLoader = require('three-obj-loader')
// var OrbitControls = require('three-orbitcontrols')
export default {
  computed: {
    patron () {
      return this.$store.getters.patron(this.$route.params.name)
    }
  },
  mounted () {
    OBJLoader(THREE)
    var wrapper = document.getElementById('canvas_wrapper')

    console.log(wrapper.clientHeight)

    var scene = new THREE.Scene()
    var camera = new THREE.PerspectiveCamera(75, wrapper.clientWidth / wrapper.clientHeight, 0.1, 1000)
    var loader = new THREE.OBJLoader()

    var renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(wrapper.clientWidth, wrapper.clientHeight)
    renderer.antialias = true
    wrapper.appendChild(renderer.domElement)

    var light = new THREE.PointLight(0xffffff, 1, 5000)
    light.position.set(500, 500, 500)
    scene.add(light)

    var modelLoaded = false

    loader.load(
      'https://raw.githubusercontent.com/samroberts707/salt-and-shingle/dev/src/assets/character-objs/' + this.patron.obj,
      function (object) {
        object.castShadow = true
        object.acceptShadow = true
        object.scale.set(10, 10, 10)
        scene.add(object)
        modelLoaded = true
      },
      function (xhr) {
        // console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      function (error) {
        console.log(error)
      }
    )

    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.enableZoom = true
    // controls.autoRotate = true
    // controls.mouseButtons = {
    //     LEFT: THREE.MOUSE.ROTATE,
    //     MIDDLE: THREE.MOUSE.DOLLY,
    //     RIGHT: THREE.MOUSE.PAN
    // }
    // console.log(controls)

    camera.position.set(0, 200, 400)

    var animate = function () {
      requestAnimationFrame(animate)

      if (modelLoaded) {
        scene.children[1].rotation.y += 0.01
      }
      // controls.update();

      renderer.render(scene, camera)
    }
    animate()
  }
}
</script>
<style lang="scss" scoped>
    div.patron {
        div.header {
            display: grid;
            position: relative;
            width: 100vw;
            height: 56.25vw;
            background-image: url('../assets/imgs/handmade_hero.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            justify-items: center;
            align-items: center;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                box-shadow: inset 0 0 2000px rgb(255, 255, 255);
                filter: blur(100vw);
            }
            div#canvas_wrapper {
                width: 70%;
                height: 70%;
            }
            h1.name {
                position: absolute;
                display: block;
                background-image: url('../assets/imgs/name-background.png');
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                font-size: 3vw;
                padding: 15px 85px 25px 85px;
                margin-top: 400px;
            }
        }
        div.details {
          display: block;
          position: relative;
          padding: 5% 10%;
          background-color: var(--beige);
          div.base-stats {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            column-gap: 50px;
            justify-content: center;
            align-content: center;
            div.stat-wrapper {
              h4.stat-name {
                font-size: 1.5vw;
                text-align: center;
                margin-bottom: 20px;
              }
              h2.stat {
                font-size: 2.5vw;
                text-align: center;
                margin-left: auto;
                margin-right: auto;
                width: 94px;
                height: 70px;
                padding-top: 30px;
                background-image: url('../assets/imgs/stat_background.png');
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
              }
            }
            
          }
        }
        @media screen and (max-width: 768px) {
            div.header {
                height: 156.25vw;
                h1.name {
                  font-size: 6vw;
                }
            }
            div.details {
              div.base-stats {
                grid-template-columns: 1fr 1fr;
              }
            }
        }
    }
</style>
