

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.43f01f0d.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.0719bd3d.js"];
export const stylesheets = ["_app/immutable/assets/2.3e85ef08.css"];
export const fonts = ["_app/immutable/assets/roboto-cyrillic-ext-400-normal.b7ef2cd1.woff2","_app/immutable/assets/roboto-cyrillic-ext-400-normal.0a32035a.woff","_app/immutable/assets/roboto-cyrillic-400-normal.495d38d4.woff2","_app/immutable/assets/roboto-cyrillic-400-normal.adba67d2.woff","_app/immutable/assets/roboto-greek-400-normal.daf51ab5.woff2","_app/immutable/assets/roboto-greek-400-normal.076b9dc1.woff","_app/immutable/assets/roboto-vietnamese-400-normal.77b24796.woff2","_app/immutable/assets/roboto-vietnamese-400-normal.d2390f1a.woff","_app/immutable/assets/roboto-latin-ext-400-normal.3c23eb02.woff2","_app/immutable/assets/roboto-latin-ext-400-normal.c2b94086.woff","_app/immutable/assets/roboto-latin-400-normal.f6734f81.woff2","_app/immutable/assets/roboto-latin-400-normal.a9fdbefa.woff"];
