export function debounce<T extends (...args: never[]) => unknown>(
  cb: T,
  wait: number,
) {
  let h: number
  const callable = (...args: never[]) => {
    clearTimeout(h)
    h = window.setTimeout(() => cb(...args), wait)
  }
  return <T>(<unknown>callable)
}
