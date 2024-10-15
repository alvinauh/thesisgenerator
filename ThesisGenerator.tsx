import React, { useState } from 'react';
import { BookOpen, HelpCircle, FileText, Lightbulb } from 'lucide-react';

const ThesisGenerator: React.FC = () => {
  const [title, setTitle] = useState('');
  const [researchQuestions, setResearchQuestions] = useState('');
  const [researchProblem, setResearchProblem] = useState('');
  const [methods, setMethods] = useState('');
  const [references, setReferences] = useState('');

  const generateTitle = () => {
    const skills = ['Reading', 'Listening', 'Speaking', 'Writing'];
    const contexts = [
      'Malaysian Primary Schools',
      'Malaysian Secondary Schools',
      'Malaysian ESL Classrooms',
      'Multicultural Malaysian Classrooms'
    ];
    const focuses = [
      'Enhancing',
      'Developing',
      'Improving',
      'Assessing',
      'Strategies for'
    ];
    const randomSkill = skills[Math.floor(Math.random() * skills.length)];
    const randomContext = contexts[Math.floor(Math.random() * contexts.length)];
    const randomFocus = focuses[Math.floor(Math.random() * focuses.length)];
    setTitle(`${randomFocus} ${randomSkill} Skills in ${randomContext}: A Teacher's Perspective`);
  };

  const generateResearchQuestions = () => {
    setResearchQuestions(`
1. What are the key challenges in ${title.toLowerCase()}?
2. How do cultural factors influence ${title.toLowerCase()}?
3. What innovative teaching methods can be employed to address ${title.toLowerCase()}?
    `.trim());
  };

  const generateResearchProblem = () => {
    setResearchProblem(`
Despite the importance of ${title.toLowerCase()}, there is a lack of comprehensive research on effective strategies and methodologies tailored to the Malaysian educational context. This study aims to bridge this gap by exploring innovative approaches to enhance language skills while considering the unique multicultural environment of Malaysian classrooms.
    `.trim());
  };

  const generateMethods = () => {
    setMethods(`
1. Mixed-Methods Approach: Combining quantitative surveys with qualitative interviews of Malaysian teachers.
2. Action Research: Implementing and evaluating new teaching strategies in real Malaysian classroom settings.
3. Comparative Analysis: Examining the effectiveness of different teaching methods across various Malaysian schools.
4. Longitudinal Study: Tracking student progress over an academic year to assess the long-term impact of specific teaching strategies.
    `.trim());
  };

  const generateReferences = () => {
    setReferences(`
1. Abdullah, N., & Lim, S. L. (2022). "Language Education in Multicultural Malaysia." Journal of Southeast Asian Education, 35(2), 178-195.
2. Razak, F. A., & Yunus, M. M. (2021). "Innovative Approaches to Teaching ${title.split(':')[0]} in Malaysian Schools." Asian Journal of Language Teaching and Learning, 3(4), 67-82.
3. Lee, M. N. N. (2023). "Challenges and Opportunities in Malaysian Language Education: A Review." International Journal of Educational Research in Malaysia, 12(1), 23-41.
    `.trim());
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Malaysian Education Thesis Generator</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BookOpen className="mr-2" /> Title
          </h3>
          <div className="flex items-center">
            <input
              type="text"
              className="flex-grow p-2 border rounded-l-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter or generate a title"
            />
            <button
              onClick={generateTitle}
              className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700"
            >
              Generate
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <HelpCircle className="mr-2" /> Research Questions
          </h3>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={researchQuestions}
            onChange={(e) => setResearchQuestions(e.target.value)}
            placeholder="Enter or generate research questions"
          />
          <button
            onClick={generateResearchQuestions}
            className="mt-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Generate Research Questions
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <FileText className="mr-2" /> Research Problem
          </h3>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={researchProblem}
            onChange={(e) => setResearchProblem(e.target.value)}
            placeholder="Enter or generate research problem"
          />
          <button
            onClick={generateResearchProblem}
            className="mt-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Generate Research Problem
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Lightbulb className="mr-2" /> Methods
          </h3>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={methods}
            onChange={(e) => setMethods(e.target.value)}
            placeholder="Enter or generate methods"
          />
          <button
            onClick={generateMethods}
            className="mt-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Generate Methods
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <BookOpen className="mr-2" /> References
          </h3>
          <textarea
            className="w-full p-2 border rounded-md"
            rows={4}
            value={references}
            onChange={(e) => setReferences(e.target.value)}
            placeholder="Enter or generate references"
          />
          <button
            onClick={generateReferences}
            className="mt-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          >
            Generate References
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThesisGenerator;