<script>
    import Introduction from "./pages/Introduction.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Scene from "$lib/components/Scene.svelte";
</script>
<main>
    <Navbar/>
    <Introduction />

</main>

<style>
    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
    }

    main {
        background-color: #111;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }


</style>
