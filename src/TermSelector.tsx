const terms = ['Fall', 'Winter', 'Spring'] as const;

export type Term = (typeof terms)[number];

interface TermSelectorProps {
  selectedTerm: Term;
  setSelectedTerm: (term: Term) => void;
}

export const TermSelector = ({
  selectedTerm,
  setSelectedTerm,
}: TermSelectorProps) => (
  <fieldset className="my-4 flex gap-2">
    <legend className="sr-only">Term</legend>
    {terms.map((term) => (
      <label
        key={term}
        className="cursor-pointer rounded-lg border border-gray-300 px-4 py-2 font-sans has-checked:border-blue-700 has-checked:bg-blue-700 has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-blue-700"
      >
        <input
          type="radio"
          name="term"
          value={term}
          checked={term === selectedTerm}
          onChange={() => setSelectedTerm(term)}
          className="sr-only"
        />
        {term}
      </label>
    ))}
  </fieldset>
);
