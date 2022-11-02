import Table from '../components/Table';
import useAPI from '../hooks/useAPIHook'
import Pagination from '../components/Pagination';
import { useState, useMemo } from 'react';
const URL = 'https://randomuser.me/api/?page=';
const additionalQuery = '&results=10&seed=toms'
let PageSize = 10;

export default function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useAPI(`${URL}${currentPage}${additionalQuery}`);

  return (<div>
    {
      isLoading ? <p>DATA is loading</p> : <>
        <Table page={currentPage} data={data} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={100}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
        />
      </>
    }
  </div>)
}
