export function formatId(id: number) {
  return id > 99 ? `#${id}` : id > 9 ? `#0${id}` : `#00${id}`;
}
