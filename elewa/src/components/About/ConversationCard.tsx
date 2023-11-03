const ConversationCard = () => {
  return (
    <section className="text-white flex items-center justify-between ">
      {/* Card Image */}
      <div className="flex flex-col md:flex-row   justify-between">
        <img
          src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
          alt=""
          className="object-contain rounded-xl "
          style={{ height: "690px" }}
        />
        <div className="text-white font-primary ml-12 mt-10">
          <h1 className="text-[30px] md:text-[60px]">
            (Social) business for the win
          </h1>
          <p className="mt-10 text-[30px] md:text-[30px] md:break-words">
            With a young dynamic population that is eager to contribute to the
            global economy,
            <br />
            East Africa has a lot to offer to the world.
            <br />
            Now is the time to nurture sustainable,inclusive and scalable
            business. <br />
            The rest will take care of itself
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversationCard;
