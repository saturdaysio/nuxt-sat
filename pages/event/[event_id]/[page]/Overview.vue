<script setup lang="ts">
import {IEvent} from "~/utils/interfaces/Event";
import Button from "~/components/Button.vue";
import CustomInput from "~/components/CustomInput.vue";
import {format, isDate, parseISO} from "date-fns";
import {API} from "~/composable/api";
import {CombinedInputField} from "~/components/CombinedInput.vue";
import CombinedInput from "~/components/CombinedInput.vue";
import {ILocation} from "~/utils/interfaces/Location";
import {AxiosResponse} from "axios";

interface BioProps {
  event: IEvent
}

const {event} = defineProps<BioProps>()

async function SubmitEventData(formEvent: FormDataEvent) {
  formEvent.preventDefault()
  console.log('submit')
  const formData = new FormData(formEvent.target as HTMLFormElement)
  // log formdata
  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }

  // generate json object from form data
  const object: any = {};
  for (const [key, value] of formData.entries()) {

    object[key] = value;
  }
  console.log("THE OBJECT", object)

  // convert object.date to utc with date-fns with time
  if (object.date) {
    object.date = new Date(format(new Date(object.date), 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx'))
  }

  if ((object as any).city && (object as any).country && (object as any).state) {
    // we need to update the location elsewhere


    let locationId = event.location?.id
    if (!event.location || !event.location?.id) {
      console.log(object)
      const {data: res}: AxiosResponse<ILocation> = await API.getInstance().createLocation({
        city: (object as any).city,
        state: (object as any).state,
        country: (object as any).country,
        full_location: (object as any).city + ', ' + (object as any).country
      })
      locationId = res.id
    } else {
      const {data: res}: AxiosResponse<ILocation> = await API.getInstance().patchLocation({
        id: event.location.id,
        city: (object as any).city,
        state: (object as any).state,
        country: (object as any).country,
        full_location: (object as any).city + ', ' + (object as any).country
      })
      locationId = res.id
    }
    delete (object as any).city
    delete (object as any).country
    delete (object as any).state
    if (object.location) {
     object.location.id = locationId
    } else {
      object.location = {
        id: locationId
      }
    }


    object.id = event.id
    object.name = event.name
    return API.getInstance().patchEvent(object)
  }
  // merge with athlete object
  object.id = event.id
  object.name = event.name

  API.getInstance().patchEvent(object)



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
    <section class="mx-auto rounded-sm border border-white/20 bg-gray-900 p-4">
      <h1 class="text-2xl font-bold text-white">Event Info</h1>
      <!--    sub title -->
      <h2 class="text-lg text-white">Description flavour text on your user profile information</h2>
      <form @submit="SubmitEventData">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="Event name"
                input-name="name"
                placeholder="Enter Event name"
                :value="event.name === 'undefined' ? '' : event.name"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Date"
                input-name="date"
                placeholder="Enter Event Date"
                :value="parseDate(event.date, 'yyyy-MM-dd kk:mm')"
                input-type="datetime-local"
                class="mt-4"
            />
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="Venue"
                input-name="venue"
                placeholder="Enter Event venue"
                :value="event.venue ? event.venue : 'Unknown'"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CombinedInput
                label="Location"
                :fields="[
{
  label: 'City',
  name: 'city',
  placeholder: 'Enter City',
  value: event.location?.city
},
{
  label: 'State',
  name: 'state',
  placeholder: 'Enter State',
  value: event.location?.state
},
{
  label: 'Country',
  name: 'country',
  placeholder: 'Enter Country',
  value: event.location?.country
}
] as CombinedInputField[]"
                :on-type="() => {console.log('typing')}"
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
