import { Typewriter } from "./components/animation/typewriter";

function App() {
   return (
      <div className="w-full h-screen flex items-center">
         <p className="whitespace-pre-wrap">
            <span>{"Let write your "}</span>
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
      </div>
   );
}

export default App;
