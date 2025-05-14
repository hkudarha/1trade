import React from 'react';
import airDropBanner from '../../assets/Dashboard/AirDropBanner.png'; // Existing banner image
import alertImg from '../../assets/Dashboard/AlertCartImg.png'; // Placeholder for card image, double-check path
import Swal from 'sweetalert2';

const cardData = [
  { id: 1, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
  { id: 2, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
  { id: 3, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
  { id: 4, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
  { id: 5, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
  { id: 6, title: "Earn $THEO on AUTHEO TestNet", description: "Join AUTHEO Testnet, complete tasks, and earn free $THEO Tokens instantly", buttonText: "Join Now", image: "placeholder-image-path" },
];

const sweatJoin = () => {
    
Swal.fire({
  title: "Joined Successfully",
  icon: "success",
  draggable: true
});
}


const AirdropAlert = () => {
  return (
    <div className="p-4 h-auto bg-transparent border-2 border-[#01EBE0] rounded-2xl text-white">
      {/* AirDropAlert Button */}
      <button className="relative text-lg px-6 py-2 font-semibold bg-black border-2 border-[#01EBE0] rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#01EBE0] hover:text-black group">
        <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-[#01EBE0]/50 to-transparent transition-all duration-300 group-hover:w-full"></span>
        <span className="relative z-10">AirDropAlert</span>
      </button>

      {/* Banner Image Section */}
      <section className="banner-section mt-4 w-full">
        <div className="w-full h-auto rounded-none">
          <img
            src={airDropBanner}
            alt="AirDrop Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Cards Section */}
<section className="cards-section mt-6 w-full ">
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="p-4 bg-gradient-to-b from-[#1a3c4d] to-[#0a1f2f] rounded-lg text-left w-full max-w-md md:w-auto"
      >
        {/* Image */}
        <div className="w-full h-52 mb-4 overflow-hidden rounded-md">
          <img
            src={alertImg}
            alt="Card Image"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
        <p className="text-base mb-4">{card.description}</p>
        <button onClick={()=>sweatJoin()} className="w-full bg-[#1a3c4d] text-white px-6 py-2 rounded-lg font-semibold text-base hover:bg-[#01EBE0] hover:text-black transition-all duration-300">
          {card.buttonText}
        </button>
      </div>
    ))}
  </div>
</section>


    </div>
  );
};

export default AirdropAlert;