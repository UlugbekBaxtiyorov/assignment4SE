import React from "react";
import { Navbar } from "./components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { Counter } from "./components/Counter";
import { InstagramPost } from "./components/InstagramPost";

export const App: React.FC = () => {
  document.title = "CS360 Assignment 4";

  return (
    <div>
      <Navbar />
      <AboutUs />
      <Counter />
      <InstagramPost
        username={"jasursultanov007"}
        imageUrl={
          "https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
        }
        caption={
          "Lord of the Rings is my favorite film-series. One day I'll make my way to New Zealand to visit the Hobbiton set!"
        }
        likes={123}
        comments={[
          { username: "aziza.saparova", text: "Amazing photo!" },
          { username: "sultonova001", text: "I want to go there!" },
          { username: "aerialphoto", text: "So beautiful!" },
        ]}
      />
    </div>
  );
};
