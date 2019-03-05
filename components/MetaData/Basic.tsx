import React from 'react'
import { Helmet } from 'react-helmet'

const BasicMetaData = () => (
    <Helmet>
        <meta charset="UTF-8" />
        <title>Page Title</title>
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
)

export default BasicMetaData