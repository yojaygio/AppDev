"use client"; // Required for interactivity
import React, { useState } from 'react';

export default function Itinerary() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleDay = (day: number) => {
    setCompleted(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const days = [
    { 
      id: 1, 
      date: "March 13", 
      title: "Arrival & Chill", 
      activities: ["7PM: Arrive at MCIA", "8:30PM: Check-in @ ARC Towers", "Night Swim & Airbnb Dinner"] 
    },
    { 
      id: 2, 
      date: "March 14", 
      title: "Moalboal Adventure", 
      activities: ["5AM: Leave for Moalboal", "Breakfast at Smooth Cafe", "Sardine Run & Turtle Snorkeling", "Evening: Return to City"] 
    },
    { 
      id: 3, 
      date: "March 15", 
      title: "Tops & Birthday Dinner", 
      activities: ["10AM: Temple of Leah", "1PM: The Circle at Tops", "6PM: B-Day Dinner at Top of Cebu", "10PM: Flight to Davao"] 
    },
    { 
      id: 4, 
      date: "March 16", 
      title: "Brother's Solo Day", 
      activities: ["SM Seaside Sky Garden", "10,000 Roses Cordova"] 
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-blue-700 text-white py-12 px-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold">Cebu Itinerary 2026</h1>
        <p className="opacity-80">March 13 - 16 | Birthday Edition</p>
      </div>

      <div className="max-w-2xl mx-auto mt-8 px-4 space-y-4">
        {days.map((day) => (
          <div 
            key={day.id} 
            onClick={() => toggleDay(day.id)}
            className={`cursor-pointer transition-all duration-300 p-6 rounded-2xl border-2 ${
              completed.includes(day.id) 
              ? "bg-green-50 border-green-200 opacity-60" 
              : "bg-white border-transparent shadow-sm hover:border-blue-300"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-blue-500 uppercase">{day.date}</span>
              {completed.includes(day.id) && <span className="text-green-600 font-bold">✓ Done</span>}
            </div>
            <h2 className="text-xl font-bold mt-1">{day.title}</h2>
            
            <ul className="mt-4 space-y-2">
              {day.activities.map((act, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-600">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  {act}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <a 
          href="https://www.airbnb.com/rooms/1536921212651433726" 
          target="_blank"
          className="block w-full text-center bg-rose-500 text-white py-4 rounded-xl font-bold hover:bg-rose-600 transition"
        >
          View Airbnb Booking
        </a>
      </div>
    </main>
  );
}