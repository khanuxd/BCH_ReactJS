import React, { Component } from "react";

import AnimalCard from "./AnimalCard";
import SearchBox from "../searchBox/SearchBox";

import "./animal.css";

import { myAnimalsList as animals } from "./animals";

class AnimalsList extends Component {

    state = {
        animals: animals,
        searchInput: "",
    };

    clickHandler = (name) => {
        alert("Hello, My name is " + name);
    };

    searchValueHandler = (event) => {
        // console.log("input was used");
        this.setState({
            searchInput: event.target.value,
        });
        console.log(this.state.searchInput);
    }

    render() {

        const animalFilter = this.state.animals.filter(animal => {
            return animal.name.toLowerCase().includes(this.state.searchInput.toLowerCase());
        });

        const animalslist = animalFilter.map((animal) => {
            return (
                <AnimalCard
                    name={animal.name}
                    img={animal.img}
                    key={animal.name}
                    clickme={() => this.clickHandler(animal.name)} />
            );
        });
        return (
            <div>
                <SearchBox search={this.searchValueHandler} />
                {/* <p>{this.state.searchInput}</p> */}
                <div className="animallist">
                    {animalslist}
                </div>
            </div>
        );
    }
}

export default AnimalsList;