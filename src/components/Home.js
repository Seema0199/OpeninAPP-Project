import React, { useEffect, useRef, useState } from "react";
import dash from "../assets/dashboard_icon.svg";
import trs from "../assets/transaction_icon.svg";
import sec from "../assets/schedule_icon.svg";
import user from "../assets/user_icon.svg";
import set from "../assets/setting_icon.svg";
import LeftSide from "./LeftSide";
import ser from "../assets/Search icon.svg";
import bell from "../assets/Vector.svg";
import firstBox from "../assets/Vector1.svg";
import secondBox from "../assets/total_transactions_icon.svg";
import thirdBox from "../assets/Vector (1).svg";
import fourthBox from "../assets/Vector (2).svg";
import Box from "./Box";
import axios from "axios";
import { toast } from "react-hot-toast";
import ChartGraph from "./ChartGraph";
function Home({ email, name, picture }) {
  const [CourseData, setCourseData] = useState([]);
  const [ham,setHam] = useState(false);
  const ref = useRef(null);
  const data = [
    {
      img: dash,
      name: "Dashboard",
    },
    {
      img: trs,
      name: "Transactions",
    },
    {
      img: sec,
      name: "Schedules",
    },
    {
      img: user,
      name: "Users",
    },
    {
      img: set,
      name: "Settings",
    },
  ];

  const databox = [
    {
      img: firstBox,
      name: "Total Revenues",
      amount: "$2,129,430",
      color: "bg-[#DDEFE0]",
    },
    {
      img: secondBox,
      name: "Total Revenues",
      amount: "1,520",
      color: "bg-[#F4ECDD]",
    },
    {
      img: thirdBox,
      name: "Total Likes",
      amount: "9,721",
      color: "bg-[#EFDADA]",
    },
    {
      img: fourthBox,
      name: "Total Users",
      amount: "892",
      color: "bg-[#DEE0EF]",
    },
  ];
  const fetchData = async () => {
    const toatsId = toast.loading("loading...");
    try {
      const response = await axios.post(
        "https://studynotion-backend-elk1.onrender.com/api/v1/course/insCourse",
        {},
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdwNTAyNTUwQGdtYWlsLmNvbSIsImlkIjoiNjQ4YjU1MmIwMTJlYjhhZDlkOWQ5MTJjIiwiYWNjb3VudFR5cGUiOiJJbnN0cnVjdG9yZSIsImlhdCI6MTY5MjU0NjM2OSwiZXhwIjoxNjk1MTM4MzY5fQ.RRmGqgb49mcPPdXu78edf-NXs5JFRm658A5WXxt5KWQ",
          },
        }
      );
      console.log("data", response);
      console.log(response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      setCourseData(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
    toast.dismiss(toatsId);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#F5F5F5] ">
      <div className="max-w-[1440px] w-11/12 mx-auto relative flex gap-4 ">
          <div className="bg-black fixed left-0 md:left-auto h-screen md:h-[90vh] md:rounded-2xl flex-col md:flex p-8 md:mt-[5vh] justify-between " ref={ref} >
            <div>
              <div className="text-white font-bold text-4xl mb-4">Board.</div>
              <div className="flex flex-col gap-y-5 mt-5">
                {data.map((d) => (
                  <LeftSide
                    className={
                      d.name === "Dashboard" ? "font-bold" : "font-[400]"
                    }
                    data={d}
                  />
                ))}
              </div>
            </div>
            <div className=" flex flex-col mt-5 md:mt-0 text-white gap-2 cursor-pointer">
              <div>Help</div>
              <div>Contact Us</div>
            </div>
          </div> 
       <div className="md:ml-[16rem] w-full justify-center flex ">
        <div className=" my-2 rounded-2xl flex flex-col gap-[40px] w-full">
          <nav className="flex justify-between">
            <div className="font-bold text-2xl">Dashboard</div>
            <div className="self-end hidden items-center md:flex gap-7 relative">
              <lable className="relative">
                <input
                  className="py-1.5 rounded-lg px-3"
                  type="text"
                  placeholder="Search..."
                />
                <img
                  src={ser}
                  className="absolute top-[10px] right-2 focus:outline-none  "
                />
              </lable>
              <img src={bell} />
              <img src={picture} className="w-[50px] h-[50px] rounded-full" />
            </div>
            <div className="md:hidden cursor-pointer" onClick={()=> {
                ref.current.classList.toggle("hidden")
                setHam(!ham)
              
            }}>{ham ? <i class="fa-solid fa-bars"></i> : <i class="fa-solid fa-xmark" style={{color:"red"}}></i>}</div>
          </nav>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 justify-between items-center">
            {databox.map((e, index) => (
              <Box data={e} alt="" key={index} />
            ))}
          </div>

          <ChartGraph data={CourseData} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
