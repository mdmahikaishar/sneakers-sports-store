import React from "react";
import { Header, Main, PreviewerModal } from "../../component";
import "./Home.scss";

export default function Home() {
    return (
        <>
            <PreviewerModal />
            <Header />
            <Main />
        </>
    );
}
