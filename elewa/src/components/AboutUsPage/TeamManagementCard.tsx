import CarouselComponent from "./CarouselComponent";

const TeamManagementCard = () => {
  return (
    <section className="bg-black w-full p-[70px]">
      <div className="flex justify-start font-primary">
        <h3 className="text-5xl text-white">
          Team <span className="ml-4">|</span>
          <span className="font-thin ml-6">Management</span>
        </h3>
      </div>
      <div>
        <CarouselComponent />
      </div>
    </section>
  );
};

export default TeamManagementCard;
