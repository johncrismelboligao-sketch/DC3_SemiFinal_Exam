<script setup>
import ReservationItem from './ReservationItem.vue'

defineProps({
  reservations: {
    type: Array,
    required: true
  }
})

defineEmits([
  'mark-used',
  'delete'
])
</script>
<template>
  <div>
    <h2>Reservation List</h2>

    <p v-if="reservations.length === 0">
      No reservations available.
    </p>

    <div v-else>
      <ReservationItem
        v-for="reservation in reservations"
        :key="reservation.id"
        :reservation="reservation"
        @mark-used="$emit('mark-used', $event)"
        @delete="$emit('delete', $event)"
      />
    </div>
  </div>
</template>