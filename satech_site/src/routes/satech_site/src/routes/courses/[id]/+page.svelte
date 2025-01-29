<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();
    let selectedCourse = data.props;

    // Tracks the currently open section for each accordion (-1 means none is open)
    let openOutlineSection = $state(-1);
    let openFAQSection = $state(-1);

    // Toggle function for the Course Outline accordion
    function toggleOutlineSection(index) {
        openOutlineSection = openOutlineSection === index ? -1 : index;
    }

    // Toggle function for the FAQ accordion
    function toggleFAQSection(index) {
        openFAQSection = openFAQSection === index ? -1 : index;
    }
</script>

<div class="rounded-lg md:m-5 md:p-5 m-2 text-white flex flex-col justify-center md:w-full">
    <div class="flex justify-center w-full">
        <div class="flex flex-col m-5 md:w-3/4">
            <!-- Course Details -->
            <div class="flex lg:flex-row flex-col">
                <div class="self-center">
                    <h2 class="sm:text-4xl text-2xl font-bold mb-3">{selectedCourse.name}</h2>
                    <p class="sm:text-lg text-sm mb-5">{selectedCourse.description}</p>
                </div>
                <img src="{selectedCourse.image}" class="sm:w-96 sm:h-96 self-center" alt="{selectedCourse.name}" />
            </div>

            <!-- Course Outline Accordion -->
            <div class="my-5">
                <p class="sm:text-2xl text-lg font-medium mb-5">Course Outline</p>
                <div id="accordion-outline" class="bg-[#111827]">
                    {#each selectedCourse.syllabus as section, sectionIndex}
                        <h2 id={`accordion-outline-heading-${sectionIndex}`}>
                            <button
                                type="button"
                                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-200 border border-gray-200 bg-[#111827] hover:bg-blue-950 gap-3"
                                onclick={() => toggleOutlineSection(sectionIndex)}
                                aria-expanded={openOutlineSection === sectionIndex}
                                aria-controls={`accordion-outline-body-${sectionIndex}`}
                            >
                                <span>{section.section}</span>
                                <svg
                                    class="w-3 h-3 shrink-0 transform transition-transform duration-300 {openOutlineSection === sectionIndex ? '' : 'rotate-180'}"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id={`accordion-outline-body-${sectionIndex}`}
                            class="transition-all overflow-hidden duration-700 ease-in-out {openOutlineSection === sectionIndex ? 'max-h-[1000px]' : 'max-h-0'}"
                            aria-labelledby={`accordion-outline-heading-${sectionIndex}`}
                        >
                            <div class="border border-gray-200 p-5">
                                <ul class="list-disc ml-5">
                                    {#each section.lessons as lesson, lessonIndex}
                                        <li
                                            class="lesson-item transition-opacity duration-300 delay-[{lessonIndex * 100}ms]"
                                            style="opacity: {openOutlineSection === sectionIndex ? 1 : 0}"
                                        >
                                            {lesson}
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <!-- Why this course  -->
             <div class="my-5">
                <p class="sm:text-2xl text-lg font-medium mb-5">Why this course</p>
                <ol class=" list-decimal list-inside ">
                    {#each selectedCourse.whyChoose as why, whyIndex}
                        <li>{why}</li>
                    {/each}
                </ol>
             </div>

            <!-- FAQs Accordion -->
            <div class="my-5">
                <p class="text-lg font-medium">FAQs</p>
                <div class="mt-5">
                    <div id="accordion-faq" class="bg-gray-900">
                        {#each selectedCourse.faq as faq, faqIndex}
                            <h2 id={`accordion-faq-heading-${faqIndex}`}>
                                <button
                                    type="button"
                                    class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-200 border border-gray-700 hover:bg-gray-800 gap-3"
                                    onclick={() => toggleFAQSection(faqIndex)}
                                    aria-expanded={openFAQSection === faqIndex}
                                    aria-controls={`accordion-faq-body-${faqIndex}`}
                                >
                                    <span>{faq.question}</span>
                                    <svg class="w-4 h-4 shrink-0 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                      </svg>
                                </button>
                            </h2>
                            <div
                                id={`accordion-faq-body-${faqIndex}`}
                                class="transition-all overflow-hidden duration-700 ease-in-out {openFAQSection === faqIndex ? 'max-h-[500px]' : 'max-h-0'}"
                                aria-labelledby={`accordion-faq-heading-${faqIndex}`}
                            >
                                <div class="border border-gray-700 p-5">
                                    <p class="text-gray-400">{faq.answer}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .lesson-item {
        opacity: 0;
        animation: fadeIn 0.5s forwards;
    }

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
</style>
