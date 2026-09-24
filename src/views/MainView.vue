<script setup>
import ReservationForm from '../components/ReservationForm.vue'
import ReservationList from '../components/ReservationList.vue'

import { useReservations } from '../composables/useReservations'

const {
  reservations,
  addReservation,
  markAsUsed,
  removeReservation
} = useReservations()

function handleAddReservation(reservation) {
  addReservation(reservation)
}

function handleMarkUsed(id) {
  markAsUsed(id)
}

function handleDelete(id) {
  removeReservation(id)
}
</script>
<template>
  <div>
    <h1>School Equipment Reservations</h1>

    <ReservationForm
      @reservation-added="handleAddReservation"
    />


    <ReservationList
      :reservations="reservations"
      @mark-used="handleMarkUsed"
      @delete="handleDelete"
    />
  </div>
</template>