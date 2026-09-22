import { ref, watch } from 'vue'

const STORAGE_KEY = 'school-equipment-reservations'

function loadReservations() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

export function useReservations() {
  const reservations = ref(loadReservations())

  function saveToStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations.value))
  }

  function addReservation(reservation) {
    reservations.value.push({
      id: Date.now(),
      status: 'Pending',
      ...reservation
    })
  }

  function markAsUsed(id) {
    const record = reservations.value.find(r => r.id === id)
    if (record) record.status = 'Used'
  }

  function removeReservation(id) {
    reservations.value = reservations.value.filter(r => r.id !== id)
  }

  // Keep localStorage in sync on every change (add/update/delete)
  watch(reservations, saveToStorage, { deep: true })

  return { reservations, addReservation, markAsUsed, removeReservation }
}