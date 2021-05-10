import {Course} from '@appTypes/course';
import Axios from 'axios';
import {QueryObserverResult, useQuery, UseQueryResult} from 'react-query';

interface Option {
  query: {linhvuc?: string};
}
export const useCourses = (
  {query}: Option = {query: {}},
): UseQueryResult<Course[], Error> => {
  const queryString = Object.keys(query).reduce((queryString, key) => {
    return queryString + `&${key}=${query.linhvuc}`;
  }, '');

  return useQuery<Course[], Error>(['courses', queryString], async () => {
    console.log('api');
    const {data} = await Axios.get(`/api/courses?short=1${queryString}`);

    return data?.listCourse;
  });
};
