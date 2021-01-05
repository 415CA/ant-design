import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, dataSelector } from '../../../redux/slices/Data';

const useFetchData = (initialUrl) => {
  const [url, setUrl] = useState(initialUrl);

  const { data, isLoading, hasError } = useSelector(dataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(url));
  }, [url]);

  return [{ data, isLoading, hasError }, setUrl];
};

export default useFetchData;
