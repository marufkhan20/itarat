import React from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineDesignServices } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-[#F8F8F8] py-20">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          <div className="pr-14 border-r flex flex-col justify-center text-center items-center">
            <p className="uppercase font-bold text-black/60 inline-block text-sm mb-3">
              100% SAFE AND SECURE PAYMENTS
            </p>
            <p>
              We accept netbanking, all major credit cards and orders that are
              cash on delivery
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <img src="/images/payments/1.png" alt="" />
              <img src="/images/payments/2.png" alt="" />
              <img src="/images/payments/3.png" alt="" />
              <img src="/images/payments/4.png" alt="" />
            </div>
          </div>
          <div className="pr-14 border-r flex justify-between items-center gap-5 flex-wrap">
            <div className="text-black/60 flex flex-col gap-3 items-center justify-center">
              <IoChatboxOutline className="text-3xl text-black/60" />
              <p className="text-sm text-center">24X7 SUPPORT</p>
            </div>
            <div className="text-black/60 flex flex-col gap-3 items-center justify-center">
              <MdOutlineDesignServices className="text-3xl text-black/60" />
              <p className="text-sm text-center">1K+ DESIGNERS</p>
            </div>
            <div className="text-black/60 flex flex-col gap-3 items-center justify-center">
              <LiaShippingFastSolid className="text-3xl text-black/60" />
              <p className="text-sm text-center">FREE SHIPPING</p>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <p className="uppercase font-bold text-black/60 inline-block text-sm mb-3">
              STYLE UPDATES, DELIVERED WEEKLY
            </p>
            <p>
              Sign up for exclusives like early access to sale, latest trends &
              arrivals from your fav designers
            </p>
            <div className="flex items-center w-full flex-wrap justify-center max-w-[330px] gap-2 mt-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="py-2 px-3 outline-none border bg-transparent text-black placeholder:text-black border-black flex-1"
              />
              <button className="py-2 px-4 bg-black text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#232121]">
        <div className="container border-t py-6">
          <p className="text-white/50">Copyright © 2024 - Babyshop Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
