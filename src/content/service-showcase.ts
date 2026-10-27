import { services } from "./services";

// Imagens provisórias da referência: https://www.flatlineagency.com/industry/fashion
export const serviceShowcase = [
  ["Para marcas que querem desenvolver uma coleção, criar produtos e coordenar sua fabricação de ponta a ponta.", "oDhkEiDfO6FSG7YwcRFg1Ho7Vg.png"],
  ["Para demandas específicas, como camisetas para eventos, campanhas, produtos personalizados e, futuramente, brindes.", "oTvmhReEZoDzj4ROY6ps3nOe2Q.png"],
  ["Para clientes que precisam de orientação, diagnóstico, planejamento ou acompanhamento recorrente da produção.", "iKUqA3brCPyeo3JZXTcj6Fg1k.png"],
].map(([description, image], index) => ({
  ...services[index],
  description,
  image: `https://framerusercontent.com/images/${image}?width=1600`,
}));
