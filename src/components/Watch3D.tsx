/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Compass, Cpu, Layers } from 'lucide-react';

export default function Watch3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.08);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // CORE GROUP
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. NEON VIOLET GLASS CORE (Icosahedron Geometry)
    const coreGeom = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0xA855F7, // Neon Violet
      emissive: 0x6366f1,
      emissiveIntensity: 0.4,
      shininess: 100,
      specular: 0xffffff,
      transparent: true,
      opacity: 0.65,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);

    // 2. OUTER FLOATING GLASS FRAME (Wireframe Box Geometry)
    const frameGeom = new THREE.BoxGeometry(2.4, 1.5, 2.4);
    const edges = new THREE.EdgesGeometry(frameGeom);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xD8B4FE, // Light light purple
      transparent: true,
      opacity: 0.4,
    });
    const frameLine = new THREE.LineSegments(edges, lineMat);
    coreGroup.add(frameLine);

    // 3. ORBITING WIREFRAME LAYOUT CARDS (Representing layout mockups)
    const orbitGroup = new THREE.Group();
    coreGroup.add(orbitGroup);

    const cards: THREE.Mesh[] = [];
    const cardColors = [0xA855F7, 0x818CF8, 0xC084FC];
    
    for (let i = 0; i < 3; i++) {
      // Small rectangles representing web components
      const cardGeom = new THREE.BoxGeometry(0.8, 0.5, 0.05);
      const cardMat = new THREE.MeshPhongMaterial({
        color: 0x0D0D12,
        emissive: cardColors[i],
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.85,
        shininess: 80,
      });
      const card = new THREE.Mesh(cardGeom, cardMat);
      
      // Distribute in Orbit
      const angle = (i * Math.PI * 2) / 3;
      card.position.x = Math.sin(angle) * 2.1;
      card.position.y = (Math.random() - 0.5) * 0.5;
      card.position.z = Math.cos(angle) * 2.1;
      card.rotation.y = -angle;
      orbitGroup.add(card);
      cards.push(card);
    }

    // 4. PURPLE PARTICLE SYSTEM (Futuristic digital sparks)
    const particleCount = 150;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.3 + Math.random() * 1.5;
      positions[i * 3] = Math.sin(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5;
      positions[i * 3 + 2] = Math.cos(angle) * radius;

      // Purple / Violet color scales
      const mix = Math.random();
      colors[i * 3] = mix * 0.66 + 0.34;      // red component
      colors[i * 3 + 1] = mix * 0.2 + 0.1;    // green component
      colors[i * 3 + 2] = 0.95;               // deep blue component
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    coreGroup.add(particles);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const purpleDirLight = new THREE.DirectionalLight(0xA855F7, 1.0);
    purpleDirLight.position.set(-5, -3, 3);
    scene.add(purpleDirLight);

    // CONTROLS / INTERACTION
    let previousMouseX = 0;
    let previousMouseY = 0;
    let targetRotationX = -0.15;
    let targetRotationY = 0.4;

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;
      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    // Touch support for premium mobile experience
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        setIsDragging(true);
        previousMouseX = e.touches[0].clientX;
        previousMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      const deltaY = e.touches[0].clientY - previousMouseY;
      targetRotationY += deltaX * 0.005;
      targetRotationX += deltaY * 0.005;
      previousMouseX = e.touches[0].clientX;
      previousMouseY = e.touches[0].clientY;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart);
    canvas.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseUp);

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) return;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    });

    resizeObserver.observe(container);

    // ANIMATION LOOP
    let requestID: number;

    const animate = () => {
      requestID = requestAnimationFrame(animate);

      // Spin central core and wires
      coreMesh.rotation.y += 0.01;
      coreMesh.rotation.x += 0.005;
      frameLine.rotation.y -= 0.003;
      frameLine.rotation.z += 0.002;

      // Orbit components rotation
      orbitGroup.rotation.y += 0.006;
      cards.forEach((card, idx) => {
        // Individual micro wobble / float effect
        card.rotation.x = Math.sin(Date.now() * 0.001 + idx) * 0.2;
        card.position.y = Math.sin(Date.now() * 0.0015 + idx) * 0.15;
      });

      // Smooth camera follower / damping
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.08;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.08;

      // Auto rotation in idle mode
      if (!isDragging) {
        targetRotationY += 0.002;
        particles.rotation.y -= 0.001;
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(requestID);
      resizeObserver.disconnect();
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseUp);

      // Dispose resources
      coreGeom.dispose();
      coreMat.dispose();
      frameGeom.dispose();
      edges.dispose();
      lineMat.dispose();
      
      cards.forEach(card => {
        card.geometry.dispose();
        (card.material as THREE.Material).dispose();
      });

      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[320px] md:h-[400px] border border-white/5 rounded-2xl bg-[#0D0D12]/40 backdrop-blur-md overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />

      {/* Aesthetic Overlays */}
      <div className="absolute top-4 left-4 flex items-center space-x-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/5 text-[9px] font-mono tracking-widest text-[#A855F7] uppercase select-none">
        <Rotate3d className="w-3 h-3 animate-spin duration-3000" />
        <span>3D DIGITAL CORE ENGINE</span>
      </div>

      <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-wider text-white/40 select-none pointer-events-none">
        DRAG TO INTERACT & SPIN ARCHITECTURE
      </div>

      <div className="absolute bottom-4 right-4 pointer-events-none select-none">
        <div className="flex flex-col items-end text-right">
          <span className="text-[10px] font-mono text-white tracking-widest uppercase">CORE VECTOR V2.0</span>
          <span className="text-[8px] font-mono text-[#A855F7]/80 tracking-wider">SECURE DIGITAL HUB</span>
        </div>
      </div>

      {isHovered && (
        <div className="absolute inset-0 bg-[#A855F7]/[0.02] pointer-events-none transition-opacity duration-300 border border-[#A855F7]/25 rounded-2xl animate-pulse" />
      )}
    </div>
  );
}
