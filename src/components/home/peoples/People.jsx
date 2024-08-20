import React, { useState } from "react";

const People = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-[#F3F2E8] p-10">
        <div className="flex justify-center">
          <img src="/images/peoples/1.png" alt="" />
        </div>
        <div>
          <div className="cursor-pointer flex items-center justify-center gap-2 mt-5">
            <img src="/images/icons/love-2.png" className="w-6" alt="" />
            <h4 className="text-lg text-[#EACA78]">Name of couple </h4>
          </div>
          <p className="mt-5">
            One of the best decisions we made throughout the whole process of
            wedding planning was choosing Kirsten to be our photographer. In a
            world where the wedding industry can sometimes feel disingenuous and
            impersonal, Kirsten made the process feel like we were meeting a
            close friend and having laughs and a good time together! From the
            first time we spoke, we had a long FaceTime discussion to get to
            know each other, which made us feel like she was invested in getting
            to know us personally and ensuring we would be a good fit. She was
            very flexible in making sure we had the perfect number of hours of
            services for our various events and making herself available to us.
          </p>

          <div className="flex justify-center">
            <button
              className={`border border-black inline-block mt-5 py-3 px-6 rounded-bl-3xl rounded-tr-3xl font-medium text-[15px] transition-all hover:rounded-tl-3xl hover:rounded-br-3xl hover:rounded-tr-none hover:rounded-bl-none`}
              onClick={() => setOpen(true)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed inset-0 w-full h-full py-10 px-5 overflow-y-auto flex items-center justify-center bg-black/60 z-[9000]`}
        onClick={() => setOpen(false)}
      >
        <div
          className="grid md:grid-cols-2 w-[500px] md:w-[800px]"
          onClick={(e) => e.stopPropagation()}
        >
          <img src="/images/peoples/3.png" alt="" className="w-full" />

          <div className="bg-[#F3F2E8] p-10">
            <p className="mt-5">
              One of the best decisions we made throughout the whole process of
              wedding planning was choosing Kirsten to be our photographer. In a
              world where the wedding industry can sometimes feel disingenuous
              and impersonal, Kirsten made the process feel like we were meeting
              a close friend and having laughs and a good time together! From
              the first time we spoke, we had a long FaceTime discussion to get
              to know each other, which made us feel like she was invested in
              getting to know us personally and ensuring we would be a good fit.
              She was very flexible in making sure we had the perfect number of
              hours of services for our various events and making herself
              available to us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
