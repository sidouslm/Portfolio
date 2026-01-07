import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // You'll need to install: npm install @emailjs/browser
import { Link } from 'react-router-dom';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Email",
      value: "ssidouuslm@gmail.com",
      link: "https://ssidouuslm@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      ),
      title: "GitHub",
      value: "@sidouslm",
      link: "https://github.com/sidouslm",
      description: "Check out my projects"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
          <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Z" fillRule="evenodd"></path>
        </svg>
      ),
      title: "LinkedIn",
      value: "Your LinkedIn",
      link: "https://linkedin.com",
      description: "Connect professionally"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
  'service_ewjx2j4',  // Hardcode temporarily
  'template_504u4hn', // Hardcode temporarily
  formRef.current,
  {
    publicKey: 'Z3PSUt1VbEN8JYez7', // Hardcode temporarily
  }
);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error details:', error);
    // More detailed error logging:
    console.error('Error status:', error.status);
    console.error('Error text:', error.text);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950/30 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-300 font-medium mb-4" style={{ fontFamily: 'Array' }}>
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid  gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900 h-max border border-slate-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-slate-300 mb-6">Send me a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-800 text-green-300 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  Something went wrong. Please try again or contact me directly.
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
                  placeholder="Email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent resize-none transition-all"
                  placeholder="Tell me about your project, ideas, or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-slate-700 cursor-not-allowed'
                    : 'bg-slate-300 text-slate-900 hover:bg-slate-400 hover:transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all duration-300 ${
                    method.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => method.link && window.open(method.link, '_blank')}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-300 mb-1">
                        {method.title}
                      </h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-300 transition-colors block"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-slate-400">{method.value}</p>
                      )}
                      <p className="text-sm text-slate-500 mt-2">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ/Info Section */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-300 mb-6">What to expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Quick Response</h4>
                    <p className="text-slate-500 text-sm">I typically respond within 24 hours on weekdays.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Project Scope</h4>
                    <p className="text-slate-500 text-sm">For project inquiries, please include as much detail as possible.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-slate-300 font-medium mb-1">Availability</h4>
                    <p className="text-slate-500 text-sm">Currently open to freelance projects and full-time opportunities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-300 mb-6">Follow my work</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sidouslm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-slate-300 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-slate-300 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Z" fillRule="evenodd"></path>
                  </svg>
                </a>
                <a
                  href="mailto:ssidouuslm@gmail.com"
                  className="p-3 bg-slate-800 text-slate-400 rounded-lg hover:bg-slate-700 hover:text-slate-300 transition-all duration-200"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-16 pt-12 border-t border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-slate-300 mb-4">Ready to start a project?</h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/projects"
              className="px-8 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-slate-600 hover:text-slate-200 transition-colors duration-200"
            >
              View My Work
            </Link>
            <button
              onClick={() => window.location.href = 'https://ssidouuslm@gmail.com'}
              className="px-8 py-3 bg-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-400 transition-colors duration-200"
            >
              Send Quick Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;