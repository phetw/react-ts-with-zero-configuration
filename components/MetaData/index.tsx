import React, { Fragment } from 'react'

import BasicMetaData from './Basic'
import OpenGraphMetaData from './OpenGraph'

const MetaData = () => (
    <Fragment>
        <BasicMetaData></BasicMetaData>
        <OpenGraphMetaData></OpenGraphMetaData>
    </Fragment>
)

export default MetaData