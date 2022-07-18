import React from 'react'
import QuickCall from './QuickCall'
import {
    AuthorBox,
} from "../../components/Post/Post.styles"

import { User, Clock, PhoneForwarded } from 'react-feather'

export const AuthorBar = ({data, date}) => {
  return (
    <AuthorBox>
        <ul>
            <li className="AuthorBar_Post">
                <User/>ผู้เขียน:<span>{data.node.name }</span>
            </li>
            <li className="ClockBar_Post">
                <Clock/>วันที่:<span>{ date }</span>
            </li>
            <li className="PhoneCall">
                <PhoneForwarded/><QuickCall/>
            </li>
        </ul>
    </AuthorBox>
  )
}
