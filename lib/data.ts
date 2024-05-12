import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import food from "@/public/food.jpg"
import Ar from "@/public/Ar.jpg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Internship",
    location: "Iris,Lahore, Pakistan",
    description:
      "I worked as a full stack and PHP developer  at Iris, developed different projects using PHP, React, Node.js, and MongoDB.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2023 - Aug 2021",
  },
 
] as const;

export const projectsData = [
  {
    title: "Final Year Project",
    description:
      "Transform early education with AR: engaging 2 to 5-year-olds through interactive 3D models. Foster curiosity and holistic development with immersive visual learning experiences.",
    tags: ["React", "Firebase", "MongoDB", "Tailwind"],
    imageUrl: Ar,
  },
  {
    title: "Food Affairs",
    description:
      "Experience seamless event management with our website. Effortlessly create events and facilitate"+
      " participant registration through intuitive interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: food,
  },

 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "React",
  "React Native",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Python",
  "C",
  "C++",
  "Unity",
  "Github",
] as const;
