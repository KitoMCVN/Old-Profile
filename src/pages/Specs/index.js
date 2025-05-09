import { useEffect } from "react";
import desktop from "../../assets/imgs/desktop.png";

function Specs() {
  useEffect(() => {
    document.title = "🖥 - KitoMC";
  }, []);

  const laptopSpecs = {
    laptopCpu: "Intel Core 2 Duo T6570 (2.10 GHz, 800 MHz)",
    laptopRam: "3GB DDR2 (667MHz)",
    laptopGpu: "Intel 4 Series Express Chipset Family",
    laptopDisplay: "Không có",
    laptopOs: "Windows 10 Home 22H2",
    laptopDisk: "SSD-EEKOO-128G (128GB, 500MB/s)",
    laptopH: "Đã hỏng",
  };

  const phoneSpecs = {
    phoneCpu: "MediaTek Helio G99 Ultra",
    phoneRam: "8 GB",
    phoneDisplay: "AMOLED 6.67" 120Hz",
    phoneOs: "HyperOS 2.0.1 (Android 15)",
    phoneDisk: "128 GB",
    phoneCam: "Chính 108 MP & Phụ 2 MP, 2 MP (Sau) | 20 MP (Trước)",
    phonePin: "5400 mAh, 30 W",
  };

  const LaptopInfo = ({ laptopCpu, laptopRam, laptopGpu, laptopDisplay, laptopOs, laptopDisk, laptopH }) => (
    <>
      <ul className='list-disc text-sm ml-6'>
        <li>CPU: {laptopCpu}</li>
        <li>GPU: {laptopGpu}</li>
        <li>RAM: {laptopRam}</li>
        <li>Disk: {laptopDisk}</li>
        <li>Màn: {laptopDisplay}</li>
        <li>Os: {laptopOs}</li>
        <li>Tình trạng: {laptopH}</li>
      </ul>
    </>
  );

  const PhoneInfo = ({ phoneCpu, phoneRam, phoneDisplay, phoneOs, phoneDisk, phoneCam, phonePin }) => (
    <>
      <ul className='list-disc text-sm ml-6'
        <li>CPU: {phoneCpu}</li>
        <li>RAM: {phoneRam}</li>
        <li>Disk: {phoneDisk}</li>
        <li>Màn: {phoneDisplay}</li>
        <li>Os: {phoneOs}</li>
        <li>Camera: {phoneCam}</li>
        <li>Pin, sạc: {phonePin}</li>
      </ul>
    </>
  );

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Specs 💼</h2>
      </div>
      <p>Thiết bị tui hiện đang sử dụng để chơi game, lập trình, học tập và hàng ngày 💻.</p>
      <div className='w-full mt-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
        <div>
          <div className='mb-4 p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>
              Laptop<span className='text-xl ml-2 inline-block'>(Dell Inspiron 1545)</span>
            </h4>
            <LaptopInfo {...laptopSpecs} />
          </div>
          <div className='p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>
              Phone<span className='text-xl ml-2 inline-block'>(Redmi Node 14 4G)</span>
            </h4>
            <PhoneInfo {...phoneSpecs} />
          </div>
        </div>
        <div>
          <div className='mb-4 p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>Mạng</h4>
            <ul className='list-disc text-sm ml-6'>
              <li>Mạng VNPT: 300Mbps</li>
            </ul>
          </div>
          <div className='p-2 rounded-xl bg-slate-100'>
            <h4 className='mb-1 text-2xl font-bold'>Thiết Bị Khác</h4>
            <ul className='list-disc text-sm ml-6'>
              <li>Chuột: Dell MS116</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='my-6 border-dashed border-8 border-cyan-500 rounded-3xl overflow-hidden w-11/12 rotate-[355deg] mx-auto'>
        <img src={desktop} alt='' />
      </div>
    </div>
  );
}

export default Specs;
