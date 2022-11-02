import Table from './Table';
import useAPI from './useAPIHook'
import Pagination from './Pagination';
import { useState, useMemo } from 'react';
const URL = 'https://randomuser.me/api/?results=100';
let PageSize = 10;

export default function Users() {
  const { data, isLoading } = useAPI(URL);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return(<div>
    {
      isLoading ? <p>DATA is loading</p> : <>
        <Table page={currentPage} data={currentTableData.length <= 0 ? data.slice(0,10) : currentTableData} />
        <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
        />
      </>
    }
  </div>)
}
