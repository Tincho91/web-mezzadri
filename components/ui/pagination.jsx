import { Button, ButtonGroup } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <ButtonGroup spacing="2">
            <Button onClick={() => onPageChange(currentPage - 1)} isDisabled={currentPage === 1}>
                Previous
            </Button>
            {[...Array(totalPages).keys()].map(page => (
                <Button
                    key={page}
                    onClick={() => onPageChange(page + 1)}
                    isActive={currentPage === page + 1}
                >
                    {page + 1}
                </Button>
            ))}
            <Button onClick={() => onPageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
                Next
            </Button>
        </ButtonGroup>
    );
};

export default Pagination;