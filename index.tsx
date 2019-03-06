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
                <Content></Content>
            </Fragment>
        );
    }
}

const Content = () => (
    <main>
        <h4>Hello React + TypeScript</h4>
        <section>
            <p>
                Zero abstracts the usual project configuration for routing, bundling, and transpiling to make it easier to get started.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam enim quam unde optio cupiditate nisi? Aliquid excepturi cupiditate aspernatur, blanditiis nisi corrupti sunt consequuntur cum saepe aut impedit fuga dicta vitae quas odit? Alias, ipsam ex fuga, incidunt hic officiis architecto ipsum, sed sequi quod eos possimus totam non neque laboriosam tempora quasi reprehenderit unde dolorem qui eum sapiente quaerat voluptatibus? Vel, dolorum? Laudantium id labore exercitationem odit vitae quia, doloribus quas voluptatum magni facilis quasi cumque tenetur fugiat minima. Nisi a delectus sed rem doloremque ex itaque illum deleniti nemo, ratione ut asperiores dicta, quidem optio labore! Eligendi, sit.
            </p>
        </section>
    </main>
)