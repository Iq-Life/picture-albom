import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationRounded:React.FC<PaginationRounded> = ({pagesCount,currentPage,setCurrentPage}) => {

return (
        <Stack spacing={2}>
            <Pagination
                sx={{fontWeight: 'light'}}
                color={"primary"}
                count={pagesCount}
                variant="outlined"
                shape="rounded"
                siblingCount={2}
                onChange={(_, page)=>setCurrentPage(page)}
                page={currentPage}
            />
        </Stack>
    );
}
//type
type PaginationRounded ={
    setCurrentPage:(page:number)=> void
    pagesCount:number
    currentPage:number
}
