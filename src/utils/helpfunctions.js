export function isText(value) {
  return typeof value === 'string' && value.trim() !== '';
}
