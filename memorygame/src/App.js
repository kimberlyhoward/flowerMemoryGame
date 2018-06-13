import React, { Component } from 'react';
import './App.css';
import flowers from './flowers.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import FlowerCard from './components/FlowerCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        flowers: flowers,
        unselectedFlowers: flowers
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectFlower = bloom => {
        const findFlower = this.state.unselectedFlowers.find(item => item.bloom === bloom);

        if (findFlower === undefined) {
            // failure to select a new flower
            this.setState({
                message: "You all ready chose that one!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                flowers: flowers,
                unselectedflowers: flowers
            });
        }
        else {
            // success to select a new dog
            const newflowers = this.state.unselectedflowers.filter(item => item.bloom !== bloom);

            this.setState({
                message: "Good Job",
                curScore: this.state.curScore + 1,
                flowers: flowers,
                unselectedflowers: newflowers
            });
        }

        this.shuffleArray(flowers);
    };

    render() {
        return (
            <Wrapper>
                <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.flowers.map(flower => (
                        <FlowerCard
                            flower={flower.bloom}
                            image={flower.image}
                            selectFlower={this.selectFlower}
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;

