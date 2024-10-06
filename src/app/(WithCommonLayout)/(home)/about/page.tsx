import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          We are dedicated to providing innovative solutions that improve
          people's lives and contribute to a better world.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700">
          Our diverse team of experts brings together a wealth of knowledge and
          experience from various fields, allowing us to tackle complex
          challenges with creativity and precision.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Collaboration</li>
          <li>Excellence</li>
        </ul>
      </section>
    </div>
  );
}
