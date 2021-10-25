import {Alert, message} from "antd";
import React from "react";

message.config({
    icon: null,
})

export const Notify = (kind, msg) => {
    return message[kind]({
        content: <Alert
            message={msg}
            type={kind}
            closable={false}
            icon={null}
        />,
        duration: 2,
    })
}