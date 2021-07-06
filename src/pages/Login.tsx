import React from "react"
import { Link } from "react-router-dom";

import { Button } from "antd";
export default () => {
    return (
        <div className="login">
            <div>this is login</div>
            <Button><Link to="/">entrance</Link></Button>
        </div>
    )
}