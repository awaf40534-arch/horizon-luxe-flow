import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { HumanFigure } from "./HumanFigure";

interface Props {
  variant?: "ambient" | "showcase";
  className?: string;
}

/**
 * Ambient: drifting silhouettes for hero background.
 * Showcase: a centered trio for the dedicated section.
 */
export function Scene3D({ variant = "ambient", className }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className={className} aria-hidden />;

  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 1.4, 6], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight
            position={[4, 6, 5]}
            intensity={1.4}
            color="#FFE9B0"
          />
          <directionalLight
            position={[-5, 2, -2]}
            intensity={0.8}
            color="#6B7CFF"
          />
          <Environment preset="city" />

          {variant === "ambient" ? (
            <>
              <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
                <HumanFigure
                  position={[-2.6, -1.2, 0]}
                  scale={0.85}
                  color="#C9A24B"
                  speed={1.1}
                  phase={0}
                />
              </Float>
              <Float speed={1.0} rotationIntensity={0.1} floatIntensity={0.3}>
                <HumanFigure
                  position={[0, -1.4, -1.2]}
                  scale={1}
                  color="#E8DCC4"
                  speed={0.9}
                  phase={1.4}
                />
              </Float>
              <Float speed={1.3} rotationIntensity={0.18} floatIntensity={0.45}>
                <HumanFigure
                  position={[2.6, -1.2, 0]}
                  scale={0.8}
                  color="#B488FF"
                  speed={1.2}
                  phase={0.8}
                />
              </Float>
            </>
          ) : (
            <>
              <HumanFigure
                position={[-1.8, -1.3, 0]}
                scale={0.95}
                color="#C9A24B"
                speed={1.0}
                phase={0}
              />
              <HumanFigure
                position={[0, -1.3, 0.4]}
                scale={1.1}
                color="#F2E6CC"
                speed={0.85}
                phase={1.2}
                walking={false}
              />
              <HumanFigure
                position={[1.8, -1.3, 0]}
                scale={0.95}
                color="#B488FF"
                speed={1.05}
                phase={2.1}
              />
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}