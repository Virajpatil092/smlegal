import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    comment: ''
  })

  const handleChange = (e) => {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_t295ama',
        'template_070e4y5',
        {
          name: message.name,
          email: message.email,
          subject: message.subject,
          comment: message.comment
        },
        'tKceBOEx3pClGPlC_'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
          setMessage({
            name: '',
            email: '',
            subject: '',
            comment: ''
          });
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  }

  return (
    <div className='overflow-x-hidden'>

      <div className="relative w-screen min-h-screen pt-20 md:pt-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Background Image */}
        <img
          src="/bg-contact.webp"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover select-none z-[-1]"
        />

        {/* Content */}
        <div className="relative text-white text-center px-4 py-16 md:py-24">
          <h2 className="font-extrabold text-3xl md:text-7xl w-auto mb-10">Contact Us</h2>
          <p className="text-sm md:text-xl mb-4 md:mb-8 mt-2 font-brown text-center max-w-lg mx-auto break-words">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perspiciatis inventore modi et id, ipsum a aperiam repellendus rem praesentium.
          </p>

          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 items-center justify-around mt-12 md:mt-36">
            <span className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full text-gold">
                <FaMapMarkerAlt size={32} />
              </div>
              <p className="my-2 text-lg md:my-4 md:text-2xl font-bold">Our Office</p>
              <p className="text-sm md:text-base">9016 Goldfield Street<br />South Richmond Hill, New York 11419</p>
            </span>
            <span className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full text-gold">
                <FaEnvelope size={32} />
              </div>
              <p className="my-2 text-lg md:my-4 md:text-2xl font-bold">Email address</p>
              <p className="text-sm md:text-base">example@gmail.com<br />info@gmail.com</p>
            </span>
            <span className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full text-gold">
                <FaClock size={32} />
              </div>
              <p className="my-2 text-lg md:my-4 md:text-2xl font-bold">Open Hours</p>
              <p className="text-sm md:text-base">Monday-Saturday 8 am – 6pm<br />Sunday 11am – 4pm</p>
            </span>
            <span className="flex flex-col items-center">
              <div className="p-3 md:p-4 rounded-full text-gold">
                <FaPhone size={32} />
              </div>
              <p className="my-2 text-lg md:my-4 md:text-2xl font-bold">Phone Number</p>
              <p className="text-sm md:text-base">+(123) 456 789<br />+(123) 456 789</p>
            </span>
          </div>
        </div>
      </div>

      <div className="">

        <div className="w-full flex flex-col md:flex-row items-center justify-around py-16 px-8 container mx-auto rounded-lg">

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 space-y-6 container mx-auto"
          >
            <div className="relative w-full h-0 pb-[56.25%]"> 
              <iframe
                className="rounded-3xl absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.4226201141732!2d-122.01121197363979!3d37.33250218751264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1735318564829!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white md:w-1/2 p-8 mt-8 md:mt-0 w-full"
          >
            <h2 className="text-4xl font-semibold mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gold bg-gray-200"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gold bg-gray-200"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gold bg-gray-200"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Enter your comment"
                  name="comment"
                  id="comment"
                  rows="4"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-gold bg-gray-200"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gold hover:bg-gold text-black font-bold py-2 px-6 rounded-lg"
                onClick={sendMail}
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default Contact
