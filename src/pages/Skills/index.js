import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as brandStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Img from "../../components/img";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import nodejsIcon from "../../assets/icons/nodejs-dark.svg";
import vscodeIcon from "../../assets/icons/vscode.svg";
import githubIcon from "../../assets/icons/github.svg";
import notepadppIcon from "../../assets/icons/notepadplusplus.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import reactIcon from "../../assets/icons/react.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import pythonIcon from "../../assets/icons/python.svg";

class Skill {
  constructor(name, content, img, skillLevel) {
    this.name = name;
    this.content = content;
    this.img = img;
    this.skillLevel = skillLevel;
  }

  render() {
    return (
      <div className='p-2 my-1 bg-slate-100 rounded-xl flex gap-4 items-center'>
        <div className='size-14 min-w-14 rounded-xl overflow-hidden'>
          <Img className='size-full' src={this.img} alt={this.name} />
        </div>
        <div className='w-full group hover:*:whitespace-normal overflow-hidden'>
          <p className='truncate transition-all'>{this.content}</p>
          <p className='group-hover:hidden text-sm'>
            {this.skillLevel.map((level, index) => (
              <FontAwesomeIcon key={index} icon={level} />
            ))}
          </p>
        </div>
      </div>
    );
  }
}

function Skills() {
  useEffect(() => {
    document.title = "📚 - KitoMC";
  }, []);

  const [openCategory, setOpenCategory] = useState(0);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const skillList = [
    new Skill("HTML", "HTML: (Ngôn ngữ đánh dấu siêu văn bản) là khối xây dựng 🧱 của cách trang web, sử dụng các thẻ để xác định cấu trúc và nội dung.", htmlIcon, [
      brandStar,
      brandStar,
      brandStar,
      regularStar,
      regularStar,
    ]),
    new Skill("CSS", "CSS: (Cascading Style Sheets) Ngôn ngữ kiểu tạo bố cục và trình bày cho HTML, giúp nhà phát triển thiết kế trang web hấp dẫn về mặt hình ảnh 🎨.", cssIcon, [
      brandStar,
      brandStar,
      brandStar,
      regularStar,
      regularStar,
    ]),
    // eslint-disable-next-line
    new Skill("JavaScript", "JavaScript: Ngôn ngữ linh hoạt tạo tính tương tác ✨ và động 🥏 cho trang web, mang lại trải nghiệm hấp dẫn cho người dùng.", javascriptIcon, [
      brandStar,
      regularStar,
      regularStar,
      regularStar,
      regularStar,
    ]),
    new Skill("TypeScript", "TypeScript: Ngôn ngữ lập trình mạnh mẽ được xây dựng trên JavaScript, cung cấp cho bạn công cụ tốt hơn ở mọi quy mô", typescriptIcon, [
      brandStar,
      regularStar,
      regularStar,
      regularStar,
      regularStar,
    ]),
    new Skill("Python", "Python:  Ngôn ngữ có hình thức rất sáng sủa, cấu trúc rõ ràng, thuận tiện cho người mới học lập trình và là ngôn ngữ lập trình dễ học", pythonIcon, [
      brandStar,
      regularStar,
      regularStar,
      regularStar,
      regularStar,
    ]),
    new Skill("Tailwind CSS", "Tailwind CSS: Framework CSS ưu tiên tiện ích cho phép các nhà phát triển nhanh chóng xây dựng giao diện người dùng mà không cần rời khỏi HTML của mình.", tailwindIcon, [
      brandStar,
      brandStar,
      brandStar,
      regularStar,
      regularStar,
    ]),
    new Skill("ReactJS", "ReactJS: Thư viện dành cho giao diện người dùng gốc và web. Xây dựng giao diện người dùng từ các phần riêng lẻ được gọi là các component được viết bằng JavaScript.", reactIcon, [
      brandStar,
      regularStar,
      regularStar,
      regularStar,
      regularStar,
    ]),
    new Skill("Node.js", "Node.js: Một môi trường chạy JavaScript phía máy chủ 🖥, giúp tạo ra ứng dụng web có khả năng mở rộng và hiệu quả.", nodejsIcon, [brandStar, regularStar, regularStar, regularStar, regularStar]),
    new Skill(
      "Visual Studio Code",
      "Visual Studio Code: Một công cụ miễn phí ✨ và mã nguồn mở được phát triển bởi Microsoft. Nó cung cấp nhiều tính năng và tiện ích mở rộng cho nhiều ngôn ngữ lập trình khác nhau.",
      vscodeIcon,
      [brandStar, brandStar, brandStar, brandStar, regularStar]
    ),
    new Skill("GitHub", "GitHub: Nền tảng cung cấp các công cụ cộng tác và kiểm soát phiên bản, cho phép các nhà phát triển lưu trữ 👩‍💻, đánh giá và quản lý kho mã cho các dự án phần mềm.", githubIcon, [
      brandStar,
      brandStar,
      regularStar,
      regularStar,
      regularStar,
    ]),
    new Skill("Notepad++", "Notepad++: Trình soạn thảo văn bản 📝 mã nguồn mở và miễn phí dành cho Windows. Đây là một công cụ nhẹ và nhiều tính năng.", notepadppIcon, [
      brandStar,
      brandStar,
      brandStar,
      brandStar,
      brandStar,
    ]),
  ];

  const categories = [
    {
      name: "Ngôn ngữ",
      contents: skillList.slice(0, 5),
    },
    {
      name: "Frameworks & Styling",
      contents: skillList.slice(5, 7),
    },
    {
      name: "Công cụ phát triển",
      contents: skillList.slice(7, 11),
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
          <div className='border-b-slate-600/40 border-b-[1px] cursor-pointer' key={index}>
            <div onClick={() => toggleCategory(index)}>
              <div className='pt-6 pb-4'>
                <h2 className='text-lg'>
                  {category.name} {openCategory === index ? <span className='text-cyan-600'>-</span> : "+"}
                </h2>
              </div>
              {openCategory === index && (
                <div>
                  {category.contents.map((skill, idx) => (
                    <div key={idx}>{skill.render()}</div>
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
