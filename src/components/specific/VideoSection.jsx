import React from "react";

function VideoSection() {
  return (
    <section className="mt-28 z-10">
      <iframe
        src="https://www.youtube.com/embed/nviEkurZlao?si=cUEvyNXX2pnHmZqe&wmode=opaque&amp;modestbranding=1&amp;rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        className="max-w-[1110px] w-full mx-auto rounded-3xl md:h-[652px] h-[400px] !z-10 relative"
        
      ></iframe>
    </section>
  );
}

export default VideoSection;
