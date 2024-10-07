import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

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
})

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
})

