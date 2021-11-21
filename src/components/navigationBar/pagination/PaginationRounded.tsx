import {FC, memo} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export const PaginationRounded: FC<PaginationRoundedType> = memo(({
                                                                      pagesCount, currentPage, setCurrentPage
                                                                  }) => {

    return (
        <Stack spacing={2}>
            <Pagination
                sx={{marginRight: 1}}
                color={"primary"}
                count={pagesCount}
                variant="outlined"
                shape="rounded"
                siblingCount={2}
                onChange={(_, page) => setCurrentPage(page)}
                page={currentPage}
            />
        </Stack>
    );
})
//type
type PaginationRoundedType = {
    setCurrentPage: (page: number) => void
    pagesCount: number
    currentPage: number
}
