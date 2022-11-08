<template>
    <div>

        <Head>
            <Title>About Saturdays.io</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <section class="container mt-6 py-6 px-4">
            <div class="content my-6 is-medium">
                <h1 class="is-size-1 has-text-centered has-text-weight-bold has-text-white">
                    We bridge the gap between design and technology
                </h1>
            </div>
        </section>

        <section id="ethics" class="container py-6 px-4">
            <div class="content">
                <div class="content is-medium">
                    <h1 class="is-size-2 has-text-centered text-gradient-blue-red-dark">Keeping it 100</h1>
                </div>
                <p class="is-size-4 has-text-weight-normal has-text-grey-light">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands, looking to make a net-positive impact in the world.</p>
            </div>
            <div class="content">
                <p class="is-size-4 has-text-weight-normal has-text-grey-light">Our approach to building software
                    prioritizes accessibility, user-centric design, and inclusion. We research and generate ideas, then
                    build, test, and iterate on them using real-world analytics and actionable KPIs. The emphasis on
                    data-driven design, diversity, user empathy, and sustainability aren't buzzwords, they're why we
                    win.</p>
            </div>
        </section>

        <Client />

        <Contact />

        <Footer />

    </div>
</template>


<script lang="ts">
</script>


<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';

.button.is-link.is-outlined {
    color: $blue;
    background: none;
    border-color: $blue;

    &:hover {
        color: $red;
        background: none;
        border-color: $red;
    }
}
</style>