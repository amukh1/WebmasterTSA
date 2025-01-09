import './App.css';
import { useState, input } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";

import { Nav } from './Navbar';
import { Footer } from './components/footer'
import Work_Log from './Work_Log.pdf'
import Student_Copyright_Checklist from './Student_Copyright_Checklist.pdf'
import Citations from './Citations.pdf'

export function Reference(props) {
    return <div>
        <title>References | Vegan Villa</title>
        <Nav/>
        <div className="Reference">

<br/>
{/* <ul> */}
<h1 className="menutitlee">References</h1>
<ul>
        <li>
            <a href={Citations} target="_blank">MLA Citations (see below)</a>
        </li>
        <li>
            <a href={Work_Log} target="_blank">Work Log</a>
        </li>
        <li>
            <a href={Student_Copyright_Checklist} target="_blank">Student Copyright Checklist</a>
        </li>
    </ul>
<div className="section toppies">
        {/* <a href="https://github.com/amukh1/WebmasterTSA/blob/main/Citations.pdf">MLA Citations</a> */}

        <object data={Citations} type="application/pdf" width="100%" height="100%">
      <p>Work Log</p>
        </object>
</div>
    </div>
    <Footer/>
    </div>
}