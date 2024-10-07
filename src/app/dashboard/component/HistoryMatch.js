import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import {CustomImage} from "@/styledComponent/StyledComponent";


const dataTableRows = [
    {
        id: 1,
        urlImgMap: '/image/dashboard/historyMatch/sandstone.png',
        nameMap: 'Sandstone',
        cashRate: '1000',
        result: 'победа',
        dateMatch: '04.08.2023 17:10',
    },
    {
        id: 2,
        urlImgMap: '/image/dashboard/historyMatch/sakura.png',
        nameMap: 'Sakura',
        cashRate: '6446',
        result: 'поражение',
        dateMatch: '04.08.2023 15:30',
    },
    {
        id: 3,
        urlImgMap: '/image/dashboard/historyMatch/sandstone.png',
        nameMap: 'Sandstone',
        cashRate: '346',
        result: 'поражение',
        dateMatch: '02.08.2023 23:50',
    },
    {
        id: 4,
        urlImgMap: '/image/dashboard/historyMatch/sakura.png',
        nameMap: 'Sakura',
        cashRate: '4636',
        result: 'победа',
        dateMatch: '01.08.2023 12:43',
    },
];

export const HistoryMatch = () => {
    return (
        <Box
            sx={{
                mt: '30px',
                backgroundColor: '#050914',
                border: '0.5px solid #191e2b',
                borderRadius: '15px',
            }}

        >
            <Box
                sx={{
                    borderBottom: '1px solid #293546',
                    padding: '20px 19px',
                }}
            >
                <Typography>
                    История Матчей
                </Typography>
            </Box>
            <Box>
                <TableContainer
                    component={Paper}
                    sx={{
                        backgroundColor: '#050914',
                    }}
                >
                    <Table
                        sx={{
                        }}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Карта
                                </TableCell>
                                <TableCell>
                                    Название карты
                                </TableCell>
                                <TableCell>
                                    Ставка
                                </TableCell>
                                <TableCell>
                                    Результат
                                </TableCell>
                                <TableCell>
                                    Завершен
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataTableRows.map(row => {
                                const {id, urlImgMap, nameMap, cashRate, result, dateMatch} = row;
                                return (
                                    <TableRow
                                        key={id}
                                        sx={{
                                            borderBottom: result === 'победа' ? '2px solid green' : '2px solid red',
                                        }}
                                    >
                                        <TableCell>
                                            <CustomImage
                                                src={urlImgMap}
                                                alt={'карта'}
                                                width={70}
                                                height={39}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            {nameMap}
                                        </TableCell>
                                        <TableCell>
                                            {cashRate}<span style={{color: 'yellow'}}>G</span>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: result === 'поражение' ? 'red' : 'green',
                                            }}
                                        >
                                            {result}
                                        </TableCell>
                                        <TableCell>
                                            {dateMatch}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
}