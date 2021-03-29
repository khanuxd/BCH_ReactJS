import React, { Component } from "react";
import Box from "./Box";

class Main extends Component {
    state = {
        persons: [
            {
                name: "Khan",
                age: 25,
                title: "CEO",
            },
            {
                name: "Smith",
                age: 31,
                title: "Designer",
            },
            {
                name: "Ronn",
                age: 41,
                title: "Developer",
            }
        ]
    }

    render() {
        return (
            <main>
                <div>
                    <Box
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        title={this.state.persons[0].title}
                    />
                    <Box
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        title={this.state.persons[1].title}
                    />
                    <Box
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}
                        title={this.state.persons[2].title}
                    />
                </div>
            </main>
        )
    }
}

/* class Main extends Component {
    render() {
        return (
            <main>
                <div>
                    <Box name="Khan" age="31" title="CEO" />
                    <Box name="Matt" age="35" title="FullStack Developer" />
                    <Box name="Smith" age="25" title="Manager" />
                </div>
            </main>
        )
    }
} */

export default Main;