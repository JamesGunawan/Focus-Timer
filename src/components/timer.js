import { useState, useEffect } from "react";
import TimerDisplay from "./timerCard";

const Timer = () => {
    const [timer, setTime] = useState(1500); // Default value of 0 for timer
    const [inputValue, setInputValue] = useState("");  // Empty time for user
    const [timerState, setTimerState] = useState(false); // Default off state when timer is not running

    const handleInputChange = (e) => {
        const inputValue = e.target.value; // Get the value of the input
    
        // Check if the value is a valid number and not negative
        if (inputValue < 0) {
            alert("Please enter a positive number");
        } else {
            setInputValue(inputValue); // Update input value as user types
        }
    };

    const start = () => {
        // Simple check for timer, if running == can't start again
        if (timerState === false) {
            setTimerState(true);
        } else {
            alert("Timer is already running");
            return;
        }
    
        // Set the countdown immediately based on input value or default timer value
        let countdown = timer;
    
        if (inputValue && inputValue > 0) {
            // If the user entered a valid number, set that as the countdown start value
            countdown = Number(inputValue);
        } else if (inputValue === "0") {
            // If the input is 0, keep the default timer value (1500 or 25 mins)
            countdown = timer;
        }
    
        // Set the countdown to the state immediately before starting the countdown
        setTime(countdown);
    
        // Starts the countdown to call a function that decrements every second (1000 ms)
        const startCountdown = setInterval(startCount, 1000);
    
        // Function to decrement the countdown
        function startCount() {
            // Checks if the countdown is greater than 0, if so decrement
            if (countdown > 0) {
                countdown--; // Decrement countdown
                setTime(countdown); // Immediately update state with the new countdown value
            } else {
                // Timer finished logic
                clearInterval(startCountdown); // Stop the interval
                alert("Timer Finished"); // Alert the user that the timer finished
                setTimerState(false); // Reset the timer state to false
            }
        }
    };
    

    // Code that converts to clock format and no i did not write this if you are wondering, just copy paste it off stackoverflow or ask chatgpt lol
    // Convert countdown to hours, minutes, and seconds
    const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600); // Get the hours part
    const minutes = Math.floor((seconds % 3600) / 60); // Get the minutes part
    const remainingSeconds = seconds % 60; // Get the seconds part

    // Ensure two digits for minutes and seconds (e.g., 1:01 instead of 1:1)
    return `${hours > 0 ? hours + ':' : ''}${minutes < 10 && hours > 0 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    return (
        <section>
            <h1>Focus Timer</h1><br></br>
            <TimerDisplay time={formatTime(timer)}/>
            <input placeholder="Enter Time" type="number" value={inputValue} onChange={handleInputChange}></input>
            <button onClick={start}>Start Focus Session</button>
        </section>
    );
};

export default Timer