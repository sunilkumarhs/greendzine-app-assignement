import React, { useRef, useState } from "react";
import { group46img, moptro } from "../images";
import { HiHome } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Employees } from "../constants/users";

const HomePage = () => {
  const searchRef = useRef(null);
  const [employee, setEmployee] = useState(false);
  const [empData, setEmpData] = useState(Employees);

  const handleHome = () => {
    setEmployee(false);
  };
  const handleEmployee = () => {
    setEmployee(true);
  };

  const handleSearch = () => {
    if (searchRef.current.value) {
      setEmpData(
        Employees.filter(
          (emp) =>
            emp.name.toLowerCase() === searchRef.current.value.toLowerCase()
        )
      );
    } else {
      setEmpData([...Employees]);
    }
  };

  return (
    <div className="lg:w-full w-screen lg:h-full h-screen">
      <div className="flex justify-end py-2 px-2">
        <img src={group46img} alt="logo" />
      </div>
      <div className="flex justify-center">
        <div className="lg:w-3/5 w-full px-4 ">
          <div className="flex justify-center py-5">
            <div>
              <img src={moptro} alt="group" />
            </div>
            <div className="relative">
              <button className="p-4 count rounded-full absolute -mt-5 -ml-4"></button>
              <p className="text-[#36A546] text-sm absolute -mt-3 -ml-1">
                {Employees.length}
              </p>
            </div>
          </div>
          <div className="py-2"></div>
          <div
            className={`${
              employee ? "hidden" : "flex"
            } justify-center dashCard w-full`}
          >
            <div className="w-full">
              <button className="w-full dashTitle  text-[#FFFFFFB3] rounded-full">
                <p className="px-2 py-3 -mt-1 opacity-[0.86]">
                  Employee Productivity Dashboard
                </p>
              </button>
              <div className="py-6"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Monday</p>
                <p className="text-[#36A546]">4%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[2%] py-2 proBar"></button>
              </div>
              <div className="py-3"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Tuesday</p>
                <p className="text-[#36A546]">92%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[46%] py-2 proBar"></button>
              </div>
              <div className="py-3"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Wednesday</p>
                <p className="text-[#36A546]">122%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[61%] py-2 proBar"></button>
              </div>
              <div className="py-3"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Thursday</p>
                <p className="text-[#36A546]">93%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[47%] py-2 proBar"></button>
              </div>
              <div className="py-3"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Friday</p>
                <p className="text-[#36A546]">89%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[44%] py-2 proBar"></button>
              </div>
              <div className="py-3"></div>
              <div className="flex justify-around py-">
                <p className="text-[#FFFFFFB3]">Productivity on Saturday</p>
                <p className="text-[#36A546]">98%</p>
              </div>
              <div className="px-6">
                <button className="rounded-full w-[49%] py-2 proBar"></button>
              </div>
              <div className="py-8"></div>
            </div>
          </div>
          <div
            className={`${employee ? "flex" : "hidden"} justify-center w-full`}
          >
            <div className="w-full px-4">
              <div className="flex justify-center searchBar rounded-full lg:py-2 py-4 w-full">
                <input
                  type="text"
                  ref={searchRef}
                  placeholder="Search with name"
                  className="bg-transparent lg:w-3/4 w-4/5 lg:text-lg text-2xl text-white px-4 text-center"
                />
                <IoMdSearch
                  className="text-white text-3xl mx-2 cursor-pointer"
                  onClick={handleSearch}
                />
              </div>
              <div className="pt-7 pb-16">
                {empData?.map((emp, index) => (
                  <div
                    className={`py-3 ${
                      (index + 1) % 2 === 0
                        ? "lg:pl-10 pl-5 lg:-mr-0 -mr-3"
                        : "lg:pr-10 pr-5 lg:-ml-0 -ml-3"
                    }`}
                    key={index}
                  >
                    <div className="searchBar rounded-xl lg:p-4 p-2 text-white text-xl">
                      <p className="border-[1px] border-black rounded-full float-right px-2">
                        {index + 1}
                      </p>
                      <div className="lg:py-2 py-3 px-2 flex">
                        <p>EMP ID</p> <p className="px-4">:</p>
                        <p className="font-semibold">{emp.empId}</p>
                      </div>
                      <div className="lg:py-2 py-3 px-2 flex">
                        <p>Name</p> <p className="px-6">:</p>{" "}
                        <p className="font-semibold">{emp.name}</p>
                      </div>
                      <div className="lg:py-2 py-3 px-2 flex">
                        <p>D O B</p> <p className="px-6">:</p>{" "}
                        <p className="font-semibold text-orange-500">
                          {emp.dob}
                        </p>
                      </div>
                      <div className="lg:py-2 py-3 px-2 flex">
                        <p>Role</p> <p className="px-8">:</p>{" "}
                        <p className="font-semibold text-[#36A546]">
                          {emp.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bottom-0 fixed rounded-full">
        <div className="pt-4 bg-black">
          <div className="navigatebar flex rounded-full">
            <div
              className={`${
                employee ? "" : "navButton"
              } w-1/2 flex justify-center rounded-full py-3`}
            >
              <HiHome
                className="text-[#36A546] text-3xl cursor-pointer"
                onClick={handleHome}
              />
            </div>
            <div
              className={`${
                employee ? "navButton" : ""
              } w-1/2 flex justify-center rounded-full py-3`}
            >
              <MdManageAccounts
                className="text-[#36A546] text-3xl cursor-pointer"
                onClick={handleEmployee}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
