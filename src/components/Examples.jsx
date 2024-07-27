import { useState } from 'react';
import TabButtons from './TabButtons.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleClick(selectedBtn) {
    setSelectedTopic(selectedBtn);
  }

  let tabContent = <p>Please select a topic...</p>;
  if (selectedTopic) {
    tabContent = (
      <div className="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="examples" id="examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButtons
              onSelect={() => handleClick('components')}
              isSelected={selectedTopic === 'components'}
            >
              Components
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick('state')}
              isSelected={selectedTopic === 'state'}
            >
              State
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick('props')}
              isSelected={selectedTopic === 'props'}
            >
              Props
            </TabButtons>
            <TabButtons
              onSelect={() => handleClick('jsx')}
              isSelected={selectedTopic === 'jsx'}
            >
              Jsx
            </TabButtons>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
