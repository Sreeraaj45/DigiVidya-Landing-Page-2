import React from 'react';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Features', id: 'features' },
    { name: 'Courses', id: 'courses' },
    { name: 'About Us', id: 'about' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' }
  ];

  const courses = [
    'Python Programming',
    'Pytest Testing Framework',
    'POSH'
  ];

  const support = [
    'Learning Portal',
    'Employee Support',
    'Technical Issues',
    'Training Materials',
    'Certificates',
    'Learning Paths'
  ];

  const company = [
    'About Ielektron',
    // 'Our Team',
    'Careers',
    // 'Company News',
    // 'Training Partners',
    // 'Learning Resources'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const handleQuickLinkClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      {/* <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with DigiVidya</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest training updates, learning resources, and professional development opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-primary-600 to-primary-500 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                DigiVidya
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ielektron Technologies Learning Management System is our internal platform offering 
              comprehensive training programs designed to help our team members master new skills 
              and advance their careers. Join our learning community and grow professionally.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">technical_user@ielektron.com</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">IELEKTRON Technologies, Camelot, KIADB Export Promotion Industrial Area</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleQuickLinkClick(link.id)}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          {/* <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

          {/* Company Links */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {company.map((item, index) => {
                let href = '#';
                let target = undefined;
                let rel = undefined;
                
                if (item === 'About Ielektron') {
                  href = 'https://www.ielektron.com/';
                  target = '_blank';
                  rel = 'noopener noreferrer';
                } else if (item === 'Careers') {
                  href = 'https://www.ielektron.com/career.html';
                  target = '_blank';
                  rel = 'noopener noreferrer';
                }
                
                return (
                  <a
                    key={index}
                    href={href}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                    target={target}
                    rel={rel}
                  >
                    {item}
                  </a>
                );
              })}
            </div>

          {/* Social Links & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            {/* <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-3 rounded-full hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div> */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Ielektron Technologies. All rights reserved.
              </p>
              {/* <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Cookie Policy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}