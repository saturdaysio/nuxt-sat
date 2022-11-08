<template>
    <div>

        <Head>
            <Title>Saturdays.io - 2022</Title>
            <Meta name="description" content="Saturdays.io - Toronto based digital studio" />
        </Head>

        <Nav />

        <Hero />

        <section id="grid" class="container has-background-black">
            <div class="columns">
                <div class="column">
                    <div class="box has-background-black">
                        <div class="media">
                            <picture>
                                <source type="image/webp" srcset="~/assets/thumbs/engage.webp">
                                <source type="image/png" srcset="~/assets/thumbs/engage.jpg">
                                <img src="~/assets/thumbs/engage.webp" alt="RENAME." draggable="false" width="800"
                                    height="600">
                            </picture>
                        </div>
                        <div class="pb-2">
                            <h1 class="title has-text-white">
                                Content Studio
                            </h1>
                        </div>

                        <div class="tags">
                            <span class="tag is-success">
                                Enterprise SaaS
                            </span>
                            <span class="tag is-success">
                                PWA
                            </span>
                            <span class="tag is-success">
                                React Native
                            </span>
                        </div>

                        <NuxtLink to="/engage">
                            <button class="button is-link is-medium">
                                <p><strong>View project</strong></p>
                            </button>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </section>

        <Footer />

    </div>
</template>


<script lang="ts" setup>
</script>


<style lang="scss" scoped>
@import '~/assets/styles/_variables.scss';
.tag:not(body).is-success {
    background-color: #1CD0A0;
    color: $black;
}

.button.is-link {
    color: $navy;
    background: none;
    border-color: $navy;

    &:hover {
        color: $blue;
        background: none;
        border-color: $blue;
    }
}
</style>