import React, { useState } from "react";
import Title from "./comp/Title";
import UploadForm from "./comp/UploadForm";
import ImagesGrid from "./comp/ImagesGrid";
import Modal from "./comp/Modal";
import "./App.css";

const App = () => {
    const [ selectedImg, setSelectedImg ] = useState(null)

    return (
            <div className="App">
                <Title />
                <UploadForm />
                <ImagesGrid setSelectedImg={setSelectedImg} />
                { selectedImg &&
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                }
            </div>
    );
};

export default App;
