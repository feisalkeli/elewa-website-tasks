const BeyondBusinessCard = () => {
  return (
    <section className="text-white flex items-center justify-between ml-4 md:ml-[200px] mb-[200px] bg-white">
      {/* Card Image */}
      <div className="flex flex-col md:flex-row   justify-between">
        <img
          src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
          alt=""
          className="object-contain rounded-xl "
          style={{ height: "690px" }}
        />
        <div className="text-black font-primary ml-[300px] mt-10 max-w-[900px]">
          <h1 className="text-[30px] md:text-[60px]">
            (Social) business for the win
          </h1>
          <p className="mt-10 text-[30px] md:text-[30px] md:break-words">
            With a young dynamic population that is eager to contribute to the
            global economy, East Africa has a lot to offer to the world. Now is
            the time to nurture sustainable,inclusive and scalable business. The
            rest will take care of itself
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondBusinessCard;
