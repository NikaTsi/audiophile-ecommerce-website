import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import arrow from '../assets/section/arrow.svg';

export default function Categories({ value, ptValue }) {
  const desktopImageWidths = ["w-[123px]", "w-[121px]", "w-[125px]"];
  const mobileImageWidths = ["w-[80px]", "w-[84px]", "w-[103px]"];
  const [imageWidths, setImageWidths] = useState(mobileImageWidths);

  useEffect(() => {
    const handleImageSizes = () => {
      if (window.innerWidth >= 1280) {
        setImageWidths(desktopImageWidths);
      } else {
        setImageWidths(mobileImageWidths);
      }
    };

    window.addEventListener('resize', handleImageSizes);
    handleImageSizes();

    return () => {
      window.removeEventListener('resize', handleImageSizes);
    };
  }, []);

  return (
    <section className={`flex flex-col w-full items-center justify-center gap-[68px] md:flex-row md:gap-[2%] md:px-10 ${value ? 'pb-[120px] md:pb-[96px]' : ''} ${ptValue ? 'pt-[84px] md:pt-[108px]' : 'pt-[92px] md:pt-[148px]'}`}>
      {data.section.map((item, index) => (
        <Link className="flex w-full justify-center" to={item.url} key={index}>
          <div className="flex flex-col w-[327px] text-center items-center bg-[#f1f1f1] rounded-[8px] relative pt-[88px] pb-[22px] cursor-pointer group md:w-full xl:h-[204px] xl:pt-[116px] xl:pb-0">
            <img className={`absolute top-[calc(-52px)] drop-shadow-3xl xl:top-[calc(-72px)] ${imageWidths[index]}`} src={require(`../assets${item.imageSrcMobile}`)} alt="icon" />
            <h1 className="font-bold text-[15px] text-[#000000] tracking-[1px] xl:text-[18px] xl:tracking-[1.3px]">{item.title}</h1>
            <div className="flex items-center gap-[13px] mt-[17px] xl:mt-[15px]">
              <p className="font-bold text-[13px] text-[#000000] opacity-50 tracking-[1px] group-hover:text-[#D87D4A] group-hover:opacity-100">SHOP</p>
              <img src={arrow} alt="arrowIcon" />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
