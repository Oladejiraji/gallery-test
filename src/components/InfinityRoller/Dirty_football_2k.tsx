/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/dirty_football_2k.gltf/dirty_football_2k.gltf 
*/

import React, { MutableRefObject, Ref, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group, MathUtils, Mesh, Quaternion, Vector3 } from "three";
import useKeyboard from "@/hooks/useKeyboard";
import { useFrame } from "@react-three/fiber";

export default function DirtyBall({
  rugRef,
}: {
  rugRef: MutableRefObject<Group>;
}) {
  const ref = useRef<Mesh>(null!);
  const scaleVector = useMemo(() => new Vector3(7, 7, 7), []);
  const decelerator = useMemo(() => new Vector3(), []);
  const angularVelocity = useMemo(() => new Vector3(), []);
  const rotator = useMemo(() => new Quaternion(), []);
  const keyMap = useKeyboard();
  const { nodes, materials } = useGLTF(
    "/models/dirty_football_2k.gltf/dirty_football_2k.gltf"
  );

  useFrame((_, delta) => {
    keyMap["KeyW"] && (angularVelocity.x -= delta * 8);
    keyMap["KeyS"] && (angularVelocity.x += delta * 8);
    keyMap["KeyD"] && (angularVelocity.z -= delta * 8);
    keyMap["KeyA"] && (angularVelocity.z += delta * 8);

    rotator.setFromAxisAngle(angularVelocity, delta).normalize();
    ref.current.applyQuaternion(rotator);

    angularVelocity.lerp(decelerator, 0.01);

    rugRef.current.position.x += angularVelocity.z * delta;
    rugRef.current.position.z -= angularVelocity.x * delta;

    rugRef.current.position.x = rugRef.current.position.x % 0.8;
    rugRef.current.position.z = rugRef.current.position.z % 1.3;
    // rugRef.current.position.x = MathUtils.lerp(
    //   rugRef.current.position.z,
    //   rugRef.current.position.z % 0.8,
    //   0.1
    // );
    // rugRef.current.position.z = MathUtils.lerp(
    //   rugRef.current.position.x,
    //   rugRef.current.position.x % 1.3,
    //   0.1
    // );
  });

  return (
    <group dispose={null}>
      <mesh
        scale={scaleVector}
        ref={ref}
        geometry={nodes.dirty_football.geometry}
        material={materials.dirty_football}
        position={[0.003, 0.114, -0.002]}
      />
    </group>
  );
}

useGLTF.preload("/models/dirty_football_2k.gltf/dirty_football_2k.gltf");
