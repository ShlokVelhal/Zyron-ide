function runCode() {
    let code = document.getElementById("code").value;
    let output = document.getElementById("output");

    output.innerText = "";

    let lines = code.split("\n");

    for (let line of lines) {
        line = line.trim();

        if (line.startsWith("print")) {
            let text = line.split('"')[1];
            output.innerText += text + "\n";
        }
        else if (line === "") {
            continue;
        }
        else {
            output.innerText += "Error: Unknown command → " + line + "\n";
        }
    }
}
