import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Owl = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls, mixer;
    let frameId = null;
    let action;

    const clock = new THREE.Clock();

    // 1) SCENE
    scene = new THREE.Scene();

    // 2) CAMERA
    camera = new THREE.PerspectiveCamera(
      55,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(-40, 7, 75);

    // 3) RENDERER
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // transparent background
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    // 4) ORBIT CONTROLS
    controls = new OrbitControls(camera, renderer.domElement);

    // 5) LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Directional light so we see folds clearly
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // 6) GLTFLoader to get the model
    const loader = new GLTFLoader();
    loader.load(
      `${process.env.PUBLIC_URL}/owl.glb`,
      (gltf) => {
        const model = gltf.scene;

        // Add to scene
        scene.add(model);

        // (A) Center the model around (0,0,0)
        centerModel(model);

        // (B) Make it bigger right away
        model.scale.set(1, 1, 1);

        // Set up animation
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);

          // 1) Grab the first clip from gltf.animations
          const openClip = gltf.animations[0];

          // 3) Create an action from that clip
          action = mixer.clipAction(openClip);
          // set the speed of the animation
          action.timeScale = 0.5;

          // 4) Set loop mode
          action.setLoop(THREE.LoopRepeat, Infinity);

          // 5) Start the animation
          action.play();
        }
      },
      undefined,
      (error) => {
        console.error("Error loading map.glb:", error);
      }
    );
    // 7) Attach click event to toggle animation pause/resume
    renderer.domElement.addEventListener("click", () => {
      if (action) {
        action.paused = !action.paused;
       
      }
    });
    // 7) Animation loop
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // CLEANUP
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      renderer.dispose();
      // Only remove the canvas if the ref and DOM element still exist
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear(); // Remove all objects
      controls.dispose(); // Remove orbit controls
    };

    // Helper: Center the model at (0,0,0)
    function centerModel(obj) {
      const box = new THREE.Box3().setFromObject(obj);
      const center = box.getCenter(new THREE.Vector3());
      obj.position.x += -center.x;
      obj.position.y += -center.y;
      obj.position.z += -center.z;
    }
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", position: "relative" }}
    />
  );
};

export default Owl;
