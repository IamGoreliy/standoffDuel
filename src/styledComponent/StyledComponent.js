import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import {keyframes} from "@emotion/react";

const animationWaitingOpponent = (color) => keyframes`
    0% {
        background-color: ${color[0]};
        transform: scale(0.1);
    }
    20% {
        background-color: ${color[1]};
        transform: scale(0.2);
    }
    40% {
        background-color: ${color[2]};
        transform: scale(0.4);
    }
    60% {
        background-color: ${color[3]};
        transform: scale(0.6);
    }
    80% {
        background-color: ${color[4]};
        transform: scale(0.8);
    }
    100% {
        background-color: ${color[5]};
        transform: scale(1);
    }
`

export const Logo = styled(props => {
    const {sx, href='/', ...other} = props;
    return <Link href={href} {...other}/>
})(({sx}) => {
    return {
        textDecoration: 'none',
        ...sx,
    }
});

export const LogoSpan = styled(props => {
    const {sx, ...other} = props;
    return <span {...other}/>
})(({sx}) => {
    return {
        display: 'inline-block',
        backgroundImage: 'url(./image/logoWhite.png)',
        backgroundSize: 'cover',
        width: '30px',
        height: '30px',
        ...sx,
    }
});

export const LogoColorSpan = styled(props => {
    const {sx, ...other} = props;
    return <span {...other}/>
})(({sx}) => {
    return {
        display: 'inline-block',
        backgroundImage: 'url(./image/logo.png)',
        backgroundSize: 'cover',
        width: '30px',
        height: '30px',
        ...sx,

    }
});

export const CustomLink = styled(props => {
    const {sx, href='/', ...other} = props;
    return <Link
        href={href}
        {...other}
    />
})(({sx}) => {
    return {
        textDecoration: 'none',
        color: 'white',
        ...sx,
    }
});

export const CustomImage = styled(props => {
    const {sx, imgUrl, alt, width, height, ...other} = props;
    return <Image
        src={imgUrl}
        alt={alt}
        width={width}
        height={height}
        {...other}
    />
})(({sx}) => {
    return {
        ...sx,
    }
});

export const IconSpan = styled(props => {
    const {sx, backgroundImgUrl, ...other} = props;
    return <span {...other}/>
})(({ sx, backgroundImgUrl}) => {
    return {
        display: 'inline-block',
        backgroundImage: `url(${backgroundImgUrl})`,
        backgroundSize: 'cover',
        width: '30px',
        height: '30px',
        ...sx,
    }
});

export const IconSpanFromDashboard = styled(props => {
    const {sx, backgroundImgUrl, ...other} = props;
    return <span {...other}/>
})(({theme, sx, backgroundImgUrl}) => {
    return {
        display: 'inline-block',
        backgroundImage: `url(${backgroundImgUrl})`,
        backgroundSize: 'cover',
        width: '30px',
        height: '30px',
        [theme.breakpoints.up('xs')]: {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'inline-block',
        },
        ...sx,
    }
});

export const CustomInput = styled(props => {
    const {sx, type, placeholder, ...other} = props;
    return <input type={type} placeholder={placeholder} {...other} />
})(({sx}) => {
    return {
        width: '110px',
        height: '30px',
        paddingLeft: '25px',
        border: '1px solid transparent',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
       ...sx,
    }
});




export const ExpectationIcon = styled(props => {
    const {sx, colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'], expectation, ...other} = props;
    return <span {...other}/>
})(({sx, colorArr, expectation}) => {
    return {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        // backgroundColor: 'red',
        animation: `${animationWaitingOpponent(colorArr)} 1500ms ease-in-out ${expectation}ms infinite`,
        ...sx,
    }
})

