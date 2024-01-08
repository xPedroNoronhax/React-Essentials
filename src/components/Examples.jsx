import React from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import { useState } from 'react'
import Section from './Section'
import Tabs from './Tabs'

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton){
      //selectedButton => 'Components','JSX','Props',State'
      setSelectedTopic(selectedButton)
  }
  return (
    <Section id="examples" title='Examples'>
       <Tabs 
        buttons={
        <>
          <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
      <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
        </>
       }>
       {!selectedTopic ? <p>Please,select a topic </p> : (
      <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
    )
    }

       </Tabs>
    
  </Section>
  )
}

export default Examples