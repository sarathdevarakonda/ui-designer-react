// historicEventsReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Initial historic events data if any
  data : [
    {
        date: 'July 4, 1776',
        people: 'Founding Fathers',
        content: [
          'Declaration of Independence is adopted, marking the birth of the United States.',
          'A significant moment in American history.',
        ],
      },
      {
        date: 'June 6, 1944',
        people: 'Allied Forces',
        content: [
          'D-Day: Allied forces land in Normandy, beginning the liberation of Western Europe from Nazi occupation.',
          'A turning point in World War II.',
        ],
      },
      {
        date: 'August 15, 1945',
        people: 'World Leaders',
        content: [
          'V-J Day: Japan surrenders, officially ending World War II.',
          'Celebrations erupt worldwide.',
        ],
      },
      {
        date: 'November 22, 1963',
        people: 'John F. Kennedy',
        content: [
          'President John F. Kennedy is assassinated in Dallas, Texas.',
          'A tragic moment in U.S. history.',
        ],
      },
      {
        date: 'June 28, 1914',
        people: 'Gavrilo Princip',
        content: [
          'Assassination of Archduke Franz Ferdinand in Sarajevo triggers the start of World War I.',
          'A catalyst for major geopolitical changes.',
        ],
      },
      {
        date: 'April 15, 1912',
        people: 'Passengers and Crew of the Titanic',
        content: [
          'The Titanic sinks after hitting an iceberg during its maiden voyage.',
          'One of the deadliest maritime disasters in history.',
        ],
      },
      {
        date: 'January 28, 1986',
        people: 'NASA, Challenger Crew',
        content: [
          'Space Shuttle Challenger disintegrates 73 seconds after launch.',
          'A tragic day for space exploration.',
        ],
      },
      {
        date: 'November 9, 1989',
        people: 'East and West Germans',
        content: [
          'Fall of the Berlin Wall, symbolizing the end of the Cold War.',
          'A historic moment of reunification.',
        ],
      },
      {
        date: 'September 11, 2001',
        people: 'Victims, First Responders',
        content: [
          'Terrorist attacks on the World Trade Center and the Pentagon.',
          'A day that changed the course of history.',
        ],
      },
      {
        date: 'July 20, 1969',
        people: 'Neil Armstrong, Buzz Aldrin, Michael Collins',
        content: [
          'Apollo 11 successfully lands on the Moon.',
          'Neil Armstrong becomes the first person to walk on the Moon.',
          'This historic event marked a significant achievement in human space exploration.',
        ],
      },
  ],
  loading : false,
  error : null
};

const historicEventsSlice = createSlice({
  name: 'historicEvents',
  initialState,
  reducers: {
    addHistoricEvent: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addHistoricEvent } = historicEventsSlice.actions;
export const selectHistoricEvents = (state) => state.historicEvents.data;
export default historicEventsSlice.reducer;
