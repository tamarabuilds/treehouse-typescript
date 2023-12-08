function shout(text: string): string {
    return text.toUpperCase();
};

type ShoutFn = (text: string) => string;

function scream(text: string, shout: ShoutFn): void {
    console.log(`${shout(text)}!!!`)
}

let shoutAgain: ShoutFn;

shoutAgain = (text) => text.toUpperCase();
shoutAgain('hi there');

scream('hello again', shout);