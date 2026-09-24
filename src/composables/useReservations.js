import { ref, watch, onMounted } from 'vue'

export function useReservations() {
  const reservations = ref([])

  function addReservation(reservation) {
    reservations.value.push(reservation)
  }

  function markAsUsed(id) {
    const record = reservations.value.find(
      reservation => reservation.id === id
    )

    if (record) {
      record.status = 'Used'
    }
  }

  function removeReservation(id) {
    reservations.value = reservations.value.filter(
      record => record.id !== id
    )
  }

  onMounted(() => {
    const savedRecords = localStorage.getItem('reservations')

    if (savedRecords) {
      reservations.value = JSON.parse(savedRecords)
    }
  })

  watch(
    reservations,
    () => {
      localStorage.setItem(
        'reservations',
        JSON.stringify(reservations.value)
      )
    },
    { deep: true }
  )

  return {
    reservations,
    addReservation,
    markAsUsed,
    removeReservation
  }
}