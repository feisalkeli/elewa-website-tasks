const CooperativeCard = () => {
  return (
    <section className="w-full p-[80px]">
      <div className="flex flex-col md:flex-row ">
        <div className="flex-grow mr-9 mb-11 ">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"
            alt=""
            className="object-contain mb-10"
          />
          <h3 className="text-[40px] font-bold font-primary">Cooperative</h3>
          <p className="font-primary max-w-[400px]  lg:max-w-[700px] text-2xl">
            One for all ,all for one! We have a cooperative and open mindset. If
            one of us grows, all will follow.
          </p>
        </div>
        <div className="flex-grow  ">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/ownership_yno4a2.png"
            alt=""
            className="object-contain mb-10"
          />
          <h3 className="text-[40px] font-bold font-primary">Ownership</h3>
          <p className="font-primary max-w-[400px]  lg:max-w-[700px] text-2xl">
            We are dependable and honour our commitments. When things don't go
            as planned, as they sometimes do, we communicate early to avoid
            catastrophe.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ">
        <div className="flex-grow mr-9 mb-11 ">
          <img
            src="https://static.thenounproject.com/png/1721983-200.png"
            alt=""
            className="object-contain mb-10"
          />
          <h3 className="text-[40px] font-bold font-primary">Detail</h3>
          <p className="font-primary max-w-[400px]  lg:max-w-[700px] text-2xl">
            We are a "Centre of Excellence" as per global standards. We only
            compete with ourselves, but find in the global standard our only
            worthy rival.
          </p>
        </div>
        <div className="flex-grow  ">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png"
            alt=""
            className="object-contain mb-10"
          />
          <h3 className="text-[40px] font-bold font-primary">Empathy</h3>
          <p className="font-primary max-w-[400px]  lg:max-w-[700px] text-2xl">
            We are nothing without people, and people have different contexts
            and needs. Our organization acts as a safe haven and shield for
            those in need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CooperativeCard;
