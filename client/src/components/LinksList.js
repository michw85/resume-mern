import React from 'react'
import {Link} from 'react-router-dom'

// displaying an array of {links}
export const LinksList = ({links}) => {
    // If no links loaded or not create yet
    if (!links.length) {
        return <p className="center">No links yet</p>
    }

    // <table> from library: https://materializecss.com/table.html
    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Origin</th>
                <th>Short</th>
                <th>Open</th>
            </tr>
            </thead>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Open</Link>
                        </td>
                    </tr>
                )
            }) }
            <tbody>

            </tbody>
        </table>
    )
}