import { Component, Fragment } from "react";

import MetaData from './components/MetaData/index'
import Header from './components/Header/Header'
import './index.scss'

export default class App extends Component<{}, {}> {
    render() {
        return (
            <Fragment>
                <MetaData></MetaData>
                <Header></Header>
                <main>
                    <h4>Hello React + TypeScript</h4>
                    <section>
                        <p>
                            Zero abstracts the usual project configuration for routing, bundling, and transpiling to make it easier to get started.
                        </p>
                    </section>
                </main>
            </Fragment>
        );
    }
}