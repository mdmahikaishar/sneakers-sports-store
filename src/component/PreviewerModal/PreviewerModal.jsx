import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/App.jsx";
import { Previewer } from "../index";
import "./PreviewerModal.scss";

export default function PreviewerModal() {
    const appContext = useContext(AppContext);

    return appContext?.isPreviewerModalOpen ? (
        <div className="previewerModal">
            <Previewer modal />
        </div>
    ) : null;
}
