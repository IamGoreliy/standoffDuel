import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";

export const CryptoWithdrawalOptionsComponent = () => {
    const [withdrawalAmount, setWithdrawalAmount] = useState(0);

    const handleChange = ({target: {value}}) => {
        if (value) {
            setWithdrawalAmount(value);
        } else {
            setWithdrawalAmount(0);
        }
    }
    return (
        <Box
            sx={{
                mt: '20px'
            }}
        >
           <Box
                component={'form'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '20px',
                }}
           >
               <TextField
                   id="filled-basic"
                   label="Сумма вывода (DC)"
                   placeholder={'0.00'}
                   type={'number'}
                   name={'withdrawalAmount'}
                   variant="filled"
                   onChange={handleChange}
                   slotProps={{
                       inputLabel: {
                           sx: {
                               color: 'white',
                           },
                       },
                       input: {
                           sx: {
                               display: 'block',
                               paddingLeft: '30px',
                               height: '49px',
                               color: 'white',
                               backgroundColor: 'rgba(255, 255, 255, 0.1)',
                           }
                       },
                   }}
                   sx={{
                       position: 'relative',
                       width: '100%',
                       '&:after': {
                         content: '""',
                         position: 'absolute',
                         top: '50%',
                         left: '14px',
                         display: 'none',
                         width: '20px',
                         height: '20px',
                         backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/DCCoin.png)',
                         backgroundSize: '20px',
                         backgroundRepeat: 'no-repeat',
                       },
                       '&:focus-within:after': {
                           display: 'block',
                       },
                   }}
               />
               <TextField
                   id="filled-basic"
                   label="Введите номер кошелька USDT TRC20"
                   placeholder='Номер кошелька'
                   type={'number'}
                   name={'cryptoWallet'}
                   variant="filled"
                   slotProps={{
                       inputLabel: {
                           sx: {
                               color: 'white',
                           },
                       },
                       input: {
                           sx: {
                               display: 'block',
                               paddingLeft: '30px',
                               height: '49px',
                               color: 'white',
                               backgroundColor: 'rgba(255, 255, 255, 0.1)',
                           }
                       },
                   }}
                   sx={{
                       position: 'relative',
                       width: '100%',
                       '&:after': {
                           content: '""',
                           position: 'absolute',
                           top: '50%',
                           left: '14px',
                           display: 'none',
                           width: '20px',
                           height: '20px',
                           backgroundImage: 'url(/image/modalReplenishmentOfBalance/icon/wallet.png)',
                           backgroundSize: '20px',
                           backgroundRepeat: 'no-repeat',
                       },
                       '&:focus-within:after': {
                           display: 'block',
                       },
                   }}
               />
               <Box
                sx={{
                    width: '100%',
                }}
               >
                   <Typography
                        variant={'subtitle1'}
                        sx={{
                            padding: '16.5px 32px 16.5px 14px',
                            color: 'white'
                        }}
                   >
                       Вы получите на баланс кошелека:
                   </Typography>
                   <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            textAlign: 'center'
                        }}
                   >
                       {withdrawalAmount}<span style={{color: 'green'}}>$</span>
                   </Typography>
               </Box>
               <Button
                   variant={'contained'}
                   sx={{
                       mt: '20px',
                       width: '90%',
                       background: 'linear-gradient(180deg, rgba(19,224,64,1) 42%, rgba(20,117,47,1) 100%)'
                   }}
               >
                   Вывести
               </Button>
           </Box>
        </Box>
    )
}