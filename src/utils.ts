export const prettyBytes = (bytes: number) => {
    const units = ['B', 'KB', 'MB'];
    for (const unit of units) {
        if (bytes < 1000) return `${bytes.toFixed(2)}${unit}`;
        bytes /= 1000;
    }
    return `${bytes.toFixed(2)}GB`;
}
