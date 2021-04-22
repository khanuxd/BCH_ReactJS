import React, { Component } from "react";
import Box from "./Box";

class Main extends Component {
    state = {
        persons: [
            {
                id: 1,
                name: "Khan",
                age: 25,
                title: "CEO",
            },
            {
                id: 2,
                name: "Smith",
                age: 31,
                title: "Designer",
            },
            {
                id: 3,
                name: "Ronn",
                age: 41,
                title: "Developer",
            },
            {
                id: 4,
                name: "Ronn",
                age: 41,
                title: "Developer",
            }
        ]
    };

    handleClick = () => {
        this.setState({
            persons: [
                {
                    name: "Test",
                    age: 25,
                    title: "CEO",
                },
                {
                    name: "My",
                    age: 31,
                    title: "Designer",
                },
                {
                    name: "Name",
                    age: 41,
                    title: "Developer",
                }
            ]
        });
    };

    render() {
        return (
            <main>
                <button onClick={this.handleClick}>Click Me on the main page</button>
                <div>
                    {this.state.persons.map(i => {
                        return <Box name={i.name} age={i.age} title={i.title} key={i.id} /> })
                        }
                    {/* <Box
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
                    /> */}
                </div>
            </main>
        )
    }
}

export default Main;