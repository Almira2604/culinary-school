import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const frequentlyAskedQuestions = [
    {
        title: "01. Can I register via your website without coming to the office?",
        description: "Yes, you can. Select a program and fill the form below it.",
    },
    {
        title: "02. Can I take a program while I have a regular job?",
        description: "Yes, you can. Look at our program schedules. We have morning, afternoon, and evening classes available in our Lagos branch, while in Port Harcourt, we have morning and afternoon classes only.",
    },
    {
        title: "03. Do you have a minimum age condition?",
        description: "Here at CMK, passion is the criterion, not age.",
    },
    {
        title: "04. Do you provide accommodation?",
        description: "Yes, we do. We have accommodation facilities only in our Lagos branch, and it is paid separately from the tuition fee.",
    },
    {
        title: "05. What's the nearest landmark?",
        description: "At the Excellent Centre (Lagos), we are between **Domino Pizza** and Slot. At Creative Centre, we are between the **Pabord Brewery** bridge and Quick Autofix.",
    },
    {
        title: "06. When are you taking in new students?",
        description: "Contact us via 08035782455 to confirm or look out for posts on our social media and website for the latest enrollment opportunities.",
    },
    {
        title: "07. What are the admission requirements?",
        description: "Application letter, proof of prior education, 2 passport photographs, resume, and an admission fee of #10,000.",
    },
    {
        title: "08. Do you provide jobs for students?",
        description: "We go the extra mile to secure jobs for our students. All alumni are included in opportunities for new job alerts.",
    },
    {
        title: "09. Do you accept installment payment?",
        description: "Installment payment plans are available only for indigenous students, not international students. All installments attract a 10% interest if not paid on the due date.",
    },
    {
        title: "10. Do you accept cash?",
        description: "All payments are made through the provided account and bank details of the school.",
    },
    {
        title: "11. Do you accept cheques?",
        description: "Yes! All cheques must clear before commencing classes.",
    },
    {
        title: "12. Can I pay now and resume later?",
        description: "It is possible to secure admission, pay tuition, and resume late—but not later than the next intake.",
    },
    {
        title: "13. Do you have any discount platforms?",
        description: "Look out for posts on our social media handles to see when a discount promo is active. An outright payment may attract a 5% discount.",
    },
    {
        title: "14. Do you have a scholarship program?",
        description: "Our scholarship program is designed and approved by the school board. The criteria and requirements are determined by the board. Entrance information is announced on our website and other media platforms.",
    },
];

const FrequentAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="lg:w-[800px] md:w-[370px]  lg:p-5  ">
            
            {frequentlyAskedQuestions.map((faq, index) => (
                <div key={index} className="border-b last:border-b-0">
                    <div
                        className="lg:px-5 px-3 py-4 flex items-center justify-between cursor-pointer"
                        onClick={() => toggleAccordion(index)}
                    >
                        <p className="flex-1 text-xl text-gray-600 font-normal hover:text-black hover:font-bold">{faq.title}</p>
                        <span>{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="px-5 py-4 ">
                            <p className="text-gray-600">{faq.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FrequentAccordion;


