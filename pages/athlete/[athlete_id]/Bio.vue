<script setup lang="ts">
import {IAthlete} from "~/utils/interfaces/Athlete";
import Button from "~/components/Button.vue";
import Input from "~/components/Input.vue";
import {format, isDate} from "date-fns";

interface BioProps {
  athlete: IAthlete
}

const {athlete} = defineProps<BioProps>()
</script>

<template>
  <div class="space-y-14">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Fighter Bio</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Description flavour text on your user profile information</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="First Name"
              input-name="first_name"
              placeholder="Enter Fighter name"
              :value="athlete.firstName === 'undefined' ? '' : athlete.firstName"
              input-type="text"
              class="mt-4"
          />
        </div>
        <div class="sm:col-span-3">
          <Input
              label="Last Name"
              input-name="last_name"
              placeholder="Enter Fighter name"
              :value="athlete.lastName === 'undefined' ? '' : athlete.lastName"
              input-type="text"
              class="mt-4"
          />
        </div>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="Nickname"
              input-name="nickname"
              placeholder="Enter Fighter name"
              :value="athlete.nickname === 'undefined' ? '' : athlete.nickname"
              input-type="text"
              class="mt-4"
          />
        </div>
        <div class="sm:col-span-3">
          <Input
              label="UID"
              input-name="uid"
              placeholder="Enter Fighter ID"
              :value="athlete.id"
              input-type="text"
              disabled
              class="mt-4"
          />
        </div>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="Height"
              input-name="height"
              placeholder="Enter Fighter Height"
              :value="athlete.height === 'undefined' ? '' : athlete.height"
              input-type="text"
              class="mt-4"
          />
        </div>
        <div class="sm:col-span-3">
          <Input
              label="DOB"
              input-name="dob"
              placeholder="Enter Fighter Date of Birth"
              :value="isDate(athlete.birthdate) ? format(athlete.birthdate, 'dd/MM/yyyy') : ''"
              input-type="date"
              class="mt-4"
          />
        </div>
      </div>

      <!-- button group horizontal -->
      <div class="mt-10 flex justify-start space-x-4">
        <Button
            button-type="submit"
            button-label="Save"
            button-class="primary"
        />
        <Button
            button-type="button"
            button-label="Cancel"
            button-class="cta"
        />
      </div>

    </section>
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Fighter Stats</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Description flavour text on your user profile information</h2>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="Team"
              input-name="team"
              placeholder="Enter Fighter Team"
              :value="athlete.team === 'undefined' ? '' : athlete.team"
              input-type="text"
              class="mt-4"
          />
        </div>
        <div class="sm:col-span-3">
          <Input
              label="Stance"
              input-name="stance"
              placeholder="Enter Fighter Stance"
              :value="athlete.stance === 'undefined' ? '' : athlete.stance"
              input-type="text"
              class="mt-4"
          />
        </div>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="Style"
              input-name="style"
              placeholder="Enter Fighter Style"
              :value="athlete.style === 'undefined' ? '' : athlete.style"
              input-type="text"
              class="mt-4"
          />
        </div>
      </div>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <Input
              label="Height"
              input-name="height"
              placeholder="Enter Fighter Height"
              :value="athlete.height === 'undefined' ? '' : athlete.height"
              input-type="text"
              class="mt-4"
          />
        </div>
        <div class="sm:col-span-3">
          <Input
              label="Weight"
              input-name="weight"
              placeholder="Enter Fighter Weight"
              :value="athlete.weight === 'undefined' ? '' : athlete.weight"
              input-type="text"
              class="mt-4"
          />
        </div>
      </div>

      <!-- button group horizontal -->
      <div class="mt-10 flex justify-start space-x-4">
        <Button
            button-type="submit"
            button-label="Save"
            button-class="primary"
        />
        <Button
            button-type="button"
            button-label="Cancel"
            button-class="cta"
        />
      </div>

    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
