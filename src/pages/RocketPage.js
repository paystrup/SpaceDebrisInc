import React, { useState, useEffect } from 'react';
import { rocketsURL } from "../components/getAPI";
import LoadingAnimation from '../components/LoadingAnimation';
import RocketPageCarousel from '../components/RocketPageCarousel';

export default function RocketPage() {
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  // Our endpoint
  const url = rocketsURL;

  // fetch starts here
  useEffect(() => {
      setIsLoading(true)
      async function getData() {
          const response = await fetch(url);
          const data = await response.json();
          setSpaceData(data);
          setTimeout(() => {
            setIsLoading(false);
          },550);
      }
      getData();
  }, [url]);

  console.log(spaceData);

  if (isLoading)
  return(
      <main>
          <LoadingAnimation />
      </main>
  )

  return (
    <main className='h-[95vh] pt-36 px-6 md:px-8 lg:px-32'>
      <RocketPageCarousel data={spaceData} />
    </main>
  )
}
