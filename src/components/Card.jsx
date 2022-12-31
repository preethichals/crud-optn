import React from 'react'

function Card() {
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 content-center">
            <div className="font-bold text-xl mb-2 text-center">
              The Coldest Sunset
            </div>
            <p className="text-gray-700 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <button className="btn btn-blue">Add to Cart</button>
          </div>
        </div>
     
    );
}

export default Card