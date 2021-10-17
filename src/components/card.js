import { Card, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import Text from "antd/es/typography/Text";

export const Tile = ({repoName, author, updatedAt}) => {
    return (
        <div
            style={{background: '#ccd7e3', width: "90%", borderRadius: 8, boxShadow: "0.7px 1.4px 1.4px hsl(0deg 0% 0% / 0.48)", margin: "0.5% 0"}}>
            <Card
                hoverable
                headStyle={{background: 'rgba(204,215,227,0.61)', fontWeight: "bold"}}
                title={author+"/"+repoName}
                bordered={true}
                style={{ width: "100%", borderRadius: 8}}
                extra={(
                    <div>
                        <Text style={{marginRight: "12px"}} copyable={{
                            text: `docker pull ${author}/${repoName}`,
                            tooltips: [<Tooltip>copy pull command</Tooltip>]
                        }}
                        />
                        <span/>
                        <Link style={{fontWeight: "bold"}} to={`/details/${author}/${repoName}`}>More</Link>
                    </div>
                )}
            >
                <p>Author: {author}</p>
                <p>Updated At: {updatedAt}</p>
            </Card>
        </div>
    )
}

export const RenderTileList = ({data = []}) => {
    return data.map((item,i) => {
        return <Tile repoName={item.repoName} author={item.author} updatedAt={item.updatedAt} key={i}/>
    })
}
