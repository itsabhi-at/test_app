import Image from "next/image";
import SearchBar from "../Components/SearchBar";
import circle from "@/../../public/assets/circle.png";
export default function Dashboard() {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="grid md:grid-cols-5 grid-cols-1 gap-4 py-4 px-4">
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
        <Card
          image={circle}
          title={"AIRLINE GIFT"}
          priceFrom={"5000"}
          priceTo={"10000"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta"
          }
        />
      </div>
    </div>
  );
}
export const Card = ({ image, title, priceFrom, priceTo, desc }) => {
  return (
    <div className="CARD flex flex-col md:items-center items-start gap-2 ">
      <div className="md:h-[150px] h-[200px] w-full md:w-[240px] rounded-md hover:backdrop-blur-md cursor-pointer border shadow hover:shadow-lg">
        <Image
          className="h-full w-full object-contain"
          src={image}
          alt="circle"
        />
      </div>
      <p className="font-semibold text-sm">{title}</p>
      <p className="font-medium">
        {priceFrom}$ - {priceTo}$
      </p>
      <p className="md:text-center font-thin text-sm">{desc}</p>
    </div>
  );
};
