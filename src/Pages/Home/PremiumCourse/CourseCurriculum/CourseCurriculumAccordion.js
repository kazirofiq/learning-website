import React from "react";
import './CourseCurriculumAccordion.css'
import 'scrollable-component';
const CourseCurriculumAccordion = () => {


    const moduleName = [
        { name: "Introduction and Course Overview." },
        { name: "All About Adobe Illustrator" },
        { name: "Get Ready to become a professional. " },
        { name: "Introduction to KDP" },
        { name: "Setting Up Your KDP Account" },
        { name: "Trademarks and Copyright" },
        { name: "Niche Research Basic To Advance " },
        { name: "UX ( User Experience On KDP )" },
        { name: "Basic Of Cover Design " },
        { name: "Basic Of Content Research  " },
        { name: "Basic Of Design Ideas For Interior Design" },
        { name: "Basic Of Interior Design" },
        { name: "Book 01 ( Cover + Content + Idea + Interior )" },
        { name: "Book 02 ( Cover + Content + Idea + Interior )" },
        { name: "Book 03 ( Cover + Content + Idea + Interior )" },
        { name: "Book 04 ( Cover + Content + Idea + Interior )" },
        { name: "Book 05 ( Cover + Content + Idea + Interior )" },
        { name: "Book 06 ( Cover + Content + Idea + Interior )" },
        { name: "Book 07 ( Cover + Content + Idea + Interior )" },
        { name: "Book 08 ( Cover + Content + Idea + Interior )" },
        { name: "Book 09 ( Cover + Content + Idea + Interior )" },
        { name: "Book 10 ( Cover + Content + Idea + Interior )" },
        { name: "Book 11 ( Cover + Content + Idea + Interior )" },
        { name: "Book 12 ( Cover + Content + Idea + Interior )" },
        { name: "Book 13 ( Cover + Content + Idea + Interior )" },
        { name: "Book 14 ( Cover + Content + Idea + Interior )" },
        { name: "Book 15 ( Cover + Content + Idea + Interior )" },
        { name: "Book 16 ( Cover + Content + Idea + Interior )" },
        { name: "Book 17 ( Cover + Content + Idea + Interior )" },
        { name: "Book 18 ( Cover + Content + Idea + Interior )" },
        { name: "Book 19 ( Cover + Content + Idea + Interior )" },
        { name: "Book 20 ( Cover + Content + Idea + Interior )" },
        { name: "Book 21 ( Cover + Content + Idea + Interior )" },
        { name: "Book 22 ( Cover + Content + Idea + Interior )" },
        { name: "Book 23 ( Cover + Content + Idea + Interior )" },
        { name: "Book 24 ( Cover + Content + Idea + Interior )" },
        { name: "Book 25 ( Cover + Content + Idea + Interior )" },
        { name: "Understand age and grade ranges on KDP." },
        { name: "Writing Effective Book Titles and Subtitle" },
        { name: "How To Create 7 box Keywords" },
        { name: "How To make A Good Description" },
        { name: "How To Find Book Categories" },
        { name: "How to Price Your Paperback" },
        { name: "How To Publish Book`s On KDP" },
        { name: "What To Do After Publish A Book?" },
        { name: "How To Make A Title Page & Copyright Page" },
        { name: "Book Reviews and How to Get More of Them" },
        { name: "How to make an intro page & an Author Page on book" },
        { name: "Creating A+ content ( Basic - Advance) " },
        { name: "Make a Mindset about Running Adds" },
        { name: "The Basic of Adds" },
        { name: "Add Budget " },
        { name: "All About Automatic Adds" },
        { name: "All About Manually Adds" },
        { name: "Pro Tips For Running Adds" },
        { name: "Scaling and Optimizing Ads On KDP" },
        { name: "How To Make A Brand Author" },
        { name: "Develop a Publishing Business Plan" },
        { name: "Study competitor books on KDP " },
        { name: "Research Author`s Platform and merketing strategies" },
        { name: "Book reviews and influencer collaboration" },
        { name: "Author Central and Website " },
        { name: "Video Making For Promotion" },
        { name: "Market Your Books On *********" },
        { name: "Basic - Advance About HardCover" },
        { name: "Understand the Intended Purpose and Audience" },
        { name: "Build a Professional Team" },
        { name: "Utilize Email Marketing" },
        { name: "Optimize Book Metadata and Keywords" },
        { name: "Monitor and Measure Results" },
    ]

    return (
        <section className="">

            <div className="grid grid-cols-1 justify-center items-center">
                <div className="container flex flex-col justify-center my-3">
                    <scrollable-component class="content">
                        <div className="space-y-4 md:w-[730px] w-full ">
                            {
                                moduleName.map((module, i) =>
                                    <div className="collapse bg-white">
                                        <div className="rounded-[10px] border-solid border-2 border-[#C3C4E1] peer-checked:border-[#3D419F] collapse-title text-[#666666] peer-checked:text-[#3D419F] h-[49px] lg:h-[61px]">
                                            <p className="lg:text-[18px] md:text-[18px] leading-[27px] font-medium poppins">{i + 1}. {module.name}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </scrollable-component>
                </div>
            </div>


        </section >
    );
};

export default CourseCurriculumAccordion;