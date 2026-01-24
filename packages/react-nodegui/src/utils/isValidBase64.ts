export function isValidBase64(base64: string) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9\-\+\.]+)?;base64,[a-zA-Z0-9+/=\s]+$/;
  return regex.test(base64.trim());
}