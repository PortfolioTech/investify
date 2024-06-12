export const version_url = "VERSION110620240857";
export const dev_url = "DEV31620240503";
export const prod_url = "../vues/investify.vue";
export const settings_page_url = "https://portfoliotech.github.io/investify/static/html/settings.html";


export function set_url(key_url, url) {
    localStorage.setItem(key_url, url);
}

export function get_url(key_url) {
    let url = localStorage.getItem(key_url);
    return url ? url : prod_url;
}

export function dev_mode(domain) {
    return !domain.includes('github') || get_dev_url();
}

export function prod_mode(domain) {
    return !dev_mode(domain);
}

export function dev_env_enabled(domain) {
    return domain.includes('github') && get_dev_url();
}