<script setup lang="ts">

  import {IEvent} from "~/utils/interfaces/Event";
  import {format, isDate, parseISO} from "date-fns";
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

    if ((object as any).city || (object as any).country || (object as any).state) {
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
      object.date = format(object.date, 'yyyy-MM-dd\'T\'HH:mm')
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

  definePageMeta({
    middleware: ['auth'],
    pageTransition: false,
    layoutTransition: false
  })

</script>


<template>
  <div class="space-y-4 md:space-y-6 lg:space-y-8">
    <section class="mx-auto rounded-sm bg-gray-800/40 border border-white/20 px-4 py-8">
      <h1 class="text-2xl font-bold text-white">Event Info</h1>
      <!--    sub title -->
      <h2 class="text-lg text-gray-400">Description flavour text</h2>
      <form @submit="SubmitEventData">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <div class="sm:col-span-3">
            <CustomInput
                label="Event name"
                input-name="name"
                placeholder="Event name"
                :value="event.name === 'undefined' ? '' : event.name"
                input-type="text"
                class="mt-4"
            />
          </div>
          <div class="sm:col-span-3">
            <CustomInput
                label="Date"
                input-name="date"
                placeholder="Event date"
                :value="parseDate(new Date(new Date(event.date).toISOString().slice(0, -1)), 'yyyy-MM-dd\'T\'HH:mm')"
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
                placeholder="Ex: Skydome"
                :value="event.venue ? event.venue : 'Unknown'"
                input-type="text"
                class="mt-4"
            />
          </div>

          <div class="sm:col-span-3">
            <CustomInput
                label="City"
                input-name="city"
                placeholder="Ex: Toronto"
                :value="event.location?.city"
                input-type="text"
                class="mt-4"
            />
          </div>

          <div class="sm:col-span-3">
            <CustomInput
                label="State / Province"
                input-name="state"
                placeholder="Ex: Ontario"
                :value="event.location?.state"
                input-type="text"
                class="mt-4"
            />
          </div>

          <div class="sm:col-span-3">
            <CustomInput
                label="Country"
                input-name="country"
                placeholder="Ex: Canada"
                :value="event.location?.country"
                input-type="text"
                class="mt-4"
            />
          </div>

        </div>

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
