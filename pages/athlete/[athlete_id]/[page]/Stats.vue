<script setup lang="ts">
import {IAthlete} from "~/utils/interfaces/Athlete";
import Button from "~/components/Button.vue";
import CustomInput from "~/components/CustomInput.vue";
import {format, isDate, parseISO} from "date-fns";
import {API} from "~/composable/api";
import {IStats} from "~/utils/interfaces/Stats";

interface BioProps {
  athlete: IAthlete
}

const {athlete} = defineProps<BioProps>()

function SubmitStats(event: FormDataEvent) {
  event.preventDefault()
  console.log('submit')
  const formData = new FormData(event.target as HTMLFormElement)
  // log formdata
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  // generate json object from form data
  const object: Partial<IStats> = {};
  formData.forEach((value, key) => {
    if (key === 'averageFightTime') {
      object[key] = value as string
      return
    }
    // if decimal store as float
    if (value.toString().includes('.')) {
      object[key] = parseFloat(value as string);
      return
    }
    object[key] = parseInt(value as string, 10);
  });


  object.id = athlete.stats.id

  if (object.id) {
    return API.getInstance().patchStats(object as IStats)
  }
  return API.getInstance().postStats({
    ...object, athlete: {
      id: athlete.id
    } as IAthlete
  } as IStats)


}

</script>

<template>
  <div class="space-y-14">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Striking Statistics</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Flavour text description about this data.</h2>
      <form @submit="SubmitStats">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="Striking Accuracy %"
                input-name="strikingAccuracyPercentage"
                placeholder="Enter Accuracy %"
                :value="athlete.stats.strikingAccuracyPercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Striking Defense %"
                input-name="significantStrikesDefensePercentage"
                placeholder="Enter Defense %"
                :value="athlete.stats.significantStrikesDefensePercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Landed"
                input-name="significantStrikesLanded"
                placeholder="Enter Strikes Landed"
                :value="athlete.stats.significantStrikesLanded || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Absorbed (per min)"
                input-name="significantStrikesAbsorbedPerMin"
                placeholder="Enter Strikes Absorbed"
                :value="athlete.stats.significantStrikesAbsorbedPerMin || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Attempted"
                input-name="significantStrikesAttempted"
                placeholder="Enter Strikes Attempted"
                :value="athlete.stats.significantStrikesAttempted || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Knockdown Ratio"
                input-name="knockdownAverage"
                placeholder="Enter Knockdown Ratio"
                :value="athlete.stats.knockdownAverage || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Landed (per 15min)"
                input-name="significantStrikesAbsorbedPerMin"
                placeholder="Enter Strikes Landed"
                :value="athlete.stats.significantStrikesAbsorbedPerMin || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Average Fight Time"
                input-name="averageFightTime"
                placeholder="Enter Average Fight Time"
                :value="athlete.stats.averageFightTime || 'unknown'"
                input-type="string"
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
      </form>
    </section>
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Grappling Statistics</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Flavour text description about this data.</h2>
      <form @submit="SubmitStats">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Grappling Accuracy %"
                input-name="grapplingAccuracyPercentage"
                placeholder="Enter Accuracy %"
                :value="athlete.stats.grapplingAccuracyPercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedown Defense %"
                input-name="takedownDefensePercentage"
                placeholder="Enter Defense %"
                :value="athlete.stats.takedownDefensePercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedowns Landed"
                input-name="takedownsLanded"
                placeholder="Enter Takedowns Landed"
                :value="athlete.stats.takedownsLanded || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedowns Average (per 15min)"
                input-name="takedownAveragePer15Min"
                placeholder="Enter Takedowns Average"
                :value="athlete.stats.takedownAveragePer15Min || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedowns Attempted"
                input-name="takedownsAttempted"
                placeholder="Enter Takedowns Attempted"
                :value="athlete.stats.takedownsAttempted || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Submission Ratio"
                input-name="submissionAverage"
                placeholder="Enter Submission Ratio"
                :value="athlete.stats.submissionAverage || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
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
      </form>

    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
