<script setup>
import { useDateFormatter } from '../composables/useDateFormat'

defineProps({
  reservation: {
    type: Object,
    required: true
  }
})

defineEmits([
  'mark-used',
  'delete'
])

const { formatDate } = useDateFormatter()
</script>
<template>
  <div>
    <p>
      <strong>Equipment Name:</strong>
      {{ reservation.equipmentName }}
    </p>

    <p>
      <strong>Purpose:</strong>
      {{ reservation.purpose }}
    </p>

    <p>
      <strong>Equipment Type:</strong>
      {{ reservation.equipmentType }}
    </p>

    <p>
      <strong>Reservation Date:</strong>
      {{ formatDate(reservation.reservationDate) }}
    </p>

    <p>
      <strong>Status:</strong>
      {{ reservation.status }}
    </p>

    <button
      v-if="reservation.status === 'Reserved'"
      @click="$emit('mark-used', reservation.id)"
    >
      Mark as Used
    </button>

    <button
      @click="$emit('delete', reservation.id)"
    >
      Delete
    </button>


  </div>
</template>