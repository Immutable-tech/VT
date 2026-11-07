
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { GoRocket, GoPeople } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";

export default function About() {
  const aboutUs = [
    {
      icon: <GoRocket />,
      title: "Our Mission",
      description:
        "To deliver innovative and accessible technology solutions that empower people and transform lives.",
    },
    {
      icon: <IoEyeOutline />,
      title: "Our Vision",
      description:
        "To be a leading tech company known for excellence, innovation and positive impact.",
    },
    {
      icon: <GoPeople />,
      title: "Our Values",
      description:
        "Integrity, collaboration, and a commitment to excellence are at the core of everything we do.",
    },
  ];

  return (
    <section className="bg-white">

      
      <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 py-12">

        
        <div className="w-full md:w-1/2">

          <p className="text-red-600 font-semibold text-lg mb-3">
            ━━ About Us
          </p>

          <div className="text-black font-bold text-4xl md:text-5xl mb-5">
            <h3>Building a Smarter</h3>
            <h3>
              Digital <span className="text-red-600">Future</span>
            </h3>
          </div>

          <div className="text-gray-700 text-base leading-relaxed mb-6">
            <p className="mb-4">
              At Vectra we are passionate about technology and innovation.
              We create modern, reliable and user-friendly solutions that
              help individuals, businesses and communities grow in the
              digital world.
            </p>

            <p>
              Our team of skilled developers, designers and innovators work
              together to turn ideas into impactful solutions.
            </p>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold">
            Learn More
            <MdOutlineArrowRightAlt size={22} />
          </button>

        </div>

        {/* About Image */}
        <div className="w-full md:w-1/2 relative h-75 md:h-100">

          <div className="absolute -top-3 -right-2.5 w-[95%] h-full bg-red-600 rounded-3xl -rotate-3"></div>

          <img
            src="/image1.png"
            alt="Vectra workspace"
            className="relative z-10 w-full h-full object-cover rounded-2xl"
          />

        </div>

      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 md:px-12 py-6">

        {aboutUs.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >

            <div className="bg-red-600 text-white rounded-full min-w-20 h-20 flex items-center justify-center text-4xl">
              {item.icon}
            </div>

            <div>
              <h4 className="text-black font-bold text-xl mb-2">
                {item.title}
              </h4>

              <p className="text-gray-700 text-sm ">
                {item.description}
              </p>
            </div>

          </div>
        ))}

      </div>

      
      <div className="bg-[#0A0A0A] text-white px-6 md:px-12 py-10 mt-5 flex flex-col md:flex-row items-center justify-center gap-8">

        <h4 className="text-2xl md:text-3xl font-bold text-center">
          Together, let's build a better digital
          <span className="text-red-600"> tomorrow.</span>
        </h4>

        <button className="border-2 border-white hover:bg-red-600 hover:border-red-600 px-7 py-3 rounded-full flex items-center gap-2 font-semibold whitespace-nowrap">
          Contact Us
          <MdOutlineArrowRightAlt size={22} />
        </button>

      </div>

    </section>
  );
}
