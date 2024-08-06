/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 ./public/models/chess/chess_set_2k.gltf 
*/

import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

const xPositions = {
  a: 0.203,
  b: 0.145,
  c: 0.087,
  d: 0.029,
  e: -0.029,
  f: -0.087,
  g: -0.145,
  h: -0.203,
} as const;

const yPositions = {
  1: -0.203,
  2: -0.145,
  3: -0.084,
  4: -0.026,
  5: 0.032,
  6: 0.09,
  7: 0.144,
  8: 0.202,
} as const;

const positions = {
  a1: [xPositions.a, 0.017, yPositions[1]],
  a2: [xPositions.a, 0.017, yPositions[2]],
  a3: [xPositions.a, 0.017, yPositions[3]],
  a4: [xPositions.a, 0.017, yPositions[4]],
  a5: [xPositions.a, 0.017, yPositions[5]],
  a6: [xPositions.a, 0.017, yPositions[6]],
  a7: [xPositions.a, 0.017, yPositions[7]],
  a8: [xPositions.a, 0.017, yPositions[8]],

  b1: [xPositions.b, 0.017, yPositions[1]],
  b2: [xPositions.b, 0.017, yPositions[2]],
  b3: [xPositions.b, 0.017, yPositions[3]],
  b4: [xPositions.b, 0.017, yPositions[4]],
  b5: [xPositions.b, 0.017, yPositions[5]],
  b6: [xPositions.b, 0.017, yPositions[6]],
  b7: [xPositions.b, 0.017, yPositions[7]],
  b8: [xPositions.b, 0.017, yPositions[8]],

  c1: [xPositions.c, 0.017, yPositions[1]],
  c2: [xPositions.c, 0.017, yPositions[2]],
  c3: [xPositions.c, 0.017, yPositions[3]],
  c4: [xPositions.c, 0.017, yPositions[4]],
  c5: [xPositions.c, 0.017, yPositions[5]],
  c6: [xPositions.c, 0.017, yPositions[6]],
  c7: [xPositions.c, 0.017, yPositions[7]],
  c8: [xPositions.c, 0.017, yPositions[8]],

  d1: [xPositions.d, 0.017, yPositions[1]],
  d2: [xPositions.d, 0.017, yPositions[2]],
  d3: [xPositions.d, 0.017, yPositions[3]],
  d4: [xPositions.d, 0.017, yPositions[4]],
  d5: [xPositions.d, 0.017, yPositions[5]],
  d6: [xPositions.d, 0.017, yPositions[6]],
  d7: [xPositions.d, 0.017, yPositions[7]],
  d8: [xPositions.d, 0.017, yPositions[8]],

  e1: [xPositions.e, 0.017, yPositions[1]],
  e2: [xPositions.e, 0.017, yPositions[2]],
  e3: [xPositions.e, 0.017, yPositions[3]],
  e4: [xPositions.e, 0.017, yPositions[4]],
  e5: [xPositions.e, 0.017, yPositions[5]],
  e6: [xPositions.e, 0.017, yPositions[6]],
  e7: [xPositions.e, 0.017, yPositions[7]],
  e8: [xPositions.e, 0.017, yPositions[8]],

  f1: [xPositions.f, 0.017, yPositions[1]],
  f2: [xPositions.f, 0.017, yPositions[2]],
  f3: [xPositions.f, 0.017, yPositions[3]],
  f4: [xPositions.f, 0.017, yPositions[4]],
  f5: [xPositions.f, 0.017, yPositions[5]],
  f6: [xPositions.f, 0.017, yPositions[6]],
  f7: [xPositions.f, 0.017, yPositions[7]],
  f8: [xPositions.f, 0.017, yPositions[8]],

  g1: [xPositions.g, 0.017, yPositions[1]],
  g2: [xPositions.g, 0.017, yPositions[2]],
  g3: [xPositions.g, 0.017, yPositions[3]],
  g4: [xPositions.g, 0.017, yPositions[4]],
  g5: [xPositions.g, 0.017, yPositions[5]],
  g6: [xPositions.g, 0.017, yPositions[6]],
  g7: [xPositions.g, 0.017, yPositions[7]],
  g8: [xPositions.g, 0.017, yPositions[8]],

  h1: [xPositions.h, 0.017, yPositions[1]],
  h2: [xPositions.h, 0.017, yPositions[2]],
  h3: [xPositions.h, 0.017, yPositions[3]],
  h4: [xPositions.h, 0.017, yPositions[4]],
  h5: [xPositions.h, 0.017, yPositions[5]],
  h6: [xPositions.h, 0.017, yPositions[6]],
  h7: [xPositions.h, 0.017, yPositions[7]],
  h8: [xPositions.h, 0.017, yPositions[8]],
} as const;

