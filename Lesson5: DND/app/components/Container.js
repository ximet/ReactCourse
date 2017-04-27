
import React, { Component } from 'react';
import update from 'react/lib/update';
import Card from './Card';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const style = {
    display: 'flex'
};

const subElementStyle = {
    width: 350
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.moveCard2 = this.moveCard2.bind(this);
        this.moveCard3 = this.moveCard3.bind(this);


        this.state = {
            cards: [{
                id: 1,
                text: 'First'
            }, {
                id: 2,
                text: 'Second'
            }, {
                id: 3,
                text: 'Third'
            }, {
                id: 4,
                text: 'I have some question'
            }, {
                id: 5,
                text: 'Lorem Ipsum'
            }, {
                id: 6,
                text: 'null'
            }, {
                id: 7,
                text: 'UNDEFINED'
            }],
            cards2: [{
                id: 1,
                text: 'First'
            }, {
                id: 2,
                text: 'Second'
            }, {
                id: 3,
                text: 'Third'
            }, {
                id: 4,
                text: 'I have some question'
            }, {
                id: 5,
                text: 'Lorem Ipsum'
            }, {
                id: 6,
                text: 'null'
            }, {
                id: 7,
                text: 'UNDEFINED'
            }],
            cards3: [{
                id: 1,
                text: 'First'
            }, {
                id: 2,
                text: 'Second'
            }, {
                id: 3,
                text: 'Third'
            }, {
                id: 4,
                text: 'I have some question'
            }, {
                id: 5,
                text: 'Lorem Ipsum'
            }, {
                id: 6,
                text: 'null'
            }, {
                id: 7,
                text: 'UNDEFINED'
            }]
        };
    }

    moveCard1(dragIndex, hoverIndex, cardz) {
        console.log('dragIndex: ', dragIndex, 'hoverIndex:', hoverIndex);
        const { cards } = this.state;
        const dragCard = cards[dragIndex];

        this.setState(update(this.state, {
            cards: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }
    moveCard2(dragIndex, hoverIndex) {
        const { cards2 } = this.state;
        const dragCard = cards2[dragIndex];

        this.setState(update(this.state, {
            cards2: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }
    moveCard3(dragIndex, hoverIndex) {
        const { cards3 } = this.state;
        const dragCard = cards3[dragIndex];

        this.setState(update(this.state, {
            cards3: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));
    }

    render() {
        const { cards, cards2, cards3 } = this.state;

        return (
            <div style={style}>
                <div style={subElementStyle}>
                    {cards.map((card, i) => {
                        return (
                            <Card key={card.id}
                                  index={i}
                                  id={card.id}
                                  text={card.text}
                                  moveCard={this.moveCard1.bind(this)} />
                        );
                    })}
                </div>
                <div style={subElementStyle}>
                    {cards2.map((card, i) => {
                        return (
                            <Card key={card.id}
                                  index={i}
                                  id={card.id}
                                  text={card.text}
                                  moveCard={this.moveCard2} />
                        );
                    })}
                </div>
                <div style={subElementStyle}>
                    {cards3.map((card, i) => {
                        return (
                            <Card key={card.id}
                                  index={i}
                                  id={card.id}
                                  text={card.text}
                                  moveCard={this.moveCard3} />
                        );
                    })}
                </div>
            </div>


        );
    }
}
