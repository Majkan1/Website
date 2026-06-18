"use client";

import { useEffect } from "react";

/**
 * Renders the custom cursor and wires up the interactive behaviour from the
 * original design: cursor follow, hover states, nav blur-on-scroll, and the
 * reveal-on-scroll IntersectionObserver. All effects run after mount against
 * the server-rendered DOM, so the page content stays SEO-friendly.
 */
export default function ClientEffects() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursorRing");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const animate = () => {
      if (cursor) {
        cursor.style.left = mx + "px";
        cursor.style.top = my + "px";
      }
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring) {
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const hoverEls = Array.from(document.querySelectorAll("a, button"));
    const enter = () => {
      cursor?.classList.add("hover");
      ring?.classList.add("hover");
    };
    const leave = () => {
      cursor?.classList.remove("hover");
      ring?.classList.remove("hover");
    };
    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      observer.disconnect();
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  );
}
