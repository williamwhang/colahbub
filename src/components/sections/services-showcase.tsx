"use client";

import { useEffect, useRef, useState } from "react";
import { serviceShowcase } from "@/content/service-showcase";
import styles from "./services-showcase.module.css";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;
    function measure() {
      frame = 0;
      let nearest = 0;
      let distance = Infinity;
      rows.current.forEach((row, index) => {
        if (!row) return;
        const rect = row.getBoundingClientRect();
        const delta = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        if (delta < distance) { distance = delta; nearest = index; }
      });
      setActive(nearest);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  function select(index: number) {
    setActive(index);
    const row = rows.current[index];
    if (!row) return;
    const rect = row.getBoundingClientRect();
    window.scrollTo({
      top: window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return (
    <section className={styles.section} id="servicos" aria-labelledby="services-title">
      <div className={styles.navigation}>
        <h2 className={styles.heading} id="services-title">Nossos serviços</h2>
        <ol className={styles.list}>
          {serviceShowcase.map((service, index) => (
            <li key={service.id} id={service.id} tabIndex={-1}
              ref={(node) => { rows.current[index] = node; }}
              className={styles.row} data-active={active === index}>
              <button type="button" onClick={() => select(index)}
                onPointerEnter={(event) => { if (event.pointerType !== "touch") setActive(index); }}
                onFocus={() => setActive(index)}
                aria-current={active === index ? "true" : undefined}
                aria-controls={`service-panel-${service.id}`}>
                <span className={styles.serviceTitle}>
                  {index === 0 ? <>Desenvolvimento<br />E Produção</> : service.name}
                </span>
              </button>
              <span className={styles.line} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
      <div className={styles.stage}>
        {serviceShowcase.map((service, index) => (
          <div key={service.id} id={`service-panel-${service.id}`}
            className={styles.slide} data-active={active === index}
            aria-hidden={active !== index} inert={active !== index}>
            <div className={styles.image} style={{ backgroundImage: `url("${service.image}")` }} />
            <div className={styles.shade} />
            <div className={styles.copy}>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
