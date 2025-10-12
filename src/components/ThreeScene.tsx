import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create geometric shapes
    const geometry1 = new THREE.IcosahedronGeometry(1, 0);
    const geometry2 = new THREE.OctahedronGeometry(0.8, 0);
    const geometry3 = new THREE.TetrahedronGeometry(0.6, 0);

    const material1 = new THREE.MeshPhongMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    const material2 = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });

    const material3 = new THREE.MeshPhongMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });

    const shape1 = new THREE.Mesh(geometry1, material1);
    const shape2 = new THREE.Mesh(geometry2, material2);
    const shape3 = new THREE.Mesh(geometry3, material3);

    shape1.position.set(0, 0, 0);
    shape2.position.set(0, 0, 0);
    shape3.position.set(0, 0, 0);

    scene.add(shape1);
    scene.add(shape2);
    scene.add(shape3);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 3;

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate shapes
      shape1.rotation.x += 0.005;
      shape1.rotation.y += 0.005;
      
      shape2.rotation.x -= 0.007;
      shape2.rotation.y += 0.007;
      
      shape3.rotation.x += 0.009;
      shape3.rotation.y -= 0.009;

      // Follow mouse
      const targetX = mousePosition.current.x * 0.5;
      const targetY = mousePosition.current.y * 0.5;
      
      shape1.position.x += (targetX - shape1.position.x) * 0.05;
      shape1.position.y += (targetY - shape1.position.y) * 0.05;
      
      shape2.position.x += (targetX * 0.8 - shape2.position.x) * 0.03;
      shape2.position.y += (targetY * 0.8 - shape2.position.y) * 0.03;
      
      shape3.position.x += (targetX * 0.6 - shape3.position.x) * 0.02;
      shape3.position.y += (targetY * 0.6 - shape3.position.y) * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometry1.dispose();
      geometry2.dispose();
      geometry3.dispose();
      material1.dispose();
      material2.dispose();
      material3.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ThreeScene;
