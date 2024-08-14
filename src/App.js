import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        const elements = document.querySelectorAll("p");
        elements.forEach((element) => {
            const text = element.textContent;
            const newText = text.replace(
                new RegExp(searchTerm, "gi"),
                '<span style="background-color: yellow;">$&</span>'
            );
            element.innerHTML = newText;
        });
    };

    useEffect(() => {
        // for debouncing
        setTimeout(() => {
            handleSearch();
        }, 2000);
    }, [searchTerm]);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
                Nullam varius, metus quis ullamcorper tempor, risus quam cursus
                felis, vel placerat mauris quam in nisl. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Sed tincidunt, lorem eget interdum suscipit, sapien
                nunc bibendum purus, at convallis ligula nunc eu leo. Maecenas
                consequat libero a eros facilisis, at egestas eros varius.
            </p>
        </div>
    );
}

export default App;
