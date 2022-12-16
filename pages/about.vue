<template>
    <div class="bg-black">
        <Head>
            <Title>About Saturdays.io</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <section class="container lg:max-w-7xl my-16 mx-auto py-8 px-4">
            <div class=" ">
                <h1 class="text-4xl text-center font-bold text-white">
                    We bridge the gap between design and technology
                </h1>
            </div>
        </section>

        <section id="ethics" class="container lg:max-w-5xl my-16 mx-auto py-8 px-4">
            <div class=" ">
                <div class=" ">
                    <h1 class="text-3xl text-center font-bold text-grad-01 pb-8">Keeping it 100</h1>
                    <p class="text-xl text-white pb-4">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands looking to make a net-positive impact in the world.</p>
                </div>
                <div class=" ">
                <p class="text-xl text-white">Our approach to building software
                    prioritizes accessibility user-centric design and inclusion. We research and generate ideas then
                    build test and iterate on them using real-world analytics and actionable KPIs. The emphasis on
                    data-driven design diversity user empathy and sustainability aren't buzzwords they're why we
                    win.</p>
                </div>
            </div>
        </section>

        <Client />

        <Result />

        <Contact />

        <Footer />

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
    @import '~/assets/styles/tailwind.scss';
</style>