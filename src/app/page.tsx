import Link from "next/link";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { ServicesMenu } from "@/components/ui/services-menu";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.intro}>
      <ServicesMenu />
      <section className={styles.content} id="hero" aria-label="Hero">
        <h1 className={styles.titlePosition}>
          <Link href="/" className={styles.brand} data-header-logo aria-label="co.lab.hub — início">
            <AnimatedLogo />
          </Link>
        </h1>
        <div className={styles.statement} id="motion">
          <span className={styles.label}>( O que fazemos )</span>
          <p className={styles.text}>
            <strong>Da ideia ao produto pronto.</strong>
            <br />
            Conectamos conhecimento, pessoas e produção para transformar projetos
            em produtos reais, com qualidade e acompanhamento do início ao fim.
          </p>
        </div>
      </section>
      <section className={styles.introduction} aria-label="Nossa parceria">
        <p className={styles.introductionAside}>
          Fundada por profissionais com experiência
        </p>
        <p className={styles.introductionMain}>
          Somos uma parceira de desenvolvimento e produção para marcas e empresas
          que querem tirar projetos do papel sem precisar gerenciar tudo sozinhas.
          Com experiência, uma rede de fornecedores e acompanhamento próximo,
          cuidamos dos bastidores para que nossos clientes possam focar no próprio
          negócio.
        </p>
      </section>
      <section className={styles.section} id="cases" aria-labelledby="cases-title">
        <h2 id="cases-title">Seleção de Cases &amp; Projetos</h2>
      </section>
      <ServicesShowcase />
      <section className={styles.section} id="big-numbers" aria-labelledby="numbers-title">
        <h2 id="numbers-title">Big numbers</h2>
      </section>
      <section className={styles.section} id="depoimentos" aria-labelledby="depoimentos-title">
        <h2 id="depoimentos-title">O que dizem nossos clientes</h2>
        <p className="mt-8 text-lg text-neutral-500">
          Em breve, este espaço reunirá os depoimentos e as avaliações dos nossos clientes.
        </p>
      </section>
      <section className={styles.section} id="marcas" aria-labelledby="marcas-title">
        <h2 id="marcas-title">Marcas com quem trabalhamos</h2>
      </section>
      <section className={styles.section} id="quem-somos" aria-labelledby="sobre-title">
        <h2 id="sobre-title">Quem somos</h2>
      </section>
      <section className={styles.section} id="contato" aria-labelledby="contato-title">
        <h2 id="contato-title">Contato</h2>
      </section>
      <footer className={styles.section} id="redes-sociais" aria-labelledby="redes-title">
        <h2 id="redes-title">Redes sociais</h2>
      </footer>
    </main>
  );
}
