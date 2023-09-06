import React from "react";
import SectionTitle from "../../components/SectionTitle";

const AboutTeams = () => {
  return (
    <>
      <SectionTitle title="Team Cycarts">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them.
      </SectionTitle>
      <div className="flex flex-wrap -m-2">
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
            <div className="h-full flex items-center  p-4 rounded-lg feature-card">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-medium">
                  Holden Caulfield
                </h2>
                <p className="text-dimWhite">UI Designer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutTeams;
