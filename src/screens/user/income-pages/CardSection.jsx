import React from 'react';

// Component to render the cards section
export const CardSection = ({ filter }) => {
  // Log the filter to debug
  console.log("Current filter:", filter);

  // Define different data sets based on the filter
  const dataMap = {
    ALL: [
      { title: "Total Registered Member", value: 250 },
      { title: "Total Member A", value: 50 },
      { title: "Total Member B", value: 100 },
      { title: "Total Member C", value: 100 },
      { title: "Total Valid Member", value: 200 },
      { title: "Total Valid A", value: 40 },
      { title: "Total Valid B", value: 70 },
      { title: "Total Valid C", value: 90 },
    ],
    TODAY: [
      { title: "Total Registered Member", value: 20 },
      { title: "Total Member A", value: 5 },
      { title: "Total Member B", value: 10 },
      { title: "Total Member C", value: 5 },
      { title: "Total Valid Member", value: 15 },
      { title: "Total Valid A", value: 4 },
      { title: "Total Valid B", value: 7 },
      { title: "Total Valid C", value: 4 },
    ],
    YESTERDAY: [
      { title: "Total Registered Member", value: 30 },
      { title: "Total Member A", value: 8 },
      { title: "Total Member B", value: 12 },
      { title: "Total Member C", value: 10 }, // Fixed the typo: "tittle" to "title"
      { title: "Total Valid Member", value: 25 },
      { title: "Total Valid A", value: 6 },
      { title: "Total Valid B", value: 10 },
      { title: "Total Valid C", value: 9 },
    ],
    WEEK: [
      { title: "Total Registered Member", value: 100 },
      { title: "Total Member A", value: 20 },
      { title: "Total Member B", value: 40 },
      { title: "Total Member C", value: 40 },
      { title: "Total Valid Member", value: 80 },
      { title: "Total Valid A", value: 15 },
      { title: "Total Valid B", value: 30 },
      { title: "Total Valid C", value: 35 },
    ],
    MONTH: [
      { title: "Total Registered Member", value: 200 },
      { title: "Total Member A", value: 40 },
      { title: "Total Member B", value: 80 },
      { title: "Total Member C", value: 80 },
      { title: "Total Valid Member", value: 160 },
      { title: "Total Valid A", value: 30 },
      { title: "Total Valid B", value: 60 },
      { title: "Total Valid C", value: 70 },
    ],
  };

  const cards = dataMap[filter] || dataMap.ALL; // Fallback to ALL if filter is invalid

  return (
    <section>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-xl mb-2">{card.title || "Title Missing"}</p>
            <div className="bg-[#01EBE0] rounded-lg p-4 w-40 flex items-center justify-center">
              <h1 className="text-[1.3rem] font-bold text-white">{card.value}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};