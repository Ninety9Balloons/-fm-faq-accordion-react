import "./AccordionStyle.css";

function Accordion({ accNumber, header, body }) {
    return (
        <div className="tab w-full overflow-hidden">
            <input
                className="absolute opacity-0"
                id={accNumber}
                type="checkbox"
                name="tabs"
            />
            <label
                className="p-5 leading-normal cursor-pointer font-bold text-gray-purple flex justify-between"
                htmlFor={accNumber}
            >
                {header}
            </label>
            <div className="tab-content overflow-hidden text-gray-purple leading-normal">
                <p className="p-5">{body}</p>
            </div>
        </div>
    );
}

export default Accordion;
