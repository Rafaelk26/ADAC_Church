/*export function formatDate(d: string) {
  const data = new Date(d);

  const formatador = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    timeZone: 'America/Sao_Paulo'
  });

  return formatador.format(data);
}*/

export function formatDate(d: string) {
  const [ano, mes, dia] = d.split("-");

  return `${dia}/${mes}/${ano}`;
}