import React from 'react';
import ShopMen from './../../assets/shopMens.JPG';
import ShopWomen from './../../assets/shopWomens.JPG';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopWomen})`
                    }}
                >
                    <a>
                        Women
                    </a>
                </div>
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${ShopMen})`
                    }}
                >
                    <a>
                        Men
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;