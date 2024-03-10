import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faEarthAsia, faUserGraduate, faSchool } from "@fortawesome/free-solid-svg-icons";
import ChillImg from "../../assets/imgs/images.jpg";
import Img from "../../components/img";

function About() {
  useEffect(() => {
    document.title = "KitoMC";
  }, []);

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>About 💤</h2>
      </div>
      <div className='mt-4 font-semibold md:grid grid-cols-2 gap-x-4'>
        <div>
          <div>
            <h3 className='mb-2 text-xl mt-6'>
              <span>⬤</span> Tôi học lập trình như thế nào? 🤔
            </h3>
            <p className='text-slate-800/90 text-pretty'>
              Tôi luôn tò mò về cách mà các trang web và trò chơi hoạt động. Từ việc sử dụng HTML để thiết kế giao diện, CSS để tạo kiểu, JavaScript để thêm chức năng, đến việc học React vào đầu năm 2024, mỗi bước tiến
              mới đều mở ra một cánh cửa mới để hiểu sâu hơn về internet. Sự tò mò và đam mê không ngừng luôn dẫn dắt tôi trên hành trình này. Tôi tin rằng với kiên nhẫn và nỗ lực, mọi điều đều có thể trở thành hiện thực
              trong thế giới công nghệ!
            </p>
          </div>
          <div>
            <h3 className='mb-2 text-xl mt-6'>
              <span>⬤</span> Trang web này để làm gì? 🍜
            </h3>
            <Img className='drag-none size-40 sm:size-44 md:size-48 lg:size-60 float-right mb-1 ml-2 select-none rounded-md border-4 border-pink-600/50 bg-neutral-800' alt='img' src={ChillImg}></Img>
            <p className='text-slate-800/90 text-pretty'>
              Trang web này là một trang gian cá nhân giới thiệu về bản thân, thành tựu và dự án đã tham gia. Tôi chia sẻ hành trình cá nhân, kinh nghiệm và kỹ năng chuyên môn. Bạn có thể tìm hiểu về lý lịch, kinh nghiệm
              và kỹ năng của tôi trong các lĩnh vực cụ thể. Ngoài ra, đây cũng là nơi tôi tạo kết nối, chia sẻ thông tin và ý kiến với cộng đồng. Hy vọng bạn hiểu thêm về tôi và có cơ hội hợp tác trong tương lai.
            </p>
          </div>
        </div>
        <div>
          <div className='hidden md:block md:pl-12 lg:pl-28 xl:pl-32'>
            <div className='p-4 rounded-lg border-[2px] bg-slate-100 border-slate-200'>
              <div className='flex gap-3 items-center'>
                <div className='text-slate-700'>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <p>Work</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faEarthAsia} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>Wide World</h5>
                  <div className='flex justify-between text-xs text-slate-700'>
                    <p>Tự do</p>
                    <p>2022 - now</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 mt-4 rounded-lg border-[2px] bg-slate-100 border-slate-200'>
              <div className='flex gap-3 items-center'>
                <div className='text-slate-700'>
                  <FontAwesomeIcon icon={faUserGraduate} />
                </div>
                <p>Education</p>
              </div>
              <div className='flex mt-6 gap-3 items-center'>
                <div className='size-10 rounded-full bg-slate-800 text-slate-100 text-lg flex items-center justify-center'>
                  <FontAwesomeIcon icon={faSchool} />
                </div>
                <div className='flex-1'>
                  <h5 className='text-sm'>THCS Thị Trấn Đại Ngãi</h5>
                  <div className='flex justify-between text-xs text-slate-700'>
                    <p>Học sinh trung bình</p>
                    <p>201x - 202x</p>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <a href='http://thcsdaingai.pgdlongphu.edu.vn/' className='w-full py-2 flex text-sm hover:bg-slate-700 items-center gap-2 justify-center text-slate-100 bg-slate-800 rounded-lg'>
                  <span>
                    <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                  </span>
                  <span>Web trường</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
