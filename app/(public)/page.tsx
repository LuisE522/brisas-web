import PopUp from "@/components/Home/PopUp";
import Page1 from "@/components/Home/Page1";
import Page2 from "@/components/Home/Page2";

export default function Home() {
  const i_images = [
    "/assets/images/personajes/i_frame_10.png",
    "/assets/images/personajes/i_frame_9.png",
    "/assets/images/personajes/i_frame_8.png",
    "/assets/images/personajes/i_frame_7.png",
    "/assets/images/personajes/i_frame_6.png",
  ];

  const d_images = [
    "/assets/images/personajes/d_frame_17.png",
    "/assets/images/personajes/d_frame_16.png",
    "/assets/images/personajes/d_frame_15.png",
    "/assets/images/personajes/d_frame_14.png",
    "/assets/images/personajes/d_frame_13.png",
  ];

  return (
    <div className="w-full min-h-screen bg-black">
      {/* <Page1 d_images={d_images} i_images={i_images} /> */}
      <Page2 d_images={d_images} i_images={i_images} />

      {/* <div className="h-screen bg-[#12141C]"></div>
      <div className="h-screen bg-purple-500" id="purple"></div> */}

      <div className="h-screen "></div>
      <div className="h-screen" id="purple"></div>

      {/* <PopUp /> */}
    </div>
  );
}
