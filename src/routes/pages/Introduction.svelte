<script>
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import { Canvas} from "@threlte/core";
    import Scene from '$lib/components/Scene.svelte';
    onMount(() => {
        gsap.to(".bar", 1.5, {
            delay: 0.5,
            height: 0,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut"
        });

        gsap.from(".introtxt", 1.5, {
            delay: 1,
            y: 700,
            stagger: {
                amount: 0.5
            },
            ease: "power4.inOut",
        });




    })






</script>

<div class="introduction">

    <div class="loading">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

    <div class="home-card">
        <h1 class="introtxt">
            Hello, I'm Isaiah Khan-Shankar.
        </h1>


    </div>






</div>




<style>

    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;

        overflow: hidden;
    }



    .loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 2;
        display: flex;
    }

    .bar {
        top: 0;
        width: 10vw;
        height: 110vh;
        background: #1a1a1a;
    }

    .home-card {
        display: flex;
        justify-content: center;
        background-color: #262626;
        border-radius: 25px;
        margin: 10px;
        height: 97vh;

    }

    h1 {
        font-family: Inter,sans-serif;
        text-align: center;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(141deg, #cebbc9ff, #694873ff);
        -webkit-background-clip: text;
        background-clip: text;
        font-size: 70px;
        position: relative;
        display: inline-block;
        margin: auto;

    }

    html, body {
        overflow: hidden;
    }

    :root {
        /* CSS HEX */
        --pale-purple: #f1e3f3ff;
        --english-violet: #694873ff;
        --black: #000000ff;
        --moonstone: #00b2caff;
        --robin-egg-blue: #59c3c3ff;

        /* CSS HSL */
        --pale-purple: hsla(293, 40%, 92%, 1);
        --english-violet: hsla(286, 23%, 37%, 1);
        --black: hsla(0, 0%, 0%, 1);
        --moonstone: hsla(187, 100%, 40%, 1);
        --robin-egg-blue: hsla(180, 47%, 56%, 1);

        --air-force-blue: #598392ff;
        --thistle: #cebbc9ff;
        --aquamarine: #42e2b8ff;
        --aquamarine-2: #8be8cbff;

        /* CSS HSL */
        --air-force-blue: hsla(196, 24%, 46%, 1);
        --thistle: hsla(316, 16%, 77%, 1);
        --aquamarine: hsla(164, 73%, 57%, 1);
        --aquamarine-2: hsla(161, 67%, 73%, 1);

        --gradient-top: linear-gradient(0deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-right: linear-gradient(90deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-bottom: linear-gradient(180deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-left: linear-gradient(270deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-top-right: linear-gradient(45deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-bottom-right: linear-gradient(135deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-top-left: linear-gradient(225deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-bottom-left: linear-gradient(315deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
        --gradient-radial: radial-gradient(#f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);
    }
</style>