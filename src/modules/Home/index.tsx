import { Typewriter } from "@/components/animation/typewriter"

const Home = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center">
            <p className="whitespace-pre-wrap text-4xl">
                <span>{"Let's write your ✏️ "}</span>
                <Typewriter
                    text={[
                        "Daily",
                        "Tasks",
                        "Plans",
                    ]}
                    speed={120}
                    className="text-yellow-500 font-bold"
                    waitTime={1200}
                    deleteSpeed={100}
                    cursorChar={"_"}
                />
            </p>
            <span className="text-gray-400">This application is designed to simplify the daily reporting of tasks completed</span>
            <div className="fixed bottom-0 py-4">
                <span className="text-gray-400 underline">&copy; Created by <span className="italic">Putra Satria</span></span>
            </div>
        </div>
    )
}
export default Home