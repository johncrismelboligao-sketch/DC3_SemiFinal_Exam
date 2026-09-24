<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['reservation-added'])

const form = reactive({
  equipmentName: '',
  purpose: '',
  equipmentType: '',
  reservationDate: ''
})

const errors = reactive({
  equipmentName: '',
  purpose: '',
  equipmentType: '',
  reservationDate: ''
})

function validateForm() {
  errors.equipmentName = ''
  errors.purpose = ''
  errors.equipmentType = ''
  errors.reservationDate = ''

  let valid = true

  if (!form.equipmentName.trim()) {
    errors.equipmentName =
      'Equipment name is required.'
    valid = false
  }

  if (!form.purpose.trim()) {
    errors.purpose =
      'Purpose is required.'
    valid = false
  }

  if (!form.equipmentType) {
    errors.equipmentType =
      'Equipment type is required.'
    valid = false
  }

  if (!form.reservationDate) {
    errors.reservationDate =
      'Reservation date is required.'
    valid = false
  }

  return valid
}

function submitForm() {
  if (!validateForm()) {
    return
  }

  const reservation = {
    id: Date.now(),
    equipmentName: form.equipmentName,
    purpose: form.purpose,
    equipmentType: form.equipmentType,
    reservationDate: form.reservationDate,
    status: 'Reserved'
  }

  emit('reservation-added', reservation)

  form.equipmentName = ''
  form.purpose = ''
  form.equipmentType = ''
  form.reservationDate = ''
}
</script>
<template>
  <div>
    <h2>Reservation Form</h2>

    <form @submit.prevent="submitForm">

      <div>
        <label>Equipment Name:</label>
        <input
          v-model="form.equipmentName"
          type="text"
        >

        <p v-if="errors.equipmentName">
          {{ errors.equipmentName }}
        </p>
      </div>

      <br>

      <div>
        <label>Purpose:</label>
        <input
          v-model="form.purpose"
          type="text"
        >

        <p v-if="errors.purpose">
          {{ errors.purpose }}
        </p>
      </div>

      <br>

      <div>
        <label>Equipment Type:</label>

        <select v-model="form.equipmentType">
          <option value="">Select Equipment Type</option>
          <option value="Laptop">Laptop</option>
          <option value="Projector">Projector</option>
          <option value="Camera">Camera</option>
          <option value="Audio Equipment">
            Audio Equipment
          </option>
        </select>

        <p v-if="errors.equipmentType">
          {{ errors.equipmentType }}
        </p>
      </div>

      <br>

      <div>
        <label>Reservation Date:</label>

        <input
          v-model="form.reservationDate"
          type="date"
        >

        <p v-if="errors.reservationDate">
          {{ errors.reservationDate }}
        </p>
      </div>

      <br>

      <button type="submit">
        Add Reservation
      </button>

    </form>
  </div>
</template>