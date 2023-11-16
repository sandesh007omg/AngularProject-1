// We have fixed type of songs 1.pop, 2.rock 3.metal
export const songsCollection = [
  {
    id: 1,
    name: 'Song 1',
    type: 'pop',
    singerList: ['A', 'B', 'C', 'D'],
  },
  {
    id: 2,
    name: 'Song 2',
    type: 'rock',
    singerList: ['B', 'Z', 'Q', 'T', 'Y', 'Z'],
  },
  {
    id: 3,
    name: 'Song 3',
    type: 'metal',
    singerList: ['A'],
  },
  {
    id: 4,
    name: 'Song 5',
    type: 'metal',
    singerList: ['A', 'B'],
  },
  {
    id: 5,
    name: 'Lorem Ipsum is simply dummy that is high songs',
    type: 'metal',
    singerList: ['A', 'B'],
  },
];
export const categoryOptions = [
  { label: 'Pop', value: 'pop' },
  { label: 'Rock', value: 'rock' },
  { label: 'Hip Hop', value: 'hip-hop' },
  // Add more options as needed
];
