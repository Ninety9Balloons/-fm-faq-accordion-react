import Accordion from "./Accordion";

function Main() {
    return (
        <main className="bg-white rounded-xl p-6">
            <div className="flex">
                <img
                    className="w-6 mr-10"
                    src="../../public/images/icon-star.svg"
                />
                <h1 className="text-dark-purple font-bold text-3xl">FAQs</h1>
            </div>
            <Accordion
                accNumber="tab-multi-one"
                header="What is Frontend Mentor, and how will it help me?"
                body=" Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with
            projects in HTML, CSS, and JavaScript. It's suitable for all
            levels and ideal for portfolio building."
            />

            <Accordion
                accNumber="tab-multi-two"
                header="Is Frontend Mentor free?"
                body="Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range
                of projects suitable for all skill levels."
            />

            <Accordion
                accNumber="tab-multi-three"
                header="Can I use Frontend Mentor projects in my portfolio?"
                body="Yes, you can use projects completed on Frontend Mentor in
                your portfolio. It's an excellent way to showcase your
                skills to potential employers!"
            />

            <Accordion
                accNumber="tab-multi-four"
                header="How can I get help if I'm stuck on a Frontend Mentor
                challenge?"
                body="The best place to get help is inside Frontend Mentor's
                Discord community. There's a help channel where you can ask
                questions and seek support from other community members."
            />
        </main>
    );
}

export default Main;
