import React, { Component } from "react";
import BoxCard from "./BoxCard";

class BoxesList extends Component {
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
            },
        ],
    };

    render() {
        return (
            <main className="cards">
                <BoxCard
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    title={this.state.persons[0].title}
                />
                <BoxCard
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    title={this.state.persons[1].title}
                />
                <BoxCard
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    title={this.state.persons[2].title}
                />
            </main>
        );
    }
}

export default BoxesList;