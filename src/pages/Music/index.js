import YouTubeComponent from "../../api/testYoutubeAPI";

function Music() {
  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Music 🎶</h2>
      </div>
      <p>Những âm thanh chữa lành con tim 💖</p>
      <YouTubeComponent></YouTubeComponent>
    </div>
  );
}

export default Music;
