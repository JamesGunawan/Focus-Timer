// Converts countdown to hours, minutes, and seconds
const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Get the hours part
    const minutes = Math.floor((seconds % 3600) / 60); // Get the minutes part
    const remainingSeconds = seconds % 60; // Get the seconds part

    // Ensure two digits for minutes and seconds (e.g., 1:01 instead of 1:1)
    return `${hours > 0 ? hours + ':' : ''}${minutes < 10 && hours > 0 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

export default formatTime;
