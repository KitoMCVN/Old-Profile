import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

function CustomStatus({ customStatus }) {
  return (
    <>
      {customStatus && (
        <p className='text-sm text-slate-600 mt-[2px]'>
          ▸ {customStatus.emoji && <span className='mr-1'>{customStatus.emoji.name}</span>}
          {customStatus.state}
        </p>
      )}
    </>
  );
}

function replaceCharacters(inputString) {
  return inputString.replace(/;/g, ",").replace(/'/g, ",");
}

function UserInfo() {
  const [userData, setUserData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [weather, setWeather] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.lanyard.rest/v1/users/915876843884777472");
      const userData = response.data.data;
      setUserData(userData);
    } catch (error) {
      console.error("Lỗi:", error);
    }
  };

  const fetchWeather = () => {
    axios
      .get("https://api.openweathermap.org/data/2.5/weather?q=Soc%20Trang,vn&appid=a601622a383aee1aea5573743d8e8875&units=metric")
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchWeather();

    const intervalId = setInterval(
      () => {
        fetchData();
        fetchWeather();
      },
      1 * 60 * 1000
    );

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (userData) {
      const startTimestamp = userData.activities.find((activity) => activity.type === 0)?.timestamps.start;
      const intervalId = setInterval(() => {
        const currentTimestamp = Date.now();
        const elapsed = currentTimestamp - startTimestamp;
        setElapsedTime(elapsed);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [userData]);

  const formatElapsedTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d ${hours % 24}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  };

  if (!userData || !weather) {
    return (
      <>
        <div className='md:flex gap-6 items-center'>
          <div className='md:m-0 mb-5 mx-auto rounded-full min-w-32 size-32 overflow-hidden border-4 border-cyan-500'>
            <div className='rounded-full overflow-hidden border-4 border-transparent'>
              <div className='size-[112px] bg-slate-300 animate-pulse'></div>
            </div>
          </div>
          <div className='text-gray-900 '>
            <h2 className='font-semibold text-2xl'>
              Hey, I'm{" "}
              <Tippy animation='scale' content='Gia Bảo'>
                <span className='text-cyan-800'>KitoMC</span>
              </Tippy>{" "}
              👋
            </h2>
            <div className='w-full h-1 bg-cyan-500 rounded-sm my-1'></div>
            <div className='font-semibold text-justify'>
              Chào mọi người! Tui là KitoMC (<span className='text-cyan-800'>200x</span>), lập trình viên web tự học và là người chơi Minecraft. Với kiến thức tự học và các dự án thú vị, tui đang tìm kiếm cơ hội mới để
              đem sự sáng tạo và đam mê vào làm việc.{" "}
              <Link className='text-slate-600 underline' to='/skills'>
                Xem thêm không nhỉ
              </Link>{" "}
              ✒️
            </div>
          </div>
        </div>
        <div className='w-56 rounded-full bg-slate-300 animate-pulse h-4 mt-4'></div>
        <div className='w-52 rounded-full bg-slate-300 animate-pulse h-4 mt-3'></div>
      </>
    );
  }

  const { discord_user, activities, discord_status } = userData;
  const { avatar } = discord_user;
  const customStatus = activities.find((activity) => activity.type === 4);
  const listeningToSpotify = activities.find((activity) => activity.type === 2);

  const online = (
    <div className='flex items-center'>
      <div className='translate-y-[-1px] size-3 rounded-full bg-cyan-500'>
        <div className='size-3 rounded-full bg-cyan-500 animate-ping'></div>
      </div>
      <div className='ml-2 cursor-pointer' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <p>Có vẻ cậu ấy đang online</p>
        {isHovered && (
          <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-50 border-dashed border-cyan-500 border-4'>
            <p className='font-bold'>Tui đang ở nhà 🏡 hoặc ngoài quán cafe ☕</p>
            {activities.length === 0 ? (
              <></>
            ) : (
              activities.map((activity) => (
                <div className='' key={activity.type}>
                  {activity.type === 0 && (
                    <p>
                      ▸ Đang Chơi 🌠: {activity.name} <span className='text-sm text-slate-600'>({formatElapsedTime(elapsedTime)} đã trôi qua)</span>
                    </p>
                  )}
                </div>
              ))
            )}
            {listeningToSpotify && (
              <div className=''>
                <p>
                  ▸ Spotify 🎶: {listeningToSpotify.details} - {replaceCharacters(listeningToSpotify.state)}
                </p>
              </div>
            )}
            <CustomStatus customStatus={customStatus} />
          </div>
        )}
      </div>
    </div>
  );

  const idle = (
    <div className='flex items-center'>
      <div className='translate-y-[-1px] size-3 rounded-full bg-yellow-500'>
        <div className='size-3 rounded-full bg-yellow-500 animate-ping'></div>
      </div>
      <div className='ml-2 cursor-pointer' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <p>Không hoạt động</p>
        {isHovered && (
          <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-cyan-500 border-4'>
            <p>Có vẻ là 🧩 đang làm việc gì khác</p>
            {listeningToSpotify && (
              <div className=''>
                <p>
                  ▸ Spotify 🎶: {listeningToSpotify.details} - {replaceCharacters(listeningToSpotify.state)}
                </p>
              </div>
            )}
            <CustomStatus customStatus={customStatus} />
          </div>
        )}
      </div>
    </div>
  );

  const offline = (
    <div className='flex items-center'>
      <div className='translate-y-[-1px] size-3 rounded-full bg-red-600'>
        <div className='size-3 rounded-full bg-red-600 animate-ping'></div>
      </div>
      <div className='ml-2 cursor-pointer' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <p>Đang offline rồi</p>
        {isHovered && (
          <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-cyan-500 border-4'>
            <p>Đang ở ngoài 🚪 hoặc đang ngủ 💤</p>
            <CustomStatus customStatus={customStatus} />
          </div>
        )}
      </div>
    </div>
  );

  const dnd = (
    <div className='flex items-center'>
      <div className='translate-y-[-1px] size-3 rounded-full bg-red-900'>
        <div className='size-3 rounded-full bg-red-900 animate-ping'></div>
      </div>
      <div className='ml-2 cursor-pointer' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <p>Không muốn bị làm phiền</p>
        {isHovered && (
          <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-cyan-500 border-4'>
            <p>Hong muốn bị làm phiền 🚫 đâu!</p>
            {listeningToSpotify && (
              <div className=''>
                <p>
                  ▸ Spotify 🎶: {listeningToSpotify.details} - {replaceCharacters(listeningToSpotify.state)}
                </p>
              </div>
            )}
            <CustomStatus customStatus={customStatus} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className='md:flex gap-6 items-center'>
        <div className='md:m-0 mb-5 mx-auto rounded-full min-w-32 size-32 overflow-hidden border-4 border-cyan-500'>
          <div className='rounded-full overflow-hidden border-4 border-transparent'>
            <img src={`https://cdn.discordapp.com/avatars/${discord_user.id}/${avatar}.png`} alt='Avatar' />
          </div>
        </div>
        <div className='text-gray-900 '>
          <h2 className='font-semibold text-2xl'>
            Hey, I'm{" "}
            <Tippy animation='scale' content='Gia Bảo'>
              <span className='text-cyan-800'>KitoMC</span>
            </Tippy>{" "}
            👋
          </h2>
          <div className='w-full h-1 bg-cyan-500 rounded-sm my-1'></div>
          <div className='font-semibold text-justify'>
            Chào mọi người! Tui là KitoMC (<span className='text-cyan-600'>200x</span>), lập trình viên web tự học và là người chơi Minecraft. Với kiến thức tự học và các dự án thú vị, tui đang tìm kiếm cơ hội mới để đem
            sự sáng tạo và đam mê vào làm việc.{" "}
            <Link className='text-slate-600 underline' to='/skills'>
              Xem thêm không nhỉ
            </Link>{" "}
            ✒️
          </div>
        </div>
      </div>
      <div className='font-semibold text-gray-900 mt-4 '>{discord_status === "online" ? online : discord_status === "idle" ? idle : discord_status === "dnd" ? dnd : offline}</div>
      <div>
        <div className='flex items-center'>
          <svg className='w-5 h-5 text-gray-800  -translate-x-[4px] -translate-y-[1px]' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'>
            <path fillRule='evenodd' d='M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' clipRule='evenodd' />
          </svg>
          <div className='font-semibold text-gray-900 cursor-pointer' onMouseEnter={() => setIsWeather(true)} onMouseLeave={() => setIsWeather(false)}>
            <p>Sóc Trăng, Việt Nam</p>
            {isWeather && (
              <div className='cursor-text absolute z-10 translate-x-[-20px] p-2 rounded-xl bg-slate-100 border-dashed border-cyan-500 border-4'>
                <p>⛺ Thành phố: {weather.name}</p>
                <p>⛅ Nhiệt độ: {weather.main.temp} ºC</p>
                <p>🚿 Độ ẩm: {weather.main.humidity}%</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
