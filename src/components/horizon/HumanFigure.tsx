import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  speed?: number;
  phase?: number;
  walking?: boolean;
}

/**
 * Stylized humanoid silhouette built from primitives.
 * Smooth metallic material — reads as a refined statuette.
 */
export function HumanFigure({
  position = [0, 0, 0],
  scale = 1,
  color = "#C9A24B",
  speed = 1,
  phase = 0,
  walking = true,
}: Props) {
  const root = useRef<THREE.Group>(null);
  const lArm = useRef<THREE.Group>(null);
  const rArm = useRef<THREE.Group>(null);
  const lLeg = useRef<THREE.Group>(null);
  const rLeg = useRef<THREE.Group>(null);
  const body = useRef<THREE.Group>(null);

  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(color),
        metalness: 0.85,
        roughness: 0.25,
        clearcoat: 0.6,
        clearcoatRoughness: 0.2,
        envMapIntensity: 1.2,
      }),
    [color],
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + phase;
    if (!walking) {
      if (body.current) body.current.position.y = Math.sin(t * 0.6) * 0.05;
      if (lArm.current) lArm.current.rotation.x = Math.sin(t * 0.5) * 0.15;
      if (rArm.current) rArm.current.rotation.x = -Math.sin(t * 0.5) * 0.15;
      return;
    }
    const swing = Math.sin(t * 2.4) * 0.7;
    const bob = Math.abs(Math.sin(t * 2.4)) * 0.08;
    if (lArm.current) lArm.current.rotation.x = swing;
    if (rArm.current) rArm.current.rotation.x = -swing;
    if (lLeg.current) lLeg.current.rotation.x = -swing * 0.8;
    if (rLeg.current) rLeg.current.rotation.x = swing * 0.8;
    if (body.current) body.current.position.y = bob;
  });

  return (
    <group ref={root} position={position} scale={scale}>
      <group ref={body}>
        {/* Head */}
        <mesh position={[0, 1.85, 0]} material={material} castShadow>
          <sphereGeometry args={[0.22, 32, 32]} />
        </mesh>
        {/* Neck */}
        <mesh position={[0, 1.6, 0]} material={material}>
          <cylinderGeometry args={[0.07, 0.09, 0.12, 16]} />
        </mesh>
        {/* Torso */}
        <mesh position={[0, 1.15, 0]} material={material} castShadow>
          <capsuleGeometry args={[0.28, 0.55, 8, 16]} />
        </mesh>
        {/* Hips */}
        <mesh position={[0, 0.7, 0]} material={material}>
          <capsuleGeometry args={[0.22, 0.1, 8, 16]} />
        </mesh>

        {/* Arms */}
        <group ref={lArm} position={[-0.34, 1.42, 0]}>
          <mesh position={[0, -0.35, 0]} material={material}>
            <capsuleGeometry args={[0.07, 0.6, 8, 16]} />
          </mesh>
        </group>
        <group ref={rArm} position={[0.34, 1.42, 0]}>
          <mesh position={[0, -0.35, 0]} material={material}>
            <capsuleGeometry args={[0.07, 0.6, 8, 16]} />
          </mesh>
        </group>

        {/* Legs */}
        <group ref={lLeg} position={[-0.13, 0.65, 0]}>
          <mesh position={[0, -0.4, 0]} material={material}>
            <capsuleGeometry args={[0.09, 0.7, 8, 16]} />
          </mesh>
        </group>
        <group ref={rLeg} position={[0.13, 0.65, 0]}>
          <mesh position={[0, -0.4, 0]} material={material}>
            <capsuleGeometry args={[0.09, 0.7, 8, 16]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}