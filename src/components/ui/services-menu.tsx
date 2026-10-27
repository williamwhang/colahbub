"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/content/services";
import styles from "./services-menu.module.css";

export function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const [scrollHidden, setScrollHidden] = useState(false);
  const introReady = useRef(false);
  const root = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => { introReady.current = true; }, reducedMotion ? 0 : 4800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let previousY = window.scrollY;
    let direction = 0;
    let distance = 0;
    let frame = 0;

    function update() {
      frame = 0;
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const y = Math.max(0, Math.min(window.scrollY, maxY));
      const delta = y - previousY;
      previousY = y;
      if (!introReady.current || open) return;
      if (y <= 56) {
        setScrollHidden(false);
        distance = 0;
        return;
      }
      if (!delta) return;
      const nextDirection = Math.sign(delta);
      if (nextDirection !== direction) distance = 0;
      direction = nextDirection;
      distance += Math.abs(delta);
      if (distance >= 10) {
        setScrollHidden(direction > 0);
        distance = 0;
      }
    }
    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    function onFocus(event: FocusEvent) {
      if (event.target instanceof Element && event.target.closest("[data-header-logo]")) {
        setScrollHidden(false);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("focusin", onFocus);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("focusin", onFocus);
      window.cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header
      className={styles.menu}
      ref={root}
      data-open={open}
      data-scroll-hidden={scrollHidden && !open}
      onFocusCapture={() => setScrollHidden(false)}
    >
      <div className={styles.bar}>
        <button
          ref={trigger}
          className={styles.trigger}
          type="button"
          aria-expanded={open}
          aria-controls="services-panel"
          onClick={() => setOpen(!open)}
        >
          <span className={styles.caption}>
            <span className={styles.captionWindow}>
              <span className={styles.captionTrack}>
                <span>Nossos serviços</span>
                <span aria-hidden="true">Nossos serviços</span>
              </span>
            </span>
          </span>
          <span className={styles.plus} aria-hidden="true" />
        </button>
      </div>
      <nav
        className={styles.panel}
        id="services-panel"
        aria-label="Serviços"
        aria-hidden={!open}
        inert={!open}
      >
        <div className={styles.panelInner}>
          <ul className={styles.list}>
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`} onClick={() => {
                  setOpen(false);
                  requestAnimationFrame(() => document.getElementById(service.id)?.focus({ preventScroll: true }));
                }}>
                  <span>{service.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
