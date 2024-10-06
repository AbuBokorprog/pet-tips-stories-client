'use client';

import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Divider,
} from '@nextui-org/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mb-4"
                required
              />
              <Input
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mb-4"
                required
              />
              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="mb-4"
                rows={4}
                required
              />
              <Button type="submit" color="primary" className="w-full">
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>

        <Card className="p-6">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                <p>petsinfo@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                <p>(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <p>123 Main St, City, State 12345</p>
              </div>
            </div>

            <Divider className="my-6" />

            <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">What are your business hours?</h3>
                <p>We are open Monday to Friday, 9 AM to 5 PM.</p>
              </div>
              <div>
                <h3 className="font-semibold">
                  How long does it take to get a response?
                </h3>
                <p>We typically respond within 24-48 hours.</p>
              </div>
              <div>
                <h3 className="font-semibold">
                  Do you offer support on weekends?
                </h3>
                <p>We offer limited support on weekends for urgent matters.</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
