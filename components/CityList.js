import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
// import Toggle from 'material-ui/Toggle';

// export default class CityList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             cityList: []
//         }
//     };
//
//     render() {
//         return (
//             <List className="col-lg-4 text-center">
//                 <ListItem primaryText="First city" rightToggle={<Toggle/>}/>
//             </List>
//         )
//     }
// };

const CityList = ({ cities }) => (
    <List className="col-lg-4 text-center">
        {
            cities.map((city) =>
                <ListItem primaryText={city.name}/>
            )
        }
    </List>
);

CityList.PropTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        enlisted: PropTypes.bool.isRequired
    }).isRequired).isRequired
};

export default CityList;