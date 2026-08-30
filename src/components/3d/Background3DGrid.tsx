import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3DGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // 1. Floating 3D Geometric Objects Array
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    interface FloatingShape {
      mesh: THREE.Mesh | THREE.LineSegments;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      floatSpeed: number;
      floatOffset: number;
      initialY: number;
    }

    const shapes: FloatingShape[] = [];

    // Geometries
    const geometries = [
      new THREE.IcosahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
      new THREE.TetrahedronGeometry(0.9, 0),
      new THREE.TorusGeometry(0.6, 0.15, 12, 24),
      new THREE.BoxGeometry(0.8, 0.8, 0.8),
    ];

    const shapeCount = 18;
    for (let i = 0; i < shapeCount; i++) {
      const geo = geometries[i % geometries.length];
      const wireframe = new THREE.WireframeGeometry(geo);
      const wireMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0x3b82f6,
        transparent: true,
        opacity: 0.28,
        linewidth: 1.5,
      });

      const mesh = new THREE.LineSegments(wireframe, wireMat);

      // Random distribution across screen volume
      mesh.position.x = (Math.random() - 0.5) * 45;
      mesh.position.y = (Math.random() - 0.5) * 40;
      mesh.position.z = (Math.random() - 0.5) * 20 - 5;

      floatingGroup.add(mesh);

      shapes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.015,
        floatSpeed: 0.5 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y,
      });
    }

    // 2. Interactive Constellation Particles & Lines
    const particleCount = 65;
    const positions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = (Math.random() - 0.5) * 40;
      positions[i + 2] = (Math.random() - 0.5) * 15;

      velocities.push({
        x: (Math.random() - 0.5) * 0.012,
        y: (Math.random() - 0.5) * 0.012,
        z: (Math.random() - 0.5) * 0.008,
      });
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.16,
      transparent: true,
      opacity: 0.55,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Dynamic Connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0891b2,
      transparent: true,
      opacity: 0.18,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Mouse Tracking for Interactive Parallax Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.03;
      mouseY += (targetY - mouseY) * 0.03;
      camera.position.x = mouseX * 2.5;
      camera.position.y = -mouseY * 2.5;
      camera.lookAt(0, 0, 0);

      // Rotate and float 3D geometric shapes
      shapes.forEach((shape) => {
        shape.mesh.rotation.x += shape.rotSpeedX;
        shape.mesh.rotation.y += shape.rotSpeedY;
        shape.mesh.rotation.z += shape.rotSpeedZ;
        shape.mesh.position.y = shape.initialY + Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.8;
      });

      // Update particle positions & constellation lines
      const pos = particleGeometry.attributes.position.array as Float32Array;
      const linePositions: number[] = [];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        pos[i3] += velocities[i].x;
        pos[i3 + 1] += velocities[i].y;
        pos[i3 + 2] += velocities[i].z;

        if (Math.abs(pos[i3]) > 22) velocities[i].x *= -1;
        if (Math.abs(pos[i3 + 1]) > 22) velocities[i].y *= -1;
        if (Math.abs(pos[i3 + 2]) > 10) velocities[i].z *= -1;

        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3;
          const dx = pos[i3] - pos[j3];
          const dy = pos[i3 + 1] - pos[j3 + 1];
          const dz = pos[i3 + 2] - pos[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 7.0) {
            linePositions.push(pos[i3], pos[i3 + 1], pos[i3 + 2]);
            linePositions.push(pos[j3], pos[j3 + 1], pos[j3 + 2]);
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;

      if (linePositions.length > 0) {
        lineGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      geometries.forEach((g) => g.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-3d-grid-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
