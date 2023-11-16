// We have fixed type of songs 1.pop, 2.rock 3.metal
export const songsCollection = [
  {
    id: 1,
    name: 'Song 1',
    type: 'pop',
    singerList: [
      { id: 1, name: 'KK' },
      { id: 2, name: 'Arjit' },
      { id: 3, name: 'Shan' },
    ],
  },
  {
    id: 2,
    name: 'Song 2',
    type: 'rock',
    singerList: [
      { id: 1, name: 'KK' },
      { id: 3, name: 'Shan' },
    ],
  },
  {
    id: 3,
    name: 'Song 3',
    type: 'metal',
    singerList: [
      { id: 2, name: 'Arjit' },
      { id: 3, name: 'Shan' },
    ],
  },
  {
    id: 4,
    name: 'Song 5',
    type: 'metal',
    singerList: [
      { id: 3, name: 'Nima' },
      { id: 3, name: 'Yash' },
      { id: 3, name: 'Malik' },
    ],
  },
  {
    id: 5,
    name: 'Lorem Ipsum is simply dummy that is high songs',
    type: 'metal',
    singerList: [
      { id: 1, name: 'KK' },
      { id: 2, name: 'Arjit' },
      { id: 3, name: 'Shan' },
      { id: 3, name: 'Nima' },
      { id: 3, name: 'Yash' },
      { id: 3, name: 'Malik' },
    ],
  },
];
export const singerList = [
  { id: 1, name: 'KK' },
  { id: 2, name: 'Arjit' },
  { id: 3, name: 'Shan' },
  { id: 4, name: 'Nima' },
  { id: 5, name: 'Yash' },
  { id: 6, name: 'Malik' },
  // Add more options as needed
];
