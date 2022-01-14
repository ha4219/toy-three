import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  forwardRef,
} from "react";
import * as THREE from "three";
import { Container } from "@mui/material";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CircularProgress } from "@mui/material";
import { loaderFBXModel, loadGLTFModel } from "@lib/model";

// const easeOutCirc: number = x => ;
function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Scene = () => {
  const containerRef = useRef();
  const [renderer, setRenderer] = useState();
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [scene] = useState(new THREE.Scene());
  const [_camera, setCamera] = useState();
  const [_controls, setControls] = useState();
  const [loading, setLoading] = useState(true);

  const handleWindowResize = useCallback(() => {
    const { current: container } = containerRef;
    if (container && renderer) {
      // const scW = container["clientWidth"];
      // const scH = container["clientHeight"];
      const scW = window.innerWidth;
      const scH = window.innerHeight;
      renderer.setSize(scW, scH);
    }
  }, [renderer]);
  handleWindowResize();
  useEffect(() => {
    // const { current: container } = containerRef;
    const container = containerRef.current;

    if (container && !renderer) {
      // const scW = container["clientWidth"];
      // const scH = container["clientHeight"];
      const scW = window.innerWidth;
      const scH = window.innerHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      // renderer.setClearColor(0x000000, 0);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      // TODO add obj
      // const geometry = new THREE.BoxGeometry(5, 5, 5);
      // const _material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // const cube = new THREE.Mesh(geometry, _material);
      // scene.add(cube);
      // loaderFBXModel(scene, "/iron.FBX", {
      //   receiveShadow: false,
      //   castShadow: false,
      // });
      loadGLTFModel(scene, "/scene.gltf", {
        receiveShadow: false,
        castShadow: false,
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };
      requestAnimationFrame(animate);
      setLoading(false);

      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.addEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <Container
      ref={containerRef}
      maxWidth="sm"
      sx={{ height: "100%", position: "fixed", top: 0, left: 0,}}
    />
  );
};

export default Scene;
