import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#26252C",
        color: "#fff",
    }
}));
export default function CardDetail(props) {
    console.log(props.event.length == 1)
    let content;
    if (props.event.length == 1) {
        const { title, description, date, isCompleted } = props.event[0];
        content = <Table sx={{ minWidth: 300 }} aria-label="customized table" border={1}>
            <TableHead>
                <TableRow>
                    <StyledTableCell className="sm_800">Title</StyledTableCell>
                    <StyledTableCell>{title}</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <StyledTableCell className="sm_800">Description</StyledTableCell>
                    <StyledTableCell>{description}</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <StyledTableCell className="sm_800">Has to be Completed</StyledTableCell>
                    <StyledTableCell>{date}</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <StyledTableCell className="sm_800">Status</StyledTableCell>
                    <StyledTableCell>{isCompleted ?
                        <span>Completed <CheckCircleIcon fontSize={"small"} className="success_svg" /></span> : "Uncompleted"}</StyledTableCell>
                </TableRow>
            </TableHead>
        </Table>
    }
    return (
        <div className="container_card_detail">
            <TableContainer component={Paper}>
                {content}
            </TableContainer>
        </div>
    );
}
