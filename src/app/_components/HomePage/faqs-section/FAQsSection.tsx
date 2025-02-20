// components/FAQsSection.js
import React from 'react';

const FAQsSection = () => {
  const faqs = [
    {
      q: 'Can I participate in KitaHack as a solo team?',
      a: "Yes, you are welcome to participate as a solo team. However, if you're looking for team members, you can join our Discord server link to connect with other participants.",
    },
    {
      q: "I'm a beginner. Can I still participate in KitaHack?",
      a: 'Yes, absolutely! We offer beginner-friendly workshops to help you build your idea.',
    },
    {
      q: 'Who owns the app/solution that my team creates during KitaHack?',
      a: 'Participants will still retain the ownership of the app/solution that you create during KitaHack. However, participants will grant event organizers a non-exclusive royalty-free license to showcase and promote your projects for marketing and educational purposes.',
    },
    {
      q: 'Can I pick a solution outside the scope of AI and SDGs?',
      a: 'While you are welcome to explore any solution ideas, for the purpose of KitaHack 2025 competition, you are required relate your project with at least one of the 17 SDGs with the integration of AI.' 

    },
    {
      q: 'What happens after KitaHack?',
      a: "After KitaHack, you'll have the opportunity to refine and improve your solution for the 2024 Global Solution Challenge.",
    },
    {
      q: 'Can I participate in multiple teams?',
      a: 'No, each student is only allowed to be a part of one submission for KitaHack.',
    },
  ];

  return (
    <section id="faqs" className="container px-6 mx-auto">
      <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
        <h2 className="font-semibold leading-7 lg:text-center text-yellow-500">
          Have Questions?
        </h2>
        <p className="mt-2 text-3xl lg:text-center font-[GoogleSans-Bold] font-bold tracking-tight text-gray-700 sm:text-4xl">
          Frequently Asked Questions
        </p>

        <dl className="space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-700 lg:col-span-5">
                {faq.q}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {faq.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQsSection;
