export function getJWT() {
    const token = localStorage.getItem("jwt");
    if (!token) {
        return null;
    }
    return token
}

export function setJWT(token: string) {
    localStorage.setItem("jwt", token);
}