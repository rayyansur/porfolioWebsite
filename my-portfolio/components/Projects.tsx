import ChromaGrid from "@/components/ChromaGrid";

const items = [
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/GT-Moviestore.png?raw=true",
        title: "GT Movies Store",
        handle: "A web store application with user login, search, purchase, and review functionalities.",
        borderColor: "#D5C300",
        gradient: "linear-gradient(180deg, #D5C300, #222)",
        url: "/projects/GTMovie/",
        subtitle: ""
    },
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/KLRai.png?raw=true",
        title: "Knowledge Recogntion Location AI",
        handle: "A hackathon project to help visually impaired people find objects using voice commands and detect collisions using computer vision.",
        borderColor: "#0f4396",
        gradient: "linear-gradient(145deg, #0f4396, #222)",
        url: "/projects/KLRai",
        subtitle: ""
    },
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/ASL-to-Speech.png?raw=true",
        title: "ASL-to-Speech",
        handle: "Pattern recognition model using computer vision for sign language to speech to aid in real time conversations.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6CF5F5, #222)",
        url: "https://github.com/rayyansur/ASL-to-Speech",
        subtitle: ""
    },
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/Discord.png?raw=true",
        title: "BeesBot",
        handle: "Discord bot made to integrate text commands like coinflipping and card games.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #9C9CF5, #222)",
        url: "https://github.com/rayyansur/BeesBot",
        subtitle: ""
    },
    {
        image: "https://github.com/rayyansur/porfolioWebsite/blob/master/my-portfolio/app/assets/HCR.png?raw=true",
        title: "Handwritten Character Recognizer",
        handle: "Computer vision that utilizes google's mediapipe model and a model trained on the EMNIST dataset to help draw and recognize characters from a webcam.",
        borderColor: "#6C42F5",
        gradient: "linear-gradient(180deg, #6C42F5, #222)",
        url: "https://github.com/rayyansur/Handwritten-Digit-Recognizer",
        subtitle: ""
    }
];



export default function Projects() {
    return (
        <div style={{height: 'fit-content', width: 'fit-screen', position: 'relative', }}>
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