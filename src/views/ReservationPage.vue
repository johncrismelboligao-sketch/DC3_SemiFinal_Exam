<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  equipmentName: '',
  purpose: '',
  equipmentType: '',
  reservationDate: ''
})

const errors = ref({})
</script>

<template>
  <form @submit.prevent="handleSubmit" class="reservation-form">
    <div class="field">
      <label for="equipmentName">Equipment Name</label>
      <input
        id="equipmentName"
        type="text"
        v-model="form.equipmentName"
      />
      <span class="error" v-if="errors.equipmentName">{{ errors.equipmentName }}</span>
    </div>

    <div class="field">
      <label for="purpose">Purpose</label>
      <input
        id="purpose"
        type="text"
        v-model="form.purpose"
      />
      <span class="error" v-if="errors.purpose">{{ errors.purpose }}</span>
    </div>

    <div class="field">
      <label for="equipmentType">Equipment Type</label>
      <select id="equipmentType" v-model="form.equipmentType">
        <option value="" disabled>Select type</option>
        <option value="Laptop">Laptop</option>
        <option value="Projector">Projector</option>
        <option value="Camera">Camera</option>
        <option value="Audio Equipment">Audio Equipment</option>
      </select>
      <span class="error" v-if="errors.equipmentType">{{ errors.equipmentType }}</span>
    </div>

    <div class="field">
      <label for="reservationDate">Reservation Date</label>
      <input
        id="reservationDate"
        type="date"
        v-model="form.reservationDate"
      />
      <span class="error" v-if="errors.reservationDate">{{ errors.reservationDate }}</span>
    </div>

    <button type="submit">Add Reservation</button>
  </form>
</template>