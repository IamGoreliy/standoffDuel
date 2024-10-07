export const counterMobileSize = (size) => {
    const result = size.toString().replace(/[^0-9\.]/g, '');
    return (result * 0.44) + 'px';
}