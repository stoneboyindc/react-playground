import React from "react";


class Tabs extends React.Component {
    static defaultProps = {
        tabs: [],
    };
    state = {
        currentTabIndex: 0
    };
    /* Below code is incorrect, but why??  */
    // renderButtons() {
    //     return this.props.tabs.map((tab, index) => (
    //         <button key={index} onClick={this.handleButtonClick(index)}>
    //             {tab.name}
    //         </button>
    //     ))
    // }
    // handleButtonClick = (index) => {
    //     console.log('button clicked!', { index })
    // }

    handleButtonClick(index) {
        console.log('button clicked!', { index });
        this.setState({ currentTabIndex: index })
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderButtons()}
                {this.props.tabs.length !== 0 && this.renderContent()}
            </div>
        )
    }
}

export default Tabs;