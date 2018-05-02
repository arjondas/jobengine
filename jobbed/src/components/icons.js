import React, {PureComponent} from 'react';
import {Icon} from 'react-icons-kit';
import {ic_search} from 'react-icons-kit/md/ic_search';
class Icons extends PureComponent {
    render() {
        let iconType = null;
        let styling = ({
            position: "absolute",
            color : this.props.color,
            height : this.props.size,
            width: this.props.size,
        })
        if(this.props.type === "search"){  
            iconType = (
                <div style = {styling}>
                    <Icon icon = {ic_search} size = {'100%'}/>
                </div>
            )
        }
        return(
            <div>
                {iconType}
            </div>
        )
    }
}

export default Icons;