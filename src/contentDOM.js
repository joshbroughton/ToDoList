let content = () => {
    //defines the HTML elements that make up the content section of the main page
    let content = document.createElement("DIV");
    content.setAttribute("id", "content");

    let tempContent = document.createElement("P");
    tempContent.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
    content.appendChild(tempContent);

    return content;
}
export default content;