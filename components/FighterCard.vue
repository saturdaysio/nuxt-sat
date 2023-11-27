<script setup lang="ts">

	const linkFighters = [
		{
			id: '0',
			name: 'Alexander Volkanovski',
			imageUrl: '/avatars/3949584.png',
			alt: 'Alexander Volkanovski',
			width: '600',
			height: '436',
			to: '/athlete/86488/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '1',
			name: 'Holly Holm',
			imageUrl: '/avatars/3028404.png',
			alt: 'Holly Holm',
			width: '600',
			height: '436',
			to: '/athlete/68396/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '2',
			name: 'Jessica Rose-Clarke',
			imageUrl: '/avatars/3902226.png',
			alt: 'Jessica Rose-Clarke',
			width: '600',
			height: '436',
			to: '/athlete/61072/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '3',
			name: 'Jon Jones',
			imageUrl: '/avatars/2335639.png',
			alt: 'Jon Jones',
			width: '600',
			height: '436',
			to: '/athlete/69643/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '4',
			name: 'Anthony Smith',
			imageUrl: '/avatars/2512976.png',
			alt: 'Anthony Smith',
			width: '600',
			height: '436',
			to: '/athlete/83221/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '5',
			name: 'Loopy Godinez',
			imageUrl: '/avatars/4700617.png',
			alt: 'Loopy Godinez',
			width: '600',
			height: '436',
			to: '/athlete/97262/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '6',
			name: 'Jiří Procházka 1',
			imageUrl: '/avatars/3156612.png',
			alt: 'Jiří Procházka',
			width: '600',
			height: '436',
			to: '/athlete/78731/bio',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '7',
			name: 'Valentina Shevchenko',
			imageUrl: '/avatars/2554705.png',
			alt: 'Valentina Shevchenko',
			width: '600',
			height: '436',
			to: '/athlete/82824/bio',
			lastUpdate: '2023-01-23T11:00',
		}
	]

	const linkEvents = [
		{
			id: '0',
			name: 'UFC 273',
			imageUrl: '/avatars/ufc-273-Header_1024x.webp',
			alt: 'ufc 273',
			width: '600',
			height: '436',
			to: '/event/5765/overview',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '1',
			name: 'UFC 283',
			imageUrl: '/avatars/ufc-283-Header_1024x.webp',
			alt: 'ufc 283',
			width: '1024',
			height: '495',
			to: '/event/1090/overview',
			lastUpdate: '2023-01-23T11:00',
		},
		{
			id: '2',
			name: 'UFC 293',
			imageUrl: '/avatars/ufc-293-Header_1024x.webp',
			alt: 'ufc 293',
			width: '1024',
			height: '495',
			to: '/event/2685/overview',
			lastUpdate: '2023-01-23T11:00',
		}
	]


	interface ButtonProps {
		to?: string
		onClick?: () => void
		error?: Error | null | undefined | string | boolean
		success?: boolean
		target?: string
		rel?: string
		noRel?: boolean
	}

	const props = defineProps<ButtonProps>()

	const { onClick, error, success, target, to, rel, noRel } = toRefs(props)

	const slots = useSlots()

</script>


<template>
	<NuxtLink v-for="item in linkFighters" :key="item.id" :to="item.to" class="flex flex-col">
		<div id="profileImage" class="w-full h-auto min-h-48 object-cover rounded-t-sm bg-gray-800 hover:bg-purple-800">
			<img :src="item.imageUrl" :alt="item.alt" class="object-cover" loading="lazy" :width="item.width" :height="item.height" />
		</div>
		<div class="bg-white p-4">
			<div class="text-base sm:text-lg md:text-xl font-bold text-black hover:text-purple-400">
				{{ item.name }}
			</div>
			<div class="text-base font-normal text-black">
				{{ item.lastUpdate }}
			</div>
		</div>
	</NuxtLink>
</template>


<style lang="scss" scoped>
</style>