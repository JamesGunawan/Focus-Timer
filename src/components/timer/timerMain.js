import { useState } from "react";
import TimerDisplay from "../common/timerCard"; // Importing your existing TimerDisplay component
import formatTime from "./timeFormatter"; // Importing the formatTime function

const Timer = () => {
    const [timer, setTime] = useState(1500); // Default value of 1500 (25 minutes)
    const [inputValue, setInputValue] = useState(""); // User input time
    const [timerState, setTimerState] = useState(false); // Timer running state

    const handleInputChange = (e) => {
        const inputValue = e.target.value; // Get input value

        // Check if the value is a valid number and not negative
        if (inputValue < 0) {
            alert("Please enter a positive number");
        } else {
            setInputValue(inputValue); // Update input value as user types
        }
    };

    const start = () => {
        if (timerState) {
            alert("Timer is already running");
            return;
        }

        setTimerState(true);

        let countdown = inputValue && inputValue > 0 ? Number(inputValue) : timer;
        setTime(countdown);

        const startCountdown = setInterval(() => {
            if (countdown > 0) {
                countdown--;
                setTime(countdown);
            } else {
                clearInterval(startCountdown);
                alert("Timer Finished");
                setTimerState(false);
            }
        }, 1000);
    };

    return (
        <section>
            <TimerDisplay time={formatTime(timer)} />
            <input placeholder="Enter Time" type="number" value={inputValue} onChange={handleInputChange} />
            <button onClick={start}>Start Focus Session</button>
        </section>
    );
};

export default Timer