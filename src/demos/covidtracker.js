import React from 'react';
import useFetchData from '../hooks/Fetch/Data';

const Landing = () => {
  const [{ data, isLoading, hasError }, setUrl] = useFetchData(
    'http://localhost:3001/covidtracker',
  );

  return (
    <div>
      <div>COVID Tracker</div>
      {isLoading && <div>Loading...</div>}
      {hasError && <div>Error...</div>}
      <ul>
        {data &&
          data.map((state) => (
            <li key={state.name}>
              <div>
                <a href={state.covid19Site} aria-label={state.name}>
                  <b>{state.name}</b>
                </a>
              </div>
              <div>{state.twitter}</div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Landing;
