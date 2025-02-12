const DNAtoRNA = {
  'C': 'G',
  'G': 'C',
  'T': 'A',
  'A': 'U'
}

export const toRna = (dna) => {
  return [...dna]
    .map(char => DNAtoRNA[char])
    .join('')
};
