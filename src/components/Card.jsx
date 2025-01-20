import React from "react";
export default function Card() {
  return (
    <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div class="p-4">
        <h6 class="mb-2 text-slate-800 text-xl font-semibold">
          REACT WEBPAGE PROJECT
        </h6>
        <p class="text-slate-600 leading-normal font-light">
          React is the library for web and native user interfaces. Build user
          interfaces out of individual pieces called components written in
          JavaScript.
        </p>
      </div>
      <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src="https://images.unsplash.com/photo-1725610588086-b9e38da987f7?q=80&w=1200"
          alt="card-image"
        />
      </div>
    </div>
  );
}
