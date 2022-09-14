// Homework 3

//3.1
function concat(str1: string, str2: string): string {
    return str1 + str2;
}
const msg = concat('Hello', 'World');
//3.2

interface Homework {
    howIDoIt: string;

    simeArray: [string, string, number];

    withData: [{ howIDoIt: string, simeArray: [string, number] }]
}
const MyHometask: Homework = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}
//3.3

interface MyArray<T>{
    [N: number]: T
    
    reduce<U>(fn:(prevVal: T, currentVal: T, index: number, array: U) => U, init:U): U;
  }
  const value:number = 10;
  const myArr: MyArray<number> = [2, 4, 2];
  const result = myArr.reduce((accum: number, f:number, init:number) => accum + f, value);

  const myArr2: Array<number> = [2, 4, 2];
  
  
//3.4
interface IHomeTask {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}

const homeTask: MyPartial<IHomeTask> = {

    externalData: {

        value: 'win'

    }

}

type MyPartial<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]

}
  
//3.5
//3.6