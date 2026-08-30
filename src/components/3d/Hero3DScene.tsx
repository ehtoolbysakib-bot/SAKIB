import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  Laptop,
  Layers,
  Globe2,
  Shield,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Zap,
} from 'lucide-react';

type SceneMode = 'laptop' | 'core' | 'globe' | 'shield';

export const Hero3DScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentMode, setCurrentMode] = useState<SceneMode>('laptop');
  const [autoRotate, setAutoRotate] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  // References to communicate with the Three.js loop
  const modeRef = useRef<SceneMode>('laptop');
  const autoRotateRef = useRef(true);
  const triggerBurstRef = useRef<(() => void) | null>(null);
  const zoomInRef = useRef<(() => void) | null>(null);
  const zoomOutRef = useRef<(() => void) | null>(null);
  const resetCameraRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    modeRef.current = currentMode;
  }, [currentMode]);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 5.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // 2. Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x06b6d4, 4, 30);
    cyanPointLight.position.set(4, 4, 4);
    scene.add(cyanPointLight);

    const bluePointLight = new THREE.PointLight(0x3b82f6, 3, 30);
    bluePointLight.position.set(-4, -2, 3);
    scene.add(bluePointLight);

    const emeraldPointLight = new THREE.PointLight(0x10b981, 2, 20);
    emeraldPointLight.position.set(0, 5, -2);
    scene.add(emeraldPointLight);

    // 3. Parent Master 3D Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Dynamic procedural canvas texture for the 3D laptop screen
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const screenCtx = screenCanvas.getContext('2d')!;
    const screenTexture = new THREE.CanvasTexture(screenCanvas);

    let codeLines = [
      '// MD SAKIB HOSEN — Full Stack Developer',
      'const dev = new Developer({',
      '  name: "MD SAKIB HOSEN",',
      '  exp: "6+ Years",',
      '  focus: ["Web Apps", "Bots", "Cyber Security"],',
      '  status: "ONLINE & READY"',
      '});',
      '',
      'dev.deploy({ stack: ["React", "Node", "Python"] });',
      '> Compiling 3D Engine... [SUCCESS 60FPS]',
    ];

    let codeCharOffset = 0;
    const updateScreenCanvas = (time: number) => {
      screenCtx.fillStyle = '#090d16';
      screenCtx.fillRect(0, 0, 512, 320);

      // Terminal Header
      screenCtx.fillStyle = '#1e293b';
      screenCtx.fillRect(0, 0, 512, 36);

      // Window dots
      screenCtx.fillStyle = '#f43f5e';
      screenCtx.beginPath();
      screenCtx.arc(20, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#eab308';
      screenCtx.beginPath();
      screenCtx.arc(36, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      screenCtx.fillStyle = '#22c55e';
      screenCtx.beginPath();
      screenCtx.arc(52, 18, 5, 0, Math.PI * 2);
      screenCtx.fill();

      // Title
      screenCtx.font = 'bold 13px monospace';
      screenCtx.fillStyle = '#94a3b8';
      screenCtx.fillText('terminal@sakib-os: ~/portfolio-3d', 75, 22);

      // Live matrix code lines
      screenCtx.font = '13px monospace';
      codeLines.forEach((line, idx) => {
        if (line.startsWith('//')) {
          screenCtx.fillStyle = '#06b6d4';
        } else if (line.startsWith('>')) {
          screenCtx.fillStyle = '#22c55e';
        } else if (line.includes('name:') || line.includes('exp:')) {
          screenCtx.fillStyle = '#38bdf8';
        } else {
          screenCtx.fillStyle = '#e2e8f0';
        }
        screenCtx.fillText(line, 24, 68 + idx * 24);
      });

      // Blinking terminal cursor
      if (Math.floor(time * 2) % 2 === 0) {
        screenCtx.fillStyle = '#06b6d4';
        screenCtx.fillRect(24 + (codeLines[codeLines.length - 1].length * 7.8), 68 + (codeLines.length - 1) * 24 - 11, 8, 14);
      }

      screenTexture.needsUpdate = true;
    };

    // ==========================================
    // MODE 1: 3D CYBER LAPTOP & LIVE TERMINAL
    // ==========================================
    const laptopGroup = new THREE.Group();
    masterGroup.add(laptopGroup);

    // Laptop Base
    const baseGeo = new THREE.BoxGeometry(2.6, 0.08, 1.8);
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.2,
    });
    const baseMesh = new THREE.Mesh(baseGeo, metalMat);
    laptopGroup.add(baseMesh);

    // Glowing Keyboard
    const keyboardGeo = new THREE.PlaneGeometry(2.3, 1.0);
    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0891b2,
      emissiveIntensity: 0.4,
      roughness: 0.5,
    });
    const keyboardMesh = new THREE.Mesh(keyboardGeo, keyboardMat);
    keyboardMesh.rotation.x = -Math.PI / 2;
    keyboardMesh.position.set(0, 0.045, 0.15);
    laptopGroup.add(keyboardMesh);

    // Trackpad
    const trackpadGeo = new THREE.PlaneGeometry(0.8, 0.45);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.5,
      roughness: 0.3,
    });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.rotation.x = -Math.PI / 2;
    trackpadMesh.position.set(0, 0.045, 0.65);
    laptopGroup.add(trackpadMesh);

    // Laptop Screen Lid (Tilted back 105 degrees)
    const screenLidGroup = new THREE.Group();
    screenLidGroup.position.set(0, 0.04, -0.88);
    screenLidGroup.rotation.x = 0.25; // tilted open
    laptopGroup.add(screenLidGroup);

    const lidFrameGeo = new THREE.BoxGeometry(2.6, 1.7, 0.06);
    const lidFrameMesh = new THREE.Mesh(lidFrameGeo, metalMat);
    lidFrameMesh.position.set(0, 0.85, 0);
    screenLidGroup.add(lidFrameMesh);

    // Glowing Screen Display with Live Canvas
    const screenDisplayGeo = new THREE.PlaneGeometry(2.45, 1.55);
    const screenDisplayMat = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });
    const screenDisplayMesh = new THREE.Mesh(screenDisplayGeo, screenDisplayMat);
    screenDisplayMesh.position.set(0, 0.85, 0.035);
    screenLidGroup.add(screenDisplayMesh);

    // Orbiting Tech Cubes around Laptop
    const orbitingTechGroup = new THREE.Group();
    laptopGroup.add(orbitingTechGroup);

    const techBadgeColors = [0x06b6d4, 0x3b82f6, 0x10b981, 0x8b5cf6, 0xf59e0b, 0xec4899];
    const techCubes: { mesh: THREE.Mesh; angle: number; speed: number; radius: number; y: number }[] = [];

    techBadgeColors.forEach((col, i) => {
      const cubeGeo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
      const cubeMat = new THREE.MeshStandardMaterial({
        color: col,
        emissive: col,
        emissiveIntensity: 0.6,
        metalness: 0.3,
        roughness: 0.2,
      });
      const mesh = new THREE.Mesh(cubeGeo, cubeMat);
      orbitingTechGroup.add(mesh);

      techCubes.push({
        mesh,
        angle: (i / techBadgeColors.length) * Math.PI * 2,
        speed: 0.012 + (i % 2) * 0.006,
        radius: 2.1 + (i % 3) * 0.35,
        y: (i % 2 === 0 ? 0.6 : -0.4) + Math.sin(i) * 0.3,
      });
    });

    // ==========================================
    // MODE 2: 3D QUANTUM CRYSTAL CORE
    // ==========================================
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    const crystalGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.8,
      thickness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    coreGroup.add(crystalMesh);

    const crystalWireGeo = new THREE.WireframeGeometry(crystalGeo);
    const crystalWireMat = new THREE.LineBasicMaterial({
      color: 0x67e8f9,
      linewidth: 2,
    });
    const crystalWire = new THREE.LineSegments(crystalWireGeo, crystalWireMat);
    coreGroup.add(crystalWire);

    // Inner Glowing Core
    const innerCoreGeo = new THREE.OctahedronGeometry(0.7, 0);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x22d3ee,
      emissiveIntensity: 1.2,
      wireframe: true,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // Core Gyro Rings
    const gyroGroup = new THREE.Group();
    coreGroup.add(gyroGroup);

    const createGyroRing = (radius: number, tube: number, color: number) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 64);
      const ringMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.2,
      });
      return new THREE.Mesh(ringGeo, ringMat);
    };

    const gRing1 = createGyroRing(2.1, 0.025, 0x06b6d4);
    gRing1.rotation.x = Math.PI / 3;
    const gRing2 = createGyroRing(2.4, 0.02, 0x3b82f6);
    gRing2.rotation.y = Math.PI / 4;
    const gRing3 = createGyroRing(2.7, 0.015, 0x10b981);
    gRing3.rotation.z = Math.PI / 2;
    gyroGroup.add(gRing1, gRing2, gRing3);

    // ==========================================
    // MODE 3: 3D CYBER GLOBE & NETWORK
    // ==========================================
    const globeGroup = new THREE.Group();
    masterGroup.add(globeGroup);

    const globeGeo = new THREE.SphereGeometry(1.6, 24, 24);
    const globeWire = new THREE.WireframeGeometry(globeGeo);
    const globeMat = new THREE.LineBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.65,
    });
    const globeMesh = new THREE.LineSegments(globeWire, globeMat);
    globeGroup.add(globeMesh);

    // Globe Inner Solid Core
    const globeInnerGeo = new THREE.SphereGeometry(1.45, 32, 32);
    const globeInnerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0369a1,
      emissiveIntensity: 0.3,
      roughness: 0.4,
    });
    const globeInnerMesh = new THREE.Mesh(globeInnerGeo, globeInnerMat);
    globeGroup.add(globeInnerMesh);

    // Orbital Satellite Rings on Globe
    const globeRingGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 64);
    const globeRingMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const globeRing = new THREE.Mesh(globeRingGeo, globeRingMat);
    globeRing.rotation.x = Math.PI / 2.5;
    globeGroup.add(globeRing);

    // Beacons / Hotspots on Globe
    const beaconCount = 12;
    const beaconGroup = new THREE.Group();
    globeGroup.add(beaconGroup);

    for (let i = 0; i < beaconCount; i++) {
      const bGeo = new THREE.SphereGeometry(0.06, 12, 12);
      const bMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
      const bMesh = new THREE.Mesh(bGeo, bMat);

      const phi = Math.acos(-1 + (2 * i) / beaconCount);
      const theta = Math.sqrt(beaconCount * Math.PI) * phi;
      bMesh.position.setFromSphericalCoords(1.6, phi, theta);
      beaconGroup.add(bMesh);
    }

    // ==========================================
    // MODE 4: 3D CYBER SHIELD & BOT ENGINE
    // ==========================================
    const shieldGroup = new THREE.Group();
    masterGroup.add(shieldGroup);

    // Shield Shape (Hexagonal cylinder prism / 3D Shield)
    const shieldGeo = new THREE.CylinderGeometry(1.6, 1.2, 0.3, 6);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
      metalness: 0.7,
      roughness: 0.2,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldMesh.rotation.x = Math.PI / 2;
    shieldGroup.add(shieldMesh);

    // Outer Neon Shield Ring
    const shieldRingGeo = new THREE.TorusGeometry(1.9, 0.03, 16, 6);
    const shieldRingMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.9,
    });
    const shieldRing = new THREE.Mesh(shieldRingGeo, shieldRingMat);
    shieldGroup.add(shieldRing);

    // Central Bot Emblem (Tetrahedron)
    const botEmblemGeo = new THREE.TetrahedronGeometry(0.8);
    const botEmblemMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x60a5fa,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const botEmblemMesh = new THREE.Mesh(botEmblemGeo, botEmblemMat);
    botEmblemMesh.position.z = 0.3;
    shieldGroup.add(botEmblemMesh);

    // ==========================================
    // PARTICLES FIELD & EXPLOSION ENGINE
    // ==========================================
    const particleCount = 140;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x06b6d4,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particleMesh);

    // Burst shockwave particles
    const burstCount = 100;
    const burstGeo = new THREE.BufferGeometry();
    const burstPos = new Float32Array(burstCount * 3);
    const burstVels: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < burstCount; i++) {
      const i3 = i * 3;
      burstPos[i3] = 0;
      burstPos[i3 + 1] = 0;
      burstPos[i3 + 2] = 0;

      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const speed = 0.05 + Math.random() * 0.12;

      burstVels.push({
        x: Math.sin(theta) * Math.cos(phi) * speed,
        y: Math.sin(theta) * Math.sin(phi) * speed,
        z: Math.cos(theta) * speed,
      });
    }

    burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3));
    const burstMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.1,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });
    const burstMesh = new THREE.Points(burstGeo, burstMat);
    scene.add(burstMesh);

    let isBurstActive = false;
    let burstProgress = 0;

    triggerBurstRef.current = () => {
      isBurstActive = true;
      burstProgress = 0;
      burstMat.opacity = 1;
      const arr = burstGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < burstCount * 3; i++) {
        arr[i] = 0;
      }
      burstGeo.attributes.position.needsUpdate = true;
    };

    // ==========================================
    // INTERACTION & ORBIT CONTROL LOGIC
    // ==========================================
    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let rotationVelocityX = 0;
    let rotationVelocityY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      setIsInteracting(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevPointerX = clientX;
      prevPointerY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevPointerX;
      const deltaY = clientY - prevPointerY;

      masterGroup.rotation.y += deltaX * 0.01;
      masterGroup.rotation.x += deltaY * 0.01;

      rotationVelocityY = deltaX * 0.005;
      rotationVelocityX = deltaY * 0.005;

      prevPointerX = clientX;
      prevPointerY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Zoom Functions
    zoomInRef.current = () => {
      camera.position.z = Math.max(3.2, camera.position.z - 0.6);
    };

    zoomOutRef.current = () => {
      camera.position.z = Math.min(8.5, camera.position.z + 0.6);
    };

    resetCameraRef.current = () => {
      camera.position.set(0, 0.8, 5.5);
      masterGroup.rotation.set(0, 0, 0);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(3.2, Math.min(8.5, camera.position.z + e.deltaY * 0.003));
    };
    dom.addEventListener('wheel', onWheel, { passive: false });

    // ResizeObserver
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

    // ==========================================
    // RENDER / ANIMATION LOOP
    // ==========================================
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Update screen text canvas
      updateScreenCanvas(time);

      // Visibility based on selected mode
      const activeMode = modeRef.current;
      laptopGroup.visible = activeMode === 'laptop';
      coreGroup.visible = activeMode === 'core';
      globeGroup.visible = activeMode === 'globe';
      shieldGroup.visible = activeMode === 'shield';

      // Auto-rotation when not manually dragging
      if (autoRotateRef.current && !isDragging) {
        masterGroup.rotation.y += 0.008;
      } else if (!isDragging) {
        // Inertia damping
        masterGroup.rotation.y += rotationVelocityY;
        masterGroup.rotation.x += rotationVelocityX;
        rotationVelocityY *= 0.92;
        rotationVelocityX *= 0.92;
      }

      // Mode-specific animations
      if (activeMode === 'laptop') {
        // Floating laptop gentle levitation
        laptopGroup.position.y = Math.sin(time * 1.5) * 0.1;
        laptopGroup.rotation.z = Math.sin(time * 0.8) * 0.03;

        // Orbiting tech cubes
        techCubes.forEach((cube) => {
          cube.angle += cube.speed;
          cube.mesh.position.x = Math.cos(cube.angle) * cube.radius;
          cube.mesh.position.z = Math.sin(cube.angle) * cube.radius;
          cube.mesh.position.y = cube.y + Math.sin(time * 2 + cube.angle) * 0.2;
          cube.mesh.rotation.x += 0.02;
          cube.mesh.rotation.y += 0.03;
        });
      } else if (activeMode === 'core') {
        crystalMesh.rotation.y += 0.01;
        crystalMesh.rotation.x += 0.006;
        crystalWire.rotation.y += 0.01;
        crystalWire.rotation.x += 0.006;
        innerCore.rotation.y -= 0.02;
        innerCore.rotation.z += 0.015;

        gRing1.rotation.z += 0.012;
        gRing2.rotation.z -= 0.009;
        gRing3.rotation.z += 0.007;

        coreGroup.position.y = Math.sin(time * 2) * 0.15;
      } else if (activeMode === 'globe') {
        globeMesh.rotation.y += 0.005;
        globeInnerMesh.rotation.y += 0.005;
        globeRing.rotation.z += 0.015;
        globeGroup.position.y = Math.sin(time * 1.6) * 0.1;
      } else if (activeMode === 'shield') {
        shieldMesh.rotation.z += 0.005;
        shieldRing.rotation.z -= 0.008;
        botEmblemMesh.rotation.x += 0.02;
        botEmblemMesh.rotation.y += 0.03;
        shieldGroup.position.y = Math.sin(time * 2) * 0.12;
      }

      // Particle background drifting
      particleMesh.rotation.y = time * 0.02;

      // Burst expansion animation
      if (isBurstActive) {
        burstProgress += delta * 1.5;
        const arr = burstGeo.attributes.position.array as Float32Array;

        for (let i = 0; i < burstCount; i++) {
          const i3 = i * 3;
          arr[i3] += burstVels[i].x;
          arr[i3 + 1] += burstVels[i].y;
          arr[i3 + 2] += burstVels[i].z;
        }

        burstGeo.attributes.position.needsUpdate = true;
        burstMat.opacity = Math.max(0, 1 - burstProgress);

        if (burstProgress >= 1) {
          isBurstActive = false;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();

      dom.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);

      dom.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      dom.removeEventListener('wheel', onWheel);

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      screenTexture.dispose();
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 3D Mode Selector Tabs */}
      <div className="w-full flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 mb-2 shadow-lg z-20">
        <button
          onClick={() => setCurrentMode('laptop')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentMode === 'laptop'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">3D Laptop</span>
          <span className="sm:hidden">Laptop</span>
        </button>

        <button
          onClick={() => setCurrentMode('core')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentMode === 'core'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Quantum Core</span>
          <span className="sm:hidden">Core</span>
        </button>

        <button
          onClick={() => setCurrentMode('globe')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentMode === 'globe'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Globe2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Network Globe</span>
          <span className="sm:hidden">Globe</span>
        </button>

        <button
          onClick={() => setCurrentMode('shield')}
          className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-all ${
            currentMode === 'shield'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
              : 'text-slate-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Cyber Shield</span>
          <span className="sm:hidden">Shield</span>
        </button>
      </div>

      {/* 3D Viewport Box */}
      <div
        id="hero-3d-scene-container"
        ref={containerRef}
        className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/20 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
      >
        {/* Floating Top Status HUD */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none flex items-center gap-2">
          <div className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-bold uppercase">{currentMode} 3D ENGINE</span>
          </div>
        </div>

        {/* Action Controls HUD on Right */}
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-xl border border-cyan-500/30 shadow-lg">
          <button
            onClick={() => setAutoRotate((prev) => !prev)}
            className={`p-2 rounded-lg text-xs font-mono transition-colors ${
              autoRotate ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title="Toggle Auto-Rotate"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <button
            onClick={() => zoomInRef.current?.()}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => zoomOutRef.current?.()}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-mono transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <button
            onClick={() => triggerBurstRef.current?.()}
            className="p-2 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-600 transition-colors"
            title="Detonate 3D Particle Shockwave"
          >
            <Zap className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Interactive Hint */}
        <div className="absolute bottom-3 inset-x-0 z-10 pointer-events-none flex justify-center">
          <div className="px-3.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-2 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>
              {isInteracting
                ? '3D Orbit Active — Rotating freely'
                : '360° Drag / Swipe to rotate 3D model'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
