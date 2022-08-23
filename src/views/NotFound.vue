<template>
    <section class="mt-5">
        <div class="container">
            <div class="not-found">
                <h1>Not Found</h1>
                <p>Oops, we couldn't find that page. Try going
                    <router-link to="/">HOME</router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<style>
    .container .not-found a {
        color: #f7c434;
    }
</style>