import React from 'react';
import { Star, Clock, Users, ArrowRight, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function Courses() {
  const [expandedSkills, setExpandedSkills] = React.useState<{ [key: number]: boolean }>({});
  const [hoveredCourse, setHoveredCourse] = React.useState<number | null>(null);

  const toggleSkills = (courseId: number) => {
    setExpandedSkills(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const courses = [
    // Commented out previous courses
    // {
    //   id: 1,
    //   title: 'Software Development Fundamentals',
    //   instructor: 'Senior Dev Team',
    //   rating: 4.9,
    //   students: 125,
    //   duration: '8 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Technical Skills',
    //   level: 'Intermediate',
    //   description: 'Master modern software development practices with our internal frameworks and tools.',
    //   skills: ['React', 'Node.js', 'MongoDB', 'Express.js']
    // },
    // {
    //   id: 2,
    //   title: 'Data Analytics & Business Intelligence',
    //   instructor: 'Data Team Lead',
    //   rating: 4.8,
    //   students: 98,
    //   duration: '6 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Data Science',
    //   level: 'Advanced',
    //   description: 'Learn data analysis techniques and business intelligence tools used at Ielektron.',
    //   skills: ['Python', 'SQL', 'Power BI', 'Tableau']
    // },
    // {
    //   id: 3,
    //   title: 'Project Management Excellence',
    //   instructor: 'PMO Director',
    //   rating: 4.7,
    //   students: 152,
    //   duration: '4 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Leadership',
    //   level: 'Beginner',
    //   description: 'Master project management methodologies and tools used in our organization.',
    //   skills: ['Agile', 'Scrum', 'JIRA', 'Planning']
    // },
    // {
    //   id: 4,
    //   title: 'UI/UX Design Principles',
    //   instructor: 'Design Team Lead',
    //   rating: 4.9,
    //   students: 87,
    //   duration: '5 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Design',
    //   level: 'Beginner',
    //   description: 'Learn design principles and tools used in our product development process.',
    //   skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    // },
    // {
    //   id: 5,
    //   title: 'Cloud Technologies & DevOps',
    //   instructor: 'DevOps Team',
    //   rating: 4.6,
    //   students: 69,
    //   duration: '7 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Cloud Computing',
    //   level: 'Advanced',
    //   description: 'Master cloud services and DevOps practices used in our infrastructure.',
    //   skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    // },
    // {
    //   id: 6,
    //   title: 'Quality Assurance & Testing',
    //   instructor: 'QA Team Lead',
    //   rating: 4.8,
    //   students: 113,
    //   duration: '6 weeks',
    //   price: 0,
    //   originalPrice: 0,
    //   image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   category: 'Quality Assurance',
    //   level: 'Intermediate',
    //   description: 'Learn testing methodologies and quality assurance practices.',
    //   skills: ['Testing', 'Automation', 'Selenium', 'Quality']
    // }

    // Current courses using assets images
    {
      id: 1,
      title: 'Python Programming',
      instructor: 'Python Expert',
      rating: 4.9,
      students: 150,
      duration: '8 weeks',
      price: 0,
      originalPrice: 0,
      image: '/src/assets/python.png',
      category: 'Programming',
      level: 'Beginner',
      description: 'This Python course offers a comprehensive introduction to programming through the lens of Harvard’s CS50 curriculum. Designed for beginners and those looking to strengthen their coding foundations, the course covers essential Python concepts such as data types, control structures, functions, and object-oriented programming. Through clear explanations and practical examples, learners will develop the skills needed to write efficient and effective Python code applicable in a variety of real-world scenarios.',
      skills: ['Python', 'Data Types', 'Functions', 'OOP']
    },
    {
      id: 2,
      title: 'Pytest Testing Framework',
      instructor: 'Testing Specialist',
      rating: 4.8,
      students: 120,
      duration: '6 weeks',
      price: 0,
      originalPrice: 0,
      image: '/src/assets/pytest.jpg',
      category: 'Testing',
      level: 'Intermediate',
      description: 'Learn how to use Pytest, a powerful testing framework for Python. Throughout this course, you’ll gain a solid understanding of Pytest’s features, best practices, and the nuances of writing effective tests. By the end, you’ll also discover how to leverage ChatGPT to write tests faster and more efficiently.',
      skills: ['Pytest', 'Test Automation', 'Fixtures', 'Assertions']
    },
    {
      id: 3,
      title: 'POSH Training',
      instructor: 'HR Specialist',
      rating: 4.7,
      students: 200,
      duration: '4 weeks',
      price: 0,
      originalPrice: 0,
      image: '/src/assets/posh.jfif',
      category: 'Workplace Safety',
      level: 'All Levels',
      description: 'This comprehensive course on the Prevention of Sexual Harassment (POSH) aims to educate learners about their rights, responsibilities, and the legal frameworks that protect dignity in the workplace. Drawing from constitutional provisions, global practices, and real-world scenarios, the course fosters awareness, sensitivity, and accountability around gender equality and respectful conduct at work.',
      skills: ['POSH Policy', 'Workplace Safety', 'Legal Compliance', 'Reporting']
    }
  ];

  const categories = ['All', 'Programming', 'Testing', 'Workplace Safety'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Training
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent"> Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive internal training programs designed to enhance your skills and advance your career at Ielektron Technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-sm font-bold text-gray-900">{course.category}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {course.title}
                </h3>
                {/* <p className="text-gray-600 mb-3">Instructor: {course.instructor}</p> */}
                <div className="relative mb-3">
                  <p 
                    className="text-gray-700 text-sm leading-relaxed cursor-help"
                    onMouseEnter={() => setHoveredCourse(course.id)}
                    onMouseLeave={() => setHoveredCourse(null)}
                  >
                    {course.description.split(' ').slice(0, 16).join(' ')}...
                  </p>
                  
                  {/* Custom Tooltip */}
                  {hoveredCourse === course.id && (
                    <div className="absolute z-[99999] top-full left-0 mt-2 w-80 p-4 bg-gray-900 text-white text-sm rounded-lg shadow-2xl border border-gray-700 transform transition-all duration-200 ease-in-out">
                      <div className="relative">
                        <p className="leading-relaxed">{course.description}</p>
                        {/* Tooltip Arrow */}
                        <div className="absolute bottom-full left-6 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Skills and Start Training Button */}
                <div className="flex items-start justify-between mb-2">
                  {/* Skills Section */}
                  <div className="flex-1 mr-4">
                    {/* Skills Grid - 2x2 */}
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      {course.skills.slice(0, 4).map((skill, index) => (
                        <span key={index} className="bg-primary-100 text-primary-800 px-1.5 py-0.5 rounded text-xs font-medium text-center">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Additional Skills (if more than 4) */}
                    {course.skills.length > 4 && (
                      <>
                        {expandedSkills[course.id] && (
                          <div className="grid grid-cols-2 gap-2 mb-2">
                            {course.skills.slice(4).map((skill, index) => (
                              <span key={index + 4} className="bg-primary-100 text-primary-800 px-1.5 py-0.5 rounded text-xs font-medium text-center">
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() => toggleSkills(course.id)}
                          className="text-primary-600 text-xs font-medium hover:text-primary-700 flex items-center space-x-1"
                        >
                          <span>{expandedSkills[course.id] ? 'Show Less' : `+${course.skills.length - 4} more`}</span>
                          {expandedSkills[course.id] ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Start Training Button */}
                  <div className="flex-shrink-0">
                    <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>Start Training</span>
                    </a>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="flex items-center justify-center text-sm text-gray-600 mt-2">
                  {/* <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center mt-12">
          <a href="https://www.digividya.ielektron.com/" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto">
              <span>View All Programs</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}