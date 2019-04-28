const thing = () => {

};

function whatever (target) {
	class X extends target {
		sayHello() {
			console.log('Hello!');
		}
	}

	return X;
}

function methodDecorator(target, key, descriptor) {
	console.log(key);
	return descriptor;
}

@whatever
class Hello {
	@methodDecorator
	method() {}
}

export default () => {
	const hello = new Hello();

	hello.sayHello();
};