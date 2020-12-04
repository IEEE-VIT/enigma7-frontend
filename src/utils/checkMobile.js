const isMobile = () => {
    const width = window.innerWidth;
    if (width < 500) {
        return true;
    }
    return false;
};

export default isMobile;
