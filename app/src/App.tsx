import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExpand } from 'react-icons/fa'; // Import an icon library
import sections from './sections.json'; // Import the JSON file
import { SectionsData, Section } from './sections.d'; // Ensure correct file extension

const renderSection = (
  section: Section,
  hoveredStep: number | null,
  setHoveredStep: React.Dispatch<React.SetStateAction<number | null>>,
  setExpandedImage: React.Dispatch<React.SetStateAction<string | null>>
) => {
  const renderTitle = (title: string) => {
    return title
      .split('Orion')
      .map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">
              Orion
            </span>
          )}
          {part}
        </React.Fragment>
      ));
  };

  const renderContent = (content: string) => {
    return content
      .split('Orion')
      .map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="bg-gradient-to-r from-amber-900 to-amber-700 bg-clip-text text-transparent">
              Orion
            </span>
          )}
          {part}
        </React.Fragment>
      ));
  };

  const getCircleColor = (index: number) => {
    const colors = ['bg-amber-300', 'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-700', 'bg-amber-800'];
    return colors[index % colors.length];
  };

  switch (section.type) {
    case 'timeline':
      return (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            {section.title && (
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                {renderTitle(section.title)}
              </h2>
            )}
            <div className="relative">
              {/* Add the line first so it appears behind the content */}
              <div className="absolute left-[21px] top-[24px] bottom-6 w-0.5 bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700"></div>
              
              <div className="space-y-6">
                {section.events.map((event, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mr-6">
                      <motion.div
                        className={`w-10 h-10 ${getCircleColor(index)} rounded-full flex items-center justify-center text-white font-bold shadow-md z-10 relative`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    <motion.div
                      className="flex-grow bg-amber-50 rounded-xl p-6 shadow-soft hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="text-xl font-bold text-amber-900 mb-2">{event.title}</h3>
                      <time className="text-sm font-medium text-amber-700 mb-2 block">{event.date}</time>
                      {event.description && (
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      );
    case 'text':
      return (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            {section.title && (
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                {renderTitle(section.title)}
              </h2>
            )}
            <p className="text-lg text-gray-700 leading-relaxed">
              {renderContent(section.content)}
            </p>
          </div>
        </motion.section>
      );
    case 'image':
      return (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative">
            {section.title && (
              <h2 className="text-3xl font-bold text-amber-900 mb-6">{renderTitle(section.title)}</h2>
            )}
            <img src={section.png} alt={section.title} className="w-full h-auto" />
            <button
              onClick={() => setExpandedImage(section.png)}
              className="absolute bottom-4 right-4 bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-600 transition-transform transform hover:scale-110"
            >
              <FaExpand className="w-5 h-5" />
            </button>
          </div>
        </motion.section>
      );
    case 'steps':
      return (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">{renderTitle(section.title)}</h2>
            <div className="space-y-6">
              {section.steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`${
                    hoveredStep === index ? step.hoverColor : step.color
                  } p-6 rounded-lg border border-opacity-20 cursor-pointer transition-all duration-300`}
                  whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-2">
                    {step.description}
                  </p>
                  <p className="text-sm font-medium text-gray-600">{step.status}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      );
    case 'table':
      return (
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            {section.title && (
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                {renderTitle(section.title)}
              </h2>
            )}
            <div className="overflow-x-auto rounded-xl">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {section.headers.map((header, index) => (
                      <th
                        key={index}
                        className="bg-gradient-to-br from-amber-100 to-amber-50 first:rounded-tl-xl last:rounded-tr-xl
                          py-4 px-6 text-left text-amber-900 font-semibold text-lg border-b border-amber-200"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {section.rows.map((row, rowIndex) => (
                    <motion.tr
                      key={rowIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
                      className={`
                        ${rowIndex % 2 === 0 ? 'bg-amber-50/30' : 'bg-white'}
                        hover:bg-amber-100/50 transition-colors duration-200
                        ${rowIndex === section.rows.length - 1 ? 'last-row' : ''}
                      `}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`
                            py-4 px-6 text-gray-700 border-b border-amber-100
                            ${rowIndex === section.rows.length - 1 ? 'border-b-0' : ''}
                            ${rowIndex === section.rows.length - 1 && cellIndex === 0 ? 'rounded-bl-xl' : ''}
                            ${rowIndex === section.rows.length - 1 && cellIndex === row.length - 1 ? 'rounded-br-xl' : ''}
                          `}
                        >
                          {cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>
      );
    default:
      return null;
  }
};

// Ensure sections is typed correctly
const typedSections = sections as SectionsData;

const WorldBuildingWebsite = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Enhanced Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-b from-amber-900 via-amber-800 to-amber-700 text-amber-50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <motion.div 
          className="container mx-auto px-6 py-32 relative z-10"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            Build a World
          </h1>
          <p className="text-2xl md:text-3xl opacity-90 font-light tracking-wide">
            By Guy Kost and Eyal Meirom
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-5xl">
        {typedSections.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            {renderSection(section, hoveredStep, setHoveredStep, setExpandedImage)}
          </motion.div>
        ))}
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-b from-amber-800 to-amber-900 text-amber-50 py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg opacity-90">Built with React. <a href="https://github.com/eyalm2000/build-a-world/blob/main/app/src/App.tsx" className="underline">Source code</a></p>
        </div>
      </motion.footer>

      {/* Enhanced Image Modal */}
      {expandedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img src={expandedImage} alt="Expanded" className="max-w-full max-h-full rounded-lg" />
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default WorldBuildingWebsite;