import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept';

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h1>CORE CONCEPTS</h1>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
        {/* <CoreConcepts
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
