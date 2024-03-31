import { useId } from "react";

const page = () => {
  const referenceID = useId();
  return (
    <>
      <div className="pt-[150px] bg-[black] text-white pb-[50px]">
        <div className="container">
          <div className="w-[80%]">
            <h1 className="text-[40px] leading-normal font-extrabold pb-3">
            Unveiling the Power of HTML5: A Game Changer in Web Development
              It's Essential
            </h1>
            <p className="text-base font-normal leading-normal">
              In the realm of web development, HTML5 stands tall as a
              cornerstone technology, revolutionizing the way we create and
              experience websites. Its versatility, enhanced features, and
              robust capabilities have propelled it to the forefront of modern
              web design. In this article, we'll delve into the world of HTML5,
              exploring its significance, advantages, and why it's essential for
              building cutting-edge websites.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[80px]">
        <div className="container">
          <div className="flex items-start justify-between gap-x-5">
            <div className="basis-[65%]">
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Understanding HTML5:
                </h2>
                <p>
                  HTML5, the latest iteration of Hypertext Markup Language,
                  serves as the foundation of web content, providing structure
                  and semantics to web documents. Unlike its predecessors, HTML5
                  introduces a host of new elements, attributes, and
                  functionalities, catering to the evolving needs of web
                  developers and users alike.
                </p>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Advantages of HTML5:
                </h2>
                <ol className="list-decimal pl-3">
                  <li className="text-base leading-normal pb-3">
                    <strong>Rich Multimedia Support:</strong> HTML5 introduces
                    native support for audio and video elements, eliminating the
                    need for third-party plugins like Flash. This not only
                    enhances user experience but also improves website
                    performance and accessibility.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Mobile Compatibility: </strong>HTML5 incorporates
                    responsive design features, enabling seamless adaptation to
                    various screen sizes and devices. This mobile-friendliness
                    is crucial in today's mobile-centric world, enhancing user
                    engagement and satisfaction.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Improved Forms:</strong> The introduction of new
                    input types, attributes, and form validation features
                    streamlines the development of interactive web forms,
                    enhancing usability and reducing the need for custom
                    JavaScript solutions.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Offline Application Cache:</strong> HTML5 introduces
                    the Application Cache (AppCache) feature, allowing web
                    applications to work offline or with limited connectivity.
                    This capability is invaluable for users in areas with
                    unreliable internet acces
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Why HTML5 Matters:
                </h2>
                <p>
                  HTML5 isn't just another iteration of a markup language; it's
                  a game-changer in web development. Its advanced features and
                  capabilities empower developers to create immersive, engaging,
                  and accessible web experiences that cater to the diverse needs
                  of users. Whether it's building multimedia-rich websites,
                  optimizing for mobile devices, or improving SEO, HTML5 serves
                  as a versatile toolset for tackling the challenges of modern
                  web development.
                </p>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Conclusion:
                </h2>
                <p>
                  In conclusion, HTML5 is more than just a markup language; it's
                  a catalyst for innovation in web development. Its advantages,
                  from enhanced multimedia support to improved semantic markup
                  and mobile compatibility, make it indispensable for creating
                  modern websites. As technology continues to evolve, HTML5
                  remains at the forefront, driving the next generation of web
                  experiences forward.
                </p>
              </div>
            </div>
            <div className="basis-[30%] relative">
              <div className="bg-black p-5 rounded-xl shadow-2xl">
                <form method="POST" className="sticky top-0">
                  <div className="sm:flex items-center gap-x-5">
                    <input
                      type="text"
                      name="name"
                      id={referenceID}
                      required
                      placeholder="Name"
                      className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5"
                    />
                    <input
                      type="email"
                      name="email"
                      id={referenceID}
                      required
                      placeholder="Email"
                      className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id={referenceID}
                    required
                    placeholder="Phone"
                    minlength="10" 
                    maxlength="13" 
                    pattern="[0-9]*"
                    className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5"
                  />
                  <textarea
                    name="messages"
                    id={referenceID}
                    required
                    placeholder="Message..."
                    className="w-full resize-none bg-transparent border-2 border-[#d3d3d3] rounded-md pt-4 pb-8 placeholder:text-white ps-4 mb-5"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-transparent transition-all ease-in-out duration-500 border-2 border-secondary px-4 py-2 rounded-md text-secondary hover:text-white hover:bg-secondary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
