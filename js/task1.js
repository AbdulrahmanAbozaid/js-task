const typing = num => {
    (num % 2) === 0 ? document.write(`${num} is even`) : document.write(`${num} is odd`);
}


/*using promise */

function typingAsync() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    resolve(
                        typing(8)
                    )
                }, 3000
            )
        }
    )
}

/* 0using awiat/async */

async function asyncedTyping() {
    document.write("wait untill finishing\n", "\n\n ending...\n\n");
    await typingAsync();
    document.write("\n\nDone")

}

asyncedTyping();