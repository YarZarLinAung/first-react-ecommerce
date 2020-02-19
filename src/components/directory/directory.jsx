import React from 'react'
import './directoyr.scss'
import MenuItem from '../menu-item/menu-item'

class Directory extends React.Component {
    constructor () {
        super();
        this.state = {
            sections: [
                {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: '1',
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: '2',
                linkUrl: 'jackets'
            },
            {
                title: 'shoes',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: '3',
                linkUrl: 'shoes'
            },
            {
                title: 'men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: '4',
                linkUrl: 'men'
            },
            {
                title: 'women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: '5',
                linkUrl: 'women'
            }
            ]
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, id, imageUrl, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}></MenuItem>
                    ))
                }
            </div>
        )
    }
}

export default Directory