let shift = 1;  // Initial shift value
let threshold = 5;  // Threshold value for deviation

// Define some initial points
let points = [
    [0, 0],
    [2, 3],
    [4, 7]
];

// Function to apply a shift to points if they deviate from the specified threshold
function applyShiftToPoints(points, shift, threshold) {
    return points.map(point => {
        let [x, y] = point;
        if (Math.abs(x - y) > threshold) {
            // If the deviation between x and y exceeds the threshold, apply the shift
            return [x + shift, y + shift];
        }
        return point;  // No change if within threshold
    });
}

// Apply the function and get the new set of points
let newPoints = applyShiftToPoints(points, shift, threshold);

console.log("Original Points:", points);
console.log("New Points:", newPoints);
