import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from "@react-three/drei";

const Hero3D = () => {
  return (
    <Canvas className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#ffffff"
          attach="material"
          distort={0.4} // distortion level
          speed={2}     // speed of animation
        />
      </Sphere>
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
};

export default Hero3D;
