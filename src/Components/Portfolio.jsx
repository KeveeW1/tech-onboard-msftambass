/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/spaceNeedle.jpg";
const imageAltText = "cloud emoji image";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ReNews",
    description:
      "ReNews takes a piece of news that the user feeds into it then, it runs an automatic check to verify that news and informs the user whether it's fake or real. ReNews also recommend users, based on their interests, stories, articles, and/or other information for their reference.",
    url: "https://devpost.com/software/renews-v4j7h9",
  },
  {
    title: "SafeScroll",
    description:
      "SafeScroll is a Google Chrome extension that blurs certain content (text and images), which can be customized using the extension interface. When you first open the extension, there is a text box where you can add in triggering words and delete them as needed. Once you enter the words, you can go ahead and SafeScroll! Also, our extension has a toggle blur where you can turn off the function but keep the word box if someone happens to use your laptop.",
    url: "https://devpost.com/software/safescroll",
  },
  {
    title: "Webtoon: Bits & Bytes",
    description:
      "My digital comic: Interested in learning about computers or cybersecurity? Join Bit and Byte in the learning journey as they venture into a PC to learning techniques used in the real digital security workspace!",
    url: "https://www.webtoons.com/en/canvas/bits-and-bytes/list?title_no=847572",
  },
  {
    title: "SmartFuel",
    description:
      "Our web platform allows the user to toggle between 2 routes that both include a pitstop for gas -- the shortest and the cheapest one in terms of gas cost, visualizing a clear route on our map interface. We use AI to provide a unique experience for drivers looking to find the most efficient and affordable routes. Our inhouse AI chatbot provides an experience akin to chatting with an old friend.",
    url: "https://devpost.com/software/fuel-maps",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
