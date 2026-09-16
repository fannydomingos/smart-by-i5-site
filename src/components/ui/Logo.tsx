import Image from "next/image";

/**
 * Marca oficial: SMARTER com "by i5 stay" abaixo, na arte enviada pelo cliente.
 *
 * O lockup é empilhado e largo (2,57:1), então quem manda aqui é a altura — a
 * largura vem sozinha. No cabeçalho ela encolhe um pouco quando a página rola,
 * para a barra ficar mais discreta.
 */
export function Logo({
  className,
  compact = false,
}: {
  /** sobrescreve a altura padrão, ex.: "h-12 sm:h-14" no rodapé */
  className?: string;
  compact?: boolean;
}) {
  const height = className ?? (compact ? "h-8 sm:h-9" : "h-10 sm:h-11");

  return (
    <Image
      src="/img/logo-smarter.png"
      alt="SMARTER by i5 stay"
      width={906}
      height={352}
      priority
      className={`w-auto transition-all duration-500 ${height}`}
    />
  );
}
