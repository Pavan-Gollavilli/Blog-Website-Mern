import React from 'react';

const About = () => {
  return (
    <div className="text-gray-800">
      
      {/* Header Section */}
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">Who We Are</h1>
          <p className="text-xl text-gray-600">
            We're more than just a blog — we're a community of curious minds sharing knowledge, stories, and inspiration.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              Our journey started with a simple idea: to build a space where ideas can grow, evolve, and spark meaningful
              conversations. Today, that mission drives everything we do — from the content we create to the voices we amplify.
            </p>
          </div>
          <img
            src="https://www.beyondtheboardroom.com.au/assets/images/mix3/adobestock_204827764-team-challenge-hero.jpeg"
            alt="Team working together"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/035/872/445/small_2x/ai-generated-aerial-view-of-crowd-people-connected-by-lines-social-media-and-communication-concept-top-view-of-men-and-women-isolated-on-white-background-with-shadows-staying-online-internet-free-photo.jpg"
            alt="People connecting"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <ul className="text-lg space-y-3 list-disc list-inside">
              <li>Authenticity in every voice we share</li>
              <li>Commitment to high-quality content</li>
              <li>Building community through storytelling</li>
              <li>Educating and empowering through information</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-600 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Let’s Collaborate</h2>
          <p className="text-lg mb-6">
            Got an idea, question, or partnership in mind? We’d love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Reach Out
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
