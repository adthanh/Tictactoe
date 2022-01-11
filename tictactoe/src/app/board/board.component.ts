import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares = [
    {
      id: 0,
      text: '',
    },
    {
      id: 1,
      text: '',
    },
    {
      id: 2,
      text: '',
    },
    {
      id: 3,
      text: '',
    },
    {
      id: 4,
      text: '',
    },
    {
      id: 5,
      text: '',
    },
    {
      id: 6,
      text: '',
    },
    {
      id: 7,
      text: '',
    },
    {
      id: 8,
      text: '',
    },
  ];
  xIsNext: boolean = true;
  winner: any = null;
  lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  constructor() {}

  ngOnInit() {}

  newGame() {
    this.squares = [
      {
        id: 0,
        text: '',
      },
      {
        id: 1,
        text: '',
      },
      {
        id: 2,
        text: '',
      },
      {
        id: 3,
        text: '',
      },
      {
        id: 4,
        text: '',
      },
      {
        id: 5,
        text: '',
      },
      {
        id: 6,
        text: '',
      },
      {
        id: 7,
        text: '',
      },
      {
        id: 8,
        text: '',
      },
    ];
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(data: { text: string }) {
    if (data.text == '') {
      data.text = this.player;
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
      // if (!this.winner) {
      //   this.computerMove();
      // }
    }
  }

  // let the computer make the next move
  computerMove() {
    let emptyCells: { text: string }[] = [];
    let random;

    this.squares.forEach((e) => {
      if (e.text === '') {
        emptyCells.push(e);
      }
    });

    random = Math.ceil(Math.random() * emptyCells.length) - 1;
    emptyCells[random].text = this.player;
    this.xIsNext = !this.xIsNext;
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    for (let i = 0; i < this.lines.length; i++) {
      const [a, b, c] = this.lines[i];
      if (
        this.squares[a].text &&
        this.squares[a].text === this.squares[b].text &&
        this.squares[a].text === this.squares[c].text
      ) {
        return this.squares[a].text;
      }
    }
    return null;
  }
}
