export const sortAbc = (a, b) => {
  const sortedA = a.toLowerCase();
  const sortedB = b.toLowerCase();

  if (sortedA > sortedB) return 1;
  if (sortedA < sortedB) return -1;

  return 0;
};

export const sortDec = (a, b) => {
  const sortedA = a.toLowerCase();
  const sortedB = b.toLowerCase();

  if (sortedA < sortedB) return 1;
  if (sortedA > sortedB) return -1;

  return 0;
};;
