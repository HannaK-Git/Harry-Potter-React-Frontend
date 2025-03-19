import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const MaraudersMap = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls, mixer;
    let frameId = null;

    const clock = new THREE.Clock();

    // 1) SCENE
    scene = new THREE.Scene();

    // 2) CAMERA
    camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);

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
      `${process.env.PUBLIC_URL}/map.glb`,
      (gltf) => {
        const model = gltf.scene;

        // Add to scene
        scene.add(model);

        // (A) Center the model around (0,0,0)
        centerModel(model);

         model.rotation.x = -Math.PI / -2.5; 

        // (B) Make it bigger right away – pick any factor you want (5, 10, etc.)
        model.scale.set(20, 20, 20);

        // Set up animation
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);

          // The single animation is named "Open":
          const openClip = THREE.AnimationClip.findByName(
            gltf.animations,
            "Open"
          );
          if (openClip) {
            const action = mixer.clipAction(openClip);
            // Play once
            action.setLoop(THREE.LoopOnce, 1);
            action.clampWhenFinished = true; // stay in final open pose
            action.play();
          }
        }
      },
      undefined,
      (error) => {
        console.error("Error loading map.glb:", error);
      }
    );

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
      obj.position.x += -center.x+0.13;
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

export default MaraudersMap;
