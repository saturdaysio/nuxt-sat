<script setup lang="ts">

import {IAthlete} from "~/utils/interfaces/Athlete";
import Button from "~/components/Button.vue";
import CustomInput from "~/components/CustomInput.vue";
import {format, isDate, parseISO} from "date-fns";

interface BioProps {
  athlete: IAthlete
}

const { athlete } = defineProps<BioProps>()

function SubmitAthleteData(event: FormDataEvent) {
  event.preventDefault()
  console.log('submit')
  const formData = new FormData(event.target as HTMLFormElement)
  // log formdata
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  // generate json object from form data
  const object: Partial<IAthlete> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  if (object.birthdate) {
    console.log(object["birthdate"])
  }
  // if (object.birthdate) {
  //   object.birthdate = format(new Date(object.birthdate), 'yyyy-MM-dd')
  // }
  // merge with athlete object
  object.id = athlete.id
  object.name = athlete.name
  if (!object.firstName) {
    object.firstName = athlete.firstName.replace(/^\s/, '')
    object.lastName = athlete.lastName
  } else {
    object.firstName = object.firstName.replace(/^\s/, '')
  }
  API.getInstance().patchAthlete(object)

}

function parseDate(date: Date | undefined, formatString: string): string {
  try {
    if (date) {
      return format(new Date(date), formatString)
    }
    return ''
  } catch (e) {
    console.log(e)
    return ''
  }
}

</script>

<template>
  <div class="space-y-14">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 px-4 py-8">
      <h1 class="text-2xl font-bold text-white">Fighter Bio</h1>
      <!--    sub title -->
      <h2 class="text-lg text-gray-400">Flavour text description for Athlete data.</h2>
      <form @submit="SubmitAthleteData">
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="First Name"
                input-name="firstName"
                placeholder="First name"
                :value="athlete.firstName === 'undefined' ? '' : athlete.firstName"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Last Name"
                input-name="lastName"
                placeholder="Last name"
                :value="athlete.lastName === 'undefined' ? '' : athlete.lastName"
                input-type="text"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Nickname"
                input-name="nickname"
                placeholder="Nickname"
                :value="athlete.nickname === 'undefined' ? '' : athlete.nickname"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="UID"
                input-name="uid"
                placeholder="Enter Fighter UID"
                :value="athlete.id"
                input-type="text"
                disabled
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Country"
                input-name="hometown"
                placeholder="Birth country"
                :value="athlete.hometown === 'undefined' ? '' : athlete.hometown"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="DOB"
                input-name="birthdate"
                placeholder="Date of Birth"
                :value="parseDate(athlete.birthdate, 'yyyy-MM-dd')"
                input-type="date"
                class="mt-4"
            />
          </div>
        </div>

        <!-- button group horizontal -->
        <div class="mt-8 flex justify-start space-x-4">
          <Button button-type="submit" button-label="Save" button-class="primary" />
          <Button button-type="button" button-label="Cancel" button-class="cta" />
        </div>
      </form>
    </section>
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 px-4 py-8">
      <h1 class="text-2xl font-bold text-white">Fighter Stats</h1>
      <!--    sub title -->
      <h2 class="text-lg text-gray-400">Flavour text description for Athlete data.</h2>
      <form @submit="SubmitAthleteData">
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Team"
                input-name="team"
                placeholder="Ex: American Top Team"
                :value="athlete.team === 'undefined' ? '' : athlete.team"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Stance"
                input-name="stance"
                placeholder="Ex: Orthodox"
                :value="athlete.stance === 'undefined' ? '' : athlete.stance"
                input-type="text"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Style"
                input-name="style"
                placeholder="Ex: Thug-jitsu"
                :value="athlete.style === 'undefined' ? '' : athlete.style"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Weightclass"
                input-name="weightclass"
                placeholder="Heavyweight"
                :value="athlete.weightclass === 'undefined' ? '' : athlete.weightclass"
                input-type="text"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Weight"
                input-name="weight"
                placeholder="Weight (lbs)"
                :value="athlete.weight === 'undefined' ? '' : athlete.weight"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Height"
                input-name="height"
                placeholder="Height (cm)"
                :value="athlete.height === 'undefined' ? '' : athlete.height"
                input-type="text"
                class="mt-4"
            />
          </div>
        </div>

        <!-- button group horizontal -->
        <div class="mt-8 flex justify-start space-x-4">
          <Button button-type="submit" button-label="Save" button-class="primary" />
          <Button button-type="button" button-label="Cancel" button-class="cta" />
        </div>
      </form>

    </section>
  </div>
</template>


<style scoped lang="scss">
</style>
