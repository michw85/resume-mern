import React from 'react'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h2>Link</h2>

            <p>
                Your Link: <a
                href={link.to}
                terget="_blank"
                rel='noopener noreferrer'>
                    {link.to}
                </a>
            </p>
            <p>
                From: <a
                href={link.from}
                terget="_blank"
                rel='noopener noreferrer'>
                    {link.from}
                </a>
            </p>
            <p>
                Number of clicks on the link: <strong>
                    {link.clicks}
                </strong>
            </p>
            <p>
                Date of creation: <strong>
                    {new Date(link.date).toLocaleDateString()}
                </strong>
            </p>
        </>
    )
}