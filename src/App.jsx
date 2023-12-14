import Main from "./components/Main";

function App() {
    return (
        <div className="container relative bg-light-pink w-screen h-full mx-auto">
            <div className="container min-h-screen mx-auto relative flex flex-col justify-center items-center bg-light-pink py-10">
                <img
                    className="absolute z-10 inset-x-0 top-0 w-full object-cover max-h-60 md:h-60 sm:block md:hidden"
                    src="../images/background-pattern-mobile.svg"
                />
                <img
                    className="absolute z-10 inset-x-0 top-0 w-full object-cover max-h-60 md:h-60 sm: hidden md:block"
                    src="../images/background-pattern-desktop.svg"
                />
                <div className="relative z-20 bg-white max-w-xs mx-auto rounded-xl p-4 md:max-w-xl">
                    <Main />
                </div>
            </div>

            <div className="mt-4 mb-4 absolute inset-x-0 bottom-0 mx-auto text-center text-sm">
                Challenge by <nbsp />
                <a
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Troy Reuther</a>.
            </div>
        </div>
    );
}

export default App;
