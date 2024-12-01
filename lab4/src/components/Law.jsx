import {lawData } from "../mockData/lawData";

const Header = ({ headerData }) => {
    return (
        <>
        <h3 class="law__block">{headerData}</h3>
        </>
    );
};

export const Law = () => {
    const {header} = lawData;
    return (
        <>
            <Header headerData={header}/>
        </>
    );
};

export default Law;