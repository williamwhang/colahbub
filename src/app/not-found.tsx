import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        Página não encontrada
      </h1>
      <p className="mt-4 text-muted">A página que você procura não existe.</p>
      <Link href="/" className="mt-8 w-fit underline underline-offset-4">
        Voltar ao início
      </Link>
    </main>
  );
}
