import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";
import { SlArrowLeft } from "react-icons/sl";

export const categories = [
	{ name: "New", icon: <AiFillHome />, type: "home" },
	{ name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
	{ name: "Music", icon: <CgMusicNote />, type: "category" },
	{ name: "Films", icon: <FiFilm />, type: "category" },
	{ name: "Live", icon: <MdLiveTv />, type: "category" },
	{ name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
	{ name: "News", icon: <ImNewspaper />, type: "category" },
	{ name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
	{ name: "Learning", icon: <RiLightbulbLine />, type: "category" },
	{
		name: "Fashion & beauty",
		icon: <GiEclipse />,
		type: "category",
		divider: true,
	},
	{ name: "Settings", icon: <FiSettings />, type: "menu" },
	{ name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
	{ name: "Help", icon: <FiHelpCircle />, type: "menu" },
	{ name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];

export const popular = [
	{ name: "New", url: "latest" },
	{ name: "Music", url: "music" },
	{ name: "Satsang", url: "satsang" },
	{ name: "Mixes", url: "latestMixes" },
	{ name: "Kapil Sharma", url: "kapilsharma2023" },
	{ name: "Live", url: "live" },
	{ name: "Comedy Clubs", url: "comedyclubs" },
	{ name: "Akshay Saini", url: "akshaysaini" },
	{ name: "React", url: "reactjs" },
	{ name: "Namaste Javascript", url: "namastejs" },
	{ name: "Bollywood Music", url: "latestBollywoodmusic" },
];

export const GOOGLE_API_KEY = "AIzaSyAf8idjhj4JHkCZnbsTbaBau-OPubch00I";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=48&key="+ GOOGLE_API_KEY;