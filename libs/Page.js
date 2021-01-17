import { Component } from  'react'

class Page extends Component {
    constructor(props) {
        super(props)
    }

    getHeader() {
        return <div>Header</div>
    }

    getFooter() {
        return <div>Footer</div>
    }

    render() {
        var content = <div className="page-wrapper">
            {this.props.children}
        </div>

        return [this.getHeader(), content, this.getFooter()]
    }
}

export default Page