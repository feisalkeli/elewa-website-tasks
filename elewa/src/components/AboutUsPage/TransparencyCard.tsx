import React from "react";

const TransparencyCard = () => {
  return (
    <section className="w-full p-[80px] flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690300/elewa-group-website/Icons/PNG/Transparancy_fqal8q.png"
          alt=""
        />
      </div>
      <div className="font-primary text-center mt-12">
        <h3 className="font-bold text-4xl">Transparency</h3>
        <p className="max-w-[700px] mt-4 text-[25px]">
          <span></span>
          Transparency, an open mind, and an open heart hold our organization
          together. We commit to and promote full transparency to ourselves, our
          stakeholders, and our beneficiaries. We furthermore invest heavily in
          open-source and open-data projects, as true potential lies everywhere.
          Not just within.
        </p>
      </div>
    </section>
  );
};

export default TransparencyCard;
