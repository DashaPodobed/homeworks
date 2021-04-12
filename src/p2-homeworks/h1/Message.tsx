import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} className={s.avatar}/>

            <div className={s.angle}/>

            <div className={s.content}>
                <p className={s.name}>{props.name}</p>
                <p className={s.text}> {props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>
        </div>

    )
}

export default Message
