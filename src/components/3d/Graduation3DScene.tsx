import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Graduation3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 200;
    const height = container.clientHeight || 200;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'low-power',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 2, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // Graduation Cap Inspired Futuristic Geometric Structure
    // 1. Top diamond cap plate
    const capGeo = new THREE.CylinderGeometry(1.1, 1.1, 0.08, 4);
    const capMat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.3,
      metalness: 0.4,
      roughness: 0.2,
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.rotation.y = Math.PI / 4;
    group.add(capMesh);

    // Wireframe edge
    const edgeGeo = new THREE.WireframeGeometry(capGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x22d3ee });
    const edgeMesh = new THREE.LineSegments(edgeGeo, edgeMat);
    edgeMesh.rotation.y = Math.PI / 4;
    group.add(edgeMesh);

    // 2. Base skullcap cylinder
    const baseGeo = new THREE.CylinderGeometry(0.55, 0.5, 0.4, 32);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0284c7,
      emissiveIntensity: 0.2,
      metalness: 0.6,
      roughness: 0.3,
    });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = -0.24;
    group.add(baseMesh);

    // 3. Futuristic floating ring of accomplishment
    const ringGeo = new THREE.TorusGeometry(1.35, 0.02, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.6,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.8;
    group.add(ringMesh);

    // 4. Center jewel / knowledge orb
    const orbGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.9,
    });
    const orbMesh = new THREE.Mesh(orbGeo, orbMat);
    orbMesh.position.y = 0.1;
    group.add(orbMesh);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (prefersReducedMotion) {
        renderer.render(scene, camera);
        return;
      }
      const time = clock.getElapsedTime();
      group.rotation.y = time * 0.5;
      group.position.y = Math.sin(time * 1.5) * 0.1;
      ringMesh.rotation.z = time * 0.8;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      capGeo.dispose();
      capMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      orbGeo.dispose();
      orbMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="graduation-3d-scene"
      ref={containerRef}
      className="w-36 h-36 sm:w-44 sm:h-44 mx-auto flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    />
  );
};
