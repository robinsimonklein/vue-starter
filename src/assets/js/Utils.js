/**
 * Normalize a value between 0 and 1
 * @param {number} value - The value to normalize
 * @param {number} min - The minimum value that the variable can take
 * @param {number} max - The maximum value that the variable can take
 * @return {number}
 */
export function normalize(value, min, max) {
    return (value - min) / (max - min);
}