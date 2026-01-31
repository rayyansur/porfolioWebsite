import PixelSnow from '@/components/PixelSnow';
import ReactPlayer from "react-player";

export default function Page() {
    return (
        <main className="flex flex-col items-center min-h-screen text-white width-screen">
            <div className="absolute z-0 flex flex-col w-full max-w-4xl mx-auto font-100 items-center">
                <h1 className="text-5xl font-bold mb-4 text-center"><br/>GT Movies Store</h1>
                <b className={"opacity-80 font-bold text-center"}>
                    A web store application with user login, search, purchase, and review functionalities</b>
                <div className={"grid grid-cols-2 gap-8"}>
                    <div className={"item"}>
                        <h2 className="text-2xl font-bold mb-4"><br/>Video Demo</h2>
                        <ReactPlayer src={"https://youtu.be/U-xZgMPxK5s"} controls={true} height={"240px"} width={"400px"}></ReactPlayer>
                    </div>
                    <div className={"item text-center"}>
                        <b className={"opacity-80 font-bold"}>
                            <br/>
                            In line with the user stories presented for this project, every user can find movies present
                            in
                            the
                            database under the movies page, they will be able to search with movie title as well. Each
                            movie
                            has
                            a separate page with information on the movie.<br/>
                            The user has the capacity to login, signup, logout. Each user can leave informative reviews
                            under
                            the page of any movie they like, and they are also able to edit and delete their reviews,
                            along
                            with
                            being able
                            to report inappropriate reviews from other users.<br/>
                            Once logged in users are able to add movies in to their shopping carts. The cart page has
                            the
                            ability
                            to purchase cart, and drop all items from cart. Each user will be able to look at their
                            whole
                            order
                            history to find all previous purchases.<br/>
                            Admins will have access to all user data on the website, with the ability to hide reported
                            reviews,
                            with additional ability to edit movies, users and orders.<br/>
                        </b>
                    </div>


                </div>
                <b className={"opacity-100"}>
                    <br/>
                    This webstore application was created for a University Project<br/>
                    I worked on this project to learn the basics of the Django framework and used textbook resources
                    as a guide. This project utilized a Scrum (Agile) software development methodology. Most obstacles faced
                    during development were from my lack of experience with Django and were dealt with by reading resources or
                    Django documentation online.
                    </b>
                <a href={"https://rayyansur.pythonanywhere.com/"} className={"text-blue-600 underline text-2xl"}> Website Link </a>
                <a href={"https://github.com/rayyansur/CS2340-Project-1"} className={"text-blue-600 underline text-2xl"}> Github Repo</a>

            </div>
            <div style={{width: '100%', height: '100%', position: 'absolute'}}
                 className={"inset-0 -z-10 bg-black"}>
                <PixelSnow
                    color="#ffffff"
                    flakeSize={0.01}
                    minFlakeSize={1.25}
                    pixelResolution={200}
                    speed={1.25}
                    density={0.1}
                    direction={125}
                    brightness={1}
                    depthFade={8}
                    farPlane={20}
                    gamma={0.4545}
                    variant="snowflake"
                ></PixelSnow>
            </div>
        </main>
    );
}