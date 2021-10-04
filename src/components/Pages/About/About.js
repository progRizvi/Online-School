import React from "react";
import UseHook from "../../hooks/UseCourses";
import Team from "../../Team/Team";
import { teamData } from "../../teamData";
import "./About.css";

const About = () => {
  const [teams] = UseHook(teamData);
  return (
    <>
      <div className="outer-team-section">
        <h2 className="text-center text-light pt-5">Our Team</h2>
        <div className="team-containers">
          {teams.map((person) => (
            <Team key={person.id} person={person} />
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
