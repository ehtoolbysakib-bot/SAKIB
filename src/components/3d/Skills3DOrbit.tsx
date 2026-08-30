import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { skillsData } from '../../data/portfolioData';
import { Sparkles, RotateCw } from 'lucide-react';

export const Skills3DOrbit: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedSkill, setSelectedSkill] = useState<string>(skillsData[0].name);
  const [autoRotate, setAutoRotate] = useState(true);

  const autoRotateRef = useRef(true);
  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 3, 20);
    pointLight.position.set(3, 4, 5);
    scene.add(pointLight);

    const group = new THREE.Group();
    scene.add(group);

    // Central Sphere
    const centerGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.5,
      wireframe: true,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerMesh);

    // 9 Skill Orbit Nodes
    const skillNodes: {
      mesh: THREE.Mesh;
      phi: number;
      theta: number;
      radius: number;
      speed: number;
      name: string;
      color: number;
    }[] = [];

    const colors = [
      0x06b6d4, 0x3b82f6, 0x10b981, 0x8b5cf6, 0xf59e0b,
      0xec4899, 0x14b8a6, 0x6366f1, 0x0284c7,
    ];

    skillsData.forEach((skill, idx) => {
      const nodeGeo = new THREE.BoxGeometry(0.38, 0.38, 0.38);
      const col = colors[idx % colors.length];
      const nodeMat = new THREE.MeshStandardMaterial({
        color: col,
        emissive: col,
        emissiveIntensity: 0.6,
        metalness: 0.2,
        roughness: 0.3,
      });

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      group.add(nodeMesh);

      const phi = Math.acos(-1 + (2 * idx) / skillsData.length);
      const theta = Math.sqrt(skillsData.length * Math.PI) * phi;
      const radius = 2.0;

      nodeMesh.position.setFromSphericalCoords(radius, phi, theta);

      skillNodes.push({
        mesh: nodeMesh,
        phi,
        theta,
        radius,
        speed: 0.005 + (idx % 3) * 0.002,
        name: skill.name,
        color: col,
      });
    });

    // Orbit Ring Geometries
    const ringGeo = new THREE.TorusGeometry(2.0, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring1, ring2);

    // Mouse / Touch Rotation Interaction
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevX;
      const deltaY = clientY - prevY;

      group.rotation.y += deltaX * 0.01;
      group.rotation.x += deltaY * 0.01;

      prevX = clientX;
      prevY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Raycasting for clicking 3D skill cubes
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleClick = (e: MouseEvent) => {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      raycaster.setFromCamera(mouse, camera);
      const meshes = skillNodes.map((n) => n.mesh);
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object;
        const hitNode = skillNodes.find((n) => n.mesh === hitMesh);
        if (hitNode) {
          setSelectedSkill(hitNode.name);
        }
      }
    };
    dom.addEventListener('click', handleClick);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (autoRotateRef.current && !isDragging) {
        group.rotation.y += 0.008;
      }

      centerMesh.rotation.y += 0.01;
      centerMesh.rotation.x += 0.005;

      skillNodes.forEach((node, i) => {
        node.mesh.rotation.x += 0.02;
        node.mesh.rotation.y += 0.03;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      dom.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      dom.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      dom.removeEventListener('click', handleClick);

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-[280px] sm:h-[340px] rounded-2xl bg-slate-950 border border-cyan-500/30 overflow-hidden shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing">
        <div ref={mountRef} className="w-full h-full" />

        {/* HUD Overlay */}
        <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 border border-cyan-400/30 text-[11px] font-mono text-cyan-300">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>3D Skills Orbit Matrix</span>
        </div>

        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`absolute top-3 right-3 p-1.5 rounded-lg border text-xs font-mono transition-colors ${
            autoRotate
              ? 'bg-cyan-500 text-white border-cyan-400'
              : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
          }`}
          title="Toggle Auto-Rotate"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>

        {/* Selected Skill Badge */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="text-[10px] sm:text-xs font-mono text-slate-400 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-700">
            Click any cube or drag to rotate
          </span>
          <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/90 px-3 py-1 rounded-lg border border-cyan-400/40">
            Active: {selectedSkill}
          </span>
        </div>
      </div>
    </div>
  );
};
