import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "react-bootstrap/Card";

import placeholder from "./img/placeholder.png"

function GalleryImage() {
    return (
        <Card>
            <Card.Img
                variant="top"
                src={placeholder}
            ></Card.Img>
            <Card.Body>
                <Card.Text>Example</Card.Text>
            </Card.Body>
        </Card>
    );
}

function App() {
    return (
        <div className="App">
            <h1>First category</h1>
            <div className="gallery">
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
            </div>
            <hr></hr>
            <h1>Second category</h1>
            <div className="gallery">
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
            </div>
            <hr></hr>
            <h1>Third category</h1>
            <div className="gallery">
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
                <GalleryImage />
            </div>
            <hr></hr>
        </div>
    );
}

export default App;
