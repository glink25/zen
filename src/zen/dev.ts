export function isZenFallbackDevMode() {
    return import.meta.env.DEV && window.__ZEN_FALLBACK__ === true;
}
