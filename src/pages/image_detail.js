import NavBar from "../components/menu";
import {Typography, Badge, Card} from "antd";
import ReactMarkdown from "react-markdown";
import containerLogo from "../styles/pictures/container-logo.png";
import {useParams} from "react-router-dom";

const { Title, Paragraph, Text, Link } = Typography;

export const ImageDetail = () => {
    let { username, imagename } = useParams();

    let desc = `Params are placeholders in the URL that begin
with a colon, like the \`:id\` param defined in`
    let tags = ["latest", "beta", "heko"]

    let markdownDetails = `# Nothing to see here :(`

    return(
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <Card style={{width: "90%", marginTop: "2%"}}>
                <div style={{flexDirection: "row", display: "flex", alignItems: "center"}}>
                    <img src={containerLogo} style={{height: 100, }} alt="container-image-logo"/>
                    <div style={{marginLeft: "2%"}}>
                        <Typography.Title level={2}>{username+"/"+imagename}</Typography.Title>
                        <p>{desc}</p>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "space-between", marginTop: "1%"}}>
                    <div>
                        {
                            tags.map((t) => {
                                return <Badge
                                    count={t}
                                    style={{ margin: "0 2px", backgroundColor: '#7c8fa9', color: "#fff", fontWeight: "bold"}}

                                />
                            })
                        }
                    </div>
                    <Text strong copyable code>{`docker pull openregistry.dev/${username}/${imagename}`}</Text>
                </div>
            </Card>
            <Card style={{width: "90%", marginTop: "2%"}}>
               <ReactMarkdown>
                   {markdownDetails}
               </ReactMarkdown>
            </Card>
        </div>
    )
}
