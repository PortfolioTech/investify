
const dev_flag = "DEV31620240503";

export function set_dev_flag() {
    localStorage.setItem(dev_flag, "true");
}

export function get_dev_flag() {
    return localStorage.getItem(dev_flag);
}

export function alert_dev_flag() {
    return alert(get_dev_flag());
}

export function delete_dev_flag() {
    localStorage.removeItem(dev_flag);
}

export function is_dev_env(domain) {
    return !domain.includes('github') || get_dev_flag();
}


