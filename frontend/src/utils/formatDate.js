export function formatDate(value) {
  if (!value) return "Just now"

  const date = new Date(value)

  if (isNaN(date.getTime())) {
    return "Just now"
  }

  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}
