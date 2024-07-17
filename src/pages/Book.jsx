import React from "react";
import Footer from "../components/home/Footer";
import Heading from "../components/myra/Heading";
import Header from "../components/shared/header";
import Line from "../components/ui/Line";

const Book = () => {
  return (
    <main>
      <Header />

      <section className="py-10">
        <div className="container">
          <Heading>Select Appointment</Heading>

          <Line />

          <div className="mt-10">
            <p className="font-semibold">Consultations</p>

            <div className="mt-4 shadow-md border">
              <div className="px-5 flex-wrap gap-5 py-10 border-b flex justify-between">
                <div>
                  <h2>
                    Initial Google Hangout Wedding Photography Consultation
                  </h2>
                  <span>1 hour</span>
                  <p className="mt-6">
                    We would love to set up a complimentary video consultation
                    to create a custom package to suit your day.
                    <br />
                    At the time of the appointment please click the link 'Join
                    with Google Meet' on our calendar invite and we will be
                    there
                  </p>
                </div>
                <div>
                  <button className="px-8 py-2 hover:bg-[#DEA460] text-white transition-all bg-[#ac7f4c]">
                    Book
                  </button>
                </div>
              </div>

              <div className="px-5 flex-wrap gap-5 py-10 flex justify-between">
                <div>
                  <h2>In Studio Wedding Photography Consultation</h2>
                  <span>1 hour</span>
                  <p className="mt-6">
                    We would love to set up a complimentary video consultation
                    to create a custom package to suit your day.
                    <br />
                    At the time of the appointment please click the link 'Join
                    with Google Meet' on our calendar invite and we will be
                    there
                  </p>
                </div>
                <div>
                  <button className="px-8 py-2 hover:bg-[#DEA460] text-white transition-all bg-[#ac7f4c]">
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Book;
