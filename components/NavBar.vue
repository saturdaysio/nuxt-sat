<template>
	<nav class="relative">
		<div class="fixed w-full px-4 z-20">
			<div class="lg:container flex flex-row items-center justify-between mx-auto">

				<div class="nav w-full flex items-center justify-between mx-auto  backdrop-blur bg-black-900/80 border-b border-white/10">
					<!-- Header logo -->
					<div id="logo" class="">
						<NuxtLink to="/" active-class="active" class=" text-md font-black inline-block">
							<span class="text-white">Saturdays</span>
						</NuxtLink>
					</div>

					<!-- Mobile toggle -->
					<div class="relative flex lg:hidden">
						<button @click="drawer" role="button" aria-label="Menu button">
							<svg class="h-8 w-8 fill-current text-black" fill="none" stroke-linecap="round" stroke-linejoin="round"
								stroke-width="1" viewBox="0 0 24 24" stroke="#fff">
								<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>

					<!-- Navbar -->
					<div class="hidden lg:block">
						<ul class="flex text-sm font-sans">
							<li class="nav-item pr-4">
								<NuxtLink to="/" active-class="active"
									class=" flex items-center text-sm font-bold uppercase hover:opacity-75">Work
								</NuxtLink>
							</li>
							<li class="nav-item pl-4">
								<NuxtLink to="/about" active-class="active"
									class=" flex items-center text-sm font-bold uppercase hover:opacity-75">About
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
									<NuxtLink to="/" active-class="active" class="text-md font-black inline-block">
										<span class="text-white">Saturdays</span>
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
								<NuxtLink to="/" @click="isOpen = false" active-class="active"
									class="my-4 inline-block text-2xl text-bold uppercase hover:text-underline">
									<strong>Work</strong>
								</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink to="/about" @click="isOpen = false" active-class="active"
									class="my-4 inline-block text-2xl text-bold uppercase">
									<strong>About</strong>
								</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink to="/terms-of-service" @click="isOpen = false" active-class="active"
									class="my-4 inline-block text-2xl text-bold">
									Terms of Service
								</NuxtLink>
							</li>
							<li class="nav-item">
								<NuxtLink to="/privacy-policy" @click="isOpen = false" active-class="active"
									class="my-4 inline-block text-2xl text-bold">
									Privacy Policy
								</NuxtLink>
							</li>
						</ul>

						<!-- Menu footer -->
						<div id="social" class="ml-4 pb-4 z-50">
							<p class="text-md font-bold text-white">Connect</p>

							<div class="social flex space-x-10 mt-4">
								<NuxtLink to="https://www.linkedin.com/company/saturdaysdotio/" rel="noreferrer" target="_blank">
									<svg focusable="false" aria-label="LinkedIn" data-prefix="fab" data-icon="linkedin" viewBox="0 0 24 24"
										class="h-12 w-12 fill-current text-blue-900 hover:text-red-600" role="img" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0)">
											<path fill="currentColor" d="M21.7777 0.00109863H2.2223C0.99462 0.00109863 0 0.995628 0 2.2232V21.7779C0 23.0044 0.995714 24 2.2223 24H21.7777C23.0043 24 24 23.0044 24 21.7779V2.2232C24.0011 0.995628 23.0054 0.00109863 21.7777 0.00109863ZM8.31148 17.7079H5.60117V9.30635H8.31148V17.7079ZM8.13313 7.52079C7.83113 7.80635 7.43175 7.95077 6.94046 7.95077H6.92842C6.45464 7.95077 6.07167 7.80744 5.77514 7.52079C5.47862 7.23523 5.32871 6.88184 5.32871 6.45952C5.32871 6.02626 5.48081 5.67287 5.78061 5.3895C6.0848 5.10941 6.4809 4.96937 6.9711 4.96937C7.45363 4.96937 7.83879 5.10941 8.13313 5.3895C8.42309 5.67287 8.57299 6.02736 8.58175 6.45952C8.58175 6.88184 8.43184 7.23523 8.13313 7.52079ZM18.3397 17.7079H15.6294V13.1018C15.6294 12.4595 15.4959 11.9814 15.2246 11.6707C14.9521 11.3589 14.5976 11.2035 14.1534 11.2035C13.7212 11.2035 13.3623 11.3446 13.0789 11.6247C12.79 11.907 12.6467 12.3074 12.6467 12.8304V17.709H9.93635V11.2035L9.89478 9.30635H12.5569L12.6478 10.4661C13.2824 9.51204 14.0965 9.03501 15.0878 9.03501C16.0605 9.03501 16.8473 9.3709 17.4425 10.0383C18.041 10.7057 18.3387 11.6368 18.3387 12.8304V17.7079H18.3397Z" />
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="24" height="24" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</NuxtLink>

								<NuxtLink to="mailto:hello@saturdays.io" rel="noreferrer" target="_blank">
									<svg focusable="false" aria-label="email" data-prefix="fab" data-icon="email" viewBox="0 0 22 20"
										class="h-12 w-12 fill-current text-blue-900 hover:text-red-600" role="img" xmlns="http://www.w3.org/2000/svg">
										<path fill="currentColor" d="M10.519,0L0,8.416v12.449h21.038V8.416L10.519,0z M10.518,15.92l-7.711-5.438H18.23L10.518,15.92z" />
									</svg>
								</NuxtLink>

								<NuxtLink to="/signin">                  
								</NuxtLink>
							</div>

						</div>

						<MenuBG />

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