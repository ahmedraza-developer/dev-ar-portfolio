import useId from "react";

const page = () => {
  const referenceID = useId();
  return (
    <>
      <div className="pt-[150px] bg-[black] text-white pb-[50px]">
        <div className="container">
          <div className="w-[80%]">
            <h1 className="text-[40px] leading-normal font-extrabold pb-3">
              Embracing Creativity and Style with CSS3: Transforming Web Design
            </h1>
            <p className="text-base font-normal leading-normal">
              In the realm of web development, CSS3 stands as a beacon of
              creativity and style, empowering designers to push the boundaries
              of web aesthetics like never before. With its advanced features
              and capabilities, CSS3 has transformed the way websites are
              designed and experienced. In this article, we'll explore the
              wonders of CSS3, uncovering its significance, key features, and
              the impact it has on modern web design.
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
                  Understanding CSS3:
                </h2>
                <p>
                  Cascading Style Sheets (CSS) is a fundamental technology used
                  to control the presentation and layout of web pages. CSS3, the
                  latest iteration of the CSS specification, introduces a wealth
                  of new features, enhancements, and improvements over its
                  predecessors. From advanced selectors to powerful animations,
                  CSS3 empowers designers to create visually stunning and
                  dynamic web experiences.
                </p>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Key Features of CSS3:
                </h2>
                <ol className="list-decimal pl-3">
                  <li className="text-base leading-normal pb-3">
                    <strong>Advanced Selectors: </strong>
                    CSS3 introduces a wide range of advanced selectors, allowing
                    designers to target specific elements with greater precision
                    and control. From attribute selectors to pseudo-classes and
                    pseudo-elements, CSS3 provides a powerful toolkit for
                    styling and manipulating elements on the page.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Responsive Design: </strong>
                    With the proliferation of mobile devices and varying screen
                    sizes, responsive design has become a necessity in modern
                    web development. CSS3 offers flexible layout options, media
                    queries, and fluid grids, enabling designers to create
                    websites that adapt seamlessly to different devices and
                    viewport sizes.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Typography Enhancements: </strong>
                    CSS3 introduces several typography enhancements, including
                    custom fonts, text shadows, and text effects. These features
                    allow designers to elevate the visual appeal of text content
                    and create engaging typographic compositions that capture
                    the user's attention.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Transitions and Animations: </strong>
                    CSS3 provides native support for transitions and animations,
                    allowing designers to add dynamic movement and interactivity
                    to web elements without relying on JavaScript or Flash. With
                    CSS3 animations, designers can create smooth transitions,
                    keyframe animations, and interactive effects that enhance
                    user engagement and delight.
                  </li>
                  <li className="text-base leading-normal pb-3">
                    <strong>Flexbox and Grid Layouts: </strong>
                    CSS3 introduces modern layout techniques such as Flexbox and
                    Grid, offering more robust and efficient ways to structure
                    and align content on the page. These layout systems provide
                    greater flexibility and control over the arrangement of
                    elements, simplifying complex layouts and improving code
                    maintainability.
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Impact of CSS3 on Web Design:
                </h2>
                <p>
                  CSS3 has had a profound impact on modern web design,
                  empowering designers to create visually stunning and
                  interactive experiences that captivate users. From responsive
                  layouts to intricate animations and typographic flourishes,
                  CSS3 allows designers to unleash their creativity and bring
                  their visions to life on the web.
                </p>
              </div>
              <div>
                <h2 className="text-3xl leading-normal pb-3 font-semibold">
                  Conclusion:
                </h2>
                <p>
                  In conclusion, CSS3 represents a paradigm shift in web design,
                  offering a wealth of new features and capabilities that
                  redefine the possibilities of digital creativity. Whether it's
                  crafting responsive layouts, adding subtle animations, or
                  experimenting with typography, CSS3 provides designers with
                  the tools they need to create memorable and impactful web
                  experiences. As technology continues to evolve, CSS3 remains
                  at the forefront of innovation, shaping the future of web
                  design one style rule at a time.
                </p>
              </div>
            </div>
            <div className="basis-[30%] sticky top-0 ">
              <div className="bg-black p-5 rounded-xl shadow-2xl">
                <form method="POST">
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
