import React from 'react';
import MenuItems from '../Components/MenuItems';
import Tittle from '../Components/Tittle';
import portfolios from '../Components/allportfolios';

function PortfoliosPage() {
    

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Tittle title={'Projects'} span={'Projects'} />
            </div>
            <div className="portfolios-data">
                <MenuItems menuItem={portfolios} />
            </div>
        </div>
    )
}

export default PortfoliosPage;
