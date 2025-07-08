import React, { useState } from "react";
import cvideo from "../assets/cvideo.mp4";

const DemoVideo = () => {
  const [show, setShow] = useState(false);

  return (
    <section id="demo" className="px-6 py-16 text-center bg-white text-black">
      <h2 className="text-3xl font-bold mb-4">See Conduit in Action</h2>
      <p className="mb-6 text-gray-700">
        Click below to watch how Conduit Empathy Sensors help predict floods.
      </p>

      {!show ? (
        <button
          onClick={() => setShow(true)}
          className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
        >
          ▶️ Watch Video
        </button>
      ) : (
        <>
          <button
            onClick={() => setShow(false)}
            className="bg-blue-400 hover:bg-blue-600 text-white px-6 py-2 rounded shadow"
          >
            🔁 Replay Video
          </button>

          <div className="mt-8">
            <video
              controls
              muted
              className="rounded-lg max-w-3xl w-full h-[720px] mx-auto shadow-xl object-cover"
            >
              <source src={cvideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </>
      )}
    </section>
  );
};

export default DemoVideo;