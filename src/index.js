import * as THREE from "three";

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGL1Renderer({ canvas });


//camera
const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;
camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 4; //Camera Position

const scene = new THREE.Scene();


///resize
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const pixelRatio = window.devicePixelRatio; 
    const width = (canvas.clientWidth * pixelRatio) | 0;
    const height = (canvas.clientHeight * pixelRatio) | 0;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }


  ///render

function render(time) {
    time *= 0.001; // convert time to seconds
  
    //resiponsiveに対応
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
  
  
  
    renderer.render(scene, camera);
  
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);