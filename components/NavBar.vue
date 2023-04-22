<template>
	<nav class="relative">
		<div class="fixed w-full px-4 z-20">
			<div class="lg:container flex flex-row items-center justify-between mx-auto">

				<div class="nav w-full flex items-center justify-between mx-auto backdrop-blur bg-black-900/80 border-b border-white/10">
					<!-- Header logo -->
					<div id="logo" class="">
						<NuxtLink to="/" class="text-md font-black inline-block">
							<span class="sr-only">Saturdays.io</span>
							<img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
						</NuxtLink>
					</div>

					<!-- Mobile toggle -->
					<div class="relative flex lg:hidden">
						<button @click="drawer" role="button" aria-label="Menu button">
							<svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" stroke="#fff">
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>

					<!-- Navbar -->
					<div class="hidden lg:block">
						<ul class="flex text-sm font-sans">
							<li class="nav-item pr-4">
								<NuxtLink to="/" active-class="active" class=" flex items-center text-sm font-bold uppercase hover:opacity-75">
									Work
								</NuxtLink>
							</li>
							<li class="nav-item pl-4">
								<NuxtLink to="/about" active-class="active" class=" flex items-center text-sm font-bold uppercase hover:opacity-75">
									About
								</NuxtLink>
							</li>
						</ul>
					</div>
				</div>


				<!-- Dark Background Transition -->
				<transition enter-class="opacity-0" enter-active-class="ease-in-out duration-500" enter-to-class="opacity-100"
					leave-class="opacity-100" leave-active-class="ease-in-out duration-500" leave-to-class="opacity-0">
					<div @keydown.esc="isOpen = false" v-show="isOpen" class="fixed inset-0 transition-opacity">
						<div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
					</div>
				</transition>

				<!-- Drawer Menu -->
				<aside class="transform top-0 left-0 w-full h-full fixed overflow-auto backdrop-blur bg-black-900/70 z-20" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
					<div class="flex flex-col h-full justify-between">

							<div class="nav flex items-center justify-between p-4 z-50">
								<div id="logo" @click="isOpen = false">
									<NuxtLink to="/" class="text-md font-black inline-block">
										<span class="sr-only">Saturdays.io</span>
										<img class="h-8 w-8" src="@/assets/img/logo.svg" alt="Saturdays.io logo" width="32px" height="32px" />
									</NuxtLink>
								</div>

								<!-- Close icon -->
								<div class="close relative flex justify-between">
									<button @click="isOpen = false" role="button" aria-label="Close Menu button">
										<svg class="w-8 h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
											viewBox="0 0 24 24" stroke="#fff">
											<path d="M6 18L18 6M6 6l12 12"></path>
										</svg>
									</button>
								</div>
							</div>


						<!-- Nav links -->
						<ul class="divide-y flex flex-col justify-center font-sans ml-4 z-50">
							<li class="nav-item">
								<NuxtLink to="/" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold">
									<strong>Work</strong>
								</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink to="/about" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold">
									<strong>About</strong>
								</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink to="/terms-of-service" @click="isOpen = false" active-class="active" class="my-4 inline-block text-2xl text-bold">
									Approach
								</NuxtLink>
							</li>
						</ul>

						<!-- Menu footer -->
						<div id="social" class="ml-4 pb-4 z-50">
							<div class="social flex space-x-10 mt-4">
							</div>
						</div>

					</div>
				</aside>

			</div>
		</div>
	</nav>
</template>


<script lang="ts">
	export default {
		data() {
			return {
				isOpen: false
			};
		},
		methods: {
			drawer() {
				this.isOpen = !this.isOpen;
			}
		},
		watch: {
			isOpen: {
				immediate: true,
				handler(isOpen) {
					if (process.client) {
						if (isOpen) document.body.style.setProperty("overflow", "hidden");
						else document.body.style.removeProperty("overflow");
					}
				}
			}
		},

		mounted() {
			document.addEventListener("keydown", e => {
				if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
			});
		}
	};
</script>


<style lang="scss" scoped>

	.nav {
			height: 4rem;
		}

</style>