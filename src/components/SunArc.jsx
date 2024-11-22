import React from "react";

const SunArc = ({ sunrise, sunset, currentTime }) => {
  // Convert times (in seconds) to a normalized 0-1 scale based on the day duration
  const totalDayDuration = sunset - sunrise;
  const elapsedTime = currentTime - sunrise;

  // Calculate the stroke offset based on elapsed time
  const totalArcLength = 2 * Math.PI * 90; // Arc length (for radius 90)
  const coveredLength = (elapsedTime / totalDayDuration) * totalArcLength; // Length of the covered arc

  return (
    <div className="flex flex-col items-center mx-auto my-2 p-3 backdrop-blur-md rounded-xl bg-secondary h-auto w-full md:w-3/4">
      <svg width="200" height="100" viewBox="0 0 200 100">
        {/* Horizon line */}
        <line x1="0" y1="90" x2="200" y2="90" stroke="#5a99dd" strokeWidth="1" />

        {/* Arc path */}
        <path
          d={`M10 90 A90 90 0 0 1 190 90`} // Full arc path
          fill="none"
          stroke="#5a99dd" // Color for the un-covered part of the arc
          strokeWidth="2"
          strokeDasharray={totalArcLength} // Total length of the arc
          strokeDashoffset={coveredLength} // Offset the dash to reveal the covered portion
        />

        {/* Sun circle */}
        <circle
          cx={100 + 90 * Math.cos(Math.PI - (elapsedTime / totalDayDuration) * Math.PI)} // Sun X position
          cy={90 - 90 * Math.sin(Math.PI - (elapsedTime / totalDayDuration) * Math.PI)} // Sun Y position
          r="5"
          fill="#fdeea2"
          stroke="#D7FDF2A9"
          strokeWidth="3"
        />
      </svg>
      
    </div>
  );
};

export default SunArc;
