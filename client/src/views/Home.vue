<template>
    <div class="home">
        <div class="wrapper">
            <div class="content">
                <h1>
                    Find every informations
                    <br />
                    you already have access to.
                </h1>
                <p>
                    With ScrapR you will easily find all company's informations
                    you could have found by logging into your LinkedIn account.
                    <br />
                    Name, logo, link to their website... A real data mine !
                </p>
                <router-link to="/search" class="button button--primary">
                    Yeah, I want to do that !
                </router-link>
            </div>
            <Illustration
                class="illustration"
                aria-label="An illustration, showing a woman searching"
            />
        </div>

        <div class="blob blob--dark"></div>
        <div class="blob blob--light"></div>
    </div>
</template>

<script>
import Illustration from "../assets/undraw-search.svg"

export default {
    name: "Home",
    components: {
        Illustration,
    },
}
</script>

<style lang="scss">
.home {
    height: 100%;
    padding-bottom: 10vh;

    display: flex;
    align-items: flex-end;

    @include phone {
        padding: 0;
        align-items: flex-start;
    }

    .wrapper {
        display: grid;
        grid-template-columns: auto 650px;
        column-gap: 5rem;

        @include phone {
            grid-template-columns: 1fr;
        }

        .content {
            max-width: 65rem;
            margin-right: 10vw;

            p {
                margin-bottom: 2rem;
                color: $dark;
            }

            .button {
                margin-left: auto;
            }
        }
    }

    .blob {
        height: 150vh;
        position: relative;

        border-radius: 999999px;
        z-index: -1;

        &--dark {
            position: absolute;
            right: 2rem;
            bottom: 5vh;

            width: 40vw;

            background-color: $dark;

            @include phone {
                width: calc(100% - 2 * 2rem);
                bottom: 40vh;
                background-color: rgba($accent, 0.4);
            }
        }

        &--light {
            position: absolute;
            left: 10rem;
            top: 0;

            width: 60rem;

            transform: translate(20%, 20%) rotate(-20deg);

            background-color: $light;

            @include phone {
                display: none;
            }
        }
    }

    .illustration {
        @include phone {
            grid-row: 1;

            max-width: 60%;

            display: block;
            margin: 4rem auto;
        }
    }
}
</style>
