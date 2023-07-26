<template>
	<section class="px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">

		<div class="mx-auto max-w-7xl">
			<div class="relative isolate overflow-hidden bg-gray-800/20 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
				<div class="mx-auto max-w-4xl">
					<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white sm:text-4xl">We love collaborating with passionate people and brands</h2>
					<p class="text-lg leading-8 text-gray-400">Not looking to partner, but still want to get in touch? We’d love to hear from you.</p>
				</div>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<Button :buttonLabel="'Say hello'" class="primary" :to="'mailto:hello@saturdays.io'" rel="noreferrer" target="_blank" />
				</div>

				<svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
					<circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
					<defs>
						<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
							<stop stop-color="#78C0E8" />
							<stop offset="1" stop-color="#5820A8" />
						</radialGradient>
					</defs>
				</svg>
			</div>
		</div>

	</section>
</template>


<script setup lang="ts">
</script>


<style lang="scss" scoped>
</style>