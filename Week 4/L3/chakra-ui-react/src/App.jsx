import "./App.css";
import { Box, Heading } from "@chakra-ui/react";
import { Navbar } from "./Components/Navbar";
import { InputBox } from "./Components/InputBox";
import { JobCover } from "./Components/JobCover";
import { Footer } from "./Components/Footer";

function App() {
  const jobData = [
    {
      id: 1,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
      companyName: "Talewind",
      jobTitle: "Lead Producer",
      salary: "£40k - £50k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 2,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
      companyName: "Talewind",
      jobTitle: "Lead Game Developer",
      salary: "£40k - £50k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 3,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd74e52d1-6529-4ab1-98b2-a27b1b9947ed&w=1920&q=75",
      companyName: "SlimWik",
      jobTitle: "Full-Stack JavaScript Developer",
      salary: "£50k - £68k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 4,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fd4f13259-d651-4b8a-8115-48bdfabd24aa&w=1920&q=75",
      companyName: "The Wanderlust Group",
      jobTitle: "Director of Marketing",
      salary: "$150k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 5,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
      companyName: "JumpSearch",
      jobTitle: "Senior Software Engineer (.NET)",
      salary: "$70k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "",
      jobTime: "Full-Time",
    },
    {
      id: 6,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
      companyName: "JumpSearch",
      jobTitle: "Account Executive",
      salary: "$65k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "",
      pinIcon: "",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 7,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=1920&q=75",
      companyName: "Planned Parenthood of Southern New England, Inc.",
      jobTitle: "Development Database Assistant",
      salary: "$60k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 8,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75",
      companyName: "Administrate",
      jobTitle: "Content Specialist",
      salary: "$36k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 9,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75",
      companyName: "Administrate",
      jobTitle: "Customer Acquisition Manager",
      salary: "£50k - £68k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 10,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fa605146c-3594-4a30-a842-93bde16bf06c&w=1920&q=75",
      companyName: "bit.io",
      jobTitle: "Software Engineer - Backend",
      salary: "£40k - £50k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "",
      jobTime: "Full-Time",
    },
    {
      id: 11,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F9fcb1732-3ac2-478d-881b-60cc3a1dc093&w=1920&q=75",
      companyName: "Talewind",
      jobTitle: "Lead Producer",
      salary: "£40k - £50k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "",
      jobTime: "Full-Time",
    },
    {
      id: 12,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=1920&q=75",
      companyName: "Talewind",
      jobTitle: "Lead Game Developer",
      salary: "£40k - £50k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 13,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fc4021382-fa82-49b1-99a4-ce3158be1412&w=1920&q=75",
      companyName: "SlimWik",
      jobTitle: "Full-Stack JavaScript Developer",
      salary: "£50k - £68k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 14,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fc4021382-fa82-49b1-99a4-ce3158be1412&w=1920&q=75",
      companyName: "The Wanderlust Group",
      jobTitle: "Director of Marketing",
      salary: "$150k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 15,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
      companyName: "JumpSearch",
      jobTitle: "Senior Software Engineer (.NET)",
      salary: "$70k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "",
      jobTime: "Full-Time",
    },
    {
      id: 16,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F0ecc5576-0a1c-4787-880b-6e23c379550e&w=1920&q=75",
      companyName: "JumpSearch",
      jobTitle: "Account Executive",
      salary: "$65k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 17,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F08360c55-4fb4-48e0-8392-eeda80628196&w=1920&q=75",
      companyName: "Planned Parenthood of Southern New England, Inc.",
      jobTitle: "Development Database Assistant",
      salary: "$60k",
      hotIcon: "",
      earthIcon: "IoEarthSharp",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 18,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Ff23f0f0a-1af4-4001-a139-043571ef0e61&w=1920&q=75",
      companyName: "Administrate",
      jobTitle: "Content Specialist",
      salary: "$36k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "",
      bookmarkIcon: "",
      jobTime: "Full-Time",
    },
    {
      id: 19,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F4f63e19b-106b-4094-8888-71e1d275320f&w=1920&q=75",
      companyName: "Administrate",
      jobTitle: "Customer Acquisition Manager",
      salary: "£50k - £68k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "",
      pinIcon: "AiFillPushpin",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
    {
      id: 20,
      companyLogo:
        "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2Fa605146c-3594-4a30-a842-93bde16bf06c&w=1920&q=75",
      companyName: "bit.io",
      jobTitle: "Software Engineer - Backend",
      salary: "£40k - £50k",
      hotIcon: "AiTwotoneFire",
      earthIcon: "IoEarthSharp",
      pinIcon: "",
      bookmarkIcon: "BsFillBookmarkFill",
      jobTime: "Full-Time",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <InputBox />
      <Box bg="#edf2f7" pb="80px">
        <Box pt="55px" w="640px" m="auto">
          <Heading>
            <span style={{ color: "#6b46c1" }}> Recent </span> Jobs
          </Heading>
        </Box>
        <Box w="665px" m="auto">
          {jobData.map((data) => (
            <JobCover key={data.id} {...data} />
          ))}
        </Box>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
