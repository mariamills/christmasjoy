"use client";

import { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

// Define a type for individual items
type AccordionItem = {
    question: string;
    answer: string;
    title?: string;
    parameters?: {
        name: string;
        required: boolean;
        default: string;
        description: string;
        example: string;
    }[];
};

// Define a type for the component's props
type AccordionProps = {
    items: AccordionItem[];
};

function Accordion({ items }: Readonly<AccordionProps>) {
    const [openItem, setOpenItem] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        if (openItem === index) {
            setOpenItem(null); // Close the item if it's already open
        } else {
            setOpenItem(index); // Open the new item
        }
    };

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {items.map((item, index) => (
                <div key={item.question}>
                    <h2>
                        <button
                            type="button"
                            className="flex items-center justify-between w-full p-5 font-bold text-gray-600 border border-green-600 rounded-t-xl focus:ring-2 focus:ring-red-300 mt-4"
                            aria-expanded={openItem === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                            onClick={() => toggleItem(index)}
                        >
                            <span>{item.question}</span>
                            <ChevronUpIcon
                                className={`${openItem === index ? 'transform rotate-180' : ''} w-3 h-3 shrink-0`}
                                aria-hidden="true"
                            />
                        </button>
                    </h2>
                    {openItem === index && (
                        <div id={`accordion-collapse-body-${index}`} className="p-5 border border-gray-200 overflow-auto">
                            <p className="mb-4 text-gray-800">{item.answer}</p>
                            {item.title ? <h3 className="mb-2 text-gray-800 font-bold">{item.title}</h3> : null}
                            {item.parameters ? (
                                <table className="w-full mb-4 text-gray-800">
                                    <thead className="border-b-4">
                                    <tr>
                                        <th className="text-left px-2">Name</th>
                                        <th className="text-left px-2">Required</th>
                                        <th className="text-left px-2">Default</th>
                                        <th className="text-left px-2">Description</th>
                                        <th className="text-left px-2">Example</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {item.parameters.map((parameter) => (
                                        <tr key={parameter.name}>
                                            <td className="whitespace-nowrap px-2 py-1">{parameter.name}</td>
                                            <td className="whitespace-nowrap px-2 py-1">{parameter.required ? 'Yes' : 'No'}</td>
                                            <td className="whitespace-nowrap px-2 py-1">{parameter.default}</td>
                                            <td className="whitespace-nowrap px-2 py-1">{parameter.description}</td>
                                            <td className="whitespace-nowrap px-2 py-1">{parameter.example}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            ) : null}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
