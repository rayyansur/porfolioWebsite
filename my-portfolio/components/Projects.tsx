import ChromaGrid from "@/components/ChromaGrid";
import BiasLensImg from "@/app/assets/BiasLens.png";
import ConnectAIImg from "@/app/assets/ConnectAI.png";
import SimilarifyImg from "@/app/assets/Similarify.png";
import GauntletImg from "@/app/assets/Gauntlet.png";
import TripPlannerImg from "@/app/assets/TripPlanner.png";
import StockPulseImg from "@/app/assets/StockPulse.png";
import DraftsmithImg from "@/app/assets/Draftsmith.png";
import GambitImg from "@/app/assets/Gambit.png";
import SpotdImg from "@/app/assets/Spotd.png";
import GTMoviestoreImg from "@/app/assets/GT-Moviestore.png";
import KLRaiImg from "@/app/assets/KLRai.png";
import ASLtoSpeechImg from "@/app/assets/ASL-to-Speech.png";
import AMPImg from "@/app/assets/AMP.png";
import RobloxPipelineImg from "@/app/assets/RobloxPipeline.png";
import DiscordImg from "@/app/assets/Discord.png";
import HCRImg from "@/app/assets/HCR.png";

const items = [
    {
        image: BiasLensImg.src,
        title: "BiasLens",
        handle: "News Ingestion website that does Political Bias and Sentiment Analysis.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #3DA1FF, #222)",
        url: "/projects/BiasLens",
        subtitle: ""
    },
    {
        image: ConnectAIImg.src,
        title: "ConnectAI",
        handle: "AI Career Advisor Chatbot that uses an LLM and RAG Pipeline to ingest jobs, user resumes and other documents for job recommendations.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #11DAFF, #222)",
        url: "https://munoz3connectai.vercel.app/",
        subtitle: ""
    },
    {
        image: SimilarifyImg.src,
        title: "Similarify",
        handle: "Spotify music-taste compatibility app where two people join a room and compare their listening.",
        borderColor: "#1DB954",
        gradient: "linear-gradient(180deg, #1DB954, #222)",
        url: "/projects/Similarify",
        subtitle: ""
    },
    {
        image: GauntletImg.src,
        title: "Gauntlet",
        handle: "A public arena where classic quant models and LLMs paper-trade the S&P 500 head to head.",
        borderColor: "#E63946",
        gradient: "linear-gradient(180deg, #E63946, #222)",
        url: "/projects/Gauntlet",
        subtitle: ""
    },
    {
        image: TripPlannerImg.src,
        title: "Trip Planner",
        handle: "Plan each day of a trip as a graph of timed activities instead of a flat list.",
        borderColor: "#3B6EA8",
        gradient: "linear-gradient(180deg, #3B6EA8, #222)",
        url: "/projects/TripPlanner",
        subtitle: ""
    },
    {
        image: StockPulseImg.src,
        title: "StockPulse",
        handle: "A stock and fund dashboard that ranks the market with a blended score pulled from multiple data sources.",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(180deg, #F59E0B, #222)",
        url: "/projects/StockPulse",
        subtitle: ""
    },
    {
        image: DraftsmithImg.src,
        title: "Draftsmith",
        handle: "A League of Legends draft recommender that ranks champion picks and builds five-stack team comps.",
        borderColor: "#C89B3C",
        gradient: "linear-gradient(180deg, #C89B3C, #222)",
        url: "/projects/Draftsmith",
        subtitle: ""
    },
    {
        image: GambitImg.src,
        title: "Gambit.ai",
        handle: "A chess practice app with an opening explorer and a chatbot that answers questions about your own chess.com games.",
        borderColor: "#4C6FA8",
        gradient: "linear-gradient(180deg, #4C6FA8, #222)",
        url: "/projects/Gambit",
        subtitle: ""
    },
    {
        image: SpotdImg.src,
        title: "Spotd",
        handle: "A social gym check-in app: post your daily workout photo to unlock your friends' posts and keep your streak alive.",
        borderColor: "#FF5A1F",
        gradient: "linear-gradient(180deg, #FF5A1F, #222)",
        url: "/projects/Spotd",
        subtitle: ""
    },
    {
        image: GTMoviestoreImg.src,
        title: "GT Movies Store",
        handle: "A web store application with user login, search, purchase, and review functionalities.",
        borderColor: "#D5C300",
        gradient: "linear-gradient(180deg, #D5C300, #222)",
        url: "/projects/GTMovie/",
        subtitle: ""
    },
    {
        image: KLRaiImg.src,
        title: "Knowledge Recogntion Location AI",
        handle: "A hackathon project to help visually impaired people find objects using voice commands and detect collisions using computer vision.",
        borderColor: "#0f4396",
        gradient: "linear-gradient(145deg, #0f4396, #222)",
        url: "/projects/KLRai",
        subtitle: ""
    },
    {
        image: ASLtoSpeechImg.src,
        title: "ASL-to-Speech",
        handle: "Pattern recognition model using computer vision for sign language to speech to aid in real time conversations.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6CF5F5, #222)",
        url: "/projects/ASLtoSpeech",
        subtitle: ""
    },
    {
        image: AMPImg.src,
        title: "Advanced Music Production",
        handle: "A data pipeline that turns the MAESTRO classical piano dataset into normalized note sequences for training a music model.",
        borderColor: "#C2389C",
        gradient: "linear-gradient(180deg, #C2389C, #222)",
        url: "/projects/AMP",
        subtitle: ""
    },
    {
        image: RobloxPipelineImg.src,
        title: "Roblox Game Pipeline",
        handle: "An agentic pipeline that turns a game idea written in plain words into a tested, playable Roblox game.",
        borderColor: "#38BDF8",
        gradient: "linear-gradient(180deg, #38BDF8, #222)",
        url: "/projects/RobloxPipeline",
        subtitle: ""
    },
    {
        image: DiscordImg.src,
        title: "BeesBot",
        handle: "Discord bot made to integrate text commands like coinflipping, tournaments and a daily LeetCode challenge.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #9C9CF5, #222)",
        url: "/projects/BeesBot",
        subtitle: ""
    },
    {
        image: HCRImg.src,
        title: "Handwritten Character Recognizer",
        handle: "Computer vision that utilizes google's mediapipe model and a CNN trained on the MNIST dataset to help draw and recognize digits from a webcam.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6C42F5, #222)",
        url: "/projects/HCR",
        subtitle: ""
    }
];



export default function Projects() {
    return (
        <div className="relative w-full">
            <ChromaGrid
                items={items}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
            />
        </div>
    );
}