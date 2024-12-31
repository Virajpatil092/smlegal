import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGavel, FaRegClock, FaBalanceScale, FaCheckCircle, FaComments, FaInfo, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const About = () => {

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

  return (
    <div className='overflow-x-hidden'>

      <div className="relative w-screen pt-20 md:pt-0">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <img
          src="/bg-about.webp"
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover select-none z-[-1]"
        />

        <div className="relative text-white text-center px-4 py-16 md:py-24">
          <h2 className="font-extrabold text-3xl md:text-7xl w-auto mb-10">About Us</h2>
          <p className="text-sm md:text-xl mb-4 md:mb-8 mt-2 font-brown text-center max-w-lg mx-auto break-words">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae perspiciatis inventore modi et id, ipsum a aperiam repellendus rem praesentium.
          </p>
        </div>
      </div>

      <div className={`relative text-white text-center z-10 ${window.innerWidth >= 768 ? 'relative -mt-16' : ''}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="bg-gold p-8 container mx-auto rounded-xl relative z-10 flex flex-col space-y-6 md:space-y-0 md:py-16 md:flex-row md:justify-around md:items-center"
        >
          <div className="flex items-center space-x-4 md:gap-x-0 gap-x-8">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
              <FaGavel size={40} />
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-bold text-left">Qualified Legal <br /> Attorneys</h2>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:gap-x-0 gap-x-8">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
              <FaRegClock size={40} />
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-bold text-left">Over 20 Years <br /> Experience</h2>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:gap-x-0 gap-x-8">
            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10">
              <FaBalanceScale size={40} />
            </div>
            <div>
              <h2 className="text-2xl md:text-2xl font-bold text-left">Courtroom <br /> Performance</h2>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center my-20 gap-12 px-4">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: .8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: .3 }}
          transition={{ duration: .5 }}

          className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gold rounded-full p-4 flex items-center justify-center w-16 h-16">
            <FaInfo className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-brown">Legal Information</h3>
          <p className="text-gray-600">
            Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem,
            vel dignissim purus luctus quis.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: .8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: .3 }}
          transition={{ duration: .5 }}

          className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gold rounded-full p-4 flex items-center justify-center w-16 h-16">
            <FaComments className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-brown">Free Consultation</h3>
          <p className="text-gray-600">
            Cras gravida bibendum dolor eu varius. Morbi fermentum velit nisl, eget
            vehicula lorem sodales eget ipsum felis tristique.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, scale: .8, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: .3 }}
          transition={{ duration: .5 }}

          className="flex flex-col items-center text-center space-y-4">
          <div className="bg-gold rounded-full p-4 flex items-center justify-center w-16 h-16">
            <FaCheckCircle className="text-white text-3xl" />
          </div>
          <h3 className="text-xl font-semibold text-brown">Proven Results</h3>
          <p className="text-gray-600">
            Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit
            amet est euismod quam suspendisse potenti.
          </p>
        </motion.div>
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
                <FaMapMarkerAlt className="text-gold text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-lg text-gold">Office</h4>
                  <p className="text-base">9016 Goldfield StreetSouth Richmond Hill, New York 11419</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-gold text-2xl mr-4" />
                <div>
                  <h4 className="font-bold text-lg text-gold">Contact</h4>
                  <p className="text-base">example@gmail.com</p>
                  <p className="text-base">info@gmail.com</p>
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

export default About