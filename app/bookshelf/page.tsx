import Link from 'next/link';

export default function Bookshelf() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        bookshelf
      </h1>
      <p className="mb-4">
        some books I've read over the years
      </p>

      <ul className="list-disc pl-6">
        <li className="mb-2">
          <span className="font-semibold">Going Infinite by Michael Lewis</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            05/2024: An interesting deep dive into the world of high finance. I felt there wasn't much beyond the surface though
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Victory City by Salman Rushdie</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            04/2024: Rushdie’s latest work is a sweeping historical epic -- and it's magical realism, one of my favorite genres! Rushdie's prose is as usual lush and imaginative, but it can feel kind of meandering. 
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Fourth Wing by Rebecca Yarros</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            02/2024: Yes, I saw this on social media and it lived up to neither the drooling or scathing critiques. I read it described on the back cover as "nothing you've read before" and while this could be farther from the truth as it leans heavily on every YA trope you can think of. But it was super readable and mildly entertaining.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Lady Tan's Circle of Women by Lisa See</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            01/2024: A beautifully story set in historical China. Can feel a bit melodramatic but overall it's a great read
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">The Red Rising Trilogy by Pierce Brown</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            07/2023: I finished this series set in The Society, a future caste-divided dystopia where the protagonist rises from the lowest tier. The world-building & politics is decently believable, and the action is great. Another light read with enough unpredictable twists to feel fresh.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Dune by Frank Herbert</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            07/2023:Re-reading this sci-fi masterpiece before I watch the second movie. 
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">The Witcher Series by Andrzej Sapkowski</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            08/2023: I loved the richly constructed world with magic, creative creatures, and moral ambiguity. Like the show, there's both character-driven storytelling and cool adventures.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">All the Light We Cannot See by Anthony Doerr</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            04/2023: This was a hauntingly beautiful read that goes through the lives of a blind French girl and a German soldier during World War II. Incredible prose and narrative
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">The Four Winds by Kristin Hannah</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            01/2023: Nothing new if you've read historical fiction -- it's basically the life of a woman through the Great Depression era.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Circe by Madeline Miller</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            12/2022: Another cool reimagined mythology tale from Miller, showing Circe's journey from a witch to a minor goddess. Loved it.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">The Ballad of Songbirds and Snakes by Suzanne Collins</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            03/2022: An interesting perspective on Snow's life. Definitely worth reading if you like the original trilogy.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Game of Thrones Series by George R.R. Martin</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            03/2022: George, we're still waiting for Winds of Winter... idk how many years I can take before I build an AI GRRM to finish it.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Pride and Prejudice by Jane Austen</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            01/2022: A classic
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">"Everything I Never Told You" by Celeste Ng</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            01/2022: Great emotional deep dive / mystery into an Asian American family.
          </p>
        </li>

        <li className="mb-2">
          <span className="font-semibold">Klara and the Sun by Kazuo Ishiguro</span>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            10/2021: Very melancholic and reflective read about a sick child and her AI(?) companion, but beautiful.
          </p>
        </li>

        
      </ul>
    </section>
  );
}
