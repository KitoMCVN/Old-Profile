import React, { useState } from "react";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import nodejsIcon from "../../assets/icons/nodejs-dark.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import githubIcon from "../../assets/icons/github.svg";
import notepadppIcon from "../../assets/icons/notepadplusplus.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import reactIcon from "../../assets/icons/react.svg";

function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const categories = [
    {
      name: "Ngôn ngữ",
      contents: [
        { img: htmlIcon, content: "HTML: (Ngôn ngữ đánh dấu siêu văn bản) là khối xây dựng 🧱 của trang web, sử dụng thẻ để xác định cấu trúc và nội dung." },
        { img: cssIcon, content: "CSS: Ngôn ngữ kiểu tạo bố cục và trình bày cho HTML, giúp nhà phát triển thiết kế trang web hấp dẫn về mặt hình ảnh 🎨." },
        { img: javascriptIcon, content: "JavaScript: Ngôn ngữ linh hoạt tạo tính tương tác ✨ và động 🥏 cho trang web, mang lại trải nghiệm hấp dẫn cho người dùng." },
      ],
    },
    {
      name: "Frameworks & Styling",
      contents: [
        { img: tailwindIcon, content: "TailwindCSS: Framework CSS ưu tiên tiện ích cho phép các nhà phát triển nhanh chóng xây dựng giao diện người dùng mà không cần rời khỏi HTML của mình" },
        { img: reactIcon, content: "ReactJS: Thư viện dành cho giao diện người dùng gốc và web. Xây dựng giao diện người dùng từ các phần riêng lẻ được gọi là các component được viết bằng JavaScript" },
      ],
    },
    {
      name: "Công cụ phát triển",
      contents: [
        { img: githubIcon, content: "Github: Nền tảng cung cấp các công cụ cộng tác và kiểm soát phiên bản, cho phép các nhà phát triển lưu trữ 👩‍💻, đánh giá và quản lý kho mã cho các dự án phần mềm. " },
        { img: vscodeIcon, content: "Visual Studio Code: Một công cụ miễn phí ✨ và mã nguồn mở được phát triển bởi Microsoft. Nó cung cấp nhiều tính năng và tiện ích mở rộng cho nhiều ngôn ngữ lập trình khác nhau" },
        { img: nodejsIcon, content: "NodeJS: Một môi trường chạy JavaScript phía máy chủ 🖥, giúp tạo ra ứng dụng web có khả năng mở rộng và hiệu quả." },
        { img: notepadppIcon, content: "Note Pad++: Trình soạn thảo văn bản 📝 mã nguồn mở và miễn phí dành cho Windows. Đây là một công cụ nhẹ và nhìu tính năng" },
      ],
    },
  ];

  return (
    <div className='font-bold text-neutral-800 w-full pb-4'>
      <div className='mb-3 flex text-3xl gap-2 font-bold'>
        <div className='bg-neutral-800 h-[36px] w-2'></div>
        <h2>Skills 🔍</h2>
      </div>
      <p>Kỹ năng và công nghệ mà tui sử dụng để xây dựng mọi thứ. 😊</p>
      <div className='mt-6'>
        {categories.map((category, index) => (
          <div className='border-b-slate-600/40 border-b-[1px] cursor-pointer transition-all duration-300'>
            <div key={index}>
              <div className='pt-6 pb-4' onClick={() => toggleCategory(index)}>
                <h2 className='text-lg'>
                  {category.name} {openCategory === index ? "-" : "+"}
                </h2>
              </div>
              {openCategory === index && (
                <div>
                  {category.contents.map((item, idx) => (
                    <div className='p-2 my-1 bg-slate-100 rounded-xl flex gap-4 items-center' key={idx}>
                      <div className='size-14 min-w-14 rounded-sm overflow-hidden'>
                        <img className='size-full' src={item.img} alt={category.name} />
                      </div>
                      <div className='w-full hover:*:whitespace-normal overflow-hidden'>
                        <p className='truncate transition-all'>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
