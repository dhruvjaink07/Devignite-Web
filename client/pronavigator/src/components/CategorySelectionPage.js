// src/CategorySelectionPage.js
import React, { useState } from 'react';
import '../styles/CategorySelectionPage.css';
import Navbar from '../components/Navbar'
const categories = [
  { id: 1, name: 'Beginner' },
  { id: 2, name: 'Intermediate' },
  { id: 3, name: 'Expert' }
  // Add more categories as needed
];

const languages = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Ruby',
  'Swift',
  'TypeScript',
  'Go',
  'PHP'
  // Add more languages as needed
];

const fields = [
  'Web Development',
  'App Development',
  'AI/ML',
  'Game Development',
  'Cyber Security',
  'Blockchain'
  // Add more fields as needed
];

const CategorySelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory((prevSelected) => (prevSelected === category ? null : category));
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  const handleFieldSelect = (field) => {
    setSelectedFields((prevSelected) =>
      prevSelected.includes(field)
        ? prevSelected.filter((f) => f !== field)
        : [...prevSelected, field]
    );
  };

  const handleNext = () => {
    if (selectedCategory) {
      console.log('Selected category:', selectedCategory.name);
      console.log('Selected languages:', selectedLanguages);
      console.log('Selected fields:', selectedFields);
      // Perform any other action as needed
    } else {
      console.log('Please select an experience level before proceeding.');
    }
  };

  return (
    <>
          <Navbar links={false}></Navbar>

    <div className="category-selection-page">
      <h3>Select Your Experience Level</h3>
      <div className="experience-level-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category)}
            className={`language-button ${selectedCategory === category ? 'selected' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>
          <br></br>
      <h3>Select the Languages You Know</h3>
      <div>
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleLanguageSelect(language)}
            className={`language-button ${selectedLanguages.includes(language) ? 'selected' : ''}`}
          >
            {language}
          </button>
        ))}
      </div>
          <br></br>
      <h3>Select the Fields You Are Interested In</h3>
      <div>
        {fields.map((field) => (
          <button
            key={field}
            onClick={() => handleFieldSelect(field)}
            className={`language-button ${selectedFields.includes(field) ? 'selected' : ''}`}
          >
            {field}
          </button>
        ))}
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>

    </>

  );
};

export default CategorySelectionPage;
