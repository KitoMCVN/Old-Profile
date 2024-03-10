import { useEffect } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";
import Img from "../../components/img";
import minecraftPcImg from "../../assets/imgs/games/minecraft.png";
import minecraftPeImg from "../../assets/imgs/games/minecraftPe.png";
import stardewValleyImg from "../../assets/imgs/games/stardewValley.png";
import minecraft from "../../assets/imgs/games/all/minecraft.jpg";
import miniworld from "../../assets/imgs/games/all/miniworld.jpg";
import forager from "../../assets/imgs/games/all/forager.jpg";
import stardewvalle from "../../assets/imgs/games/all/stardewvalley.jpg";
import roblox from "../../assets/imgs/games/all/roblox.jpg";
import ggd from "../../assets/imgs/games/all/ggd.jpg";
import picopark from "../../assets/imgs/games/all/picopark.png";

function Games() {
  useEffect(() => {
    document.title = "🎮 - KitoMC";
  }, []);

  const games = [
    {
      name: "Minecraft Bedrock",
      time: "1324",
      img: minecraftPeImg,
    },
    {
      name: "Minecraft Java",
      time: "560",
      img: minecraftPcImg,
    },

    {
      name: "Stardew Valley",
      time: "54",
      img: stardewValleyImg,
    },
  ];

  const allGames = [
    {
      name: "Minecraft",
      time: "1924",
      img: minecraft,
    },
    {
      name: "Mini World",
      time: "320",
      img: miniworld,
    },
    {
      name: "Forager",
      time: "56",
      img: forager,
    },
    {
      name: "Stardew Valley",
      time: "54",
      img: stardewvalle,
    },
    {
      name: "Roblox",
      time: "26",
      img: roblox,
    },
    {
      name: "Goose Goose Duck",
      time: "12",
      img: ggd,
    },

    {
      name: "Pico Park",
      time: "8",
      img: picopark,
    },
  ];

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Game 🎮</h2>
      </div>
      <p>Game tui chơi và thời gian...✨</p>
      <div>
        <h3 className='mb-2 text-lg mt-6'>
          <span>⬤</span> Các game 🌎 chơi nhiều nhất
        </h3>
        <div className='flex gap-4 flex-wrap'>
          {games.map(({ name, time, img }) => (
            <div key={time}>
              <Tippy placement='right' offset={[-6, 8]} animation='scale' content={`${time}h = ${(time / 24).toFixed(2)} day`}>
                <p className='text-cyan-600 w-fit'>{time}h</p>
              </Tippy>
              <div className='w-40 h-64 mb-1 rounded-xl cursor-pointer overflow-hidden transition-all ring-cyan-600 hover:ring-4 focus:ring-4'>
                <Img className='object-cover size-full' src={img} alt={name} />
              </div>
              <h4 className='truncate w-full'>{name}</h4>
            </div>
          ))}
        </div>
        <h3 className='mb-2 text-lg mt-6'>
          <span>⬤</span> Tất cả 🎏
        </h3>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3'>
          {allGames.map(({ name, time, img }) => (
            <Tippy
              key={time}
              arrow=' '
              offset={[-1, 5]}
              placement='top-start'
              content={
                <div className=''>
                  <h4>{name}</h4>
                  <p className='text-cyan-300'>{time} hours</p>
                </div>
              }>
              <div className='flex justify-center border-[1px] border-slate-800/10 items-center rounded-sm overflow-hidden h-[84px] w-full transition-transform ring-cyan-600 hover:ring-2 focus:ring-2'>
                <Img className='object-cover bg-slate-300' src={img} alt={name} />
              </div>
            </Tippy>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
