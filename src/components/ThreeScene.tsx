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

    // Create tech icon shapes with different colors
    const techIcons: THREE.Mesh[] = [];
    const iconConfigs = [
      { shape: 'box', color: 0x06b6d4, size: 0.8, position: [-2, 1, 0], rotation: [0.5, 0.3] }, // Docker blue
      { shape: 'cylinder', color: 0xff6b35, size: 0.6, position: [2, -1, 0], rotation: [0.3, 0.7] }, // Database orange
      { shape: 'torus', color: 0x3b82f6, size: 0.5, position: [-1.5, -1.5, 0], rotation: [0.7, 0.5] }, // Kubernetes blue
      { shape: 'octahedron', color: 0x10b981, size: 0.7, position: [1.8, 1.5, 0], rotation: [0.4, 0.6] }, // Node green
      { shape: 'cone', color: 0xf59e0b, size: 0.6, position: [0, -2, 0], rotation: [0.6, 0.4] }, // AWS orange
      { shape: 'tetrahedron', color: 0x8b5cf6, size: 0.5, position: [-2.5, 0, 0], rotation: [0.8, 0.2] }, // Purple accent
      { shape: 'dodecahedron', color: 0xec4899, size: 0.4, position: [2.5, 0.5, 0], rotation: [0.2, 0.8] }, // Pink accent
    ];

    iconConfigs.forEach(config => {
      let geometry;
      
      switch(config.shape) {
        case 'box':
          geometry = new THREE.BoxGeometry(config.size, config.size, config.size);
          break;
        case 'cylinder':
          geometry = new THREE.CylinderGeometry(config.size * 0.5, config.size * 0.5, config.size * 1.2, 8);
          break;
        case 'torus':
          geometry = new THREE.TorusGeometry(config.size, config.size * 0.3, 8, 16);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(config.size);
          break;
        case 'cone':
          geometry = new THREE.ConeGeometry(config.size * 0.6, config.size * 1.2, 8);
          break;
        case 'tetrahedron':
          geometry = new THREE.TetrahedronGeometry(config.size);
          break;
        case 'dodecahedron':
          geometry = new THREE.DodecahedronGeometry(config.size);
          break;
        default:
          geometry = new THREE.BoxGeometry(config.size, config.size, config.size);
      }

      const material = new THREE.MeshPhongMaterial({
        color: config.color,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(config.position[0], config.position[1], config.position[2]);
      mesh.userData = { 
        rotationSpeed: config.rotation,
        basePosition: config.position.slice()
      };
      
      scene.add(mesh);
      techIcons.push(mesh);
    });

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

      // Rotate and animate tech icons
      techIcons.forEach((icon, index) => {
        const speed = icon.userData.rotationSpeed;
        icon.rotation.x += speed[0] * 0.005;
        icon.rotation.y += speed[1] * 0.005;

        // Floating effect
        const time = Date.now() * 0.001;
        const basePos = icon.userData.basePosition;
        icon.position.y = basePos[1] + Math.sin(time + index) * 0.2;

        // Subtle mouse interaction
        const targetX = mousePosition.current.x * 0.3;
        const targetY = mousePosition.current.y * 0.3;
        const distance = 1 - (index * 0.1);
        
        icon.position.x += (basePos[0] + targetX * distance - icon.position.x) * 0.02;
      });

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
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      techIcons.forEach(icon => {
        icon.geometry.dispose();
        (icon.material as THREE.Material).dispose();
      });
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
