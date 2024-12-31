import { FaCalendarAlt, FaUserTie, FaClipboardCheck, FaGavel, FaHome, FaUser, FaShoppingCart, FaUniversity, FaShieldAlt, FaCar, FaBuilding, FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Home = () => {

  const [subject, setSubject] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    paragraph: ''
  });

  const handleSubject = (e) => {
    setSubject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_t295ama',
        'template_lv4v1g4',
        {
          name: subject.name,
          email: subject.email,
          phone: subject.phone,
          service: subject.service,
          subject: subject.subject,
          paragraph: subject.paragraph,
        },
        'tKceBOEx3pClGPlC_'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully!');
          setSubject({
            name: '',
            email: '',
            phone: '',
            service: '',
            subject: '',
            paragraph: '',
          });
        },
        (error) => {
          console.log('Error sending email:', error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  }

  const legalPracticeAreas = [
    {
      icon: <FaHome size={30} color="#E8B16C" />,
      title: 'Family Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaUser size={30} color="#E8B16C" />,
      title: 'Immigration',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaShoppingCart size={30} color="#E8B16C" />,
      title: 'Consumer Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaUniversity size={30} color="#E8B16C" />,
      title: 'Banking & Finance',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaGavel size={30} color="#E8B16C" />,
      title: 'Civil Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaShieldAlt size={30} color="#E8B16C" />,
      title: 'Insurance Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaCar size={30} color="#E8B16C" />,
      title: 'Car Accident',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaBuilding size={30} color="#E8B16C" />,
      title: 'Property Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    },
    {
      icon: <FaBriefcase size={30} color="#E8B16C" />,
      title: 'Corporate Law',
      description: 'Aenean non accumsan antacumsan sem tempus porta nec sit amet est.'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="relative h-screen w-screen overflow-x-hidden overflow-y-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <img src="/banner.webp" alt="Banner" className="absolute inset-0 w-full h-full object-cover select-none z-[-1]" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-start px-4">
          <p className="text-md mb-2 md:mb-4">Lorem ipsum dolor sit amet consectetur.</p>
          <h2 className="font-bold text-3xl md:text-8xl leading-snug md:w-auto w-max">You deserve a just trial</h2>
          <p className="text-sm md:text-2xl mb-4 md:mb-8 mt-2">Get free advocate advice</p>

          <div className="flex flex-row space-x-5 md:flex-row md:space-y-0 md:space-x-4 items-center md:items-start gap-y-3">
            <button className="px-6 py-3 bg-gold text-black text-sm rounded-full hover:bg-gold">Free Consultation</button>
            <button className="px-6 py-3 bg-gray-500 text-white text-sm rounded-full hover:bg-gray-400">Learn More</button>
          </div>

          <div className='flex flex-col space-y-8 md:flex-row md:space-y-0 items-center justify-around my-12 md:my-36'>
            <span className='flex flex-col items-center'>
              <div className='bg-gold p-3 md:p-4 rounded-full text-black'>
                <FaCalendarAlt size={28} md:size={32} />
              </div>
              <p className='mt-4 text-sm md:text-lg'>Book an appointment</p>
            </span>
            <span className='flex flex-col items-center'>
              <div className='bg-gold p-3 md:p-4 rounded-full text-black'>
                <FaUserTie size={28} md:size={32} />
              </div>
              <p className='mt-4 text-sm md:text-lg'>Work with expert</p>
            </span>
            <span className='flex flex-col items-center'>
              <div className='bg-gold p-3 md:p-4 rounded-full text-black'>
                <FaClipboardCheck size={28} md:size={32} />
              </div>
              <p className='mt-4 text-sm md:text-lg'>Free case evaluation</p>
            </span>
          </div>
        </div>
      </div>




      <div className='grid grid-cols-1 md:grid-cols-2 gap-14 md:p-24 p-10 my-24'>
        <div className='border border-gray-300 p-10 rounded-lg hover:border-gold'>
          <div className='flex items-center mb-4'>
            <FaGavel size={45} className='text-gold mr-2' />
          </div>
          <h3 className='font-bold my-5 text-2xl text-black'>Get Legal Advice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum nemo ipsam, sed necessitatibus similique nulla omnis temporibus accusantium ipsa..</p>
        </div>
        <div className='border border-gray-300 p-10 rounded-lg hover:border-gold'>
          <div className='flex items-center mb-4'>
            <FaUserTie size={45} className='text-gold mr-2' />
          </div>
          <h3 className='font-bold my-5 text-2xl text-black'>Work with Expert</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In odit inventore porro ratione cumque obcaecati quod nostrum, architecto debitis quam..</p>
        </div>
        <div className='border border-gray-300 p-10 rounded-lg hover:border-gold'>
          <div className='flex items-center mb-4'>
            <FaClipboardCheck size={45} className='text-gold mr-2' />
          </div>
          <h3 className='font-bold my-5 text-2xl text-black'>Discounted Rates</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui architecto reiciendis velit facilis atque maiores ex earum laudantium officia quas!.</p>
        </div>
        <div className='border border-gray-300 p-10 rounded-lg hover:border-gold'>
          <div className='flex items-center mb-4'>
            <FaCalendarAlt size={45} className='text-gold mr-2' />
          </div>
          <h3 className='font-bold my-5 text-2xl text-black'>Review Documents</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos saepe dignissimos ipsam consectetur inventore earum aliquam blanditiis eaque alias quod?</p>
        </div>
      </div>


      <div className="w-full relative">
        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: .3 }}
          transition={{ duration: .5 }}
          className="flex flex-col md:flex-row justify-around items-center bg-gold text-black p-12 container mx-auto rounded-lg relative z-10">
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-6xl font-bold">123K</h2>
            <p className="text-xl my-4">Trusted Clients</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-6xl font-bold">98%</h2>
            <p className="text-xl my-4">Successful Case</p>
          </div>
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-6xl font-bold">$123M</h2>
            <p className="text-xl my-4">Money Case</p>
          </div>
          <div className="text-center">
            <h2 className="text-6xl font-bold">200</h2>
            <p className="text-xl my-4">Case Closed</p>
          </div>
        </motion.div>

        <div className={`bg-green text-white py-16 ${window.innerWidth >= 768 ? 'relative -mt-28' : ''}`}>
          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ duration: .5 }}
            className="text-center mt-40">
            <h2 className="text-5xl font-extrabold mb-4">Legal Practice Areas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed ipsa cumque voluptas nobis a veniam quis nisi perspiciatis unde.
            </p>
          </motion.div>

          <hr className="w-48 h-1 mx-auto my-10 bg-gold" />

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 text-center">
              {legalPracticeAreas.map((area, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: .8, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, amount: .3 }}
                  transition={{ duration: .5 }}
                  key={index} className="flex flex-col items-center p-6">
                  <div className="text-gold p-4 rounded-full bg-gray-800 inline-block mb-4">
                    <span className="text-3xl">{area.icon}</span>
                  </div>
                  <h3 className="font-semibold text-2xl mb-2">{area.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>



      <div className="">
        <div className="w-full flex flex-col md:flex-row items-center justify-between py-10 container mx-auto">
          <motion.div

            initial={{ opacity: 0, scale: .8, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ duration: .5 }}

            className="md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-5xl font-extrabold text-gold mb-4">Testimonials</h2>
            <p className="text-2xl font-bold leading-relaxed mb-6 text-black">
              Mauris imperdiet orci dapibus, commodo libero nec, interdum tortor. Morbi in nibh faucibus, iaculis lorem vitae, cursus velit. Mauris in fringilla velit.
            </p>
            <p className="font-semibold text-lg text-black">pookie man, CEO Company Inc.</p>
          </motion.div>
          <motion.div

            initial={{ opacity: 0, scale: .8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ duration: .5 }}

            className="md:w-1/2 flex justify-center px-4 mt-8 md:mt-0">
            <img
              src="ceo.png"
              alt="Jenny Doe"
              height={631}
              width={395}
            />
          </motion.div>
        </div>
      </div>





      <div className="bg-green">

        <div className="w-full bg-green flex flex-col md:flex-row items-center justify-between py-16 px-8 container mx-auto rounded-lg">
          {/* Info Section */}
          <motion.div

            initial={{ opacity: 0, scale: .8, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: .3 }}
            transition={{ duration: .5 }}

            className="text-[#b2ccc4] md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-white mb-4">Schedule Your Private Consultation Now</h2>
            <p className="text-lg leading-relaxed mb-6">
              Curabitur ac leo nunc, <span className="text-white">estibul et mauris vel ante</span> finibus maximus nec ut leo.
              Integer consectetur ipsum <span className="text-white">velit aliquam</span> fringilla.
            </p>
            {/* Info Items */}
            <div className="space-y-4">
              <div className="flex items-start">
                <FaEnvelope className="text-gold text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-lg text-gold">Contact</h4>
                  <p className="text-base">example@gmail.com</p>
                  <p className="text-base">info@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-gold text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-lg text-gold">Office</h4>
                  <p className="text-base">9016 Goldfield StreetSouth Richmond Hill, New York 11419</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-gold text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-lg text-gold">Open Hours</h4>
                  <p className="text-base">Monday-Saturday 8 am – 6 pm</p>
                  <p className="text-base">Sunday 11 am – 4 pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-lg md:w-1/2 p-8 mt-8 md:mt-0 w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
                  onChange={handleSubject}
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="phone">Phone</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Your Number"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
                  onChange={handleSubject}
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@gmail.com"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
                  onChange={handleSubject}
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
                  onChange={handleSubject}
                >
                  <option value="">Select Service</option>
                  <option value="Insurance Law">Insurance Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Family Law">Family Law</option>
                  <option value="Corporate Law">Corporate Law</option>
                  <option value="Property Law">Property Law</option>
                  <option value="Banking & Finance">Banking & Finance</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Information"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none"
                onChange={handleSubject}
              />
            </div>
            <div className="mt-4">
              <label className="block text-lg font-medium text-gray-600 mb-2" htmlFor="paragraph">Paragraph Text</label>
              <textarea
                id="paragraph"
                name="paragraph"
                placeholder="Type your message here..."
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none h-32"
                onChange={handleSubject}
              ></textarea>
            </div>
            <button className="bg-gold text-green font-bold py-3 px-6 rounded-lg mt-6 w-full shadow-md" onClick={sendMail}>
              REQUEST A QUOTE
            </button>
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Home