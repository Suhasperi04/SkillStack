import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if(searchQuery.trim() !== ""){
      navigate(`/course/search?query=${searchQuery}`)
    }
    setSearchQuery("");
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-28 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
      <div className="relative max-w-3xl mx-auto z-10">
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-700 dark:text-blue-300 font-semibold text-xs tracking-widest shadow-sm">Empower Your Learning Journey</span>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Unlock Your Potential with Top Courses
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-10 text-lg md:text-xl">
          Master new skills, advance your career, and fuel your passion with SkillStack.
        </p>
        <form onSubmit={searchHandler} className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6 border border-blue-100 dark:border-gray-700">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Courses"
            className="flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent"
          />
          <Button type="submit" className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 font-semibold text-base transition-all duration-200">Search</Button>
        </form>
        <Button onClick={()=> navigate(`/course/search?query`)} className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold px-8 py-3 shadow-md transition-all duration-200">Explore Courses</Button>
      </div>
    </div>
  );
};

export default HeroSection;
