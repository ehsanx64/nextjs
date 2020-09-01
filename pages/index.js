import { Component } from 'react'
import 'react-dom'
import Page from '../modules/Page'

class HomePage extends Page {
    constructor(props) {
        super(props)
        console.log('new')

        this.state = {
            title: 'Default'
        }
    }

    componentWillMount() {
        console.log('mount');
    }

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        console.log('render')
        return <Page>
            <h1>Welcome to Next.js!</h1>
            <p><a href="/about">{this.state.title}</a></p>
        </Page>
    }
}

export default HomePage