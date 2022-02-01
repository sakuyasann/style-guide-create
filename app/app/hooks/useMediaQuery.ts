import React, { useEffect, useState } from 'react';

const useMediaQuery = (screen: 'max-width: 1460px') => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    if (matchMedia(screen).matches) {
      setMatch(true)
    } else {
      setMatch(false)
    }
  })

  return [match];
};

export default useMediaQuery;
