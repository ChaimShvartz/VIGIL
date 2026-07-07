export function status(statusCode) {
    this.statusCode = statusCode;
    return this;
}

export function send(data) {
    try {
        this.end(JSON.stringify(data) + "\n");
    } catch {
        this.end(data + "\n");
    }
}
