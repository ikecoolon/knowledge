function test(event) {
    console.log(event.target.tagName);
}

    document.querySelector('body').addEventListener('click', test, false);


