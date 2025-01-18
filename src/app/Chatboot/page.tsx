import React from "react";
import { FiEdit2, FiSend, FiPlus } from "react-icons/fi";
import { FaUser } from 'react-icons/fa';
import {GiRobotHelmet} from 'react-icons/gi';
import { BiLinkExternal } from "react-icons/bi";
import Navbar from "@/Components/Navbar";
import Footer from "../SubComponents/Footer";

const MindCareResponse = () => {
  return (
    <div className="min-h-screen p-3 sm:p-5 flex flex-col items-center">
      <Navbar/>
      {/* Main Container */}
      <div className="bg-white w-full lg:w-[96%] rounded-md shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="bg-[#45a578] text-white flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:px-6 sm:py-4">
          {/* Mind Care Logo and Title */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <h1 className="text-base sm:text-lg font-bold flex items-center">
              Mind
              <FiPlus className="mx-1 text-orange-500" />
              Care
              <FiEdit2 className="ml-2 text-white" />
            </h1>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4 mt-3 sm:mt-0">
            <button className="px-2 py-1 text-sm sm:px-3 sm:py-1 bg-white text-green-800 rounded-md hover:bg-green-200">
              Start a New Conversation
            </button>
            <div className="rounded-full bg-green-600 h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center">
  <FaUser className="text-white" />
</div>

          </div>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col sm:flex-row">
          {/* Left Sidebar */}
          <aside className="bg-green-200 w-full sm:w-1/4 p-4 space-y-3 sm:space-y-5 text-center sm:text-left">
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-green-800">RECENT TOPICS</p>
              <p className="mt-1 sm:mt-2 text-green-900">Understanding Anxiety</p>
              <p className="mt-1 sm:mt-2 text-green-900">Stress Management Tips</p>
            </div>
            <div className="text-xs sm:text-sm">
              <p className="font-bold text-green-800">POPULAR RESOURCES</p>
              <p className="mt-1 sm:mt-2 text-green-900">Relaxation Techniques</p>
              <p className="mt-1 sm:mt-2 text-green-900">Mindfulness Exercises</p>
            </div>
          </aside>

          {/* Main Chat */}
          <main className="w-full sm:w-3/4 p-4 sm:p-6">
            {/* Question */}
            <div className="bg-yellow-100 px-3 py-2 sm:px-4 sm:py-2 rounded-md border mb-4 sm:mb-5">
              <p className="text-sm sm:text-base text-gray-800 font-semibold">
                What are some effective ways to reduce stress?
              </p>
            </div>

            {/* Answer Section */}
            <div className="bg-white p-4 sm:p-6 rounded-md shadow-md">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="rounded-full bg-gray-300 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                <GiRobotHelmet className='text-black' size={24}/>
              </div>
                <p className="font-semibold text-sm sm:text-base">Mind Care Assistant</p>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">
                Managing stress is essential for maintaining mental and physical
                well-being. Here are some effective strategies to help you
                reduce stress:
              </p>
              <ul className="mt-3 pl-5 list-decimal text-gray-700 text-xs sm:text-sm">
                <li>
                  <span className="font-medium">Practice mindfulness:</span> Engage in
                  mindfulness meditation or breathing exercises to focus on the present
                  moment and calm your mind.
                </li>
                <li>
                  <span className="font-medium">Stay physically active:</span> Regular
                  exercise, such as walking, yoga, or dancing, can significantly lower
                  stress levels.
                </li>
                <li>
                  <span className="font-medium">Connect with others:</span> Spend time
                  with friends, family, or support groups to share your feelings and reduce
                  feelings of isolation.
                </li>
                <li>
                  <span className="font-medium">Prioritize self-care:</span> Make time
                  for activities you enjoy, such as reading, hobbies, or listening to
                  music.
                </li>
                <li>
                  <span className="font-medium">Seek professional support:</span> If
                  stress becomes overwhelming, consult a mental health professional for
                  guidance and support.
                </li>
              </ul>
            </div>

            {/* Button Actions */}
            <div className="flex flex-col sm:flex-row justify-around mt-4 sm:mt-6 space-y-2 sm:space-y-0">
              <button className="text-white  bg-[#017e6e]  text-xs sm:text-sm px-3 py-2 rounded-md ">
                Suggest Relaxation Exercises
              </button>
              <button className="text-white  bg-[#017e6e]  text-xs sm:text-sm px-3 py-2 rounded-md ">
                Provide More Tips
              </button>
              <button className="text-white  bg-[#017e6e]  text-xs sm:text-sm px-3 py-2 rounded-md ">
                Share a Related Article
              </button>
            </div>

            {/* Input Bar */}
            <div className="mt-4 sm:mt-6 flex items-center bg-[#f1e1e1] rounded-md px-3 py-2 shadow-sm">
              <input
                type="text"
                placeholder="Ask for more suggestions..."
                className="flex-grow bg-transparent outline-none text-xs sm:text-sm text-gray-700 placeholder-gray-500"
              />
              <button className="ml-2  hover:text-green-900">
                <FiSend size={18}  />
              </button>
            </div>
          </main>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-green-50 p-3 sm:p-4 space-y-2 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-700 text-sm sm:text-base">
              Additional Resources and Tools
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-1 sm:mt-2">
              <div className="flex items-center space-x-1">
                <BiLinkExternal className="text-green-600" />
                <a href="#" className="text-green-800 underline text-xs sm:text-sm">
                  Stress Management Guide
                </a>
              </div>
              <div className="flex items-center space-x-1">
                <BiLinkExternal className="text-green-600" />
                <a href="#" className="text-green-800 underline text-xs sm:text-sm">
                  Hospital Locator
                </a>
              </div>
            </div>
          </div>
          <button className="text-white bg-[#eb744c] hover:bg-orange-600 text-xs sm:text-sm px-3 py-2 rounded-md ">
            Regenerate Response
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MindCareResponse;
