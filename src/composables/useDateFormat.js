export function useDateFormatter() {
  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }

  return {
    formatDate
  }
}