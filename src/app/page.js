import React from "react";
import DynamicGrid from "./components/DynamicGrid";
import photo from "../../assets/image/young-hispanic-call-center-agent-man-smiling-happy-working-office.jpg";
import photo2 from "../../assets/image/istockphoto-1319103417-612x612.jpg";
import photo1 from "../../assets/image/young-man-casual-clothes-looking-happy-cheerful-smiling-broadly-waving-with-hand-sitting-chair-light-living-room.jpg";
import photo3 from "../../assets/image/medium-shot-woman-with-big-smile.jpg";
import photo4 from "../../assets/image/woman-with-headset-having-video-call-laptop.jpg";
import photo5 from "../../assets/image/selfie-portrait-videocall.jpg";




// Participants in the video grid
const participants = [
  { name: "Bob", img: photo1 },



];

// Suggested people
const suggestedParticipants = [
  { name: "Liam", img: photo4 },

    { name: "Sophia", img: photo2 },
    { name: "Alice", img: photo3 },
    { name: "Olivia", img: photo5 },
];

export default function Home() {
    return (
        <DynamicGrid
            participants={participants}
            suggestedParticipants={suggestedParticipants}
        />
    );
}
