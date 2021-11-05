<template>
    <button class='button' v-if="!link" :class="type">
        <slot></slot>
    </button>
    <router-link class='button' v-else :to="to" :class="type">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
                default: null
            },
            link: {
                type: Boolean,
                required: false,
                default: false
            },
            to: {
                type: String,
                required: false,
                default: '/'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        justify-content: center;
        font-family: 'Barlow Condensed', sans-serif;
        // padding: 0 2.8rem;
        font-size: 1.6rem;
        color: inherit;
        flex-shrink: 0;
        background-color: inherit;
        border: 0.1rem solid transparent;
        cursor: pointer;

        &__navigation {
            position: relative;
            display: flex;
            align-items: center;
            height: 100%;
            font-weight: 400;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.27rem;

            &:hover {
                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 0.3rem;
                    width: 100%;
                    background-color: var(--white-50);

                }
            }


            &.router-link-active {
                &::before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 0.3rem;
                    width: 100%;
                    background-color: var(--white);

                }


            }

        }

        &__cta {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 27.4rem;
            width: 27.4rem;
            color: var(--ebony);
            border-radius: 50%;
            font-size: 3.2rem;
            letter-spacing: 0.2rem;
            background-color: var(--white);
            text-transform: uppercase;
            text-decoration: none;
            font-family: 'Bellefair', serif;
        }
    }
</style>