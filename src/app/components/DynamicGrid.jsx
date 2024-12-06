"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { FaMicrophone } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMonitorPlay } from "react-icons/lu";
import { BsFillUnlockFill } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { MdContacts } from "react-icons/md";

import logo from '../../../assets/image/download.png';
import logo1 from '../../../assets/image/young-hispanic-call-center-agent-man-smiling-happy-working-office.jpg';
import logo2 from '../../../assets/image/istockphoto-1319103417-612x612.jpg';


const DynamicGrid = ({ participants, suggestedParticipants }) => {
    const [currentParticipants, setCurrentParticipants] = useState(participants);
    const [suggestedPeople, setSuggestedPeople] = useState(suggestedParticipants);

    // Function to handle adding a suggested participant
    const handleAddParticipant = (person) => {
        setCurrentParticipants([...currentParticipants, person]);
        setSuggestedPeople(suggestedPeople.filter((p) => p.name !== person.name));
    };

    // Determine grid layout class based on participant count
    const gridClass = () => {
        switch (currentParticipants.length) {
            case 1:
                return 'grid grid-cols-1 h-full w-full';
            case 2:
                return 'grid grid-cols-2 w-full h-screen';
            case 3:
                return 'grid grid-cols-3 w-full h-screen';
            case 4:
                return 'grid grid-cols-2 w-full h-screen';
            case 5:
                return 'grid grid-rows-2 w-full h-full';
            default:
                return 'grid grid-cols-4 w-full h-screen';
        }
    };

    // Render the participants in the grid
    const renderParticipants = () => {
        if (currentParticipants.length === 5) {
            return (
                <>
                    <div className="grid grid-cols-3 w-full">
                        {currentParticipants.slice(0, 3).map((participant, index) => (
                            <div
                                key={index}
                                className="overflow-hidden bg-gray-800 aspect-auto"
                            >
                                <Image
                                    src={participant.img}
                                    alt="photo"
                                    className="h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 w-full">
                        {currentParticipants.slice(3).map((participant, index) => (
                            <div
                                key={index}
                                className="overflow-hidden bg-gray-800 aspect-auto"
                            >
                                <Image
                                    src={participant.img}
                                    alt="photo"
                                    className="h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </>
            );
        }

        return currentParticipants.map((participant, index) => (
            <div
                key={index}
                className="overflow-hidden bg-gray-800 aspect-auto"
            >
                <Image
                    src={participant.img}
                    alt="photo"
                    className="h-full object-cover"
                />
            </div>
        ));
    };

    // Render the current participants in a compact layout
    const renderCurrentParticipants = () => {
        const maxVisible = 2;
        const additionalCount = currentParticipants.length - maxVisible;

        return (
            <div className="flex  gap-2">
                {/* Render profile pictures */}
                <div className="relative flex p-4 bg-gray-100 w-[60px] h-[50px]  flex-col rounded-full">
                    {/* {currentParticipants.slice(0, maxVisible).map((participant, index) => (
                        <div
                            key={index}
                            className={`absolute rounded-full bg-gray-200 w-[40px] h-[40px] overflow-hidden border-2 border-gray-900`}
                            style={{
                                left: `${index * 35}px`, // Adjust this to overlap the images
                            }}
                        >
                            <Image
                                src={participant.img}
                                alt={participant.name}
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        
                    ))} */}

                    <Image src={logo1} alt='' className='rounded-full bg-white absolute left-2 top-0 w-[30px] h-[30px] object-cover' />
                    <Image src={logo2} alt='' className='rounded-full bg-white absolute right-2 bottom-0 w-[30px] h-[30px] object-cover' />
                    <div className=' bg-green-600 absolute top-1 right-3 w-2 h-2 rounded-full z-50'>

                    </div>
                </div>

                {/* Display names and count of additional participants */}
                <div className=' flex flex-col'>
                    <span className=' font-bold text-xs text-gray-500'>online</span>
                    <span className="text-sm  font-semibold w-[150px] mr-6">
                        {currentParticipants
                            .slice()
                            .map((p) => p.name)
                            .join(", ")}
                    </span>
                </div>
                <div>
                    <button
                        className=" font-bold rounded-2xl px-3 py-1 border-2 border-green-500 text-green-500"
                        
                    >
                        join
                    </button>
                </div>

            </div>
        );
    };

    // Render the list of suggested participants
    const renderSuggestedParticipants = () => {
        if (!suggestedPeople || suggestedPeople.length === 0) {
            return <p className="text-gray-500 p-3">No suggestions available.</p>;
        }

        return suggestedPeople.map((person, index) => (
            <div key={index} className="py-3 px-5">
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="rounded-full bg-gray-700 w-[60px] h-[60px] overflow-hidden">
                            <Image
                                src={person.img}
                                alt={person.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold">{person.name}</h1>
                            <h1 className="text-xs text-gray-400">Suggested</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <button
                            className="text-gray-400 font-bold rounded-2xl px-3 py-2 "
                        >
                        dismiss
                        </button>
                        <button
                            className="text-white font-bold rounded-2xl px-3 py-2 bg-green-500"
                            onClick={() => handleAddParticipant(person)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-[22%] min-w-[300px] h-full shadow-r-2 rounded-r-2xl bg-gray-50">
                <div className="flex justify-between items-center pb-6 py-4 px-1 border-b-2">
                    <div className="flex gap-2">
                        <Image src={logo} alt="logo" />
                        <div className="font-sans text-3xl font-bold">MyWorld</div>
                    </div>
                    <FaAngleLeft size={30} className="text-gray-400 p-1" />
                </div>
                <div>
                    <div className="px-4 py-6 flex justify-center items-center gap-3">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 w-full bg-gray-300 rounded-md"
                        />
                        <MdContacts size={40} className=' text-red-500' />
                    </div>
                    <div className="p-2 mb-7">
                        {renderCurrentParticipants()}
                    </div>
                </div>
                <div className="bg-gray-100 p-2">
                    <h1 className="text-xs text-gray-400 px-2 font-bold">
                        PEOPLE YOU MAY KNOW
                    </h1>
                </div>
                {renderSuggestedParticipants()}
            </div>
            {/* Main Content */}
            <div className="flex-1 relative bg-black">
                <div className={`p-0 ${gridClass()}`}>{renderParticipants()}</div>
                {/* Bottom Control Bar */}
                <div className="absolute bottom-10 w-full justify-center flex gap-10 p-2">
                    <IoSettings className="text-white hover:scale-150 duration-500" size={25} />
                    <BsFillUnlockFill className="text-white hover:scale-150 duration-500" size={25} />
                    <LuMonitorPlay className="text-white hover:scale-150 duration-500" size={25} />
                    <FaMicrophone className="text-white hover:scale-150 duration-500" size={25} />
                    <FaVideo className="text-white hover:scale-150 duration-500" size={25} />
                    <IoMdClose className="text-white hover:scale-150 duration-500" size={25} />
                </div>
            </div>
        </div>
    );
};

export default DynamicGrid;
