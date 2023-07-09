<template>
	<div>

		<Nav />

		<Header intro="Jobs Openings" />

		<section id="company" class="w-full mx:auto px-4 py-8">
			<div class="container lg:max-w-4xl mx-auto ">
				<div class="pb-4">
					<h1 class="text-category">About us</h1>
					<p class="">Saturdays.io is a Design-led Canadian digital studio creating SaaS platforms in multiple industries with a singular purpose: to revolutionize niche, high-value markets and create a better way of doing things. We are doing that through our mission to build and improve real-time data, analytics, and digital experiences for sports leagues worldwide.</p>
				</div>
				<div class="pb-4">
					<p class="">We identified the need to develop our own technology to push the industry forward as it is one of our key business strategies. With multiple B2B and B2C solutions, we provide users around the world with in-depth stats, live odds, and slick user experiences.</p>
				</div>
				<div>
					<p class="">Note: This role will work primarily on frontend development with opportunities to work on the backend.</p>
				</div>
			</div>
		</section>


		<section id="responsibilities" class="w-full mx:auto px-4 py-8">
			<div class="container lg:max-w-4xl mx-auto ">
				<div class="pb-4">
					<h1 class="text-category">The role</h1>
					<p class="">As a part of the dev team, you will be developing our React frontend experiences in TypeScript.</p>
				</div>
				<div class="prose max-w-none">
					<ul class="list-disc list-outside">
						<li class="">Working under a Scrum or Kanban framework and releasing product increments in 2-week sprints.</li>
						<li class="">Owning your work. This means writing unit and integration tests, using proper containerization, observability/instrumentation, and documentation for your code.</li>
						<li class="">Being a team player. We are a remote-first company, so you will need to be an excellent team player and a great communicator, but also capable of working autonomously without much oversight.</li>
						<li class="">Understanding, participating, and contributing to the company goals. Saturdays.io is a small company with an inclusive culture. We are looking for people that share those values with us.</li>
					</ul>
				</div>
			</div>
		</section>


		<section id="requirements" class="w-full mx:auto px-4 py-8">
			<div class="container lg:max-w-4xl mx-auto ">
				<div class="">
					<h1 class="text-category">Requirements</h1>
				</div>
				<div class="prose max-w-none">
					<ul class="list-disc list-outside">
						<li class="">At least 3 years of experience in building testable, production-grade software in TypeScript/JS ES6.</li>
						<li class="">Excellent understanding of Node.js, React, and the fundamentals of using Docker and CI/CD.</li>
						<li class="">Excellent understanding of Test Driven Development, Agile development methodology, and version control.</li>
						<li class="">The ability to function autonomously, proactively solve problems, and deliver working software.</li>
						<li class="">The ability to communicate well with your team, both interactively and asynchronously, and that of being a positive, constructive team member.</li>
					</ul>
				</div>
			</div>
		</section>


		<section id="timezone" class="w-full mx:auto px-4 py-8">
			<div class="container lg:max-w-4xl mx-auto ">
				<div class="pb-4">
					<h1 class="text-category">Timezone</h1>
					<p class="">Please not that our team is predominantly based in North America and work within New York (UTC-5) to Hawaii (UTC-10) timezones.</p>
				</div>
			</div>
		</section>


		<section id="apply" class="w-full mx:auto px-4 py-8">
			<div class="container lg:max-w-4xl mx-auto ">
				<div class="pb-4">
					<h1 class="text-category">How to apply</h1>
					<p class="">Please email <NuxtLink to="mailto:jobs@saturdays.io" rel="noreferrer" target="_blank">jobs [at] saturdays.io</NuxtLink> with a copy of your resume in PDF format along with links to your GitHub or other work samples. Applications without a resume and work samples will not be eligible.</p>
				</div>
			</div>
		</section>


		<Footer />

	</div>
</template>


<script setup lang="ts">

	useHead({
		title: 'Saturdays.io - Jobs',
		meta: [
			{ name: 'description', content: 'Jobs at Saturdays.io' },
			{ name: 'keywords', content: 'Jobs, Openings, Saturdays.io, Digital, Studio, Creative, Digital Studio, Creative Studio,' },
		]
	})

</script>


<style lang="scss">
</style>