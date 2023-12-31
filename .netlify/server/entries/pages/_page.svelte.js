import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const _400 = "";
const Introduction_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-17aqfqh.svelte-17aqfqh{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}nav.svelte-17aqfqh.svelte-17aqfqh{position:fixed;top:0;width:100%;display:flex;justify-content:space-between;padding:1em}nav.svelte-17aqfqh div.svelte-17aqfqh{display:flex;padding:1em;gap:10em}nav.svelte-17aqfqh div a.svelte-17aqfqh{text-decoration:none;color:#000;font-family:Inter,sans-serif}.loading.svelte-17aqfqh.svelte-17aqfqh{position:fixed;width:100vw;height:100vh;z-index:2;display:flex}.bar.svelte-17aqfqh.svelte-17aqfqh{top:0;width:10vw;height:105vh;background:#1a1a1a}.home-card.svelte-17aqfqh.svelte-17aqfqh{display:flex;justify-content:center;background-color:var(--air-force-blue);border-radius:25px;margin:10px;height:900px}h1.svelte-17aqfqh.svelte-17aqfqh{font-family:Inter,sans-serif;text-align:center;-webkit-text-fill-color:transparent;background-image:linear-gradient(141deg, #cebbc9ff, #00b2caff);-webkit-background-clip:text;background-clip:text;font-size:70px;position:relative;display:inline-block;margin:auto}:root{--pale-purple:#f1e3f3ff;--english-violet:#694873ff;--black:#000000ff;--moonstone:#00b2caff;--robin-egg-blue:#59c3c3ff;--pale-purple:hsla(293, 40%, 92%, 1);--english-violet:hsla(286, 23%, 37%, 1);--black:hsla(0, 0%, 0%, 1);--moonstone:hsla(187, 100%, 40%, 1);--robin-egg-blue:hsla(180, 47%, 56%, 1);--air-force-blue:#598392ff;--thistle:#cebbc9ff;--aquamarine:#42e2b8ff;--aquamarine-2:#8be8cbff;--air-force-blue:hsla(196, 24%, 46%, 1);--thistle:hsla(316, 16%, 77%, 1);--aquamarine:hsla(164, 73%, 57%, 1);--aquamarine-2:hsla(161, 67%, 73%, 1);--gradient-top:linear-gradient(0deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-right:linear-gradient(90deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-bottom:linear-gradient(180deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-left:linear-gradient(270deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-top-right:linear-gradient(45deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-bottom-right:linear-gradient(135deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-top-left:linear-gradient(225deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-bottom-left:linear-gradient(315deg, #f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff);--gradient-radial:radial-gradient(#f1e3f3ff, #694873ff, #000000ff, #00b2caff, #59c3c3ff)}",
  map: null
};
const Introduction = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="introduction svelte-17aqfqh" data-svelte-h="svelte-gahefl"><div class="loading svelte-17aqfqh"><div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div> <div class="bar svelte-17aqfqh"></div></div> <div class="home-card svelte-17aqfqh"><h1 class="introtxt svelte-17aqfqh">Hello, I&#39;m Isaiah Khan-Shankar.</h1></div> <div class="container svelte-17aqfqh"><nav class="svelte-17aqfqh"><div class="svelte-17aqfqh"><a href="/" class="svelte-17aqfqh">About</a> <a href="/" class="svelte-17aqfqh">About</a></div></nav></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1yc85mj{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent}main.svelte-1yc85mj{background-color:#694873ff;position:absolute;top:0;left:0;height:100%;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1yc85mj">${validate_component(Introduction, "Introduction").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
