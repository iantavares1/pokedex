export const formatId = (id) =>
  id > 99 ? `#${id}` : id > 9 ? `#0${id}` : `#00${id}`
