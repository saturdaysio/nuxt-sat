<script setup lang="ts">

  import {IAthlete} from "~/utils/interfaces/Athlete";
  import Button from "~/components/Button.vue";
  import CustomInput from "~/components/CustomInput.vue";
  import {IStats} from "~/utils/interfaces/Stats";

  interface BioProps {
    athlete: IAthlete
  }

  const {athlete} = defineProps<BioProps>()

  function SubmitStats(payload: Event) {
    const event = payload as FormDataEvent
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

  definePageMeta({
    middleware: ['auth'],
    pageTransition: false,
    layoutTransition: false
  })

</script>


<template>
  <div class="space-y-4 md:space-y-6 lg:space-y-8">
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 px-4 py-8">
      <h1 class="text-2xl font-bold leading-8 text-white">Striking Statistics</h1>
      <span class="text-lg text-gray-400">Flavour text description about this data.</span>

      <form @submit="SubmitStats">
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="Striking Accuracy %"
                input-name="strikingAccuracyPercentage"
                placeholder="Striking Accuracy %"
                :value="athlete.stats.strikingAccuracyPercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Striking Defense %"
                input-name="significantStrikesDefensePercentage"
                placeholder="Striking Defense %"
                :value="athlete.stats.significantStrikesDefensePercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Landed"
                input-name="significantStrikesLanded"
                placeholder="Strikes Landed"
                :value="athlete.stats.significantStrikesLanded || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Absorbed (per min)"
                input-name="significantStrikesAbsorbedPerMin"
                placeholder="Strikes Absorbed"
                :value="athlete.stats.significantStrikesAbsorbedPerMin || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Attempted"
                input-name="significantStrikesAttempted"
                placeholder="Strikes Attempted"
                :value="athlete.stats.significantStrikesAttempted || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Knockdown Ratio"
                input-name="knockdownAverage"
                placeholder="0.00"
                :value="athlete.stats.knockdownAverage || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Significant Strikes Landed (per 15min)"
                input-name="significantStrikesAbsorbedPerMin"
                placeholder="Strikes Landed"
                :value="athlete.stats.significantStrikesAbsorbedPerMin || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Average Fight Time"
                input-name="averageFightTime"
                placeholder="0:00"
                :value="athlete.stats.averageFightTime || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
        </div>

        <!-- button group horizontal -->
        <div class="mt-8 flex flex-col sm:flex-row justify-start gap-6">
          <Button button-type="submit" button-label="Save" button-class="primary" />
          <Button button-type="button" button-label="Cancel" button-class="cta" />
        </div>
      </form>
    </section>
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 px-4 py-8">
      <h1 class="text-2xl font-bold leading-8 text-white">Grappling Statistics</h1>
      <span class="text-lg leading-6 text-gray-400">Flavour text description about this data.</span>

      <form @submit="SubmitStats">
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Grappling Accuracy %"
                input-name="grapplingAccuracyPercentage"
                placeholder="Grappling Accuracy %"
                :value="athlete.stats.grapplingAccuracyPercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedown Defense %"
                input-name="takedownDefensePercentage"
                placeholder="Takedown Defense %"
                :value="athlete.stats.takedownDefensePercentage || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedowns Landed"
                input-name="takedownsLanded"
                placeholder="Takedowns Landed"
                :value="athlete.stats.takedownsLanded || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedown Average (per 15min)"
                input-name="takedownAveragePer15Min"
                placeholder="Takedown Average"
                :value="athlete.stats.takedownAveragePer15Min || 'unknown'"
                input-type="number"
                min="0"
                max="100"
                step="any"
                class="mt-4"
            />
          </div>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <CustomInput
                label="Takedowns Attempted"
                input-name="takedownsAttempted"
                placeholder="Takedowns Attempted"
                :value="athlete.stats.takedownsAttempted || 'unknown'"
                input-type="number"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Submission Ratio"
                input-name="submissionAverage"
                placeholder="0.00"
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
        <div class="mt-8 flex flex-col sm:flex-row justify-start gap-6">
          <Button button-type="submit" button-label="Save" button-class="primary" />
          <Button button-type="button" button-label="Cancel" button-class="cta" />
        </div>
      </form>

    </section>
  </div>
</template>

<style scoped lang="scss">

</style>
