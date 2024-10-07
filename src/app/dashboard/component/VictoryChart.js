import {Box, Typography} from "@mui/material";
import {useEffect, useRef} from "react";
import Chart from "chart.js/auto";

export const VictoryChart = props => {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        const data = {
            labels: ['поражений', 'побед'],
            datasets: [
                {
                    label: 'процен победы',
                    data: [400, 400],
                    backgroundColor: ['#9e031f', 'green'],
                    hoverBackgroundColor: ['#ff0028', 'lime'],
                    // borderColor: ['red', 'green'], // Цвета границ
                    // borderWidth: [],
                    borderRadius: 10,
                },
            ],
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: {
                cutout: '70%',
                responsive: true,
                plugin: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        })

        return () => {
            if(chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        }

    }, [])

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
                    padding: '20px 19px'
                }}
            >
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontSize: '18px',
                        lineHeight: '17px',
                    }}
                >
                    Процент побед
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: '30px 40px 30px 50px',
                    columnGap: {xs: 'unset', md:'57px'},
                    rowGap: {xs: '20px', md: 'unset'},
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '250px',
                        height: '250px',
                    }}
                >
                    <canvas ref={chartRef}/>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '55%',
                            left: '51%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Typography
                            variant={'h3'}
                        >
                            50%
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography>
                        График соотношений побед
                        и пройгрышей, чтобы его повысить,
                        чаще побеждайте соперников.
                    </Typography>
                    <Box
                        sx={{
                            mt: '30px',
                            display: 'flex',
                            columnGap: '50px',
                        }}
                    >
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: '22px',
                                    lineHeight: '21px',
                                }}
                            >
                                Побед
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'green',
                                    fontSize: '38px',
                                    lineHeight: '37px',
                                }}
                            >
                                400
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontSize: '22px',
                                    lineHeight: '21px',
                                }}
                            >
                                Поражения
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'red',
                                    fontSize: '38px',
                                    lineHeight: '37px',
                                }}
                            >
                                400
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}