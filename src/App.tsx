import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Direction from "./components/Direction";
import Engineering from "./components/Engineering";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack";
import Work from "./components/Work";
import { navItems } from "./components/constants";

function App() {
  const heroCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [maskImage, setMaskImage] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const targetMouse = useRef({
    x: -999,
    y: -999,
  });

  const smoothMouse = useRef({
    x: -999,
    y: -999,
  });

  const gridOffset = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    const canvas = heroCanvasRef.current;

    if (!hero || !canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetMouse.current.x = event.clientX;
      targetMouse.current.y = event.clientY;
    };

    const render = () => {
      const target = targetMouse.current;
      const current = smoothMouse.current;

      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      const normalizedX = current.x / width;
      const normalizedY = current.y / height;

      const targetGridX = (normalizedX - 0.5) * 16;
      const targetGridY = (normalizedY - 0.5) * 16;

      gridOffset.current.x += (targetGridX - gridOffset.current.x) * 0.06;

      gridOffset.current.y += (targetGridY - gridOffset.current.y) * 0.06;

      hero.style.setProperty("--grid-x", `${gridOffset.current.x}px`);

      hero.style.setProperty("--grid-y", `${gridOffset.current.y}px`);

      context.clearRect(0, 0, width, height);

      const gradient = context.createRadialGradient(
        current.x,
        current.y,
        0,
        current.x,
        current.y,
        260,
      );

      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(255,255,255,1)");
      gradient.addColorStop(0.6, "rgba(255,255,255,0.75)");
      gradient.addColorStop(0.75, "rgba(255,255,255,0.4)");
      gradient.addColorStop(0.88, "rgba(255,255,255,0.12)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(current.x, current.y, 260, 0, Math.PI * 2);
      context.fill();

      setMaskImage(`url(${canvas.toDataURL("image/png")})`);

      animationFrame = requestAnimationFrame(render);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <Navbar
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main>
        <Hero canvasRef={heroCanvasRef} maskImage={maskImage} />

        <About />
        <Experience />
        <Work />
        <Engineering />
        <Stack />
        <Direction />
        <Contact />
      </main>
    </div>
  );
}

export default App;
