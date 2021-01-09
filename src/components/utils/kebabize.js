export function kebabize(string) {
  return string.toUpperCase().split(' ').join('-');
}