export default function Model() {
  const modelRef = useRef<Group>(null!);
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.PI;
    }
  }, []);
  const { nodes, materials } = useGLTF(
    "/models/chess/chess_set_2k.gltf"
  ) as any;
  const [whitePositions, setWhitePositions] = useState({
    rook_1: positions.a1,
    knight_1: positions.b1,
    bishop_1: positions.c1,
    king: positions.d1,
    queen: positions.e1,
    bishop_2: positions.f1,
    knight_2: positions.g1,
    rook_2: positions.h1,

    pawn_1: positions.a2,
    pawn_2: positions.b2,
    pawn_3: positions.c2,
    pawn_4: positions.d2,
    pawn_5: positions.e2,
    pawn_6: positions.f2,
    pawn_7: positions.g2,
    pawn_8: positions.h2,
  });

  const [blackPositions, setBlackPositions] = useState({
    rook_1: positions.a8,
    knight_1: positions.b8,
    bishop_1: positions.c8,
    king: positions.d8,
    queen: positions.e8,
    bishop_2: positions.f8,
    knight_2: positions.g8,
    rook_2: positions.h8,

    pawn_1: positions.a7,
    pawn_2: positions.b7,
    pawn_3: positions.c7,
    pawn_4: positions.d7,
    pawn_5: positions.e7,
    pawn_6: positions.f7,
    pawn_7: positions.g7,
    pawn_8: positions.h7,
  });
  return (
    <group dispose={null} ref={modelRef}>
      <mesh
        geometry={nodes.piece_rook_white_01.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.rook_1}
      />
      <mesh
        geometry={nodes.piece_pawn_white_01.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_1}
      />
      <group position={whitePositions.bishop_1}>
        <mesh
          geometry={nodes.Cylinder003.geometry}
          material={materials.chess_set_pieces_white}
        />
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.chess_set_pieces_white}
        />
      </group>
      <mesh
        geometry={nodes.piece_queen_white.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.queen}
      />
      <mesh
        geometry={nodes.piece_king_white.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.king}
      />
      <mesh
        geometry={nodes.piece_knight_white_01.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.knight_1}
      />
      <mesh
        geometry={nodes.board.geometry}
        material={materials.chess_set_board}
      />
      <mesh
        geometry={nodes.piece_knight_white_02.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.knight_2}
      />
      <mesh
        geometry={nodes.piece_rook_white_02.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.rook_2}
      />
      <group position={whitePositions.bishop_2}>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.chess_set_pieces_white}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.chess_set_pieces_white}
        />
      </group>
      <mesh
        geometry={nodes.piece_pawn_white_02.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_2}
      />
      <mesh
        geometry={nodes.piece_pawn_white_03.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_3}
      />
      <mesh
        geometry={nodes.piece_pawn_white_04.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_4}
      />
      <mesh
        geometry={nodes.piece_pawn_white_05.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_5}
      />
      <mesh
        geometry={nodes.piece_pawn_white_06.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_6}
      />
      <mesh
        geometry={nodes.piece_pawn_white_07.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_7}
      />
      <mesh
        geometry={nodes.piece_pawn_white_08.geometry}
        material={materials.chess_set_pieces_white}
        position={whitePositions.pawn_8}
      />
      <mesh
        geometry={nodes.piece_rook_black_01.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.rook_2}
      />
      <mesh
        geometry={nodes.piece_pawn_black_01.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_7}
      />
      <group position={blackPositions.bishop_1}>
        <mesh
          geometry={nodes.Cylinder022.geometry}
          material={materials.chess_set_pieces_black}
        />
        <mesh
          geometry={nodes.Cylinder022_1.geometry}
          material={materials.chess_set_pieces_black}
        />
      </group>
      <mesh
        geometry={nodes.piece_queen_black.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.queen}
      />
      <mesh
        geometry={nodes.piece_king_black.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.king}
      />
      <mesh
        geometry={nodes.piece_knight_black_01.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.knight_1}
      />
      <mesh
        geometry={nodes.piece_knight_black_02.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.knight_2}
      />
      <mesh
        geometry={nodes.piece_rook_black_02.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.rook_1}
      />
      <group position={blackPositions.bishop_2}>
        <mesh
          geometry={nodes.Cylinder025.geometry}
          material={materials.chess_set_pieces_black}
        />
        <mesh
          geometry={nodes.Cylinder025_1.geometry}
          material={materials.chess_set_pieces_black}
        />
      </group>
      <mesh
        geometry={nodes.piece_pawn_black_02.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_8}
      />
      <mesh
        geometry={nodes.piece_pawn_black_03.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_2}
      />
      <mesh
        geometry={nodes.piece_pawn_black_04.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_3}
      />
      <mesh
        geometry={nodes.piece_pawn_black_05.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_4}
      />
      <mesh
        geometry={nodes.piece_pawn_black_06.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_5}
      />
      <mesh
        geometry={nodes.piece_pawn_black_07.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_6}
      />
      <mesh
        geometry={nodes.piece_pawn_black_08.geometry}
        material={materials.chess_set_pieces_black}
        position={blackPositions.pawn_1}
      />
    </group>
  );
}

useGLTF.preload("/chess_set_2k.gltf");
