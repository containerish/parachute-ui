import NavBar from "../components/menu";
import {Typography, Badge, Card} from "antd";
import ReactMarkdown from "react-markdown";
import dc from "../styles/pictures/dc.png";
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
                    <img src={dc} alt="container-image-logo"/>
                    <div>
                        <h2 style={{fontWeight: "bold"}}>{username+"/"+imagename}</h2>
                        <p>{desc}</p>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        {
                            tags.map((t) => {
                                return <Badge
                                    count={t}
                                    style={{ backgroundColor: 'rgba(152,171,196,0.98)', color: "black", fontWeight: "500"}}

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
