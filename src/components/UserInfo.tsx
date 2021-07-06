import React, { useState } from "react"
import { Input } from "antd";

export default (props: any) => {
    const [listUserInfo, updateUserInfo] = useState([
        {
            label: '姓名',
            value: '张三'
        },
        {
            label: '性别',
            value: 1
        },
        {
            label: '年龄',
            value: 18
        },
    ])
    function setInfo(index: number, value: string) {
        
        updateUserInfo((list) => {
            console.log(list);
            
            return []
            // listUserInfo.map(item => {
            //     return item
            // })
            
        })
    }

    const onChangeInput = (_index: number, value: string) => {
        
        updateUserInfo(listUserInfo.map((item, index) => {
            if(index===_index) item.value=value
            return item
        }))
    }
    return (
        <React.Fragment>
            <ul>
            {listUserInfo.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item.label}：</span>
                        <Input type="text" value={item.value} onChange={(e)=>onChangeInput(index, e.target.value)} />
                    </li>
                )
            })}
            </ul>
        </React.Fragment>
    )
}