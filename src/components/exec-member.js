import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaLinkedin } from "react-icons/fa";

export default function execMember({
  fullName,
  role,
  id,
  socialMediaImage,
  socialMediaLink,
}) {
  return (
    <>
      <div className="p-4 flex flex-wrap items-center">
        <a href={socialMediaLink}>
          {socialMediaImage ? (
            <GatsbyImage
              image={getImage(socialMediaImage.gatsbyImageData)}
              alt=""
              className="filter grayscale w-24 mr-4 rounded-full flex-initial border border-gray-300"
            />
          ) : (
            <img
              src="https://via.placeholder.com/100"
              alt={`placeholder for portrait of ${fullName}`}
              className="w-24 mr-4 rounded-full flex-initial border border-gray-300"
            />
          )}
        </a>
        <div className="flex-1">
          <h3 className="text-xl font-medium">{fullName}</h3>
          <h4 className="text-sm ">{role}</h4>
          <p className={`${!socialMediaLink && `hidden`}`}>
            <a href={socialMediaLink}>
              <FaLinkedin className="inline text-blue-700 text-sm" />
              <span className="ml-2 text-xs">Connect on LinkedIn</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
