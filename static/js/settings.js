export const dev_url = "DEV31620240503";
export const prod_url = "../vues/investify.vue";
export const settings_page_url = "https://portfoliotech.github.io/investify/static/html/settings.html";


export function set_url(key_url, url) {
    localStorage.setItem(key_url, url);
    return url;
}

export function get_url(key_url) {
    return url = localStorage.getItem(key_url);
}

export function delete_url(key_url) {
    localStorage.removeItem(key_url);
}

export function dev_mode() {
    return import.meta.env.MODE === 'development';
}

export function prod_mode() {
    return import.meta.env.MODE === 'production' && !get_url(dev_url);
}

export function redirect_dev() {
    return document.domain.includes('github') && get_url(dev_url);
}