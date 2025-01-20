class Parent {
    protected secret: string = "Protected Secret";
}

class Child extends Parent {
    revealSecret(): string {
        return this.secret;
    }
}

const child = new Child();
console.log(child.revealSecret());