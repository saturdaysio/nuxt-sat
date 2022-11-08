<template>
    <div class="">

        <Head>
            <Title>About Saturdays.io</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <section id="bio" class="container mt-6 py-6 px-4">
            <div class="content is-medium">
                <h1 class="title has-text-white">We bridge the gap between design and technology</h1>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">We believe that our work and ethics
                    define who we are. We're Human-centered Designers and Developers behind some of North America's
                    biggest mobile apps and digital brands, looking to make a net-positive impact in the world.</p>
            </div>
            <div class="content">
                <p class="is-size-5 has-text-weight-normal has-text-grey-light">Our approach to building software
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