class PrivateExample {
    private secret: string = "This is Private!";

    revealSecret(): string {
        return this.secret;
    }
}

const privateObj = new PrivateExample();
console.log(privateObj.revealSecret());