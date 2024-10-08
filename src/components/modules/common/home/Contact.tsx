'use client';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import React from 'react';
import {
  Card,
  CardBody,
  Input,
  Textarea,
  Button,
  Divider,
} from '@nextui-org/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Contact = () => {
  const { register, reset, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await emailjs.send(
        'service_7exo6md',
        'template_x489mwc',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        'TPpFzhZxFK7nDe2XM'
      );

      toast.success('Send your email!');
      reset();
    } catch (error) {
      toast.error('Please try again!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardBody>
            <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                type="text"
                label="Name"
                {...register('name', { required: true })}
                name="name"
                placeholder="Enter your name"
                className="mb-4"
                required
              />
              <Input
                type="email"
                label="Email"
                {...register('email', { required: true })}
                placeholder="Enter your email"
                className="mb-4"
                required
              />
              <Textarea
                label="Message"
                {...register('message', { required: true })}
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
};

export default Contact;
