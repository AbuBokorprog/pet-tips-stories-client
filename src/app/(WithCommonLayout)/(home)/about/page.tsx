'use client';
import React from 'react';
import { Card, CardBody, CardHeader, Divider, Image } from '@nextui-org/react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="mb-8">
          <CardHeader className="flex gap-3">
            <Image
              alt="Mission icon"
              height={40}
              radius="sm"
              src="/icons/mission.svg"
              width={40}
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-700">
              We are dedicated to providing innovative solutions that improve
              people's lives and contribute to a better world. Our goal is to
              leverage technology to create positive change and foster
              sustainable development.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8">
          <CardHeader className="flex gap-3">
            <Image
              alt="Team icon"
              height={40}
              radius="sm"
              src="/icons/team.svg"
              width={40}
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Our Team</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-gray-700">
              Our diverse team of experts brings together a wealth of knowledge
              and experience from various fields, allowing us to tackle complex
              challenges with creativity and precision. We value diversity and
              believe it's key to our innovative approach.
            </p>
          </CardBody>
        </Card>

        <Card className="mb-8 md:col-span-2">
          <CardHeader className="flex gap-3">
            <Image
              alt="Values icon"
              height={40}
              radius="sm"
              src="/icons/values.svg"
              width={40}
            />
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold">Our Values</h2>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Innovation', 'Integrity', 'Collaboration', 'Excellence'].map(
                (value) => (
                  <li key={value} className="flex items-center">
                    <span className="mr-2 text-blue-500">•</span>
                    <span className="text-gray-700">{value}</span>
                  </li>
                )
              )}
            </ul>
          </CardBody>
        </Card>
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700">
          Founded in 2010, our company has grown from a small startup to a
          leading innovator in our field. We've consistently pushed the
          boundaries of what's possible, always with our core values and mission
          at heart.
        </p>
      </section>
    </div>
  );
}
