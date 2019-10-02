import React from 'react'

import { Segment, Card, Image } from 'semantic-ui-react'
import CardContent from './CardContent'
const CardOne = props => {
    console.log(props)
    return (<Segment raised>
        <div class="content">
            <h1 className="title">  <img className="ghlogo" src="https://image.flaticon.com/icons/svg/25/25231.svg" /> GitHub Followers!  </h1>
            <Card>
                <Image src={props.data.avatar_url} />
                <Card.Content>
                    <Card.Header>
                        {props.data.login}
                    </Card.Header>
                    <Card.Meta> 🔗 {props.data.html_url} </Card.Meta>
                    <Card.Meta> 🗺️ Location: {props.data.location}</Card.Meta>
                    <Card.Meta> 👥 Following: {props.data.following}</Card.Meta>

                    <h4 className="followers"> 🦇 Followers: 🦇 </h4>
                    <CardContent />
                </Card.Content>
            </Card>
        </div>
    </Segment>)
}


export default CardOne;