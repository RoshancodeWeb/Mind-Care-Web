import React from 'react'
import ServiceCard from './ServiceCard';

const Release = () => {
    const services = [
        {
          imageSrc: "/art2.png",
          title: "Mindfulness in Minutes",
          description:
            " Dive into quick mindfulness techniques that can be practiced in just a few minutes daily to significantly reduce stress and boost mental clarity.",
          articleFile: "/mind.pdf",
        },
        {
          imageSrc: "/article.png",
          title: "Pathways to Peace",
          description:
            "Learn practical and science-backed methods to release stress and enhance mental well-being, including mindfulness, breathing exercises, and progressive relaxation.",
          articleFile: "/artt.pdf",
        },
        {
          imageSrc: "/art3.png",
          title: "The Power of Deep Breathing",
          description:
            "Explore the benefits of deep breathing exercises, how they work to soothe your nervous system, and the best techniques to implement in your routine.",
          articleFile: "/power.pdf",
        },
        {
          imageSrc: "/art4.png",
          title: "Digital Detox",
          description:
            "Learn how disconnecting from digital devices can lower stress levels, improve sleep, and rejuvenate your mind, with practical tips for a successful digital detox.",
          articleFile: "/digital.pdf",
        },
        {
          imageSrc: "/art5.png",
          title: "Embracing Nature",
          description:
            " Discover the mental health benefits of spending time in nature, from reduced anxiety to increased happiness, and easy ways to incorporate nature into your life.",
          articleFile: "/embracing.pdf",
        },
        {
          imageSrc: "/art6.png",
          title: "Progressive Muscle Relaxation",
          description:
            "Understand how progressive muscle relaxation can be a powerful stress-relief technique and follow a step-by-step guide to practice it effectively.",
          articleFile: "/progressive.pdf",
        },
      ];
  return (
    <div className="container mt-[3rem] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            articleFile={service.articleFile}
          />
        ))}
      </div>
  )
}

export default Release